// app/trips/coachella-2026/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Footer from "../../../../components/Footer";

export default function Coachella2026Page() {
  return (
    <><main className="min-h-screen bg-[#0b0713] text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/coachella/hero.jpg"
            alt="Coachella festival crowd at sunset"
            className="w-full h-[320px] md:h-[380px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">Coachella 2026 · Weekend 2</h1>
            <p className="text-lg md:text-xl opacity-90">April 17–20, 2026 · Indio, CA · GroovinFly Premium & Budget Packages</p>
          </div>
        </div>
      </section>

      {/* The Vibe (with gallery like Salem) */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div className="bg-white/5 backdrop-blur rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">The Vibe</h2>
          <p className="opacity-90 mb-4">Desert sunsets, world‑class stages, and a dialed‑in crew. We handle the logistics so you can live in the moment.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>GroovinFly‑hosted group: arrivals chat, outfit planning, and meet‑ups</li>
            <li>Premium resort (Omni) or budget‑friendly (IHG) lodging options</li>
            <li>Daily shuttle passes to/from the festival — no driving required</li>
            <li>Welcome kit + hydration essentials + surprise goodies</li>
            <li>Optional add‑ons: brunch meet‑up, photo ops, VIP upgrades (TBD)</li>
          </ul>

          {/* Gallery in the Vibe block */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img src="/images/coachella/gallery-1.jpg" alt="Festival lights and crowd" className="h-52 w-full object-cover rounded-2xl" />
            <img src="/images/coachella/gallery-2.jpg" alt="Palm trees at sunset" className="h-52 w-full object-cover rounded-2xl" />
            <img src="/images/coachella/gallery-3.jpg" alt="Main stage fireworks" className="h-52 w-full object-cover rounded-2xl" />
          </div>

          <div className="mt-5 text-sm opacity-80">
            <strong>Important Trip Details 🏁</strong>
            <p className="mt-1">These trips are designed for women who want to connect, explore, and have fun together. We share spaces — sometimes even beds — so community and respect are key. Solo‑bed upgrades are limited and first‑come.</p>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">Pricing & Booking</h3>
        <p className="mb-4 opacity-90">12 guest spots total — launching with <strong>6 Omni</strong> and <strong>6 IHG</strong> bed spaces. Flexible payment plans available at checkout.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Omni Premium */}
          <div className="bg-white/5 rounded-2xl p-6 flex flex-col">
            <h4 className="text-xl font-bold">Omni Premium · Shared Queen</h4>
            <p className="text-sm opacity-80 mt-1">GA ticket · 4 nights at Omni Rancho Las Palmas · shuttle pass</p>
            <div className="mt-6 text-4xl font-extrabold">$3,200</div>
            <p className="opacity-80 text-sm mt-1">6 spots available</p>
            <Link href="/apply?pkg=coachella26-omni" className="mt-6 inline-flex justify-center items-center rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-600 transition px-5 py-3 font-semibold">Apply / Reserve</Link>
          </div>

          {/* HIE Shared King */}
          <div className="bg-white/5 rounded-2xl p-6 flex flex-col">
            <h4 className="text-xl font-bold">IHG Budget · Shared King</h4>
            <p className="text-sm opacity-80 mt-1">GA ticket · 4 nights at HIE Rancho Mirage · shuttle pass</p>
            <div className="mt-6 text-4xl font-extrabold">$2,200</div>
            <p className="opacity-80 text-sm mt-1">4 spots available</p>
            <Link href="/apply?pkg=coachella26-hie-king" className="mt-6 inline-flex justify-center items-center rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-600 transition px-5 py-3 font-semibold">Apply / Reserve</Link>
          </div>

          {/* HIE Pullout */}
          <div className="bg-white/5 rounded-2xl p-6 flex flex-col">
            <h4 className="text-xl font-bold">IHG Budget · Pullout</h4>
            <p className="text-sm opacity-80 mt-1">GA ticket · 4 nights at HIE Rancho Mirage · shuttle pass</p>
            <div className="mt-6 text-4xl font-extrabold">$2,000</div>
            <p className="opacity-80 text-sm mt-1">2 spots available</p>
            <Link href="/apply?pkg=coachella26-hie-pullout" className="mt-6 inline-flex justify-center items-center rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-600 transition px-5 py-3 font-semibold">Apply / Reserve</Link>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="max-w-6xl mx-auto px-4 mt-10 mb-16">
        <div className="bg-white/5 backdrop-blur rounded-3xl p-6 md:p-8">
          <h4 className="text-xl md:text-2xl font-semibold mb-3">Important Info</h4>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base opacity-90">
            <li>Participants must be 21+.</li>
            <li>Packages include: GA festival ticket, 4 nights lodging (room share as listed), and shuttle pass. Flights not included.</li>
            <li>Bookings become non‑refundable 30 days before trip start; transfers allowed to eligible traveler.</li>
            <li>Travel insurance strongly recommended.</li>
            <li>Exact shuttle stop assignments depend on final hotel confirmations; we’ll match the correct zone for your hotel.</li>
          </ul>
        </div>
      </section>
    </main><Footer /></>
  );
}
