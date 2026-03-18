"use client";

import { motion } from "framer-motion";

const ink = "rgba(var(--ink-rgb),";
const f = "var(--font-inter), Inter, sans-serif";

/**
 * StaplerDiagram — Exploded-view stapler with labeled floating parts.
 * Each part gently floats up/down on a staggered loop.
 */
export default function StaplerDiagram() {
  const float = (delay: number, y: number = 4) => ({
    animate: { y: [-y, y, -y] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay },
  });

  return (
    <svg viewBox="0 0 400 320" fill="none" className="w-full h-auto" style={{ overflow: "visible" }}>
      {/* ── BASE / ANVIL ── */}
      <motion.g {...float(0, 2)}>
        <path
          d="M100 240 L100 260 C100 268 108 274 120 274 L280 274 C292 274 300 268 300 260 L300 240 L280 240 C280 248 272 252 260 252 L140 252 C128 252 120 248 120 240 Z"
          fill="var(--bg-card)"
          stroke={`${ink}0.15)`}
          strokeWidth="1.5"
        />
        {/* Anvil groove */}
        <rect x="170" y="248" width="60" height="4" rx="2" fill={`${ink}0.06)`} />
        {/* Label */}
        <line x1="310" y1="257" x2="340" y2="257" stroke={`${ink}0.12)`} strokeWidth="0.8" />
        <text x="345" y="260" fontSize="8" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500">Base plate</text>
      </motion.g>

      {/* ── MAGAZINE / STAPLE CHANNEL ── */}
      <motion.g {...float(0.5, 3)}>
        <rect x="130" y="196" width="140" height="28" rx="4" fill="var(--bg-card)" stroke={`${ink}0.15)`} strokeWidth="1.5" />
        {/* Staples inside */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x={140 + i * 15} y="204" width="10" height="12" rx="1" fill={`${ink}0.06)`} stroke={`${ink}0.08)`} strokeWidth="0.5" />
        ))}
        {/* Label */}
        <line x1="68" y1="210" x2="125" y2="210" stroke={`${ink}0.12)`} strokeWidth="0.8" />
        <text x="63" y="213" fontSize="8" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500" textAnchor="end">Magazine</text>
      </motion.g>

      {/* ── SPRING ── */}
      <motion.g {...float(1.0, 5)}>
        <path
          d="M190 148 C185 154 210 154 205 160 C200 166 225 166 220 172 C215 178 240 178 235 184"
          stroke="var(--amber)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Label */}
        <line x1="240" y1="166" x2="340" y2="166" stroke={`${ink}0.12)`} strokeWidth="0.8" />
        <text x="345" y="169" fontSize="8" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500">Spring</text>
      </motion.g>

      {/* ── ARM / TOP JAW ── */}
      <motion.g {...float(1.5, 6)}>
        <path
          d="M120 120 L120 108 C120 100 130 94 145 94 L290 94 C300 94 306 100 306 108 L306 120 L286 120 C286 112 278 108 266 108 L155 108 C143 108 135 112 135 120 Z"
          fill="var(--amber)"
          opacity="0.15"
          stroke="var(--amber)"
          strokeWidth="1.2"
        />
        {/* Striker plate */}
        <rect x="185" y="114" width="30" height="6" rx="2" fill="var(--amber)" opacity="0.3" />
        {/* Label */}
        <line x1="68" y1="107" x2="115" y2="107" stroke={`${ink}0.12)`} strokeWidth="0.8" />
        <text x="63" y="110" fontSize="8" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500" textAnchor="end">Arm</text>
      </motion.g>

      {/* ── HINGE PIN ── */}
      <motion.g {...float(0.8, 4)}>
        <circle cx="120" cy="180" r="6" fill="var(--bg-card)" stroke={`${ink}0.2)`} strokeWidth="1.5" />
        <circle cx="120" cy="180" r="2" fill={`${ink}0.15)`} />
        {/* Label */}
        <line x1="68" y1="180" x2="112" y2="180" stroke={`${ink}0.12)`} strokeWidth="0.8" />
        <text x="63" y="183" fontSize="8" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500" textAnchor="end">Hinge</text>
      </motion.g>

      {/* ── SINGLE STAPLE (ejecting) ── */}
      <motion.g {...float(2.0, 3)}>
        <path
          d="M192 58 L192 74 L195 78 L198 74 L198 58"
          stroke="var(--amber)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Glow */}
        <circle cx="195" cy="68" r="8" fill="var(--amber)" opacity="0.06" />
        {/* Label */}
        <line x1="205" y1="68" x2="340" y2="68" stroke={`${ink}0.12)`} strokeWidth="0.8" />
        <text x="345" y="71" fontSize="8" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500">Staple</text>
      </motion.g>

      {/* ── Title ── */}
      <text x="200" y="306" textAnchor="middle" fontSize="9" fill={`${ink}0.2)`} fontFamily={f} fontWeight="600" letterSpacing="0.1em">
        ANATOMY OF A STAPLER
      </text>
    </svg>
  );
}
