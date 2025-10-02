// components/TripCTA.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { addItemToCart } from "@/lib/cartClient";
import { setToast } from "@/lib/toastClient";
import { useRouter } from "next/navigation";

type Props = {
  // Required: your existing Stripe Link for this tier
  stripeUrl: string;

  // Cart payload so trip can be added to bag
  tripId: string;             // product id or trip id
  optionId: string;           // specific tier/option id
  optionName: string;         // e.g., "Shared Room", "Solo Room", etc.
  unitAmountCents: number;    // tier price
  currency?: string;          // default 'usd'

  // UX knobs
  goToCartAfterAdd?: boolean; // default false
};

export default function TripCTA({
  stripeUrl,
  tripId,
  optionId,
  optionName,
  unitAmountCents,
  currency = "usd",
  goToCartAfterAdd = false,
}: Props) {
  const [adding, setAdding] = useState(false);
  const router = useRouter();

  function onAddToBag() {
    setAdding(true);
    try {
      addItemToCart({
        kind: "trip",
        id: optionId,            // unique per tier
        name: optionName,        // what the user sees in cart
        unit_amount_cents: unitAmountCents,
        currency,
        qty: 1,
        product_id: tripId,
        metadata: { type: "trip", tripId, optionId },
      });
      setToast("Added to bag");
      if (goToCartAfterAdd) router.push("/cart");
    } finally {
      setAdding(false);
    }
  }

  return (
    <div className="flex gap-2">
      {/* Book now = your existing Stripe Link (unchanged) */}
      <Link
        href={stripeUrl}
        className="px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white"
      >
        Book now
      </Link>

      {/* Add to bag = mixed cart path */}
      <button
        onClick={onAddToBag}
        disabled={adding}
        className="px-4 py-2 rounded-xl bg-neutral-200 hover:bg-neutral-300 text-black disabled:opacity-50"
        type="button"
      >
        {adding ? "Adding…" : "Add to bag"}
      </button>
    </div>
  );
}