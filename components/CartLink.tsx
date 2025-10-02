// components/CartLink.tsx
"use client";

import { usePathname } from "next/navigation";

export default function CartLink() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <a
      href="/cart"
      className="fixed top-4 right-4 z-50 px-3 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-700"
    >
      Cart
    </a>
  );
}