'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Profile, Business, DiagnosticReport, Notification, Payment, ConsultantAssignment, GapItem, RecommendationItem, CompetitorItem, RoadmapData } from '@/lib/types/database'

interface DashboardClientProps {
  profile: Profile
  business: Business | null
  report: DiagnosticReport | null
  notifications: Notification[]
  payment: Payment | null
  assignment: ConsultantAssignment | null
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

function getScoreColor(score: number, max: number): string {
  const pct = (score / max) * 100
  if (pct < 40) return '#EF4444'
  if (pct < 70) return '#F59E0B'
  return '#22C55E'
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
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0' }}>
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
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#9CA3AF" strokeWidth="1.5" /><path d="M8 11V7a4 4 0 118 0v4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </div>
    </div>
  )
}

/* ── Score Arc SVG ── */
function ScoreArc({ score, max, size = 120, strokeWidth = 8, label }: { score: number; max: number; size?: number; strokeWidth?: number; label?: string }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(score / max, 1)
  const offset = circumference * (1 - pct)
  const color = getScoreColor(score, max)

  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#F3F4F6" strokeWidth={strokeWidth} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset 1s ease' }} />
      </svg>
      <div style={{ marginTop: -(size / 2 + 16), position: 'relative', zIndex: 1, paddingBottom: size / 2 - 24 }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: size > 100 ? '48px' : '24px', fontWeight: 400, color: '#1A1A1A', margin: 0, lineHeight: 1 }}>{score}</p>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', margin: 0 }}>/{max}</p>
      </div>
      {label && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{label}</p>}
    </div>
  )
}

/* ── Severity badge ── */
function SeverityBadge({ severity }: { severity: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    critical: { bg: '#EF4444', text: 'white' },
    high: { bg: '#F59E0B', text: 'white' },
    medium: { bg: '#6B7280', text: 'white' },
  }
  const c = colors[severity] || colors.medium
  return (
    <span style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: c.text, background: c.bg, padding: '4px 10px', borderRadius: '100px', flexShrink: 0 }}>
      {severity}
    </span>
  )
}

