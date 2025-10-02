
// app/merch/Checkout.tsx
"use client";

import * as React from "react";
import { addItemToCart } from "@/lib/cartClient";

export type Variant = {
  id: string;
  product_id: string;
  variant_name: string;
  price_cents: number;
  currency: string;
  active?: boolean;
};

// Robust size order
const SIZE_ORDER = ["XXS","XS","S","SMALL","M","MEDIUM","L","LARGE","XL","XXL","2XL","3XL","ONE SIZE","ONE-SIZE","ONESIZE","OS","OSFA"] as const;
const SIZE_RANK: Record<string, number> = SIZE_ORDER.reduce((acc, k, i) => ((acc[k] = i + 1), acc), {} as Record<string, number>);
function normalizeSizeToken(raw: string): string {
  if (!raw) return "";
  let n = raw.toUpperCase().replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
  const parts = n.split(/[\s/–—-]+/).map((p) => p.trim()).filter(Boolean);
  for (let p of parts) {
    if (p === "EXTRA") continue;
    if (p === "SMALL") return "SMALL";
    if (p === "MEDIUM") return "MEDIUM";
    if (p === "LARGE") return "LARGE";
    if (p === "XXL") return "2XL";
    if (p === "XXXL") return "3XL";
    if (p === "ONE" || p === "ONESIZE" || p === "OS" || p === "OSFA") return "ONE SIZE";
    if (SIZE_RANK[p]) return p;
  }
  const joined = parts.join(" ");
  if (/\bONE\s*SIZE\b/.test(joined)) return "ONE SIZE";
  return "";
}
function sizeRank(name: string): number {
  const key = normalizeSizeToken(name);
  return key ? SIZE_RANK[key] : Number.POSITIVE_INFINITY;
}

export default function Checkout({
  productId,
  variants,
  hideSelector,
  productPriceCents,
  productCurrency,
}: {
  productId: string;
  variants: Variant[] | undefined | null;
  hideSelector?: boolean;
  productPriceCents?: number | null;
  productCurrency?: string | null;
}) {
  const safeVariants: Variant[] = Array.isArray(variants) ? variants : [];
  const sortedVariants = [...safeVariants].sort((a, b) => {
    const ra = sizeRank(a.variant_name);
    const rb = sizeRank(b.variant_name);
    if (ra !== rb) return ra - rb;
    const ak = (a.variant_name || "").toUpperCase();
    const bk = (b.variant_name || "").toUpperCase();
    return ak.localeCompare(bk);
  });

  const [variantId, setVariantId] = React.useState<string>("");
  React.useEffect(() => {
    if (sortedVariants.length === 1) setVariantId(sortedVariants[0].id);
  }, [sortedVariants]);

  const selectedVariant = sortedVariants.find((v) => v.id === variantId);
  const unitCents = (typeof productPriceCents === "number" ? productPriceCents : undefined) ?? selectedVariant?.price_cents ?? sortedVariants[0]?.price_cents ?? 0;
  const unitCurrency = (productCurrency ?? selectedVariant?.currency ?? sortedVariants[0]?.currency ?? "usd").toLowerCase();
  const showSelector = !hideSelector && sortedVariants.length > 1;
  const canAdd = sortedVariants.length === 0 || sortedVariants.length === 1 || Boolean(variantId);
  const fallbackVariant: Variant = { id: `${productId}-default`, product_id: productId, variant_name: "One Size", price_cents: unitCents, currency: unitCurrency, active: true };

  function onAddToBag() {
    const chosen = selectedVariant || sortedVariants[0] || fallbackVariant;
    addItemToCart({ kind: "merch", id: chosen.id, name: chosen.variant_name, unit_amount_cents: unitCents, currency: unitCurrency, qty: 1, product_id: productId });
    if (typeof window !== "undefined") window.alert("Added to bag");
  }

  return (
    <div className="mt-4 space-y-3">
      {showSelector && (
        <>
    
          <select className="w-full bg-white border border-neutral-300 rounded-xl p-2 text-black" value={variantId} onChange={(e) => setVariantId(e.target.value)}>
            <option value="" disabled>Choose a size</option>
            {sortedVariants.map((v) => (
              <option key={v.id} value={v.id}>{v.variant_name}</option>
            ))}
          </select>
        </>
      )}

      <div className="flex items-center justify-between">
        <span className="font-semibold">{unitCents ? `$${(unitCents / 100).toFixed(2)}` : ""}</span>
        <button onClick={onAddToBag} disabled={!canAdd} className="px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white disabled:opacity-50">Add to bag</button>
      </div>
    </div>
  );
}