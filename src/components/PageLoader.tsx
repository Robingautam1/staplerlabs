"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quips = [
  "Setting things up...",
  "Almost there...",
  "Loading your experience...",
];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [quip] = useState(() => quips[Math.floor(Math.random() * quips.length)]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--bg-primary)" }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated stapler icon */}
          <div className="relative w-24 h-24 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
              <rect width="200" height="200" fill="transparent" />

              {/* Base */}
              <rect x="22" y="134" width="156" height="30" rx="9" fill="var(--text-primary)" opacity="0.9" />
              <rect x="22" y="134" width="156" height="5" rx="9" fill="var(--text-heading)" />
              <rect x="30" y="140" width="116" height="4" rx="2" fill="var(--text-muted)" />

              {/* Arm - repeating staple press */}
              <motion.g
                style={{ transformOrigin: "170px 112px" }}
                animate={{ rotate: [0, -7, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
              >
                <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="var(--text-secondary)" />
                <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="var(--text-muted)" />
              </motion.g>

              {/* Hinge */}
              <circle cx="170" cy="112" r="20" fill="var(--bg-secondary)" />
              <circle cx="170" cy="112" r="20" fill="none" stroke="var(--yellow)" strokeWidth="4" />
              <circle cx="170" cy="112" r="9" fill="var(--yellow)" />
              <circle cx="170" cy="112" r="3.5" fill="var(--bg-primary)" />

              {/* Mouth */}
              <rect x="22" y="118" width="146" height="16" fill="var(--bg-primary)" />

              {/* Staple - pulses in with each press */}
              <motion.g
                animate={{ y: [-12, 0, -12], opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
              >
                <rect x="32" y="110" width="52" height="10" rx="5" fill="var(--yellow)" />
                <rect x="32" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
                <rect x="74" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
              </motion.g>
            </svg>
          </div>

          {/* Quip text */}
          <motion.p
            className="t-muted text-sm font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {quip}
          </motion.p>

          {/* Progress bar */}
          <div className="mt-6 w-40 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--yellow)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
