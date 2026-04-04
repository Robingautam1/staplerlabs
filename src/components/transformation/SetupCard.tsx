"use client";

import { useState, useEffect } from "react";

const font = "var(--font-body), 'DM Sans', sans-serif";
const ink = "rgba(var(--ink-rgb),";

const milestones = [
  { day: 1, label: "Onboarding call", icon: "📅", x: 30 },
  { day: 5, label: "Google listing live", icon: "📍", x: 100 },
  { day: 12, label: "Website launched", icon: "🌐", x: 175 },
  { day: 21, label: "WhatsApp bot active", icon: "💬", x: 250 },
  { day: 30, label: "First campaign", icon: "🚀", x: 330 },
];

export default function SetupCard() {
  const [progress, setProgress] = useState(0); // 0 to 1
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    let raf: number;
    let start: number;
    const duration = 5000;
    const holdTime = 1200;
    const totalCycle = duration + holdTime;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) % totalCycle;

      if (elapsed < duration) {
        setProgress(elapsed / duration);
        setAllDone(false);
      } else {
        setProgress(1);
        setAllDone(true);
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Figure out which milestones the dot has passed
  const dotX = 30 + progress * 300;
  const passedCount = milestones.filter((m) => dotX >= m.x).length;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2">
      <svg viewBox="0 0 360 110" fill="none" className="w-full h-auto">
        {/* Dashed line (full track) */}
        <line x1="30" y1="40" x2="330" y2="40" stroke={`${ink}0.12)`} strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Solid amber line (painted by dot) */}
        <line x1="30" y1="40" x2={dotX} y2="40" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" />

        {/* Milestones */}
        {milestones.map((m, i) => {
          const isPassed = i < passedCount;
          return (
            <g key={i}>
              {/* Node */}
              <circle
                cx={m.x} cy="40" r="12"
                fill={isPassed ? "var(--amber)" : "var(--bg)"}
                stroke={isPassed ? "var(--amber)" : `${ink}0.12)`}
                strokeWidth="1.5"
                style={{ transition: "fill 300ms, stroke 300ms" }}
              />

              {/* Checkmark or icon */}
              <text
                x={m.x} y="44" textAnchor="middle" fontSize="10"
                style={{ transition: "opacity 300ms" }}
              >
                {isPassed ? "✓" : m.icon}
              </text>

              {/* Day label above */}
              <text
                x={m.x} y="18" textAnchor="middle" fontSize="8" fontWeight="600"
                fill={isPassed ? "var(--amber)" : `${ink}0.3)`} fontFamily={font}
                style={{ transition: "fill 300ms" }}
              >
                Day {m.day}
              </text>

              {/* Description below */}
              <text
                x={m.x} y="66" textAnchor="middle" fontSize="7"
                fill={`${ink}${isPassed ? "0.6)" : "0.25)"}`} fontFamily={font}
                style={{ transition: "fill 400ms, opacity 400ms", opacity: isPassed ? 1 : 0.5 }}
              >
                {m.label}
              </text>
            </g>
          );
        })}

        {/* Traveling dot */}
        <circle cx={dotX} cy="40" r="5" fill="var(--amber)">
          <animate attributeName="r" values="5;7;5" dur="0.8s" repeatCount="indefinite" />
        </circle>

        {/* All systems live pill */}
        {allDone && (
          <g>
            <rect x="120" y="82" width="120" height="22" rx="11" fill="var(--amber)" opacity="0.12" />
            <text x="180" y="97" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--amber)" fontFamily={font}>
              ✓ All systems live
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
