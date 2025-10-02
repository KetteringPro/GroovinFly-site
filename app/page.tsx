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
          Age gracefully. <br /> Party like the rockstar you are.
        </h1>
        <p className="mt-4 text-lg text-white/80">
          High-energy, small-group travel for fearless women (40+).
        </p>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[72vh] flex items-center justify-center overflow-hidden rounded-xl">
        <Image
          src="/images/groovin-fly.jpg"
          alt="Festival with plane overhead"
          fill
          className="object-cover object-[center_80%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Social icons - top-left */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-3">
          <a
            href="https://facebook.com/GroovinFly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 hover:bg-[#1877F2]"
            title="Facebook"
          >
            {/* Facebook F */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          
          <a
            href="https://instagram.com/Groovin.Fly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
            title="Instagram"
          >
            {/* Instagram SVG */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 .001 7.001A3.5 3.5 0 0 0 12 9.5zm5.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@Groovin.Fly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 hover:bg-[#ff0050]"
            title="TikTok"
          >
            {/* Generic musical note icon as TikTok stand-in */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
              <path d="M14 3v8.5a3.5 3.5 0 1 1-2-3.162V5.25c0-.69.56-1.25 1.25-1.25H14zm2 0c1.087 1.466 2.66 2.532 4.5 2.9V9c-1.986-.28-3.83-1.132-5.25-2.43V21h-2V10.744a5.5 5.5 0 1 1-2-1.744V3h4.75z"/>
            </svg>
          </a>

          
          
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Where Festivals Meet Travel ✈🎡
          </h2>
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

      {/* Email capture */}
      <section className="mt-12 md:mt-14 max-w-2xl mx-auto text-center bg-white/5 p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Stay in the Loop</h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
          Subscribe for exclusive trip updates, early access to bookings, and insider festival + travel news.
        </p>

        <form onSubmit={submit} className="mx-auto mt-4 flex w-full max-w-lg items-center gap-3">
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="flex-1 rounded-xl bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-fuchsia-400"
          />
          <button
            type="submit"
            disabled={sending}
            className="rounded-xl bg-fuchsia-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0b0713] focus:ring-fuchsia-400 disabled:opacity-60"
          >
            {sending ? "Sending..." : "Subscribe"}
          </button>
        </form>

        <p className="mt-2 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
      </section>
    </main>
  );
}
