import { createClient } from '@/lib/supabase/server'
import AdminDashboardClient from './AdminDashboardClient'

export default async function AdminPage() {
  const supabase = await createClient()

  // Fetch all profiles with businesses
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  // Fetch all businesses
  const { data: businesses } = await supabase
    .from('businesses')
    .select('*')

  // Fetch all diagnostic reports
  const { data: reports } = await supabase
    .from('diagnostic_reports')
    .select('*')

  // Fetch all payments
  const { data: payments } = await supabase
    .from('payments')
    .select('*')

  return (
    <AdminDashboardClient
      profiles={profiles ?? []}
      businesses={businesses ?? []}
      reports={reports ?? []}
      payments={payments ?? []}
    />
  )
}
