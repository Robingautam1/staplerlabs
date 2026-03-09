import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazily initialised so the build doesn't fail without RESEND_API_KEY
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY environment variable is not set.");
  return new Resend(key);
}

// ─── Rate limiter ─────────────────────────────────────────────────────────────
// In-memory: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── Sanitizer ────────────────────────────────────────────────────────────────
function sanitize(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .slice(0, maxLen);
}

// ─── Allowed values (whitelist) ───────────────────────────────────────────────
const VALID_SERVICES  = ["web", "automation", "onboarding", "seo", "ads", "not-sure"];
const VALID_BUDGETS   = ["under-15k", "15k-50k", "50k-1L", "above-1L", "no-idea"];
const VALID_TIMELINES = ["asap", "2-weeks", "month", "no-rush"];

const SERVICE_LABELS: Record<string, string> = {
  web:        "Web Development",
  automation: "Business Automation",
  onboarding: "Offline to Online Onboarding",
  seo:        "SEO & Content",
  ads:        "Professional Advertising",
  "not-sure": "Not sure yet",
};
const BUDGET_LABELS: Record<string, string> = {
  "under-15k": "Under ₹15,000",
  "15k-50k":   "₹15,000 – ₹50,000",
  "50k-1L":    "₹50,000 – ₹1,00,000",
  "above-1L":  "Above ₹1,00,000",
  "no-idea":   "No idea yet",
};
const TIMELINE_LABELS: Record<string, string> = {
  asap:      "As soon as possible",
  "2-weeks": "Within 2 weeks",
  month:     "Within a month",
  "no-rush": "No rush, just exploring",
};

