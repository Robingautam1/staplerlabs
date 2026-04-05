import { createClient } from '@supabase/supabase-js'

// This client has full database access.
// ONLY use in server-side API routes.
// NEVER import this in any component.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}
