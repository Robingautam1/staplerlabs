"use client";

import Link from "next/link";
import StaplerLogo from "@/components/StaplerLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "Business Automation" },
  { href: "/services", label: "Local SEO" },
  { href: "/services", label: "AI Chatbots" },
  { href: "/services", label: "Performance Marketing" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111827", borderTop: "1px solid #1F2937" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "56px 24px 40px" }}>
        {/* Top row — 4 columns */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px" }}>
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <StaplerLogo className="w-10 h-10" />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                StaplerLabs
              </span>
            </Link>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#6B7280", maxWidth: "260px", lineHeight: 1.6, marginTop: "16px" }}>
              We help established Indian businesses compete with digital-first startups.
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <a href="mailto:work@staplerlabs.com" className="footer-pill" style={{ background: "#1F2937", border: "1px solid #2D2D2D", borderRadius: "100px", padding: "6px 14px", fontFamily: "var(--font-body)", fontSize: "12px", color: "#9CA3AF", display: "inline-flex", alignItems: "center", gap: "6px", transition: "background 0.15s ease" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                work@staplerlabs.com
              </a>
              <a href="https://wa.me/918292511007" target="_blank" rel="noopener noreferrer" className="footer-pill" style={{ background: "#1F2937", border: "1px solid #2D2D2D", borderRadius: "100px", padding: "6px 14px", fontFamily: "var(--font-body)", fontSize: "12px", color: "#9CA3AF", display: "inline-flex", alignItems: "center", gap: "6px", transition: "background 0.15s ease" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.62 5.15 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18.92"/></svg>
                +91 8292511007
              </a>
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B5563", marginBottom: "16px" }}>
              Navigate
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#6B7280", transition: "color 0.15s ease" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Services */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B5563", marginBottom: "16px" }}>
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((l, i) => (
                <Link key={i} href={l.href} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#6B7280", transition: "color 0.15s ease" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Location */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4B5563", marginBottom: "16px" }}>
              Find Us
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#6B7280", marginBottom: "8px" }}>Delhi NCR, India</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#4B5563" }}>Serving established businesses</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#4B5563" }}>doing Rs. 50L to Rs. 50Cr</p>
            <div className="flex items-center gap-2" style={{ marginTop: "16px" }}>
              <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", position: "relative" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#374151" }}>Currently accepting new clients</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1F2937", marginTop: "48px", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151" }}>
            &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", transition: "color 0.15s ease" }}>
              Privacy
            </Link>
            <Link href="/contact" className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", transition: "color 0.15s ease" }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
