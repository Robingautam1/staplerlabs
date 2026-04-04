"use client";

import { useState, useEffect } from "react";

const font = "var(--font-body), 'DM Sans', sans-serif";
const ink = "rgba(var(--ink-rgb),";

export default function ResponseCard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t >= 4000 ? 0 : t + 50));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Before: hours count (shows "3:00:00" dimly)
  // After: countdown from 3:00 to 0:03
  const afterProgress = Math.min(1, time / 2000);
  const afterSeconds = Math.max(3, Math.round(180 * (1 - afterProgress)));
  const afterMin = Math.floor(afterSeconds / 60);
  const afterSec = afterSeconds % 60;
  const afterStr = `${afterMin}:${String(afterSec).padStart(2, "0")}`;
  const isDone = afterSeconds <= 3;

  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      {/* Before clock */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="relative w-16 h-16 rounded-full flex items-center justify-center"
          style={{ border: `1.5px solid ${ink}0.1)`, backgroundColor: `${ink}0.02)` }}
        >
          {/* Simple analog clock face */}
          <svg viewBox="0 0 48 48" className="w-full h-full">
            {/* Hour markers */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => {
              const angle = (h * 30 - 90) * (Math.PI / 180);
              return (
                <line
                  key={h}
                  x1={24 + 18 * Math.cos(angle)} y1={24 + 18 * Math.sin(angle)}
                  x2={24 + 20 * Math.cos(angle)} y2={24 + 20 * Math.sin(angle)}
                  stroke={`${ink}0.15)`} strokeWidth="1"
                />
              );
            })}
            {/* Slow spinning hour hand */}
            <line
              x1="24" y1="24" x2="24" y2="12"
              stroke={`${ink}0.25)`} strokeWidth="1.5" strokeLinecap="round"
              style={{
                transformOrigin: "24px 24px",
                animation: "spinSlow 6s linear infinite",
              }}
            />
            {/* Minute hand */}
            <line
              x1="24" y1="24" x2="24" y2="9"
              stroke={`${ink}0.15)`} strokeWidth="1" strokeLinecap="round"
              style={{
                transformOrigin: "24px 24px",
                animation: "spinMedium 3s linear infinite",
              }}
            />
            <circle cx="24" cy="24" r="1.5" fill={`${ink}0.2)`} />
          </svg>
        </div>
        <div className="text-center">
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(220,50,50,0.5)", fontFamily: font }}>3 hrs</p>
          <p style={{ fontSize: 7, color: `${ink}0.3)`, fontFamily: font }}>avg response</p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex flex-col items-center gap-1">
        <span style={{ fontSize: 14, color: `${ink}0.15)` }}>→</span>
      </div>

      {/* After clock */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            border: `1.5px solid ${isDone ? "rgba(37,211,102,0.4)" : `${ink}0.1)`}`,
            backgroundColor: isDone ? "rgba(37,211,102,0.06)" : `${ink}0.02)`,
          }}
        >
          <span
            className="transition-all duration-200"
            style={{
              fontSize: isDone ? 16 : 14,
              fontWeight: 700,
              color: isDone ? "#25D366" : "var(--ink)",
              fontFamily: font,
              fontFeatureSettings: '"tnum"',
            }}
          >
            {isDone ? "0:03" : afterStr}
          </span>
          {isDone && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: "#25D366", fontSize: 8, animation: "fadeSlide 400ms ease-out" }}
            >
              ✓
            </span>
          )}
        </div>
        <div className="text-center">
          <p style={{ fontSize: 13, fontWeight: 600, color: "#25D366", fontFamily: font }}>3 sec</p>
          <p style={{ fontSize: 7, color: `${ink}0.3)`, fontFamily: font }}>auto-reply</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinMedium {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
