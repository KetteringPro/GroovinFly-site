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
    title: "Indio, CA\n🌴 Coachella 2026 Weekend 2",
    dates: "Apr 17–20, 2026",
    blurb: "Desert blooms, palm trees, and unforgettable sets under the Indio sky.",
    image: { src: "/images/coachella-weekend-2/cover.jpg", alt: "Coachella main stage crowd" },
  },
  
  {
    href: "/trips/2026/croatia-ultra",
    title: "Croatia\n🌅 Ultra Yacht Week",
    dates: "July 11–18, 2026",
    blurb:
      "Ultra Europe meets Yacht Week — EDM, island hopping, and unforgettable summer nights in the Adriatic.",
    image: {
      src: "/images/yacht-croatia/croatia-ultra.jpg",
      alt: "Ultra Yacht Week Croatia – sunset on the Adriatic",
    },
  },
  {
    href: "/trips/2026/greece-disco",
    title: "Greece\n🎶 Disco Yacht Week",
    dates: "August 8–15, 2026",
    blurb:
      "Sail through the Greek Islands with a disco-house soundtrack and sunset dance decks — pure festival freedom.",
    image: {
      src: "/images/yacht-greece/greece-disco.jpg",
      alt: "Disco Yacht Week Greece – music and sunshine",
    },
  },

  {     
    href: "/trips/2026/edc-vegas",
    title: "Las Vegas\n🎡 EDC",
    dates: "May 14–18, 2026",
    blurb: "Neon nights, massive stages, and pure PLUR with your GroovinFly crew.",
    image: { src: "/images/edc/cover.jpg", alt: "EDC main stage at night" },
  },
  {
    href: "/trips/2026/gulf-jam",
    title: "Panama City Beach, FL\n🎶 Gulf Jam 2026",
    dates: "May 27 – Jun 1, 2026",
    blurb: "Sun-drenched days, country anthems on the shore, and nights that never fade.",
    image: { src: "/images/gulf-jam/cover.jpg", alt: "Panama City Beach at sunset" },
  },
  {
    href: "/trips/2026/st-thomas",
    title: "St. Thomas\n🌴 Full Moon Party",
    dates: "May 29 – Jun 1, 2026",
    blurb: "Turquoise water, sunset cruise, and breezy island nights—Caribbean ease.",
    image: { src: "/images/st-thomas/cover.jpg", alt: "St. Thomas beach cove" },
  },
];

export default function Trips2026ComingSoon() {
  const firstRowTrips = trips2026.slice(0, 3);
  const yachtWeekTrips = trips2026.slice(3, 5);
  const remainingTrips = trips2026.slice(5);

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
       

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firstRowTrips.map((t, i) => (
            <article key={i} className={`rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10 ${t.title.includes("Yacht Week") ? "scale-105 md:scale-110" : ""}`}>
              <div className={`relative w-full ${t.title.includes("Yacht Week") ? "h-72 md:h-80" : "h-48"}`}>
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
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

        <div className="grid gap-6 md:grid-cols-2 w-full mt-6">
          {yachtWeekTrips.map((t, i) => (
            <article key={i} className={`rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10 scale-105 md:scale-110`}>
              <div className="relative w-full h-72 md:h-80">
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {remainingTrips.map((t, i) => (
            <article key={i} className={`rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10 ${t.title.includes("Yacht Week") ? "scale-105 md:scale-110" : ""}`}>
              <div className={`relative w-full ${t.title.includes("Yacht Week") ? "h-72 md:h-80" : "h-48"}`}>
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
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
      <Footer />
    </>
  );
}