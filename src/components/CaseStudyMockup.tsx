"use client";

import { motion } from "framer-motion";

export default function CaseStudyMockup() {
  return (
    <svg viewBox="0 0 260 480" fill="none" className="w-full h-auto max-w-[260px] mx-auto">
      {/* Phone frame */}
      <rect
        x="8"
        y="8"
        width="244"
        height="464"
        rx="28"
        stroke="var(--ink)"
        strokeWidth="2"
        opacity="0.15"
        fill="var(--cream-deep)"
      />
      {/* Screen */}
      <rect x="18" y="38" width="224" height="404" rx="4" fill="var(--white)" />
      {/* Notch */}
      <rect x="90" y="14" width="80" height="18" rx="9" fill="var(--ink)" opacity="0.08" />

      {/* ── WhatsApp Header ── */}
      <rect x="18" y="38" width="224" height="44" rx="4" fill="#075E54" />
      <text
        x="38"
        y="64"
        fontSize="12"
        fontWeight="600"
        fill="#FFFFFF"
        fontFamily="var(--font-inter), Inter, sans-serif"
      >
        StaplerLabs
      </text>
      <motion.circle
        cx="218"
        cy="60"
        r="4"
        fill="#25D366"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Chat Bubbles ── */}
      {/* Incoming */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <rect x="28" y="96" width="140" height="36" rx="10" fill="#DCF8C6" />
        <text x="38" y="112" fontSize="9" fill="#1a1710" fontFamily="var(--font-inter), Inter, sans-serif">
          Hi, I&apos;d like to book an
        </text>
        <text x="38" y="123" fontSize="9" fill="#1a1710" fontFamily="var(--font-inter), Inter, sans-serif">
          appointment for Thursday
        </text>
      </motion.g>

      {/* Outgoing */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <rect x="92" y="142" width="148" height="48" rx="10" fill="var(--white)" stroke="var(--ink-08)" strokeWidth="1" />
        <text x="102" y="158" fontSize="9" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
          Done! You&apos;re booked for
        </text>
        <text x="102" y="169" fontSize="9" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
          Thu 3:30 PM with Dr. Mehta.
        </text>
        <text x="102" y="182" fontSize="8" fill="var(--ink-40)" fontFamily="var(--font-inter), Inter, sans-serif">
          Automated via StaplerLabs
        </text>
      </motion.g>

      {/* ── Google Maps Card ── */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <rect x="28" y="210" width="204" height="90" rx="10" fill="var(--white)" stroke="var(--ink-08)" strokeWidth="1" />
        {/* Map placeholder */}
        <rect x="28" y="210" width="204" height="42" rx="10" fill="var(--cream-deep)" />
        <rect x="28" y="242" width="204" height="10" fill="var(--cream-deep)" />
        {/* Pin */}
        <path
          d="M128 224 C128 220 124 217 120 217 C116 217 112 220 112 224 C112 228 120 236 120 236 C120 236 128 228 128 224Z"
          fill="#EA4335"
          opacity="0.8"
        />
        <circle cx="120" cy="223" r="2.5" fill="#FFFFFF" opacity="0.9" />
        {/* Business info */}
        <text x="38" y="268" fontSize="10" fontWeight="600" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
          Mehta Dental Clinic
        </text>
        <text x="38" y="280" fontSize="8" fill="var(--ink-40)" fontFamily="var(--font-inter), Inter, sans-serif">
          4.8 ★★★★★ · 127 reviews
        </text>
        <text x="38" y="292" fontSize="8" fill="#25D366" fontFamily="var(--font-inter), Inter, sans-serif">
          Open now · Closes 8 PM
        </text>
      </motion.g>

      {/* ── Mini Bar Chart ── */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <rect x="28" y="316" width="204" height="110" rx="10" fill="var(--white)" stroke="var(--ink-08)" strokeWidth="1" />
        <text x="42" y="338" fontSize="9" fontWeight="500" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
          Online Appointments
        </text>
        <text x="42" y="350" fontSize="7" fill="var(--ink-40)" fontFamily="var(--font-inter), Inter, sans-serif">
          This month
        </text>

        {/* Bars */}
        {[
          { x: 52, h: 22, delay: 1.6 },
          { x: 72, h: 34, delay: 1.7 },
          { x: 92, h: 28, delay: 1.8 },
          { x: 112, h: 42, delay: 1.9 },
          { x: 132, h: 38, delay: 2.0 },
          { x: 152, h: 52, delay: 2.1 },
          { x: 172, h: 58, delay: 2.2 },
        ].map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x}
            y={414 - bar.h}
            width="14"
            height={bar.h}
            rx="3"
            fill="var(--yellow)"
            opacity="0.6"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: bar.delay, duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: `${bar.x + 7}px 414px` }}
          />
        ))}
        <line x1="42" y1="414" x2="196" y2="414" stroke="var(--ink)" strokeWidth="0.5" opacity="0.1" />
      </motion.g>
    </svg>
  );
}
