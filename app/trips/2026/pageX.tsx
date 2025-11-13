import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Trip = {
  href?: string; // optional details page link
  title: string;
  dates: string;
  blurb: string;
  image: { src: string; alt: string };
};

const trips2026: Trip[] = [
  {
    href: "/trips/2026/panama",
    title: "Bocas del Toro, Panama\n🏝 Groove Island Getaway",
    dates: "Jan 8–18, 2026",
    blurb: "Explore the islands of Bocas del Toro on this laid-back, exploratory adventure. Includes water taxis, lodging, and Freaky Friday tickets.",
    image: { src: "/images/panama/cover.jpg", alt: "Overwater cabins in Bocas del Toro, Panama" },
  },
  {
    href: "/trips/2026/tempe",
    title: "Tempe\n🎶 Extra Innings Festival",
    dates: "Feb 26 – Mar 1, 2026",
    blurb: "Country + Americana under desert sunsets, walkable to the park.",
    image: { src: "/images/tempe/cover.jpg", alt: "Arizona desert sunset" },
  },
  {
    href: "/trips/2026/miami",
    title: "Miami\n🎧 Ultra Music Festival",
    dates: "Mar 26–30, 2026",
    blurb: "World-class EDM on the bay. High energy, warm nights, zero judgment.",
    image: { src: "/images/miami/cover.jpg", alt: "Miami skyline at dusk" },
  },
    {
    href: "/trips/2026/coachella-weekend-2",
    title: "Indio, CA\n🌴 Coachella 2026",
    dates: "Apr 16–20, 2026",
    blurb: "Desert blooms, palm trees, and unforgettable sets under the Indio sky. Festival tickets, lodging, and transportation included.",
    image: { src: "/images/coachella/cover.jpg", alt: "Coachella Festival 2026 colorful desert scene" },
  },
  {
    href: "/trips/2026/coach-stage",
    title: "Indio, CA\n🎡 Coachella + Stagecoach",
    dates: "Apr 16–27, 2026",
    blurb: "Two weekends, two festivals — one unforgettable desert getaway. Includes both Coachella and Stagecoach tickets, lodging, and hotel transfer.",
    image: { src: "/images/coach-stage/cover.jpg", alt: "Double Header Coachella + Stagecoach – colorful desert drapes" },
  },
  {
    href: "/trips/2026/stagecoach",
    title: "Indio, CA\n🤠 Stagecoach 2026",
    dates: "Apr 23–27, 2026",
    blurb: "Country under the desert sky — Stagecoach 2026 with Post Malone, Lainey Wilson & Cody Johnson. Festival tickets, lodging, and shuttle included.",
    image: { src: "/images/stagecoach/cover.jpg", alt: "Stagecoach Festival 2026 – country music under desert lights" },
  },
  {
    href: "/trips/2026/croatia-ultra",
    title: "Croatia\n🌅 Ultra Yacht Week",
    dates: "July 11–18, 2026",
    blurb: "Ultra Europe meets Yacht Week — EDM, island hopping, and unforgettable summer nights in the Adriatic. Festival tickets included!",
    image: { src: "/images/yacht-croatia/cover.jpg", alt: "Ultra Yacht Week Croatia – sunset on the Adriatic" },
  },
  {
    href: "/trips/2026/greece-disco",
    title: "Greece\n🎶 Disco Yacht Week",
    dates: "August 8–15, 2026",
    blurb: "Sail through the Greek Islands with a disco-house soundtrack and sunset dance decks — pure festival freedom. Includes festival tickets!",
    image: { src: "/images/yacht-greece/cover.jpg", alt: "Disco Yacht Week Greece – music and sunshine" },
  },
    {
    href: "/trips/2026/edc-vegas",
    title: "Las Vegas\n🎡 EDC",
    dates: "May 14–18, 2026",
    blurb: "Neon nights, massive stages, and pure PLUR with your GroovinFly crew.",
    image: { src: "/images/edc/cover.jpg", alt: "EDC Las Vegas 2026 main stage at night" },
  },
  {
    href: "/trips/2026/gulf-jam",
    title: "Panama City Beach, FL\n🎶 Gulf Coast Jam",
    dates: "May 27 – Jun 1, 2026",
    blurb: "Sun-drenched days, country anthems on the shore, and nights that never fade.",
    image: { src: "/images/gulf-jam/cover.jpg", alt: "Gulf Coast Jam 2026 beach crowd at sunset" },
  },
  {
    href: "/trips/2026/st-thomas",
    title: "St. Thomas\n🌴 Island Escape",
    dates: "May 29 – Jun 1, 2026",
    blurb: "Turquoise water, sunset cruise, and breezy island nights — Caribbean ease.",
    image: { src: "/images/st-thomas/cover.jpg", alt: "St. Thomas beach and sailboats" },
  },
];

export default function Trips2026ComingSoon() {
  const firstRowTrips = trips2026.slice(0, 3);
  const yachtWeekTrips = trips2026.slice(3, 5);
  const coachellaRowTrips = trips2026.slice(5, 8);
  const remainingTrips = trips2026.slice(8);

  return (
    <>
      <main className="max-w-5xl mx-auto px-5 py-10">

        <div className="relative w-full rounded-3xl overflow-hidden">
          <img
            src="/images/banners/trips-2026.jpg"
            alt="2026 Trips"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 rounded-3xl">
            <h1 className="text-4xl font-bold text-purple-300 drop-shadow-md">2026 Trips</h1>
            <p className="mt-2 text-white/90 max-w-md drop-shadow-md">2026 is shaping up fast — join the adventures already locked in, and stay tuned for the rest!</p>
          </div>
        </div>
       
        {/* First Row: 3 Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {firstRowTrips.map((t, i) => (
            <article key={i} className="rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10">
              <div className="relative w-full h-48">
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
                <div className="text-sm text-white/70">{t.dates}</div>
                <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>

                <div className="mt-4">
                  {t.href && (
                    <Link
                      href={t.href}
                      className="inline-block px-4 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold"
                    >
                      View Details & Book
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Second Row: 3 Cards (Coachella/Stagecoach) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {coachellaRowTrips.map((t, i) => (
            <article key={i} className="rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10">
              <div className="relative w-full h-48">
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
                <div className="text-sm text-white/70">{t.dates}</div>
                <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>

                <div className="mt-4">
                  {t.href && (
                    <Link
                      href={t.href}
                      className="inline-block px-4 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold"
                    >
                      View Details & Book
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Third Row: 2 Yacht Week Cards (Larger/Featured) */}
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {yachtWeekTrips.map((t, i) => (
            <article key={i} className="rounded-2xl overflow-hidden flex flex-col bg-white/5 border-2 border-purple-400/30">
              <div className="relative w-full h-64 md:h-72">
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
                <div className="text-sm text-white/70">{t.dates}</div>
                <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>

                <div className="mt-4">
                  {t.href && (
                    <Link
                      href={t.href}
                      className="inline-block px-4 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold"
                    >
                      View Details & Book
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Fourth Row: 3 Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {remainingTrips.map((t, i) => (
            <article key={i} className="rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10">
              <div className="relative w-full h-48">
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
                <div className="text-sm text-white/70">{t.dates}</div>
                <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>

                <div className="mt-4">
                  {t.href && (
                    <Link
                      href={t.href}
                      className="inline-block px-4 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold"
                    >
                      View Details & Book
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
