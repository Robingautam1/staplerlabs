"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 400" fill="none" className="w-full h-auto">
      {/* ── OFFLINE SIDE (left) ── */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Storefront */}
        <rect x="30" y="120" width="140" height="120" rx="4" stroke="var(--ink)" strokeWidth="2" opacity="0.18" />
        {/* Awning */}
        <path d="M24 120 L100 100 L176 120" stroke="var(--ink)" strokeWidth="2" opacity="0.18" strokeLinecap="round" />
        {/* Door */}
        <rect x="82" y="180" width="36" height="60" rx="2" stroke="var(--ink)" strokeWidth="1.5" opacity="0.15" />
        <circle cx="112" cy="210" r="2" fill="var(--ink)" opacity="0.15" />
        {/* Window */}
        <rect x="42" y="135" width="30" height="30" rx="2" stroke="var(--ink)" strokeWidth="1.5" opacity="0.15" />
        {/* Closed sign in window */}
        <text x="47" y="154" fontSize="6" fill="var(--ink)" opacity="0.22" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="500">Closed</text>
        <text x="52" y="161" fontSize="5" fill="var(--ink)" opacity="0.15" fontFamily="var(--font-inter), Inter, sans-serif">Mon</text>

        {/* Phone with missed calls */}
        <rect x="140" y="135" width="22" height="38" rx="4" stroke="var(--ink)" strokeWidth="1.5" opacity="0.18" />
        <rect x="143" y="140" width="16" height="24" rx="1" fill="var(--ink)" opacity="0.04" />
        {/* Red dots — missed calls */}
        <circle cx="148" cy="147" r="2" fill="#D44" opacity="0.5" />
        <circle cx="154" cy="147" r="2" fill="#D44" opacity="0.4" />
        <circle cx="148" cy="154" r="2" fill="#D44" opacity="0.3" />

        {/* Paper ledger */}
        <rect x="48" y="260" width="60" height="40" rx="2" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1" opacity="0.12" />
        <line x1="56" y1="270" x2="100" y2="270" stroke="var(--ink)" strokeWidth="0.8" opacity="0.1" />
        <line x1="56" y1="278" x2="96" y2="278" stroke="var(--ink)" strokeWidth="0.8" opacity="0.08" />
        <line x1="56" y1="286" x2="88" y2="286" stroke="var(--ink)" strokeWidth="0.8" opacity="0.06" />
      </motion.g>

      {/* ── TRANSFORMATION PATH (center) ── */}
      <motion.path
        d="M 190 200 C 240 180, 280 220, 330 200"
        stroke="var(--amber)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
      />

      {/* Nodes along path — pills */}
      {[
        { x: 222, y: 188, label: "Website", delay: 1.2 },
        { x: 260, y: 202, label: "Google", delay: 1.5 },
        { x: 298, y: 194, label: "WhatsApp", delay: 1.8 },
      ].map((node, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: node.delay }}
        >
          <rect
            x={node.x - 22}
            y={node.y - 9}
            width="44"
            height="18"
            rx="9"
            fill="var(--cream)"
            stroke="var(--amber)"
            strokeWidth="1"
          />
          <text
            x={node.x}
            y={node.y + 3}
            textAnchor="middle"
            fontSize="7"
            fontFamily="var(--font-inter), Inter, sans-serif"
            fontWeight="500"
            fill="var(--amber)"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* ── ONLINE SIDE (right) ── */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        {/* Storefront (warmer) */}
        <rect x="350" y="120" width="140" height="120" rx="4" stroke="var(--amber)" strokeWidth="2" opacity="0.35" />
        <path d="M344 120 L420 100 L496 120" stroke="var(--amber)" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
        {/* Door */}
        <rect x="402" y="180" width="36" height="60" rx="2" stroke="var(--amber)" strokeWidth="1.5" opacity="0.3" />
        <circle cx="432" cy="210" r="2" fill="var(--amber)" opacity="0.3" />
        {/* Window — lit up */}
        <rect x="362" y="135" width="30" height="30" rx="2" fill="var(--yellow)" stroke="var(--amber)" strokeWidth="1.5" opacity="0.3" />
        <text x="367" y="154" fontSize="6" fill="var(--amber)" opacity="0.5" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="500">Open</text>

        {/* Phone — WhatsApp booking */}
        <rect x="460" y="125" width="28" height="50" rx="6" stroke="var(--amber)" strokeWidth="1.5" opacity="0.4" />
        <rect x="464" y="132" width="20" height="32" rx="2" fill="var(--amber)" opacity="0.06" />
        {/* Chat bubbles */}
        <rect x="466" y="136" width="14" height="6" rx="3" fill="#25D366" opacity="0.5" />
        <rect x="468" y="145" width="12" height="6" rx="3" fill="var(--amber)" opacity="0.3" />
        <rect x="466" y="154" width="16" height="6" rx="3" fill="#25D366" opacity="0.4" />
        {/* Green pulse */}
        <motion.circle
          cx="474"
          cy="170"
          r="2"
          fill="#25D366"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Google Maps pin */}
        <motion.g
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <path d="M380 268 C380 260 373 254 366 254 C359 254 352 260 352 268 C352 276 366 292 366 292 C366 292 380 276 380 268Z" fill="var(--amber)" opacity="0.2" stroke="var(--amber)" strokeWidth="1.5" />
          <circle cx="366" cy="267" r="4" fill="var(--amber)" opacity="0.4" />
          {/* Stars */}
          {[0, 1, 2, 3, 4].map((s) => (
            <text key={s} x={354 + s * 8} y="306" fontSize="7" fill="var(--amber)" opacity="0.5">★</text>
          ))}
        </motion.g>

        {/* Bar chart — bookings going up */}
        <motion.g>
          {[
            { x: 430, h: 14, delay: 2.1 },
            { x: 442, h: 22, delay: 2.2 },
            { x: 454, h: 18, delay: 2.3 },
            { x: 466, h: 30, delay: 2.4 },
            { x: 478, h: 38, delay: 2.5 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x}
              y={310 - bar.h}
              width="8"
              height={bar.h}
              rx="2"
              fill="var(--amber)"
              opacity="0.25"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: bar.delay, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: `${bar.x + 4}px 310px` }}
            />
          ))}
          <line x1="428" y1="310" x2="490" y2="310" stroke="var(--ink)" strokeWidth="0.8" opacity="0.1" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
