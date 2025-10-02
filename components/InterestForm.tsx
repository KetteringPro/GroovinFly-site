"use client";

import { useState } from "react";

export default function InterestForm({ tripSlug }: { tripSlug: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const disabled = !email || sent;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          trip_slug: tripSlug,
          source: "website",
        }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed");
      setSent(true);
    } catch (e: any) {
      setErr(e.message || "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white text-black px-4 py-3 rounded-xl w-full sm:w-80"
      />
      <button
        type="submit"
        disabled={disabled}
        className="px-5 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold disabled:opacity-60"
      >
        {sent ? "Thanks! We’ll email you" : "Register interest"}
      </button>
      {err && <div className="text-sm text-red-300 text-center sm:text-left">{err}</div>}
    </form>
  );
}