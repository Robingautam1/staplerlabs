"use client";

import { motion } from "framer-motion";

const ink = "rgba(var(--ink-rgb),";
const f = "var(--font-inter), Inter, sans-serif";

/**
 * StaplerDiagram — Large isometric 3D exploded view.
 * Maps components to StaplerLabs Services.
 */
export default function StaplerDiagram() {
  const float = (delay: number, y: number = 8) => ({
    animate: { y: [-y, y, -y] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay },
  });

  // Base isometric transform for the whole SVG group
  // Angle for typical isometric is rotateX(60deg) rotateZ(-45deg),
  // but we can just draw isometric paths manually for perfect crispness and custom 3D depth.

  return (
    <div className="w-full relative">
      <svg viewBox="0 0 1000 700" fill="none" className="w-full h-auto" style={{ overflow: "visible" }}>

        <defs>
          {/* Gradients to simulate 3D lighting without hardcoded colors */}
          <linearGradient id="amberToYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--yellow)" />
            <stop offset="100%" stopColor="var(--amber)" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--bg-card)" />
            <stop offset="100%" stopColor="var(--bg-deep)" />
          </linearGradient>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`${ink}0.08)`} />
            <stop offset="100%" stopColor={`${ink}0.2)`} />
          </linearGradient>
          <filter id="partGlow">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="var(--amber)" floodOpacity="0.15" />
          </filter>
          <filter id="baseShadow">
            <feDropShadow dx="0" dy="25" stdDeviation="25" floodColor="var(--ink)" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* ── BASE (The Foundation - Web Development) ── */}
        <motion.g {...float(0, 3)} filter="url(#baseShadow)">
          {/* Base bottom/shadow */}
          <path d="M 270 600 L 590 460 L 680 500 L 360 640 Z" fill={`${ink}0.03)`} />

          {/* Base Side Face */}
          <path d="M 270 580 L 360 620 L 360 640 L 270 600 Z" fill="var(--bg-deep)" stroke={`${ink}0.1)`} strokeWidth="1" />
          {/* Base Right Face */}
          <path d="M 360 620 L 680 480 L 680 500 L 360 640 Z" fill={`${ink}0.05)`} stroke={`${ink}0.1)`} strokeWidth="1" />
          {/* Base Top Face */}
          <path d="M 270 580 L 590 440 L 680 480 L 360 620 Z" fill="url(#baseGrad)" stroke={`${ink}0.15)`} strokeWidth="1.5" />

          {/* Anvil Plate */}
          <path d="M 520 480 L 570 458 L 590 467 L 540 489 Z" fill="var(--bg-card)" stroke={`${ink}0.2)`} strokeWidth="1" />
          {/* Anvil Grooves */}
          <path d="M 545 470 L 555 466 M 555 474 L 565 470" stroke={`${ink}0.3)`} strokeWidth="1.5" strokeLinecap="round" />

          {/* Label Connector */}
          <path d="M 390 575 L 390 620 L 220 620" stroke={`${ink}0.2)`} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="220" cy="620" r="4" fill="var(--amber)" />

          <g transform="translate(200, 620)">
            <text x="-15" y="-5" textAnchor="end" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">01. The Foundation</text>
            <text x="-15" y="15" textAnchor="end" fontSize="13" fontFamily={f} fill={`${ink}0.6)`}>Web Development & Infrastructure</text>
            <text x="-15" y="35" textAnchor="end" fontSize="12" fontFamily={f} fill={`${ink}0.4)`}>The solid base where everything begins.</text>
          </g>
        </motion.g>

        {/* ── MAGAZINE TRAY (The Engine - Business Automation) ── */}
        <motion.g {...float(1, 6)}>
          {/* Top of Base / Pivot Block */}
          <path d="M 300 520 L 340 502 L 360 511 L 320 529 Z" fill="var(--bg-card)" stroke={`${ink}0.2)`} strokeWidth="1.5" />
          <path d="M 320 529 L 360 511 L 360 540 L 320 558 Z" fill={`${ink}0.05)`} stroke={`${ink}0.2)`} strokeWidth="1.5" />
          <path d="M 300 520 L 320 529 L 320 558 L 300 549 Z" fill="var(--bg-deep)" stroke={`${ink}0.2)`} strokeWidth="1.5" />

          {/* Tray Side */}
          <path d="M 330 450 L 610 328 L 610 350 L 330 472 Z" fill="url(#metalGrad)" stroke={`${ink}0.3)`} strokeWidth="1" />
          {/* Tray Bottom */}
          <path d="M 330 472 L 610 350 L 640 363 L 360 485 Z" fill={`${ink}0.05)`} stroke={`${ink}0.2)`} strokeWidth="1" />
          {/* Tray Inner Wall */}
          <path d="M 345 450 L 625 328 L 625 340 L 345 462 Z" fill="var(--bg-card)" stroke={`${ink}0.2)`} strokeWidth="1" />

          {/* Rows of Staples (Automation Tasks) */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const x = 380 + i * 25;
            const y = 435 - i * 11;
            return (
              <g key={i}>
                <path d={`M ${x} ${y} L ${x + 12} ${y - 5.5} L ${x + 12} ${y - 1} L ${x} ${y + 4.5} Z`} fill="var(--bg-card)" stroke={`${ink}0.3)`} strokeWidth="1" />
                <path d={`M ${x} ${y} L ${x + 20} ${y + 9} L ${x + 32} ${y + 3.5} L ${x + 12} ${y - 5.5} Z`} fill={`${ink}0.05)`} stroke={`${ink}0.3)`} strokeWidth="1" />
              </g>
            );
          })}

          {/* Label Connector */}
          <path d="M 520 380 L 520 320 L 710 320" stroke={`${ink}0.2)`} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="710" cy="320" r="4" fill="var(--amber)" />

          <g transform="translate(730, 320)">
            <text x="0" y="-5" textAnchor="start" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">02. The Engine</text>
            <text x="0" y="15" textAnchor="start" fontSize="13" fontFamily={f} fill={`${ink}0.6)`}>Business Automation</text>
            <text x="0" y="35" textAnchor="start" fontSize="12" fontFamily={f} fill={`${ink}0.4)`}>The internal mechanics doing the heavy lifting.</text>
          </g>
        </motion.g>

        {/* ── SPRING (The Tension - AI Bot) ── */}
        <motion.g {...float(2, 5)}>
          <path d="M 340 380 C 370 330, 480 320, 520 280 C 560 240, 670 230, 700 180"
            fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" opacity="0.6" style={{ filter: "drop-shadow(0px 8px 6px rgba(198,144,10,0.3))" }} />

          {/* Label Connector */}
          <path d="M 460 310 L 460 210 L 220 210" stroke={`${ink}0.2)`} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="220" cy="210" r="4" fill="var(--amber)" />

          <g transform="translate(200, 210)">
            <text x="-15" y="-5" textAnchor="end" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">03. The Coil</text>
            <text x="-15" y="15" textAnchor="end" fontSize="13" fontFamily={f} fill={`${ink}0.6)`}>AI Reception Bot</text>
            <text x="-15" y="35" textAnchor="end" fontSize="12" fontFamily={f} fill={`${ink}0.4)`}>Stores energy, always active, ready to trigger.</text>
          </g>
        </motion.g>

        {/* ── THE ARM (The Lever - SEO & Growth / Advertising) ── */}
        <motion.g {...float(3, 9)} filter="url(#partGlow)">
          {/* Arm Side */}
          <path d="M 330 250 L 690 93 L 690 120 L 330 277 Z" fill="var(--amber)" opacity="0.8" />
          {/* Arm Bottom/Inner */}
          <path d="M 330 277 L 690 120 L 730 137 L 370 294 Z" fill="var(--amber)" opacity="0.5" />
          {/* Arm Top Face */}
          <path d="M 330 250 L 690 93 L 730 110 L 370 267 Z" fill="url(#amberToYellow)" stroke="var(--bg-card)" strokeWidth="1.5" />

          {/* Branding on Arm */}
          <g transform="translate(480, 195) rotate(-23) skewX(20)">
            <text x="0" y="0" fontSize="14" fontWeight="800" fontFamily="var(--font-display)" fill="var(--bg-card)" opacity="0.8" letterSpacing="2">STAPLERLABS</text>
          </g>

          {/* Striker Plate inside arm */}
          <path d="M 640 148 L 680 130 L 690 135 L 650 153 Z" fill="var(--bg-card)" stroke={`${ink}0.1)`} strokeWidth="1" opacity="0.6" />

          {/* Label Connector */}
          <path d="M 520 180 L 520 110 L 710 110" stroke={`${ink}0.2)`} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="710" cy="110" r="4" fill="var(--yellow)" />

          <g transform="translate(730, 110)">
            <text x="0" y="-5" textAnchor="start" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">04. The Lever</text>
            <text x="0" y="15" textAnchor="start" fontSize="13" fontFamily={f} fill={`${ink}0.6)`}>SEO, Content & Ads</text>
            <text x="0" y="35" textAnchor="start" fontSize="12" fontFamily={f} fill={`${ink}0.4)`}>Multiplier of force. Pushes your business downward to make an impact.</text>
          </g>
        </motion.g>

        {/* ── THE SINGLE STAPLE (The Result) ── */}
        <motion.g {...float(4, 3)}>
          <path d="M 630 220 L 670 202 M 630 220 L 630 240 M 670 202 L 670 222" fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Light glow on staple */}
          <path d="M 630 220 L 670 202 M 630 220 L 630 240 M 670 202 L 670 222" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />

          <path d="M 650 216 L 680 230 L 780 230" stroke={`${ink}0.2)`} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="780" cy="230" r="4" fill="var(--yellow)" />

          <g transform="translate(800, 230)">
            <text x="0" y="-5" textAnchor="start" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">05. The Output</text>
            <text x="0" y="15" textAnchor="start" fontSize="13" fontFamily={f} fill={`${ink}0.6)`}>Customers & Growth</text>
            <text x="0" y="35" textAnchor="start" fontSize="12" fontFamily={f} fill={`${ink}0.4)`}>The sharp edge that pierces through the noise.</text>
          </g>
        </motion.g>

        {/* ── HINGE / PIN (The Connection) ── */}
        <motion.g {...float(0.5, 2)}>
          <ellipse cx="320" cy="380" rx="10" ry="18" fill="var(--bg-card)" stroke={`${ink}0.2)`} strokeWidth="2" transform="rotate(-23 320 380)" />
          <ellipse cx="320" cy="380" rx="4" ry="7" fill={`${ink}0.4)`} transform="rotate(-23 320 380)" />

          {/* Label Connector */}
          <path d="M 310 390 L 220 440 L 150 440" stroke={`${ink}0.2)`} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="150" cy="440" r="4" fill="var(--amber)" />

          <g transform="translate(130, 440)">
            <text x="-15" y="-5" textAnchor="end" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">06. The Hinge</text>
            <text x="-15" y="15" textAnchor="end" fontSize="13" fontFamily={f} fill={`${ink}0.6)`}>Data & Analytics</text>
            <text x="-15" y="35" textAnchor="end" fontSize="12" fontFamily={f} fill={`${ink}0.4)`}>The pivot point connecting the strategy to the base.</text>
          </g>
        </motion.g>

      </svg>
    </div>
  );
}
