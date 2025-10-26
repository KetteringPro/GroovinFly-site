import Image from "next/image";

// --- Stripe checkout links (actual URLs) ---
const LINK_STAGECOACH_SHARED = "https://buy.stripe.com/bJefZa3r15Ej4Ct77F2Nq0H"; // $1795
const LINK_STAGECOACH_SOLO = "https://buy.stripe.com/9B69AM2mX7Mrd8ZcrZ2Nq0I"; // $2295
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
            🤠 Stagecoach 2026<br></br>Country Queens Take the Desert
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            April 23–27, 2026 · Indio, California
          </p>
          <p className="text-white/80 text-base mt-1 italic">
            Headliners: Post Malone, Lainey Wilson & Cody Johnson
          </p>
        </div>
      </section>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Grab your cowgirl boots and your besties — Stagecoach 2026 is calling! Country under the desert sky, palm trees swaying, and music that goes late into the night. Join the GroovinFly crew for an unforgettable weekend of sunshine, singing, and making new friends who love the same good vibes you do.
        </p>
        <p className="text-white/90">
          Lodging is included in comfortable <strong>economy motel rooms (4 guests per room)</strong> — choose between a <strong>shared bed</strong> or a <strong>solo bed</strong>. The exact property is shared privately with confirmed guests to ensure safety and privacy. 
        </p>
        <p className="text-white/90">
          Your <strong>GA ticket includes shuttle transportation</strong> to and from the festival each day, so you can focus on the fun while we handle the details.
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-2">
          <Image src="/images/stagecoach/stage.jpg" alt="Festival stage with crowd" width={1200} height={800} className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" />
          <Image src="/images/stagecoach/group.jpg" alt="Group enjoying the festival" width={1200} height={800} className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" />
          <Image src="/images/stagecoach/desert.jpg" alt="Desert sunset in Indio" width={1200} height={800} className="rounded-lg object-cover w-full h-[250px] md:h-[300px]" />
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🌵</h3>
          <p>We have rooms secured for the GroovinFly crew — final bed assignments will be arranged before travel. Shuttle passes are included with every ticket.</p>
          <p className="mt-2">All GroovinFly trips include concert or event tickets, lodging, and transportation to/from venues — plus hotel snacks & water, one intro dinner, and exclusive GroovinFly swag.</p>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md text-center">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing &amp; Booking</h2>
        <p className="text-white/90 mb-2">💵 <strong>Shared Bed:</strong> $1,795</p>
        <p className="text-white/90 mb-2">💵 <strong>Solo Bed:</strong> $2,295</p>
        <p className="text-sm text-white/70 mb-4">
          ✔ Includes GA festival ticket with shuttle, lodging, and group amenities.<br />
          💳 Payment plans available — Klarna, Affirm & Afterpay accepted at checkout.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={LINK_STAGECOACH_SHARED}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Reserve Shared Bed
          </a>
          <a
            href={LINK_STAGECOACH_SOLO}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Reserve Solo Bed
          </a>
        </div>
      </section>

      {/* Double Header CTA */}
      <section className="bg-purple-700/20 border border-purple-500/30 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-semibold text-purple-200">Double Header: Coachella + Stagecoach</h3>
        <p className="text-white/90 mt-1">
          Extend your trip and stay for both festivals! Combine Coachella &amp; Stagecoach for the ultimate two-week desert adventure — hotel transfer included.
        </p>
      </section>
    </main>
  );
}
