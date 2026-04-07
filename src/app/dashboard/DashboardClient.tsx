'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
  if (profile.full_name) return profile.full_name.split(' ')[0]
  return profile.email.split('@')[0]
}

/* ── Step indicator ── */
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
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: isActive || isCompleted ? '#1A1A1A' : '#E5E7EB', color: isActive || isCompleted ? 'white' : '#9CA3AF', fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {isCompleted ? '✓' : step.num}
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: isLocked ? '#9CA3AF' : '#1A1A1A', fontWeight: isActive ? 600 : 400 }}>{step.label}</span>
            </div>
            {i < steps.length - 1 && <div style={{ width: '2px', height: '20px', background: '#E5E7EB', marginLeft: '15px' }} />}
          </div>
        )
      })}
    </div>
  )
}

/* ── Spinning arc icon ── */
function SpinningIcon() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: 'spin 1s linear infinite' }}>
        <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
        <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

/* ── Activity item ── */
function ActivityItem({ icon, text, delay }: { icon: 'done' | 'spinning' | 'pending'; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0' }}
    >
      {icon === 'done' && (
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7L6 10L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      )}
      {icon === 'spinning' && <SpinningIcon />}
      {icon === 'pending' && (
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.5" fill="none" /><path d="M7 4v3l2 1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
      )}
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: icon === 'pending' ? '#9CA3AF' : '#374151' }}>{text}</span>
    </motion.div>
  )
}

/* ── Blurred preview card ── */
function BlurredCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>{title}</p>
      <div style={{ filter: 'blur(6px)', opacity: 0.5, pointerEvents: 'none' }}>{children}</div>
      {/* Lock overlay */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#9CA3AF" strokeWidth="1.5" /><path d="M8 11V7a4 4 0 118 0v4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </div>
    </div>
  )
}

export default function DashboardClient({ profile, business, report }: DashboardClientProps) {
  const firstName = getFirstName(profile)
  const greeting = getGreeting()
  const questionnaireCompleted = business?.questionnaire_completed ?? false
  const reportStatus = report?.status ?? null

  /* ══════════════════════════════════════
     STATE 2 — ANIMATED HOLDING SCREEN
     ══════════════════════════════════════ */
  if (questionnaireCompleted && (!report || reportStatus === 'pending' || reportStatus === 'in_progress')) {
    return (
      <div>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 400, color: '#1A1A1A', marginBottom: '8px' }}>
            Your report is being prepared.
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#6B7280' }}>
            We will notify you on WhatsApp and email the moment it is ready.
          </p>
        </div>

        {/* Activity feed */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #E5E7EB', marginBottom: '24px' }}>
          <ActivityItem icon="done" text="Questionnaire received and saved securely" delay={0} />
          <ActivityItem icon="done" text="Business profile created" delay={0.3} />
          <ActivityItem icon="spinning" text="Scanning your local competitor landscape" delay={0.6} />
          <ActivityItem icon="spinning" text="Analysing your online visibility score" delay={0.9} />
          <ActivityItem icon="pending" text="Calculating your Business Index Score" delay={1.2} />
          <ActivityItem icon="pending" text="Your consultant is being assigned" delay={1.5} />
          <ActivityItem icon="pending" text="Preparing your gap analysis and recommendations" delay={1.8} />
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#E5E7EB', margin: '32px 0' }} />

        {/* Blurred preview cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          <BlurredCard title="Business Index Score">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', border: '6px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#1A1A1A' }}>??</span>
              </div>
            </div>
          </BlurredCard>
          <BlurredCard title="Competitor Map">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100px', justifyContent: 'flex-end' }}>
              <div style={{ height: '60%', background: '#E5E7EB', borderRadius: '4px', width: '80%' }} />
              <div style={{ height: '40%', background: '#E5E7EB', borderRadius: '4px', width: '55%' }} />
              <div style={{ height: '25%', background: '#E5E7EB', borderRadius: '4px', width: '35%' }} />
            </div>
          </BlurredCard>
          <BlurredCard title="Gap Analysis">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '100px' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ height: '8px', background: '#E5E7EB', borderRadius: '4px', width: `${90 - i * 15}%` }} />
              ))}
            </div>
          </BlurredCard>
        </div>

        {/* Report ready badge */}
        <div style={{ textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1A1A1A', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', borderRadius: '100px', padding: '10px 20px' }}>
            Report ready within 24 hours
          </span>
        </div>
      </div>
    )
  }

  /* ══════════════════════════════════════
     STATE 1 — NO QUESTIONNAIRE
     ══════════════════════════════════════ */
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 400, color: '#1A1A1A', marginBottom: '8px' }}>
          {greeting}, {firstName}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#6B7280' }}>
          Let&apos;s find out exactly where your business stands.
        </p>
      </div>

      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', border: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '12px' }}>STEP 1 OF 3</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, color: '#1A1A1A', marginBottom: '12px' }}>Tell us about your business</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: '#6B7280', lineHeight: 1.6, marginTop: '12px' }}>
            Answer 15 questions specific to your sector. Takes about 15 minutes.
            We use your answers to generate your Business Intelligence Report.
          </p>
          <Link
            href="/dashboard/questionnaire"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, background: '#1A1A1A', color: 'white', borderRadius: '100px', padding: '14px 28px', textDecoration: 'none', marginTop: '24px' }}
          >
            Start the questionnaire &rarr;
          </Link>
        </div>
        <div><StepIndicator currentStep={1} /></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
        {[
          { value: '15 min', label: 'Time to complete' },
          { value: '30 min', label: 'Report turnaround' },
          { value: 'Rs. 999', label: 'Consultant unlock' },
        ].map((card, i) => (
          <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '20px', border: '1px solid #E5E7EB' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, color: '#1A1A1A' }}>{card.value}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
