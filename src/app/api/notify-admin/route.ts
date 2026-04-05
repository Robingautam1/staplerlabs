import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient } from '@/lib/supabase/admin'

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY environment variable is not set.')
  return new Resend(key)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      profile_id,
      business_name,
      owner_name,
      sector,
      city,
      state,
      annual_revenue_range,
      years_in_operation,
      employee_count,
      has_website,
      website_url,
      has_google_listing,
      has_whatsapp_business,
      primary_challenge,
      biggest_competitor,
      monthly_leads,
      current_digital_spend,
      goal,
      email,
    } = body

    if (!profile_id || !business_name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    // Send admin notification email
    const resend = getResend()
    const { error: emailError } = await resend.emails.send({
      from: 'StaplerLabs <work@staplerlabs.com>',
      to: ['work@staplerlabs.com'],
      subject: `New questionnaire submission — ${business_name}`,
      html: `
        <div style="background:#141210; padding: 40px 20px; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 560px; margin: 0 auto;">
            <div style="background: #FAC755; height: 4px; border-radius: 4px; margin-bottom: 32px;"></div>

            <table style="width:100%; border-collapse:collapse; margin-bottom: 28px;">
              <tr>
                <td>
                  <span style="font-size: 18px; font-weight: 800; color: #FFFFFF;">Stapler</span><span style="font-size: 18px; font-weight: 800; color: #FAC755;">Labs</span>
                </td>
                <td style="text-align: right;">
                  <span style="background: #FAC755; color: #1a1710; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px;">New Questionnaire</span>
                </td>
              </tr>
            </table>

            <h1 style="font-size: 26px; font-weight: 800; color: #FFFFFF; margin: 0 0 6px;">${business_name}</h1>
            <p style="font-size: 13px; color: #555; margin: 0 0 28px;">
              Owner: ${owner_name || 'Not provided'} | ${email}<br/>
              Submitted ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
            </p>

            <div style="background: #161616; border-radius: 12px; overflow: hidden; border: 1px solid #222;">
              <table style="width: 100%; border-collapse: collapse;">
                ${[
                  ['Sector', sector],
                  ['Location', `${city || ''}${state ? ', ' + state : ''}`],
                  ['Revenue Range', annual_revenue_range],
                  ['Years in Operation', years_in_operation],
                  ['Employee Count', employee_count],
                  ['Has Website', has_website ? `Yes — ${website_url || 'URL not provided'}` : 'No'],
                  ['Google Listing', has_google_listing ? 'Yes' : 'No'],
                  ['WhatsApp Business', has_whatsapp_business ? 'Yes' : 'No'],
                  ['Primary Challenge', primary_challenge],
                  ['Biggest Competitor', biggest_competitor],
                  ['Monthly Leads', monthly_leads],
                  ['Digital Spend', current_digital_spend],
                  ['Goal', goal],
                ]
                  .map(
                    ([label, value]) => `
                  <tr>
                    <td style="padding: 12px 20px; border-bottom: 1px solid #222; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 38%;">${label}</td>
                    <td style="padding: 12px 20px; border-bottom: 1px solid #222; color: #E0E0E0; font-size: 14px; font-weight: 500;">${value || 'Not provided'}</td>
                  </tr>`
                  )
                  .join('')}
              </table>
            </div>

            <table style="width:100%; border-collapse:collapse; margin-top: 24px;">
              <tr>
                <td>
                  <a href="mailto:${email}" style="display:block; background:#1A1A1A; color:#E0E0E0; text-align:center; padding: 13px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration:none; border: 1px solid #333;">
                    Reply via Email
                  </a>
                </td>
              </tr>
            </table>

            <p style="color: #333; font-size: 11px; margin: 32px 0 0; text-align: center;">staplerlabs.com</p>
          </div>
        </div>
      `,
    })

    if (emailError) {
      console.error('Resend admin email error:', emailError)
    }

    // Insert welcome notification for user
    const supabaseAdmin = createAdminClient()
    await supabaseAdmin.from('notifications').insert({
      profile_id,
      type: 'welcome',
      title: 'Questionnaire received',
      message: `We have received your questionnaire for ${business_name}. Your Business Intelligence Dashboard is being prepared and will be ready within 30 minutes.`,
      action_url: '/dashboard',
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Notify-admin route error:', err)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
