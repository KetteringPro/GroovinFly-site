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
      className="relative inline-flex items-center justify-center rounded-lg p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition"
      aria-label="Cart"
    >
      {/* Cart icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.09.835l.383 1.436M7.5 14.25h9.75a2.25 2.25 0 0 0 2.184-1.725l1.263-5.053A1.125 1.125 0 0 0 19.609 6.75H5.108m2.392 7.5L5.108 6.75m2.392 7.5L9 19.5m6-4.5L15 19.5m-6 0a.75.75 0 1 1-1.5 0m7.5 0a.75.75 0 1 1-1.5 0"
        />
      </svg>

      {/* Badge only when count > 0 */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-fuchsia-500 text-[10px] font-bold text-white px-1">
          {count}
        </span>
      )}
    </Link>
  );
}