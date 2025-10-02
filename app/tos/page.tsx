export const metadata = {
  title: "Terms of Service — GroovinFly",
  description:
    "Key terms for booking GroovinFly trips: payments, cancellations, transfers, conduct, and safety.",
};

export default function TosPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-white space-y-8">
      <h1 className="text-3xl font-bold text-purple-200">Terms of Service</h1>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Booking & Payments</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>All prices are in USD. Payments are processed securely via Stripe.</li>
          <li>Flexible payment options may be available at checkout (Affirm / Klarna).</li>
          <li>
            Bookings are <strong>non-refundable within 30 days</strong> of the trip start date, but are
            <strong> transferable</strong> to another person. You’re responsible for arranging the transfer and
            notifying us in writing.
          </li>
          <li>Travel insurance is strongly recommended for all trips.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Trip Changes & Cancellations</h2>
        <p className="text-white/85">
          Venues, artists, schedules, lodging, and transportation are subject to change. If a
          material change occurs, we’ll make commercially reasonable efforts to provide an
          equivalent alternative. Force majeure events (e.g., weather, strikes, government
          actions) are outside our control and may impact itineraries without refund.
        </p>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Community & Conduct</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>GroovinFly trips are women-first spaces. Respect boundaries and consent at all times.</li>
          <li>Some trips include shared rooms or shared beds. Be considerate in shared spaces.</li>
          <li>We may remove any participant engaging in unsafe, abusive, or illegal behavior; no refunds will be issued.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Assumption of Risk & Liability</h2>
        <p className="text-white/85">
          By participating, you acknowledge inherent risks associated with travel and events and
          agree that GroovinFly (including hosts/contractors) is not liable for personal injury,
          property loss, or third-party acts to the fullest extent permitted by law.
        </p>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Eligibility & Governing Law</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>Participants must be 21+ unless otherwise noted.</li>
          <li>These Terms are governed by the laws of the State of Maine, USA.</li>
        </ul>
      </section>

      <p className="text-sm text-white/70">
        Questions? See our <a href="/privacy" className="underline hover:text-fuchsia-300">Privacy Policy</a> or
        <a href="/contact" className="underline hover:text-fuchsia-300"> Contact Us</a>.
      </p>
    </main>
  );
}