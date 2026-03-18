"use client";

import { motion } from "framer-motion";

const font = "var(--font-inter), Inter, sans-serif";

/**
 * CaseStudyMockup — iPhone 16 Pro style, proper proportions.
 * Div-based flex layout: WhatsApp header → chat → Google card → bar chart.
 */
export default function CaseStudyMockup() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: 260,
          height: 530,
          borderRadius: 42,
          border: "2.5px solid rgba(255,255,255,0.12)",
          background: "linear-gradient(145deg, #1C1C1E 0%, #131313 100%)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset",
          overflow: "hidden",
        }}
      >
        {/* Side buttons — left */}
        <div className="absolute -left-[3px] top-[110px] w-[3px] h-[24px] rounded-l-sm" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
        <div className="absolute -left-[3px] top-[148px] w-[3px] h-[18px] rounded-l-sm" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
        {/* Side button — right */}
        <div className="absolute -right-[3px] top-[130px] w-[3px] h-[28px] rounded-r-sm" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

        {/* Screen area */}
        <div
          className="absolute flex flex-col"
          style={{
            top: 6,
            left: 6,
            right: 6,
            bottom: 6,
            borderRadius: 36,
            overflow: "hidden",
            backgroundColor: "#1A1A1C",
          }}
        >
          {/* Dynamic Island notch */}
          <div className="relative z-10 flex justify-center" style={{ paddingTop: 10, paddingBottom: 4 }}>
            <div
              style={{
                width: 72,
                height: 24,
                borderRadius: 12,
                backgroundColor: "#000",
              }}
            />
          </div>

          {/* 1. WhatsApp header */}
          <div
            className="flex items-center gap-2.5 px-3.5 shrink-0"
            style={{ height: 48, backgroundColor: "#075E54" }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
              <span style={{ fontSize: 14 }}>🏥</span>
            </div>
            <div className="flex-1">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", fontFamily: font, letterSpacing: "-0.01em" }}>StaplerLabs</p>
            </div>
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "#25D366" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>

          {/* 2. Chat area */}
          <div className="flex-1 flex flex-col justify-center gap-3 px-3 py-4" style={{ backgroundColor: "#0B141A" }}>
            {/* User bubble */}
            <motion.div
              className="self-start max-w-[78%] px-3 py-2.5 rounded-2xl rounded-tl-md"
              style={{ backgroundColor: "#005C4B" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p style={{ fontSize: 12.5, color: "#E9EDEF", fontFamily: font, lineHeight: 1.45 }}>
                Hi, I&apos;d like to book an appointment for Thursday
              </p>
            </motion.div>

            {/* Bot reply */}
            <motion.div
              className="self-end max-w-[82%] px-3 py-2.5 rounded-2xl rounded-tr-md"
              style={{ backgroundColor: "#1F2C34" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p style={{ fontSize: 12.5, color: "#E9EDEF", fontFamily: font, lineHeight: 1.45 }}>
                Done! You&apos;re booked for Thu 3:30 PM with the dentist.
              </p>
              <p style={{ fontSize: 9, color: "rgba(233,237,239,0.4)", fontFamily: font, marginTop: 4 }}>
                Automated via StaplerLabs
              </p>
            </motion.div>
          </div>

          {/* 3. Google Business card */}
          <motion.div
            className="shrink-0 mx-2.5 rounded-xl mb-2"
            style={{
              backgroundColor: "#202124",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "10px 12px",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex gap-2.5 mb-2.5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                  <path d="M10 2C7 2 4.5 4.5 4.5 7.5C4.5 11.5 10 18 10 18S15.5 11.5 15.5 7.5C15.5 4.5 13 2 10 2Z" fill="#EA4335" opacity="0.85" />
                  <circle cx="10" cy="7.5" r="2" fill="white" opacity="0.9" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 13, fontWeight: 600, color: "#E8EAED", fontFamily: font }}>Dental Clinic</p>
                <p style={{ fontSize: 10, color: "#FBBC04", fontFamily: font, marginTop: 1 }}>4.8 ★★★★★ · 127 reviews</p>
                <p style={{ fontSize: 10, color: "#34A853", fontFamily: font, marginTop: 1 }}>Open now · Closes 8 PM</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 py-1.5 rounded-lg text-center" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 500 }}>Directions</span>
              </div>
              <div className="flex-1 py-1.5 rounded-lg text-center" style={{ backgroundColor: "rgba(52,168,83,0.15)" }}>
                <span style={{ fontSize: 10, color: "#34A853", fontFamily: font, fontWeight: 600 }}>Book</span>
              </div>
            </div>
          </motion.div>

          {/* 4. Bar chart */}
          <motion.div
            className="shrink-0 mx-2.5 rounded-xl mb-2"
            style={{
              backgroundColor: "#202124",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "10px 12px",
              height: 110,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, color: "#E8EAED", fontFamily: font }}>Online Appointments</p>
            <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.35)", fontFamily: font, marginBottom: 8 }}>This month</p>
            <div className="flex items-end gap-1.5" style={{ height: 50 }}>
              {[14, 24, 20, 32, 28, 40, 50].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ backgroundColor: "#FBBC04", opacity: 0.5 + i * 0.06 }}
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
            <div className="w-[56px] h-[4px] rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
