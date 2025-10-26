import Image from "next/image";
import Link from "next/link";

export default function Miami2026Page() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">

      {/* Hero Banner */}
      <section aria-label="Hero banner" className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/miami/hero.jpg"
          alt="Ultra Miami skyline and main stage"
          width={1600}
          height={640}
          priority
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-200 drop-shadow-lg">
            🎧 Miami, FL: Ultra Music Festival 2026
          </h1>
          <p className="text-white/90 mt-2 text-lg md:text-xl">
            Thu Mar 26 – Mon Mar 30, 2026 · Festival: Mar 27–29 · Bayfront Park
          </p>
        </div>
      </section>

      {/* Vibe & Inclusions */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
        <p className="text-white/90">
          Three days of world-class EDM on the bay, high-energy crowds, and warm Miami nights with the GroovinFly crew.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li><strong>Lodging:</strong> Holiday Inn Port of Miami-Downtown (easy walk to Bayfront Park), 4 nights</li>
          <li><strong>Tickets:</strong> Bundled once secured (we track official drops + verified resale)</li>
          <li>Private Facebook group for prep, outfits, and meetups</li>
          <li>Rooms stocked with snacks &amp; water + GroovinFly swag bag ✨</li>
          <li>Optional add-ons: pre/post-party passes, beach day, Wynwood crawl (TBD)</li>
        </ul>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-2">
          {[
            { src: '/images/miami/crowd.jpg',  alt: 'EDM crowd at sunset' },
            { src: '/images/miami/dj.jpg',     alt: 'DJ performing with lasers' },
            { src: '/images/miami/skyline.jpg', alt: 'Miami skyline at dusk' }
          ].map((img, i) => (
            <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                className="object-cover"
                priority={i < 2}
              />
            </figure>
          ))}
        </div>

        <div className="text-sm italic text-white/70 border-t border-white/10 pt-3">
          <h3 className="text-purple-200 font-semibold not-italic mb-1">Important Trip Details 🛏️</h3>
          <p>
            We share spaces — sometimes even beds — so community is key. Expect late-night energy (fest ends late) and a lively vibe.
          </p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li>💜 <strong>Shared</strong> = share a bed/room with another Groover.</li>
            <li>💜 <strong>Solo</strong> = your own bed (limited, upcharge).</li>
            <li>💜 Guide travels comped (host model). Flexible payments available at checkout.</li>
          </ul>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="text-center mt-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="https://buy.stripe.com/4gM7sE7Hh8QvglbajR2Nq0y"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex-1"
          >
            <div className="flex flex-col items-center justify-center">
              <span>Book Shared Bed / Shared Room</span>
              <span>
                <s>$2,599</s> <strong>$2,299</strong> (Early Groover!)
              </span>
            </div>
          </Link>
          <Link
            href="https://buy.stripe.com/3cI14gaTt2s76KB63B2Nq0z"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-4 py-2 rounded-lg flex-1"
          >
            <div className="flex flex-col items-center justify-center">
              <span>Book Solo Bed / Shared Room</span>
              <span>
                <s>$2,899</s> <strong>$2,599</strong> (Early Groover!)
              </span>
            </div>
          </Link>
        </div>
        <p className="text-sm text-white/60 mt-2">
          Installments via Klarna / Affirm / Afterpay available.
        </p>
      </section>

      {/* Add-ons */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
        <h2 className="text-2xl font-semibold text-purple-200 mb-2">Optional Add-Ons</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/80">
          <li>Pre/Post-Parties (Ultra Week) – TBD</li>
          <li>Beach Day + Wynwood Walls Crawl – TBD</li>
          <li>Ticket Upgrade / VIP – TBD</li>
        </ul>
      </section>
    </main>
  );
}