export default function DashboardClient({ profile, business, report, payment, assignment }: DashboardClientProps) {
  const [copied, setCopied] = useState(false)
  const firstName = getFirstName(profile)
  const greeting = getGreeting()
  const questionnaireCompleted = business?.questionnaire_completed ?? false
  const reportStatus = report?.status ?? null
  const isPaid = payment?.status === 'completed'

  // Parse additional_notes for whatsapp/best_time
  let extra: Record<string, unknown> = {}
  try { if (business?.additional_notes) extra = JSON.parse(business.additional_notes) } catch { /* */ }

  /* ══════════════════════════════════════
     STATE 4 — FULL DASHBOARD (PAID)
     ══════════════════════════════════════ */
  if ((reportStatus === 'completed' || reportStatus === 'delivered') && isPaid) {
    const gaps: GapItem[] = report?.gap_analysis ?? []
    const recs: RecommendationItem[] = report?.recommendations ?? []
    const comps: CompetitorItem[] = report?.competitor_details ?? []
    const roadmap: RoadmapData = report?.roadmap ?? { month1: [], month2: [], month3: [] }
    const score = report?.business_index_score ?? 0
    const ratingLabel = report?.online_visibility_rating ?? 'Low'

    return (
      <div>
        {/* Header */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Business Intelligence Dashboard</p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 400, color: '#1A1A1A', margin: '4px 0 0 0' }}>{business?.business_name}</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#9CA3AF' }}>Generated by StaplerLabs</span>
            {report?.report_pdf_url && (
              <a href={report.report_pdf_url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#1A1A1A', color: 'white', padding: '8px 20px', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', textDecoration: 'none' }}>
                Download Report ↓
              </a>
            )}
          </div>
        </div>

        {/* SECTION 1 — Score Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          {/* Main score */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
            <ScoreArc score={score} max={100} size={140} strokeWidth={10} />
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: getScoreColor(score, 100), margin: '8px 0 0 0' }}>{ratingLabel}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#9CA3AF', margin: '4px 0 0 0' }}>Business Index Score</p>
          </div>
          {[
            { label: 'Online Visibility', val: report?.visibility_score ?? 0 },
            { label: 'Digital Presence', val: report?.digital_presence_score ?? 0 },
            { label: 'Competitive Position', val: report?.competitive_position_score ?? 0 },
          ].map((s) => (
            <div key={s.label} style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
              <ScoreArc score={s.val} max={25} size={80} strokeWidth={6} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* SECTION 2 — Gap Analysis */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Critical Gaps Identified</p>
            {gaps.filter((g) => g.severity === 'critical').length > 0 && (
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: 'white', background: '#EF4444', padding: '2px 8px', borderRadius: '100px' }}>
                {gaps.filter((g) => g.severity === 'critical').length} critical
              </span>
            )}
          </div>
          {gaps.map((g, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #E5E7EB', marginBottom: '12px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <SeverityBadge severity={g.severity} />
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, color: '#1A1A1A', margin: 0 }}>{g.description}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{g.impact}</p>
              </div>
              {g.severity === 'critical' && (
                <span style={{ color: '#EF4444', animation: 'pulse 2s ease-in-out infinite', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 6v4m0 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
              )}
            </div>
          ))}
          <style>{`@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }`}</style>
        </div>

        {/* SECTION 3 — Recommendations */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Strategic Recommendations</p>
          <div style={{ display: 'grid', gridTemplateColumns: recs.length > 1 ? '1fr 1fr' : '1fr', gap: '16px' }}>
            {recs.map((r, i) => {
              const monthColors: Record<number, string> = { 1: '#EF4444', 2: '#F59E0B', 3: '#22C55E' }
              return (
                <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB', ...(i === 0 && recs.length > 1 ? { gridColumn: 'span 2' } : {}) }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1A1A1A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700 }}>{r.priority}</div>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: 'white', background: monthColors[r.execution_month || 1] || '#6B7280', padding: '4px 10px', borderRadius: '100px' }}>Month {r.execution_month || i + 1}</span>
                  </div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 600, color: '#1A1A1A', marginTop: '12px' }}>{r.title}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#374151', lineHeight: 1.6, marginTop: '8px' }}>{r.description}</p>
                  {r.estimated_impact && (
                    <div style={{ marginTop: '12px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#9CA3AF' }}>Expected impact:</span>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#22C55E' }}>{r.estimated_impact}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* SECTION 4 — Competitor Overview */}
        {comps.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Competitor Overview</p>
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F9FAFB' }}>
                    {['Competitor', 'Digital Strength', 'Active Platforms', 'Activity Level'].map((h) => (
                      <th key={h} style={{ padding: '12px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comps.map((c, i) => {
                    const strengthColors: Record<string, { bg: string; text: string }> = {
                      strong: { bg: '#22C55E20', text: '#22C55E' },
                      moderate: { bg: '#F59E0B20', text: '#F59E0B' },
                      weak: { bg: '#EF444420', text: '#EF4444' },
                    }
                    const sc = strengthColors[c.digital_strength] || strengthColors.moderate
                    return (
                      <tr key={i} style={{ borderBottom: '1px solid #F3F4F6' }}>
                        <td style={{ padding: '16px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#374151', fontWeight: 500 }}>{c.name}</td>
                        <td style={{ padding: '16px 20px' }}>
                          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: sc.text, background: sc.bg, padding: '4px 10px', borderRadius: '100px' }}>{c.digital_strength}</span>
                        </td>
                        <td style={{ padding: '16px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#6B7280' }}>{c.platforms?.join(', ') || '—'}</td>
                        <td style={{ padding: '16px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#374151' }}>{c.activity_level || '—'}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 5 — 90-Day Roadmap */}
        {(roadmap.month1?.length > 0 || roadmap.month2?.length > 0 || roadmap.month3?.length > 0) && (
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>90-Day Roadmap</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { label: 'Month 1', items: roadmap.month1 || [], color: '#EF4444' },
                { label: 'Month 2', items: roadmap.month2 || [], color: '#F59E0B' },
                { label: 'Month 3', items: roadmap.month3 || [], color: '#22C55E' },
              ].map((m) => (
                <div key={m.label} style={{ background: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
                  <div style={{ background: m.color, padding: '12px 16px', margin: 0 }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: 'white', margin: 0 }}>{m.label}</p>
                  </div>
                  <div style={{ padding: '16px' }}>
                    {m.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '8px 0', borderBottom: i < m.items.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                        <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #D1D5DB', flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#374151' }}>{item}</span>
                      </div>
                    ))}
                    {m.items.length === 0 && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF' }}>No actions yet</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6 — Consultant Status */}
        {assignment ? (
          <div style={{ background: '#1A1A1A', borderRadius: '16px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Your Consultant</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: 'white', margin: '4px 0 0 0' }}>{assignment.session_notes || 'Assigned'}</p>
              {typeof extra.best_time_to_call === 'string' && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>Will contact you at {extra.best_time_to_call}</p>}
            </div>
            {typeof extra.whatsapp_number === 'string' && extra.whatsapp_number && (
              <a href={`https://wa.me/91${extra.whatsapp_number.replace(/\D/g, '').replace(/^91/, '')}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                WhatsApp Consultant
              </a>
            )}
          </div>
        ) : (
          <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#92400E', margin: 0 }}>Your consultant is being assigned. Expected within 24 hours of payment confirmation.</p>
          </div>
        )}
      </div>
    )
  }

  /* ══════════════════════════════════════
     STATE 3 — REPORT READY, PAYMENT PENDING
     ══════════════════════════════════════ */
  if (reportStatus === 'completed' && !isPaid) {
    const score = report?.business_index_score ?? 0
    const gaps: GapItem[] = report?.gap_analysis ?? []

    return (
      <div>
        {/* Score teaser */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #E5E7EB', marginBottom: '24px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 16px 0' }}>Your Business Index Score</p>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <ScoreArc score={score} max={100} size={160} strokeWidth={12} />
          </div>

          {/* Sub-scores */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {[
              { label: 'Online Visibility', val: report?.visibility_score ?? 0 },
              { label: 'Digital Presence', val: report?.digital_presence_score ?? 0 },
              { label: 'Competitive Position', val: report?.competitive_position_score ?? 0 },
              { label: 'Customer Acquisition', val: report?.customer_acquisition_score ?? 0 },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ height: '6px', background: '#F3F4F6', borderRadius: '3px', overflow: 'hidden', marginBottom: '6px' }}>
                  <div style={{ height: '100%', width: `${(s.val / 25) * 100}%`, background: getScoreColor(s.val, 25), borderRadius: '3px', transition: 'width 1s ease' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280' }}>{s.label}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#1A1A1A' }}>{s.val}/25</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gap preview — first visible, rest blurred */}
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '24px 0 12px 0' }}>Gap Analysis Preview</p>
          {gaps.length > 0 && (
            <div style={{ background: '#FAFAFA', borderRadius: '12px', padding: '16px', border: '1px solid #E5E7EB', marginBottom: '8px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <SeverityBadge severity={gaps[0].severity} />
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A', margin: 0 }}>{gaps[0].description}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{gaps[0].impact}</p>
              </div>
            </div>
          )}
          {/* Blurred remaining gaps */}
          {gaps.length > 1 && (
            <div style={{ position: 'relative' }}>
              <div style={{ filter: 'blur(4px)', pointerEvents: 'none' }}>
                {gaps.slice(1, 5).map((g, i) => (
                  <div key={i} style={{ background: '#FAFAFA', borderRadius: '12px', padding: '16px', border: '1px solid #E5E7EB', marginBottom: '8px', display: 'flex', gap: '12px' }}>
                    <SeverityBadge severity={g.severity} />
                    <div>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#1A1A1A', margin: 0 }}>{g.description}</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{g.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#9CA3AF" strokeWidth="1.5" /><path d="M8 11V7a4 4 0 118 0v4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            </div>
          )}
        </div>

        {/* Payment section */}
        <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 400, color: 'white', margin: '0 0 8px 0' }}>Unlock your full report</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#9CA3AF', margin: '0 0 20px 0' }}>Pay Rs. 999 to unlock:</p>
            {[
              'Full gap analysis (5 gaps)',
              'Strategic recommendations',
              '90-day roadmap',
              'Your assigned consultant',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#22C55E" /><path d="M5 9L8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'white' }}>{item}</span>
              </div>
            ))}
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280', marginTop: '16px' }}>One-time payment. No subscription. No hidden fees.</p>
          </div>

          {/* Right — UPI card */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1A1A1A', margin: '0 0 16px 0' }}>Pay via UPI</p>

            {/* QR placeholder */}
            <div style={{ width: '180px', height: '180px', margin: '0 auto 16px auto', background: '#F3F4F6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E5E7EB' }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                {/* Simple QR-like pattern */}
                {Array.from({ length: 10 }).map((_, r) =>
                  Array.from({ length: 10 }).map((_, c) => {
                    const filled = ((r + c) % 3 === 0) || (r < 3 && c < 3) || (r < 3 && c > 6) || (r > 6 && c < 3)
                    return filled ? <rect key={`${r}-${c}`} x={c * 12} y={r * 12} width="10" height="10" rx="1" fill="#1A1A1A" /> : null
                  })
                )}
              </svg>
            </div>

            {/* UPI ID */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#374151', background: '#F3F4F6', padding: '6px 14px', borderRadius: '100px' }}>robin@upi</span>
              <button
                onClick={() => { navigator.clipboard.writeText('robin@upi'); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
                style={{ background: '#F3F4F6', border: 'none', borderRadius: '100px', padding: '6px 12px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#374151', cursor: 'pointer' }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '20px', fontWeight: 700, color: '#1A1A1A', textAlign: 'center', margin: '12px 0' }}>Rs. 999</p>

            <div style={{ height: '1px', background: '#E5E7EB', margin: '16px 0' }} />

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>After payment:</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#374151', marginBottom: '4px' }}>1. Screenshot your payment confirmation</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#374151', marginBottom: '12px' }}>2. WhatsApp it to +91 8292511007</p>

            <a
              href="https://wa.me/918292511007?text=Hi%2C%20I%20have%20completed%20the%20Rs.%20999%20payment%20for%20StaplerLabs%20diagnostic.%20Attaching%20screenshot."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', background: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}
            >
              Send Screenshot on WhatsApp
            </a>
          </div>
        </div>

        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#9CA3AF', textAlign: 'center', marginTop: '16px' }}>
          Already paid? Your dashboard will unlock automatically once we verify your payment. Usually within 2 hours.
        </p>
      </div>
    )
  }

  /* ══════════════════════════════════════
     STATE 2 — ANIMATED HOLDING SCREEN
     ══════════════════════════════════════ */
  if (questionnaireCompleted && (!report || reportStatus === 'pending' || reportStatus === 'in_progress')) {
    return (
      <div>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 400, color: '#1A1A1A', marginBottom: '8px' }}>
            Your report is being prepared.
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#6B7280' }}>
            We will notify you on WhatsApp and email the moment it is ready.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #E5E7EB', marginBottom: '24px' }}>
          <ActivityItem icon="done" text="Questionnaire received and saved securely" delay={0} />
          <ActivityItem icon="done" text="Business profile created" delay={0.3} />
          <ActivityItem icon="spinning" text="Scanning your local competitor landscape" delay={0.6} />
          <ActivityItem icon="spinning" text="Analysing your online visibility score" delay={0.9} />
          <ActivityItem icon="pending" text="Calculating your Business Index Score" delay={1.2} />
          <ActivityItem icon="pending" text="Your consultant is being assigned" delay={1.5} />
          <ActivityItem icon="pending" text="Preparing your gap analysis and recommendations" delay={1.8} />
        </div>

        <div style={{ height: '1px', background: '#E5E7EB', margin: '32px 0' }} />

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
