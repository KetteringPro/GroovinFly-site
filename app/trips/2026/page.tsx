import Image from "next/image";
import Link from "next/link";

type Trip = {
  href?: string; // optional details page link
  title: string;
  dates: string;
  blurb: string;
  image: { src: string; alt: string };
};

const trips2026: Trip[] = [
  {
    href: "/trips/2026/tempe",
    title: "🎶 Tempe: Extra Innings Festival",
    dates: "Feb 26 – Mar 1, 2026",
    blurb: "Country + Americana under desert sunsets, walkable to the park.",
    image: { src: "/images/tempe/cover.jpg", alt: "Arizona desert sunset" },
  },
  
    {
     href: "/trips/2026/miami",
     title: "🎧 Miami: Ultra Music Festival",
    dates: "Mar 26–30, 2026",
    blurb: "World-class EDM on the bay. High energy, warm nights, zero judgment.",
    image: { src: "/images/miami/cover.jpg", alt: "Miami skyline at dusk" },
  },

  {
    href: "/trips/2026/coachella-weekend-2",
    title: "🌴 Coachella 2026 • Weekend 2",
    dates: "Apr 17–20, 2026",
    blurb: "12 exclusive GroovinFly spots with premium resort & budget packages.",
    image: { src: "/images/coachella-2026/cover.jpg", alt: "Coachella main stage crowd" },
  },
  
  {     
    href: "/trips/2026/edc-vegas",
    title: "🎡 EDC Las Vegas",
    dates: "May 14–18, 2026",
    blurb: "Neon nights, massive stages, and pure PLUR with your GroovinFly crew.",
    image: { src: "/images/edc/cover.jpg", alt: "EDC main stage at night" },
  },
  {
    href: "/trips/2026/st-thomas",
    title: "🌴 St. Thomas Full Moon Party",
    dates: "May 29 – Jun 1, 2026",
    blurb: "Turquoise water, boat day, and breezy island nights—Caribbean ease.",
    image: { src: "/images/st-thomas/cover.jpg", alt: "St. Thomas beach cove" },
  },
];

export default function Trips2026ComingSoon() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-10">
     

      <div className="text-center mb-8">
        <Image src="/logo.png" alt="GroovinFly" width={220} height={80} className="mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-purple-200">2026 Trips</h1>
        <p className="text-white/80">Booked lineup — full details & booking links coming soon.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trips2026.map((t, i) => (
          <article key={i} className="rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10">
            <div className="relative w-full h-48">
              <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-purple-200">{t.title}</h2>
              <div className="text-sm text-white/70">{t.dates}</div>
              <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>

              <div className="mt-4">
                {t.href ? (
                  <Link
                    href={t.href}
                    className="inline-block px-4 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold"
                  >
                    View Details & Book
                  </Link>
                ) : (
                  <span className="inline-block px-4 py-2 rounded-lg bg-white/8 border border-white/12 text-white/70 font-semibold">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}