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
