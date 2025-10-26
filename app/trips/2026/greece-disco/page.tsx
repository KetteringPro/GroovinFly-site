import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disco Yacht Week — Greece (Aug 8–15, 2026) | GroovinFly",
  description:
    "Seven days of disco & house on the Aegean: float parties, circle raft brunches, and hand-picked DJs. Includes TWO exclusive Discophoria parties.",
  openGraph: {
    title: "Disco Yacht Week — Greece 2026 | GroovinFly",
    description:
      "Let's get groovy in Greece — sail by day, dance by night. Includes TWO exclusive Discophoria parties.",
    images: [{ url: "/images/yacht-greece/greece-disco.jpg" }],
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-10">
      {/* Hero */}
      <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10">
        <Image
          src="/images/yacht-greece/greece-disco.jpg"
          alt="Disco Yacht Week — Greece"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Disco Yacht Week — Greece</h1>
          <p className="text-white/85 mt-1">August 8–15, 2026 • Discophoria Route</p>
        </div>
      </div>

      {/* Intro */}
      <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="text-white/90">
            Let's get groovy in Greece. Set sail on a week-long disco dream — sunshine, house beats,
            and crystal-clear Aegean water. Your trip includes access to{" "}
            <strong>TWO exclusive Discophoria parties</strong> — one onboard and one on shore!
          </p>

          <p className="mt-4 text-fuchsia-400 font-semibold">
            🪩 Includes access to TWO exclusive Discophoria parties — one onboard and one on shore!
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
            <li>✦ Includes TWO Discophoria events</li>
            <li>✦ 7 days of Disco & House</li>
            <li>✦ Circle raft brunch</li>
            <li>✦ Floating DJ deck</li>
            <li>✦ Hand-picked DJs</li>
            <li>✦ Iconic Greece route</li>
            <li>✦ Skipper & provisioning</li>
          </ul>

          {/* Booking buttons */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <Link
                href="https://buy.stripe.com/bJe3co0ePd6L8SJdw32Nq0v"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex flex-col items-center justify-center"
              >
                <span>Book Shared Cabin</span>
                <span>
                  <s>$2,495</s> <strong>$2,195</strong> (Early Groover!)
                </span>
              </Link>
              <Link
                href="https://buy.stripe.com/fZu4gs5z9c2Hed3dw32Nq0t"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex flex-col items-center justify-center"
              >
                <span>Book Saloon Berth</span>
                <span>
                  <s>$2,295</s> <strong>$1,995</strong> (Early Groover!)
                </span>
              </Link>
              <Link
                href="https://buy.stripe.com/cNidR2bXx1o3b0RajR2Nq0u"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex flex-col items-center justify-center"
              >
                <span>Book Private Cabin</span>
                <span>
                  <s>$3,495</s> <strong>$3,195</strong> (Early Groover!)
                </span>
              </Link>
            </div>
            <p className="text-sm text-white/60 mt-3">
              Early Groover Price — Save $300 when you book early! No coupon needed.
            </p>
            <p className="text-sm text-white/60 mt-1 italic">
              *Early Groover Price automatically applied — no coupon needed.*
            </p>
          </div>
        </div>

        {/* Quick facts */}
        <aside className="bg-white/5 border border-white/10 rounded-2xl p-5 h-fit">
          <h2 className="text-lg font-semibold text-purple-200">Trip Facts</h2>
          <dl className="mt-3 space-y-2 text-white/85">
            <div className="flex justify-between gap-4">
              <dt>Dates</dt>
              <dd>Aug 8–15, 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Capacity</dt>
              <dd>9 paying guests + host</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Cabins</dt>
              <dd>4 doubles + 2 saloon berths</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Includes</dt>
              <dd>Skipper, provisioning & mixers</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Vibe</dt>
              <dd>Disco & house, island sunsets</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Gallery */}
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/yacht-greece/greece-disco-1.jpg"
              alt="Greece deck party"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/yacht-greece/greece-disco-2.jpg"
              alt="Floating DJ deck"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10 sm:col-span-2">
            <Image
              src="/images/yacht-greece/greece-disco-3.jpg"
              alt="Aegean sailing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fine print + CTA */}
      <section className="mt-10 text-white/70 text-sm leading-relaxed text-center">
        <p>
          Notes: Private cabin bookings reduce shared capacity. Port, fuel, and incidentals are
          budgeted within pricing. Final route and swim stops may vary with weather. Full payment
          due at booking; flexible installments available via Stripe partners.
        </p>
        <p className="text-white/90 mt-8">
          Ready to join the crew? Limited cabins available —{" "}
          <Link
            href="/trips/2026"
            className="underline hover:text-fuchsia-400 font-semibold"
          >
            book your spot now
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
