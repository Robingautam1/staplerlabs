"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const font = "var(--font-inter), Inter, sans-serif";
const ink = "rgba(var(--ink-rgb),";

const points = [
  { x: 30, y: 130 },
  { x: 70, y: 122 },
  { x: 110, y: 108 },
  { x: 150, y: 90 },
  { x: 190, y: 70 },
  { x: 230, y: 52 },
  { x: 270, y: 38 },
  { x: 310, y: 22 },
];

const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
const areaPath = `${linePath} L310 140 L30 140 Z`;

export default function TrafficCard() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg ref={ref} viewBox="0 0 340 155" fill="none" className="w-full h-auto">
        {/* Grid lines */}
        {[40, 70, 100, 130].map((y) => (
          <line key={y} x1="30" y1={y} x2="310" y2={y} stroke={`${ink}0.05)`} strokeWidth="0.5" />
        ))}

        {/* X-axis labels */}
        {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((w, i) => (
          <text key={i} x={30 + i * 40} y="152" textAnchor="middle" fontSize="7" fill={`${ink}0.3)`} fontFamily={font}>{w}</text>
        ))}

        {/* Y-axis labels */}
        <text x="20" y="133" textAnchor="end" fontSize="6" fill={`${ink}0.2)`} fontFamily={font}>0</text>
        <text x="20" y="43" textAnchor="end" fontSize="6" fill={`${ink}0.2)`} fontFamily={font}>200</text>

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="var(--amber)" opacity="0"
          animate={inView ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Line */}
        <motion.path
          d={linePath}
          stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />

        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r="3" fill="var(--amber)"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.3 + i * 0.25, duration: 0.3 }}
          />
        ))}

        {/* Pulse on last point */}
        <motion.circle
          cx={310} cy={22} r="6" fill="none" stroke="var(--amber)" strokeWidth="1"
          animate={inView ? { scale: [1, 1.6], opacity: [0.5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2.5 }}
        />
      </svg>

      {/* Stat label */}
      <motion.div
        className="mt-1"
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, color: "var(--amber)", fontFamily: font }}>+340% organic reach</span>
      </motion.div>
    </div>
  );
}
