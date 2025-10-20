// app/portal/page.tsx — SERVER
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

export default async function PortalHome() {
  const { data: { user } } = await supabaseServer.auth.getUser();
  if (!user) redirect("/login");

  // quick counts (optional)
  const [{ count: tripCount }, { count: orderCount }] = await Promise.all([
    supabaseServer.from("bookings").select("*", { count: "exact", head: true }).eq("user_id", user.id),
    supabaseServer.from("orders").select("*", { count: "exact", head: true }).eq("user_id", user.id),
  ]);

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <a href="/portal/trips" className="rounded-xl border p-5 hover:bg-neutral-50">
        <h2 className="text-xl font-semibold">Upcoming Trips</h2>
        <p className="opacity-75 mt-1">{tripCount ?? 0} booking(s)</p>
      </a>
      <a href="/portal/orders" className="rounded-xl border p-5 hover:bg-neutral-50">
        <h2 className="text-xl font-semibold">Merch Orders</h2>
        <p className="opacity-75 mt-1">{orderCount ?? 0} order(s)</p>
      </a>
    </section>
  );
}