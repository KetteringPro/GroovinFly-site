import Image from "next/image";

// --- Stripe checkout links (from .env) ---
const LINK_STAGECOACH_SHARED_BEDROOM_SHARED =
  process.env.NEXT_PUBLIC_STRIPE_LINK_STAGECOACH_SHARED_BEDROOM_SHARED ?? "#";
const LINK_STAGECOACH_SHARED_BEDROOM_SOLO =
  process.env.NEXT_PUBLIC_STRIPE_LINK_STAGECOACH_SHARED_BEDROOM_SOLO ?? "#";
const LINK_STAGECOACH_PULLOUT_SHARED =
  process.env.NEXT_PUBLIC_STRIPE_LINK_STAGECOACH_PULL_OUT_SHARED ?? "#";
const LINK_STAGECOACH_PULLOUT_SOLO =
  process.env.NEXT_PUBLIC_STRIPE_LINK_STAGECOACH_PULL_OUT_SOLO ?? "#";
// ----------------------------------------

export default function Stagecoach2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
      {/* Hero */}
      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/stagecoach/hero.jpg"
          alt="Stagecoach Festival in Indio, CA"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🤠 Indio, CA: Stagecoach 2026
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            Target travel window: <strong>Apr 20–27, 2026</strong> · Festival weekend TBA
          </p>
        </div>
      </section>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Country under the desert sky with our GroovinFly crew. Walkable/short ride to the Polo Club.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Tickets:</strong> 8× GA secured (group pack)</li>
          <li>
            <strong>Lodging:</strong> <em>Motel 6</em> included for <strong>Apr 23–27, 2026</strong> (weekend package). We have both rooms booked Apr 20–27 in case anyone wants to extend — extra nights available as an upcharge.
          </li>
          <li>Private group chat for prep, fits, and meetups</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
        </ul>

        <div className="flex gap-3 my-2">
          <Image src="/images/stagecoach/stage.jpg" alt="Festival stage with crowd" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/stagecoach/group.jpg" alt="Group enjoying the festival" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/stagecoach/desert.jpg" alt="Desert sunset in Indio" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces — sometimes even beds — so community is key. Final rooming assigned after lodging block is confirmed.</p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>💜 <strong>Shared Bedroom</strong> = two people share a bed.</li>
            <li>💜 <strong>Pull-Out Couch</strong> = budget spot in shared living space.</li>
            <li>💜 Night-owl energy expected (festival ends late).</li>
          </ul>
          <p className="mt-2">Guide travels comped (host model). Flexible payments available at checkout.</p>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>

        <div className="space-y-2 text-white/90">
          <p>💵 <strong>Shared Bedroom</strong>: <strong>TBD Shared</strong> · <strong>TBD Solo</strong></p>
          <p>💵 <strong>Pull-Out Couch</strong>: <strong>TBD Shared</strong> · <strong>TBD Solo</strong></p>
        </div>
        <p className="text-sm text-white/70 mt-1">✔ Pay with card, Affirm, or Klarna — no extra fees.</p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {/* Wire buttons to Stripe links from .env when ready */}
          <a
            href={LINK_STAGECOACH_SHARED_BEDROOM_SHARED}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10"
          >
            Reserve – Shared Bedroom (Shared)
          </a>

          <a
            href={LINK_STAGECOACH_SHARED_BEDROOM_SOLO}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10"
          >
            Reserve – Shared Bedroom (Solo)
          </a>

          <a
            href={LINK_STAGECOACH_PULLOUT_SHARED}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg"
          >
            Reserve – Pull-Out (Shared)
          </a>

          <a
            href={LINK_STAGECOACH_PULLOUT_SOLO}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10"
          >
            Reserve – Pull-Out (Solo)
          </a>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Optional Add-Ons</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>Airport transfer bundle (TBD)</li>
          <li>Pre-stocked cooler & snacks (TBD)</li>
          <li>Early check-in / late check-out (if available)</li>
        </ul>
      </section>

      {/* Double Header CTA */}
      <section className="bg-purple-700/20 border border-purple-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-purple-200">Double Header: Coachella + Stagecoach</h3>
        <p className="text-white/90 mt-1">Ask about our combined package for back-to-back weekends in Indio.</p>
      </section>
    </main>
  );
}