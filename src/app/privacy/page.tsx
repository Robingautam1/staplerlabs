import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StaplerLabs collects, uses, and protects your information.",
  alternates: { canonical: "https://staplerlabs.com/privacy" },
};

export default function PrivacyPage() {
  const sectionStyle = { marginBottom: "48px" };
  const headingStyle = {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontSize: "28px",
    lineHeight: 1.2 as const,
    color: "var(--text-heading)",
    marginBottom: "16px",
  };
  const bodyStyle = {
    fontSize: "15px",
    lineHeight: 1.75 as const,
    color: "var(--text-secondary)",
  };

  return (
    <div className="pt-20">
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-display mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Privacy Policy
          </h1>
          <p style={{ ...bodyStyle, marginBottom: "48px" }}>
            Last updated: March 2026. StaplerLabs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates staplerlabs.com.
            This page explains what information we collect and how we use it.
          </p>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Information we collect</h2>
            <p style={bodyStyle}>
              When you submit our contact form, we collect your business name, email address,
              WhatsApp number, selected service interest, budget range, and timeline preference.
              We do not collect information passively through cookies, trackers, or analytics scripts
              beyond what your browser sends by default (IP address, user agent).
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>How we use your information</h2>
            <p style={bodyStyle}>
              We use the information you provide solely to respond to your enquiry, send you a
              confirmation email, and follow up on WhatsApp as you requested. We do not sell, rent,
              or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Email service</h2>
            <p style={bodyStyle}>
              We use Resend to send transactional emails (confirmation and internal notification).
              Your email address is shared with Resend solely for this purpose. Resend&apos;s privacy
              policy is available on their website.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Data retention</h2>
            <p style={bodyStyle}>
              We retain your contact form submissions for as long as needed to fulfil the purpose
              of your enquiry. If you&apos;d like your data deleted, email us at{" "}
              <a href="mailto:work@staplerlabs.com" style={{ color: "var(--yellow)" }}>
                work@staplerlabs.com
              </a>{" "}
              and we&apos;ll handle it within 7 business days.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Security</h2>
            <p style={bodyStyle}>
              Our website uses HTTPS encryption, security headers including HSTS and CSP, and
              rate-limited form submissions to protect against abuse. While no system is 100% secure,
              we take reasonable measures to protect the information you share with us.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Your rights</h2>
            <p style={bodyStyle}>
              You can request access to, correction of, or deletion of your personal data at any time
              by emailing{" "}
              <a href="mailto:work@staplerlabs.com" style={{ color: "var(--yellow)" }}>
                work@staplerlabs.com
              </a>.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>Contact</h2>
            <p style={bodyStyle}>
              If you have questions about this policy, reach out at{" "}
              <a href="mailto:work@staplerlabs.com" style={{ color: "var(--yellow)" }}>
                work@staplerlabs.com
              </a>{" "}
              or WhatsApp{" "}
              <a href="https://wa.me/918292511007" style={{ color: "var(--yellow)" }}>
                +91 82925 11007
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
