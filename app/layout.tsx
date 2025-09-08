import "./globals.css"; import type { Metadata } from "next";
export const metadata: Metadata = { title:"GroovinFly — Age gracefully. Party like the rockstar you are.",
  description:"High‑energy, small‑group trips for fearless women (40+)." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-[#120a1f] text-white">{children}</body></html>);
}