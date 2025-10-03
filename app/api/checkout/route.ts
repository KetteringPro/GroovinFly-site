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

    let body: any = null;
    try {
      body = await req.json();
    } catch (parseErr) {
      console.error("[checkout-cart] JSON parse error", parseErr);
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const items = Array.isArray(body?.items) ? body.items : [];
    if (items.length === 0) {
      console.error("[checkout-cart] Empty items array", body);
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const line_items = items.map((it: any) => {
      const quantity = Math.max(1, Number(it?.qty || 1));

      // Prefer a Stripe Price if present
      if (it?.priceId) {
        return { price: it.priceId, quantity } as Stripe.Checkout.SessionCreateParams.LineItem;
      }

      // Build price_data from various naming conventions
      const amount = Number(
        it?.unit_amount_cents ?? it?.unit_cents ?? it?.price_cents ?? it?.unitAmountCents ?? it?.priceCents
      );
      if (!Number.isFinite(amount)) {
        throw new Error("Invalid cart item: missing amount (unit_amount_cents/price_cents)");
      }

      const currency = String(
        it?.currency ?? it?.unit_currency ?? it?.currency_code ?? it?.currencyCode ?? 'usd'
      ).toLowerCase();

      const name = it?.name || it?.variant_name || it?.variantName || `Item ${it?.id ?? ''}`;

      return {
        quantity,
        price_data: {
          currency,
          unit_amount: Math.round(amount),
          product_data: {
            name,
            metadata: { kind: 'merch', variant_id: it?.id ?? '' },
          },
        },
      } as Stripe.Checkout.SessionCreateParams.LineItem;
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      line_items,
      allow_promotion_codes: true,
      success_url: `${APP_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${APP_URL}/cart?status=cancel`,
      metadata: {
        kind: 'merch',
        item_count: String(items.length),
        variant_ids: items.map((it: any) => it?.id ?? it?.priceId ?? '').join(','),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error('[checkout-cart] Fatal', e);
    // Return 400 with message so the browser shows a helpful error instead of a generic 500
    return NextResponse.json({ error: e?.message || 'Checkout failed' }, { status: 400 });
  }
}