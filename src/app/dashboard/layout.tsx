import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardNav from './DashboardNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F2F0EB' }}>
      <DashboardNav userEmail={user.email ?? ''} />
      <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '40px 24px' }}>
        {children}
      </main>
    </div>
  )
}
