'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function DashboardNav({ userEmail }: { userEmail: string }) {
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  // Truncate long emails
  const displayEmail =
    userEmail.length > 28 ? userEmail.slice(0, 25) + '...' : userEmail

  return (
    <nav
      style={{
        height: '60px',
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href="/dashboard"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          fontWeight: 700,
          color: '#1A1A1A',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        StaplerLabs
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#6B7280',
          }}
        >
          {displayEmail}
        </span>
        <button
          onClick={handleSignOut}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#6B7280',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 0',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#1A1A1A')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
        >
          Sign out
        </button>
      </div>
    </nav>
  )
}
