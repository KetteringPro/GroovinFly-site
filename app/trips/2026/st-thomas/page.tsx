import Image from "next/image";
import ComingSoon from "@/components/ComingSoon";

export default function StThomas2026Page() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-8 space-y-10">
      {/* Banner with overlay text (NYC-2025 style) */}
      <div className="relative w-full h-[360px] md:h-[460px] rounded-3xl overflow-hidden">
        <Image
          src="/images/banners/st-thomas.jpg"
          alt="St. Thomas 2026"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">🌴 St. Thomas 2026</h1>
            <p className="mt-2 text-white/90">Thu May 29 – Mon Jun 1, 2026</p>
          </div>
        </div>
      </div>

      {/* Trip overview / vibe */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          This weekend is all about the big moments: 🍽️ dinner at SeaSalt (with one cocktail included), 🌅 a sunset cruise with the crew, and 🎉 Full Moon Party at Sapphire Beach. Pool and beach time are the chill filler vibes, but the highlight is celebrating together with these unforgettable experiences.
        </p>

        {/* 3-up gallery that stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
          <div className="relative w-full h-[220px] md:h-[260px]">
            <Image src="/images/st-thomas/beach.jpg" alt="St. Thomas beach" fill className="rounded-lg object-cover" />
          </div>
          <div className="relative w-full h-[220px] md:h-[260px]">
            <Image src="/images/st-thomas/boat.jpg" alt="Boat day on water" fill className="rounded-lg object-cover" />
          </div>
          <div className="relative w-full h-[220px] md:h-[260px]">
            <Image src="/images/st-thomas/view.jpg" alt="Caribbean overlook" fill className="rounded-lg object-cover" />
          </div>
        </div>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Lodging:</strong> Margaritaville Resort, 3 nights</li>
          <li><strong>Activities:</strong> Dinner at SeaSalt, Sunset Cruise, Full Moon Party at Sapphire Beach, plus pool and beach time</li>
          <li>Private Facebook group for planning, outfits, and activity picks</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
        </ul>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces and keep late-night schedules. Choose <em>Shared King</em> / <em>Shared Queen</em>, <em>Solo King</em> / <em>Solo Queen</em>, or a discounted <em>Pullout</em> (shared or solo). We sell 8 spots and allocate beds fairly by signup order.</p>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>
        <p className="text-white/90 mb-3">3 nights at Margaritaville + 🍽️ dinner at SeaSalt (includes 1 cocktail) + 🌅 sunset cruise. Rooms stocked with snacks &amp; light breakfast + GroovinFly swag bag. BYOB. Full Moon Party drinks are on your own. Yacht add‑on may be offered if secured; the weekend package runs regardless.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white">
            <h3 className="text-lg font-semibold text-purple-200">Shared Queen</h3>
            <div className="text-2xl font-bold">$599</div>
            <p className="text-sm text-white/80">Per person · share a queen bed.</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_STT25_SHARED_QUEEN || "#"} className="inline-block mt-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded">Reserve – Shared Queen</a>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white">
            <h3 className="text-lg font-semibold text-purple-200">Shared King</h3>
            <div className="text-2xl font-bold">$659</div>
            <p className="text-sm text-white/80">Per person · share a king bed (more space).</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_STT25_SHARED_KING || "#"} className="inline-block mt-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded">Reserve – Shared King</a>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white">
            <h3 className="text-lg font-semibold text-purple-200">Pullout (Shared)</h3>
            <div className="text-2xl font-bold">$499</div>
            <p className="text-sm text-white/80">Per person · share the sofa sleeper.</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_STT25_PULLOUT_SHARED || "#"} className="inline-block mt-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded">Reserve – Pullout Shared</a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white">
            <h3 className="text-lg font-semibold text-purple-200">Solo Queen</h3>
            <div className="text-2xl font-bold">$699</div>
            <p className="text-sm text-white/80">Your own queen bed.</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_STT25_SOLO_QUEEN || "#"} className="inline-block mt-3 bg-white/5 hover:bg-white/10 text-white font-semibold px-4 py-2 rounded border border-white/10">Reserve – Solo Queen</a>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white">
            <h3 className="text-lg font-semibold text-purple-200">Solo King</h3>
            <div className="text-2xl font-bold">$759</div>
            <p className="text-sm text-white/80">Your own king bed (premium).</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_STT25_SOLO_KING || "#"} className="inline-block mt-3 bg-white/5 hover:bg-white/10 text-white font-semibold px-4 py-2 rounded border border-white/10">Reserve – Solo King</a>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-white">
            <h3 className="text-lg font-semibold text-purple-200">Pullout (Solo)</h3>
            <div className="text-2xl font-bold">$599</div>
            <p className="text-sm text-white/80">Sofa sleeper to yourself.</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_STT25_PULLOUT_SOLO || "#"} className="inline-block mt-3 bg-white/5 hover:bg-white/10 text-white font-semibold px-4 py-2 rounded border border-white/10">Reserve – Pullout Solo</a>
          </div>
        </div>

        <div className="text-sm text-white/70 border-t border-white/10 pt-3 mt-4">
          <p className="mb-1">Pay‑in‑full at booking (Klarna/Affirm available). Pricing includes dinner at SeaSalt (with one cocktail) and the sunset cruise.</p>
          <p className="mb-1">We sell 8 spots and allocate beds fairly in signup order. If inventory shifts, we’ll offer upgrades/downgrades or partial refunds to keep it fair.</p>
        </div>
      </section>
    </main>
  );
}