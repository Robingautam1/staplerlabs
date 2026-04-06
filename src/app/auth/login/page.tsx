'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #E5E7EB',
  borderRadius: '10px',
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  color: '#1A1A1A',
  background: 'white',
  outline: 'none',
  marginBottom: '16px',
  boxSizing: 'border-box',
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/auth/callback',
      },
    })
    if (error) console.error(error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const supabase = createClient()
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError(signInError.message)
      } else {
        router.push('/dashboard')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '440px',
        width: '100%',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '24px',
          color: '#1A1A1A',
          textAlign: 'center',
          marginBottom: '8px',
          fontWeight: 400,
        }}
      >
        StaplerLabs
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: '#6B7280',
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        Welcome back
      </p>

      {error && (
        <div
          style={{
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '8px',
            padding: '12px',
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: '#EF4444',
            marginBottom: '16px',
          }}
        >
          {error}
        </div>
      )}

      {/* Google OAuth button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        style={{
          width: '100%',
          background: 'white',
          border: '1.5px solid #E5E7EB',
          borderRadius: '100px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          fontWeight: 500,
          color: '#374151',
          marginBottom: '20px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#F9FAFB'
          e.currentTarget.style.borderColor = '#D1D5DB'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'white'
          e.currentTarget.style.borderColor = '#E5E7EB'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Continue with Google
      </button>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#9CA3AF' }}>or</span>
        <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }} />
      </div>

      {/* Email form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#1A1A1A')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#1A1A1A')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
        />
        <div style={{ textAlign: 'right', marginTop: '-8px', marginBottom: '16px' }}>
          <Link
            href="/auth/forgot-password"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#6B7280',
              textDecoration: 'none',
            }}
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            background: '#1A1A1A',
            color: 'white',
            borderRadius: '100px',
            padding: '14px',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 500,
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            marginTop: '8px',
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: '#6B7280',
          textAlign: 'center',
          marginTop: '24px',
        }}
      >
        Don&apos;t have an account?{' '}
        <Link
          href="/auth/signup"
          style={{ color: '#1A1A1A', fontWeight: 600, textDecoration: 'none' }}
        >
          Sign up
        </Link>
      </p>
    </div>
  )
}
