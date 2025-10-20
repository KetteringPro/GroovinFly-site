// app/portal/trips/page.tsx — SERVER
import Image from "next/image";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

export default async function MyTrips() {
  const { data: { user } } = await supabaseServer.auth.getUser();
  if (!user) redirect("/login");

  const { data: bookings } = await supabaseServer
    .from("bookings")
    .select("id, trip_id, status, start_date, end_date, amount_cents, currency")
    .eq("user_id", user.id)
    .order("start_date", { ascending: true });

  const tripIds = (bookings ?? []).map(b => b.trip_id);
  const { data: trips } = tripIds.length
    ? await supabaseServer.from("trips")
        .select("id, name, location, start_date, end_date, hero_image_url")
        .in("id", tripIds)
    : { data: [] as any[] };

  const tripById = new Map(trips?.map(t => [t.id, t]));

  if (!bookings?.length) {
    return <p className="opacity-70">No upcoming trips yet.</p>;
  }

  return (
    <div className="grid gap-6">
      {bookings.map(b => {
        const t = tripById.get(b.trip_id);
        return (
          <div key={b.id} className="rounded-2xl border p-4 flex gap-4">
            {t?.hero_image_url ? (
              <Image src={t.hero_image_url} alt={t.name} width={160} height={120} className="rounded-lg object-cover" unoptimized />
            ) : <div className="w-[160px] h-[120px] bg-neutral-200 rounded-lg" />}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{t?.name ?? "Trip"}</h3>
              <p className="text-sm opacity-80">
                {t?.location ? `${t.location} • ` : ""}{t?.start_date} – {t?.end_date}
              </p>
              <p className="text-sm mt-1">Status: <span className="font-medium">{b.status}</span></p>
              <p className="text-sm opacity-80">
                {(b.amount_cents ?? 0) / 100} {(b.currency ?? "usd").toUpperCase()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}