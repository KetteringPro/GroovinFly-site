// app/api/checkout-cart/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Stripe from "stripe";

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const STRIPE_SECRET_KEY = env("STRIPE_SECRET_KEY");
    const APP_URL = env("NEXT_PUBLIC_APP_URL");
    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2025-08-27.basil' as Stripe.LatestApiVersion });

    const body = (await req.json()) as {
      items: Array<{
        id?: string;
        priceId?: string;
        qty?: number;
        name?: string;
        variant_name?: string;
        unit_amount_cents?: number;
        currency?: string;
      }>;
    };

    const items = Array.isArray(body.items) ? body.items : [];
    if (items.length === 0) throw new Error("Cart is empty");

    const line_items = items.map((it) => {
      const quantity = Math.max(1, Number(it.qty || 1));
      if (it.priceId) {
        return { price: it.priceId, quantity } as Stripe.Checkout.SessionCreateParams.LineItem;
      }
      if (typeof it.unit_amount_cents === "number" && it.currency) {
        return {
          quantity,
          price_data: {
            currency: (it.currency || "usd").toLowerCase(),
            unit_amount: it.unit_amount_cents,
            product_data: {
              name: it.name || it.variant_name || `Item ${it.id ?? ""}`,
              metadata: {
                kind: "merch",
                variant_id: it.id ?? "",
              },
            },
          },
        } as Stripe.Checkout.SessionCreateParams.LineItem;
      }
      throw new Error("Invalid cart item: missing priceId or unit_amount_cents/currency");
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      line_items,
      allow_promotion_codes: true,
      success_url: `${APP_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${APP_URL}/cart?status=cancel`,
      metadata: {
        kind: "merch",
        item_count: String(items.length),
        variant_ids: items.map((it) => it.id ?? it.priceId ?? "").join(","),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error("[checkout-cart]", e);
    return NextResponse.json({ error: e?.message || "Checkout failed" }, { status: 400 });
  }
}