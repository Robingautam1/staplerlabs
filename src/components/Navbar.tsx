"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl" : "bg-transparent"
        }`}
        style={
          scrolled
            ? { backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--ink-06)" }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark — Instrument Serif */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg viewBox="10 50 180 130" width="28" height="20" className="shrink-0">
              <defs>
                <linearGradient id="hg-nav" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFE033"/>
                  <stop offset="100%" stopColor="#E8B800"/>
                </linearGradient>
              </defs>
              <rect x="22" y="134" width="156" height="30" rx="9" fill="var(--logo-base)"/>
              <rect x="22" y="134" width="156" height="4" rx="9" fill="var(--logo-base)" opacity="0.9"/>
              <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="var(--logo-arm)"/>
              <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="var(--logo-arm-dark)"/>
              <circle cx="170" cy="112" r="20" fill="var(--bg)"/>
              <circle cx="170" cy="112" r="20" fill="none" stroke="url(#hg-nav)" strokeWidth="4.5"/>
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
              style={{ fontSize: "18px", color: "var(--ink)", letterSpacing: "-0.01em" }}
            >
              Stapler<span style={{ color: "var(--amber)" }}>Labs</span>
            </span>
          </Link>

          {/* Desktop nav — centered links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link transition-colors font-body"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: pathname === l.href ? "var(--amber)" : "var(--ink-60)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* CTA with hover arrow */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group btn-yellow inline-flex items-center gap-1.5"
              style={{ padding: "10px 22px" }}
            >
              Talk to us
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 flex flex-col justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${open ? "rotate-45 translate-y-1" : ""}`}
              style={{ backgroundColor: "var(--ink)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1" : ""}`}
              style={{ backgroundColor: "var(--ink)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-sm z-40"
              style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm z-50 flex flex-col justify-center px-10"
              style={{ backgroundColor: "var(--cream)" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 text-2xl"
                style={{ color: "var(--ink-40)" }}
                aria-label="Close menu"
              >
                &times;
              </button>
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    className="block py-3 font-display"
                    style={{
                      fontSize: "32px",
                      color: pathname === l.href ? "var(--amber)" : "var(--ink)",
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-block btn-yellow"
                  style={{ padding: "12px 24px", fontSize: "16px" }}
                >
                  Talk to us
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
