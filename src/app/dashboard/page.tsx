import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
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

  // Fetch profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Fetch business (first one for this user)
  const { data: business } = await supabase
    .from('businesses')
    .select('*')
    .eq('profile_id', user.id)
    .limit(1)
    .single()

  // Fetch latest diagnostic report if business exists
  let report: DiagnosticReport | null = null
  if (business) {
    const { data: reportData } = await supabase
      .from('diagnostic_reports')
      .select('*')
      .eq('business_id', business.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    report = reportData
  }

  // Fetch latest completed payment
  let payment: Payment | null = null
  if (business) {
    const { data: paymentData } = await supabase
      .from('payments')
      .select('*')
      .eq('profile_id', user.id)
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    payment = paymentData
  }

  // Fetch consultant assignment
  let assignment: ConsultantAssignment | null = null
  if (business) {
    const { data: assignmentData } = await supabase
      .from('consultant_assignments')
      .select('*')
      .eq('profile_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    assignment = assignmentData
  }

  // Fetch notifications
  const { data: notifications } = await supabase
    .from('notifications')
    .select('*')
    .eq('profile_id', user.id)
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <DashboardClient
      profile={profile as Profile}
      business={business as Business | null}
      report={report}
      notifications={notifications ?? []}
      payment={payment}
      assignment={assignment}
    />
  )
}
