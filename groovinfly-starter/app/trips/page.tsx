import Link from "next/link"; import { trips } from "@/lib/trips";
export default function Trips(){ return (<div className="max-w-6xl mx-auto p-6">
  <h1 className="text-3xl font-extrabold">2026 Trips</h1>
  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {trips.map(t=>(<Link key={t.slug} href={`/trips/${t.slug}`} className="p-5 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15">
      <div className="text-sm uppercase tracking-wide text-white/70">{t.dates}</div>
      <h3 className="text-xl font-bold mt-1">{t.title}</h3>
      <p className="text-white/80 mt-2">{t.blurb}</p>
      <div className="mt-3 flex gap-2 text-xs flex-wrap">{t.tags.map(tag=>(<span key={tag} className="px-3 py-1 rounded-full bg-white/10">{tag}</span>))}</div>
    </Link>))}
  </div>
</div>); }