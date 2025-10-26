import Image from "next/image";

export default function CoachStage2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
      {/* Hero Section */}
      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/coach-stage/coach-stage-hero.jpg"
          alt="Coachella and Stagecoach 2026 combined trip"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🎡 Coachella + Stagecoach 2026
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            April 17–27, 2026 · Indio, California
          </p>
          <p className="text-white/80 text-base mt-1 italic">
            Two weekends. Two festivals. One unforgettable desert adventure.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-3">
        <h2 className="text-2xl font-semibold text-purple-200">The Experience</h2>
        <p className="text-white/90">
          Why choose when you can do both? Join the GroovinFly crew for back-to-back weekends in the Coachella Valley —{" "}
          <strong>Coachella</strong> followed by <strong>Stagecoach</strong>. 
          Your package includes festival tickets for both events, lodging for ten days in economy hotels, all venue transportation, and a seamless hotel transfer between festivals.
        </p>
        <p className="text-white/90">
          Between weekends, enjoy downtime with pool days, local exploring, and a few chill nights before gearing up for round two of festival magic.
        </p>
        <p className="text-white/90 font-semibold mt-3">
          🎟 All GroovinFly trips include concert or event tickets, lodging, and transportation to / from venues — plus hotel snacks & water, one intro dinner, and exclusive GroovinFly swag.
        </p>
      </section>

      {/* Travel Notes */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md text-center">
        <h2 className="text-xl font-semibold text-purple-200 mb-2">Dates &amp; Travel Details</h2>
        <p className="text-white/90">
          <strong>April 17–27, 2026</strong> — Coachella (Week 1) + Stagecoach (Week 2)
        </p>
        <p className="text-white/80 mt-2">
          Hotel accommodations are provided for both weekends. A <strong>group transfer on Monday, April 20</strong> between festival hotels is included.
          You're welcome to arrive earlier or stay later — we'll help coordinate your travel.
        </p>
      </section>

      {/* Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">What's Included</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>2 Festival Tickets (GA – Coachella & Stagecoach)</li>
          <li>Economy hotel accommodations for both weekends (separate hotels for each festival)</li>
          <li>Transportation to/from festival venues</li>
          <li>Group transfer between hotels (April 20)</li>
          <li>Hotel snacks, water, and one group dinner</li>
          <li>Exclusive GroovinFly swag bag</li>
        </ul>
      </section>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md text-center">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>
        <p className="text-white/90 mb-2">💵 <strong>Shared Room: $3,195</strong></p>
        <p className="text-white/90 mb-2">💵 <strong>Solo Room: $4,095</strong></p>
        <p className="text-sm text-white/70 mb-4">
          ✔ Includes both festival tickets, all lodging, transfers, and festival shuttles.<br />
          💳 Payment plans available — Klarna, Affirm & Afterpay accepted at checkout.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_STRIPE_LINK_DOUBLEHEADER_SHARED ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Reserve Shared Room
          </a>
          <a
            href={process.env.NEXT_PUBLIC_STRIPE_LINK_DOUBLEHEADER_SOLO ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Reserve Solo Room
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-3 text-center">Gallery</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <Image src="/images/coach-stage/coachella-ferris.jpg" alt="Coachella Ferris wheel at sunset" width={1200} height={800} className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" />
          <Image src="/images/coach-stage/stagecoach-boots.jpg" alt="Cowboy boots in the desert at Stagecoach" width={1200} height={800} className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" />
          <Image src="/images/coach-stage/stagecoach-crowd.jpg" alt="GroovinFly crew relaxing poolside" width={1200} height={800} className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" />
        </div>
      </section>

      {/* Final Note */}
      <section className="bg-purple-700/20 border border-purple-500/30 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-semibold text-purple-200">Two Festivals. One Crew. One Epic Memory. 🎶</h3>
        <p className="text-white/90 mt-1">
          Experience the desert like never before — Coachella's electric energy and Stagecoach's country charm, back-to-back. All you have to do is show up — we'll handle the rest. 💜
        </p>
      </section>
    </main>
  );
}
