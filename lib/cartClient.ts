// lib/cartClient.ts
"use client";

export type CartItem = {
  kind: "merch" | "trip";
  id: string;
  name: string;
  unit_amount_cents: number;
  currency: string;
  qty: number;
  product_id?: string;
  metadata?: Record<string, any>;
};

const STORAGE_KEY = "cart";

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setCartItems(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  // notify any listeners (badges, etc.)
  window.dispatchEvent(new Event("storage"));
  window.dispatchEvent(new CustomEvent("cart:updated"));
}

export function addItemToCart(item: CartItem) {
  const items = getCartItems();
  const idx = items.findIndex((i) => i.kind === item.kind && i.id === item.id);
  if (idx >= 0) {
    items[idx].qty += item.qty;
  } else {
    items.push(item);
  }
  setCartItems(items);
}

export function clearCart() {
  setCartItems([]);
}

export function getCartCount(): number {
  return getCartItems().reduce((sum, i) => sum + (i.qty || 0), 0);
}

// Convenience alias used by pages/components expecting `getCart()`
export function getCart(): CartItem[] {
  return getCartItems();
}

// Remove a single item (by kind + id). If the item is not found, this is a no-op.
export function removeItem(kind: CartItem["kind"], id: string) {
  const items = getCartItems();
  const next = items.filter((i) => !(i.kind === kind && i.id === id));
  setCartItems(next);
}

// Subscribe to cart changes (same-tab and cross-tab). Returns an unsubscribe.
export function subscribeCart(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const onChange = () => cb();
  // Our custom event fired by setCartItems
  window.addEventListener("cart:updated", onChange);
  // Also listen to native storage events (changes from other tabs)
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener("storage", onStorage);

  // Fire once so subscribers can sync immediately
  try { cb(); } catch {}

  return () => {
    window.removeEventListener("cart:updated", onChange);
    window.removeEventListener("storage", onStorage);
  };
}