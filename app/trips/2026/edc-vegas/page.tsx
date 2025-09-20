import Image from "next/image";

export default function EDCLasVegas2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

      <div className="text-center">
        <Image src="/logo.png" alt="GroovinFly" width={220} height={80} className="mx-auto" />
        <h1 className="text-3xl font-bold text-purple-200 mt-4">🎡 EDC Las Vegas 2026</h1>
        <p className="text-white/70">Thu May 14 – Mon May 18, 2026</p>
      </div>

      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Neon nights, massive stages, and the ultimate PLUR energy with your GroovinFly crew.
          Late nights, glitter, and zero judgment—come to dance and vibe.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Lodging:</strong> Walkable Strip hotel (TBD) or rideshare to Speedway; 4 nights</li>
          <li><strong>Tickets:</strong> Secured via drops/verified resale; bundle offered when confirmed</li>
          <li>Private Facebook group for outfit inspo, meetups, and ride-sharing</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
          <li>Optional add-ons: shuttle passes, pre/post parties, pool day (TBD)</li>
        </ul>

        <div className="flex gap-3 my-2">
          <Image src="/images/edc/lasers.jpg"  alt="EDC lasers over the crowd" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/edc/ferris.jpg"  alt="EDC ferris wheel"          width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/edc/stage.jpg"   alt="Main stage at night"       width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces — sometimes even beds — and keep late-night schedules. Community and good vibes are everything.</p>
        </div>
      </section>

      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>
        <p className="text-white/90">Pricing TBA (shared bed / solo bed). Packages will be posted once ticket blocks are confirmed.</p>
        <p className="text-sm text-white/70">✔ Pay with card, Affirm, or Klarna — no extra fees.</p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {/* TODO: replace # with Stripe links when ready */}
          <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg">
            Reserve Interest – Shared
          </a>
          <a href="#" className="bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/10">
            Reserve Interest – Solo
          </a>
        </div>
      </section>
    </main>
  );
}