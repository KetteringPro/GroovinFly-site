'use client';

import React from 'react';
import Link from 'next/link'; // (kept; safe if unused)
import Footer from "../../../../components/Footer";
import Image from 'next/image';

// --- Checkout links + soft inventory (Coachella) ---
type TripOptionKey = string;
function getCheckoutLink(tripKey: string, optionKey: TripOptionKey) {
  const envName = `NEXT_PUBLIC_STRIPE_LINK_${tripKey}_${optionKey}`;
  const url = process.env[envName as keyof NodeJS.ProcessEnv] as string | undefined;
  return (typeof url === 'string' && url.startsWith('http')) ? url : '#';
}

// Global soft cap (sell up to 11 of 14); update SOLD via env or later via webhook
const COACH_TOTAL     = Number(process.env.NEXT_PUBLIC_INV_COACHELLA_TOTAL ?? 14);
const COACH_SELL_MAX  = Number(process.env.NEXT_PUBLIC_INV_COACHELLA_SELL_MAX ?? 11);
const COACH_SOLD      = Number(process.env.NEXT_PUBLIC_INV_COACHELLA_SOLD ?? 0);
const COACH_AVAILABLE = Math.max(0, Math.min(COACH_SELL_MAX, COACH_TOTAL) - COACH_SOLD);

// Customer-visible options (prices + caps)
const COACHELLA_OPTIONS: { label: string; optionKey: string; price: number; cap?: number; aria: string }[] = [
  { label: "Let's Groove! Omni Premium",                        optionKey: "OMNI_PREMIUM",      price: 2999, cap: 8, aria: "Checkout for Coachella Omni Premium option" },
  { label: "Let's Groove! Holiday Inn Express Shared King",     optionKey: "HIE_SHARED_KING",   price: 1999, cap: 4, aria: "Checkout for Coachella Holiday Inn Express shared king option" },
  { label: "Let's Groove! Holiday Inn Express Pullout",         optionKey: "HIE_PULLOUT",       price: 1799, cap: 2, aria: "Checkout for Coachella Holiday Inn Express pullout option" },
];

export default function Coachella2026Page() {
  return (
    <>
      <main className="min-h-screen bg-[#0b0713] text-white">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 mt-6">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/coachella/hero.jpg"
              alt="Coachella festival crowd at sunset"
              className="w-full h-[320px] md:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">Coachella 2026 · Weekend 2</h1>
              <p className="text-lg md:text-xl opacity-90">
                April 17–20, 2026 · Indio, CA · Groovin’ Fly Premium & Budget Packages
              </p>
            </div>
          </div>
        </section>

        {/* The Vibe (with gallery like Salem) */}
        <section className="max-w-6xl mx-auto px-4 mt-10">
          <div className="bg-white/5 backdrop-blur rounded-3xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">The Vibe</h2>
            <p className="opacity-90 mb-4">
              Desert sunsets, world-class stages, and a dialed-in crew. We handle the logistics so you can live in the moment.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Groovin’ Fly-hosted group: arrivals chat, outfit planning, and meet-ups</li>
              <li>Premium resort (Omni) or budget-friendly (Holiday Inn Express) lodging options</li>
              <li>Daily shuttle passes to/from the festival — no driving required</li>
              <li>Welcome kit + hydration essentials + surprise goodies</li>
              <li>Optional add-ons: brunch meet-up, photo ops, VIP upgrades (TBD)</li>
            </ul>

            {/* Gallery in the Vibe block — stacks on mobile */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: '/images/coachella/gallery-1.jpg', alt: 'Festival lights and crowd' },
                { src: '/images/coachella/gallery-2.jpg', alt: 'Palm trees at sunset' },
                { src: '/images/coachella/gallery-3.jpg', alt: 'Main stage fireworks' }
              ].map((img, i) => (
                <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="object-cover"
                    priority={i < 2}
                  />
                </figure>
              ))}
            </div>

            <div className="mt-5 text-sm opacity-80">
              <strong>Important Trip Details 🏁</strong>
              <p className="mt-1">
                These trips are designed for women who want to connect, explore, and have fun together.
                We share spaces — sometimes even beds — so community and respect are key. Solo-bed upgrades are limited and first-come.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Booking */}
        <section className="max-w-6xl mx-auto px-4 mt-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Pricing & Booking</h3>

          {/* Price list + soft inventory banner */}
          <ul className="opacity-90 mb-3 space-y-1">
            <li>Omni Premium — <strong>$2,999</strong> <span className="opacity-70">({COACHELLA_OPTIONS[0].cap} available)</span></li>
            <li>Holiday Inn Express Shared King — <strong>$1,999</strong> <span className="opacity-70">({COACHELLA_OPTIONS[1].cap} available)</span></li>
            <li>Holiday Inn Express Pullout — <strong>$1,799</strong> <span className="opacity-70">({COACHELLA_OPTIONS[2].cap} available)</span></li>
          </ul>
          <div className="text-sm opacity-80 mb-4">
            Max spots available {COACH_SELL_MAX} of {COACH_TOTAL}. Available now: {COACH_AVAILABLE}.
          </div>

          {/* CTA buttons (env-based Stripe Payment Links) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COACH_AVAILABLE <= 0 ? (
              <div className="col-span-full text-center opacity-80 border border-white/10 rounded-2xl py-3">
                Sold out or temporarily paused. Check back soon.
              </div>
            ) : (
              COACHELLA_OPTIONS.map(opt => (
                <a
                  key={opt.optionKey}
                  href={getCheckoutLink('COACHELLA', opt.optionKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-600 transition px-5 py-3 font-semibold"
                  aria-label={opt.aria}
                >
                  {opt.label}
                </a>
              ))
            )}
          </div>
          <p className="text-xs opacity-70 mt-2">Secure checkout via Stripe.</p>
        </section>

        {/* Important Info */}
        <section className="max-w-6xl mx-auto px-4 mt-10 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-3xl p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-semibold mb-3">Important Info</h4>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base opacity-90">
              <li>Participants must be 21+.</li>
              <li>Packages include: GA festival ticket, 4 nights lodging (room share as listed), and shuttle pass. Flights not included.</li>
              <li>Bookings become non-refundable 30 days before trip start; transfers allowed to eligible traveler.</li>
              <li>Travel insurance strongly recommended.</li>
              <li>Exact shuttle stop assignments depend on final hotel confirmations; we’ll match the correct zone for your hotel.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}