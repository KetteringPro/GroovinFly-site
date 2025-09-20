import Image from "next/image";

export default function Tempe2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

      {/* Header */}
      <div className="text-center">
        <Image src="/logo.png" alt="GroovinFly" width={220} height={80} className="mx-auto" />
        <h1 className="text-3xl font-bold text-purple-200 mt-4">
          🎶 Tempe, AZ: Extra Innings Festival 2026
        </h1>
        <p className="text-white/70">Thu Feb 26 – Sun Mar 1, 2026 · Festival: Feb 27–28</p>
      </div>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Country + Americana under desert sunsets with our GroovinFly crew, walkable to the park.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Lodging:</strong> 2× Two-Bedroom Suites at Residence Inn Tempe Downtown/University (kitchen + living room, free breakfast, walkable)</li>
          <li><strong>Tickets:</strong> 2-Day GA to Extra Innings (initial block secured; more added as demand grows)</li>
          <li>Private Facebook group for prep, outfits, and meetups</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
          <li>Optional add-ons: VIP upgrades or extra tickets if demand exceeds initial block (TBD)</li>
        </ul>

        <div className="flex gap-3 my-2">
          <Image src="/images/tempe/stage.jpg"   alt="Festival stage with crowd" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/tempe/group.jpg"   alt="Group enjoying the festival" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/tempe/desert.jpg"  alt="Arizona desert sunset"      width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
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
          <p>💵 <strong>Pull-Out Couch</strong>: <strong>$899 Shared</strong> · <strong>$1,299 Solo</strong></p>
          <p>💵 <strong>Shared Bedroom</strong>: <strong>$999 Shared</strong> · <strong>$1,499 Solo</strong></p>
        </div>
        <p className="text-sm text-white/70 mt-1">✔ Pay with card, Affirm, or Klarna — no extra fees.</p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {/* TODO: replace # with Stripe links */}
          <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg">
            Reserve – Pull-Out (Shared)
          </a>
          <a href="#" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10">
            Reserve – Pull-Out (Solo)
          </a>
          <a href="#" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10">
            Reserve – Shared Bedroom (Shared)
          </a>
          <a href="#" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10">
            Reserve – Shared Bedroom (Solo)
          </a>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Optional Add-Ons</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>VIP/GA+ Upgrade – TBD</li>
          <li>Additional Ticket Allocation (if demand exceeds initial block) – TBD</li>
        </ul>
      </section>
    </main>
  );
}