"use client";
import React from "react";
import Image from "next/image";

interface TripTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: React.ReactNode;
  highlights: string[];
  stripeLinks: { shared: string; private: string };
  travelTips: {
    arrival: {
      airport: string;
      arrivalDate: string;
      details: string[];
    };
    departure: {
      marina: string;
      departureDate: string;
      details: string[];
    };
    packing: string[];
    currency: string;
    proTip: string;
  };
}

export default function TripTemplate({
  title,
  subtitle,
  heroImage,
  description,
  highlights,
  stripeLinks,
  travelTips,
}: TripTemplateProps) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-12 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={heroImage}
          alt={title}
          width={1600}
          height={900}
          className="object-cover w-full h-[400px] opacity-90"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-300 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">{subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
        {description}
      </section>

      {/* Highlights */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Trip Highlights</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Travel Tips */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-pink-200 mb-2">Arrival</h3>
            <p className="text-gray-200">{travelTips.arrival.airport}</p>
            <p className="text-gray-400">{travelTips.arrival.arrivalDate}</p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              {travelTips.arrival.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-200 mb-2">Departure</h3>
            <p className="text-gray-200">{travelTips.departure.marina}</p>
            <p className="text-gray-400">{travelTips.departure.departureDate}</p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              {travelTips.departure.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-pink-200 mb-2">Packing Tips</h3>
          <ul className="list-disc pl-6 text-gray-300">
            {travelTips.packing.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-gray-300">💰 Currency: {travelTips.currency}</p>
          <p className="italic text-gray-400 mt-1">💡 {travelTips.proTip}</p>
        </div>
      </section>

      {/* Booking Buttons */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Reserve Your Spot</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={stripeLinks.shared}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Reserve – Shared
          </a>
          <a
            href={stripeLinks.private}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Reserve – Private
          </a>
        </div>
      </section>
    </main>
  );
}