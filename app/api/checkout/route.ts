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
      const quantity = Math.max(1, Number((it as any).qty || 1));

      // 1) If a Stripe priceId is provided, use it directly
      if ((it as any).priceId) {
        return { price: (it as any).priceId, quantity } as Stripe.Checkout.SessionCreateParams.LineItem;
      }

      // 2) Otherwise build price_data from cart values (tolerate various naming)
      const amount = Number(
        (it as any).unit_amount_cents ??
        (it as any).unit_cents ??
        (it as any).price_cents ??
        (it as any).unitAmountCents ??
        (it as any).priceCents
      );

      const currencyRaw =
        (it as any).currency ??
        (it as any).unit_currency ??
        (it as any).currency_code ??
        (it as any).currencyCode ??
        "usd";

      if (!Number.isFinite(amount)) {
        throw new Error("Invalid cart item: missing amount (unit_amount_cents/price_cents)");
      }

      const currency = String(currencyRaw).toLowerCase();

      const name =
        (it as any).name ||
        (it as any).variant_name ||
        (it as any).variantName ||
        `Item ${(it as any).id ?? ""}`;

      return {
        quantity,
        price_data: {
          currency,
          unit_amount: Math.round(amount),
          product_data: {
            name,
            metadata: {
              kind: "merch",
              variant_id: (it as any).id ?? "",
            },
          },
        },
      } as Stripe.Checkout.SessionCreateParams.LineItem;
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