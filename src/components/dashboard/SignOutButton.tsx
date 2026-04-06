'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      style={{
        background: 'transparent',
        border: '1px solid #E5E7EB',
        borderRadius: '100px',
        padding: '7px 16px',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '13px',
        fontWeight: '500',
        color: '#374151',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#F9FAFB'
        e.currentTarget.style.borderColor = '#D1D5DB'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.borderColor = '#E5E7EB'
      }}
    >
      Sign out
    </button>
  )
}
