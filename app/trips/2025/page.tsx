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
    blurb: "Times Square stay, welcome dinner, Rockefeller Tree, Rockettes!",
    image: { src: "/images/nyc/cover.jpg", alt: "NYC holiday lights" },
  },
];

export default function Trips2025ArchivePage() {
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
                <p className="mt-2 text-white/80">Thanks for an amazing year!</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA to 2026 */}
        <div className="bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-400/30 rounded-xl p-6 mb-8 text-center">
          <p className="text-white/90 mb-3">Looking for upcoming adventures?</p>
          <Link 
            href="/trips/2026" 
            className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-6 py-3 rounded-lg"
          >
            View 2026 Trips →
          </Link>
        </div>

        {/* Trips grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((t) => (
            <article
              key={t.href}
              className="rounded-2xl overflow-hidden flex flex-col bg-white/5 border border-white/10"
            >
              <div className="relative block w-full h-48">
                <Image
                  src={t.image.src}
                  alt={t.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-purple-200 whitespace-pre-line">{t.title}</h2>
                <div className="text-sm text-white/70">{t.dates}</div>
                <p className="text-white/90 mt-2 flex-1">{t.blurb}</p>
                <div className="mt-4">
                  <button disabled className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg cursor-not-allowed">
                    SOLD OUT
                  </button>
                  <p className="text-sm text-gray-400 mt-2">Thank you to everyone who joined — this trip is now sold out!</p>
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