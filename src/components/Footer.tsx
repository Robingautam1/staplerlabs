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
    <footer style={{ borderTop: "1px solid var(--border-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <StaplerLogo className="w-6 h-6" hoverAnimate={true} />
            <span className="font-display font-bold text-sm t-heading">
              StaplerLabs
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs t-secondary hover:t-heading transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6 pt-6 md:flex-row md:justify-between" style={{ borderTop: "1px solid var(--border-primary)" }}>
          <div className="text-center md:text-left">
            <p className="text-[11px] t-dim mb-1">We work with established businesses that are ready to be found.</p>
            <p className="text-xs t-muted">
              &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
            </p>
          </div>
          <p className="text-xs font-mono t-dim mt-2 md:mt-0">
            Built with irrational attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
}
