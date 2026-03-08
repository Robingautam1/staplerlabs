"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import StaplerLogo from "./StaplerLogo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
          scrolled
            ? "backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "var(--bg-nav)", borderBottom: "1px solid var(--border-nav)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <StaplerLogo className="w-8 h-8 rounded-lg" hoverAnimate={true} />
            <span className="font-display font-bold text-lg tracking-tight t-heading">
              StaplerLabs
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  pathname === l.href ? "t-yellow" : "t-primary"
                }`}
                style={pathname !== l.href ? { opacity: 0.85 } : {}}
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-yellow text-sm px-5 py-2 rounded-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="relative w-8 h-8 flex flex-col justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  open ? "rotate-45 translate-y-1" : ""
                }`}
                style={{ backgroundColor: "var(--text-primary)" }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-1" : ""
                }`}
                style={{ backgroundColor: "var(--text-primary)" }}
              />
            </button>
          </div>
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
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm z-50 flex flex-col justify-center px-10"
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 t-tertiary text-2xl"
                aria-label="Close menu"
              >
                &times;
              </button>
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    className={`block text-3xl font-display font-bold py-3 transition-colors ${
                      pathname === l.href ? "t-yellow" : "t-heading"
                    }`}
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
                  className="inline-block btn-yellow px-6 py-3 rounded-md text-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
