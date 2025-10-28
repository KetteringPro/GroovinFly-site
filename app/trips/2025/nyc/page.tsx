"use client";
import React from "react";

export default function NycTripPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/banners/nyc-2025.jpg')" }}>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 md:px-12">
          <div className="absolute inset-0 bg-black bg-opacity-60 -z-10 rounded-none"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-200 mb-4 drop-shadow-sm">
            🎄 NYC Holiday Weekend
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-6 drop-shadow-sm">
            December 12–14, 2025 — Experience GroovinFly style!
          </p>
          <a
            href="#pricing"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Join us for an unforgettable holiday weekend in New York City! Celebrate the magic of Christmas with GroovinFly's signature style, including exclusive Rockettes Christmas Spectacular tickets, cozy accommodations, and festive experiences tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center text-gray-200">
          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-600">Location</h4>
            <p>New York City, NY</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-600">Dates</h4>
            <p>Dec 12–14, 2025</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-600">Lodging</h4>
            <p>2-night Hotel Stay</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-600">Transportation</h4>
            <p>Optional C&amp;J Luxury Coach</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-600">Flexible Payments</h4>
            <p>Klarna, Affirm, Afterpay</p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <img
            src="/images/nyc/cover.jpg"
            alt="NYC Trip Image 1"
            className="w-full md:w-1/3 rounded-xl shadow-lg object-cover h-64 md:h-[320px]"
            loading="lazy"
          />
          <img
            src="/images/nyc/statue-of-liberty.jpg"
            alt="NYC Trip Image 2"
            className="w-full md:w-1/3 rounded-xl shadow-lg object-cover h-64 md:h-[320px]"
            loading="lazy"
          />
          <img
            src="/images/nyc/rockefeller.jpg"
            alt="NYC Trip Image 3"
            className="w-full md:w-1/3 rounded-xl shadow-lg object-cover h-64 md:h-[320px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Pricing & Booking Section */}
      <section
        id="pricing"
        className="mt-20 bg-[#1a1a1a] text-white py-16 px-6 rounded-2xl shadow-lg border border-red-500/20 max-w-5xl mx-auto"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 text-green-400">
            🎄 NYC Holiday Weekend — Dec&nbsp;12–14,&nbsp;2025
          </h2>
          <div className="mb-6 font-bold text-white text-lg">
            December 12–14, 2025
          </div>

          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Experience the magic of Christmas in New York City —{" "}
            <strong>GroovinFly style!</strong>
            <br />
            Remember to mark your calendar for December 12–14, 2025!
            <br />
            All packages include <strong>Rockettes Christmas Spectacular tickets</strong>, hotel stay, and our signature welcome dinner.
          </p>

          <div className="bg-[#222] p-6 rounded-xl border border-green-500/30 mb-10 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">
              💫 What’s Included
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>🎫 Rockettes Christmas Spectacular tickets (included in all packages)</li>
              <li>🏨 2-night NYC hotel stay (shared or solo)</li>
              <li>🍽️ Welcome Dinner & GroovinFly Gift Bag</li>
              <li>🎡 The 3 NYC attractions of your choice + Bryant Park Winter Village</li>
              <li>🚌 Optional round-trip C&amp;J Luxury Coach from Portsmouth NH</li>
              <li>💳 Flexible payments available at checkout (Klarna / Affirm / Afterpay)</li>
            </ul>
          </div>

          <h3 className="text-3xl font-bold text-green-400 mb-4">
            💵 Pricing &amp; Booking
          </h3>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="table-auto w-full border border-gray-700 text-gray-200 mb-8">
              <thead className="bg-[#2b2b2b] text-green-400">
                <tr>
                  <th className="px-4 py-2">Package</th>
                  <th className="px-4 py-2">Bed Type</th>
                  <th className="px-4 py-2">Transportation</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-semibold">Holiday Premium</td>
                  <td className="px-4 py-3">Shared Bed</td>
                  <td className="px-4 py-3 text-green-400">Includes C&amp;J Coach</td>
                  <td className="px-4 py-3 font-bold text-white">$995</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-semibold">Holiday Premium</td>
                  <td className="px-4 py-3">Solo Bed</td>
                  <td className="px-4 py-3 text-green-400">Includes C&amp;J Coach</td>
                  <td className="px-4 py-3 font-bold text-white">$1,295</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-semibold">City Arrival</td>
                  <td className="px-4 py-3">Shared Bed</td>
                  <td className="px-4 py-3 text-gray-400">Meet up in Times Square</td>
                  <td className="px-4 py-3 font-bold text-white">$795</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-semibold">City Arrival</td>
                  <td className="px-4 py-3">Solo Bed</td>
                  <td className="px-4 py-3 text-gray-400">Meet up in Times Square</td>
                  <td className="px-4 py-3 font-bold text-white">$1,095</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Festive Reserve Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center max-w-4xl mx-auto">
            <a
              href="https://buy.stripe.com/eVqbIUaTtd6L6KB63B2Nq0L"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold shadow-md transition inline-block"
            >
              🎄 Reserve – Holiday Premium (Shared)
            </a>
            <a
              href="https://buy.stripe.com/4gM00c7Hh9Uz7OFdw32Nq0M"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold shadow-md transition inline-block"
            >
              🎄 Reserve – Holiday Premium (Solo)
            </a>
            <a
              href="https://buy.stripe.com/eVq5kwgdN0jZ1qh1Nl2Nq0N"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md transition inline-block"
            >
              🎅 Reserve – City Arrival (Shared)
            </a>
            <a
              href="https://buy.stripe.com/3cI6oAd1Bc2H0mdcrZ2Nq0O"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md transition inline-block"
            >
              🎅 Reserve – City Arrival (Solo)
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <footer className="bg-green-700 text-white font-semibold text-center py-6 mt-12 shadow-lg">
        <a href="#pricing" className="hover:underline inline-block">
          🎟️ Booking Deadline: Friday, November 21, 2025 — Rockettes tickets must be secured in advance.
        </a>
      </footer>
    </>
  );
}