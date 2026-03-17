"use client";

import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-deep)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 pt-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left — Wordmark */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <svg viewBox="10 50 180 130" width="28" height="20" className="shrink-0">
                <defs>
                  <linearGradient id="hg-ft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFE033"/>
                    <stop offset="100%" stopColor="#E8B800"/>
                  </linearGradient>
                </defs>
                <rect x="22" y="134" width="156" height="30" rx="9" fill="var(--logo-base)"/>
                <rect x="22" y="134" width="156" height="4" rx="9" fill="var(--logo-base)" opacity="0.9"/>
                <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="var(--logo-arm)"/>
                <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="var(--logo-arm-dark)"/>
                <circle cx="170" cy="112" r="20" fill="var(--bg)"/>
                <circle cx="170" cy="112" r="20" fill="none" stroke="url(#hg-ft)" strokeWidth="4.5"/>
                <circle cx="170" cy="112" r="9.5" fill="var(--yellow)"/>
                <circle cx="170" cy="112" r="5" fill="var(--yellow)"/>
                <circle cx="170" cy="112" r="3.5" fill="var(--bg)"/>
                <rect x="22" y="118" width="146" height="16" fill="var(--bg)"/>
                <rect x="32" y="110" width="52" height="10" rx="5" fill="var(--yellow)"/>
                <rect x="32" y="110" width="10" height="32" rx="5" fill="var(--yellow)"/>
                <rect x="74" y="110" width="10" height="32" rx="5" fill="var(--yellow)"/>
              </svg>
              <span
                className="font-display"
                style={{ fontSize: "20px", color: "var(--ink)", letterSpacing: "-0.01em" }}
              >
                Stapler<span style={{ color: "var(--amber)" }}>Labs</span>
              </span>
            </Link>
            <p
              className="mt-3 max-w-xs"
              style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--ink-40)" }}
            >
              We take established businesses and build everything they need online. Then we stick around.
            </p>
          </div>

          {/* Right — Links + Contact */}
          <div className="flex gap-16">
            <div>
              <p
                className="font-body"
                style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-40)", marginBottom: "12px" }}
              >
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="font-body transition-colors duration-150 hover:text-amber-700"
                    style={{ fontSize: "13px", color: "var(--ink-60)" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p
                className="font-body"
                style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-40)", marginBottom: "12px" }}
              >
                Reach us
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:work@staplerlabs.com"
                  className="font-body transition-colors duration-150 hover:text-amber-700"
                  style={{ fontSize: "13px", color: "var(--ink-60)" }}
                >
                  work@staplerlabs.com
                </a>
                <a
                  href="https://wa.me/918292511007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body transition-colors duration-150 hover:text-amber-700"
                  style={{ fontSize: "13px", color: "var(--ink-60)" }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ fontSize: "12px", color: "var(--ink-40)" }}>
            &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors duration-150 hover:text-amber-700"
              style={{ fontSize: "12px", color: "var(--ink-40)" }}
            >
              Privacy
            </Link>
            <span
              className="font-mono"
              style={{ fontSize: "11px", color: "var(--ink-40)" }}
            >
              Built with irrational attention to detail
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
