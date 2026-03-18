"use client";

import { motion } from "framer-motion";

const ink = "rgba(var(--ink-rgb),";
const font = "var(--font-inter), Inter, sans-serif";

/**
 * CaseStudyMockup — iPhone 16, 280×560 (2:1), proper proportions.
 * Flex column layout: WhatsApp header → chat → Google card → bar chart.
 */
export default function CaseStudyMockup() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: 280,
          height: 560,
          borderRadius: 44,
          border: "2px solid rgba(245,245,240,0.15)",
          background: "#141414",
          overflow: "hidden",
        }}
      >
        {/* Side buttons — left */}
        <div className="absolute -left-[3px] top-[120px] w-[3px] h-[28px] rounded-l-sm" style={{ backgroundColor: `${ink}0.3)` }} />
        <div className="absolute -left-[3px] top-[160px] w-[3px] h-[20px] rounded-l-sm" style={{ backgroundColor: `${ink}0.3)` }} />
        {/* Side button — right */}
        <div className="absolute -right-[3px] top-[140px] w-[3px] h-[32px] rounded-r-sm" style={{ backgroundColor: `${ink}0.3)` }} />

        {/* Screen area */}
        <div
          className="absolute flex flex-col"
          style={{
            top: 8,
            left: 8,
            right: 8,
            bottom: 8,
            borderRadius: 36,
            overflow: "hidden",
            backgroundColor: "var(--bg-card)",
            boxShadow: "inset 0 0 0 1px rgba(245,245,240,0.06)",
          }}
        >
          {/* Dynamic Island notch */}
          <div className="relative z-10 flex justify-center" style={{ paddingTop: 10 }}>
            <div
              style={{
                width: 80,
                height: 10,
                borderRadius: 5,
                backgroundColor: "rgba(245,245,240,0.06)",
              }}
            />
          </div>

          {/* 1. WhatsApp header — 52px */}
          <div
            className="flex items-center gap-2 px-4 shrink-0"
            style={{ height: 52, backgroundColor: "#075E54" }}
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <span style={{ fontSize: 12 }}>🏥</span>
            </div>
            <div className="flex-1">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", fontFamily: font }}>StaplerLabs</p>
            </div>
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#25D366" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>

          {/* 2. Chat area — flex 1 */}
          <div className="flex-1 flex flex-col justify-center gap-2 px-3 py-3" style={{ backgroundColor: `${ink}0.02)` }}>
            {/* User bubble */}
            <motion.div
              className="self-start max-w-[75%] px-3 py-2 rounded-xl"
              style={{ backgroundColor: "#DCF8C6" }}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p style={{ fontSize: 11, color: "#1a1710", fontFamily: font, lineHeight: 1.4 }}>
                Hi, I&apos;d like to book an appointment for Thursday
              </p>
            </motion.div>

            {/* Bot bubble */}
            <motion.div
              className="self-end max-w-[80%] px-3 py-2 rounded-xl"
              style={{ backgroundColor: "var(--bg-card)", border: `1px solid ${ink}0.08)` }}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p style={{ fontSize: 11, color: "var(--ink)", fontFamily: font, lineHeight: 1.4 }}>
                Done! You&apos;re booked for Thu 3:30 PM with the dentist.
              </p>
              <p style={{ fontSize: 8, color: `${ink}0.35)`, fontFamily: font, marginTop: 3 }}>
                Automated via StaplerLabs
              </p>
            </motion.div>
          </div>

          {/* 3. Google card — 100px */}
          <motion.div
            className="shrink-0 mx-2 rounded-lg mb-2"
            style={{ height: 100, backgroundColor: `${ink}0.04)`, border: `1px solid ${ink}0.06)`, padding: 10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            {/* Map mini area */}
            <div className="flex gap-2 mb-2">
              <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: `${ink}0.04)` }}>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                  <path d="M10 2C7 2 4.5 4.5 4.5 7.5C4.5 11.5 10 18 10 18S15.5 11.5 15.5 7.5C15.5 4.5 13 2 10 2Z" fill="#EA4335" opacity="0.7" />
                  <circle cx="10" cy="7.5" r="2" fill="white" opacity="0.9" />
                </svg>
              </div>
              <div className="flex-1">
                <p style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)", fontFamily: font }}>Dental Clinic</p>
                <p style={{ fontSize: 8, color: "var(--amber)", fontFamily: font }}>4.8 ★★★★★ · 127 reviews</p>
                <p style={{ fontSize: 8, color: "#25D366", fontFamily: font }}>Open now · Closes 8 PM</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-2 py-1 rounded text-center" style={{ backgroundColor: `${ink}0.04)`, flex: 1 }}>
                <span style={{ fontSize: 7, color: `${ink}0.4)`, fontFamily: font }}>Directions</span>
              </div>
              <div className="px-2 py-1 rounded text-center" style={{ backgroundColor: "rgba(37,211,102,0.1)", flex: 1 }}>
                <span style={{ fontSize: 7, color: "#25D366", fontFamily: font, fontWeight: 600 }}>Book</span>
              </div>
            </div>
          </motion.div>

          {/* 4. Bar chart — ~120px */}
          <motion.div
            className="shrink-0 mx-2 rounded-lg mb-2"
            style={{ height: 120, backgroundColor: `${ink}0.04)`, border: `1px solid ${ink}0.06)`, padding: "8px 10px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <p style={{ fontSize: 10, fontWeight: 500, color: "var(--ink)", fontFamily: font }}>Online Appointments</p>
            <p style={{ fontSize: 7, color: `${ink}0.4)`, fontFamily: font, marginBottom: 6 }}>This month</p>
            <div className="flex items-end gap-1.5" style={{ height: 60 }}>
              {[18, 28, 22, 36, 32, 44, 52].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ backgroundColor: "var(--yellow)", opacity: 0.55 }}
                  initial={{ height: 0 }}
                  whileInView={{ height: h }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>

          {/* Home indicator */}
          <div className="shrink-0 flex justify-center pb-2 pt-1">
            <div className="w-[60px] h-[4px] rounded-full" style={{ backgroundColor: `${ink}0.12)` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
