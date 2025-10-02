

// app/api/checkout-cart/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure we use the Node runtime (Stripe SDK requires Node)
export const runtime = "nodejs";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  console.warn("[checkout-cart] Missing STRIPE_SECRET_KEY env var");
}

// Omit apiVersion to avoid type mismatch errors if your stripe typings differ
const stripe = new Stripe(STRIPE_SECRET_KEY as string, {});

type CartItem = {
  kind: "merch" | "trip";
  id: string;
  name: string;
  unit_amount_cents: number;
  currency?: string; // default 'usd'
  qty?: number; // default 1
  product_id?: string;
  trip_key?: string;
  option?: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = (Array.isArray(body.items) ? body.items : []) as CartItem[];

    if (!items.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((it) => ({
      quantity: Math.max(1, Number(it.qty || 1)),
      price_data: {
        currency: (it.currency || "usd").toLowerCase(),
        unit_amount: Math.max(0, Number(it.unit_amount_cents || 0)),
        product_data: {
          name: it.name,
          metadata: {
            kind: it.kind,
            id: it.id,
            product_id: it.product_id || "",
            trip_key: it.trip_key || "",
            option: it.option || "",
          },
        },
      },
    }));

    const origin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/cart?status=success` ,
      cancel_url: `${origin}/cart?status=cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Checkout failed" },
      { status: 500 }
    );
  }
}