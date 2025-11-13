

"use client";
import React from "react";

interface ArrivalInfo {
  airport: string;
  arrivalDate: string;
  details: string[];
}

interface DepartureInfo {
  marina: string;
  departureDate: string;
  details: string[];
}

interface TravelTipsProps {
  arrival: ArrivalInfo;
  departure: DepartureInfo;
  packing: string[];
  currency: string;
  proTip: string;
}

export default function TravelTips({
  arrival,
  departure,
  packing,
  currency,
  proTip,
}: TravelTipsProps) {
  return (
    <section className="mt-20 bg-gradient-to-b from-[#111] to-[#1a1a1a] text-white py-16 px-6 rounded-2xl shadow-lg border border-pink-500/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-pink-400">
          ✈️ Travel Tips
        </h2>

        {/* Arrival Info */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-pink-300">Arrival</h3>
          <p className="text-gray-300 mb-1">
            Fly into <strong>{arrival.airport}</strong> – arrive on{" "}
            {arrival.arrivalDate}.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            {arrival.details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Departure Info */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-pink-300">Departure</h3>
          <p className="text-gray-300 mb-1">
            Return to <strong>{departure.marina}</strong> – check out on{" "}
            {departure.departureDate}.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            {departure.details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Packing List */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-pink-300">Packing List</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            {packing.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Currency */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-pink-300">Currency</h3>
          <p className="text-gray-300">
            Croatia uses the <strong>{currency}</strong>. Credit cards are widely accepted,
            but it’s smart to carry a bit of cash for taxis and tips.
          </p>
        </div>

        {/* Pro Tip */}
        <div className="p-6 bg-[#222] rounded-xl border border-pink-500/20 text-center">
          <h3 className="text-xl font-semibold mb-2 text-pink-400">💡 Pro Tip</h3>
          <p className="text-gray-200 italic">{proTip}</p>
        </div>
      </div>
    </section>
  );
}