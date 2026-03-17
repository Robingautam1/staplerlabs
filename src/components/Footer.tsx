"use client";

import Link from "next/link";
import StaplerLogo from "./StaplerLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid rgba(26, 23, 16, 0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <StaplerLogo className="w-6 h-6" hoverAnimate={true} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "var(--text-heading)" }}>
              StaplerLabs
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors duration-150"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(26, 23, 16, 0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-heading)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26, 23, 16, 0.5)")}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 mt-8 pt-6 md:flex-row md:justify-between" style={{ borderTop: "1px solid var(--border-primary)" }}>
          <div className="text-center md:text-left">
            <p className="label-caps mb-1.5" style={{ color: "var(--text-dim)" }}>
              We work with established businesses that are ready to be found.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(26, 23, 16, 0.5)" }}>
              &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
            </p>
          </div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(26, 23, 16, 0.4)" }}>
            Built with irrational attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
}
