"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ink = "rgba(var(--ink-rgb),";
const amber = "var(--amber)";
const font = "var(--font-inter), Inter, sans-serif";

/* ── Service 01: Websites — Browser with progressive loading ── */
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

      {/* Loading progress bar — fills left-to-right */}
      <rect x="10" y="38" width="260" height="3" fill={`${ink}0.04)`} />
      <motion.rect
        x="10" y="38" width="260" height="3" fill={amber} opacity="0.7" rx="1.5"
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

      {/* Hero block — fades in */}
      <motion.rect x="24" y="68" width="232" height="56" rx="4" fill={`${ink}0.03)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.4 }} />
      <motion.rect x="40" y="82" width="90" height="6" rx="2" fill={`${ink}0.1)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} />
      <motion.rect x="40" y="92" width="60" height="4" rx="1" fill={`${ink}0.06)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} />
      <motion.rect x="40" y="102" width="36" height="10" rx="3" fill={amber} opacity="0.2"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} />

      {/* Image placeholder on right side of hero */}
      <motion.rect x="180" y="72" width="70" height="48" rx="4" fill={`${ink}0.05)`}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} />

      {/* Three content cards — stagger in from bottom */}
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 + i * 0.15 }}>
          <rect x={24 + i * 80} y="132" width="72" height="48" rx="4" fill={`${ink}0.03)`} />
          <rect x={30 + i * 80} y="140" width="40" height="4" rx="1" fill={`${ink}0.08)`} />
          <rect x={30 + i * 80} y="148" width="56" height="3" rx="1" fill={`${ink}0.05)`} />
          <rect x={30 + i * 80} y="154" width="48" height="3" rx="1" fill={`${ink}0.04)`} />
          <rect x={30 + i * 80} y="162" width="24" height="6" rx="2" fill={amber} opacity="0.15" />
        </motion.g>
      ))}
    </svg>
  );
}

/* ── Service 02: Automation — Flow diagram with traveling pulse ── */
export function AutomationIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const nodes = [
    { y: 16, label: "Invoice", icon: "📄" },
    { y: 62, label: "Reminder", icon: "🔔" },
    { y: 108, label: "Payment", icon: "💳" },
    { y: 154, label: "Review", icon: "⭐" },
  ];

  return (
    <svg ref={ref} viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {nodes.map((node, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect x="80" y={node.y} width="120" height="34" rx="8" fill="var(--white)" stroke={`${ink}0.1)`} strokeWidth="1.2" />
          <text x="140" y={node.y + 21} textAnchor="middle" fontSize="9" fontFamily={font} fontWeight="500" fill={`${ink}0.6)`}>{node.label}</text>
          {/* Connector arrow */}
          {i < 3 && (
            <>
              <line x1="140" y1={node.y + 34} x2="140" y2={node.y + 48} stroke={`${ink}0.12)`} strokeWidth="1.2" strokeDasharray="3 3" />
              <path d={`M136 ${node.y + 45} L140 ${node.y + 50} L144 ${node.y + 45}`} stroke={`${ink}0.12)`} strokeWidth="1" fill="none" />
            </>
          )}
        </motion.g>
      ))}

      {/* Traveling pulse dot */}
      <motion.circle cx="140" r="5" fill={amber} opacity="0.8"
        animate={{ cy: [33, 79, 125, 171, 33] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.25, 0.5, 0.75, 1] }}
      />

      {/* Glow ring around pulse */}
      <motion.circle cx="140" r="8" fill="none" stroke={amber} strokeWidth="1" opacity="0.3"
        animate={{ cy: [33, 79, 125, 171, 33] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.25, 0.5, 0.75, 1] }}
      />

      {/* Checkmarks appearing */}
      {nodes.map((node, i) => (
        <motion.text
          key={`check-${i}`}
          x="210" y={node.y + 22}
          fontSize="12" fill="#25D366"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: 3, repeat: Infinity,
            times: [0, i * 0.25, i * 0.25 + 0.05, (i + 1) * 0.25, (i + 1) * 0.25 + 0.05],
          }}
        >
          ✓
        </motion.text>
      ))}
    </svg>
  );
}

/* ── Service 03: AI Reception Bot — Phone with typing indicator ── */
export function ReceptionistIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      <rect x="80" y="8" width="120" height="184" rx="16" stroke={`${ink}0.15)`} strokeWidth="1.5" fill="var(--white)" />
      <rect x="88" y="28" width="104" height="144" rx="4" fill={`${ink}0.02)`} />
      <rect x="115" y="12" width="50" height="10" rx="5" fill={`${ink}0.06)`} />

      {/* WhatsApp header */}
      <rect x="88" y="28" width="104" height="22" rx="4" fill="#075E54" />
      <text x="100" y="43" fontSize="7.5" fontWeight="600" fill="#FFFFFF" fontFamily={font}>StaplerLabs</text>
      <circle cx="183" cy="39" r="3" fill="#25D366" />

      {/* User message */}
      <motion.g
        animate={{ opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.08, 0.45, 0.8, 0.92] }}
      >
        <rect x="94" y="58" width="78" height="30" rx="8" fill="#DCF8C6" />
        <text x="100" y="71" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>I&apos;d like to book</text>
        <text x="100" y="82" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>for Thursday</text>
      </motion.g>

      {/* Typing indicator */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.12, 0.18, 0.28, 0.32, 1] }}
      >
        <rect x="108" y="96" width="36" height="18" rx="9" fill="var(--white)" stroke={`${ink}0.08)`} strokeWidth="0.8" />
        {[0, 1, 2].map((d) => (
          <motion.circle
            key={d}
            cx={118 + d * 8} cy="105" r="2"
            fill={`${ink}0.3)`}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
          />
        ))}
      </motion.g>

      {/* Bot reply */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.38, 0.8, 0.92] }}
      >
        <rect x="100" y="96" width="90" height="46" rx="8" fill="var(--white)" stroke={`${ink}0.08)`} strokeWidth="0.8" />
        <text x="106" y="110" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>Done! Booked for</text>
        <text x="106" y="120" fontSize="6.5" fill={`${ink}0.8)`} fontFamily={font}>Thu 3:30 PM.</text>
        <text x="106" y="134" fontSize="5" fill={`${ink}0.35)`} fontFamily={font}>Automated via StaplerLabs</text>
      </motion.g>

      {/* Calendar confirmation card */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.42, 0.48, 0.8, 0.92] }}
      >
        <rect x="94" y="150" width="98" height="16" rx="4" fill={amber} opacity="0.12" />
        <text x="143" y="161" textAnchor="middle" fontSize="5.5" fontFamily={font} fontWeight="500" fill={amber}>📅 Added to calendar</text>
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

/* ── Service 05: SEO — Search result card + rising line graph ── */
export function SEOIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <svg ref={ref} viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Google search result card */}
      <rect x="20" y="12" width="240" height="78" rx="6" fill="var(--white)" stroke={`${ink}0.06)`} strokeWidth="1" />
      <text x="30" y="30" fontSize="7" fill="#188038" fontFamily={font}>staplerlabs.com/your-business</text>
      <text x="30" y="44" fontSize="9" fill="#1A0DAB" fontFamily={font} fontWeight="600">Your Business — Professional Services</text>
      <text x="30" y="56" fontSize="6.5" fill={`${ink}0.5)`} fontFamily={font}>Trusted local business serving customers for over 15 years.</text>
      <text x="30" y="66" fontSize="6.5" fill={`${ink}0.5)`} fontFamily={font}>Book online, visit our office, or call us today.</text>
      {[0, 1, 2, 3, 4].map((s) => (
        <text key={s} x={30 + s * 10} y="82" fontSize="8" fill="#FBBC04">★</text>
      ))}
      <text x="82" y="82" fontSize="6.5" fill={`${ink}0.4)`} fontFamily={font}>4.9 (87 reviews)</text>

      {/* Graph section */}
      <text x="30" y="108" fontSize="7" fontFamily={font} fontWeight="500" fill={`${ink}0.45)`}>Organic Traffic — 6 weeks</text>
      {[120, 140, 160, 180].map((y) => (
        <line key={y} x1="30" y1={y} x2="250" y2={y} stroke={`${ink}0.04)`} strokeWidth="0.5" />
      ))}
      {["W1", "W2", "W3", "W4", "W5", "W6"].map((w, i) => (
        <text key={i} x={42 + i * 38} y="194" fontSize="6" fill={`${ink}0.3)`} fontFamily={font} textAnchor="middle">{w}</text>
      ))}

      {/* Area fill under the line */}
      <motion.path
        d="M42 178 L80 172 L118 164 L156 152 L194 136 L232 120 L232 185 L42 185 Z"
        fill={amber} opacity="0.06"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 0.06 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Rising line */}
      <motion.path d="M42 178 L80 172 L118 164 L156 152 L194 136 L232 120"
        stroke={amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />

      {/* Data points */}
      {[{ x: 42, y: 178 }, { x: 80, y: 172 }, { x: 118, y: 164 }, { x: 156, y: 152 }, { x: 194, y: 136 }, { x: 232, y: 120 }].map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r="3" fill={amber}
          initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 0.7, scale: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
        />
      ))}

      {/* Upward trend arrow at end */}
      <motion.g
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        <text x="240" y="116" fontSize="10" fill={amber}>↗</text>
      </motion.g>
    </svg>
  );
}

/* ── Service 06: Ads — A/B test cards with winner glow ── */
export function AdsIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-auto">
      {/* Card A */}
      <rect x="16" y="20" width="110" height="130" rx="8" fill="var(--white)" stroke={`${ink}0.1)`} strokeWidth="1.2" />
      <rect x="24" y="28" width="94" height="50" rx="4" fill={`${ink}0.04)`} />
      <rect x="30" y="36" width="50" height="5" rx="1.5" fill={`${ink}0.1)`} />
      <rect x="30" y="46" width="70" height="4" rx="1" fill={`${ink}0.06)`} />
      <rect x="30" y="54" width="60" height="4" rx="1" fill={`${ink}0.04)`} />
      <rect x="30" y="64" width="30" height="8" rx="3" fill={amber} opacity="0.2" />
      <text x="24" y="94" fontSize="7" fontFamily={font} fontWeight="500" fill={`${ink}0.35)`}>Ad Variant A</text>
      <text x="24" y="108" fontSize="8" fontFamily={font} fontWeight="500" fill={`${ink}0.5)`}>CTR: 1.8%</text>
      <text x="70" y="140" textAnchor="middle" fontSize="8" fontFamily={font} fontWeight="600" fill={`${ink}0.3)`}>A</text>

      {/* VS divider */}
      <text x="140" y="85" textAnchor="middle" fontSize="10" fill={`${ink}0.15)`} fontFamily={font} fontWeight="700">VS</text>

      {/* Card B — winner with pulsing border */}
      <motion.rect x="154" y="20" width="110" height="130" rx="8" fill="var(--white)" stroke={amber} strokeWidth="1.5"
        animate={{ strokeOpacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Bottom label */}
      <text x="140" y="172" textAnchor="middle" fontSize="7" fontFamily={font} fill={`${ink}0.3)`}>Continuous optimization, monthly</text>

      {/* Performance bars at bottom */}
      <rect x="40" y="180" width="60" height="4" rx="2" fill={`${ink}0.06)`} />
      <rect x="40" y="180" width="25" height="4" rx="2" fill={`${ink}0.15)`} />
      <rect x="180" y="180" width="60" height="4" rx="2" fill={`${ink}0.06)`} />
      <motion.rect x="180" y="180" width="60" height="4" rx="2" fill={amber} opacity="0.4"
        animate={{ scaleX: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        style={{ transformOrigin: "180px 182px" }}
      />
    </svg>
  );
}
