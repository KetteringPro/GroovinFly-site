export const metadata = {
  title: "GroovinFly — Age gracefully. Party joyfully.",
  description: "High-energy small-group trips for fearless women.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/icon-192.png" }]
  }
};

export default function Home() {
  return (
    <main className="relative min-h-[80vh] overflow-hidden bg-[#160e1d]">
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-20
          [background-image:url('/logo-bg.png')]
          bg-no-repeat bg-center
          bg-contain
          mix-blend-screen
          blur-[0.5px]
        "
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.18),transparent_35%)]"
        aria-hidden
      />

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">
          Groovin<span className="text-fuchsia-400">Fly</span>
        </h1>
        <p className="mt-4 text-lg text-white/75">
          Age gracefully. Party joyfully. Curated, high-energy trips for fearless women.
        </p>

        <div className="mt-8">
          <a
            href="/reserve"
            className="
              inline-block px-8 py-3 rounded-xl font-bold
              bg-fuchsia-500
              shadow-[0_0_0_0_rgba(217,70,239,0.0)]
              transition-all duration-300
              hover:shadow-[0_0_28px_8px_rgba(217,70,239,0.55)]
              hover:scale-[1.03]
              focus:outline-none focus:ring-2 focus:ring-fuchsia-300/70
            "
          >
            Count me in!
          </a>
        </div>
      </section>
    </main>
  );
}
