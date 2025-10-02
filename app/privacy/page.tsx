export const metadata = {
  title: "Privacy Policy — GroovinFly",
  description:
    "How GroovinFly collects, uses, and protects your information when you book and travel with us.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-white space-y-8">
      <h1 className="text-3xl font-bold text-purple-200">Privacy Policy</h1>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">What We Collect</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>Contact info (name, email, phone) and booking details you provide.</li>
          <li>Payment details are handled by Stripe; we do not store full card numbers.</li>
          <li>Basic site analytics and device data to improve our services.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">How We Use It</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>To process bookings, send confirmations, and share trip updates.</li>
          <li>To provide customer support and handle transfers or changes.</li>
          <li>To improve our website and trip offerings.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Sharing & Security</h2>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>We do not sell your data. We share only with vendors essential to your booking (e.g., Stripe).</li>
          <li>We use reasonable administrative, technical, and physical safeguards to protect data.</li>
          <li>You can request access, correction, or deletion of your data by contacting us.</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Retention & Updates</h2>
        <p className="text-white/85">
          We keep booking records as required for operations, dispute resolution, and legal compliance.
          We may update this policy from time to time; material changes will be posted here.
        </p>
      </section>

      <p className="text-sm text-white/70">
        Questions? <a href="/contact" className="underline hover:text-fuchsia-300">Contact us</a> any time.
      </p>
    </main>
  );
}