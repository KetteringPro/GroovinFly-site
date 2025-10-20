import Footer from "@/components/Footer";
import Image from "next/image";
import TripCTA from "@/components/TripCTA";

type TripOption = "SHARED" | "SOLO";
function getCheckoutLink(tripKey: string, option: TripOption) {
  const envName = `NEXT_PUBLIC_STRIPE_LINK_${tripKey}_${option}`;
  const url = process.env[envName as keyof NodeJS.ProcessEnv];
  return (typeof url === "string" && url.startsWith("http")) ? url : "#";
}

export default function SalemTripPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
     
        {/* Header */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/images/banners/salem-2025.jpg"
            alt="Salem 2025 Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl font-bold text-purple-200 drop-shadow-lg">
              🎃 Salem: Mystery, Magic &amp; Mayhem
            </h1>
            <p className="text-lg mt-2">October 24–27, 2025</p>
          </div>
        </div>

        {/* Vibe & Inclusions */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-purple-200">The Vibe</h2>
          <p className="text-white/90">
            A spooky-chic Halloween weekend full of history, haunted energy, and late-night fun.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>Private Facebook group for trip prep, outfit planning, and activity discussions</li>
            <li>Lodging in Danvers (Fri–Mon) with transfers into Salem</li>
            <li>Saturday group dinner (includes 1 alcoholic drink)</li>
            <li>Exploring shops, tours, haunted happenings</li>
            <li>Rooms stocked with snacks & water</li>
            <li>Groovin' Fly swag bag ✨</li>
            <li>Optional add-ons: tarot readings, VIP party tickets (TBD)</li>
          </ul>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-3">
            {[
              { src: '/images/salem/pumpkin.jpg', alt: 'Salem pumpkin' },
              { src: '/images/salem/party.jpg', alt: 'Halloween party' },
              { src: '/images/salem/village.jpg', alt: 'Salem village' }
            ].map((img, i) => (
              <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
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
              These trips are designed for women who want to connect, explore, and have fun together.
              We share spaces — sometimes even beds (no funny business, weirdos! — or groovers) — so community is key.
            </p>
          </div>
        </section>

        {/* Pricing (Stripe pricing table) */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-200 mb-2">Pricing & Booking</h2>
          <div className="text-white/90 mb-3">
            <div className="font-semibold">Salem, MA</div>
            <div>October 24–27, 2025</div>
          </div>
          <p className="text-white/90 mb-1">
            💵 <strong>$399 Per Person – Shared Bed</strong><br />
            💵 <strong>$699 Solo Bed</strong>
          </p>
          <p className="text-sm text-white/70">✔ Flexible payments available at checkout (Klarna / Affirm)</p>

          <div className="mt-4">
            <button disabled className="w-full px-5 py-3 rounded-lg bg-gray-500 text-white font-semibold cursor-not-allowed">
              SOLD OUT
            </button>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Thank you to everyone who joined our Salem Halloween interest list — this trip is now sold out!
            </p>
          </div>
          <p className="text-xs text-white/60 mt-2">Secure checkout via Stripe.</p>
        </section>
          
        {/* Key policies */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-7 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-200 mb-2">Important Info</h2>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>Participants must be 21+.</li>
            <li>Bookings are non-refundable after 30 days before the trip start date.</li>
            <li>Bookings are <strong>transferable</strong> to another eligible traveler.</li>
            <li>Travel insurance is strongly recommended.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}