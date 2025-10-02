// app/api/stripe-webhook/route.ts
import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { supabaseServer } from "@/lib/supabaseServer";
import { createPrintfulOrder } from "@/lib/printful";
import type { PrintfulItem } from "@/lib/printful";

export const runtime = "nodejs"; // ensure Node (not edge) so we can verify signature

export async function POST(req: Request) {
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

  // We will fetch full line items to read line-level metadata
  const sessionId = session.id as string;
  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { limit: 100 });

  // Filter for merch items only (we set metadata.kind = 'merch' when creating the session)
  const merchLines = (lineItems.data || []).filter((li: any) => li?.price?.metadata?.kind === "merch");
  if (merchLines.length === 0) {
    return NextResponse.json({ ok: true, message: "No merch in this session" });
  }

  // Shipping (require address collection on the session)
  const cd = session.customer_details || {};
  const addr = cd.address || {};
  const name = cd.name || "";
  const email = cd.email || "";
  const phone = cd.phone || undefined;

  // Build cart lines: get our variant UUIDs from metadata
  const wanted: Array<{ variantId: string; qty: number }> = [];
  for (const li of merchLines) {
    const qty = li.quantity || 1;
    const variantId = li.price?.metadata?.variant_id as string | undefined;
    if (variantId) wanted.push({ variantId, qty });
  }

  if (wanted.length === 0) {
    return NextResponse.json({ ok: true, message: "No merch variant IDs present" });
  }

  // Lookup Printful sync IDs from Supabase
  const ids = wanted.map((w) => w.variantId);
  const { data: rows, error } = await supabaseServer
    .from("product_variants")
    .select("id, printful_sync_variant_id")
    .in("id", ids);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const map = new Map<string, string>();
  for (const r of rows || []) {
    if (r.printful_sync_variant_id) map.set(r.id, String(r.printful_sync_variant_id));
  }

  // Build Printful items (support numeric sync_variant_id or string external_variant_id)
  const items: PrintfulItem[] = [];
  for (const w of wanted) {
    const raw = map.get(w.variantId); // string from Supabase
    if (!raw) continue; // skip if we couldn't map the variant
    const n = Number(raw);
    if (Number.isFinite(n)) {
      items.push({ sync_variant_id: n, quantity: w.qty });
    } else {
      items.push({ external_variant_id: String(raw), quantity: w.qty });
    }
  }

  if (items.length === 0) {
    return NextResponse.json({ error: "No printful_sync_variant_id mapping found for merch items" }, { status: 400 });
  }

  // Create Printful order (confirm immediately for MVP)
  try {
    const order = await createPrintfulOrder({
      external_id: sessionId, // dedupe key
      recipient: {
        name,
        email,
        phone,
        address1: addr.line1 || "",
        city: addr.city || "",
        state_code: addr.state || "",
        country_code: addr.country || "",
        zip: addr.postal_code || "",
      },
      items,
      shipping: "STANDARD",
      confirm: true,
      packing_slip: { email, message: "Thanks for Groovin’ with us! 💃" },
    });

    return NextResponse.json({ ok: true, printful_order: order });
  } catch (e: any) {
    return NextResponse.json({ error: `Printful error: ${e?.message || "unknown"}` }, { status: 500 });
  }
}