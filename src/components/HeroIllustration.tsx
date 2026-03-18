"use client";

import { motion } from "framer-motion";

/**
 * Hero SVG — Offline → Online transformation
 * viewBox 700×400, dot grid background, isometric buildings,
 * animated dashed arc with traveling dot and service pills.
 */
export default function HeroIllustration() {
  const ink = "rgba(var(--ink-rgb),";

  return (
    <svg
      viewBox="0 0 700 400"
      fill="none"
      className="w-full h-auto lg:max-w-[700px]"
      style={{ maxHeight: "400px" }}
    >
      <defs>
        <linearGradient id="heroGlow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#C6900A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C6900A" stopOpacity="0" />
        </linearGradient>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="rgba(0,0,0,0.10)" />
        </filter>
        <filter id="amberGlow">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#C6900A" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* ── DOT GRID BACKGROUND ── */}
      {Array.from({ length: 18 }).map((_, row) =>
        Array.from({ length: 30 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 24}
            cy={12 + row * 24}
            r="0.8"
            fill={`${ink}0.06)`}
          />
        ))
      )}

      {/* ══════════ OFFLINE SIDE (left) ══════════ */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ground shadow */}
        <ellipse cx="130" cy="315" rx="90" ry="8" fill={`${ink}0.05)`} />

        {/* Building — front face */}
        <path d="M40 135 L40 295 L220 295 L220 135 Z" fill="var(--bg-card)" stroke={`${ink}0.12)`} strokeWidth="1.5" />
        {/* Side face */}
        <path d="M220 135 L255 115 L255 275 L220 295 Z" fill={`${ink}0.04)`} stroke={`${ink}0.10)`} strokeWidth="1" />
        {/* Roof */}
        <path d="M40 135 L75 115 L255 115 L220 135 Z" fill={`${ink}0.06)`} stroke={`${ink}0.10)`} strokeWidth="1" />

        {/* Awning */}
        <path d="M35 150 L130 136 L225 150" stroke={`${ink}0.12)`} strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Window — dark / dusty */}
        <rect x="60" y="165" width="48" height="40" rx="3" stroke={`${ink}0.12)`} strokeWidth="1.2" fill={`${ink}0.02)`} />
        <rect x="66" y="175" width="36" height="18" rx="2" fill={`${ink}0.04)`} />
        <text x="74" y="187" fontSize="7" fill={`${ink}0.22)`} fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">CLOSED</text>

        {/* Door — shut */}
        <rect x="145" y="205" width="48" height="90" rx="3" stroke={`${ink}0.12)`} strokeWidth="1.2" fill={`${ink}0.02)`} />
        <circle cx="183" cy="250" r="3" fill={`${ink}0.10)`} />

        {/* Phone with missed calls */}
        <g transform="translate(65, 215)">
          <rect width="30" height="50" rx="6" stroke={`${ink}0.12)`} strokeWidth="1.2" fill={`${ink}0.02)`} />
          <rect x="3" y="7" width="24" height="34" rx="2" fill={`${ink}0.03)`} />
          <circle cx="10" cy="18" r="3.5" fill="#D44444" opacity="0.5" />
          <circle cx="20" cy="18" r="3.5" fill="#D44444" opacity="0.4" />
          <circle cx="10" cy="28" r="3.5" fill="#D44444" opacity="0.3" />
          <text x="4" y="39" fontSize="4.5" fill={`${ink}0.15)`} fontFamily="var(--font-inter), Inter, sans-serif">3 missed</text>
        </g>

        {/* Paper ledger */}
        <g transform="translate(48, 305)">
          <rect width="85" height="50" rx="3" fill={`${ink}0.03)`} stroke={`${ink}0.07)`} strokeWidth="0.8" />
          {[12, 20, 28, 36].map((y, i) => (
            <line key={i} x1="10" y1={y} x2={70 - i * 5} y2={y} stroke={`${ink}${0.06 - i * 0.01})`} strokeWidth="0.6" />
          ))}
        </g>

        {/* OFFLINE label */}
        <text x="130" y="375" textAnchor="middle" fontSize="9" fill={`${ink}0.18)`} fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600" letterSpacing="0.12em">OFFLINE</text>
      </motion.g>

      {/* ══════════ TRANSFORMATION ARC (center) ══════════ */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        {/* Subtle glow */}
        <ellipse cx="350" cy="200" rx="70" ry="110" fill="url(#heroGlow)" />

        {/* Dashed arc path */}
        <motion.path
          d="M 270 220 C 300 150, 390 270, 430 195"
          stroke="#C6900A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: "easeInOut" }}
        />

        {/* Traveling dot */}
        <motion.circle
          r="5"
          fill="#C6900A"
          filter="url(#amberGlow)"
          animate={{ cx: [270, 300, 390, 430], cy: [220, 160, 260, 195] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 1] }}
        />

        {/* Service pills */}
        {[
          { x: 295, y: 175, label: "Website", delay: 1.2 },
          { x: 345, y: 220, label: "Google", delay: 1.5 },
          { x: 395, y: 190, label: "WhatsApp", delay: 1.8 },
        ].map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect x={node.x - 28} y={node.y - 12} width="56" height="24" rx="12" fill="var(--bg)" stroke="#C6900A" strokeWidth="1.2" />
            <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="8" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="500" fill="#C6900A">
              {node.label}
            </text>
          </motion.g>
        ))}
      </motion.g>

      {/* ══════════ ONLINE SIDE (right) ══════════ */}
      <motion.g
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ellipse cx="555" cy="315" rx="95" ry="10" fill={`${ink}0.06)`} />

        {/* Building — front face with shadow */}
        <path d="M445 125 L445 295 L635 295 L635 125 Z" fill="var(--bg-card)" stroke={`${ink}0.22)`} strokeWidth="1.8" filter="url(#softShadow)" />
        {/* Side face */}
        <path d="M635 125 L670 105 L670 275 L635 295 Z" fill={`${ink}0.05)`} stroke={`${ink}0.15)`} strokeWidth="1" />
        {/* Roof */}
        <path d="M445 125 L480 105 L670 105 L635 125 Z" fill={`${ink}0.07)`} stroke={`${ink}0.12)`} strokeWidth="1" />

        {/* Window — glowing screen */}
        <rect x="465" y="150" width="52" height="44" rx="3" stroke={`${ink}0.22)`} strokeWidth="1.5" fill={`${ink}0.03)`} />
        <rect x="468" y="153" width="46" height="38" rx="2" fill="var(--yellow)" opacity="0.10" />
        <rect x="472" y="158" width="35" height="5" rx="2" fill="#C6900A" opacity="0.22" />
        <rect x="472" y="167" width="26" height="3.5" rx="1" fill="#C6900A" opacity="0.14" />
        <rect x="472" y="174" width="30" height="3.5" rx="1" fill="#C6900A" opacity="0.10" />
        <text x="475" y="189" fontSize="5.5" fill={`${ink}0.4)`} fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">OPEN</text>

        {/* Door — open with warm light */}
        <rect x="545" y="205" width="50" height="90" rx="3" stroke={`${ink}0.22)`} strokeWidth="1.5" fill={`${ink}0.03)`} />
        <rect x="550" y="210" width="40" height="80" rx="2" fill="var(--yellow)" opacity="0.04" />
        <circle cx="585" cy="250" r="3" fill={`${ink}0.35)`} />

        {/* WhatsApp badge */}
        <motion.circle
          cx="640" cy="122" r="6" fill="#25D366" opacity="0.85"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* iPhone mini with chat */}
        <g transform="translate(628, 138)">
          <rect width="34" height="62" rx="7" stroke={`${ink}0.22)`} strokeWidth="1.5" fill="var(--bg-card)" />
          <rect x="3" y="8" width="28" height="44" rx="3" fill={`${ink}0.03)`} />
          <rect x="10" y="3" width="14" height="3" rx="1.5" fill={`${ink}0.12)`} />
          <rect x="6" y="14" width="16" height="9" rx="4.5" fill="#DCF8C6" />
          <rect x="12" y="27" width="14" height="9" rx="4.5" fill="var(--bg-card)" stroke={`${ink}0.06)`} strokeWidth="0.5" />
          <rect x="6" y="40" width="18" height="9" rx="4.5" fill="#DCF8C6" />
          <motion.circle
            cx="17" cy="56" r="2.5" fill="#25D366"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Google Maps pin */}
        <motion.g
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring", stiffness: 180 }}
        >
          <path d="M558 105 C558 97 551 91 544 91 C537 91 530 97 530 105 C530 113 544 127 544 127 C544 127 558 113 558 105Z" fill="#EA4335" opacity="0.85" />
          <circle cx="544" cy="104" r="4.5" fill="var(--bg-card)" opacity="0.9" />
          <motion.circle
            cx="544" cy="104" r="9" fill="none" stroke="#EA4335" strokeWidth="1"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.g>

        {/* Bar chart — bookings */}
        <g transform="translate(460, 305)">
          {[
            { x: 0, h: 16, delay: 2.4 },
            { x: 16, h: 24, delay: 2.5 },
            { x: 32, h: 20, delay: 2.6 },
            { x: 48, h: 32, delay: 2.7 },
            { x: 64, h: 42, delay: 2.8 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x}
              y={48 - bar.h}
              width="11"
              height={bar.h}
              rx="2"
              fill="#C6900A"
              opacity="0.35"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: bar.delay, duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: `${bar.x + 5.5}px 48px` }}
            />
          ))}
          <line x1="0" y1="48" x2="78" y2="48" stroke={`${ink}0.08)`} strokeWidth="0.8" />
          {[0, 1, 2, 3, 4].map((s) => (
            <text key={s} x={s * 11} y="62" fontSize="7.5" fill="#C6900A" opacity="0.55">★</text>
          ))}
        </g>

        {/* ONLINE label */}
        <text x="555" y="375" textAnchor="middle" fontSize="9" fill="#C6900A" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.5">ONLINE</text>
      </motion.g>
    </svg>
  );
}
