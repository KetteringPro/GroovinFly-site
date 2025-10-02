

export const metadata = {
  title: "Contact — GroovinFly",
  description: "How to reach the GroovinFly team for bookings, changes, or support.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-white space-y-8">
      <h1 className="text-3xl font-bold text-purple-200">Contact Us</h1>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-white/85">
          We’re here to help with bookings, payment questions, transfers, or anything else.
          We’re based in Maine, USA.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/85">
          <li>
            Email:{" "}
            <a
              className="underline hover:text-fuchsia-300"
              href="mailto:support@groovinfly.com"
            >
              support@groovinfly.com
            </a>
          </li>
          <li>Facebook Group: link provided in your trip confirmation</li>
        </ul>
      </section>

      <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-purple-200">Response Time</h2>
        <p className="text-white/85">
          We try to reply within 1–2 business days. For urgent issues during a trip,
          use the host contact provided in your itinerary.
        </p>
      </section>
    </main>
  );
}