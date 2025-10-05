import Image from "next/image";
// --- Stripe checkout links (from .env) ---
const LINK_TEMPE_SHARED_BEDROOM_SHARED =
  process.env.NEXT_PUBLIC_STRIPE_LINK_TEMPE_SHARED_BEDROOM_SHARED ?? "#";
const LINK_TEMPE_SHARED_BEDROOM_SOLO =
  process.env.NEXT_PUBLIC_STRIPE_LINK_TEMPE_SHARED_BEDROOM_SOLO ?? "#";
const LINK_TEMPE_PULLOUT_SHARED =
  process.env.NEXT_PUBLIC_STRIPE_LINK_TEMPE_PULL_OUT_SHARED ?? "#";
const LINK_TEMPE_PULLOUT_SOLO =
  process.env.NEXT_PUBLIC_STRIPE_LINK_TEMPE_PULL_OUT_SOLO ?? "#";
// ----------------------------------------

export default function Tempe2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/tempe/hero.jpg"
          alt="Tempe Extra Innings Festival crowd"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🎶 Tempe, AZ: Extra Innings Festival 2026
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            Thu Feb 26 – Sun Mar 1, 2026 · Festival: Feb 27–28
          </p>
        </div>
      </section>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Country + Americana under desert sunsets with our GroovinFly crew, walkable to the park.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Lodging:</strong> 2× Two-Bedroom Suites at Residence Inn Tempe Downtown/University (kitchen + living room, free breakfast, walkable)</li>
          <li><strong>Tickets:</strong> 2-Day GA to Extra Innings</li>
          <li>Private Facebook group for prep, outfits, and meetups</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
          <li>Optional add-ons: TBD</li>
        </ul>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-2">
          {[
            { src: '/images/tempe/stage.jpg',  alt: 'Festival stage with crowd' },
            { src: '/images/tempe/group.jpg',  alt: 'Group enjoying the festival' },
            { src: '/images/tempe/desert.jpg', alt: 'Arizona desert sunset' }
          ].map((img, i) => (
            <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                className="object-cover"
                priority={i < 2}
              />
            </figure>
          ))}
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces — sometimes even beds — so community is key. Suites have two bedrooms <em>(shared beds)</em> plus a living room pull-out.</p>
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
         <p>💵 <strong>Shared Bedroom</strong>: <strong>$999 per person Shared</strong> · <strong>$1,499 Solo</strong></p>
         <p>💵 <strong>Pull-Out Couch</strong>: <strong>$899 per person Shared</strong> · <strong>$1,299 Solo</strong></p>
        </div>
        <p className="text-sm text-white/70 mt-1">✔ Pay with card, Affirm, or Klarna — no extra fees.</p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {/* TODO: replace # with Stripe links */}
                <a
          href={LINK_TEMPE_SHARED_BEDROOM_SHARED}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10"
        >
          Reserve – Shared Bedroom (Shared)
        </a>

        <a
          href={LINK_TEMPE_SHARED_BEDROOM_SOLO}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10"
        >
          Reserve – Shared Bedroom (Solo)
        </a>

        <a
          href={LINK_TEMPE_PULLOUT_SHARED}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg"
        >
          Reserve – Pull-Out (Shared)
        </a>

        <a
          href={LINK_TEMPE_PULLOUT_SOLO}
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
          <li>TBD</li>
        </ul>
      </section>
    </main>
  );
}