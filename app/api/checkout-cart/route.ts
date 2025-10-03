// app/api/checkout-cart/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure we use the Node runtime (Stripe SDK requires Node)
export const runtime = "nodejs";

// Cart item shape – tolerant to several field names we saw in the app
// (so TypeScript doesn't complain when we normalize in code)
type CartItem = {
  kind?: "merch" | "trip";
  id?: string;
  name?: string;
  variant_name?: string; // display name for variant
  // Either provide a Stripe Price…
  priceId?: string;
  // …or provide raw amount/currency using any of these keys:
  unit_amount_cents?: number;
  unit_cents?: number;
  price_cents?: number;
  unitAmountCents?: number;
  priceCents?: number;
  currency?: string; // e.g. "usd"
  // misc
  qty?: number;
  product_id?: string;
  trip_key?: string;
  option?: string;
};

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    // Parse body safely
    let body: any;
    try {
      body = await req.json();
    } catch (err) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const items: CartItem[] = Array.isArray(body?.items) ? body.items : [];
    if (!items.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const STRIPE_SECRET_KEY = requireEnv("STRIPE_SECRET_KEY");
    const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    // Omit apiVersion to avoid literal mismatch typing errors between SDK and types
    const stripe = new Stripe(STRIPE_SECRET_KEY, {});

    // Build Stripe line items tolerating multiple cart shapes
    const line_items = items.map((it) => {
      const quantity = Math.max(1, Number(it?.qty || 1));

      // 1) Prefer a Stripe Price if present
      if (it?.priceId) {
        return { price: it.priceId, quantity } as Stripe.Checkout.SessionCreateParams.LineItem;
      }

      // 2) Otherwise, construct price_data from raw amount/currency
      const amount = Number(
        it?.unit_amount_cents ?? it?.unit_cents ?? it?.price_cents ?? it?.unitAmountCents ?? it?.priceCents
      );
      if (!Number.isFinite(amount)) {
        throw new Error("Invalid cart item: missing amount (unit_amount_cents/price_cents)");
      }

      const currency = String(
        it?.currency ?? (it as any)?.unit_currency ?? (it as any)?.currency_code ?? (it as any)?.currencyCode ?? "usd"
      ).toLowerCase();

      const name = it?.name || it?.variant_name || `Item ${it?.id ?? ""}`;

      return {
        quantity,
        price_data: {
          currency,
          unit_amount: Math.round(amount),
          product_data: {
            name,
            metadata: {
              kind: (it?.kind as string) || "merch",
              variant_id: it?.id ?? "",
            },
          },
        },
      } as Stripe.Checkout.SessionCreateParams.LineItem;
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      allow_promotion_codes: true,
      line_items,
      success_url: `${APP_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${APP_URL}/cart?status=cancel`,
      metadata: {
        kind: "merch",
        item_count: String(items.length),
        variant_ids: items.map((it) => (it?.id ?? it?.priceId ?? "")).join(","),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error("[checkout-cart]", e);
    const msg = typeof e?.message === "string" ? e.message : "Checkout failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}