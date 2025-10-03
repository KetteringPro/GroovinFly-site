import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

// Data for the trips cards
type Trip = {
  href: string; // full path like /trips/2025/salem
  title: string;
  dates: string;
  blurb: string;
  image: { src: string; alt: string };
};

const trips: Trip[] = [
  {
    href: "/trips/2025/salem",
    title: "Salem\n🎃 Mystery, Magic & Mayhem",
    dates: "Oct 24–27, 2025",
    blurb: "Spooky-chic Halloween weekend with dinner, tours & witchy vibes.",
    image: { src: "/images/salem/cover.jpg", alt: "Salem streets at Halloween" },
  },
  {
    href: "/trips/2025/portland-hampton",
    title: "Portland → Hampton\n🎉 Last Hurrah",
    dates: "Nov 14–16, 2025",
    blurb: "Magic Mike Live, Old Port afterparty, Hampton boardwalk, Sun brunch.",
    image: { src: "/images/portland-hampton/cover.jpg", alt: "Hampton boardwalk at sunset" },
  },
  {
    href: "/trips/2025/nyc",
    title: "New York City\n🎄 Holidays in the City",
    dates: "Dec 12–14, 2025",
    blurb: "Times Square stay, welcome dinner, Rockefeller Tree, Rockettes (premium).",
    image: { src: "/images/nyc/cover.jpg", alt: "NYC holiday lights" },
  },
];

export default function TripsListPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-5 py-8">
        {/* HERO / BANNER */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 mb-8">
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]">
            <Image
              src="/images/banners/trips-2025.jpg"
              alt="2025 Trips Banner"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-purple-100">2025 Trips</h1>
                <p className="mt-2 text-white/80">Pick your vibe and book your spot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trips grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((t) => (
            <article
              key={t.href}
              className="rounded-2xl overflow-hidden flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              <div className="relative w-full h-48">
                <Image src={t.image.src} alt={t.image.alt} fill className="object-cover" priority />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
                <div className="text-sm text-white/70">{t.dates}</div>
                <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>
                <div className="mt-4">
                  <Link
                    href={t.href}
                    className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-lg"
                  >
                    View Details & Book
                  </Link>
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