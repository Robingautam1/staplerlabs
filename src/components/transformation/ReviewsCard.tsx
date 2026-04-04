"use client";

import { useState, useEffect } from "react";

const font = "var(--font-body), 'DM Sans', sans-serif";
const ink = "rgba(var(--ink-rgb),";

const stages = [
  { count: 0, stars: 0 },
  { count: 12, stars: 3 },
  { count: 47, stars: 4 },
  { count: 127, stars: 5 },
];

export default function ReviewsCard() {
  const [stageIdx, setStageIdx] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIdx((i) => (i >= stages.length - 1 ? 0 : i + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = stages[stageIdx].count;
    const start = displayCount;
    const diff = target - start;
    if (diff === 0 && stageIdx === 0) {
      setDisplayCount(0);
      return;
    }
    let frame = 0;
    const totalFrames = 15;
    const id = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setDisplayCount(Math.round(start + diff * Math.min(progress, 1)));
      if (frame >= totalFrames) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [stageIdx]);

  const stage = stages[stageIdx];
  const rating = stage.stars === 0 ? "0.0" : stage.stars === 3 ? "4.1" : stage.stars === 4 ? "4.5" : "4.8";
  const isGlowing = stageIdx === stages.length - 1;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-full max-w-[200px] rounded-xl p-4 transition-all duration-500"
        style={{
          backgroundColor: "var(--bg)",
          border: `1px solid ${isGlowing ? "var(--amber)" : `${ink}0.08)`}`,
          boxShadow: isGlowing ? "0 0 24px rgba(198,144,10,0.15)" : "none",
        }}
      >
        {/* Business name */}
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)", fontFamily: font }}>Dental Clinic</p>
        <p style={{ fontSize: 8, color: `${ink}0.4)`, fontFamily: font, marginTop: 2 }}>Sector 15, Noida</p>

        {/* Stars */}
        <div className="flex items-center gap-0.5 mt-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className="transition-all duration-300"
              style={{
                fontSize: 16,
                color: s <= stage.stars ? "#FBBC04" : `${ink}0.1)`,
                transform: s <= stage.stars ? "scale(1)" : "scale(0.85)",
              }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Rating and count */}
        <div className="flex items-baseline gap-2 mt-2">
          <span style={{ fontSize: 20, fontWeight: 700, color: "var(--ink)", fontFamily: font, fontFeatureSettings: '"tnum"' }}>
            {rating}
          </span>
          <span style={{ fontSize: 9, color: `${ink}0.4)`, fontFamily: font }}>
            ({displayCount} reviews)
          </span>
        </div>

        {/* Google badge */}
        <div className="flex items-center gap-1 mt-3" style={{ opacity: displayCount > 0 ? 1 : 0.3, transition: "opacity 400ms" }}>
          <span style={{ fontSize: 10 }}>🔵</span>
          <span style={{ fontSize: 7, color: `${ink}0.35)`, fontFamily: font }}>Google Reviews</span>
        </div>
      </div>
    </div>
  );
}
