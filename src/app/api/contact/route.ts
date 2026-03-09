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
// Strip HTML tags, trim whitespace, cap length
function sanitize(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")   // strip HTML
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // strip control chars
    .trim()
    .slice(0, maxLen);
}

// ─── Allowed values (whitelist) ───────────────────────────────────────────────
const VALID_SERVICES = ["web", "automation", "onboarding", "seo", "ads", "not-sure"];
const VALID_BUDGETS  = ["under-15k", "15k-50k", "50k-1L", "above-1L", "no-idea"];
const VALID_TIMELINES = ["asap", "2-weeks", "month", "no-rush"];

const SERVICE_LABELS: Record<string, string> = {
  web:         "Web Development",
  automation:  "Business Automation",
  onboarding:  "Offline to Online Onboarding",
  seo:         "SEO & Content",
  ads:         "Professional Advertising",
  "not-sure":  "Not sure yet",
};
const BUDGET_LABELS: Record<string, string> = {
  "under-15k": "Under ₹15,000",
  "15k-50k":   "₹15,000 – ₹50,000",
  "50k-1L":    "₹50,000 – ₹1,00,000",
  "above-1L":  "Above ₹1,00,000",
  "no-idea":   "No idea yet",
};
const TIMELINE_LABELS: Record<string, string> = {
  asap:       "As soon as possible",
  "2-weeks":  "Within 2 weeks",
  month:      "Within a month",
  "no-rush":  "No rush, just exploring",
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

  // WhatsApp: digits, spaces, +, -, (), 7–20 chars
  if (!/^[\d\s\+\-\(\)]{7,20}$/.test(whatsapp))
    errors.push("Please enter a valid WhatsApp number.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0] }, { status: 422 });
  }

  // 5. Send email via Resend
  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from:    "StaplerLabs Contact <onboarding@resend.dev>",
      to:      ["gautam.robin333@gmail.com"],
      subject: `New inquiry — ${business}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 580px; margin: 0 auto; background: #0A0A0A; color: #E0E0E0; padding: 32px; border-radius: 12px;">
          <p style="color: #FFD000; font-size: 11px; font-family: monospace; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 24px;">StaplerLabs · New Inquiry</p>
          <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 24px; color: #FFFFFF;">${business}</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px; width: 40%;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-size: 14px;">${SERVICE_LABELS[service]}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-size: 14px;">${BUDGET_LABELS[budget]}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Timeline</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-size: 14px;">${TIMELINE_LABELS[timeline]}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px;">WhatsApp</td>
              <td style="padding: 10px 0; font-size: 14px;">
                <a href="https://wa.me/${whatsapp.replace(/[\s\-\(\)\+]/g, "")}" style="color: #FFD000;">
                  ${whatsapp}
                </a>
              </td>
            </tr>
          </table>
          <p style="color: #444; font-size: 11px; margin: 28px 0 0;">staplerlabs.com · ${new Date().toUTCString()}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Could not send your details. Please reach out on WhatsApp." },
        { status: 500 }
      );
    }

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
