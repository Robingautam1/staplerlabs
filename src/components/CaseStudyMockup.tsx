"use client";

import { motion } from "framer-motion";

/**
 * CaseStudyMockup — iPhone 16 proportions
 * Dynamic Island, thin bezels, proper content alignment.
 * All content stays within the screen area with consistent padding.
 */
export default function CaseStudyMockup() {
  return (
    <svg viewBox="0 0 260 520" fill="none" className="w-full h-auto max-w-[260px] mx-auto">
      <defs>
        <linearGradient id="glassShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.03)" />
        </linearGradient>
        <clipPath id="screenClip">
          <rect x="18" y="28" width="224" height="464" rx="36" />
        </clipPath>
      </defs>

      {/* ── Outer Phone Bezel ── */}
      <rect x="8" y="12" width="244" height="496" rx="44" stroke="var(--ink)" strokeWidth="2.5" opacity="0.12" fill="#1a1a1a" />
      <rect x="8" y="12" width="244" height="496" rx="44" fill="url(#frameGrad)" opacity="0.6" />

      {/* ── Screen Area ── */}
      <rect x="18" y="28" width="224" height="464" rx="36" fill="var(--white)" />

      {/* ── Dynamic Island ── */}
      <ellipse cx="130" cy="44" rx="28" ry="14" fill="#000" />
      <circle cx="116" cy="44" r="3.5" fill="#1a1a1a" opacity="0.8" />
      <circle cx="116" cy="44" r="2.8" fill="#000" />
      <circle cx="145" cy="44" r="2" fill="#000" opacity="0.6" />

      {/* Glass shine */}
      <rect x="18" y="28" width="224" height="464" rx="36" fill="url(#glassShine)" opacity="0.4" />

      {/* ── Side Buttons ── */}
      <rect x="12" y="120" width="3" height="24" rx="1.5" fill="var(--ink)" opacity="0.4" />
      <rect x="12" y="160" width="3" height="20" rx="1.5" fill="var(--ink)" opacity="0.4" />
      <rect x="245" y="140" width="3" height="32" rx="1.5" fill="var(--ink)" opacity="0.4" />

      {/* ── All screen content clipped to screen area ── */}
      <g clipPath="url(#screenClip)">

        {/* WhatsApp Header */}
        <rect x="18" y="38" width="224" height="46" fill="#075E54" />
        <text x="42" y="66" fontSize="12" fontWeight="600" fill="#FFFFFF" fontFamily="var(--font-inter), Inter, sans-serif">
          StaplerLabs
        </text>
        <motion.circle
          cx="218" cy="61" r="4" fill="#25D366"
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
          <rect x="30" y="98" width="148" height="38" rx="10" fill="#DCF8C6" />
          <text x="40" y="115" fontSize="9" fill="#1a1710" fontFamily="var(--font-inter), Inter, sans-serif">
            Hi, I&apos;d like to book an
          </text>
          <text x="40" y="127" fontSize="9" fill="#1a1710" fontFamily="var(--font-inter), Inter, sans-serif">
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
          <rect x="90" y="146" width="148" height="50" rx="10" fill="var(--white)" stroke="var(--ink-08)" strokeWidth="1" />
          <text x="100" y="163" fontSize="9" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
            Done! You&apos;re booked for
          </text>
          <text x="100" y="175" fontSize="9" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
            Thu 3:30 PM with the dentist.
          </text>
          <text x="100" y="189" fontSize="8" fill="var(--ink-40)" fontFamily="var(--font-inter), Inter, sans-serif">
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
          <rect x="30" y="214" width="200" height="92" rx="10" fill="var(--white)" stroke="var(--ink-08)" strokeWidth="1" />
          {/* Map background */}
          <rect x="30" y="214" width="200" height="44" rx="10" fill="var(--cream-deep)" />
          <rect x="30" y="248" width="200" height="10" fill="var(--cream-deep)" />
          {/* Pin */}
          <path d="M128 228 C128 224 124 221 120 221 C116 221 112 224 112 228 C112 232 120 240 120 240 C120 240 128 232 128 228Z"
            fill="#EA4335" opacity="0.8" />
          <circle cx="120" cy="227" r="2.5" fill="#FFFFFF" opacity="0.9" />
          {/* Business info */}
          <text x="40" y="274" fontSize="10" fontWeight="600" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
            Dental Clinic
          </text>
          <text x="40" y="286" fontSize="8" fill="var(--ink-40)" fontFamily="var(--font-inter), Inter, sans-serif">
            4.8 ★★★★★ · 127 reviews
          </text>
          <text x="40" y="298" fontSize="8" fill="#25D366" fontFamily="var(--font-inter), Inter, sans-serif">
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
          <rect x="30" y="322" width="200" height="120" rx="10" fill="var(--white)" stroke="var(--ink-08)" strokeWidth="1" />
          <text x="44" y="346" fontSize="9" fontWeight="500" fill="var(--ink)" fontFamily="var(--font-inter), Inter, sans-serif">
            Online Appointments
          </text>
          <text x="44" y="358" fontSize="7" fill="var(--ink-40)" fontFamily="var(--font-inter), Inter, sans-serif">
            This month
          </text>

          {/* Bars */}
          {[
            { x: 50, h: 22, delay: 1.6 },
            { x: 72, h: 34, delay: 1.7 },
            { x: 94, h: 28, delay: 1.8 },
            { x: 116, h: 42, delay: 1.9 },
            { x: 138, h: 38, delay: 2.0 },
            { x: 160, h: 52, delay: 2.1 },
            { x: 182, h: 60, delay: 2.2 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x}
              y={428 - bar.h}
              width="16"
              height={bar.h}
              rx="3"
              fill="var(--yellow)"
              opacity="0.6"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: bar.delay, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: `${bar.x + 8}px 428px` }}
            />
          ))}
          <line x1="44" y1="428" x2="206" y2="428" stroke="var(--ink)" strokeWidth="0.5" opacity="0.1" />
        </motion.g>
      </g>

      {/* Home indicator */}
      <rect x="100" y="496" width="60" height="4" rx="2" fill="var(--ink)" opacity="0.12" />
    </svg>
  );
}
