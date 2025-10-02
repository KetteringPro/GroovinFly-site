// app/api/printful/create-order/route.ts
import { NextResponse } from "next/server";
import { createPrintfulOrder, type PrintfulItem, type PrintfulRecipient } from "@/lib/printful";
import { supabaseServer } from "@/lib/supabaseServer";

/**
 * Expected POST body (example):
 * {
 *   "external_id": "stripe_cs_123",      // Stripe session id or your order id
 *   "customer": {
 *     "name": "Jane Doe",
 *     "email": "jane@example.com",
 *     "phone": "+1 555-555-5555",
 *     "address1": "123 Main St",
 *     "city": "Austin",
 *     "state_code": "TX",
 *     "country_code": "US",
 *     "zip": "78701"
 *   },
 *   "cart": [
 *     { "variant_id": "uuid-from-our-db", "qty": 1 },
 *     { "variant_id": "uuid-from-our-db-2", "qty": 2 }
 *   ]
 * }
 *
 * We map your internal variant_id -> Printful sync_variant_id from DB.
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const external_id: string = body.external_id;
    if (!external_id) {
      return NextResponse.json({ error: "external_id is required" }, { status: 400 });
    }

    const c = body.customer || {};
    const recipient: PrintfulRecipient = {
      name: c.name,
      email: c.email,
      phone: c.phone,
      address1: c.address1,
      city: c.city,
      state_code: c.state_code,
      country_code: c.country_code,
      zip: c.zip,
    };

    const cart: Array<{ variant_id: string; qty: number }> = Array.isArray(body.cart) ? body.cart : [];
    if (cart.length === 0) {
      return NextResponse.json({ error: "cart is empty" }, { status: 400 });
    }

    // 1) Look up Printful sync_variant_id for each variant in our DB
    // Assumes your table public.product_variants has column printful_sync_variant_id (int)
    const variantIds = cart.map((x) => x.variant_id);

    const { data: rows, error: vErr } = await supabaseServer
      .from("product_variants")
      .select("id, printful_sync_variant_id")
      .in("id", variantIds);

    if (vErr) throw vErr;

    const map = new Map<string, number>();
    (rows || []).forEach((r) => {
      if (r.printful_sync_variant_id) map.set(r.id, Number(r.printful_sync_variant_id));
    });

    const items: PrintfulItem[] = [];
    for (const line of cart) {
      const syncId = map.get(line.variant_id);
      if (!syncId) {
        return NextResponse.json(
          { error: `Variant ${line.variant_id} missing printful_sync_variant_id` },
          { status: 400 },
        );
      }
      items.push({ sync_variant_id: syncId, quantity: Math.max(1, Number(line.qty || 1)) });
    }

    // 2) Create the Printful order (confirm immediately for MVP)
    const result = await createPrintfulOrder({
      external_id,
      recipient,
      items,
      shipping: "STANDARD",
      confirm: true,
      packing_slip: { email: c.email, message: "Thanks for Groovin’ with us! 💃" },
    });

    return NextResponse.json({ ok: true, order: result });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}