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
    <footer className="border-t border-gray-mid/30">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <StaplerLogo className="w-6 h-6" hoverAnimate={true} />
            <span className="font-display font-bold text-sm text-cream">
              StaplerLabs
            </span>
          </Link>
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-cream/50 hover:text-cream transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6 border-t border-gray-mid/20">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} StaplerLabs. All rights reserved.
          </p>
          <p className="text-xs font-mono text-cream/20 mt-2 md:mt-0">
            Built with irrational attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
}
