"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * StaplerDiagram — Large 3D isometric exploded stapler.
 * Labels match knowledge base: Body=Platform, Arm=Consultant, Spring=AI Engine,
 * Staple Strip=Product Stack, Slot=Deliverable, Anvil=Client's Core Business.
 *
 * Designed for dark #111827 background.
 */

export default function StaplerDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const enter = (i: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  });

  const float = (delay: number, y: number = 3) => ({
    animate: inView ? { y: [-y, y, -y] } : {},
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 1.5 },
  });

  /* ── Palette for dark #111827 background ── */
  const yellow = "#F5C400";           // stapler body, callout dots
  const yellowDim = "rgba(245,196,0,0.35)"; // yellow glow / accent fills
  const armBlue = "#3B82F6";          // arm (consultant) — blue reads well on dark
  const armBlueDim = "rgba(59,130,246,0.25)";
  const metalLight = "#6B7280";       // lighter mechanical parts
  const metalMid = "#4B5563";         // base, magazine sides
  const strokeLine = "#6B7280";       // callout connecting lines
  const strokeOutline = "#9CA3AF";    // element outlines
  const textLabel = "#FFFFFF";        // label headings
  const textDim = "#D1D5DB";          // label descriptions
  const innerDetail = "rgba(255,255,255,0.08)"; // subtle inner rectangles

  return (
    <div ref={ref} className="relative w-full" style={{ maxWidth: 720, margin: "0 auto" }}>
      <svg viewBox="0 0 720 520" fill="none" className="w-full h-auto" style={{ overflow: "visible" }}>
        <defs>
          <filter id="sd" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.35)" />
          </filter>
          <filter id="sd-yellow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="rgba(245,196,0,0.3)" />
          </filter>
          <filter id="sd-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="rgba(59,130,246,0.25)" />
          </filter>
          <linearGradient id="arm-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={armBlue} stopOpacity="0.5" />
            <stop offset="100%" stopColor={armBlue} stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="base-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* STAPLE — The Deliverable (yellow U-shape) */}
        <motion.g {...enter(0)} {...float(0, 4)}>
          <path
            d="M342 62 L342 100 Q342 108 346 112 L350 116 Q354 120 358 120 L362 120 Q366 120 370 116 L374 112 Q378 108 378 100 L378 62"
            stroke={yellow}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#sd-yellow)"
          />
          <circle cx="360" cy="90" r="22" fill={yellowDim} />
          {/* Callout line → right */}
          <line x1="385" y1="88" x2="510" y2="88" stroke={strokeLine} strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="510" cy="88" r="4" fill={yellow} />
          <text x="520" y="84" fontSize="13" fill={textLabel} fontFamily="'DM Sans', sans-serif" fontWeight="700" letterSpacing="-0.01em">The Deliverable</text>
          <text x="520" y="100" fontSize="10" fill={textDim} fontFamily="'DM Sans', sans-serif" fontWeight="400">Live website, WhatsApp pipeline, Maps ranking</text>
        </motion.g>

        {/* ARM — The Consultant (blue, reads well on dark) */}
        <motion.g {...enter(1)} {...float(0.6, 5)}>
          <path
            d="M195 140 L195 126 C195 114 210 106 232 106 L508 106 C524 106 534 114 534 126 L534 140 Z"
            fill="url(#arm-grad)"
            stroke={armBlue}
            strokeWidth="1.8"
            filter="url(#sd-blue)"
          />
          <path
            d="M195 140 L195 152 C195 157 200 160 210 160 L520 160 C530 160 534 157 534 152 L534 140 Z"
            fill={armBlue}
            opacity="0.2"
            stroke={armBlue}
            strokeWidth="1"
          />
          <rect x="335" y="148" width="50" height="10" rx="3" fill={armBlue} opacity="0.5" />
          <line x1="240" y1="120" x2="490" y2="120" stroke={armBlue} strokeWidth="0.5" opacity="0.2" />
          <line x1="240" y1="130" x2="490" y2="130" stroke={armBlue} strokeWidth="0.5" opacity="0.15" />
          {/* Callout line → left */}
          <line x1="190" y1="133" x2="90" y2="133" stroke={strokeLine} strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="90" cy="133" r="4" fill={yellow} />
          <text x="80" y="128" fontSize="13" fill={textLabel} fontFamily="'DM Sans', sans-serif" fontWeight="700" textAnchor="end" letterSpacing="-0.01em">The Consultant</text>
          <text x="80" y="144" fontSize="10" fill={textDim} fontFamily="'DM Sans', sans-serif" fontWeight="400" textAnchor="end">Strategic intelligence &amp; advisory</text>
        </motion.g>

        {/* SPRING — AI Diagnostic Engine (yellow coil) */}
        <motion.g {...enter(2)} {...float(1.2, 4)}>
          <path
            d="M310 186 C300 196 340 196 330 208 C320 220 360 220 350 232 C340 244 380 244 370 256"
            stroke={yellow}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
            filter="url(#sd-yellow)"
          />
          <path
            d="M313 188 C303 198 343 198 333 210 C323 222 363 222 353 234 C343 246 383 246 373 258"
            stroke={yellowDim}
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Callout line → right */}
          <line x1="378" y1="220" x2="510" y2="220" stroke={strokeLine} strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="510" cy="220" r="4" fill={yellow} />
          <text x="520" y="216" fontSize="13" fill={textLabel} fontFamily="'DM Sans', sans-serif" fontWeight="700" letterSpacing="-0.01em">AI Engine</text>
          <text x="520" y="232" fontSize="10" fill={textDim} fontFamily="'DM Sans', sans-serif" fontWeight="400">30-min intelligence dashboard</text>
        </motion.g>

        {/* HINGE — The Platform (yellow dot) */}
        <motion.g {...enter(3)} {...float(0.3, 3)}>
          <circle cx="200" cy="270" r="14" fill={yellow} stroke={strokeOutline} strokeWidth="1.5" filter="url(#sd-yellow)" />
          <circle cx="200" cy="270" r="5" fill="#111827" />
          {/* Callout line → left */}
          <line x1="182" y1="270" x2="90" y2="270" stroke={strokeLine} strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="90" cy="270" r="4" fill={yellow} />
          <text x="80" y="265" fontSize="13" fill={textLabel} fontFamily="'DM Sans', sans-serif" fontWeight="700" textAnchor="end" letterSpacing="-0.01em">The Platform</text>
          <text x="80" y="281" fontSize="10" fill={textDim} fontFamily="'DM Sans', sans-serif" fontWeight="400" textAnchor="end">Intake, CRM, portal, dashboard</text>
        </motion.g>

        {/* MAGAZINE — Product Stack (metallic gray box) */}
        <motion.g {...enter(4)} {...float(0.9, 3)}>
          <rect x="215" y="296" width="290" height="42" rx="6" fill={metalMid} stroke={strokeOutline} strokeWidth="1.2" filter="url(#sd)" />
          <path
            d="M215 338 L215 348 C215 352 219 354 225 354 L499 354 C505 354 509 352 509 348 L509 338"
            fill="url(#base-grad)"
            stroke={metalLight}
            strokeWidth="0.8"
          />
          {/* Staple slots — visible on gray background */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i}>
              <rect x={228 + i * 21} y="306" width="15" height="22" rx="2" fill={innerDetail} stroke={metalLight} strokeWidth="0.6" />
              <path
                d={`M${231 + i * 21} 312 L${231 + i * 21} 320 Q${231 + i * 21} 322 ${233 + i * 21} 322 L${237 + i * 21} 322 Q${239 + i * 21} 322 ${239 + i * 21} 320 L${239 + i * 21} 312`}
                stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="none"
              />
            </g>
          ))}
          {/* Callout line → left */}
          <line x1="210" y1="320" x2="90" y2="320" stroke={strokeLine} strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="90" cy="320" r="4" fill={yellow} />
          <text x="80" y="315" fontSize="13" fill={textLabel} fontFamily="'DM Sans', sans-serif" fontWeight="700" textAnchor="end" letterSpacing="-0.01em">Product Stack</text>
          <text x="80" y="331" fontSize="10" fill={textDim} fontFamily="'DM Sans', sans-serif" fontWeight="400" textAnchor="end">Web, SEO, automation, chatbots, ads</text>
        </motion.g>

        {/* BASE — Your Business / Anvil (wide metallic plate) */}
        <motion.g {...enter(5)} {...float(0, 2)}>
          <path d="M180 388 L180 378 C180 372 192 368 210 368 L510 368 C528 368 540 372 540 378 L540 388 Z" fill={metalMid} stroke={strokeOutline} strokeWidth="1.2" filter="url(#sd)" />
          <path d="M180 388 L180 410 C180 418 192 424 210 424 L510 424 C528 424 540 418 540 410 L540 388 Z" fill="url(#base-grad)" stroke={metalLight} strokeWidth="0.8" />
          <line x1="210" y1="398" x2="510" y2="398" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="210" y1="408" x2="510" y2="408" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <rect x="330" y="374" width="60" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
          <rect x="200" y="420" width="20" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
          <rect x="500" y="420" width="20" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
          {/* Callout line → right */}
          <line x1="545" y1="396" x2="600" y2="396" stroke={strokeLine} strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="600" cy="396" r="4" fill={yellow} />
          <text x="610" y="392" fontSize="13" fill={textLabel} fontFamily="'DM Sans', sans-serif" fontWeight="700" letterSpacing="-0.01em">Your Business</text>
          <text x="610" y="408" fontSize="10" fill={textDim} fontFamily="'DM Sans', sans-serif" fontWeight="400">The foundation we build on</text>
        </motion.g>

        {/* TITLE */}
        <motion.g {...enter(6)}>
          <text x="360" y="468" textAnchor="middle" fontSize="10.5" fill="#9CA3AF" fontFamily="'DM Sans', sans-serif" fontWeight="600" letterSpacing="0.14em">
            ANATOMY OF STAPLERLABS
          </text>
          <line x1="240" y1="478" x2="480" y2="478" stroke="#4B5563" strokeWidth="1" />
          <text x="360" y="496" textAnchor="middle" fontSize="11" fill="#9CA3AF" fontFamily="'DM Sans', sans-serif" fontWeight="400" fontStyle="italic">
            Every part working together. Nothing wasted.
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
