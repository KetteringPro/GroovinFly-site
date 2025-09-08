"use client";

import { useMemo, useState } from "react";
import { trips } from "@/lib/trips";

function fmtMonthYear(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, { month: "2-digit", year: "numeric" });
}

export default function Reserve() {
  const [form, setForm] = useState({ full_name: "", email: "", trip_slug: "" });

  const options = useMemo(
    () =>
      trips.map((t) => ({
        value: t.slug,
        label: `${t.title} — ${fmtMonthYear(t.start_date)}`
      })),
    []
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "reserve" }),
    });
    alert("Thanks! We’ll reach out with next steps.");
    setForm({ full_name: "", email: "", trip_slug: "" });
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold">Reserve Interest</h1>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <input
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20"
          placeholder="Full name"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
        />

        <input
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div>
          <label className="block mb-1 text-sm text-white/70">Select your trip</label>
          <select
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20"
            value={form.trip_slug}
            onChange={(e) => setForm({ ...form, trip_slug: e.target.value })}
          >
            <option value="" disabled>Choose a trip…</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <button
          className="
            px-6 py-3 rounded-xl font-bold
            bg-fuchsia-500
            shadow-[0_0_0_0_rgba(217,70,239,0.0)]
            transition-all duration-300
            hover:shadow-[0_0_25px_6px_rgba(217,70,239,0.55)]
            hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-fuchsia-300/70
          "
        >
          Count me in!
        </button>
      </form>

      <p className="mt-3 text-sm text-white/60">
        Details coming soon — get ready to join the adventure!
      </p>
    </div>
  );
}
