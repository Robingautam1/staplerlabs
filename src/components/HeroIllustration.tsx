"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      className="w-full h-auto lg:max-w-[560px] max-h-[280px] lg:max-h-none"
    >
      <defs>
        <linearGradient id="heroGlow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
        </linearGradient>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.12)" />
        </filter>
        <filter id="amberGlow">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="var(--amber)" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* ── OFFLINE SIDE (left) — Isometric storefront ── */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ground shadow */}
        <ellipse cx="100" cy="330" rx="80" ry="8" fill="rgba(var(--ink-rgb),0.06)" />

        {/* Building — isometric front face */}
        <path d="M30 140 L30 300 L170 300 L170 140 Z" fill="var(--bg-card)" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1.5" />
        {/* Building — isometric side face */}
        <path d="M170 140 L200 120 L200 280 L170 300 Z" fill="rgba(var(--ink-rgb),0.04)" stroke="rgba(var(--ink-rgb),0.10)" strokeWidth="1" />
        {/* Roof */}
        <path d="M30 140 L60 120 L200 120 L170 140 Z" fill="rgba(var(--ink-rgb),0.06)" stroke="rgba(var(--ink-rgb),0.10)" strokeWidth="1" />

        {/* Awning */}
        <path d="M25 155 L100 140 L175 155" stroke="rgba(var(--ink-rgb),0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Window — dusty */}
        <rect x="50" y="165" width="40" height="35" rx="3" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1.2" fill="rgba(var(--ink-rgb),0.02)" />
        <rect x="55" y="175" width="30" height="16" rx="2" fill="rgba(var(--ink-rgb),0.04)" />
        <text x="62" y="185" fontSize="6" fill="rgba(var(--ink-rgb),0.25)" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">CLOSED</text>

        {/* Door — shut */}
        <rect x="110" y="210" width="40" height="90" rx="3" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1.2" fill="rgba(var(--ink-rgb),0.02)" />
        <circle cx="143" cy="255" r="2.5" fill="rgba(var(--ink-rgb),0.10)" />

        {/* Phone with missed calls */}
        <g transform="translate(50, 215)">
          <rect width="28" height="48" rx="6" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1.2" fill="rgba(var(--ink-rgb),0.02)" />
          <rect x="3" y="6" width="22" height="32" rx="2" fill="rgba(var(--ink-rgb),0.03)" />
          <circle cx="10" cy="16" r="3" fill="#D44444" opacity="0.5" />
          <circle cx="18" cy="16" r="3" fill="#D44444" opacity="0.4" />
          <circle cx="10" cy="24" r="3" fill="#D44444" opacity="0.3" />
          <text x="4" y="36" fontSize="4" fill="rgba(var(--ink-rgb),0.15)" fontFamily="var(--font-inter), Inter, sans-serif">3 missed</text>
        </g>

        {/* Paper ledger */}
        <g transform="translate(38, 310)">
          <rect width="80" height="50" rx="3" fill="rgba(var(--ink-rgb),0.03)" stroke="rgba(var(--ink-rgb),0.08)" strokeWidth="0.8" />
          <line x1="10" y1="12" x2="70" y2="12" stroke="rgba(var(--ink-rgb),0.06)" strokeWidth="0.6" />
          <line x1="10" y1="20" x2="65" y2="20" stroke="rgba(var(--ink-rgb),0.05)" strokeWidth="0.6" />
          <line x1="10" y1="28" x2="55" y2="28" stroke="rgba(var(--ink-rgb),0.04)" strokeWidth="0.6" />
          <line x1="10" y1="36" x2="45" y2="36" stroke="rgba(var(--ink-rgb),0.03)" strokeWidth="0.6" />
        </g>

        {/* OFFLINE label */}
        <text x="100" y="385" textAnchor="middle" fontSize="8" fill="rgba(var(--ink-rgb),0.2)" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600" letterSpacing="0.12em">OFFLINE</text>
      </motion.g>

      {/* ── TRANSFORMATION ARC (center) ── */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        <ellipse cx="280" cy="200" rx="60" ry="100" fill="url(#heroGlow)" />

        <motion.path
          d="M 210 220 C 240 160, 310 260, 350 200"
          stroke="var(--amber)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: "easeInOut" }}
        />

        {/* Traveling dot */}
        <motion.circle
          r="5"
          fill="var(--amber)"
          filter="url(#amberGlow)"
          animate={{ cx: [210, 240, 310, 350], cy: [220, 170, 250, 200] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 1] }}
        />

        {/* Service pills */}
        {[
          { x: 230, y: 178, label: "Website", delay: 1.2 },
          { x: 275, y: 218, label: "Google", delay: 1.5 },
          { x: 320, y: 194, label: "WhatsApp", delay: 1.8 },
        ].map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect x={node.x - 26} y={node.y - 11} width="52" height="22" rx="11" fill="var(--bg)" stroke="var(--amber)" strokeWidth="1.2" />
            <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="7.5" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="500" fill="var(--amber)">
              {node.label}
            </text>
          </motion.g>
        ))}
      </motion.g>

      {/* ── ONLINE SIDE (right) — Alive, glowing ── */}
      <motion.g
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ellipse cx="440" cy="330" rx="90" ry="10" fill="rgba(var(--ink-rgb),0.08)" />

        {/* Building — isometric front */}
        <path d="M360 130 L360 300 L510 300 L510 130 Z" fill="var(--bg-card)" stroke="rgba(var(--ink-rgb),0.25)" strokeWidth="1.8" filter="url(#softShadow)" />
        {/* Side face */}
        <path d="M510 130 L540 110 L540 280 L510 300 Z" fill="rgba(var(--ink-rgb),0.06)" stroke="rgba(var(--ink-rgb),0.18)" strokeWidth="1" />
        {/* Roof */}
        <path d="M360 130 L390 110 L540 110 L510 130 Z" fill="rgba(var(--ink-rgb),0.08)" stroke="rgba(var(--ink-rgb),0.15)" strokeWidth="1" />

        {/* Window — glowing screen */}
        <rect x="378" y="155" width="44" height="38" rx="3" stroke="rgba(var(--ink-rgb),0.25)" strokeWidth="1.5" fill="rgba(var(--ink-rgb),0.03)" />
        <rect x="381" y="158" width="38" height="32" rx="2" fill="var(--yellow)" opacity="0.12" />
        <rect x="384" y="162" width="30" height="4" rx="1.5" fill="var(--amber)" opacity="0.25" />
        <rect x="384" y="170" width="22" height="3" rx="1" fill="var(--amber)" opacity="0.15" />
        <rect x="384" y="177" width="26" height="3" rx="1" fill="var(--amber)" opacity="0.12" />
        <text x="387" y="188" fontSize="5" fill="rgba(var(--ink-rgb),0.45)" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">OPEN</text>

        {/* Door — open */}
        <rect x="445" y="210" width="42" height="90" rx="3" stroke="rgba(var(--ink-rgb),0.25)" strokeWidth="1.5" fill="rgba(var(--ink-rgb),0.03)" />
        <rect x="450" y="215" width="32" height="80" rx="2" fill="var(--yellow)" opacity="0.04" />
        <circle cx="480" cy="255" r="2.5" fill="rgba(var(--ink-rgb),0.4)" />

        {/* WhatsApp badge */}
        <motion.circle cx="516" cy="128" r="5" fill="#25D366" opacity="0.85"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* iPhone mini with chat */}
        <g transform="translate(500, 140)">
          <rect width="32" height="60" rx="7" stroke="rgba(var(--ink-rgb),0.25)" strokeWidth="1.5" fill="var(--bg-card)" />
          <rect x="3" y="7" width="26" height="42" rx="3" fill="rgba(var(--ink-rgb),0.03)" />
          <rect x="10" y="3" width="12" height="3" rx="1.5" fill="rgba(var(--ink-rgb),0.15)" />
          <rect x="5" y="12" width="16" height="8" rx="4" fill="#DCF8C6" />
          <rect x="11" y="24" width="14" height="8" rx="4" fill="var(--bg-card)" stroke="rgba(var(--ink-rgb),0.06)" strokeWidth="0.5" />
          <rect x="5" y="36" width="18" height="8" rx="4" fill="#DCF8C6" />
          <motion.circle cx="16" cy="54" r="2.5" fill="#25D366"
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
          <path d="M448 110 C448 102 441 96 434 96 C427 96 420 102 420 110 C420 118 434 132 434 132 C434 132 448 118 448 110Z" fill="#EA4335" opacity="0.85" />
          <circle cx="434" cy="109" r="4" fill="var(--bg-card)" opacity="0.9" />
          <motion.circle cx="434" cy="109" r="8" fill="none" stroke="#EA4335" strokeWidth="1"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.g>

        {/* Bar chart — bookings */}
        <g transform="translate(370, 310)">
          {[
            { x: 0, h: 14, delay: 2.4 },
            { x: 14, h: 22, delay: 2.5 },
            { x: 28, h: 18, delay: 2.6 },
            { x: 42, h: 30, delay: 2.7 },
            { x: 56, h: 38, delay: 2.8 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x}
              y={46 - bar.h}
              width="10"
              height={bar.h}
              rx="2"
              fill="var(--amber)"
              opacity="0.4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: bar.delay, duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: `${bar.x + 5}px 46px` }}
            />
          ))}
          <line x1="0" y1="46" x2="70" y2="46" stroke="rgba(var(--ink-rgb),0.1)" strokeWidth="0.8" />
          {[0, 1, 2, 3, 4].map((s) => (
            <text key={s} x={s * 10} y="60" fontSize="7" fill="var(--amber)" opacity="0.6">★</text>
          ))}
        </g>

        {/* ONLINE label */}
        <text x="440" y="385" textAnchor="middle" fontSize="8" fill="var(--amber)" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.6">ONLINE</text>
      </motion.g>
    </svg>
  );
}
