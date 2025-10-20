// app/portal/layout.tsx
import type { ReactNode } from "react";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-5xl mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <nav className="flex gap-3 mb-8 text-sm">
        <a href="/portal" className="underline">Dashboard</a>
        <a href="/portal/trips" className="underline">My Trips</a>
        <a href="/portal/orders" className="underline">My Orders</a>
      </nav>
      {children}
    </main>
  );
}