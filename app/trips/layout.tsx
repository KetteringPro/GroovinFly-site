// app/trips/layout.tsx
import type { ReactNode } from "react";

export default function TripsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-5xl mx-auto px-5 py-6">
      {children}
    </main>
  );
}