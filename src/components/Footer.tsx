"use client";

import Link from "next/link";
import StaplerLogo from "@/components/StaplerLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111827" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 pt-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left — Wordmark */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <StaplerLogo className="w-10 h-10" />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                StaplerLabs
              </span>
            </Link>
            <p className="mt-3 max-w-xs" style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "#6B7280" }}>
              Management consulting and technology execution for established Indian businesses.
            </p>
          </div>

          {/* Right — Links + Contact */}
          <div className="flex gap-16">
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", marginBottom: "12px" }}>
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="transition-colors duration-150" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", marginBottom: "12px" }}>
                Reach us
              </p>
              <div className="flex flex-col gap-2">
                <a href="mailto:work@staplerlabs.com" className="transition-colors duration-150" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF" }}>
                  work@staplerlabs.com
                </a>
                <a href="https://wa.me/918292511007" target="_blank" rel="noopener noreferrer" className="transition-colors duration-150" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF" }}>
                  +91 8292511007 (WhatsApp)
                </a>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF" }}>Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#6B7280" }}>
            &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors duration-150" style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#6B7280" }}>
              Privacy
            </Link>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#4B5563" }}>
              Diagnose. Advise. Execute. Staple.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
