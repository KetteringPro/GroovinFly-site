"use client";
import Link from "next/link";

export default function MerchLink() {
  return (
    <Link
      href="/merch"
      className="px-3 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm"
    >
      Merch
    </Link>
  );
}