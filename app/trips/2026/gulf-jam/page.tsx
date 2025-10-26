import Image from "next/image";
import ComingSoon from "@/components/ComingSoon";
const LINK_GULF_JAM_SHARED = process.env.NEXT_PUBLIC_STRIPE_LINK_GULF_JAM_SHARED ?? "#";
const LINK_GULF_JAM_SOLO = process.env.NEXT_PUBLIC_STRIPE_LINK_GULF_JAM_SOLO ?? "#";
const LINK_GULF_JAM_PULLOUT_SHARED = process.env.NEXT_PUBLIC_STRIPE_LINK_GULF_JAM_PULLOUT_SHARED ?? "#";
const LINK_GULF_JAM_PULLOUT_SOLO = process.env.NEXT_PUBLIC_STRIPE_LINK_GULF_JAM_PULLOUT_SOLO ?? "#";

export default function GulfJam2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

      {/* Hero Banner */}
      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/gulf-jam/hero.jpg"
          alt="Gulf Jam stage on the beach at sunset"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🎶 Gulf Jam 2026 – Panama City Beach, FL
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            Tue May 27 – Mon Jun 1, 2026
          </p>
        </div>
      </section>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Beach days, country nights. We stay together, pregame together, and ride together to the venue—just show up and have fun.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>
            <strong>Lodging:</strong> Palmetto Beachfront Hotel (By the Sea Resort). Suites with shared bedrooms + living room pull-out.
          </li>
          <li>
            <strong>Tickets:</strong> 4-Day GA to Gulf Coast Jam 2026.
          </li>
          <li>Transportation: Included rides/shuttle to &amp; from the venue on show days.</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
          <li>Private group chat for prep, outfits, and meetups.</li>
          <li>Optional add-ons: VIP/GA+ upgrade (if available) &amp; extra ticket blocks if demand exceeds initial 8.</li>
        </ul>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-2">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src="/images/gulf-jam/stage.jpg" alt="Festival stage at the beach" fill className="object-cover" />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src="/images/gulf-jam/group.jpg" alt="GroovinFly group at Gulf Jam" fill className="object-cover" />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src="/images/gulf-jam/beach.jpg" alt="Panama City Beach sunset" fill className="object-cover" />
          </div>
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces — sometimes even beds — so community is key. Suites have two bedrooms <em>(shared beds)</em> plus a living room pull-out.</p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>💜 <strong>Shared Bedroom</strong> = two people share a bed.</li>
            <li>💜 <strong>Pull-Out Couch</strong> = budget spot in shared living space.</li>
            <li>💜 Night-owl energy expected (festival ends late).</li>
          </ul>
        </div>
      </section>

      {/* Pricing & Booking */}
      {/* Pricing covers lodging ($3,201.24), GA ticket ($419.57), venue transport, swag/snacks, and host costs.
          Assumes 8 guest spots from the 10-ticket block (2 held for host+guide). */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>

        <div className="space-y-2 text-white/90">
          <p>💵 <strong>Shared Bedroom</strong>: <strong>$1,099 Shared</strong> · <strong>$1,599 Solo</strong></p>
          <p>💵 <strong>Pull-Out Couch</strong>: <strong>$999 Shared</strong> · <strong>$1,399 Solo</strong></p>
        </div>
        <p className="text-sm text-white/70 mt-1">✔ Includes GA ticket, lodging share, venue transport, swag bag &amp; snacks. Pay with card, Affirm, or Klarna — no extra fees.</p>
        <p className="text-sm text-white/50">Inventory note: 8 guest tickets available </p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {/* TODO: replace # with Stripe links */}
          <a
            href={LINK_GULF_JAM_SHARED}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg"
          >
            Reserve – Shared Bedroom (Shared)
          </a>
          <a
            href={LINK_GULF_JAM_SOLO}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg"
          >
            Reserve – Shared Bedroom (Solo)
          </a>
          <a
            href={LINK_GULF_JAM_PULLOUT_SHARED}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg"
          >
            Reserve – Pull-Out (Shared)
          </a>
          <a
            href={LINK_GULF_JAM_PULLOUT_SOLO}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg"
          >
            Reserve – Pull-Out (Solo)
          </a>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Optional Add-Ons</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li> TBD</li>
         
        </ul>
      </section>
    </main>
  );
}
