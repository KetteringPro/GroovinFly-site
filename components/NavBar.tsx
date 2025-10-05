import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex flex-wrap items-center gap-2">
          {/* Left: logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/icon-512.png"
              alt="GroovinFly"
              className="h-7 w-auto"
              decoding="async"
              loading="eager"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>

          {/* Center: primary links (Home, 2025, 2026, Merch) */}
          <div className="ml-2 flex items-center gap-2 flex-wrap">
            <Link href="/" className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white whitespace-nowrap shrink-0">
              Home
            </Link>
            <Link href="/trips" className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white whitespace-nowrap shrink-0">
              2025
            </Link>
            <Link href="/trips/2026" className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white whitespace-nowrap shrink-0">
              2026
            </Link>
            <Link
              href="/merch"
              className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white whitespace-nowrap shrink-0"
            >
              Merch
            </Link>
          </div>

          {/* Right side intentionally empty here; Bag is handled by floating toolbar in layout */}
          <div className="ml-auto" />
        </div>
      </nav>
    </header>
  );
}