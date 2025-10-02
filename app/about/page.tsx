import Image from "next/image";

export const metadata = {
  title: "About Us – GroovinFly",
  description:
    "GroovinFly is a women-first travel collective creating safe, joy-filled trips to concerts, festivals, beaches, and bucket-list holidays—so you can set yourself free and just have fun.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-10 space-y-10">
      {/* Visual Footer Image */}
      <div className="pt-4">
        {/* Save the Adobe Stock image to `public/images/about/airplane-sunset.jpg` */}
        <Image
          src="/images/about/airplane-sunset.jpg"
          alt="Airplane at sunset over a glowing festival cityscape"
          width={1600}
          height={900}
          className="rounded-xl border border-white/10 shadow-md object-cover w-full h-auto"
          priority
        />
        <p className="text-xs text-white/50 mt-2 text-center">
          Artwork inspired by desert festival sunsets and the joy of arrival.
        </p>
      </div>

      {/* Header */}
      <header className="text-center space-y-3">
        <Image src="/logo.png" alt="GroovinFly" width={200} height={70} className="mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold text-purple-200">About GroovinFly</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          A women-first travel collective and safe space to set yourself free—at concerts,
          festivals, beach escapes, and bucket-list holidays.
        </p>
      </header>

      {/* Our Philosophy */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">Our Philosophy</h2>
        <p className="text-white/90">
          GroovinFly exists so women can experience music, travel, and friendship without the
          stressors that so often get in the way. We curate small, hosted trips where the vibe is
          respectful, inclusive, and drama-free. You show up as you are—we handle the logistics,
          the plan, and the people.
        </p>
        <p className="text-white/80">
          We believe joy is a practice. Dancing under festival lights, sunrise swims, road-trip
          playlists, late-night laughter—these are the moments that refill your cup. Our community
          is built on kindness, consent, and looking out for each other.
        </p>
      </section>

      {/* What We Do */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>
            <strong>Hosted Group Trips:</strong> Concerts, festivals, city breaks, yacht & beach
            weekends—planned end-to-end with flexible payment options.
          </li>
          <li>
            <strong>Curated Lodging:</strong> Shared suites and villas that balance comfort,
            affordability, and proximity to the action.
          </li>
          <li>
            <strong>Tickets & Logistics:</strong> We secure ticket blocks when possible and
            coordinate shuttles, transfers, and on-site meetups.
          </li>
          <li>
            <strong>Community & Connection:</strong> Private trip chats, outfit planning, and
            built-in brunch buddies. Come solo—leave with friends.
          </li>
        </ul>
      </section>

      {/* Who It’s For */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">Who It’s For</h2>
        <p className="text-white/90">
          Women who love music, travel, and good energy. Whether you’re a seasoned festival-goer or
          planning your first big trip, you’ll find a welcoming crew and a calm, capable host.
        </p>
      </section>

      {/* Safety & House Rules */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">Safety & House Rules</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li><strong>Women-first spaces.</strong> Our trips are curated specifically for women.</li>
          <li><strong>Consent always.</strong> Respect personal boundaries. Look out for each other.</li>
          <li><strong>Kindness over chaos.</strong> Inclusive, judgement-free, supportive vibes only.</li>
          <li><strong>Shared-space awareness.</strong> Some trips include shared rooms/beds—friendly slumber-party energy.</li>
        </ul>
        <p className="text-white/70 text-sm">Full policies: see Terms, Privacy, and Trip Details at checkout.</p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-purple-200">Come with us.</h3>
        <p className="text-white/80 max-w-2xl mx-auto">
          Pick a trip, pack light, and we’ll handle the rest—tickets, stays, shuttles, snacks, and a
          built-in girl gang. You just show up and have the time of your life.
        </p>
        <a
          href="/trips/2026"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Explore Upcoming Trips
        </a>
      </section>
    </main>
  );
}