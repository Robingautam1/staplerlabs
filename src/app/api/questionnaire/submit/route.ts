import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // 1. AUTHENTICATE
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { formData } = await request.json()
    const admin = createAdminClient()

    // 2. SAVE TO DATABASE — upsert business
    const { data: business, error: bizError } = await admin
      .from('businesses')
      .upsert(
        {
          profile_id: user.id,
          business_name: formData.business_name || null,
          owner_name: formData.owner_name || null,
          city: formData.city || null,
          sector: formData.sector || null,
          years_in_operation: formData.years_in_operation || null,
          employee_count: formData.employee_count || null,
          annual_revenue_range: formData.annual_revenue_range || null,
          locations_count: formData.locations_count || null,
          has_website: formData.has_website || null,
          website_url: formData.website_url || null,
          has_google_listing: formData.has_google_listing || null,
          has_whatsapp_business: formData.has_whatsapp_business || null,
          social_media_platforms: formData.social_media_platforms || null,
          whatsapp_number: formData.whatsapp_number || null,
          best_time_to_call: formData.best_time_to_call || null,
          success_definition: formData.success_definition || null,
          biggest_competitor: formData.biggest_competitor || null,
          sector_answers: JSON.stringify(
            Object.fromEntries(
              Object.entries(formData).filter(
                ([key]) =>
                  !['business_name', 'owner_name', 'city', 'sector', 'years_in_operation', 'employee_count', 'annual_revenue_range', 'locations_count', 'has_website', 'website_url', 'has_google_listing', 'has_whatsapp_business', 'social_media_platforms', 'whatsapp_number', 'best_time_to_call', 'success_definition', 'biggest_competitor'].includes(key)
              )
            )
          ),
          questionnaire_completed: true,
          questionnaire_completed_at: new Date().toISOString(),
        },
        { onConflict: 'profile_id' }
      )
      .select('id')
      .single()

    if (bizError) {
      console.error('Business upsert error:', bizError)
      return NextResponse.json({ error: 'Failed to save business data' }, { status: 500 })
    }

    // Insert diagnostic report
    await admin.from('diagnostic_reports').insert({
      business_id: business.id,
      profile_id: user.id,
      status: 'pending',
      requested_at: new Date().toISOString(),
    })

    // 3. SEND ADMIN NOTIFICATION EMAIL
    const socialMedia = Array.isArray(formData.social_media_platforms)
      ? formData.social_media_platforms.join(', ')
      : formData.social_media_platforms || 'None'

    // Find the primary challenge from sector-specific answers
    const challengeKey = Object.keys(formData).find((k) => k.startsWith('biggest_challenge'))
    const primaryChallenge = challengeKey ? formData[challengeKey] : 'Not specified'

    await resend.emails.send({
      from: 'StaplerLabs <hello@staplerlabs.com>',
      to: 'work@staplerlabs.com',
      subject: `New questionnaire — ${formData.business_name} | ${formData.sector} | ${formData.city}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F2F0EB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2F0EB;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:white;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#1A1A1A;padding:24px 32px;">
          <h1 style="margin:0;color:white;font-size:18px;font-weight:400;">New Lead &mdash; StaplerLabs</h1>
        </td></tr>
        <tr><td style="padding:32px;">
          <h3 style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#9CA3AF;">Business Details</h3>
          <table width="100%" cellpadding="4" cellspacing="0" style="font-size:14px;color:#374151;">
            <tr><td style="color:#9CA3AF;width:140px;">Business Name</td><td style="font-weight:600;">${formData.business_name}</td></tr>
            <tr><td style="color:#9CA3AF;">Owner</td><td>${formData.owner_name}</td></tr>
            <tr><td style="color:#9CA3AF;">Sector</td><td>${formData.sector}</td></tr>
            <tr><td style="color:#9CA3AF;">City</td><td>${formData.city}</td></tr>
            <tr><td style="color:#9CA3AF;">Years</td><td>${formData.years_in_operation || 'N/A'}</td></tr>
            <tr><td style="color:#9CA3AF;">Employees</td><td>${formData.employee_count || 'N/A'}</td></tr>
            <tr><td style="color:#9CA3AF;">Revenue</td><td>${formData.annual_revenue_range || 'Not shared'}</td></tr>
          </table>
          <div style="height:1px;background:#F3F4F6;margin:20px 0;"></div>
          <h3 style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#9CA3AF;">Digital Presence</h3>
          <table width="100%" cellpadding="4" cellspacing="0" style="font-size:14px;color:#374151;">
            <tr><td style="color:#9CA3AF;width:140px;">Website</td><td>${formData.website_url || formData.has_website || 'None'}</td></tr>
            <tr><td style="color:#9CA3AF;">Google Listing</td><td>${formData.has_google_listing || 'N/A'}</td></tr>
            <tr><td style="color:#9CA3AF;">WhatsApp</td><td>${formData.has_whatsapp_business || 'N/A'}</td></tr>
            <tr><td style="color:#9CA3AF;">Social Media</td><td>${socialMedia}</td></tr>
          </table>
          <div style="height:1px;background:#F3F4F6;margin:20px 0;"></div>
          <h3 style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#9CA3AF;">Key Insights</h3>
          <table width="100%" cellpadding="4" cellspacing="0" style="font-size:14px;color:#374151;">
            <tr><td style="color:#9CA3AF;width:140px;">Challenge</td><td>${primaryChallenge}</td></tr>
            <tr><td style="color:#9CA3AF;">Competitor</td><td>${formData.biggest_competitor || 'Not specified'}</td></tr>
            <tr><td style="color:#9CA3AF;">Success</td><td>${formData.success_definition || 'N/A'}</td></tr>
          </table>
          <div style="height:1px;background:#F3F4F6;margin:20px 0;"></div>
          <h3 style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#9CA3AF;">Contact</h3>
          <table width="100%" cellpadding="4" cellspacing="0" style="font-size:14px;color:#374151;">
            <tr><td style="color:#9CA3AF;width:140px;">WhatsApp</td><td style="font-weight:600;">${formData.whatsapp_number}</td></tr>
            <tr><td style="color:#9CA3AF;">Best Time</td><td>${formData.best_time_to_call}</td></tr>
            <tr><td style="color:#9CA3AF;">Email</td><td>${user.email}</td></tr>
          </table>
          <div style="margin-top:24px;">
            <a href="https://supabase.com/dashboard/project/mqtsgdnlaanrusixqzos" style="display:inline-block;background:#1A1A1A;color:white;padding:12px 24px;border-radius:100px;text-decoration:none;font-size:14px;font-weight:500;">View in Supabase Dashboard</a>
          </div>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#F9FAFB;border-top:1px solid #F3F4F6;">
          <p style="margin:0;font-size:11px;color:#9CA3AF;text-align:center;">&copy; 2025 StaplerLabs</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
      `.trim(),
    })

    // 4. INSERT NOTIFICATION
    await admin.from('notifications').insert({
      profile_id: user.id,
      type: 'general',
      title: 'Your report is being prepared',
      message:
        'We have received your questionnaire. Our team is now preparing your Business Intelligence Report. You will be notified within 24 hours.',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Questionnaire submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
