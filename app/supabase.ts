import { createServerClient } from "@supabase/ssr";

export function createClient() {
  if (!process.env.SUPABASE_URL) {
    throw new Error("Missing env.SUPABASE_URL");
  }

  if (!process.env.SUPABASE_ANON_KEY) {
    throw new Error("Missing env.SUPABASE_ANON_KEY");
  }

  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {},
    }
  );
}
