"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setSending(true);
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setSending(false);
      setEmail("");
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-5 py-16">
      <header className="text-center">
        <p className="text-sm tracking-[0.25em] text-purple-300/80">
          GROOVINFLY • 2025 - 2026 TRIPS
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
          Age gracefully. <br /> Party like the rockstar
          you are.
        </h1>
        <p className="mt-4 text-lg text-white/80">
          High-energy, small-group travel for fearless women (40+).
        </p>

      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/groovin-fly.jpg"
          alt="Festival with plane overhead"
          fill
          className="object-cover object-[center_80%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Where Festivals Meet Travel ✈🎡
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
            GroovinFly 2026 Trips Now Live
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/trips/2025"
              className="px-6 py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold"
            >
              View 2025 Trips
            </Link>
            <Link
              href="/trips/2026"
              className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-bold"
            >
              View 2026 Trips
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-2xl mx-auto text-center bg-white/5 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-white/70 mb-6">
          Subscribe for exclusive trip updates, early access to bookings, and insider festival + travel news.
        </p>
        <div className="flex justify-center">
          <div className="kit-form w-full max-w-md mx-auto">
            <iframe
              src="https://groovin-fly.kit.com/5f4363dde4"
              scrolling="no"
              className="w-full h-[220px] border-0 rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}