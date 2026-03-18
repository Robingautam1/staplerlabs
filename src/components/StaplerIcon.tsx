"use client";

/**
 * StaplerIcon — 36×36 animated stapler logo
 * Yellow background, rounded-lg, stapler arm presses on 2.5s loop.
 * Pure SVG animation (animateTransform) — no JS needed.
 */
export default function StaplerIcon({ size = 36 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        backgroundColor: "var(--yellow)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg viewBox="0 0 28 28" fill="none" width={size * 0.6} height={size * 0.6}>
        {/* Base — bottom rail */}
        <rect x="3" y="18" width="22" height="5" rx="2" fill="#1a1710" opacity="0.85" />

        {/* Staple slot */}
        <rect x="10" y="19.5" width="8" height="2" rx="1" fill="var(--yellow)" opacity="0.5" />

        {/* Arm — pivots from left end, presses down */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 5 18; -8 5 18; 0 5 18"
            keyTimes="0; 0.35; 1"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
          {/* Arm body */}
          <path
            d="M5 18 L5 12 Q5 9.5 7.5 9 L21 7.5 Q23.5 7 24 9.5 L24 18"
            fill="#1a1710"
            opacity="0.7"
          />
          {/* Arm top highlight */}
          <path
            d="M5 12 Q5 9.5 7.5 9 L21 7.5 Q23.5 7 24 9.5 L24 11.5 L5 13 Z"
            fill="#1a1710"
            opacity="0.9"
          />
        </g>

        {/* Staple (appears briefly on press) */}
        <rect x="12" y="23" width="4" height="2" rx="0.5" fill="#1a1710" opacity="0.25">
          <animate
            attributeName="opacity"
            values="0; 0; 0.5; 0.5; 0"
            keyTimes="0; 0.3; 0.38; 0.6; 0.7"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}
