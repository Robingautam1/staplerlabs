'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import type { Profile, Business, DiagnosticReport, Payment, ConsultantAssignment, GapItem, RecommendationItem, CompetitorItem } from '@/lib/types/database'

interface Props {
  profile: Profile
  business: Business | null
  report: DiagnosticReport | null
  payment: Payment | null
  assignment: ConsultantAssignment | null
  adminEmail: string
}

const cardStyle: React.CSSProperties = { background: '#1E293B', borderRadius: '12px', border: '1px solid #334155', padding: '24px', marginBottom: '16px' }
const labelStyle: React.CSSProperties = { fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }
const valueStyle: React.CSSProperties = { fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#E2E8F0', marginBottom: '12px' }
const inputStyle: React.CSSProperties = { width: '100%', padding: '10px 14px', background: '#0F172A', border: '1px solid #334155', borderRadius: '8px', color: '#E2E8F0', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', outline: 'none', boxSizing: 'border-box' as const }
const sectionHeadingStyle: React.CSSProperties = { fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#F5C400', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', marginTop: '24px' }

function parseAdditionalNotes(notes: string | null): Record<string, unknown> {
  if (!notes) return {}
  try { return JSON.parse(notes) } catch { return {} }
}

export default function AdminClientDetail({ profile, business, report, payment, assignment, adminEmail }: Props) {
  const extra = parseAdditionalNotes(business?.additional_notes ?? null)
  const [isEditing, setIsEditing] = useState(!report || report.status === 'pending')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  // Report form state
  const [bisScore, setBisScore] = useState(report?.business_index_score ?? 0)
  const [visScore, setVisScore] = useState(report?.visibility_score ?? 0)
  const [dpScore, setDpScore] = useState(report?.digital_presence_score ?? 0)
  const [cpScore, setCpScore] = useState(report?.competitive_position_score ?? 0)
  const [caScore, setCaScore] = useState(report?.customer_acquisition_score ?? 0)
  const [rating, setRating] = useState<string>(report?.online_visibility_rating ?? 'Low')
  const [gaps, setGaps] = useState<GapItem[]>(
    report?.gap_analysis?.length ? report.gap_analysis : [{ severity: 'critical', description: '', impact: '' }]
  )
  const [recs, setRecs] = useState<RecommendationItem[]>(
    report?.recommendations?.length ? report.recommendations : [{ priority: 1, title: '', description: '', estimated_impact: '', execution_month: 1 }]
  )
  const [competitors, setCompetitors] = useState<CompetitorItem[]>(
    report?.competitor_details?.length ? report.competitor_details : [{ name: '', digital_strength: 'moderate', platforms: [], activity_level: 'Moderate', estimated_ad_spend: null }]
  )
  const [roadmap, setRoadmap] = useState({
    month1: report?.roadmap?.month1?.join('\n') ?? '',
    month2: report?.roadmap?.month2?.join('\n') ?? '',
    month3: report?.roadmap?.month3?.join('\n') ?? '',
  })
  const [adminNotes, setAdminNotes] = useState(report?.admin_notes ?? '')
  const [pdfFile, setPdfFile] = useState<File | null>(null)

  // Mark paid state
  const [upiTxnId, setUpiTxnId] = useState('')
  const [payAmount, setPayAmount] = useState('999')
  const [markingPaid, setMarkingPaid] = useState(false)

  // Consultant state
  const [consultantName, setConsultantName] = useState(assignment?.session_notes ?? '')
  const [assigning, setAssigning] = useState(false)

  const totalScore = visScore + dpScore + cpScore + caScore

  const updateBisFromSubs = useCallback(() => {
    setBisScore(visScore + dpScore + cpScore + caScore)
  }, [visScore, dpScore, cpScore, caScore])

  // Auto-sync total
  const setVis = (v: number) => { setVisScore(v); setTimeout(updateBisFromSubs, 0) }
  const setDp = (v: number) => { setDpScore(v); setTimeout(updateBisFromSubs, 0) }
  const setCp = (v: number) => { setCpScore(v); setTimeout(updateBisFromSubs, 0) }
  const setCa = (v: number) => { setCaScore(v); setTimeout(updateBisFromSubs, 0) }

  const handleSubmitReport = async () => {
    setIsSubmitting(true)
    setMessage('')
    try {
      const formData = new FormData()
      formData.append('profile_id', profile.id)
      formData.append('report_id', report?.id ?? '')
      formData.append('business_id', business?.id ?? '')
      formData.append('business_index_score', String(totalScore))
      formData.append('visibility_score', String(visScore))
      formData.append('digital_presence_score', String(dpScore))
      formData.append('competitive_position_score', String(cpScore))
      formData.append('customer_acquisition_score', String(caScore))
      formData.append('online_visibility_rating', rating)
      formData.append('gap_analysis', JSON.stringify(gaps.filter((g) => g.description)))
      formData.append('recommendations', JSON.stringify(recs.filter((r) => r.title)))
      formData.append('competitor_details', JSON.stringify(competitors.filter((c) => c.name)))
      formData.append('roadmap', JSON.stringify({
        month1: roadmap.month1.split('\n').filter(Boolean),
        month2: roadmap.month2.split('\n').filter(Boolean),
        month3: roadmap.month3.split('\n').filter(Boolean),
      }))
      formData.append('admin_notes', adminNotes)
      if (pdfFile) formData.append('pdf_file', pdfFile)

      const res = await fetch('/api/admin/upload-report', { method: 'POST', body: formData })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Upload failed')
      setMessage('Report uploaded and client notified!')
      setIsEditing(false)
      setTimeout(() => window.location.reload(), 1500)
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMarkPaid = async () => {
    setMarkingPaid(true)
    setMessage('')
    try {
      const res = await fetch('/api/admin/mark-paid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile_id: profile.id, business_id: business?.id, upi_transaction_id: upiTxnId, amount: Number(payAmount) }),
      })
      if (!res.ok) throw new Error('Failed to mark as paid')
      setMessage('Payment marked as completed!')
      setTimeout(() => window.location.reload(), 1500)
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setMarkingPaid(false)
    }
  }

  const handleAssignConsultant = async () => {
    setAssigning(true)
    setMessage('')
    try {
      const res = await fetch('/api/admin/assign-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile_id: profile.id, business_id: business?.id, consultant_name: consultantName }),
      })
      if (!res.ok) throw new Error('Failed to assign consultant')
      setMessage('Consultant assigned and client notified!')
      setTimeout(() => window.location.reload(), 1500)
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setAssigning(false)
    }
  }

  return (
    <div>
      {/* Back link */}
      <Link href="/admin" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#94A3B8', textDecoration: 'none', marginBottom: '24px', display: 'inline-block' }}>
        ← Back to all clients
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 400, color: 'white', margin: 0 }}>
          {business?.business_name || profile.email}
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#64748B', marginTop: '4px' }}>
          {business?.owner_name || 'No questionnaire yet'} · {business?.sector || 'Unknown sector'} · {business?.city || 'Unknown city'}
        </p>
      </div>

      {/* Message */}
      {message && (
        <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', background: message.includes('!') && !message.includes('wrong') ? '#22C55E20' : '#EF444420', border: `1px solid ${message.includes('!') && !message.includes('wrong') ? '#22C55E40' : '#EF444440'}`, fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: message.includes('!') && !message.includes('wrong') ? '#22C55E' : '#EF4444' }}>
          {message}
        </div>
      )}

      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '24px', alignItems: 'start' }}>
        {/* LEFT — Client Info */}
        <div>
          <div style={cardStyle}>
            <p style={sectionHeadingStyle}>Business Details</p>
            <div>
              <p style={labelStyle}>Business Name</p>
              <p style={valueStyle}>{business?.business_name || '—'}</p>
              <p style={labelStyle}>Owner</p>
              <p style={valueStyle}>{business?.owner_name || '—'}</p>
              <p style={labelStyle}>Sector</p>
              <p style={valueStyle}>{business?.sector || '—'}</p>
              <p style={labelStyle}>City</p>
              <p style={valueStyle}>{business?.city || '—'}</p>
              <p style={labelStyle}>Revenue Range</p>
              <p style={valueStyle}>{business?.annual_revenue_range || 'Not shared'}</p>
              <p style={labelStyle}>Years in Operation</p>
              <p style={valueStyle}>{business?.years_in_operation || '—'}</p>
              <p style={labelStyle}>Employees</p>
              <p style={valueStyle}>{business?.employee_count || '—'}</p>
              <p style={labelStyle}>Locations</p>
              <p style={valueStyle}>{(extra.locations_count as string) || '—'}</p>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={sectionHeadingStyle}>Digital Presence</p>
            <p style={labelStyle}>Website</p>
            <p style={valueStyle}>
              {business?.website_url ? (
                <a href={business.website_url} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }}>{business.website_url}</a>
              ) : (extra.has_website_detail as string) || (business?.has_website ? 'Yes' : 'No')}
            </p>
            <p style={labelStyle}>Google Listing</p>
            <p style={valueStyle}>{(extra.has_google_listing_detail as string) || (business?.has_google_listing ? 'Yes' : 'No')}</p>
            <p style={labelStyle}>WhatsApp Business</p>
            <p style={valueStyle}>{(extra.has_whatsapp_business_detail as string) || (business?.has_whatsapp_business ? 'Yes' : 'No')}</p>
            <p style={labelStyle}>Social Media</p>
            <p style={valueStyle}>{business?.social_media_platforms?.join(', ') || 'None'}</p>
          </div>

          <div style={cardStyle}>
            <p style={sectionHeadingStyle}>Key Insights</p>
            <p style={labelStyle}>Primary Challenge</p>
            <p style={valueStyle}>{business?.primary_challenge || '—'}</p>
            <p style={labelStyle}>Biggest Competitor</p>
            <p style={valueStyle}>{business?.biggest_competitor || '—'}</p>
            <p style={labelStyle}>Success Goal</p>
            <p style={{ ...valueStyle, whiteSpace: 'pre-wrap' }}>{business?.goal || '—'}</p>
            <p style={labelStyle}>Best Time to Call</p>
            <p style={valueStyle}>{(extra.best_time_to_call as string) || '—'}</p>
            <p style={labelStyle}>WhatsApp Number</p>
            <p style={valueStyle}>{(extra.whatsapp_number as string) || '—'}</p>
          </div>

          <div style={cardStyle}>
            <p style={sectionHeadingStyle}>Contact Actions</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {typeof extra.whatsapp_number === 'string' && extra.whatsapp_number && (
                <>
                  <a
                    href={`https://wa.me/91${extra.whatsapp_number.replace(/\D/g, '').replace(/^91/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#25D366', color: 'white', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
                  >
                    WhatsApp {extra.whatsapp_number}
                  </a>
                  <button
                    onClick={() => { navigator.clipboard.writeText(extra.whatsapp_number as string) }}
                    style={{ padding: '8px 16px', background: '#334155', color: '#E2E8F0', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
                  >
                    Copy Number
                  </button>
                </>
              )}
              <a
                href={`mailto:${profile.email}`}
                style={{ padding: '8px 16px', background: '#334155', color: '#E2E8F0', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
              >
                Email {profile.email}
              </a>
            </div>
          </div>

          {/* Sector-specific answers */}
          {(() => {
            const sa = extra.sector_answers
            if (!sa || typeof sa !== 'object') return null
            const entries = Object.entries(sa as Record<string, string>)
            if (entries.length === 0) return null
            return (
              <div style={cardStyle}>
                <p style={sectionHeadingStyle}>Sector-Specific Answers</p>
                {entries.map(([key, val]) => (
                  <div key={key}>
                    <p style={labelStyle}>{key.replace(/_/g, ' ')}</p>
                    <p style={valueStyle}>{String(val)}</p>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>

        {/* RIGHT — Report Management */}
        <div>
          {isEditing ? (
            <div style={cardStyle}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 400, color: 'white', margin: '0 0 24px 0' }}>
                {report?.status === 'pending' ? 'Create Report' : 'Edit Report'}
              </h2>

              {/* SCORES */}
              <p style={sectionHeadingStyle}>Scores</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Online Visibility (0-25)', value: visScore, set: setVis, max: 25 },
                  { label: 'Digital Presence (0-25)', value: dpScore, set: setDp, max: 25 },
                  { label: 'Competitive Position (0-25)', value: cpScore, set: setCp, max: 25 },
                  { label: 'Customer Acquisition (0-25)', value: caScore, set: setCa, max: 25 },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ ...labelStyle, marginBottom: '6px' }}>{s.label}</p>
                    <input type="number" min={0} max={s.max} value={s.value} onChange={(e) => s.set(Math.min(s.max, Math.max(0, Number(e.target.value))))} style={inputStyle} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '12px', padding: '12px 16px', background: '#0F172A', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#94A3B8' }}>Business Index Score</span>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: totalScore >= 70 ? '#22C55E' : totalScore >= 40 ? '#F59E0B' : '#EF4444' }}>
                  {totalScore}/100
                </span>
              </div>

              {/* RATING */}
              <p style={sectionHeadingStyle}>Overall Rating</p>
              <select value={rating} onChange={(e) => setRating(e.target.value)} style={inputStyle}>
                {['Critical', 'Low', 'Medium', 'Good', 'Excellent'].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>

              {/* GAP ANALYSIS */}
              <p style={sectionHeadingStyle}>Gap Analysis (up to 5)</p>
              {gaps.map((g, i) => (
                <div key={i} style={{ padding: '12px', background: '#0F172A', borderRadius: '8px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                    <select value={g.severity} onChange={(e) => { const n = [...gaps]; n[i] = { ...g, severity: e.target.value as GapItem['severity'] }; setGaps(n) }} style={{ ...inputStyle, width: '140px', flexShrink: 0 }}>
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                    </select>
                    {gaps.length > 1 && (
                      <button onClick={() => setGaps(gaps.filter((_, j) => j !== i))} style={{ background: '#EF444420', color: '#EF4444', border: 'none', borderRadius: '6px', padding: '8px 12px', cursor: 'pointer', fontSize: '14px', flexShrink: 0 }}>×</button>
                    )}
                  </div>
                  <textarea placeholder="What is the gap?" value={g.description} onChange={(e) => { const n = [...gaps]; n[i] = { ...g, description: e.target.value }; setGaps(n) }} rows={2} style={{ ...inputStyle, resize: 'vertical', marginBottom: '6px' }} />
                  <textarea placeholder="What does it cost the business?" value={g.impact} onChange={(e) => { const n = [...gaps]; n[i] = { ...g, impact: e.target.value }; setGaps(n) }} rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
              ))}
              {gaps.length < 5 && (
                <button onClick={() => setGaps([...gaps, { severity: 'medium', description: '', impact: '' }])} style={{ background: '#334155', color: '#E2E8F0', border: 'none', borderRadius: '8px', padding: '8px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', cursor: 'pointer' }}>+ Add Gap</button>
              )}

              {/* RECOMMENDATIONS */}
              <p style={sectionHeadingStyle}>Recommendations (up to 3)</p>
              {recs.map((r, i) => (
                <div key={i} style={{ padding: '12px', background: '#0F172A', borderRadius: '8px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#94A3B8', flexShrink: 0 }}>Priority {i + 1}</span>
                    <select value={r.execution_month || 1} onChange={(e) => { const n = [...recs]; n[i] = { ...r, execution_month: Number(e.target.value) }; setRecs(n) }} style={{ ...inputStyle, width: '120px' }}>
                      <option value={1}>Month 1</option>
                      <option value={2}>Month 2</option>
                      <option value={3}>Month 3</option>
                    </select>
                    {recs.length > 1 && (
                      <button onClick={() => setRecs(recs.filter((_, j) => j !== i))} style={{ background: '#EF444420', color: '#EF4444', border: 'none', borderRadius: '6px', padding: '8px 12px', cursor: 'pointer', fontSize: '14px', flexShrink: 0 }}>×</button>
                    )}
                  </div>
                  <input placeholder="Title" value={r.title} onChange={(e) => { const n = [...recs]; n[i] = { ...r, title: e.target.value }; setRecs(n) }} style={{ ...inputStyle, marginBottom: '6px' }} />
                  <textarea placeholder="Description" value={r.description} onChange={(e) => { const n = [...recs]; n[i] = { ...r, description: e.target.value }; setRecs(n) }} rows={2} style={{ ...inputStyle, resize: 'vertical', marginBottom: '6px' }} />
                  <input placeholder="Estimated Impact" value={r.estimated_impact} onChange={(e) => { const n = [...recs]; n[i] = { ...r, estimated_impact: e.target.value }; setRecs(n) }} style={inputStyle} />
                </div>
              ))}
              {recs.length < 3 && (
                <button onClick={() => setRecs([...recs, { priority: recs.length + 1, title: '', description: '', estimated_impact: '', execution_month: 1 }])} style={{ background: '#334155', color: '#E2E8F0', border: 'none', borderRadius: '8px', padding: '8px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', cursor: 'pointer' }}>+ Add Recommendation</button>
              )}

              {/* COMPETITORS */}
              <p style={sectionHeadingStyle}>Competitor Details (up to 4)</p>
              {competitors.map((c, i) => (
                <div key={i} style={{ padding: '12px', background: '#0F172A', borderRadius: '8px', marginBottom: '8px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                    <input placeholder="Competitor name" value={c.name} onChange={(e) => { const n = [...competitors]; n[i] = { ...c, name: e.target.value }; setCompetitors(n) }} style={inputStyle} />
                    <select value={c.digital_strength} onChange={(e) => { const n = [...competitors]; n[i] = { ...c, digital_strength: e.target.value as CompetitorItem['digital_strength'] }; setCompetitors(n) }} style={inputStyle}>
                      <option value="strong">Strong</option>
                      <option value="moderate">Moderate</option>
                      <option value="weak">Weak</option>
                    </select>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <input placeholder="Platforms (comma separated)" value={c.platforms.join(', ')} onChange={(e) => { const n = [...competitors]; n[i] = { ...c, platforms: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) }; setCompetitors(n) }} style={inputStyle} />
                    <select value={c.activity_level || 'Moderate'} onChange={(e) => { const n = [...competitors]; n[i] = { ...c, activity_level: e.target.value as CompetitorItem['activity_level'] }; setCompetitors(n) }} style={inputStyle}>
                      <option value="Very Active">Very Active</option>
                      <option value="Active">Active</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  {competitors.length > 1 && (
                    <button onClick={() => setCompetitors(competitors.filter((_, j) => j !== i))} style={{ background: '#EF444420', color: '#EF4444', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', marginTop: '6px' }}>Remove</button>
                  )}
                </div>
              ))}
              {competitors.length < 4 && (
                <button onClick={() => setCompetitors([...competitors, { name: '', digital_strength: 'moderate', platforms: [], activity_level: 'Moderate', estimated_ad_spend: null }])} style={{ background: '#334155', color: '#E2E8F0', border: 'none', borderRadius: '8px', padding: '8px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', cursor: 'pointer' }}>+ Add Competitor</button>
              )}

              {/* ROADMAP */}
              <p style={sectionHeadingStyle}>90-Day Roadmap</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {(['month1', 'month2', 'month3'] as const).map((m, i) => (
                  <div key={m}>
                    <p style={{ ...labelStyle, marginBottom: '6px' }}>Month {i + 1}</p>
                    <textarea
                      placeholder={`Actions for month ${i + 1} (one per line)`}
                      value={roadmap[m]}
                      onChange={(e) => setRoadmap({ ...roadmap, [m]: e.target.value })}
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                ))}
              </div>

              {/* PDF UPLOAD */}
              <p style={sectionHeadingStyle}>PDF Report Upload</p>
              <div
                style={{ border: '2px dashed #334155', borderRadius: '12px', padding: '32px', textAlign: 'center', cursor: 'pointer', background: pdfFile ? '#22C55E10' : 'transparent' }}
                onClick={() => document.getElementById('pdf-upload')?.click()}
              >
                <input id="pdf-upload" type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => setPdfFile(e.target.files?.[0] ?? null)} />
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: pdfFile ? '#22C55E' : '#6B7280', margin: 0 }}>
                  {pdfFile ? `Selected: ${pdfFile.name}` : 'Drag PDF here or click to upload'}
                </p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#475569', marginTop: '4px' }}>PDF only, max 10MB</p>
              </div>

              {/* ADMIN NOTES */}
              <p style={sectionHeadingStyle}>Admin Notes (Internal)</p>
              <textarea value={adminNotes} onChange={(e) => setAdminNotes(e.target.value)} rows={3} placeholder="Internal notes, not visible to client" style={{ ...inputStyle, resize: 'vertical' }} />

              {/* SUBMIT */}
              <button
                onClick={handleSubmitReport}
                disabled={isSubmitting}
                style={{
                  width: '100%', marginTop: '24px', padding: '16px', background: isSubmitting ? '#94A3B8' : '#F5C400', color: '#1A1A1A', border: 'none', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Uploading...' : 'Upload Report & Notify Client'}
              </button>
            </div>
          ) : (
            /* STATE B — Report already uploaded */
            <div>
              <div style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 400, color: 'white', margin: 0 }}>Report Uploaded</h2>
                  <button onClick={() => setIsEditing(true)} style={{ background: '#334155', color: '#E2E8F0', border: 'none', borderRadius: '100px', padding: '8px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', cursor: 'pointer' }}>Edit Report</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
                  {[
                    { label: 'BIS', value: report?.business_index_score ?? 0, max: 100 },
                    { label: 'Visibility', value: report?.visibility_score ?? 0, max: 25 },
                    { label: 'Digital', value: report?.digital_presence_score ?? 0, max: 25 },
                    { label: 'Competitive', value: report?.competitive_position_score ?? 0, max: 25 },
                  ].map((s) => (
                    <div key={s.label} style={{ background: '#0F172A', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: 'white', margin: 0 }}>{s.value}</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#64748B', margin: '4px 0 0 0' }}>{s.label}/{s.max}</p>
                    </div>
                  ))}
                </div>

                <p style={labelStyle}>Rating</p>
                <p style={valueStyle}>{report?.online_visibility_rating}</p>
                <p style={labelStyle}>Completed At</p>
                <p style={valueStyle}>{report?.completed_at ? new Date(report.completed_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</p>
                <p style={labelStyle}>Prepared By</p>
                <p style={valueStyle}>{report?.prepared_by || '—'}</p>

                {report?.report_pdf_url && (
                  <a href={report.report_pdf_url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 16px', background: '#334155', color: '#E2E8F0', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', textDecoration: 'none', marginTop: '8px' }}>
                    View PDF →
                  </a>
                )}
              </div>

              {/* MARK AS PAID */}
              {report && (report.status === 'completed' || report.status === 'delivered') && !payment && (
                <div style={cardStyle}>
                  <p style={sectionHeadingStyle}>Mark as Paid</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <p style={{ ...labelStyle, marginBottom: '6px' }}>UPI Transaction ID</p>
                      <input value={upiTxnId} onChange={(e) => setUpiTxnId(e.target.value)} placeholder="Transaction ID" style={inputStyle} />
                    </div>
                    <div>
                      <p style={{ ...labelStyle, marginBottom: '6px' }}>Amount (Rs.)</p>
                      <input value={payAmount} onChange={(e) => setPayAmount(e.target.value)} style={inputStyle} />
                    </div>
                  </div>
                  <button onClick={handleMarkPaid} disabled={markingPaid} style={{ padding: '12px 24px', background: markingPaid ? '#94A3B8' : '#22C55E', color: 'white', border: 'none', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, cursor: markingPaid ? 'not-allowed' : 'pointer' }}>
                    {markingPaid ? 'Processing...' : 'Mark Payment Complete'}
                  </button>
                </div>
              )}

              {/* Payment confirmed */}
              {payment && (
                <div style={{ ...cardStyle, borderColor: '#22C55E40' }}>
                  <p style={{ ...sectionHeadingStyle, color: '#22C55E' }}>Payment Confirmed</p>
                  <p style={valueStyle}>Rs. {payment.amount} · {payment.payment_method.toUpperCase()} · {payment.upi_transaction_id || 'Manual'}</p>
                </div>
              )}

              {/* CONSULTANT ASSIGNMENT */}
              {payment && (
                <div style={cardStyle}>
                  <p style={sectionHeadingStyle}>Consultant Assignment</p>
                  {assignment ? (
                    <div>
                      <p style={valueStyle}>Assigned: {assignment.session_notes || 'Unnamed'}</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#64748B' }}>Assigned on {assignment.assigned_at ? new Date(assignment.assigned_at).toLocaleDateString('en-IN') : '—'}</p>
                    </div>
                  ) : (
                    <div>
                      <input value={consultantName} onChange={(e) => setConsultantName(e.target.value)} placeholder="Consultant name" style={{ ...inputStyle, marginBottom: '12px' }} />
                      <button onClick={handleAssignConsultant} disabled={assigning || !consultantName} style={{ padding: '10px 20px', background: assigning ? '#94A3B8' : '#F5C400', color: '#1A1A1A', border: 'none', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, cursor: assigning || !consultantName ? 'not-allowed' : 'pointer' }}>
                        {assigning ? 'Assigning...' : 'Assign Consultant'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
