"use client";

import { useState, useEffect } from "react";

const font = "var(--font-inter), Inter, sans-serif";
const ink = "rgba(var(--ink-rgb),";

/**
 * Card A — Google Search Visibility
 * Two states toggle every 4s with crossfade: "not found" → "#1 result"
 */
export default function GoogleVisibilityCard() {
  const [showAfter, setShowAfter] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
      setProgress(0);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
    }, 40);
    return () => clearInterval(tick);
  }, [showAfter]);

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="relative flex-1 overflow-hidden" style={{ minHeight: 160 }}>
        {/* BEFORE state */}
        <div
          className="absolute inset-0 transition-opacity duration-[600ms]"
          style={{ opacity: showAfter ? 0 : 1 }}
        >
          <svg viewBox="0 0 360 180" fill="none" className="w-full h-full">
            {/* Search bar */}
            <rect x="20" y="8" width="320" height="28" rx="14" stroke={`${ink}0.12)`} strokeWidth="1" fill="var(--bg)" />
            <text x="36" y="26" fontSize="9" fontFamily={font} fill={`${ink}0.5)`}>dental clinic near me</text>
            <circle cx="324" cy="22" r="8" fill={`${ink}0.04)`} />
            <text x="321" y="25" fontSize="9" fill={`${ink}0.3)`}>🔍</text>

            {/* Competitor results */}
            {[
              { y: 48, name: "City Dental Care", addr: "MG Road · 4.2★ · 43 reviews" },
              { y: 90, name: "Smile Experts", addr: "Sector 15 · 3.9★ · 28 reviews" },
              { y: 132, name: "Dr. Sharma Dental", addr: "Civil Lines · 4.5★ · 61 reviews" },
            ].map((r, i) => (
              <g key={i}>
                <rect x="20" y={r.y} width="320" height="34" rx="4" fill={`${ink}0.02)`} stroke={`${ink}0.05)`} strokeWidth="0.5" />
                <text x="30" y={r.y + 15} fontSize="9.5" fontFamily={font} fontWeight="600" fill="#1A0DAB">{r.name}</text>
                <text x="30" y={r.y + 27} fontSize="7.5" fontFamily={font} fill={`${ink}0.4)`}>{r.addr}</text>
              </g>
            ))}

            {/* Not found indicator */}
            <rect x="230" y="168" width="110" height="16" rx="8" fill="rgba(220,50,50,0.08)" />
            <text x="240" y="179" fontSize="7" fontFamily={font} fontWeight="500" fill="rgba(220,50,50,0.6)">Your business: not found</text>
          </svg>
        </div>

        {/* AFTER state */}
        <div
          className="absolute inset-0 transition-opacity duration-[600ms]"
          style={{ opacity: showAfter ? 1 : 0 }}
        >
          <svg viewBox="0 0 360 180" fill="none" className="w-full h-full">
            {/* Search bar */}
            <rect x="20" y="8" width="320" height="28" rx="14" stroke={`${ink}0.12)`} strokeWidth="1" fill="var(--bg)" />
            <text x="36" y="26" fontSize="9" fontFamily={font} fill={`${ink}0.5)`}>dental clinic near me</text>
            <circle cx="324" cy="22" r="8" fill={`${ink}0.04)`} />
            <text x="321" y="25" fontSize="9" fill={`${ink}0.3)`}>🔍</text>

            {/* YOUR listing — top with glow */}
            <rect x="18" y="46" width="324" height="68" rx="6" fill="var(--bg)" stroke="var(--amber)" strokeWidth="1.5" />
            <rect x="18" y="46" width="324" height="68" rx="6" fill="var(--amber)" opacity="0.04" />

            {/* Maps mini panel */}
            <rect x="266" y="52" width="68" height="56" rx="4" fill={`${ink}0.04)`} />
            <circle cx="300" cy="72" r="6" fill="#EA4335" opacity="0.6" />
            <text x="300" y="74" textAnchor="middle" fontSize="6" fill="white">📍</text>
            <text x="300" y="98" textAnchor="middle" fontSize="5" fontFamily={font} fill={`${ink}0.3)`}>Map</text>

            <text x="30" y="62" fontSize="8" fontFamily={font} fill="#188038">staplerlabs.com/dental-clinic</text>
            <text x="30" y="76" fontSize="10" fontFamily={font} fontWeight="600" fill="#1A0DAB">Dental Clinic — Professional Care</text>
            <text x="30" y="88" fontSize="7.5" fontFamily={font} fill={`${ink}0.5)`}>4.8★ · 127 reviews · Open now · Closes 8 PM</text>
            <rect x="30" y="96" width="64" height="12" rx="6" fill="#25D366" opacity="0.15" />
            <text x="36" y="105" fontSize="6" fontFamily={font} fontWeight="600" fill="#25D366">Book appointment</text>

            {/* Competitor below */}
            <g opacity="0.5">
              <rect x="20" y="122" width="320" height="28" rx="4" fill={`${ink}0.02)`} />
              <text x="30" y="138" fontSize="8" fontFamily={font} fill={`${ink}0.3)`}>City Dental Care · MG Road · 4.2★</text>
            </g>

            {/* Found indicator */}
            <rect x="238" y="158" width="102" height="16" rx="8" fill="rgba(37,211,102,0.1)" />
            <text x="248" y="169" fontSize="7" fontFamily={font} fontWeight="500" fill="#25D366">Your business: #1 result</text>
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 rounded-full overflow-hidden mt-2" style={{ backgroundColor: `${ink}0.06)` }}>
        <div
          className="h-full rounded-full transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%`, backgroundColor: "var(--amber)" }}
        />
      </div>
    </div>
  );
}
