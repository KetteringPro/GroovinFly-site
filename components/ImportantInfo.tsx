"use client";
export default function ImportantInfo() {
  return (
    <section className="bg-white/5 rounded-2xl p-5 border border-white/10 mt-6">
      <h3 className="text-purple-300 font-semibold mb-2">Important Info</h3>
      <ul className="list-disc pl-5 space-y-1 text-white/90">
        <li>Participants must be 21+.</li>
        <li>These trips share rooms and sometimes beds. Community vibe is key.</li>
        <li>Bookings are non-refundable within 30 days of trip start, but transferable to another person.</li>
        <li>Travel insurance is strongly recommended.</li>
        <li>Flexible payments available at checkout (Affirm/Klarna).</li>
      </ul>
    </section>
  );
}