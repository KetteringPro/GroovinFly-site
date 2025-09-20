import Image from "next/image";
import ImportantInfo from "../../../../components/ImportantInfo";


export default function PortlandHamptonTripPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
   

      {/* Header */}
      <div className="text-center">
        <Image src="/logo.png" alt="GroovinFly" width={220} height={80} className="mx-auto" />
        <h1 className="text-3xl font-bold text-purple-200 mt-4">
          🎉 Portland → Hampton: Last Hurrah Before the Holiday Madness
        </h1>
      </div>

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
          <li>Bar crawl &amp; boardwalk vibes in Hampton (Sat, drinks on your own)</li>
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