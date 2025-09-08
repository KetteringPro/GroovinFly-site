"use client"; import { useState } from "react";
export default function Reserve(){ const [s,set]=useState({full_name:"",email:"",trip_slug:""});
async function submit(e:React.FormEvent){ e.preventDefault();
 await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s,source:"reserve"})});
 alert("Thanks! We'll reach out with next steps."); set({full_name:"",email:"",trip_slug:""}); }
return (<div className="max-w-xl mx-auto p-6"><h1 className="text-3xl font-extrabold">Reserve Interest</h1>
<form onSubmit={submit} className="mt-6 space-y-4">
  <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20" placeholder="Full name"
    value={s.full_name} onChange={e=>set({...s,full_name:e.target.value})}/>
  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20" placeholder="Email"
    value={s.email} onChange={e=>set({...s,email:e.target.value})}/>
  <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20" placeholder="Trip slug (e.g., ultra-miami-2026)"
    value={s.trip_slug} onChange={e=>set({...s,trip_slug:e.target.value})}/>
  <button className="px-6 py-3 rounded-xl bg-fuchsia-500 font-bold">Save</button>
</form><p className="mt-3 text-sm text-white/60">Deposits coming soon. Travel insurance required (Allianz recommended).</p></div>); }