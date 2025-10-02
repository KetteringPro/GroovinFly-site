import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const body = await req.json();
  const { error } = await supabaseServer.from("leads").insert({
    full_name: body.full_name || null,
    email: body.email,
    trip_slug: body.trip_slug || null,
    source: body.source || "website",
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}