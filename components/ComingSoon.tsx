"use client";
import InterestForm from "./InterestForm";

export default function ComingSoon({ tripSlug }: { tripSlug: string }) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
      <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>

      <div className="mt-2">
        <div className="w-full px-5 py-3 rounded-xl bg-neutral-300 text-neutral-800 font-semibold text-center select-none">
          2026 COMING SOON!!!
        </div>
        <p className="mt-2 text-sm text-white/70 text-center">
          Most trips are locked — a few details still finalizing. Want first dibs?
        </p>

        <InterestForm tripSlug={tripSlug} />
      </div>

      <p className="mt-4 text-sm text-white/70 text-center">
        ✔ Pay with card, Affirm, or Klarna when booking opens.
      </p>
    </section>
  );
}