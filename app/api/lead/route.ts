import { NextResponse } from "next/server"; import { supabase } from "@/lib/supabase";
export async function POST(req: Request){ const body = await req.json();
  if(!body?.email) return NextResponse.json({ error:"email required" },{ status:400 });
  const { error } = await supabase.from("leads").insert({ full_name: body.full_name || null, email: body.email, trip_slug: body.trip_slug || null, source: body.source || "website" });
  if(error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok:true });
}