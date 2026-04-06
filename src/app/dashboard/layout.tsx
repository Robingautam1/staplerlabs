import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import SignOutButton from '@/components/dashboard/SignOutButton'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const displayName =
    user.user_metadata?.full_name ||
    (user.email && user.email.length > 20
      ? user.email.slice(0, 20) + '…'
      : user.email)

  return (
    <div style={{ minHeight: '100vh', background: '#F2F0EB' }}>
      {/* Dashboard navbar */}
      <nav
        style={{
          height: '60px',
          background: 'white',
          borderBottom: '1px solid #E5E7EB',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Left — Logo */}
        <Link
          href="/dashboard"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '20px',
            fontWeight: 400,
            color: '#1A1A1A',
            textDecoration: 'none',
          }}
        >
          StaplerLabs
        </Link>

        {/* Right — User info + Sign out */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#6B7280',
            }}
          >
            {displayName}
          </span>
          <SignOutButton />
        </div>
      </nav>

      <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '40px 24px' }}>
        {children}
      </main>
    </div>
  )
}
