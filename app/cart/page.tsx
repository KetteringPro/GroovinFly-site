// app/cart/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { type CartItem, getCart, removeItem, clearCart } from "@/lib/cartClient";

export default function Page() {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart on mount
  useEffect(() => {
    setItems(getCart());
  }, []);

  const total = useMemo(
    () => items.reduce((sum, it) => sum + it.unit_amount_cents * it.qty, 0) / 100,
    [items]
  );

  async function onCheckout() {
    const res = await fetch("/api/checkout-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const json = await res.json();
    if (!res.ok) {
      alert(json.error || "Checkout failed");
      return;
    }
    window.location.href = json.url;
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <p className="opacity-70">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {items.map((it) => (
              <div
                key={`${it.kind}:${it.id}`}
                className="flex items-center justify-between border rounded-xl p-3"
              >
                <div>
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-sm opacity-70">
                    {it.qty} × ${(it.unit_amount_cents / 100).toFixed(2)} {it.currency.toUpperCase()}
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeItem(it.kind, it.id);
                    setItems(getCart());
                  }}
                  className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2 border-t">
              <div className="text-lg font-semibold">Total</div>
              <div className="text-lg font-semibold">${total.toFixed(2)}</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onCheckout}
                className="px-5 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white"
              >
                Checkout
              </button>
              <button
                onClick={() => {
                  clearCart();
                  setItems([]);
                }}
                className="px-5 py-3 rounded-xl bg-neutral-200 hover:bg-neutral-300"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}