"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import StaplerLogo from "./StaplerLogo";

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
            ? "bg-jet/90 backdrop-blur-md border-b border-gray-mid/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <StaplerLogo className="w-8 h-8 rounded-lg" hoverAnimate={true} />
            <span className="font-display font-bold text-lg tracking-tight text-cream">
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
                  pathname === l.href ? "text-yellow" : "text-cream/70 hover:text-cream"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-yellow text-jet text-sm font-semibold px-5 py-2 rounded-md hover:bg-yellow/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                open ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1" : ""
              }`}
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
              className="fixed inset-0 bg-jet/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-jet z-50 flex flex-col justify-center px-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 text-cream/70 text-2xl"
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
                      pathname === l.href ? "text-yellow" : "text-cream hover:text-yellow"
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
                  className="inline-block bg-yellow text-jet font-semibold px-6 py-3 rounded-md text-lg"
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
