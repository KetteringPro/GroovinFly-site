export default function Responsibilities({ className = "" }) {
  return (<div className={className}>
    <h3 className="text-xl font-bold">Your Responsibilities</h3>
    <ul className="mt-3 space-y-2">
      <li>✈️ Travel to the destination unless flights/transfers are included.</li>
      <li>🍽️ Food is on your own unless listed in the itinerary.</li>
      <li>🧭 If separated, you’re responsible for getting back to lodging (Uber/taxi/shuttle).</li>
      <li>🎉 Most importantly: let loose & have FUN!</li>
    </ul>
    <p className="text-sm text-white/60 mt-2">Travel insurance is mandatory (Allianz recommended). By reserving, you agree to our waiver.</p>
  </div>);
}