"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StaplerLogo from "@/components/StaplerLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 dot-grid">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mx-auto mb-8"
        >
          <StaplerLogo className="w-20 h-20 mx-auto" />
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl t-yellow mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="font-display text-xl sm:text-2xl mb-3 t-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          This page got stapled to the wrong document.
        </motion.p>

        <motion.p
          className="t-muted text-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Either the URL is wrong, or this page never existed. Both are
          forgivable. Let&apos;s get you somewhere useful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/" className="btn-primary">
            Back to Home
            <span className="arrow-chip">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
