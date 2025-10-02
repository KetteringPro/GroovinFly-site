import Image from "next/image";
import ImportantInfo from "../../../../components/ImportantInfo";
import Footer from "@/components/Footer";

export default function NYCTripPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

        {/* Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/images/banners/nyc-2025.jpg"
          alt="NYC 2025 Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="relative z-10 text-center py-16 bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-100">
            🎄 NYC Holiday Trip <br></br> Holidays in the City
          </h1>
          <p className="mt-2 text-white/80">Sparkle, shows, and holiday magic with your GroovinFly crew.</p>
        </div>
      </section>


      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Sparkle, shows, and classic NYC holiday magic with your GroovinFly crew.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>Private Facebook group for trip prep, outfit planning, and activity discussions</li>
          <li>2 nights lodging in Times Square</li>
          <li>Friday 6PM welcome dinner (includes 1 alcoholic drink)</li>
          <li>Rockefeller Tree + 3 attractions of your choice</li>
          <li>Premium Package: Rockettes Christmas Spectacular (Sat matinee)</li>
          <li>Holiday markets &amp; lights walk</li>
          <li>Rooms stocked with snacks &amp; water</li>
          <li>GroovinFly swag bag ✨</li>
          <li>Optional add-ons: Broadway show, extra attractions (TBD)</li>
        </ul>
      </section>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <Image
          src="/images/nyc/cover.jpg"
          alt="NYC Holiday trip cover"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-56"
        />
        <Image
          src="/images/nyc/statue-of-liberty.jpg"
          alt="Statue of Liberty in NYC"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-56"
        />
        <Image
          src="/images/nyc/rockefeller.jpg"
          alt="Rockefeller Center Tree"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-56"
        />
      </div>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing & Booking</h2>
        <div className="space-y-1 text-white/90">
          <p>💵 <strong>$699 Standard – Shared</strong> / <strong>$999 Standard – Solo</strong></p>
          <p>💵 <strong>$799 Premium (Rockettes) – Shared</strong> / <strong>$1,099 Premium (Rockettes) – Solo</strong></p>
        </div>
        <p className="text-sm text-white/70 mt-1">✔ Flexible payments available at checkout (Klarna/Affirm)</p>

        {/* Direct links or pricing tables (add when ready) */}
        <div className="mt-4 flex gap-3 flex-wrap">
          <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg">
            Reserve – Standard
          </a>
          <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg">
            Reserve – Premium
          </a>
        </div>
      </section>
      {/* Important Info */}
      <ImportantInfo />
    </main>
    <Footer />
    </>
  );
}