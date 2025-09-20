"use client";
import Image from "next/image";
import ImportantInfo from "../../../components/ImportantInfo";

export default function Salem2025() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 mb-8">
        <Image
          src="/images/banners/salem-2025.jpg"
          alt="Salem 2025 Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="relative z-10 text-center py-16 bg-black/40">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-100">
            Salem: Mystery, Magic &amp; Mayhem
          </h1>
          <p className="mt-2 text-white/80">Pick your vibe and book your spot.</p>
        </div>
      </section>

      {/* Page title and hero content here */}

      {/* Pricing & Booking section */}
      <section>
        {/* Pricing & Booking content */}
      </section>

      <ImportantInfo />
    </main>
  );
}