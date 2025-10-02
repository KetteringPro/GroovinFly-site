// app/thanks/page.tsx
import Link from "next/link";

export default function ThanksPage() {
  const PROMO_CODE = process.env.NEXT_PUBLIC_MERCH_PROMO_CODE || "GROOVE10";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Thank you for booking! 🎉</h1>

        <p className="mt-6 text-lg text-neutral-700">
          You’re officially on the list. We can’t wait to groove with you.
        </p>

        <div className="mt-10 p-6 border border-neutral-200 rounded-2xl bg-neutral-50">
          <div className="text-sm uppercase tracking-wide text-neutral-500">
            Guest Perk
          </div>
          <div className="mt-2 text-2xl font-semibold">
            Save 10% on Groovin’ Fly merch
          </div>
          <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-fuchsia-600 text-white text-lg font-bold">
            {PROMO_CODE}
          </div>
          <p className="mt-2 text-sm text-neutral-600">
            Enter this code at checkout to apply your discount.
          </p>
          <div className="mt-6">
            <Link
              href="/merch"
              className="inline-block px-5 py-3 rounded-xl bg-black text-white hover:bg-neutral-800"
            >
              Shop merch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}