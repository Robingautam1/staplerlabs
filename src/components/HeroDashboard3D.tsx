"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HeroDashboard3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = 72;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        perspective: "1200px",
        perspectiveOrigin: "50% 40%",
        maxWidth: "820px",
        margin: "72px auto 0",
        position: "relative",
        padding: "0 20px",
      }}
    >
      {/* Ambient Shape 1 — blue, behind right */}
      <motion.div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-40px",
          width: "500px",
          height: "340px",
          background: "#B8D4F5",
          opacity: 0.25,
          borderRadius: "40px",
          transform: "translateZ(-40px) rotateY(8deg) rotateZ(-3deg)",
          zIndex: 0,
          pointerEvents: "none",
        }}
        animate={isInView ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient Shape 2 — green, behind bottom-left */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "-30px",
          width: "300px",
          height: "200px",
          background: "#D4E8C2",
          opacity: 0.2,
          borderRadius: "30px",
          transform: "translateZ(-30px) rotateY(-6deg) rotateZ(4deg)",
          zIndex: 0,
          pointerEvents: "none",
        }}
        animate={isInView ? { y: [0, -8, 0] } : {}}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main floating card */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 1,
          background: "white",
          borderRadius: "20px",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
          overflow: "hidden",
          transform: "rotateX(-4deg) rotateY(2deg)",
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: [0, -8, 0],
              }
            : {}
        }
        transition={{
          opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          },
        }}
      >
        {/* ── TOP HEADER BAR ── */}
        <div
          style={{
            height: "48px",
            background: "#F8F7F4",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#FF5F57",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#FEBC2E",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#28C840",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "#9CA3AF",
              fontWeight: 500,
            }}
          >
            Business Intelligence Dashboard
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#9CA3AF",
            }}
          >
            Generated in 30 min
          </span>
        </div>

        {/* ── CARD BODY ── */}
        <div style={{ padding: "24px" }}>
          {/* ROW 1 — Score + Arc */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "64px",
                    color: "#1A1A1A",
                    lineHeight: 1,
                  }}
                >
                  {count}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                    color: "#9CA3AF",
                    marginLeft: "2px",
                  }}
                >
                  /100
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                Business Index Score
              </p>
            </div>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="#E5E7EB"
                strokeWidth="5"
                fill="none"
              />
              <motion.circle
                cx="40"
                cy="40"
                r="35"
                stroke="#1A1A1A"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
                strokeDasharray="219.9"
                initial={{ strokeDashoffset: 219.9 }}
                animate={isInView ? { strokeDashoffset: 61.6 } : {}}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: 0.3,
                }}
              />
            </svg>
          </div>

          {/* ROW 2 — Metric Chips */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {[
              { label: "Online Visibility", val: "Low", color: "#EF4444" },
              { label: "Competitors", val: "8 found", color: "#1A1A1A" },
              { label: "Critical Gaps", val: "5 issues", color: "#EF4444" },
              { label: "Status", val: "Action needed", color: "#F59E0B" },
            ].map((chip, i) => (
              <div
                key={i}
                style={{
                  background: "#F8F7F4",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  flex: "1 1 0",
                  minWidth: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    color: "#9CA3AF",
                  }}
                >
                  {chip.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: chip.color,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {chip.val}
                </p>
              </div>
            ))}
          </div>

          {/* DIVIDER */}
          <div style={{ height: 1, background: "#F3F4F6", margin: "20px 0" }} />

          {/* ROW 3 — Two Columns */}
          <div style={{ display: "flex", gap: 0 }}>
            {/* Left — Gap Analysis */}
            <div
              style={{
                width: "50%",
                paddingRight: "16px",
                borderRight: "1px solid #F3F4F6",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                Gap Analysis
              </p>
              {[
                { dot: "#EF4444", text: "No Google Business Profile" },
                { dot: "#EF4444", text: "Not ranking on local search" },
                { dot: "#F59E0B", text: "Zero review presence" },
                { dot: "#F59E0B", text: "No WhatsApp pipeline" },
                {
                  dot: "#EF4444",
                  text: "3 competitors outranking you on Maps",
                },
              ].map((g, i) => (
                <motion.div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                  }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: g.dot,
                      flexShrink: 0,
                      marginTop: "5px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#374151",
                      lineHeight: 1.4,
                    }}
                  >
                    {g.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right — Recommendations */}
            <div style={{ width: "50%", paddingLeft: "16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                Recommendations
              </p>
              {[
                "Set up Google Business Profile + local SEO",
                "Build mobile-first website with booking",
                "Deploy WhatsApp automation pipeline",
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#1A1A1A",
                      color: "white",
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#374151",
                      lineHeight: 1.4,
                    }}
                  >
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          style={{
            height: "40px",
            background: "#F8F7F4",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#9CA3AF",
            }}
          >
            Diagnostic completed · 28 Mar 2026
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              background: "#1A1A1A",
              color: "white",
              padding: "4px 12px",
              borderRadius: "100px",
              cursor: "default",
            }}
          >
            View full report →
          </span>
        </div>
      </motion.div>
    </div>
  );
}
