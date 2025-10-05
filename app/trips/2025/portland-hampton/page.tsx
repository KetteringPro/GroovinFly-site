import Image from "next/image";
import ImportantInfo from "../../../../components/ImportantInfo";


export default function PortlandHamptonTripPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
   

     <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
  <Image
    src="/images/banners/port-hamp.jpg"
    alt="Port Hampton 2025 Banner"
    fill
    sizes="100vw"
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-4xl font-bold text-purple-200 drop-shadow-lg">
      🌊 Portland to Hampton Getaway
    </h1>
    <p className="text-lg mt-2">Last hurrah before the holidays!</p>
  </div>
</div>

      {/* Gallery */}
      <section aria-labelledby="portland-hampton-gallery" className="space-y-4">
        <h2 id="portland-hampton-gallery" className="text-2xl font-semibold text-purple-200">Gallery</h2>
        <p className="text-white/80 text-sm">A quick look at the weekend vibes — Portland city nights, Hampton beach mornings, and everything in between.</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            '/images/portland-hampton/gallery-1.jpg',
            '/images/portland-hampton/gallery-2.jpg',
            '/images/portland-hampton/gallery-3.jpg',
          ].map((src, i) => (
            <figure key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={`Portland–Hampton gallery image ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                className="object-cover"
                priority={i < 2}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          A high-energy girls’ weekend to let loose before the holiday chaos.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>Private Facebook group for trip prep, outfit planning, and activity discussions</li>
          <li>Lodging in Portland (Fri) + Hampton Beach (Sat)</li>
          <li>Magic Mike Live tickets + Ubers (Fri night)</li>
          <li>Afterparty in Old Port (drinks on your own)</li>
          <li>Bar crawl vibes in Hampton (Sat, drinks on your own)</li>
          <li>Sunday brunch at The Goat (includes 1 cocktail)</li>
          <li>Rooms stocked with snacks &amp; water</li>
          <li>GroovinFly swag bag ✨</li>
          <li>Optional add-on: Bret Michaels concert (TBD)</li>
        </ul>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>We share spaces — sometimes even beds (no funny business, weirdos! — or groovers).</p>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing & Booking</h2>
        <p className="text-white/90 mb-1">
          💵 <strong>$399 Per Person – Shared Bed</strong> · <strong>$699 Solo Bed</strong>
        </p>
        <p className="text-sm text-white/70">✔ Flexible payments available at checkout (Klarna/Affirm)</p>

        {/* Direct payment links (replace # with your Stripe links if not using a pricing table) */}
        <div className="mt-4 flex gap-3 flex-wrap">
          <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg">
            Reserve – Shared
          </a>
          <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-lg">
            Reserve – Solo
          </a>
        </div>
      </section>
      
    </main>
  );
}