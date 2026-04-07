import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Check admin
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: adminProfile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (!adminProfile?.is_admin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const admin = createAdminClient()
    const { profile_id, business_id, upi_transaction_id, amount } = await request.json()

    if (!profile_id) {
      return NextResponse.json({ error: 'Missing profile_id' }, { status: 400 })
    }

    // 1. Insert payment
    const { error: paymentError } = await admin.from('payments').insert({
      profile_id,
      business_id: business_id || null,
      amount: amount || 999,
      currency: 'INR',
      payment_type: 'diagnostic_fee',
      payment_method: 'upi',
      status: 'completed',
      upi_transaction_id: upi_transaction_id || null,
      verified_by: user.email,
      verified_at: new Date().toISOString(),
      completed_at: new Date().toISOString(),
      initiated_at: new Date().toISOString(),
    })

    if (paymentError) {
      console.error('Payment insert error:', JSON.stringify(paymentError))
      return NextResponse.json({ error: 'Failed to record payment' }, { status: 500 })
    }

    // 2. Update diagnostic report status to delivered
    const { error: reportError } = await admin
      .from('diagnostic_reports')
      .update({ status: 'delivered', delivered_at: new Date().toISOString() })
      .eq('profile_id', profile_id)
      .eq('status', 'completed')

    if (reportError) {
      console.error('Report status update error:', JSON.stringify(reportError))
    }

    // 3. Insert notification
    try {
      await admin.from('notifications').insert({
        profile_id,
        type: 'payment_confirmed',
        title: 'Payment confirmed',
        message: 'Your Rs. 999 payment has been confirmed. Your StaplerLabs consultant will reach out within 24 hours.',
      })
    } catch (e) {
      console.error('Notification insert failed:', e)
    }

    // 4. Send email
    try {
      const { data: clientProfile } = await admin
        .from('profiles')
        .select('email, full_name')
        .eq('id', profile_id)
        .single()

      if (clientProfile?.email && process.env.RESEND_API_KEY) {
        const firstName = clientProfile.full_name?.split(' ')[0] || 'there'

        await resend.emails.send({
          from: 'StaplerLabs <hello@staplerlabs.com>',
          to: clientProfile.email,
          subject: 'Payment Confirmed — Your Consultant is Being Assigned',
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F2F0EB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2F0EB;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:white;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#1A1A1A;padding:24px 32px;">
          <h1 style="margin:0;color:white;font-size:18px;font-weight:400;">StaplerLabs</h1>
        </td></tr>
        <tr><td style="padding:32px;">
          <h2 style="margin:0 0 12px;font-size:22px;color:#1A1A1A;">Hi ${firstName},</h2>
          <p style="font-size:15px;color:#374151;line-height:1.7;">Your payment of Rs. 999 has been confirmed. A StaplerLabs consultant will call you at your preferred time within 24 hours.</p>
          <p style="font-size:15px;color:#374151;line-height:1.7;">In the meantime, your full Business Intelligence Dashboard is now unlocked. Log in to explore your report.</p>
          <div style="margin:24px 0;">
            <a href="https://staplerlabs.com/dashboard" style="display:inline-block;background:#1A1A1A;color:white;padding:14px 28px;border-radius:100px;text-decoration:none;font-size:15px;font-weight:500;">View Full Dashboard</a>
          </div>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#F9FAFB;border-top:1px solid #F3F4F6;">
          <p style="margin:0;font-size:11px;color:#9CA3AF;text-align:center;">&copy; 2025 StaplerLabs &middot; Built for Indian SMBs</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim(),
        })
      }
    } catch (emailError) {
      console.error('Email send failed:', emailError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mark paid error:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