// ─── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  // 2. Parse JSON body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 }
    );
  }

  // 3. Sanitize all fields
  const business = sanitize(body.business, 200);
  const service  = sanitize(body.service);
  const budget   = sanitize(body.budget);
  const timeline = sanitize(body.timeline);
  const email    = sanitize(body.email, 254);
  const whatsapp = sanitize(body.whatsapp, 25);

  // 4. Validate
  const errors: string[] = [];

  if (!business || business.length < 2)
    errors.push("Business name must be at least 2 characters.");

  if (!VALID_SERVICES.includes(service))
    errors.push("Please select a valid service.");

  if (!VALID_BUDGETS.includes(budget))
    errors.push("Please select a valid budget range.");

  if (!VALID_TIMELINES.includes(timeline))
    errors.push("Please select a valid timeline.");

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("Please enter a valid email address.");

  // WhatsApp: digits, spaces, +, -, (), 7–20 chars
  if (!/^[\d\s\+\-\(\)]{7,20}$/.test(whatsapp))
    errors.push("Please enter a valid WhatsApp number.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0] }, { status: 422 });
  }

  // 5. Send both emails via Resend
  try {
    const resend = getResend();

    const waNumber = whatsapp.replace(/[\s\-\(\)\+]/g, "");

    // ── Admin notification → work@staplerlabs.com ──
    const { error: adminError } = await resend.emails.send({
      from:    "StaplerLabs <work@staplerlabs.com>",
      to:      ["work@staplerlabs.com"],
      subject: `🔔 New inquiry — ${business}`,
      html: `
        <div style="background:#0D0D0D; padding: 40px 20px; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 560px; margin: 0 auto;">

            <!-- Yellow accent bar -->
            <div style="background: #FFD000; height: 4px; border-radius: 4px; margin-bottom: 32px;"></div>

            <!-- Logo + label -->
            <table style="width:100%; border-collapse:collapse; margin-bottom: 28px;">
              <tr>
                <td>
                  <span style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px;">Stapler</span><span style="font-size: 18px; font-weight: 800; color: #FFD000; letter-spacing: -0.5px;">Labs</span>
                </td>
                <td style="text-align: right;">
                  <span style="background: #FFD000; color: #0A0A0A; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px;">New Inquiry</span>
                </td>
              </tr>
            </table>

            <!-- Business name -->
            <h1 style="font-size: 26px; font-weight: 800; color: #FFFFFF; margin: 0 0 6px; letter-spacing: -0.5px;">${business}</h1>
            <p style="font-size: 13px; color: #555; margin: 0 0 28px;">Received ${new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</p>

            <!-- Details card -->
            <div style="background: #161616; border-radius: 12px; overflow: hidden; border: 1px solid #222;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 38%;">Service</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #E0E0E0; font-size: 14px; font-weight: 500;">${SERVICE_LABELS[service]}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Budget</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #E0E0E0; font-size: 14px; font-weight: 500;">${BUDGET_LABELS[budget]}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Timeline</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #E0E0E0; font-size: 14px; font-weight: 500;">${TIMELINE_LABELS[timeline]}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #222; font-size: 14px;">
                    <a href="mailto:${email}" style="color: #FFD000; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">WhatsApp</td>
                  <td style="padding: 14px 20px; font-size: 14px;">
                    <a href="https://wa.me/${waNumber}" style="color: #FFD000; text-decoration: none; font-weight: 500;">${whatsapp}</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- CTA buttons -->
            <table style="width:100%; border-collapse:collapse; margin-top: 24px;">
              <tr>
                <td style="padding-right: 8px;">
                  <a href="https://wa.me/${waNumber}" style="display:block; background:#25D366; color:#FFFFFF; text-align:center; padding: 13px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration:none;">
                    Reply on WhatsApp
                  </a>
                </td>
                <td style="padding-left: 8px;">
                  <a href="mailto:${email}" style="display:block; background:#1A1A1A; color:#E0E0E0; text-align:center; padding: 13px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration:none; border: 1px solid #333;">
                    Reply via Email
                  </a>
                </td>
              </tr>
            </table>

            <!-- Footer -->
            <p style="color: #333; font-size: 11px; margin: 32px 0 0; text-align: center;">staplerlabs.com</p>
          </div>
        </div>
      `,
    });

    if (adminError) {
      console.error("Resend admin email error:", adminError);
      return NextResponse.json(
        { error: "Could not send your details. Please reach out on WhatsApp." },
        { status: 500 }
      );
    }

    // ── Client confirmation → client's email ──
    await resend.emails.send({
      from:    "StaplerLabs <work@staplerlabs.com>",
      to:      [email],
      subject: "We got your message — StaplerLabs",
      html: `
        <div style="background: #0D0D0D; padding: 40px 20px; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 560px; margin: 0 auto;">

            <!-- Yellow accent bar -->
            <div style="background: #FFD000; height: 4px; border-radius: 4px; margin-bottom: 32px;"></div>

            <!-- Logo -->
            <p style="margin: 0 0 36px;">
              <span style="font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px;">Stapler</span><span style="font-size: 18px; font-weight: 800; color: #FFD000; letter-spacing: -0.5px;">Labs</span>
            </p>

            <!-- Heading -->
            <h1 style="font-size: 36px; font-weight: 800; color: #FFFFFF; margin: 0 0 12px; letter-spacing: -1px;">We got it.</h1>
            <p style="font-size: 16px; line-height: 1.7; color: #888; margin: 0 0 32px;">
              Your details for <strong style="color: #FFFFFF;">${business}</strong> are with us. We'll reach out on WhatsApp within 24 hours — usually much faster.
            </p>

            <!-- Summary card -->
            <div style="background: #161616; border-radius: 12px; border: 1px solid #222; padding: 20px 24px; margin-bottom: 32px;">
              <p style="font-size: 11px; color: #555; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px; font-weight: 600;">Your submission</p>
              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding: 7px 0; color: #555; font-size: 13px; width: 40%;">Service</td>
                  <td style="padding: 7px 0; color: #D0D0D0; font-size: 13px; font-weight: 500;">${SERVICE_LABELS[service]}</td>
                </tr>
                <tr>
                  <td style="padding: 7px 0; color: #555; font-size: 13px;">Budget</td>
                  <td style="padding: 7px 0; color: #D0D0D0; font-size: 13px; font-weight: 500;">${BUDGET_LABELS[budget]}</td>
                </tr>
                <tr>
                  <td style="padding: 7px 0; color: #555; font-size: 13px;">Timeline</td>
                  <td style="padding: 7px 0; color: #D0D0D0; font-size: 13px; font-weight: 500;">${TIMELINE_LABELS[timeline]}</td>
                </tr>
              </table>
            </div>

            <!-- WhatsApp CTA -->
            <a href="https://wa.me/918292511007" style="display:block; background:#FFD000; color:#0A0A0A; text-align:center; padding: 15px 24px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration:none; margin-bottom: 16px;">
              Message us on WhatsApp
            </a>
            <p style="text-align:center; font-size: 13px; color: #444; margin: 0 0 36px;">
              or reply directly to this email
            </p>

            <!-- Footer -->
            <div style="border-top: 1px solid #1A1A1A; padding-top: 24px;">
              <p style="color: #333; font-size: 12px; margin: 0; line-height: 1.6;">
                You're receiving this because you submitted a contact form at
                <a href="https://staplerlabs.com" style="color: #555; text-decoration: none;">staplerlabs.com</a>
              </p>
            </div>

          </div>
        </div>
      `,
    });
    // We don't block on client confirmation error — admin notification already sent

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try WhatsApp directly." },
      { status: 500 }
    );
  }
}

// Block all other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
