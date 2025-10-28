import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import TravelTips from "@/components/TravelTips";

export const metadata: Metadata = {
  title: "Ultra Yacht Week – Croatia (July 11–18, 2026) | GroovinFly",
  description:
    "Yacht Week meets Ultra Europe: 7 days of sailing, sunsets, and world-class EDM across Croatia's islands. VIP Ultra Europe festival tickets are included.",
  openGraph: {
    title: "Ultra Yacht Week – Croatia 2026 | GroovinFly",
    description:
      "Sail the Adriatic by day, dance under the stars by night. Ultra Europe VIP + Yacht Week included.",
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
            Turn up the volume on summer. GroovinFly's signature Croatia yacht experience collides
            with Ultra Europe — and <strong>your VIP festival tickets are included!</strong> Sail
            the Adriatic by day, dance under the stars by night, and wake to another island worth
            exploring. VIP access, tunnel raft nights, secret bays, and that golden-hour magic.
          </p>

          <p className="mt-4 text-fuchsia-400 font-semibold">
            🎟️ VIP Ultra Europe festival tickets are INCLUDED with your Yacht Week package!
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
            <li>✦ VIP Ultra Europe festival tickets included</li>
            <li>✦ 7 days / 7 nights at sea</li>
            <li>✦ Skipper included</li>
            <li>✦ Three historic islands</li>
            <li>✦ Tunnel raft nights</li>
            <li>✦ Secret bays & swim stops</li>
          </ul>

          {/* Booking buttons */}
          <div className="mt-6 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://buy.stripe.com/4gMeV6bXxc2H5Gx77F2Nq0D"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex-1"
              >
                <div className="flex flex-col items-center justify-center">
                  <span>Book Shared Cabin</span>
                  <span>
                    <s>$2,495</s> <strong>$2,195</strong> <br></br> (Early Groover!)
                  </span>
                </div>
              </Link>
              <Link
                href="https://buy.stripe.com/9B600c1iT8Qv7OF77F2Nq0F"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex-1"
              >
                <div className="flex flex-col items-center justify-center">
                  <span>Book Private Cabin</span>
                  <span>
                    <s>$3,395</s> <strong>$3,095</strong> <br></br> (Early Groover!)
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm text-white/60 text-center">
                Early Groover Price — Save $300 when you book early! No coupon needed.
              </span>
              <em className="text-xs text-white/50 mt-1 text-center">
                *Early Groover Price automatically applied — no coupon needed.*
              </em>
              <p className="text-sm text-white/60 mt-1 text-center">
                Full payment required. Installments via Klarna / Affirm available.
              </p>
            </div>
          </div>
        </div>

        {/* Quick facts */}
        <aside className="bg-white/5 border border-white/10 rounded-2xl p-5 h-fit">
          <h2 className="text-lg font-semibold text-purple-200">Trip Facts</h2>
          <dl className="mt-3 space-y-2 text-white/85">
            <div className="flex justify-between gap-4">
              <dt>Dates</dt>
              <dd>Jul 11–18, 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Capacity</dt>
              <dd>8 guests </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Cabins</dt>
              <dd>4 doubles (shared or private)</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Includes</dt>
              <dd>Skipper, VIP Ultra, provisioning</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>BYOB</dt>
              <dd>Optional — mixers provided</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Gallery */}
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/yacht-croatia/croatia-ultra-1.jpg"
              alt="Raft party Croatia"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/yacht-croatia/croatia-ultra-2.jpg"
              alt="Ultra Europe night energy"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10 sm:col-span-2">
            <Image
              src="/images/yacht-croatia/croatia-ultra-3.jpg"
              alt="Adriatic islands & bays"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <TravelTips
        arrival={{
          airport: "Split Airport (SPU)",
          arrivalDate: "Friday, July 10 or early Saturday, July 11, 2026",
          details: [
            "Arrive in Split before noon Saturday for boarding at Marina Kaštela.",
            "Many travelers connect through London, Frankfurt, or Zagreb.",
            "Taxis and private transfers available (~25 min to marina)."
          ],
        }}
        departure={{
          marina: "Marina Kaštela, Split",
          departureDate: "Saturday, July 18, 2026",
          details: [
            "Yachts return to the marina Friday night, July 17.",
            "Disembark by 9–10 AM Saturday morning.",
            "Book return flights Saturday afternoon or Sunday morning from Split (SPU)."
          ],
        }}
        packing={[
          "Lightweight clothing and swimsuits",
          "Deck-safe shoes (no black soles)",
          "Sunscreen, hat, and reusable water bottle",
          "Passport valid for 6+ months",
          "EU power adapter (Type C or F plug)"
        ]}
        currency="Euro (€)"
        proTip="Extend your stay one extra night in Split for shopping, sunset cocktails, and a relaxed departure!"
      />

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
