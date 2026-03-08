"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
  className?: string;
  animate?: boolean; // play once on mount
  hoverAnimate?: boolean; // play on hover
}

export default function StaplerLogo({
  className = "w-10 h-10",
  animate = false,
  hoverAnimate = false,
}: Props) {
  const armControls = useAnimation();
  const stapleControls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerStaple = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Arm presses down
    armControls.start({
      rotate: [0, -7, 0, -4, 0],
      transition: { duration: 0.7, ease: "easeInOut" },
    });

    // Staple punches
    stapleControls.start({
      y: [0, 8, 0],
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    });

    setTimeout(() => setIsAnimating(false), 750);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={`${className} ${hoverAnimate ? "cursor-pointer" : ""}`}
      onMouseEnter={hoverAnimate ? triggerStaple : undefined}
      onClick={hoverAnimate ? triggerStaple : undefined}
    >
      {/* Filters */}
      <defs>
        <filter id="innerShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
        </filter>
        <filter id="subtleGlow">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="var(--yellow)" floodOpacity="0.25" />
        </filter>
        <linearGradient id="hingeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE033" />
          <stop offset="100%" stopColor="#E8B800" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="200" height="200" fill="var(--logo-bg)" rx="40" />

      {/* Corner accent */}
      <circle cx="28" cy="28" r="4" fill="var(--yellow)" opacity="0.5" />
      <circle cx="28" cy="28" r="8" fill="var(--yellow)" opacity="0.08" />

      {/* Subtle floor reflection */}
      <ellipse cx="104" cy="178" rx="76" ry="6" fill="var(--yellow)" opacity="0.07" />

      {/* BASE PLATE */}
      <rect x="22" y="134" width="156" height="30" rx="9" fill="var(--logo-base)" filter="url(#innerShadow)" />
      {/* Top highlight */}
      <rect x="22" y="134" width="156" height="4" rx="9" fill="var(--logo-base)" opacity="0.9" />
      {/* Feet */}
      <rect x="28" y="158" width="18" height="5" rx="2.5" fill="var(--logo-arm-dark)" />
      <rect x="154" y="158" width="18" height="5" rx="2.5" fill="var(--logo-arm-dark)" />
      {/* Paper guide rail */}
      <rect x="30" y="140" width="116" height="3.5" rx="1.75" fill="var(--logo-arm-dark)" />
      {/* Grip texture on base */}
      <rect x="32" y="145" width="4" height="1.5" rx="0.75" fill="var(--logo-arm-dark)" />
      <rect x="40" y="145" width="4" height="1.5" rx="0.75" fill="var(--logo-arm-dark)" />
      <rect x="48" y="145" width="4" height="1.5" rx="0.75" fill="var(--logo-arm-dark)" />

      {/* ARM */}
      {animate ? (
        <motion.g
          style={{ transformOrigin: "170px 112px" }}
          animate={{ rotate: [0, -6, 0, -3, 0] }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="var(--logo-arm)" />
          <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="var(--logo-arm-dark)" />
          <path d="M 30 88 Q 30 76 44 73 L 138 67 Q 155 65 163 77" fill="none" stroke="var(--logo-base)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          {/* Brand emboss on arm */}
          <rect x="50" y="78" width="60" height="2" rx="1" fill="var(--logo-arm-dark)" opacity="0.5" />
        </motion.g>
      ) : hoverAnimate ? (
        <motion.g
          style={{ transformOrigin: "170px 112px" }}
          animate={armControls}
        >
          <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="var(--logo-arm)" />
          <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="var(--logo-arm-dark)" />
          <path d="M 30 88 Q 30 76 44 73 L 138 67 Q 155 65 163 77" fill="none" stroke="var(--logo-base)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <rect x="50" y="78" width="60" height="2" rx="1" fill="var(--logo-arm-dark)" opacity="0.5" />
        </motion.g>
      ) : (
        <g>
          <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="var(--logo-arm)" />
          <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="var(--logo-arm-dark)" />
          <path d="M 30 88 Q 30 76 44 73 L 138 67 Q 155 65 163 77" fill="none" stroke="var(--logo-base)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <rect x="50" y="78" width="60" height="2" rx="1" fill="var(--logo-arm-dark)" opacity="0.5" />
        </g>
      )}

      {/* HINGE RING */}
      <circle cx="170" cy="112" r="20" fill="var(--logo-bg)" />
      <circle cx="170" cy="112" r="20" fill="none" stroke="url(#hingeGrad)" strokeWidth="4.5" />
      <circle cx="170" cy="112" r="9.5" fill="var(--yellow)" filter="url(#subtleGlow)" />
      <circle cx="170" cy="112" r="5" fill="var(--yellow)" />
      <circle cx="170" cy="112" r="3.5" fill="var(--logo-bg)" />
      {/* Hinge highlight */}
      <circle cx="167" cy="108" r="2.5" fill="var(--logo-base)" opacity="0.25" />

      {/* MOUTH */}
      <rect x="22" y="118" width="146" height="16" fill="var(--logo-bg)" />
      {/* Inner mouth depth */}
      <rect x="24" y="120" width="142" height="4" fill="var(--logo-bg)" opacity="0.8" />

      {/* THE STAPLE */}
      {animate ? (
        <motion.g
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
        >
          <rect x="32" y="110" width="52" height="10" rx="5" fill="var(--yellow)" />
          <rect x="32" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
          <rect x="74" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
          {/* Staple shine */}
          <rect x="34" y="112" width="48" height="2" rx="1" fill="#FFE566" opacity="0.5" />
        </motion.g>
      ) : hoverAnimate ? (
        <motion.g animate={stapleControls}>
          <rect x="32" y="110" width="52" height="10" rx="5" fill="var(--yellow)" />
          <rect x="32" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
          <rect x="74" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
          <rect x="34" y="112" width="48" height="2" rx="1" fill="#FFE566" opacity="0.5" />
        </motion.g>
      ) : (
        <g>
          <rect x="32" y="110" width="52" height="10" rx="5" fill="var(--yellow)" />
          <rect x="32" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
          <rect x="74" y="110" width="10" height="32" rx="5" fill="var(--yellow)" />
          <rect x="34" y="112" width="48" height="2" rx="1" fill="#FFE566" opacity="0.5" />
        </g>
      )}

      {/* Paper lines */}
      <rect x="14" y="164" width="172" height="3.5" rx="1.75" fill="var(--yellow)" opacity="0.1" />
      <rect x="14" y="169" width="172" height="2.5" rx="1.25" fill="var(--yellow)" opacity="0.05" />
    </svg>
  );
}
