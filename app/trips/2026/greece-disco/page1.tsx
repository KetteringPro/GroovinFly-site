import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disco Yacht Week – Greece (Aug 8–15, 2026) | GroovinFly",
  description:
    "Seven days of disco & house on the Aegean: float parties, circle raft brunches, and hand-picked DJs. Shared, Saloon, or Private cabins.",
  openGraph: {
    title: "Disco Yacht Week – Greece 2026 | GroovinFly",
    description:
      "Let’s get groovy in Greece—sail by day, dance by night. Discophoria route with DJs & floating decks.",
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
          alt="Disco Yacht Week – Greece"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Disco Yacht Week – Greece</h1>
          <p className="text-white/85 mt-1">August 8–15, 2026 • Discophoria Route</p>
        </div>
      </div>

      {/* Intro */}
      <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="text-white/90">
            Let’s get groovy in Greece. Set sail on a week-long disco dream—sunshine, house beats,
            and crystal-clear Aegean water. GroovinFly spins the classic Yacht Week format with a
            funky soundtrack: circle-raft brunches, floating DJ decks, and island sunsets.
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
            <li>✦ 7 days of Disco & House</li>
            <li>✦ Circle raft brunch</li>
            <li>✦ Floating DJ deck</li>
            <li>✦ Hand-picked DJs</li>
            <li>✦ Iconic Greece route</li>
            <li>✦ Skipper & provisioning</li>
          </ul>

          {/* Booking buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://buy.stripe.com/bJe3co0ePd6L8SJdw32Nq0v"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Book Shared Cabin — $2,495
            </Link>
            <Link
              href="https://buy.stripe.com/fZu4gs5z9c2Hed3dw32Nq0t"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Book Saloon Berth — $2,295
            </Link>
            <Link
              href="https://buy.stripe.com/cNidR2bXx1o3b0RajR2Nq0u"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Book Private Cabin — $3,495
            </Link>
            <span className="text-sm text-white/60 self-center">
              Full payment required. Installments via Klarna / Affirm available.
            </span>
          </div>
        </div>

        {/* Quick facts */}
        <aside className="bg-white/5 border border-white/10 rounded-2xl p-5 h-fit">
          <h2 className="text-lg font-semibold text-purple-200">Trip Facts</h2>
          <dl className="mt-3 space-y-2 text-white/85">
            <div className="flex justify-between gap-4">
              <dt>Dates</dt><dd>Aug 8–15, 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Capacity</dt><dd>10 guests</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Cabins</dt><dd>4 doubles + 2 saloon berths</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Includes</dt><dd>Skipper, provisioning & mixers</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Vibe</dt><dd>Disco & house, island sunsets</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Gallery */}
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/yacht-greece/greece-disco-1.jpg" alt="Greece deck party" fill className="object-cover" />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/yacht-greece/greece-disco-2.jpg" alt="Floating DJ deck" fill className="object-cover" />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10 sm:col-span-2">
            <Image src="/images/yacht-greece/greece-disco-3.jpg" alt="Aegean sailing" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="mt-10 text-white/70 text-sm leading-relaxed">
        <p>
          Notes: Private cabin bookings reduce shared capacity. Port, fuel, and incidentals are budgeted
          within pricing. Final route and swim stops may vary with weather. Full payment due at booking;
          flexible installments available via Stripe partners.
        </p>
      </section>
    </main>
  );
}