create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(), created_at timestamptz default now(),
  full_name text, email text not null, trip_slug text, source text, notes text
);
create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(), created_at timestamptz default now(),
  full_name text not null, email text not null, phone text, trip_slug text not null,
  party_size int default 1, status text default 'pending', amount_cents int default 0, reference text
);
alter table leads enable row level security; alter table reservations enable row level security;
create policy "anon insert leads" on leads for insert to anon with check (true);
create policy "anon insert reservations" on reservations for insert to anon with check (true);