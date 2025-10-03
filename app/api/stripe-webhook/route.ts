// app/api/stripe-webhook/route.ts
import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { supabaseServer } from "@/lib/supabaseServer";
import { createPrintfulOrder } from "@/lib/printful";
import type { PrintfulItem } from "@/lib/printful";
import type Stripe from "stripe";

export const runtime = "nodejs"; // ensure Node (not edge) so we can verify signature

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error("[checkout-cart] Missing STRIPE_SECRET_KEY env var");
    return new Response("Server misconfigured: STRIPE_SECRET_KEY", { status: 500 });
  }
  const stripe = getStripe();

  const sig = req.headers.get("stripe-signature");
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !whSecret) {
    return NextResponse.json({ error: "Missing Stripe signature or webhook secret" }, { status: 400 });
  }

  // Stripe needs the *raw* body
  const rawBody = await req.text();

  let evt: any;
  try {
    evt = stripe.webhooks.constructEvent(rawBody, sig, whSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Invalid signature: ${err.message}` }, { status: 400 });
  }

  if (evt.type !== "checkout.session.completed") {
    // ignore everything else
    return NextResponse.json({ ok: true, ignored: evt.type });
  }

  const session = evt.data.object as any;

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { expand: ["data.price.product"] });

  const items: PrintfulItem[] = [];

  for (const li of lineItems.data) {
    const product = li.price?.product as Stripe.Product | null;
    const meta = product?.metadata as Record<string, string> | undefined;
    const variantId = meta?.variant_id;
    const qty = li.quantity || 1;
    if (variantId) {
      const { data: row, error } = await supabaseServer
        .from("product_variants")
        .select("id, printful_sync_variant_id")
        .eq("id", variantId)
        .single();
      if (!error && row?.printful_sync_variant_id) {
        items.push({ sync_variant_id: Number(row.printful_sync_variant_id), quantity: qty });
      }
    }
  }

  if (items.length === 0) {
    return NextResponse.json({ error: "No valid items found" }, { status: 400 });
  }

  const shipping = session.shipping_details;
  if (!shipping?.address) {
    return NextResponse.json({ error: "Missing shipping address" }, { status: 400 });
  }
  const recipient = {
    name: shipping.name || "",
    email: session.customer_details?.email || "",
    phone: session.customer_details?.phone || "",
    address1: shipping.address.line1 || "",
    address2: shipping.address.line2 || "",
    city: shipping.address.city || "",
    state_code: shipping.address.state || "",
    country_code: shipping.address.country || "",
    zip: shipping.address.postal_code || "",
  };

  // Create Printful order (confirm immediately for MVP)
  try {
    const order = await createPrintfulOrder({
      external_id: session.id, // dedupe key
      recipient,
      items,
      shipping: "STANDARD",
      confirm: true,
      packing_slip: { email: recipient.email, message: "Thanks for Groovin’ with us! 💃" },
    });

    return NextResponse.json({ ok: true, printful_order: order });
  } catch (e: any) {
    return NextResponse.json({ error: `Printful error: ${e?.message || "unknown"}` }, { status: 500 });
  }
}