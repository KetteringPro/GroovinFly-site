// app/api/checkout-cart/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure we use the Node runtime (Stripe SDK requires Node)
export const runtime = "nodejs";

// NOTE: Set NEXT_PUBLIC_APP_URL to your production origin (e.g., https://groovinfly.com)
// so success/cancel redirects send users back to the live site.

// Shipping rules: $5.99 flat, free over $75
const SHIPPING_FLAT_CENTS = 599;
const FREE_SHIPPING_THRESHOLD_CENTS = 7500;

// Cart item shape – tolerant to several field names we saw in the app
// (so TypeScript doesn't complain when we normalize in code)
type CartItem = {
  kind?: "merch" | "trip";
  id?: string;
  name?: string;
  variant_name?: string; // display name for variant
  image_url?: string; // product/variant image for Stripe Checkout line item
  description?: string; // short description for the variant
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

    // Compute subtotal (in cents) and establish a session currency (assumes a single currency cart)
    let subtotalCents = 0;
    let sessionCurrency = "usd" as string;

    for (const it of items) {
      const quantity = Math.max(1, Number((it as any)?.qty || 1));

      if ((it as any)?.priceId) {
        // Look up price to get unit amount & currency
        const price = await stripe.prices.retrieve(String((it as any).priceId));
        const unit = Number(price.unit_amount ?? 0);
        const curr = String(price.currency || "usd").toLowerCase();
        if (!subtotalCents) sessionCurrency = curr;
        subtotalCents += unit * quantity;
      } else {
        const unit = Number(
          (it as any)?.unit_amount_cents ?? (it as any)?.unit_cents ?? (it as any)?.price_cents ?? (it as any)?.unitAmountCents ?? (it as any)?.priceCents
        );
        if (!Number.isFinite(unit)) {
          throw new Error("Invalid cart item: missing amount (unit_amount_cents/price_cents)");
        }
        const curr = String(
          (it as any)?.currency ?? (it as any)?.unit_currency ?? (it as any)?.currency_code ?? (it as any)?.currencyCode ?? "usd"
        ).toLowerCase();
        if (!subtotalCents) sessionCurrency = curr;
        subtotalCents += Math.round(unit) * quantity;
      }
    }

    // Build shipping options: $5.99 flat under $75; free shipping at $75+
    const shipping_options_dynamic: Stripe.Checkout.SessionCreateParams.ShippingOption[] =
      subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS
        ? [
            {
              shipping_rate_data: {
                display_name: "Free shipping",
                type: "fixed_amount",
                fixed_amount: { amount: 0, currency: sessionCurrency },
              },
            },
          ]
        : [
            {
              shipping_rate_data: {
                display_name: "Standard shipping",
                type: "fixed_amount",
                fixed_amount: { amount: SHIPPING_FLAT_CENTS, currency: sessionCurrency },
              },
            },
          ];

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

      const name = (it?.variant_name && it?.name)
        ? `${it.name} – ${it.variant_name}`
        : (it?.variant_name || it?.name || `Item ${it?.id ?? ""}`);

      return {
        quantity,
        price_data: {
          currency,
          unit_amount: Math.round(amount),
          product_data: {
            name,
            description: it?.description || undefined,
            images: it?.image_url ? [String(it.image_url)] : undefined,
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
      // Let Stripe compute tax automatically where supported
      automatic_tax: { enabled: true },
      // Optional shipping options using predefined Shipping Rate IDs from Dashboard
      // Set STRIPE_SHIPPING_RATE_US / STRIPE_SHIPPING_RATE_CA in your env if you want labeled rates
      shipping_options: shipping_options_dynamic,
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