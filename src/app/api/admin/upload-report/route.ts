import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // 1. Check admin
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

    // 2. Parse form data
    const formData = await request.formData()
    const profileId = formData.get('profile_id') as string
    const reportId = formData.get('report_id') as string
    const businessId = formData.get('business_id') as string
    const businessIndexScore = Number(formData.get('business_index_score'))
    const visibilityScore = Number(formData.get('visibility_score'))
    const digitalPresenceScore = Number(formData.get('digital_presence_score'))
    const competitivePositionScore = Number(formData.get('competitive_position_score'))
    const customerAcquisitionScore = Number(formData.get('customer_acquisition_score'))
    const onlineVisibilityRating = formData.get('online_visibility_rating') as string
    const gapAnalysis = JSON.parse(formData.get('gap_analysis') as string || '[]')
    const recommendations = JSON.parse(formData.get('recommendations') as string || '[]')
    const competitorDetails = JSON.parse(formData.get('competitor_details') as string || '[]')
    const roadmap = JSON.parse(formData.get('roadmap') as string || '{}')
    const adminNotes = formData.get('admin_notes') as string || ''
    const pdfFile = formData.get('pdf_file') as File | null

    if (!profileId) {
      return NextResponse.json({ error: 'Missing profile_id' }, { status: 400 })
    }

    // 3. Upload PDF to Supabase storage
    let pdfUrl: string | null = null
    let pdfPath: string | null = null
    if (pdfFile && pdfFile.size > 0) {
      const buffer = Buffer.from(await pdfFile.arrayBuffer())
      const storagePath = `${profileId}/report.pdf`

      const { error: uploadError } = await admin.storage
        .from('reports')
        .upload(storagePath, buffer, {
          contentType: 'application/pdf',
          upsert: true,
        })

      if (uploadError) {
        console.error('PDF upload error:', JSON.stringify(uploadError))
        // Non-blocking — continue without PDF
      } else {
        pdfPath = storagePath
        const { data: urlData } = admin.storage
          .from('reports')
          .getPublicUrl(storagePath)
        pdfUrl = urlData.publicUrl
      }
    }

    // 4. Update diagnostic_reports table
    const reportData = {
      status: 'completed' as const,
      business_index_score: businessIndexScore,
      visibility_score: visibilityScore,
      digital_presence_score: digitalPresenceScore,
      competitive_position_score: competitivePositionScore,
      customer_acquisition_score: customerAcquisitionScore,
      online_visibility_rating: onlineVisibilityRating,
      gap_analysis: gapAnalysis,
      recommendations,
      competitor_details: competitorDetails,
      roadmap,
      admin_notes: adminNotes,
      completed_at: new Date().toISOString(),
      prepared_by: user.email,
      ...(pdfUrl ? { report_pdf_url: pdfUrl } : {}),
      ...(pdfPath ? { report_pdf_path: pdfPath } : {}),
      critical_gaps: gapAnalysis.filter((g: { severity: string }) => g.severity === 'critical').length,
      competitors_found: competitorDetails.length,
    }

    let finalReportId = reportId

    if (reportId) {
      // Update existing report
      const { error: updateError } = await admin
        .from('diagnostic_reports')
        .update(reportData)
        .eq('id', reportId)

      if (updateError) {
        console.error('Report update error:', JSON.stringify(updateError))
        return NextResponse.json({ error: 'Failed to update report' }, { status: 500 })
      }
    } else {
      // Insert new report
      const { data: newReport, error: insertError } = await admin
        .from('diagnostic_reports')
        .insert({ ...reportData, business_id: businessId, profile_id: profileId, requested_at: new Date().toISOString() })
        .select('id')
        .single()

      if (insertError) {
        console.error('Report insert error:', JSON.stringify(insertError))
        return NextResponse.json({ error: 'Failed to create report' }, { status: 500 })
      }
      finalReportId = newReport.id
    }

    // 5. Insert notification for client
    try {
      await admin.from('notifications').insert({
        profile_id: profileId,
        type: 'report_ready',
        title: 'Your Business Intelligence Report is ready',
        message: 'Your report has been prepared. Log in to view your Business Index Score, competitor analysis, and strategic recommendations. Pay Rs. 999 to unlock your assigned consultant.',
        action_url: '/dashboard',
      })
    } catch (e) {
      console.error('Notification insert failed:', e)
    }

    // 6. Send email to client
    try {
      // Get client profile + business
      const { data: clientProfile } = await admin
        .from('profiles')
        .select('email, full_name')
        .eq('id', profileId)
        .single()

      const { data: clientBiz } = await admin
        .from('businesses')
        .select('business_name')
        .eq('profile_id', profileId)
        .single()

      if (clientProfile?.email && process.env.RESEND_API_KEY) {
        const firstName = clientProfile.full_name?.split(' ')[0] || 'there'
        const bizName = clientBiz?.business_name || 'your business'

        await resend.emails.send({
          from: 'StaplerLabs <hello@staplerlabs.com>',
          to: clientProfile.email,
          subject: `Your StaplerLabs Report is Ready — ${bizName}`,
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
          <p style="font-size:15px;color:#374151;line-height:1.7;">Your Business Intelligence Report is ready.</p>
          <p style="font-size:15px;color:#374151;line-height:1.7;">Your Business Index Score is waiting for you — along with your competitor analysis, gap analysis, and a clear 90-day roadmap.</p>
          <p style="font-size:15px;color:#374151;line-height:1.7;">Log in to your dashboard to view it.</p>
          <div style="margin:24px 0;">
            <a href="https://staplerlabs.com/dashboard" style="display:inline-block;background:#1A1A1A;color:white;padding:14px 28px;border-radius:100px;text-decoration:none;font-size:15px;font-weight:500;">View My Report</a>
          </div>
          <p style="font-size:13px;color:#6B7280;line-height:1.6;">To unlock your assigned StaplerLabs consultant, complete the Rs. 999 diagnostic payment inside your dashboard.</p>
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
        console.log('Client email sent for report ready')
      }
    } catch (emailError) {
      console.error('Email send failed (non-blocking):', emailError)
    }

    return NextResponse.json({ success: true, reportId: finalReportId })
  } catch (error) {
    console.error('Upload report error:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
