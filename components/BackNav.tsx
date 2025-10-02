// components/BackNav.tsx
import Link from "next/link";

type Props = {
  current?: "2025" | "2026" | null;   // which pill should be highlighted
  showHome?: boolean;                 // include Home button
  show2025?: boolean;                 // include 2025 button
  show2026?: boolean;                 // include 2026 button
};

export default function BackNav({
  current = null,
  showHome = true,
  show2025 = true,
  show2026 = true,
}: Props) {
  const base = "px-3 py-1.5 rounded-md border text-sm";
  const idle = "bg-white/5 border-white/10 text-white/80 hover:bg-white/8";
  const active = "bg-fuchsia-500 border-transparent text-white font-semibold";

  return (
    <nav className="flex gap-3 mb-6">
      {showHome && (
        <Link href="/" className={`${base} ${idle}`}>Home</Link>
      )}
      {show2025 && (
        <Link
          href="/trips/2025"
          className={`${base} ${current === "2025" ? active : idle}`}
        >
          2025 Trips
        </Link>
      )}
      {show2026 && (
        <Link
          href="/trips/2026"
          className={`${base} ${current === "2026" ? active : idle}`}
        >
          2026 Trips
        </Link>
      )}
    </nav>
  );
}