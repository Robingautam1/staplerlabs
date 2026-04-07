import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import type { Profile, Business, DiagnosticReport, Payment, ConsultantAssignment } from '@/lib/types/database'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Use admin client to bypass RLS conflicts
  const adminClient = createAdminClient()

  // Fetch profile
  const { data: profile } = await adminClient
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Fetch business
  const { data: business } = await adminClient
    .from('businesses')
    .select('*')
    .eq('profile_id', user.id)
    .maybeSingle()

  // Fetch latest diagnostic report
  const { data: report } = await adminClient
    .from('diagnostic_reports')
    .select('*')
    .eq('profile_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  // Fetch latest completed payment
  const { data: payment } = await adminClient
    .from('payments')
    .select('*')
    .eq('profile_id', user.id)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  // Fetch consultant assignment
  const { data: assignment } = await adminClient
    .from('consultant_assignments')
    .select('*')
    .eq('profile_id', user.id)
    .maybeSingle()

  // Fetch notifications
  const { data: notifications } = await adminClient
    .from('notifications')
    .select('*')
    .eq('profile_id', user.id)
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <DashboardClient
      profile={profile as Profile}
      business={business as Business | null}
      report={report as DiagnosticReport | null}
      notifications={notifications ?? []}
      payment={payment as Payment | null}
      assignment={assignment as ConsultantAssignment | null}
    />
  )
}
