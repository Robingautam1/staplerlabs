"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ink = "rgba(var(--ink-rgb),";
const amber = "var(--amber)";
const font = "var(--font-inter), Inter, sans-serif";

/* ── Service 01: Websites — Browser with loading bar ── */
export function WebDevIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <svg ref={ref} viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Browser frame */}
      <rect x="10" y="10" width="260" height="180" rx="8" stroke={`${ink}0.12)`} strokeWidth="1.5" fill="var(--white)" />
      <rect x="10" y="10" width="260" height="28" rx="8" fill={`${ink}0.03)`} />
      <rect x="10" y="30" width="260" height="8" fill={`${ink}0.03)`} />
      <circle cx="26" cy="24" r="3.5" fill="#FF5F56" opacity="0.7" />
      <circle cx="38" cy="24" r="3.5" fill="#FFBD2E" opacity="0.7" />
      <circle cx="50" cy="24" r="3.5" fill="#27C93F" opacity="0.7" />
      <rect x="68" y="18" width="140" height="12" rx="3" fill={`${ink}0.04)`} />
      <text x="90" y="27" fontSize="6" fill={`${ink}0.3)`} fontFamily={font}>staplerlabs.com</text>

      {/* Loading progress bar */}
      <rect x="10" y="38" width="260" height="3" fill={`${ink}0.04)`} />
      <motion.rect
        x="10" y="38" width="260" height="3" fill={amber} opacity="0.7"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "10px 39px" }}
      />

      {/* Nav bar */}
      <rect x="24" y="52" width="232" height="8" rx="2" fill={`${ink}0.04)`} />
      <rect x="28" y="54" width="24" height="4" rx="1" fill={amber} opacity="0.3" />
      <rect x="198" y="54" width="14" height="4" rx="1" fill={`${ink}0.08)`} />
      <rect x="216" y="54" width="14" height="4" rx="1" fill={`${ink}0.08)`} />
      <rect x="234" y="54" width="18" height="4" rx="2" fill={amber} opacity="0.25" />

      {/* Hero block */}
      <motion.rect x="24" y="68" width="232" height="56" rx="4" fill={`${ink}0.03)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.4 }} />
      <motion.rect x="40" y="82" width="90" height="6" rx="2" fill={`${ink}0.1)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} />
      <motion.rect x="40" y="92" width="60" height="4" rx="1" fill={`${ink}0.06)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} />
      <motion.rect x="40" y="102" width="36" height="10" rx="3" fill={amber} opacity="0.2"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} />

      {/* Three content blocks */}
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 5 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 + i * 0.15 }}>
          <rect x={24 + i * 80} y="132" width="72" height="48" rx="4" fill={`${ink}0.03)`} />
          <rect x={30 + i * 80} y="140" width="40" height="4" rx="1" fill={`${ink}0.08)`} />
          <rect x={30 + i * 80} y="148" width="56" height="3" rx="1" fill={`${ink}0.05)`} />
          <rect x={30 + i * 80} y="154" width="48" height="3" rx="1" fill={`${ink}0.04)`} />
        </motion.g>
      ))}
    </svg>
  );
}

/* ── Service 02: Automation — Flow diagram with traveling dot ── */
export function AutomationIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {[
        { y: 20, label: "Invoice" },
        { y: 65, label: "Reminder" },
        { y: 110, label: "Payment" },
        { y: 155, label: "Review" },
      ].map((node, i) => (
        <g key={i}>
          <rect x="90" y={node.y} width="100" height="32" rx="8" fill="var(--white)" stroke={`${ink}0.1)`} strokeWidth="1.2" />
          <text x="140" y={node.y + 20} textAnchor="middle" fontSize="9" fontFamily={font} fontWeight="500" fill={`${ink}0.6)`}>{node.label}</text>
          {i < 3 && <line x1="140" y1={node.y + 32} x2="140" y2={node.y + 45} stroke={`${ink}0.12)`} strokeWidth="1.2" strokeDasharray="3 3" />}
          {i < 3 && <path d={`M136 ${node.y + 42} L140 ${node.y + 47} L144 ${node.y + 42}`} stroke={`${ink}0.12)`} strokeWidth="1" fill="none" />}
        </g>
      ))}
      <motion.circle cx="140" r="4" fill={amber} opacity="0.8"
        animate={{ cy: [36, 81, 126, 171, 36] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.25, 0.5, 0.75, 1] }}
      />
    </svg>
  );
}

/* ── Service 03: AI Reception Bot — Phone with chat ── */
export function ReceptionistIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      <rect x="80" y="8" width="120" height="184" rx="16" stroke={`${ink}0.15)`} strokeWidth="1.5" fill="var(--white)" />
      <rect x="88" y="28" width="104" height="144" rx="4" fill={`${ink}0.02)`} />
      <rect x="115" y="12" width="50" height="10" rx="5" fill={`${ink}0.06)`} />

      {/* WhatsApp header */}
      <rect x="88" y="28" width="104" height="20" rx="4" fill="#075E54" />
      <text x="100" y="42" fontSize="7" fontWeight="600" fill="#FFFFFF" fontFamily={font}>StaplerLabs</text>
      <circle cx="182" cy="38" r="3" fill="#25D366" />

      {/* User message */}
      <motion.g
        animate={{ opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.5, 0.85, 0.95] }}
      >
        <rect x="94" y="56" width="72" height="28" rx="8" fill="#DCF8C6" />
        <text x="100" y="68" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>I&apos;d like to book</text>
        <text x="100" y="78" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>for Thursday</text>
      </motion.g>

      {/* Bot reply */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.35, 0.85, 0.95] }}
      >
        <rect x="104" y="92" width="84" height="42" rx="8" fill="var(--white)" stroke={`${ink}0.08)`} strokeWidth="0.8" />
        <text x="110" y="106" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>Done! Booked for</text>
        <text x="110" y="116" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>Thu 3:30 PM.</text>
        <text x="110" y="128" fontSize="5" fill={`${ink}0.35)`} fontFamily={font}>Automated via StaplerLabs</text>
      </motion.g>
    </svg>
  );
}

/* ── Service 04: Offline to Online — Timeline ── */
export function OnboardingIllustration() {
  const milestones = [
    { x: 30, label: "Day 1" },
    { x: 110, label: "Day 7" },
    { x: 190, label: "Day 21" },
    { x: 260, label: "Day 30" },
  ];

  return (
    <svg viewBox="0 0 280 100" fill="none" className="w-full h-auto">
      <line x1="40" y1="50" x2="270" y2="50" stroke={`${ink}0.1)`} strokeWidth="1.5" />
      {milestones.map((m, i) => (
        <g key={i}>
          <motion.circle cx={m.x + 10} cy="50" r="10" fill="var(--white)" stroke={`${ink}0.12)`} strokeWidth="1.5"
            animate={{ fill: ["var(--white)", "var(--white)", amber, amber], stroke: [`${ink}0.12)`, `${ink}0.12)`, amber, amber] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, i * 0.22, i * 0.22 + 0.08, 1] }}
          />
          <text x={m.x + 10} y="74" textAnchor="middle" fontSize="7.5" fontFamily={font} fontWeight="500" fill={`${ink}0.45)`}>{m.label}</text>
        </g>
      ))}
      <motion.circle r="5" fill={amber} opacity="0.9" cy="50"
        animate={{ cx: [40, 120, 200, 270, 40] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.25, 0.55, 0.85, 1] }}
      />
    </svg>
  );
}

/* ── Compact timeline for bento card ── */
export function TimelineMini() {
  const milestones = [
    { x: 10, label: "Day 1" },
    { x: 70, label: "Day 7" },
    { x: 130, label: "Day 21" },
    { x: 190, label: "Day 30" },
  ];

  return (
    <svg viewBox="0 0 200 48" fill="none" className="w-full max-w-[200px] h-auto">
      <line x1="16" y1="18" x2="196" y2="18" stroke={`${ink}0.1)`} strokeWidth="1" />
      {milestones.map((m, i) => (
        <g key={i}>
          <motion.circle cx={m.x + 6} cy="18" r="6" fill="var(--white)" stroke={`${ink}0.12)`} strokeWidth="1"
            animate={{ fill: ["var(--white)", "var(--white)", amber, amber], stroke: [`${ink}0.12)`, `${ink}0.12)`, amber, amber] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, i * 0.22, i * 0.22 + 0.08, 1] }}
          />
          <text x={m.x + 6} y="38" textAnchor="middle" fontSize="5.5" fontFamily={font} fontWeight="500" fill={`${ink}0.4)`}>{m.label}</text>
        </g>
      ))}
      <motion.circle r="3.5" fill={amber} opacity="0.9" cy="18"
        animate={{ cx: [16, 76, 136, 196, 16] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.25, 0.55, 0.85, 1] }}
      />
    </svg>
  );
}

/* ── Service 05: SEO — Search result + line graph ── */
export function SEOIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <svg ref={ref} viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      <rect x="20" y="12" width="240" height="76" rx="6" fill="var(--white)" stroke={`${ink}0.06)`} strokeWidth="1" />
      <text x="30" y="30" fontSize="7" fill="#188038" fontFamily={font}>staplerlabs.com/your-business</text>
      <text x="30" y="44" fontSize="9" fill="#1A0DAB" fontFamily={font} fontWeight="600">Your Business — Professional Services</text>
      <text x="30" y="56" fontSize="6.5" fill={`${ink}0.5)`} fontFamily={font}>Trusted local business serving customers for over 15 years.</text>
      <text x="30" y="66" fontSize="6.5" fill={`${ink}0.5)`} fontFamily={font}>Book online, visit our office, or call us today.</text>
      {[0, 1, 2, 3, 4].map((s) => (
        <text key={s} x={30 + s * 10} y="80" fontSize="8" fill="#FBBC04">★</text>
      ))}
      <text x="82" y="80" fontSize="6.5" fill={`${ink}0.4)`} fontFamily={font}>4.9 (87 reviews)</text>

      <text x="30" y="108" fontSize="7" fontFamily={font} fontWeight="500" fill={`${ink}0.45)`}>Organic Traffic — 6 weeks</text>
      {[120, 140, 160, 180].map((y) => (
        <line key={y} x1="30" y1={y} x2="250" y2={y} stroke={`${ink}0.04)`} strokeWidth="0.5" />
      ))}
      {["W1", "W2", "W3", "W4", "W5", "W6"].map((w, i) => (
        <text key={i} x={42 + i * 38} y="194" fontSize="6" fill={`${ink}0.3)`} fontFamily={font} textAnchor="middle">{w}</text>
      ))}
      <motion.path d="M42 178 L80 172 L118 164 L156 152 L194 136 L232 120"
        stroke={amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
      {[{ x: 42, y: 178 }, { x: 80, y: 172 }, { x: 118, y: 164 }, { x: 156, y: 152 }, { x: 194, y: 136 }, { x: 232, y: 120 }].map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r="3" fill={amber}
          initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 0.7, scale: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
        />
      ))}
    </svg>
  );
}

/* ── Service 06: Ads — A/B test cards ── */
export function AdsIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      <rect x="16" y="20" width="110" height="130" rx="8" fill="var(--white)" stroke={`${ink}0.1)`} strokeWidth="1.2" />
      <rect x="24" y="28" width="94" height="50" rx="4" fill={`${ink}0.04)`} />
      <rect x="30" y="36" width="50" height="5" rx="1.5" fill={`${ink}0.1)`} />
      <rect x="30" y="46" width="70" height="4" rx="1" fill={`${ink}0.06)`} />
      <rect x="30" y="54" width="60" height="4" rx="1" fill={`${ink}0.04)`} />
      <rect x="30" y="64" width="30" height="8" rx="3" fill={amber} opacity="0.2" />
      <text x="24" y="94" fontSize="7" fontFamily={font} fontWeight="500" fill={`${ink}0.35)`}>Ad Variant A</text>
      <text x="24" y="108" fontSize="8" fontFamily={font} fontWeight="500" fill={`${ink}0.5)`}>CTR: 1.8%</text>
      <text x="70" y="140" textAnchor="middle" fontSize="8" fontFamily={font} fontWeight="600" fill={`${ink}0.3)`}>A</text>

      <text x="140" y="88" textAnchor="middle" fontSize="14" fill={`${ink}0.2)`}>⇄</text>
      <text x="140" y="102" textAnchor="middle" fontSize="6" fontFamily={font} fill={`${ink}0.3)`}>A/B Test</text>

      <motion.rect x="154" y="20" width="110" height="130" rx="8" fill="var(--white)" stroke={amber} strokeWidth="1.5"
        animate={{ strokeOpacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="162" y="28" width="94" height="50" rx="4" fill={`${ink}0.04)`} />
      <rect x="168" y="36" width="55" height="5" rx="1.5" fill={`${ink}0.1)`} />
      <rect x="168" y="46" width="72" height="4" rx="1" fill={`${ink}0.06)`} />
      <rect x="168" y="54" width="64" height="4" rx="1" fill={`${ink}0.04)`} />
      <rect x="168" y="64" width="34" height="8" rx="3" fill={amber} opacity="0.3" />
      <text x="162" y="94" fontSize="7" fontFamily={font} fontWeight="500" fill={`${ink}0.35)`}>Ad Variant B</text>
      <text x="162" y="108" fontSize="8" fontFamily={font} fontWeight="600" fill={amber}>CTR: 4.2%</text>
      <rect x="218" y="114" width="40" height="14" rx="7" fill={amber} opacity="0.12" />
      <text x="238" y="124" textAnchor="middle" fontSize="6" fontFamily={font} fontWeight="600" fill={amber}>Winner</text>
      <text x="210" y="140" textAnchor="middle" fontSize="8" fontFamily={font} fontWeight="600" fill={`${ink}0.3)`}>B</text>

      <text x="140" y="172" textAnchor="middle" fontSize="7" fontFamily={font} fill={`${ink}0.3)`}>Continuous optimization, monthly</text>
    </svg>
  );
}
