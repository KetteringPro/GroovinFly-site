// app/trips/layout.tsx
import type { ReactNode } from "react";
import BackNav from "../../components/BackNav";

export default function TripsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-5xl mx-auto px-5 py-6">
      <BackNav current={null} showHome show2025 show2026 />
      {children}
    </main>
  );
}