// app/merch/page.tsx — SERVER COMPONENT
import Image from "next/image";
import { supabaseServer } from "@/lib/supabaseServer";
import Checkout from "./Checkout"; // default export from client component

export default async function Page() {
  // Load active products
  const { data: products, error: pErr } = await supabaseServer
    .from("products")
    .select("id,name,description,image_url,active,price_cents,currency")
    .eq("active", true)
    .order("name");

  if (pErr) {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 py-10">
              <div className="mb-6 flex items-center justify-between">
      <nav className="flex gap-2 text-sm">
        <a href="/" className="inline-block px-3 py-1.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-black">Home</a>
        <a href="/#trips" className="inline-block px-3 py-1.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-black">Trips</a>
      </nav>
    </div>
          <h1 className="text-4xl font-bold mb-8">GroovinFly Merch</h1>
          <p className="opacity-70">We couldn't load products right now. Please try again soon.</p>
        </div>
      </main>
    );
  }

  const prodIds = (products ?? []).map((p) => p.id);
  const { data: variants } = prodIds.length
    ? await supabaseServer
        .from("product_variants")
        .select("id,product_id,variant_name,price_cents,currency,active")
        .in("product_id", prodIds)
        .eq("active", true)
        .order("variant_name")
    : { data: [] as any[] };

  const byProduct = new Map<string, any[]>();
  (variants ?? []).forEach((v) => {
    if (!byProduct.has(v.product_id)) byProduct.set(v.product_id, []);
    byProduct.get(v.product_id)!.push(v);
  });

  const activeProducts = (products ?? []).filter((p) => p.active);

  // ---- Explicit merch ordering (Apparel → Bags/Accessories → Drinkware) ----
  // Put each product's exact name as it appears in products.name
  const explicitOrder: Record<string, number> = {
    // Apparel
    "Groovin' Fly Crop Hoodie": 1,
    "Groovin' Fly Premium Hoodie": 1,
    "Groovin' Fly Racerback Tank": 1,
    "Groovin' Fly Ladies' Muscle Tank": 1,
    

    // Bags & Accessories
    "Groovin' Fly Clear Tote Bag": 2,
    "Groovin' Fly Tote Bag": 2,
    "Groovin' Fly Trucker Cap": 2,

    // Drinkware
    "Groovin' Fly Insulated Tumbler": 3,
    "Groovin' Fly Stainless Steel Water Bottle": 3,
  };

  // Sort by explicit bucket, then A→Z inside the same bucket
  const sorted = [...activeProducts].sort((a, b) => {
    const ra = explicitOrder[a.name] ?? 99;
    const rb = explicitOrder[b.name] ?? 99;
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name);
  });

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <nav className="flex gap-2 text-sm">
            <a href="/" className="inline-block px-3 py-1.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-black">Home</a>
            <a href="/#trips" className="inline-block px-3 py-1.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-black">Trips</a>
          </nav>
        </div>
        <h1 className="text-4xl font-bold mb-8">GroovinFly Merch</h1>
        {sorted.length === 0 ? (
          <p className="opacity-70">No merch to display yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {sorted.map((p) => {
              const pv = byProduct.get(p.id) ?? [];
              return (
                <div key={p.id} className="bg-neutral-100 rounded-2xl p-4 flex flex-col min-h-[520px]">
                  {p.image_url ? (
                    <Image
                      src={p.image_url}
                      alt={p.name}
                      width={800}
                      height={800}
                      className="rounded-xl w-full h-auto"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full aspect-square bg-neutral-200 rounded-xl mb-2" />
                  )}

                  <h3 className="text-xl mt-3 font-semibold">{p.name}</h3>
                  {p.description ? <p className="text-sm opacity-80">{p.description}</p> : null}

                  <div className="mt-auto">
                    <Checkout
                      productId={p.id}
                      variants={pv as any[]}
                      hideSelector={(pv?.length ?? 0) <= 1}
                      productPriceCents={p.price_cents}
                      productCurrency={(p.currency || (pv?.[0]?.currency ?? "usd")).toLowerCase()}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}