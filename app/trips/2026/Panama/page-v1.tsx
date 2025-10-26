import Image from "next/image";

const LINK_PANAMA_2026 = "https://buy.stripe.com/14A7sE1iT4Af8SJ9fN2Nq0G";

export default function Panama2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
      {/* Hero Section */}
      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/panama2026/panama-bungalow-bay.jpg"
          alt="Bocas del Toro island adventure"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🏝 Groove Island Getaway — Bocas del Toro
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            An archipelago of seven tropical islands off Panama’s Caribbean coast — where jungle meets sea and every day’s a new adventure.
          </p>
        </div>
      </section>

      {/* Dates & Travel Flexibility */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md text-center">
        <h2 className="text-xl font-semibold text-purple-200 mb-2">Dates &amp; Travel Flexibility</h2>
        <p className="text-white/90">
          The Groove Island Getaway runs <strong>January 8–18, 2026</strong>.<br />
          You can join anytime within those dates — arrive and depart based on your flight schedule and comfort level. ✈️
        </p>
        <p className="text-white/80 mt-2">
          Flights to Panama City are frequent, but <strong>the bush plane to Bocas del Toro is limited</strong> — so early booking is essential. We’ll help coordinate recommended flights and arrival windows for smooth transfers.
        </p>
      </section>

      {/* Exploratory Banner */}
      <section className="bg-purple-700/30 border border-purple-500/30 rounded-2xl p-6 text-center shadow-md">
        <h2 className="text-3xl font-bold text-purple-100 mb-2 uppercase tracking-wide">
          EXPLORATORY – BEING BRAVE & FLEXIBLE IS A MUST 💪🌴
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          This is not your average vacation. It’s an adventure into the unknown — rustic, real, and refreshingly unscripted.
          Only <strong>3 spots available</strong> for those bold enough to say yes to spontaneity.
        </p>
      </section>

      {/* The Vibe */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Get ready for one of the most adventurous GroovinFly experiences yet! Explore{" "}
          <strong>Bocas del Toro</strong>, a stunning chain of seven tropical islands known for its natural beauty —
          coral reefs, red frog beaches, and starfish-filled waters. Each day we’ll island-hop, discover hidden beaches,
          and soak up the vibrant local culture.
        </p>
        <p className="text-white/90">
          Lodging will <strong>vary from day to day</strong> depending on where the day (and the tide) takes us —
          think cozy bungalows, overwater cabins, and rustic island stays. The highlight of the trip? 🎉{" "}
          <strong>Freaky Friday</strong> — a legendary floating bar-hopping party that cruises between islands, blending
          music, sunshine, and unforgettable energy.
        </p>

        <p className="text-white/90 font-semibold mt-4">
          🎟 All GroovinFly trips include concert or event tickets, lodging, and transportation to / from venues — plus
          hotel snacks & water, one intro dinner, and exclusive GF swag.
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-2">
          <Image src="/images/panama2026/panama-jungle-boardwalk.jpg" alt="Jungle boardwalk in Bocas del Toro" width={1200} height={800} className="rounded-lg object-cover w-full h-auto" />
          <Image src="/images/panama2026/panama-colorful-coast.jpg" alt="Colorful Panama coast" width={1200} height={800} className="rounded-lg object-cover w-full h-auto" />
          <Image src="/images/panama2026/panama-groovers-adventure.jpg" alt="GroovinFly travelers exploring Panama" width={1200} height={800} className="rounded-lg object-cover w-full h-auto" />
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Notes 🌊</h3>
          <p>Flights to Panama City + bush plane to Bocas del Toro are <strong>not included</strong>.</p>
          <p>Meals and drinks are pay-as-you-go. Flexibility is key — plans may shift with island life and weather.</p>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md text-center">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>
        <p className="text-white/90 mb-2">💵 <strong>Flat Rate: $995 per person</strong></p>
        <p className="text-sm text-white/70 mb-4">
          ✔ Includes lodging, island transportation, and Freaky Friday entry.<br />
          💳 Payment plans available — Klarna, Affirm & Afterpay accepted at checkout.
        </p>

        <a
          href={LINK_PANAMA_2026}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Reserve Your Spot – Only 3 Available
        </a>
      </section>

      {/* Final Note */}
      <section className="bg-purple-700/20 border border-purple-500/30 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-semibold text-purple-200">Rustic. Rhythmic. Real.</h3>
        <p className="text-white/90 mt-1">
          This vibe isn’t for everyone — but if it’s for you, you’ll know. Join us in Bocas del Toro for an unforgettable GroovinFly adventure.
        </p>
      </section>
    </main>
  );
}
