import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (uses service role key).
 * Use ONLY in API routes, server actions, and server components.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

if (!url) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
if (!service) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY (server only)");

export const supabaseServer = createClient(url, service);