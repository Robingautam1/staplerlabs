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
    <footer style={{ backgroundColor: "var(--color-bg-subtle)", borderTop: "1px solid var(--color-border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 pt-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left — Wordmark */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <StaplerLogo className="w-10 h-10" />
              <span
                className="font-display"
                style={{ fontSize: "20px", color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
              >
                Stapler<span style={{ color: "var(--color-primary)" }}>Labs</span>
              </span>
            </Link>
            <p
              className="mt-3 max-w-xs"
              style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--color-text-muted)" }}
            >
              Management consulting and technology execution for established Indian businesses.
              Diagnose. Advise. Execute. Staple.
            </p>
          </div>

          {/* Right — Links + Contact */}
          <div className="flex gap-16">
            <div>
              <p
                className="font-body"
                style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "12px" }}
              >
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="font-body transition-colors duration-150"
                    style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p
                className="font-body"
                style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "12px" }}
              >
                Reach us
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:work@staplerlabs.com"
                  className="font-body transition-colors duration-150"
                  style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}
                >
                  work@staplerlabs.com
                </a>
                <a
                  href="https://wa.me/918292511007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body transition-colors duration-150"
                  style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}
                >
                  WhatsApp
                </a>
                <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                  Delhi NCR, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors duration-150"
              style={{ fontSize: "12px", color: "var(--color-text-muted)" }}
            >
              Privacy
            </Link>
            <span
              className="font-mono"
              style={{ fontSize: "11px", color: "var(--color-text-muted)" }}
            >
              Diagnose. Advise. Execute. Staple.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
