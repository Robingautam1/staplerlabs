'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Profile, Business, DiagnosticReport, Payment } from '@/lib/types/database'

interface Props {
  profiles: Profile[]
  businesses: Business[]
  reports: DiagnosticReport[]
  payments: Payment[]
}

function getClientStatus(biz: Business | undefined, report: DiagnosticReport | undefined, payment: Payment | undefined): string {
  if (!biz || !biz.questionnaire_completed) return 'Signed Up'
  if (!report || report.status === 'pending') return 'Report Pending'
  if (report.status === 'completed' && (!payment || payment.status !== 'completed')) return 'Report Done'
  if (payment?.status === 'completed') return 'Paid'
  return 'Active'
}

function getStatusColor(status: string): { bg: string; text: string } {
  switch (status) {
    case 'Signed Up': return { bg: '#334155', text: '#94A3B8' }
    case 'Report Pending': return { bg: '#F59E0B20', text: '#F59E0B' }
    case 'Report Done': return { bg: '#3B82F620', text: '#3B82F6' }
    case 'Paid': return { bg: '#22C55E20', text: '#22C55E' }
    case 'Active': return { bg: '#8B5CF620', text: '#8B5CF6' }
    default: return { bg: '#334155', text: '#94A3B8' }
  }
}

function getSectorColor(sector: string | null): string {
  if (!sector) return '#94A3B8'
  const map: Record<string, string> = {
    'Healthcare and Dental': '#EF4444',
    'Chartered Accountants and Law': '#8B5CF6',
    'Coaching and Education': '#3B82F6',
    'Retail and Fashion': '#EC4899',
    'Restaurants and Food': '#F97316',
    'Real Estate': '#14B8A6',
    'Wellness — Gym and Fitness': '#22C55E',
    'Salon and Spa': '#F472B6',
  }
  return map[sector] || '#6B7280'
}

export default function AdminDashboardClient({ profiles, businesses, reports, payments }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sectorFilter, setSectorFilter] = useState('All')
  const [paymentFilter, setPaymentFilter] = useState('All')

  // Build enriched client rows
  const clients = useMemo(() => {
    return profiles.map((profile) => {
      const biz = businesses.find((b) => b.profile_id === profile.id)
      const report = reports.find((r) => r.profile_id === profile.id)
      const payment = payments.find((p) => p.profile_id === profile.id && p.status === 'completed')
      const status = getClientStatus(biz, report, payment)
      const paymentStatus = payment?.status === 'completed' ? 'Paid' : biz?.questionnaire_completed ? 'Pending' : 'N/A'
      const reportUploaded = report?.status === 'completed' || report?.status === 'delivered'
      return { profile, biz, report, payment, status, paymentStatus, reportUploaded }
    })
  }, [profiles, businesses, reports, payments])

  // Stats
  const totalSignups = profiles.length
  const questionnairesCompleted = businesses.filter((b) => b.questionnaire_completed).length
  const reportsPending = reports.filter((r) => r.status === 'pending' || r.status === 'in_progress').length
  const totalRevenue = payments.filter((p) => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0)

  // Sectors for filter
  const sectors = [...new Set(businesses.map((b) => b.sector).filter(Boolean))]

  // Filter
  const filtered = clients.filter((c) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      const nameMatch = c.biz?.business_name?.toLowerCase().includes(q)
      const ownerMatch = c.biz?.owner_name?.toLowerCase().includes(q)
      const emailMatch = c.profile.email.toLowerCase().includes(q)
      if (!nameMatch && !ownerMatch && !emailMatch) return false
    }
    if (statusFilter !== 'All' && c.status !== statusFilter) return false
    if (sectorFilter !== 'All' && c.biz?.sector !== sectorFilter) return false
    if (paymentFilter !== 'All' && c.paymentStatus !== paymentFilter) return false
    return true
  })

  const statCards = [
    { value: totalSignups, label: 'Total Signups' },
    { value: questionnairesCompleted, label: 'Questionnaires Done' },
    { value: reportsPending, label: 'Reports Pending' },
    { value: `Rs. ${totalRevenue.toLocaleString('en-IN')}`, label: 'Total Revenue' },
  ]

  const selectStyle: React.CSSProperties = {
    background: '#0F172A',
    border: '1px solid #334155',
    borderRadius: '8px',
    color: '#E2E8F0',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '13px',
    padding: '8px 12px',
    outline: 'none',
    minWidth: '150px',
  }

  return (
    <div>
      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {statCards.map((card, i) => (
          <div key={i} style={{ background: '#1E293B', borderRadius: '12px', padding: '20px', border: '1px solid #334155' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 400, color: 'white', margin: 0 }}>
              {card.value}
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#94A3B8', marginTop: '4px', margin: 0 }}>
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* Table container */}
      <div style={{ background: '#1E293B', borderRadius: '12px', border: '1px solid #334155', overflow: 'hidden' }}>
        {/* Filter row */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #334155', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              ...selectStyle,
              flex: 1,
              minWidth: '200px',
            }}
          />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={selectStyle}>
            <option value="All">All Statuses</option>
            <option value="Signed Up">Signed Up</option>
            <option value="Report Pending">Report Pending</option>
            <option value="Report Done">Report Done</option>
            <option value="Paid">Paid</option>
          </select>
          <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)} style={selectStyle}>
            <option value="All">All Sectors</option>
            {sectors.map((s) => (
              <option key={s!} value={s!}>{s}</option>
            ))}
          </select>
          <select value={paymentFilter} onChange={(e) => setPaymentFilter(e.target.value)} style={selectStyle}>
            <option value="All">All Payments</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                {['Business', 'Sector', 'City', 'Status', 'Payment', 'Report', 'Action'].map((h) => (
                  <th key={h} style={{ padding: '12px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'left' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => {
                const statusColor = getStatusColor(c.status)
                const sectorColor = getSectorColor(c.biz?.sector ?? null)
                return (
                  <tr key={c.profile.id} style={{ background: i % 2 === 0 ? '#1E293B' : '#172032', borderBottom: '1px solid #334155' }}>
                    <td style={{ padding: '14px 20px' }}>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, color: 'white', margin: 0 }}>
                        {c.biz?.business_name || 'No business yet'}
                      </p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#64748B', margin: '2px 0 0 0' }}>
                        {c.biz?.owner_name || c.profile.email}
                      </p>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      {c.biz?.sector ? (
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: sectorColor, background: `${sectorColor}15`, padding: '4px 10px', borderRadius: '100px', whiteSpace: 'nowrap' }}>
                          {c.biz.sector}
                        </span>
                      ) : (
                        <span style={{ color: '#475569', fontSize: '13px' }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: '14px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#CBD5E1' }}>
                      {c.biz?.city || '—'}
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: statusColor.text, background: statusColor.bg, padding: '4px 10px', borderRadius: '100px' }}>
                        {c.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
                        color: c.paymentStatus === 'Paid' ? '#22C55E' : c.paymentStatus === 'Pending' ? '#94A3B8' : '#475569',
                      }}>
                        {c.paymentStatus}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
                        color: c.reportUploaded ? '#22C55E' : '#475569',
                      }}>
                        {c.reportUploaded ? 'Uploaded' : 'Not uploaded'}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <Link
                        href={`/admin/client/${c.profile.id}`}
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#F5C400',
                          textDecoration: 'none',
                        }}
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#64748B' }}>
                    No clients found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
