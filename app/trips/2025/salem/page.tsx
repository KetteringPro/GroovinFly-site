import Image from "next/image";
import PricingTable from "../../../../components/PricingTable";

export default function SalemTripPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-8 space-y-10">
   
      {/* Header */}
      <div className="text-center">
        <Image src="/logo.png" alt="GroovinFly" width={220} height={80} className="mx-auto" />
        <h1 className="text-3xl font-bold text-purple-200 mt-4">
          🎃 Salem: Mystery, Magic & Mayhem
        </h1>
        <p className="text-white/70">October 17–20, 2025</p>
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
          <li>GroovinFly swag bag ✨</li>
          <li>Optional add-ons: tarot readings, VIP party tickets (TBD)</li>
        </ul>

        <div className="flex gap-3 my-3">
          <Image src="/images/salem/pumpkin.jpg" alt="Salem pumpkin" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" priority />
          <Image src="/images/salem/party.jpg" alt="Halloween party" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
          <Image src="/images/salem/village.jpg" alt="Salem village" width={1200} height={800} className="rounded-lg object-cover w-1/3 h-[220px]" />
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
        <p className="text-white/90 mb-1">
          💵 <strong>$399 Per Person – Shared Bed</strong> · <strong>$699 Solo Bed</strong>
        </p>
        <p className="text-sm text-white/70">✔ Flexible payments available at checkout (Klarna/Affirm)</p>

        <div className="mt-4">
          <PricingTable
            pricingTableId="prctbl_1S8oJz34mCT6dVb4FxEH2C9c"   // replace with your live ID
            publishableKey="pk_live_51S8Rci34mCT6dVb4Bt44fcN1vSM0gooknDMfHTjTyG90h0TtiDgI9QRvCfJ9iY45op2jCDMOy7mfx65hrxgAEhfG00PHT59AYi"  // replace with your live key
          />
        </div>
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
  );
}