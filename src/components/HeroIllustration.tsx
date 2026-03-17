"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 400"
      fill="none"
      className="w-full h-auto lg:max-w-[520px] max-h-[260px] lg:max-h-none"
    >
      {/* ── OFFLINE SIDE (left) ── */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Storefront — muted, dusty */}
        <rect x="30" y="120" width="140" height="120" rx="4" stroke="rgba(var(--ink-rgb),0.18)" strokeWidth="2" fill="none" />
        {/* Awning */}
        <path d="M24 120 L100 100 L176 120" stroke="rgba(var(--ink-rgb),0.18)" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Door — closed */}
        <rect x="82" y="180" width="36" height="60" rx="2" stroke="rgba(var(--ink-rgb),0.18)" strokeWidth="1.5" fill="none" />
        <circle cx="112" cy="210" r="2" fill="rgba(var(--ink-rgb),0.14)" />

        {/* Window with "Closed Mon" sign */}
        <rect x="42" y="132" width="32" height="34" rx="2" stroke="rgba(var(--ink-rgb),0.18)" strokeWidth="1.5" fill="none" />
        <rect x="46" y="140" width="24" height="14" rx="1" fill="rgba(var(--ink-rgb),0.04)" />
        <text x="50" y="149" fontSize="5.5" fill="rgba(var(--ink-rgb),0.28)" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">CLOSED</text>
        <text x="53" y="157" fontSize="4.5" fill="rgba(var(--ink-rgb),0.18)" fontFamily="var(--font-inter), Inter, sans-serif">Mon</text>

        {/* Phone with 3 missed call indicators */}
        <rect x="140" y="130" width="24" height="42" rx="5" stroke="rgba(var(--ink-rgb),0.18)" strokeWidth="1.5" fill="none" />
        <rect x="144" y="136" width="16" height="28" rx="1" fill="rgba(var(--ink-rgb),0.03)" />
        {/* Red missed call dots */}
        <circle cx="149" cy="143" r="2.5" fill="#D44444" opacity="0.55" />
        <circle cx="156" cy="143" r="2.5" fill="#D44444" opacity="0.45" />
        <circle cx="149" cy="151" r="2.5" fill="#D44444" opacity="0.35" />
        {/* Missed label */}
        <text x="143" y="162" fontSize="3.5" fill="rgba(var(--ink-rgb),0.15)" fontFamily="var(--font-inter), Inter, sans-serif">3 missed</text>

        {/* Paper ledger below storefront */}
        <rect x="42" y="258" width="68" height="44" rx="2" fill="rgba(var(--ink-rgb),0.03)" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1" />
        {/* Ledger lines */}
        <line x1="50" y1="268" x2="102" y2="268" stroke="rgba(var(--ink-rgb),0.1)" strokeWidth="0.8" />
        <line x1="50" y1="276" x2="98" y2="276" stroke="rgba(var(--ink-rgb),0.08)" strokeWidth="0.8" />
        <line x1="50" y1="284" x2="90" y2="284" stroke="rgba(var(--ink-rgb),0.06)" strokeWidth="0.8" />
        <line x1="50" y1="292" x2="84" y2="292" stroke="rgba(var(--ink-rgb),0.04)" strokeWidth="0.8" />
        {/* Pen */}
        <line x1="115" y1="256" x2="108" y2="300" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1" strokeLinecap="round" />
      </motion.g>

      {/* ── TRANSFORMATION PATH (center) ── */}
      <motion.path
        d="M 185 200 C 230 160, 290 240, 335 200"
        stroke="var(--amber)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
      />

      {/* Pill labels along the path */}
      {[
        { x: 218, y: 178, label: "Website", delay: 1.0 },
        { x: 260, y: 206, label: "Google", delay: 1.4 },
        { x: 302, y: 186, label: "WhatsApp", delay: 1.8 },
      ].map((node, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect
            x={node.x - 24}
            y={node.y - 10}
            width="48"
            height="20"
            rx="10"
            fill="var(--cream)"
            stroke="var(--amber)"
            strokeWidth="1.2"
          />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fontSize="7.5"
            fontFamily="var(--font-inter), Inter, sans-serif"
            fontWeight="500"
            fill="var(--amber)"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* ── ONLINE SIDE (right) — alive, warm ── */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        {/* Storefront — bold, confident */}
        <rect x="350" y="120" width="140" height="120" rx="4" stroke="rgba(var(--ink-rgb),0.7)" strokeWidth="2" fill="none" />
        <path d="M344 120 L420 100 L496 120" stroke="rgba(var(--ink-rgb),0.7)" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Door — open */}
        <rect x="402" y="180" width="36" height="60" rx="2" stroke="rgba(var(--ink-rgb),0.7)" strokeWidth="1.5" fill="none" />
        <circle cx="432" cy="210" r="2" fill="rgba(var(--ink-rgb),0.5)" />

        {/* Window — glowing screen */}
        <rect x="362" y="132" width="32" height="34" rx="2" stroke="rgba(var(--ink-rgb),0.7)" strokeWidth="1.5" fill="none" />
        <rect x="365" y="135" width="26" height="28" rx="1" fill="var(--yellow)" opacity="0.15" />
        {/* Screen glow */}
        <rect x="367" y="138" width="22" height="4" rx="1" fill="var(--amber)" opacity="0.25" />
        <rect x="367" y="145" width="16" height="3" rx="1" fill="var(--amber)" opacity="0.15" />
        <rect x="367" y="151" width="20" height="3" rx="1" fill="var(--amber)" opacity="0.12" />
        <text x="370" y="162" fontSize="4.5" fill="rgba(var(--ink-rgb),0.5)" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600">OPEN</text>

        {/* WhatsApp green dot on storefront */}
        <circle cx="498" cy="118" r="4" fill="#25D366" opacity="0.8" />

        {/* Phone with WhatsApp chat */}
        <rect x="460" y="125" width="28" height="52" rx="6" stroke="rgba(var(--ink-rgb),0.7)" strokeWidth="1.5" fill="none" />
        <rect x="464" y="132" width="20" height="36" rx="2" fill="rgba(var(--ink-rgb),0.03)" />
        {/* Chat bubbles */}
        <rect x="466" y="136" width="14" height="7" rx="3.5" fill="#DCF8C6" />
        <rect x="470" y="146" width="12" height="7" rx="3.5" fill="var(--white)" stroke="rgba(var(--ink-rgb),0.08)" strokeWidth="0.5" />
        <rect x="466" y="156" width="16" height="7" rx="3.5" fill="#DCF8C6" />
        {/* Green pulse dot */}
        <motion.circle
          cx="474"
          cy="172"
          r="2.5"
          fill="#25D366"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Google Maps pin — floating above building with ping */}
        <motion.g
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5, type: "spring", stiffness: 180 }}
        >
          <path
            d="M426 96 C426 88 419 82 412 82 C405 82 398 88 398 96 C398 104 412 118 412 118 C412 118 426 104 426 96Z"
            fill="#EA4335"
            opacity="0.85"
          />
          <circle cx="412" cy="95" r="4" fill="var(--white)" opacity="0.9" />
          {/* Ping animation */}
          <motion.circle
            cx="412"
            cy="95"
            r="8"
            fill="none"
            stroke="#EA4335"
            strokeWidth="1"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.g>

        {/* Bar chart — bookings growing */}
        {[
          { x: 358, h: 12, delay: 2.2 },
          { x: 370, h: 20, delay: 2.3 },
          { x: 382, h: 16, delay: 2.4 },
          { x: 394, h: 28, delay: 2.5 },
          { x: 406, h: 36, delay: 2.6 },
        ].map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x}
            y={308 - bar.h}
            width="9"
            height={bar.h}
            rx="2"
            fill="var(--amber)"
            opacity="0.35"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: bar.delay, duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: `${bar.x + 4.5}px 308px` }}
          />
        ))}
        <line x1="356" y1="308" x2="420" y2="308" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="0.8" />
        {/* Stars below chart */}
        {[0, 1, 2, 3, 4].map((s) => (
          <text key={s} x={358 + s * 9} y="324" fontSize="7" fill="var(--amber)" opacity="0.6">★</text>
        ))}
      </motion.g>
    </svg>
  );
}
