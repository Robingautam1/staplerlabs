"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quips = [
  "Stapling your ideas together...",
  "Fastening the details...",
  "Binding brilliance, one click at a time...",
  "Holding it all together...",
  "Almost pinned down...",
];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [quip] = useState(() => quips[Math.floor(Math.random() * quips.length)]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated stapler icon */}
          <div className="relative w-24 h-24 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
              <rect width="200" height="200" fill="transparent" />

              {/* Base */}
              <rect x="22" y="134" width="156" height="30" rx="9" fill="#F0F0F0" />
              <rect x="22" y="134" width="156" height="5" rx="9" fill="#FFFFFF" />
              <rect x="30" y="140" width="116" height="4" rx="2" fill="#D8D8D8" />

              {/* Arm — repeating staple press */}
              <motion.g
                style={{ transformOrigin: "170px 112px" }}
                animate={{ rotate: [0, -7, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
              >
                <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="#E0E0E0" />
                <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="#C4C4C4" />
              </motion.g>

              {/* Hinge */}
              <circle cx="170" cy="112" r="20" fill="#111111" />
              <circle cx="170" cy="112" r="20" fill="none" stroke="#FFD000" strokeWidth="4" />
              <circle cx="170" cy="112" r="9" fill="#FFD000" />
              <circle cx="170" cy="112" r="3.5" fill="#0A0A0A" />

              {/* Mouth */}
              <rect x="22" y="118" width="146" height="16" fill="#0A0A0A" />

              {/* Staple — pulses in with each press */}
              <motion.g
                animate={{ y: [-12, 0, -12], opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
              >
                <rect x="32" y="110" width="52" height="10" rx="5" fill="#FFD000" />
                <rect x="32" y="110" width="10" height="32" rx="5" fill="#FFD000" />
                <rect x="74" y="110" width="10" height="32" rx="5" fill="#FFD000" />
              </motion.g>
            </svg>
          </div>

          {/* Quip text */}
          <motion.p
            className="text-[#F0F0F0]/50 text-sm font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {quip}
          </motion.p>

          {/* Progress bar */}
          <div className="mt-6 w-40 h-0.5 bg-[#1A1A1A] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#FFD000] rounded-full"
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
