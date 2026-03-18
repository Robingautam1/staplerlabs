"use client";

import { useState, useEffect } from "react";

const font = "var(--font-inter), Inter, sans-serif";
const ink = "rgba(var(--ink-rgb),";

export default function RevenueCard() {
  const [progress, setProgress] = useState(0); // 0 to 1
  const targetAmount = 18000;

  useEffect(() => {
    let raf: number;
    let start: number;
    const growDuration = 2000;
    const holdDuration = 2000;
    const totalCycle = growDuration + holdDuration + 1000; // 1s reset

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) % totalCycle;

      if (elapsed < growDuration) {
        setProgress(elapsed / growDuration);
      } else if (elapsed < growDuration + holdDuration) {
        setProgress(1);
      } else {
        setProgress(0);
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const displayAmount = Math.round(targetAmount * progress);
  const barHeight = 120 * progress;

  return (
    <div className="w-full h-full flex items-end justify-center gap-6 pb-2">
      {/* Before column */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-end" style={{ height: 130 }}>
          <div
            className="w-12 rounded-t-md"
            style={{
              height: 8,
              backgroundColor: `${ink}0.08)`,
            }}
          />
        </div>
        <p style={{ fontSize: 16, fontWeight: 700, color: `${ink}0.2)`, fontFamily: font, marginTop: 8 }}>
          ₹0
        </p>
        <p style={{ fontSize: 8, color: `${ink}0.25)`, fontFamily: font, marginTop: 2, textAlign: "center", maxWidth: 80 }}>
          Online revenue
        </p>
        <p style={{ fontSize: 7, color: `${ink}0.18)`, fontFamily: font, marginTop: 4, textAlign: "center", maxWidth: 90 }}>
          100% walk-in / referral
        </p>
      </div>

      {/* Arrow connector */}
      <div className="flex flex-col items-center gap-1 self-center">
        <div className="px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--amber)", opacity: 0.1 }}>
          <span style={{ fontSize: 7, fontWeight: 600, color: "var(--amber)", fontFamily: font }}>StaplerLabs ROI</span>
        </div>
        <span style={{ fontSize: 16, color: `${ink}0.12)` }}>→</span>
      </div>

      {/* After column */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-end" style={{ height: 130 }}>
          <div
            className="w-12 rounded-t-md transition-all duration-100"
            style={{
              height: Math.max(4, barHeight),
              backgroundColor: "var(--amber)",
              opacity: 0.6,
            }}
          />
        </div>
        <p
          className="transition-all duration-100"
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "var(--amber)",
            fontFamily: font,
            fontFeatureSettings: '"tnum"',
            marginTop: 8,
          }}
        >
          ₹{displayAmount.toLocaleString("en-IN")}
        </p>
        <p style={{ fontSize: 8, color: `${ink}0.5)`, fontFamily: font, marginTop: 2, textAlign: "center", maxWidth: 100 }}>
          Online bookings this month
        </p>
        <p style={{ fontSize: 7, color: `${ink}0.35)`, fontFamily: font, marginTop: 4, textAlign: "center", maxWidth: 120 }}>
          3–5 bookings/week from Google + WhatsApp
        </p>
      </div>
    </div>
  );
}
