import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultra Yacht Week – Croatia (July 11–18, 2026) | GroovinFly",
  description:
    "Yacht Week meets Ultra Europe: 7 days of sailing, sunsets, and world-class EDM across Croatia’s islands. Shared or Private cabins available.",
  openGraph: {
    title: "Ultra Yacht Week – Croatia 2026 | GroovinFly",
    description:
      "Sail the Adriatic by day, dance under the stars by night. Ultra Europe VIP + Yacht Week.",
    images: [{ url: "/images/yacht-croatia/croatia-ultra.jpg" }],
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-10">
      {/* Hero */}
      <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10">
        <Image
          src="/images/yacht-croatia/croatia-ultra.jpg"
          alt="Ultra Yacht Week – Croatia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Ultra Yacht Week – Croatia</h1>
          <p className="text-white/85 mt-1">July 11–18, 2026 • Original Route</p>
        </div>
      </div>

      {/* Intro */}
      <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="text-white/90">
            Turn up the volume on summer. GroovinFly’s signature Croatia yacht experience
            collides with Ultra Europe—sail the Adriatic by day, dance under the stars by night,
            and wake to another island worth exploring. VIP access, tunnel raft nights, secret bays,
            and that golden-hour magic.
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
            <li>✦ Ultra Europe VIP access (2 days)</li>
            <li>✦ 7 days / 7 nights at sea</li>
            <li>✦ Skipper included</li>
            <li>✦ Three historic islands</li>
            <li>✦ Tunnel raft nights</li>
            <li>✦ Secret bays & swim stops</li>
          </ul>

          {/* Booking buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://buy.stripe.com/cNi9AM1iT5Ej1qh4Zx2Nq0x"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Book Shared Cabin — $2,495
            </Link>
            <Link
              href="https://buy.stripe.com/eVq7sEe5F5Ejglbdw32Nq0w"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Book Private Cabin — $3,395
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
              <dt>Dates</dt><dd>Jul 11–18, 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Capacity</dt><dd>8 guests</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Cabins</dt><dd>4 doubles (shared or private)</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Includes</dt><dd>Skipper, VIP Ultra, provisioning & mixers</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>BYOB</dt><dd>Optional — mixers provided</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Gallery */}
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/yacht-croatia/croatia-ultra-1.jpg" alt="Raft party Croatia" fill className="object-cover" />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/yacht-croatia/croatia-ultra-2.jpg" alt="Ultra Europe night energy" fill className="object-cover" />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10 sm:col-span-2">
            <Image src="/images/yacht-croatia/croatia-ultra-3.jpg" alt="Adriatic islands & bays" fill className="object-cover" />
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