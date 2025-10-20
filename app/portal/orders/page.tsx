// app/portal/orders/page.tsx — SERVER
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

type Order = {
  id: string;
  total_cents: number | null;
  currency: string | null;
  status: string | null;
  created_at: string;
  user_id?: string;
};

export default async function MyOrders() {
  // ✅ Verify user session
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();

  if (!user) redirect("/login");

  // ✅ Fetch orders for this user
  const { data: orders, error } = await supabaseServer
    .from("orders")
    .select("id, total_cents, currency, status, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading orders:", error.message);
    return <p className="opacity-70 text-red-500">Failed to load orders.</p>;
  }

  if (!orders?.length) {
    return <p className="opacity-70">No orders yet.</p>;
  }

  // ✅ Render order list
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead className="text-sm opacity-70">
          <tr>
            <th className="px-3">Order #</th>
            <th className="px-3">Date</th>
            <th className="px-3">Status</th>
            <th className="px-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o: Order) => (
            <tr key={o.id} className="bg-neutral-100 rounded-xl">
              <td className="px-3 py-3 font-medium">{o.id}</td>
              <td className="px-3">
                {new Date(o.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td className="px-3 capitalize">{o.status ?? "N/A"}</td>
              <td className="px-3">
                {((o.total_cents ?? 0) / 100).toFixed(2)}{" "}
                {(o.currency ?? "usd").toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}