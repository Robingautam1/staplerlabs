"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TransformationSection from "@/components/transformation";
import HeroDashboard3D from "@/components/HeroDashboard3D";

/* ── Animation variants ── */
const sectionV = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const childV = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://staplerlabs.com/#organization",
      name: "StaplerLabs",
      url: "https://staplerlabs.com",
      logo: { "@type": "ImageObject", url: "https://staplerlabs.com/og-image.png", width: 1200, height: 630 },
      contactPoint: { "@type": "ContactPoint", telephone: "+91-82925-11007", contactType: "customer service", availableLanguage: ["English", "Hindi"] },
      email: "work@staplerlabs.com",
      sameAs: ["https://www.instagram.com/staplerlabs"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://staplerlabs.com/#localbusiness",
      name: "StaplerLabs",
      description: "StaplerLabs is the strategic consulting and technology execution partner for established Indian businesses doing Rs. 50 Lakh to Rs. 50 Crore.",
      url: "https://staplerlabs.com",
      telephone: "+91-82925-11007",
      email: "work@staplerlabs.com",
      address: { "@type": "PostalAddress", addressLocality: "Delhi NCR", addressCountry: "IN", addressRegion: "Delhi" },
      priceRange: "\u20b9\u20b9",
      openingHours: "Mo-Fr 10:00-19:00",
      image: "https://staplerlabs.com/og-image.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://staplerlabs.com/#website",
      url: "https://staplerlabs.com",
      name: "StaplerLabs",
      publisher: { "@id": "https://staplerlabs.com/#organization" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════════ HERO ══════════════ */}
      <section style={{ paddingTop: "100px", paddingBottom: "80px", background: "var(--bg-base)", width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
        <div className="relative z-10 mx-auto px-6 text-center" style={{ maxWidth: "720px" }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 68px)",
              fontWeight: 400,
              color: "var(--text-primary)",
              lineHeight: 1.08,
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            The internet favours startups.<br />
            We level the field for businesses<br />
            that <em>actually</em> built something.
          </motion.h1>

          <motion.p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              color: "var(--text-muted)",
              textAlign: "center",
              maxWidth: "540px",
              margin: "24px auto 0",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Your competitors are not better than you. They are more visible. They are spending 40 percent of their revenue making sure customers find them first &mdash; on Google, on WhatsApp, on every search that should be sending people to you. StaplerLabs diagnoses exactly where you are losing and builds the systems to fix it.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ marginTop: "36px" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/auth/signup" className="btn-primary">
              Get Your Business Diagnostic &rarr;
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </motion.div>

          {/* ── Stats row with dividers ── */}
          <motion.div
            className="flex items-center justify-center gap-0"
            style={{ marginTop: "52px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.8 }}
          >
            {[
              { val: "63M+", label: "SMBs in India" },
              { val: "24 hrs", label: "To your consultant" },
              { val: "30 min", label: "To your first report" },
            ].map((s, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div style={{ width: 1, height: 32, background: "var(--border-default)", margin: "0 24px" }} />
                )}
                <div className="text-center">
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 400, color: "var(--text-primary)" }}>{s.val}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard illustration — 3D floating card */}
        <HeroDashboard3D />
      </section>

      {/* ══════════════ THE PROBLEM ══════════════ */}
      <section style={{ background: "var(--bg-base)" }}>
        <div
          className="problem-grid"
          style={{ maxWidth: "1140px", margin: "0 auto", padding: "100px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
        >
          {/* LEFT — Blue container with 2x2 card grid */}
          <motion.div
            style={{ position: "relative", width: "100%" }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div style={{ background: "#D6E4F7", borderRadius: "24px", padding: "32px", width: "100%", minHeight: "500px", position: "relative", overflow: "hidden" }}>
              {/* Top row */}
              <div style={{ display: "flex", gap: "12px" }}>
                {/* Card A — Competitor Google Listing */}
                <div style={{ flex: 1, background: "white", borderRadius: "14px", padding: "16px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-2" style={{ marginBottom: "10px" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#6B7280" }}>Competitor</span>
                  </div>
                  <div style={{ marginBottom: "2px" }}>
                    <span style={{ color: "#F59E0B", fontSize: "12px" }}>{"\u2605\u2605\u2605\u2605"}</span><span style={{ color: "#E5E7EB", fontSize: "12px" }}>{"\u2605"}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#374151", marginTop: "2px" }}>4.8 (127 reviews)</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#9CA3AF", marginTop: "4px" }}>Dental Clinic, Sector 15, Noida</p>
                  <span style={{ display: "inline-block", marginTop: "10px", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, background: "#1A1A1A", color: "white", borderRadius: "100px", padding: "6px 14px" }}>Book Appointment</span>
                </div>

                {/* Card C — WhatsApp Conversation */}
                <div style={{ flex: 1, background: "white", borderRadius: "14px", padding: "16px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>WhatsApp</p>
                  <div style={{ background: "#F3F4F6", borderRadius: "10px 10px 10px 0", padding: "8px 12px", maxWidth: "85%", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#374151" }}>Hi, are you open tomorrow?</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "#25D366", borderRadius: "10px 10px 0 10px", padding: "8px 12px", maxWidth: "85%" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "white" }}>Yes! Book your slot here:</span>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", textAlign: "right", marginTop: "6px" }}>Responded in 3 sec</p>
                </div>
              </div>

              {/* Bottom row */}
              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                {/* Card B — Your Business (faded) */}
                <div style={{ flex: 1, background: "white", borderRadius: "14px", padding: "16px", border: "1px solid rgba(0,0,0,0.06)", opacity: 0.6 }}>
                  <div className="flex items-center gap-2" style={{ marginBottom: "10px" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#9CA3AF" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#9CA3AF" }}>Your Business</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#9CA3AF", marginBottom: "8px" }}>No reviews yet</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <div style={{ height: 7, borderRadius: 4, background: "#E5E7EB", width: "100%" }} />
                    <div style={{ height: 7, borderRadius: 4, background: "#E5E7EB", width: "75%" }} />
                    <div style={{ height: 7, borderRadius: 4, background: "#E5E7EB", width: "55%" }} />
                  </div>
                </div>

                {/* Card D — Search Results */}
                <div style={{ flex: 1, background: "white", borderRadius: "14px", padding: "16px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Search Results</p>
                  {[
                    { dot: "#22C55E", name: "City Dental Care", nameWeight: 600, nameColor: "#1A1A1A", nameItalic: false, rating: "4.8 \u2605", ratingSize: "11px", ratingColor: "#F59E0B" },
                    { dot: "#9CA3AF", name: "Smile Experts", nameWeight: 400, nameColor: "#374151", nameItalic: false, rating: "4.2 \u2605", ratingSize: "11px", ratingColor: "#9CA3AF" },
                    { dot: "#EF4444", name: "Your Business", nameWeight: 400, nameColor: "#9CA3AF", nameItalic: true, rating: "Not found", ratingSize: "10px", ratingColor: "#EF4444" },
                  ].map((row, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }}>
                      <div className="flex items-center gap-2">
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: row.dot, flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: row.nameWeight, color: row.nameColor, fontStyle: row.nameItalic ? "italic" : "normal" }}>{row.name}</span>
                      </div>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: row.ratingSize, color: row.ratingColor, fontWeight: row.rating === "Not found" ? 500 : 400, flexShrink: 0 }}>{row.rating}</span>
                    </div>
                  ))}
                  <div style={{ height: 1, background: "#F3F4F6", margin: "8px 0" }} />
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF" }}>Searched: dental clinic near me</p>
                </div>
              </div>

              {/* Caption below cards */}
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#5B7BA8", fontStyle: "italic", marginTop: "16px" }}>
                Your competitor is responding. You are not.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "20px" }}>Why this matters</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4.5vw, 56px)", fontWeight: 400, color: "#1A1A1A", lineHeight: 1.15, marginBottom: "40px" }}>
              You built something real.<br />
              <em>The internet just does not know it yet.</em>
            </h2>

            {/* Stat rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "40px" }}>
              {[
                { color: "#EF4444", value: "40\u201360%", label: "of their revenue into making sure your customers find them first" },
                { color: "#F59E0B", value: "9 in 10", label: "businesses in your revenue band have no real digital strategy" },
                { color: "#1A1A1A", value: "Every month", label: "a customer finds your competitor instead \u2014 and never comes back" },
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: 4, minHeight: 52, borderRadius: 2, background: stat.color, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "44px", fontWeight: 400, color: "#1A1A1A", lineHeight: 1, display: "block" }}>{stat.value}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#6B7280", lineHeight: 1.4, marginTop: "4px", display: "block" }}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section id="how-it-works" style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps-blue text-center" style={{ marginBottom: "12px" }}>How it works</motion.p>
            <motion.h2 variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, maxWidth: "700px", marginBottom: "16px" }}>
              Three steps.<br />
              <em>Thirty minutes to clarity.</em>
            </motion.h2>
            <motion.p variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "56px" }}>
              No discovery calls. No lengthy proposals. You fill a form, we run the analysis, and then we talk about what matters.
            </motion.p>
          </motion.div>

          {/* Warm yellow container */}
          <motion.div
            style={{ background: "#FDF6E3", borderRadius: "24px", padding: "48px", width: "100%", position: "relative", overflow: "hidden" }}
            className="hiw-container"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "480px 1fr", gap: "48px", alignItems: "start" }} className="hiw-inner-grid">
              {/* LEFT — Mini dashboard card */}
              <div style={{ background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                {/* macOS dots */}
                <div className="flex items-center gap-1.5" style={{ marginBottom: "16px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#9CA3AF", marginLeft: "8px" }}>Business Intelligence Dashboard</span>
                </div>
                {/* Score circle + metric chips */}
                <div className="flex items-center gap-6">
                  <div style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="32" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                      <circle cx="40" cy="40" r="32" stroke="#1A1A1A" strokeWidth="6" fill="none" strokeDasharray="201" strokeDashoffset="56" strokeLinecap="round" transform="rotate(-90 40 40)" />
                    </svg>
                    <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-display)", fontSize: "22px", color: "#1A1A1A" }}>72</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#374151", background: "#F3F4F6", borderRadius: "6px", padding: "4px 10px" }}>SEO: Weak</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#374151", background: "#F3F4F6", borderRadius: "6px", padding: "4px 10px" }}>GMB: Not optimized</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#374151", background: "#F3F4F6", borderRadius: "6px", padding: "4px 10px" }}>Reviews: 3 vs 127</div>
                  </div>
                </div>
                {/* Recommendations */}
                <div style={{ marginTop: "16px", borderTop: "1px solid #F3F4F6", paddingTop: "12px" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Priority actions</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {["Claim & optimize Google listing", "Launch review collection", "Fix website mobile speed"].map((a, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: i === 0 ? "#EF4444" : i === 1 ? "#F59E0B" : "#3B82F6", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#374151" }}>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Step flow */}
              <div>
                {[
                  { num: "01", title: "Fill a 15-minute questionnaire", sub: "The questions are specific to your business. No jargon, no preparation needed.", tag: "Free", tagDark: false },
                  { num: "02", title: "Get your Business Intelligence Dashboard", sub: "Within 30 minutes you see your score, competitors, and where you are losing visibility.", tag: "One-time", tagDark: true },
                  { num: "03", title: "Speak to your consultant", sub: "A real person, assigned to your account. No slides. No pressure. Just honest advice.", tag: "Within 24 hours", tagDark: false },
                ].map((step, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3">
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1A1A", color: "white", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {step.num}
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 600, color: "#1A1A1A" }}>{step.title}</p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6B7280", marginTop: "2px" }}>{step.sub}</p>
                        <span style={{ display: "inline-block", marginTop: "6px", fontFamily: "var(--font-body)", fontSize: "11px", borderRadius: "100px", padding: "2px 10px", background: step.tagDark ? "#1A1A1A" : "white", color: step.tagDark ? "white" : "#6B7280" }}>{step.tag}</span>
                      </div>
                    </div>
                    {i < 2 && (
                      <div style={{ width: "2px", height: "24px", borderLeft: "2px dashed #D4C4A0", marginLeft: "14px", marginTop: "8px", marginBottom: "8px" }} />
                    )}
                  </div>
                ))}

                {/* Callout strip */}
                <div style={{ background: "rgba(0,0,0,0.06)", borderRadius: "10px", padding: "12px 16px", marginTop: "24px" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", fontStyle: "italic" }}>
                    The Rs. 999 is not a consultation fee. Most firms take days and charge significantly more for the same clarity. Whether or not you continue with StaplerLabs, you will finally know where you stand.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ WHO THIS IS FOR ══════════════ */}
      <section style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps text-center" style={{ marginBottom: "12px" }}>Who this is for</motion.p>
            <motion.h2 variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, maxWidth: "800px", marginBottom: "48px" }}>
              If your business has been running for years<br />
              <em>but the internet treats it like it does not exist, read this carefully.</em>
            </motion.h2>
          </motion.div>

          {/* Revenue band visual */}
          <motion.div
            className="mx-auto"
            style={{ maxWidth: "600px", marginBottom: "56px" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pill label */}
            <div className="flex justify-center" style={{ marginBottom: "8px" }}>
              <div className="text-center">
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, background: "var(--text-primary)", color: "white", borderRadius: "100px", padding: "4px 14px", display: "inline-block" }}>
                  Rs. 50L &mdash; Rs. 50Cr
                </span>
                <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid var(--text-primary)", margin: "0 auto" }} />
              </div>
            </div>
            {/* Track */}
            <div style={{ height: 6, borderRadius: 100, background: "var(--border-default)", position: "relative" }}>
              <div style={{ position: "absolute", left: "15%", right: "25%", top: 0, bottom: 0, borderRadius: 100, background: "var(--text-primary)" }} />
            </div>
            <div className="flex justify-between" style={{ marginTop: "8px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>Rs. 0</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>Rs. 100Cr+</span>
            </div>
          </motion.div>

          {/* Three Craft-style colored containers */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", alignItems: "stretch" }} className="who-fit-grid">
            {/* Container 1 — You Are A Fit If (soft indigo) */}
            <motion.div
              style={{ background: "#EEF2FF", borderRadius: "20px", padding: "32px", height: "420px", position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4F46E5", marginBottom: "12px" }}>You are a fit if</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px" }}>You are probably a fit.</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Been in business 5 or more years", "Doing Rs. 50 Lakh to Rs. 50 Crore annually", "Your digital presence is weak, broken, or non-existent", "You make the decisions in your business", "You are based in Delhi NCR"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1A1A1A", color: "white", fontFamily: "var(--font-body)", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
              {/* Decorative large checkmark */}
              <span style={{ fontFamily: "var(--font-display)", fontSize: "160px", color: "rgba(0,0,0,0.04)", position: "absolute", bottom: "-20px", right: "-10px", zIndex: 0, lineHeight: 1, pointerEvents: "none" }}>✓</span>
            </motion.div>

            {/* Container 2 — Your Situation (dark) */}
            <motion.div
              style={{ background: "#1A1A1A", borderRadius: "20px", padding: "32px", height: "420px", overflow: "hidden" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "12px" }}>Your situation</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "20px" }}>We hear this a lot.</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Newer businesses with worse products showing up everywhere your customers look", "Tried an agency once \u2014 went nowhere, cost more than it should have", "Nobody has shown you where you actually stand against the competition", "Good business, but invisible to anyone searching online", "You know you need to fix this but never found the right place to start"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span style={{ color: "#F59E0B", fontFamily: "var(--font-body)", fontSize: "14px", flexShrink: 0 }}>&rarr;</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.45 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Container 3 — Not A Fit If (light gray) */}
            <motion.div
              style={{ background: "#F3F4F6", borderRadius: "20px", padding: "32px", height: "420px", overflow: "hidden" }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "12px" }}>Not a fit if</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 700, color: "#1A1A1A", marginBottom: "20px" }}>Be honest with yourself.</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Revenue below Rs. 50 Lakh \u2014 come back when you get there", "Already a digital-first business \u2014 you do not need us", "Looking only for a website with no strategy \u2014 cheaper options exist"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span style={{ color: "#EF4444", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>&times;</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6B7280", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#9CA3AF", fontStyle: "italic", marginTop: "16px" }}>
                The Rs. 50 Lakh floor is not arbitrary. Below that level, the consulting and execution this engagement requires will not pay off for either of us. We would rather tell you that now.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ SECTOR CAROUSEL ══════════════ */}
      <section style={{ background: "var(--bg-base)", overflow: "hidden", maxWidth: "100vw", paddingTop: "48px", paddingBottom: "48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        {/* Row 1 — scrolls left */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div className="carousel-row-left" style={{ display: "flex", gap: "12px", width: "max-content" }}>
            {[...Array(2)].flatMap((_, dup) => [
              { label: "Healthcare", color: "#EF4444" },
              { label: "Dental Clinics", color: "#EF4444" },
              { label: "Chartered Accountants", color: "#3B82F6" },
              { label: "Law Firms", color: "#3B82F6" },
              { label: "Coaching Institutes", color: "#F59E0B" },
              { label: "Textile Distributors", color: "#8B5CF6" },
              { label: "Restaurant Chains", color: "#22C55E" },
              { label: "Physiotherapy", color: "#EF4444" },
              { label: "Interior Designers", color: "#F59E0B" },
              { label: "Diagnostic Labs", color: "#EF4444" },
              { label: "Jewellery Stores", color: "#F59E0B" },
              { label: "Logistics", color: "#6B7280" },
            ].map((tag, i) => (
              <div key={`${dup}-${i}`} className="flex items-center gap-2" style={{ background: "#FDFCF9", border: "1px solid rgba(0,0,0,0.09)", borderRadius: "100px", padding: "8px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: tag.color }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "#374151", whiteSpace: "nowrap" }}>{tag.label}</span>
              </div>
            )))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div className="carousel-row-right" style={{ display: "flex", gap: "12px", width: "max-content" }}>
            {[...Array(2)].flatMap((_, dup) => [
              { label: "Pharma Distributors", color: "#8B5CF6" },
              { label: "Engineering Firms", color: "#3B82F6" },
              { label: "Furniture Makers", color: "#F59E0B" },
              { label: "Dry Cleaners", color: "#6B7280" },
              { label: "Auto Workshops", color: "#6B7280" },
              { label: "Opticians", color: "#EF4444" },
              { label: "Catering Services", color: "#22C55E" },
              { label: "Hardware Stores", color: "#F59E0B" },
              { label: "Photography Studios", color: "#8B5CF6" },
              { label: "Architects", color: "#3B82F6" },
              { label: "Financial Advisors", color: "#3B82F6" },
              { label: "Ayurveda Clinics", color: "#22C55E" },
            ].map((tag, i) => (
              <div key={`${dup}-${i}`} className="flex items-center gap-2" style={{ background: "#FDFCF9", border: "1px solid rgba(0,0,0,0.09)", borderRadius: "100px", padding: "8px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: tag.color }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "#374151", whiteSpace: "nowrap" }}>{tag.label}</span>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* ══════════════ THE TRANSFORMATION — Before/After Bento Grid ══════════════ */}
      <TransformationSection />

      {/* ══════════════ PRICING ══════════════ */}
      <section style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px", position: "relative", overflow: "hidden" }}>
        {/* Blob container — clipped to section bounds */}
        <div className="pricing-blob" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          {/* Left blob */}
          <svg style={{ position: "absolute", left: "0px", top: "50%", transform: "translateX(-40%) translateY(-50%)", width: "200px", height: "400px" }} viewBox="0 0 300 400" fill="none">
            <path d="M 60,80 C 120,-20 260,-10 280,80 C 300,170 260,300 180,320 C 100,340 -20,280 20,180 C 40,130 20,160 60,80 Z" fill="#B8D4F5" opacity="0.35" />
          </svg>
          {/* Right blob */}
          <svg style={{ position: "absolute", right: "0px", top: "30%", transform: "translateX(40%)", width: "180px", height: "360px" }} viewBox="0 0 260 360" fill="none">
            <path d="M 40,60 C 100,-20 220,0 240,80 C 260,160 220,280 140,300 C 60,320 -20,240 20,140 C 40,90 0,130 40,60 Z" fill="#F5C400" opacity="0.20" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps text-center" style={{ marginBottom: "12px" }}>Pricing</motion.p>
            <motion.h2 variants={childV} className="text-center" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "56px" }}>
              What it <em>actually</em> costs.
            </motion.h2>
            <motion.p variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "0" }}>
              You are paying for two things: the clarity to know what to do, and the execution to go do it. Consulting and technology are always priced separately. You see exactly what each piece costs before anything starts.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start" style={{ position: "relative", zIndex: 1, marginTop: "48px" }}>
            {/* Diagnostic */}
            <motion.div className="card-theme p-7 flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>Diagnostic</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "var(--text-primary)", marginTop: "4px" }}>Rs. 999</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>one-time</p>
              <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Business Intelligence Dashboard", "Business Index Score", "Competitor Intelligence Report", "Gap Analysis and Visibility Assessment", "One-hour session with your assigned consultant"].map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary justify-center w-full" style={{ marginTop: "auto" }}>Start Diagnostic</Link>
            </motion.div>

            {/* Starter Bundle — elevated dark */}
            <motion.div
              className="flex flex-col"
              style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "28px", boxShadow: "0 12px 40px rgba(0,0,0,0.20)", transform: "translateY(-8px)", position: "relative", overflow: "visible" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", zIndex: 10, whiteSpace: "nowrap", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: "var(--accent-yellow)", color: "var(--bg-dark)", borderRadius: "100px", padding: "3px 10px" }}>Most Popular</span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#9CA3AF", fontWeight: 500 }}>Starter Bundle</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "white", marginTop: "4px" }}>Rs. 9,999</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6B7280" }}>Technology quoted separately</p>
              <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Everything in Diagnostic", "Three-hour deep-dive strategic session", "Digital Positioning Report", "90-day roadmap with clear priorities", "Tech team access for scoping"].map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span style={{ color: "#6B7280", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block text-center w-full" style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, background: "white", color: "var(--bg-dark)", borderRadius: "100px", padding: "14px 28px", marginTop: "auto" }}>Get Started</Link>
            </motion.div>

            {/* Strategic Retainer */}
            <motion.div className="card-theme p-7 flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>Strategic Retainer</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 36px)", color: "var(--text-primary)", marginTop: "4px", whiteSpace: "nowrap" }}>Rs. 30,000&ndash;50,000</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>per month + tech quoted separately</p>
              <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Everything in Starter Bundle", "Ongoing strategic advisory", "Monthly competitor intelligence", "Continuous positioning guidance", "Tech team on call"].map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary justify-center w-full" style={{ marginTop: "auto" }}>Talk to Us</Link>
            </motion.div>
          </div>

          <p className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)", maxWidth: "540px", marginTop: "24px" }}>
            All technology builds &mdash; website, automation, WhatsApp pipelines, ads &mdash; are scoped separately. You see the number, you approve it, then we build it. No surprises.
          </p>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <section style={{ background: "#1A1A1A", padding: "80px 0" }}>
        <motion.div
          style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4B5563", marginBottom: "20px" }}>One last thing</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, color: "white", lineHeight: 1.15 }}>
            Want to know exactly<br />
            <em>where your business stands?</em>
          </h2>
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "#6B7280" }}>One questionnaire.</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "#6B7280" }}>Thirty minutes.</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "#6B7280" }}>No pressure after that.</p>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#6B7280", maxWidth: "500px", margin: "24px auto 0", lineHeight: 1.7 }}>
            Most business owners who go through the diagnostic say the same thing: they wish they had done it sooner. Not because the report tells them something they did not suspect, but because it shows them, clearly and specifically, how wide the gap actually is.
          </p>
          <div style={{ marginTop: "36px" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 500, background: "white", color: "#1A1A1A", borderRadius: "100px", padding: "16px 32px" }}
            >
              Get Your Business Diagnostic &rarr;
            </Link>
          </div>
          <div style={{ marginTop: "16px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#4B5563" }}>work@staplerlabs.com</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#4B5563" }}>+91 8292511007 (WhatsApp)</p>
          </div>
          <div style={{ width: "120px", height: "1px", background: "#2D2D2D", margin: "40px auto 0" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", letterSpacing: "0.08em", marginTop: "24px" }}>
            Diagnose. Advise. Execute. Staple.
          </p>
        </motion.div>
      </section>
    </>
  );
}

