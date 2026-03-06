"use client";

import { motion } from "framer-motion";

interface Props {
  className?: string;
  animate?: boolean;
}

export default function StaplerLogo({ className = "w-10 h-10", animate = false }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
    >
      {/* Background */}
      <rect width="200" height="200" fill="#0A0A0A" rx="40" />
      <circle cx="28" cy="28" r="5" fill="#FFD000" opacity="0.6" />
      <ellipse cx="104" cy="178" rx="80" ry="7" fill="#FFD000" opacity="0.1" />

      {/* BASE PLATE */}
      <rect x="22" y="134" width="156" height="30" rx="9" fill="#F0F0F0" />
      <rect x="22" y="134" width="156" height="5" rx="9" fill="#FFFFFF" />
      <rect x="28" y="158" width="20" height="6" rx="3" fill="#CCCCCC" />
      <rect x="152" y="158" width="20" height="6" rx="3" fill="#CCCCCC" />
      <rect x="30" y="140" width="116" height="4" rx="2" fill="#D8D8D8" />

      {/* ARM — animates press-down on load */}
      {animate ? (
        <motion.g
          style={{ transformOrigin: "170px 112px" }}
          animate={{ rotate: [0, -5, 0, -3, 0] }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        >
          <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="#E0E0E0" />
          <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="#C4C4C4" />
          <path d="M 30 88 Q 30 76 44 73 L 138 67 Q 155 65 163 77" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </motion.g>
      ) : (
        <g>
          <path d="M 22 134 L 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 174 96 L 174 134 Z" fill="#E0E0E0" />
          <path d="M 22 88 Q 22 72 38 68 L 140 62 Q 160 60 168 76 L 168 90 L 22 90 Z" fill="#C4C4C4" />
          <path d="M 30 88 Q 30 76 44 73 L 138 67 Q 155 65 163 77" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </g>
      )}

      {/* HINGE */}
      <circle cx="170" cy="112" r="20" fill="#111111" />
      <circle cx="170" cy="112" r="20" fill="none" stroke="#FFD000" strokeWidth="4" />
      <circle cx="170" cy="112" r="9" fill="#FFD000" />
      <circle cx="170" cy="112" r="3.5" fill="#0A0A0A" />

      {/* MOUTH */}
      <rect x="22" y="118" width="146" height="16" fill="#0A0A0A" />

      {/* THE STAPLE — punches down into view */}
      {animate ? (
        <motion.g
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
        >
          <rect x="32" y="110" width="52" height="10" rx="5" fill="#FFD000" />
          <rect x="32" y="110" width="10" height="32" rx="5" fill="#FFD000" />
          <rect x="74" y="110" width="10" height="32" rx="5" fill="#FFD000" />
        </motion.g>
      ) : (
        <g>
          <rect x="32" y="110" width="52" height="10" rx="5" fill="#FFD000" />
          <rect x="32" y="110" width="10" height="32" rx="5" fill="#FFD000" />
          <rect x="74" y="110" width="10" height="32" rx="5" fill="#FFD000" />
        </g>
      )}

      {/* Paper lines */}
      <rect x="14" y="164" width="172" height="4" rx="2" fill="#FFD000" opacity="0.12" />
      <rect x="14" y="169" width="172" height="3" rx="1.5" fill="#FFD000" opacity="0.06" />
    </svg>
  );
}
