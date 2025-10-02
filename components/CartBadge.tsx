"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartCount } from "@/lib/cartClient";

export function CartBadge() {
  const [count, setCount] = useState<number>(0);

useEffect(() => {
  const update = () => setCount(getCartCount());

  // initial
  update();

  // our cart client fires this on any change
  window.addEventListener("cart:updated", update);

  // cross-tab sync (matches your STORAGE_KEY = "cart")
  const onStorage = (e: StorageEvent) => {
    if (e.key === "cart") update();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener("cart:updated", update);
    window.removeEventListener("storage", onStorage);
  };
}, []);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-200 hover:bg-neutral-300 text-black"
    >
      <span>Bag</span>
      <span className="min-w-6 h-6 px-2 rounded-full bg-fuchsia-600 text-white text-sm flex items-center justify-center">
        {count}
      </span>
    </Link>
  );
}