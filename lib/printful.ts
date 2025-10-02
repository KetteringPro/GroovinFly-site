// lib/printful.ts
// Server-only helper for Printful Orders API
// Docs: https://developers.printful.com/docs/#tag/Orders

type PrintfulRecipient = {
  name: string;
  address1: string;
  city: string;
  state_code?: string;
  country_code: string; // e.g. "US"
  zip: string;
  phone?: string;
  email?: string;
};

type PrintfulItem =
  | {
      // Use this when you have the numeric Printful sync variant id
      sync_variant_id: number;
      quantity: number;
      retail_price?: string; // optional, e.g. "29.99"
    }
  | {
      // Use this when you store a string identifier for the variant
      external_variant_id: string;
      quantity: number;
      retail_price?: string; // optional, e.g. "29.99"
    };

type CreateOrderInput = {
  external_id: string;            // your own order id (e.g. Stripe session id)
  recipient: PrintfulRecipient;
  items: PrintfulItem[];
  shipping?: "STANDARD" | "EXPRESS" | "ECONOMY"; // default STANDARD
  packing_slip?: {
    email?: string;
    message?: string;
  };
  confirm?: boolean;              // when true, submits for fulfillment immediately
};

// Minimal client
const BASE = "https://api.printful.com";

function getKey() {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) throw new Error("PRINTFUL_API_KEY is not set");
  return key;
}

async function pfFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getKey()}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    // IMPORTANT: Next 14 fetch caching behavior
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Printful ${path} failed: ${res.status} ${text}`);
  }
  // Printful responses are { code, result, extra? }
  const data = (await res.json()) as { result: T };
  return data.result;
}

export async function createPrintfulOrder(input: CreateOrderInput) {
  // See: https://developers.printful.com/docs/#operation/CreateOrder
  return pfFetch("/orders", {
    method: "POST",
    body: JSON.stringify({
      external_id: input.external_id,
      recipient: input.recipient,
      items: input.items,
      shipping: input.shipping || "STANDARD",
      packing_slip: input.packing_slip,
      confirm: input.confirm ?? false, // default: create as draft (not confirmed)
    }),
  });
}

// Confirm a Printful order by ID
export async function confirmPrintfulOrder(orderId: number | string) {
  // See: https://developers.printful.com/docs/#operation/ConfirmOrder
  return pfFetch(`/orders/${orderId}/confirm`, {
    method: "POST",
  });
}

// Cancel a Printful order by ID
export async function cancelPrintfulOrder(orderId: number | string) {
  // See: https://developers.printful.com/docs/#operation/CancelOrder
  return pfFetch(`/orders/${orderId}`, {
    method: "DELETE",
  });
}

export async function getPrintfulOrderByExternalId(externalId: string) {
  // See: https://developers.printful.com/docs/#operation/GetOrders
  return pfFetch(`/orders?external_id=${encodeURIComponent(externalId)}`);
}

export type { PrintfulRecipient, PrintfulItem, CreateOrderInput };