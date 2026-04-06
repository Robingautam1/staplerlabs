import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { record } = await request.json()
    const email = record.email
    const fullName = record.user_metadata?.full_name || 'there'

    await resend.emails.send({
      from: 'StaplerLabs <hello@staplerlabs.com>',
      to: email,
      subject: 'Welcome to StaplerLabs',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#F2F0EB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2F0EB;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:white;border-radius:16px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:#1A1A1A;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:white;font-size:24px;font-weight:400;letter-spacing:0.5px;">
                StaplerLabs
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;font-size:20px;color:#1A1A1A;font-weight:500;">
                Welcome, ${fullName}!
              </h2>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#4B5563;">
                Thanks for creating your StaplerLabs account. You're one step closer to getting a clear, actionable diagnostic for your business.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.6;color:#4B5563;">
                Here's what happens next:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
                    <span style="display:inline-block;width:24px;height:24px;background:#1A1A1A;color:white;border-radius:50%;text-align:center;line-height:24px;font-size:12px;font-weight:600;margin-right:12px;">1</span>
                    <span style="font-size:14px;color:#1A1A1A;">Complete the business questionnaire (5 min)</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F3F4F6;">
                    <span style="display:inline-block;width:24px;height:24px;background:#1A1A1A;color:white;border-radius:50%;text-align:center;line-height:24px;font-size:12px;font-weight:600;margin-right:12px;">2</span>
                    <span style="font-size:14px;color:#1A1A1A;">Our team reviews your answers</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <span style="display:inline-block;width:24px;height:24px;background:#1A1A1A;color:white;border-radius:50%;text-align:center;line-height:24px;font-size:12px;font-weight:600;margin-right:12px;">3</span>
                    <span style="font-size:14px;color:#1A1A1A;">Receive your personalised diagnostic report</span>
                  </td>
                </tr>
              </table>
              <a href="https://staplerlabs.com/dashboard" style="display:inline-block;background:#1A1A1A;color:white;padding:14px 32px;border-radius:100px;text-decoration:none;font-size:15px;font-weight:500;">
                Go to Dashboard
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background:#F9FAFB;border-top:1px solid #F3F4F6;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;text-align:center;">
                &copy; 2025 StaplerLabs. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Welcome email error:', error)
    return NextResponse.json({ error: 'Failed to send welcome email' }, { status: 500 })
  }
}
