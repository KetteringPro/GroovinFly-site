// app/thank-you/page.tsx
export const dynamic = "force-dynamic";

import Link from "next/link";

export default function ThankYouPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const sessionId = typeof searchParams.session_id === "string" ? searchParams.session_id : undefined;
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Thank you for your order! 🎉</h1>
      <p className="text-white/80 mb-6">
        We’ve received your purchase and emailed a receipt. Your item will be fulfilled automatically.
      </p>
      {sessionId && (
        <p className="text-sm text-white/60 mb-8">
          Order reference: <code className="text-white/80">{sessionId}</code>
        </p>
      )}
      <div className="flex gap-3 justify-center">
        <Link href="/" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">
          Back to Home
        </Link>
        <Link href="/merch" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">
          Browse more merch
        </Link>
      </div>
    </main>
  );
}