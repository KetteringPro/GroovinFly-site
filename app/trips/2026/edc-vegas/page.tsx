import Image from "next/image";
import ComingSoon from "@/components/ComingSoon";

export default function EDCLasVegas2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/edc/hero.jpg"
          alt="EDC Las Vegas lights over the crowd"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🎡 EDC Las Vegas 2026
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            Thu May 14 – Mon May 18, 2026
          </p>
        </div>
      </section>

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

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-2">
          <Image src="/images/edc/lasers.jpg"  alt="EDC lasers over the crowd" width={1200} height={800} className="rounded-lg object-cover w-full h-auto" />
          <Image src="/images/edc/ferris.jpg"  alt="EDC ferris wheel"          width={1200} height={800} className="rounded-lg object-cover w-full h-auto" />
          <Image src="/images/edc/stage.jpg"   alt="Main stage at night"       width={1200} height={800} className="rounded-lg object-cover w-full h-auto" />
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces — sometimes even beds — and keep late-night schedules. Community and good vibes are everything.</p>
        </div>
      </section>

      <ComingSoon tripSlug="edc-vegas" />
    </main>
  );
}