'use client';
import Script from "next/script";

export default function PricingTable({
  pricingTableId,
  publishableKey,
}: {
  pricingTableId: string;
  publishableKey: string;
}) {
  return (
    <>
      <Script src="https://js.stripe.com/v3/pricing-table.js" strategy="afterInteractive" />
      <stripe-pricing-table
        pricing-table-id={pricingTableId}
        publishable-key={publishableKey}
      />
    </>
  );
}