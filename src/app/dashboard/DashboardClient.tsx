'use client'

import Link from 'next/link'
import type { Profile, Business, DiagnosticReport, Notification } from '@/lib/types/database'

interface DashboardClientProps {
  profile: Profile
  business: Business | null
  report: DiagnosticReport | null
  notifications: Notification[]
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

function getFirstName(profile: Profile): string {
  if (profile.full_name) {
    return profile.full_name.split(' ')[0]
  }
  return profile.email.split('@')[0]
}

// ── Step indicator component ──
function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: 'Fill questionnaire' },
    { num: 2, label: 'Get your report' },
    { num: 3, label: 'Speak to consultant' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {steps.map((step, i) => {
        const isActive = step.num === currentStep
        const isCompleted = step.num < currentStep
        const isLocked = step.num > currentStep

        return (
          <div key={step.num}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: isActive || isCompleted ? '#1A1A1A' : '#E5E7EB',
                  color: isActive || isCompleted ? 'white' : '#9CA3AF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {isCompleted ? '✓' : step.num}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: isLocked ? '#9CA3AF' : '#1A1A1A',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  width: '2px',
                  height: '20px',
                  background: '#E5E7EB',
                  marginLeft: '15px',
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function DashboardClient({
  profile,
  business,
  report,
}: DashboardClientProps) {
  const firstName = getFirstName(profile)
  const greeting = getGreeting()

  // Determine state
  const questionnaireCompleted = business?.questionnaire_completed ?? false
  const reportStatus = report?.status ?? null

  // STATE 2: Questionnaire filled, report pending
  if (questionnaireCompleted && (!report || reportStatus === 'pending' || reportStatus === 'in_progress')) {
    return (
      <div>
        {/* Welcome */}
        <div style={{ marginBottom: '40px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '8px',
            }}
          >
            {greeting}, {firstName}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#6B7280',
            }}
          >
            Your report is being prepared.
          </p>
        </div>

        {/* Report pending card */}
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid #E5E7EB',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          {/* Animated pulse */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#FDF6E3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#F59E0B',
              }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#9CA3AF',
              marginBottom: '12px',
            }}
          >
            STEP 2 OF 3
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '12px',
            }}
          >
            Your Business Intelligence Dashboard is being built
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: 1.6,
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            We are analysing your business against competitors in your geography.
            Your report will be ready within 30 minutes. We will notify you by email
            when it is done.
          </p>
          <div
            style={{
              marginTop: '32px',
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            {[
              { val: business?.business_name ?? 'Your business', label: 'Business' },
              { val: business?.city ?? 'Delhi NCR', label: 'Location' },
              { val: business?.sector ?? 'Your sector', label: 'Sector' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1A1A1A',
                  }}
                >
                  {item.val}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: '#9CA3AF',
                    marginTop: '2px',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // STATE 1: No questionnaire filled (default state)
  return (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: '40px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '32px',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '8px',
          }}
        >
          {greeting}, {firstName}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: '#6B7280',
          }}
        >
          Let&apos;s find out exactly where your business stands.
        </p>
      </div>

      {/* Main prompt card */}
      <div
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid #E5E7EB',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* Left side */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#9CA3AF',
              marginBottom: '12px',
            }}
          >
            STEP 1 OF 3
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '12px',
            }}
          >
            Tell us about your business
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: 1.6,
              marginTop: '12px',
            }}
          >
            Answer 15 questions specific to your sector. Takes about 15 minutes.
            We use your answers to generate your Business Intelligence Report.
          </p>
          <Link
            href="/dashboard/questionnaire"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 500,
              background: '#1A1A1A',
              color: 'white',
              borderRadius: '100px',
              padding: '14px 28px',
              textDecoration: 'none',
              marginTop: '24px',
            }}
          >
            Start the questionnaire &rarr;
          </Link>
        </div>

        {/* Right side — Step indicator */}
        <div>
          <StepIndicator currentStep={1} />
        </div>
      </div>

      {/* Three info cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginTop: '24px',
        }}
      >
        {[
          { value: '15 min', label: 'Time to complete' },
          { value: '30 min', label: 'Report turnaround' },
          { value: 'Rs. 999', label: 'Consultant unlock' },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: '20px',
              border: '1px solid #E5E7EB',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 400,
                color: '#1A1A1A',
              }}
            >
              {card.value}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#6B7280',
                marginTop: '4px',
              }}
            >
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
