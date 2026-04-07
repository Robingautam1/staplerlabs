import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AdminClientDetail from './AdminClientDetail'

export default async function AdminClientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  // Check admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: adminProfile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single()

  if (!adminProfile?.is_admin) redirect('/dashboard')

  // Fetch client data
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single()

  if (!profile) redirect('/admin')

  const { data: business } = await supabase
    .from('businesses')
    .select('*')
    .eq('profile_id', id)
    .single()

  const { data: report } = await supabase
    .from('diagnostic_reports')
    .select('*')
    .eq('profile_id', id)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  const { data: payment } = await supabase
    .from('payments')
    .select('*')
    .eq('profile_id', id)
    .eq('status', 'completed')
    .limit(1)
    .single()

  const { data: assignment } = await supabase
    .from('consultant_assignments')
    .select('*')
    .eq('profile_id', id)
    .limit(1)
    .single()

  return (
    <AdminClientDetail
      profile={profile}
      business={business}
      report={report}
      payment={payment}
      assignment={assignment}
      adminEmail={user.email || ''}
    />
  )
}
