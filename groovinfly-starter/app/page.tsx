"use client"; import { useState } from "react"; import Link from "next/link";
export default function Home(){ const [email,setEmail]=useState(""); const [sending,setSending]=useState(false);
async function submit(e:React.FormEvent){ e.preventDefault(); setSending(true);
 await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,source:"homepage"})});
 setSending(false); setEmail(""); alert("Thanks! We'll be in touch.");}
return (<main className="max-w-6xl mx-auto p-6">
  <header className="text-center py-16">
    <p className="uppercase tracking-[0.3em] text-fuchsia-300/80 text-sm">GroovinFly • 2026 Trips</p>
    <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">Age gracefully. Party like the rockstar you are.</h1>
    <p className="mt-4 text-lg md:text-xl text-white/80">High‑energy, small‑group travel for fearless women (40+).</p>
    <div className="mt-8 flex gap-3 justify-center">
      <Link href="/trips" className="px-6 py-3 rounded-2xl bg-fuchsia-500 font-bold">See 2026 Trips</Link>
      <a href="#join" className="px-6 py-3 rounded-2xl border border-white/20">Join Interest List</a>
    </div>
  </header>
  <section id="join" className="max-w-xl mx-auto text-center">
    <form onSubmit={submit} className="mt-6 grid grid-cols-[1fr_auto] gap-3">
      <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="you@email.com"
        className="px-4 py-3 rounded-xl bg-white/10 border border-white/20" />
      <button disabled={sending} className="px-6 py-3 rounded-xl bg-fuchsia-500 font-bold">{sending?"Saving…":"Get Updates"}</button>
    </form>
    <p className="mt-3 text-xs text-white/60">Replace with your Mailchimp/ConvertKit embed.</p>
  </section>
</main>); }