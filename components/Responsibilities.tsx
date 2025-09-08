type Props = { className?: string };

export default function Responsibilities({ className = "" }: Props) {
  return (
    <div className={`mt-8 ${className}`}>
      <h3 className="text-xl font-bold">Groover Guidelines</h3>
      <ul className="mt-3 space-y-2">
        <li>✈️ Get yourself to the destination unless flights/transfers are included.</li>
        <li>🍽️ Meals are on your own unless listed.</li>
        <li>🧭 If you get separated, you’re responsible for getting back to lodging (Uber/taxi/shuttle).</li>
        <li>🎉 Most importantly: let loose & HAVE FUN!</li>
      </ul>
    </div>
  );
}
