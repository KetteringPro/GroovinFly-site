// app/api/checkout/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import Stripe from "stripe";

function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val || val.trim() === "") {
    throw new Error(`Missing required env: ${name}`);
  }
  return val;
}

export async function POST(req: Request) {
  try {
    const STRIPE_SECRET_KEY = requireEnv("STRIPE_SECRET_KEY");
    const NEXT_PUBLIC_APP_URL = requireEnv("NEXT_PUBLIC_APP_URL");

    const stripe = new Stripe(STRIPE_SECRET_KEY);

    const { variantId, qty = 1, promoToken } = (await req.json()) as {
      variantId?: string;
      qty?: number;
      promoToken?: string;
    };
    if (!variantId) throw new Error("Missing variantId");

    const { data: variant, error: vErr } = await supabaseServer
      .from("product_variants")
      .select("id,variant_name,price_cents,currency,product_id,active")
      .eq("id", variantId)
      .single();
    if (vErr) throw new Error(`Variant query failed: ${vErr.message}`);
    if (!variant) throw new Error("Variant not found");
    if (!variant.active) throw new Error("Variant is inactive");

    const { data: product, error: pErr } = await supabaseServer
      .from("products")
      .select("name,active")
      .eq("id", variant.product_id)
      .single();
    if (pErr) throw new Error(`Product query failed: ${pErr.message}`);
    if (!product) throw new Error("Product not found");
    if (!product.active) throw new Error("Product is inactive");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      line_items: [
        {
          quantity: qty,
          price_data: {
            currency: variant.currency || "usd",
            unit_amount: variant.price_cents,
            product_data: {
              name: `${product.name} — ${variant.variant_name}`,
            },
          },
        },
      ],
      success_url: `${NEXT_PUBLIC_APP_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${NEXT_PUBLIC_APP_URL}/merch?canceled=1`,
      metadata: { kind: "merch", variant_id: variantId, product_variant_id: variantId, promoToken: promoToken || "" },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 400 });
  }
}