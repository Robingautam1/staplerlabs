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
          className="font-display font-extrabold text-6xl sm:text-7xl text-yellow mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="font-display font-bold text-xl sm:text-2xl mb-3 text-cream"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          This page got stapled to the wrong document.
        </motion.p>

        <motion.p
          className="text-cream/50 text-sm mb-8"
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
          <Link
            href="/"
            className="inline-block bg-yellow text-jet font-semibold px-6 py-3 rounded-md hover:bg-yellow/90 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
