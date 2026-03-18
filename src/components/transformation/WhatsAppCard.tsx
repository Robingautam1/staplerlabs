"use client";

import { useState, useEffect } from "react";

const font = "var(--font-inter), Inter, sans-serif";
const ink = "rgba(var(--ink-rgb),";

type Msg = { from: "user" | "bot" | "typing" | "pill"; text: string; at: number };

const messages: Msg[] = [
  { from: "user", text: "Hi, are you open tomorrow?", at: 0 },
  { from: "typing", text: "", at: 800 },
  { from: "bot", text: "Yes! We're open 10am–8pm tomorrow.\nWould you like to book a slot?", at: 1200 },
  { from: "user", text: "Yes please, 3pm works?", at: 2000 },
  { from: "typing", text: "", at: 2800 },
  { from: "bot", text: "Done ✓ Booked for tomorrow\n3:00 PM. See you then!", at: 3500 },
  { from: "pill", text: "Appointment Confirmed", at: 4800 },
];

export default function WhatsAppCard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t >= 6000 ? 0 : t + 50));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const visible = messages.filter((m) => m.at <= time);
  const showTyping = visible.some((m) => m.from === "typing") && !visible.some((m) => m.from === "bot" && m.at > (visible.find((v) => v.from === "typing")?.at || 0));
  const lastTypingAt = [...visible].reverse().find((m) => m.from === "typing")?.at || 0;
  const nextBotAfterTyping = messages.find((m) => m.from === "bot" && m.at > lastTypingAt);
  const isCurrentlyTyping = nextBotAfterTyping && time >= lastTypingAt && time < nextBotAfterTyping.at;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-full max-w-[220px] rounded-2xl overflow-hidden"
        style={{ border: `1px solid ${ink}0.12)`, backgroundColor: "var(--bg-card)" }}
      >
        {/* WhatsApp header */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#075E54" }}>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <span style={{ fontSize: 10 }}>🏥</span>
          </div>
          <div className="flex-1">
            <p style={{ fontSize: 9, fontWeight: 600, color: "#fff", fontFamily: font }}>Dental Clinic</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 7, color: "rgba(255,255,255,0.6)", fontFamily: font }}>online</span>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="px-2 py-2 space-y-1.5" style={{ minHeight: 180, backgroundColor: `${ink}0.02)` }}>
          {visible.filter((m) => m.from !== "typing" && m.from !== "pill").map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-2 py-1.5 rounded-lg ${m.from === "user" ? "ml-auto" : ""}`}
              style={{
                backgroundColor: m.from === "user" ? "#DCF8C6" : "var(--bg-card)",
                border: m.from === "bot" ? `0.5px solid ${ink}0.08)` : "none",
                animation: "fadeSlideUp 300ms ease-out",
              }}
            >
              {m.text.split("\n").map((line, j) => (
                <p key={j} style={{ fontSize: 8, lineHeight: 1.4, color: "var(--ink)", fontFamily: font }}>{line}</p>
              ))}
              {m.from === "bot" && m.at >= 3500 && (
                <p style={{ fontSize: 6, color: `${ink}0.3)`, fontFamily: font, marginTop: 2 }}>Automated via StaplerLabs</p>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isCurrentlyTyping && (
            <div className="flex gap-1 px-2 py-2 rounded-lg w-fit" style={{ backgroundColor: "var(--bg-card)", border: `0.5px solid ${ink}0.06)` }}>
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="block w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--amber)",
                    animation: `typingDot 0.6s ease-in-out ${d * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Confirmation pill */}
          {visible.some((m) => m.from === "pill") && (
            <div
              className="mx-auto w-fit px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(37,211,102,0.12)",
                animation: "fadeSlideUp 400ms ease-out",
              }}
            >
              <span style={{ fontSize: 7, fontWeight: 600, color: "#25D366", fontFamily: font }}>✓ Appointment Confirmed</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes typingDot {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
