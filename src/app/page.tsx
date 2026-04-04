"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TransformationSection from "@/components/transformation";

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
      <section style={{ paddingTop: "100px", paddingBottom: "80px", background: "var(--bg-base)" }}>
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
            Your competitors are spending 40 percent of their revenue on digital. You are spending close to zero. StaplerLabs closes that gap &mdash; with strategy first and technology second.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ marginTop: "36px" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact" className="btn-primary">
              Get Your Business Diagnostic &mdash; Rs. 999 &rarr;
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
              { val: "Rs. 50L\u201350Cr", label: "Our revenue band" },
              { val: "30 min", label: "To your first intelligence report" },
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

        {/* Dashboard illustration */}
        <DashboardCard />
      </section>

      {/* ══════════════ THE PROBLEM ══════════════ */}
      <section style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps text-center" style={{ marginBottom: "12px" }}>Why this matters</motion.p>
            <motion.h2 variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, maxWidth: "700px", marginBottom: "48px" }}>
              You built something real.<br />
              <span style={{ color: "var(--text-secondary)" }}>The internet doesn&apos;t know it yet.</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — The Threat */}
            <motion.div className="card-theme p-8 h-full flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] as const }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1, marginBottom: "12px" }}>40–60%</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>The Threat</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none", flex: 1 }}>That is what VC-funded startups spend on digital. Not on building a better product. On making sure you never see them coming.</p>
              <div style={{ marginTop: "20px", display: "flex", alignItems: "flex-end", gap: "12px", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 28, height: 20, background: "#E5E7EB", borderRadius: 4 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", marginTop: 4, display: "block" }}>You</span>
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", marginBottom: 12 }}>40–60× more</span>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 28, height: 56, background: "#1A1A1A", borderRadius: 4 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", marginTop: 4, display: "block" }}>Them</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — The Gap */}
            <motion.div className="card-theme p-8 h-full flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1, marginBottom: "12px" }}>92%</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>The Gap</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none", flex: 1 }}>Nine out of ten businesses in your revenue band have no real digital strategy. Just a few disconnected tools and hope.</p>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} style={{ width: 16, height: 16, borderRadius: "50%", background: i === 0 ? "#1A1A1A" : "#E5E7EB" }} />
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", marginTop: "8px" }}>1 in 10 have a real strategy</p>
              </div>
            </motion.div>

            {/* Card 3 — The Cost */}
            <motion.div className="card-theme p-8 h-full flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] as const }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1, marginBottom: "12px" }}>Every month</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>The Cost</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none", flex: 1 }}>Every month your competitor shows up on Google and you do not, is a customer who will never give you a chance to prove you are better.</p>
              <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                  <div style={{ position: "absolute", top: "50%", left: 12, right: 12, height: 1, background: "#E5E7EB" }} />
                  {[
                    { label: "Month 1", sub: "Competitor runs Google Ads", color: "#1A1A1A" },
                    { label: "Month 6", sub: "You lose 30% more searches", color: "#6B7280" },
                    { label: "Month 12", sub: "They become the default", color: "#E5E7EB" },
                  ].map((d, i) => (
                    <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: d.color, margin: "0 auto", border: d.color === "#E5E7EB" ? "1px solid #9CA3AF" : "none" }} />
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", marginTop: 4, whiteSpace: "nowrap" }}>{d.label}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "9px", color: "#9CA3AF", maxWidth: 80, lineHeight: 1.3 }}>{d.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ 3I MODEL ══════════════ */}
      <section id="how-it-works" style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps-blue text-center" style={{ marginBottom: "12px" }}>How it works</motion.p>
            <motion.h2 variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, maxWidth: "700px", marginBottom: "16px" }}>
              Three steps.<br />
              <em>Thirty minutes to your first intelligence report.</em>
            </motion.h2>
            <motion.p variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "56px" }}>
              No discovery calls. No lengthy proposals. You fill a form. We send you the data. Then we talk.
            </motion.p>
          </motion.div>

          {/* Three cards with arrows */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {[
              {
                step: "01", name: "INTRODUCE", badge: "Free",
                title: "Fill a 15-minute questionnaire",
                desc: "Sector-specific. Dynamically generated for your business type. A dental clinic gets different questions from a textile distributor. Zero cost. No commitment.",
                illustration: "form",
              },
              {
                step: "02", name: "IMPRESS", badge: "Rs. 999",
                title: "Get your AI Intelligence Dashboard",
                desc: "Business Index Score, competitor map, gap analysis, and visibility assessment \u2014 generated in 30 minutes. Pay Rs. 999 to unlock your assigned StaplerLabs consultant.",
                illustration: "dial",
              },
              {
                step: "03", name: "INITIATE", badge: "24 hours",
                title: "Meet your assigned consultant",
                desc: "A StaplerLabs consultant walks you through the findings and recommends exactly what to fix first. Plain language. No slides. No upsell theatre.",
                illustration: "chat",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-stretch flex-1">
                <motion.div className="card-theme p-8 flex flex-col flex-1" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                  {/* Header row */}
                  <div className="flex items-start justify-between" style={{ marginBottom: "20px" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, color: "white", background: "var(--bg-dark)", borderRadius: "100px", padding: "4px 12px" }}>
                      {item.step}&nbsp;&nbsp;{item.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--text-muted)", background: "var(--bg-base)", borderRadius: "100px", padding: "4px 10px", border: "1px solid var(--border-default)" }}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "none", flex: 1 }}>{item.desc}</p>
                  {/* Mini illustration */}
                  <div style={{ marginTop: "20px", height: "80px" }}>
                    {item.illustration === "form" && (
                      <svg viewBox="0 0 200 80" fill="none" style={{ width: "100%", height: "100%" }}>
                        <rect x="10" y="8" width="180" height="16" rx="4" fill="var(--border-default)" />
                        <rect x="10" y="32" width="180" height="16" rx="4" fill="var(--border-default)" />
                        <rect x="10" y="32" width="4" height="16" rx="2" fill="var(--accent-blue)" />
                        <path d="M178 38 L182 42 L178 46" stroke="var(--text-faint)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <rect x="10" y="56" width="180" height="16" rx="4" fill="var(--border-default)" />
                      </svg>
                    )}
                    {item.illustration === "dial" && (
                      <svg viewBox="0 0 200 80" fill="none" style={{ width: "100%", height: "100%" }}>
                        <circle cx="100" cy="36" r="24" stroke="var(--border-default)" strokeWidth="3.5" fill="none" />
                        <circle cx="100" cy="36" r="24" stroke="var(--text-primary)" strokeWidth="3.5" fill="none" strokeDasharray="150.8" strokeDashoffset="43" strokeLinecap="round" transform="rotate(-90 100 36)" />
                        <text x="100" y="40" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: "14px", fill: "var(--text-primary)" }}>72</text>
                        <rect x="60" y="68" width="48" height="6" rx="3" fill="var(--text-primary)" opacity="0.6" />
                        <rect x="114" y="68" width="28" height="6" rx="3" fill="var(--text-primary)" opacity="0.35" />
                      </svg>
                    )}
                    {item.illustration === "chat" && (
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", background: "var(--bg-dark)", color: "white", borderRadius: "12px", padding: "10px 14px", display: "inline-block", maxWidth: "220px" }}>
                          Your 3 priority actions are ready.
                        </div>
                        <div className="flex items-center gap-2" style={{ marginTop: "10px" }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--bg-base)", border: "1px solid var(--border-default)" }} />
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--text-muted)" }}>Arjun M. &mdash; Consultant</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
                {/* Arrow between cards */}
                {i < 2 && (
                  <div className="hidden md:flex flex-col items-center justify-center" style={{ width: "56px", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>
                      {i === 0 ? "30 min" : "24 hrs"}
                    </span>
                    <span style={{ fontSize: "18px", color: "var(--text-faint)", marginTop: "4px" }}>&rarr;</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dark callout */}
          <motion.div
            style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "40px 48px", textAlign: "center", marginTop: "48px" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "26px", color: "white", lineHeight: 1.3 }}>
              &ldquo;The Rs. 999 is not a consultation fee.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "#9CA3AF", marginTop: "12px", maxWidth: "600px", margin: "12px auto 0", lineHeight: 1.7 }}>
              Most consultants charge lakhs to tell you what we tell you in 30 minutes. We built the AI to do the heavy lifting so you pay for insight, not for someone&apos;s time.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, background: "white", color: "var(--bg-dark)", borderRadius: "100px", padding: "14px 28px" }}
              >
                Start Your Diagnostic &mdash; Rs. 999 &rarr;
              </Link>
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
              <em>but the internet acts like you do not exist —</em>
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

          {/* Three qualification cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — You Are A Fit If */}
            <motion.div className="card-theme p-7 h-full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-primary)", marginBottom: "16px" }}>You are probably a fit.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Been in business 5 or more years", "Doing Rs. 50 Lakh to Rs. 50 Crore a year", "Barely any presence online or a broken one", "You make the decisions in your business", "You are in Delhi NCR"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 — Your Situation (dark) */}
            <motion.div style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "28px" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-faint)", marginBottom: "16px" }}>Here is what we hear.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["You have watched newer businesses steal customers you should have had", "You tried an agency once and it went nowhere", "Nobody has ever shown you where you actually stand versus your competitors", "Your business is good. Nobody online knows it"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "#4B5563", flexShrink: 0 }}>&rarr;</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — Not A Fit If */}
            <motion.div className="card-theme p-7 h-full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>We will tell you honestly.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["If your revenue is below Rs. 50 Lakh, this engagement will not pay off for you yet. Come back when you get there.", "If you are already digital-first, you do not need us", "If you want only a website with no strategy, there are cheaper options"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-faint)", flexShrink: 0 }}>✗</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ THE TRANSFORMATION — Before/After Bento Grid ══════════════ */}
      <TransformationSection />

      {/* ══════════════ PRICING ══════════════ */}
      <section style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps text-center" style={{ marginBottom: "12px" }}>Pricing</motion.p>
            <motion.h2 variants={childV} className="text-center" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "16px" }}>
              Transparent pricing.<br />
              <em>No hidden retainers.</em>
            </motion.h2>
            <motion.p variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "var(--text-muted)", maxWidth: "540px", marginBottom: "56px" }}>
              Consulting and technology are always separate line items. You see exactly what you are paying for.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Diagnostic */}
            <motion.div className="card-theme p-7 flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>Diagnostic</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "var(--text-primary)", marginTop: "4px" }}>Rs. 999</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>one-time</p>
              <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["AI Business Intelligence Dashboard", "Business Index Score", "Competitor Intelligence Report", "Gap Analysis and Visibility Assessment", "1-hour guide session with consultant"].map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary justify-center w-full" style={{ marginTop: "24px" }}>Start Diagnostic</Link>
            </motion.div>

            {/* Starter Bundle — elevated dark */}
            <motion.div
              className="relative flex flex-col"
              style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "28px", boxShadow: "0 12px 40px rgba(0,0,0,0.20)", transform: "translateY(-8px)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: "var(--accent-yellow)", color: "var(--bg-dark)", borderRadius: "100px", padding: "3px 10px" }}>Most Popular</span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#9CA3AF", fontWeight: 500 }}>Starter Bundle</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "white", marginTop: "4px" }}>Rs. 9,999</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6B7280" }}>+ tech quoted separately</p>
              <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Everything in Diagnostic", "3-hour deep-dive strategic session", "Written Digital Positioning Report", "90-Day Strategic Roadmap", "Tech team access for scoping"].map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span style={{ color: "#6B7280", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block text-center w-full" style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, background: "white", color: "var(--bg-dark)", borderRadius: "100px", padding: "14px 28px", marginTop: "24px" }}>Get Started</Link>
            </motion.div>

            {/* Strategic Retainer */}
            <motion.div className="card-theme p-7 flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>Strategic Retainer</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--text-primary)", marginTop: "4px" }}>Rs. 30K&ndash;50K</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>per month + tech quoted separately</p>
              <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Everything in Starter Bundle", "Ongoing strategic consulting", "Monthly Competitor Intelligence", "Digital positioning management", "Tech team on-call for scoping"].map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary justify-center w-full" style={{ marginTop: "24px" }}>Talk to Us</Link>
            </motion.div>
          </div>

          <p className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)", maxWidth: "540px", marginTop: "24px" }}>
            All technology products are scoped and approved separately before any build begins. Website builds, WhatsApp automation, Google Ads, chatbots &mdash; each quoted individually. No surprise invoices.
          </p>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 0" }}>
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, color: "white" }}>
            Ready to find out exactly<br />
            <em>where your business stands?</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "#9CA3AF", marginTop: "16px", lineHeight: 1.7 }}>
            One questionnaire. Thirty minutes. Your complete Business Intelligence Dashboard. No pitch deck. No pressure.
          </p>
          <div style={{ marginTop: "36px" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 500, background: "white", color: "var(--bg-dark)", borderRadius: "100px", padding: "16px 32px" }}
            >
              Get Your Business Diagnostic &mdash; Rs. 999 &rarr;
            </Link>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#6B7280", marginTop: "20px" }}>
            work@staplerlabs.com &nbsp;&middot;&nbsp; +91 8292511007 (WhatsApp)
          </p>
        </motion.div>
      </section>
    </>
  );
}

/* ══════════════ DASHBOARD CARD (Hero illustration) ══════════════ */
function DashboardCard() {
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
    <div ref={ref} style={{ position: "relative", maxWidth: "780px", margin: "72px auto 0" }}>
      {/* Large blob behind card */}
      <svg viewBox="0 0 600 480" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: "-50px", right: "-80px", width: "600px", height: "480px", zIndex: 0, pointerEvents: "none" }}>
        <path d="M 80,100 C 160,-40 440,-20 520,80 C 600,180 580,360 460,420 C 340,480 100,460 40,340 C -20,220 0,240 80,100 Z" fill="#B8D4F5" opacity="0.18" />
      </svg>
      {/* Small blob bottom-left */}
      <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: "200px", left: "-60px", width: "300px", height: "240px", zIndex: 0, pointerEvents: "none" }}>
        <path d="M 40,60 C 80,-20 200,-10 240,50 C 280,110 260,200 180,220 C 100,240 0,200 40,60 Z" fill="#D4E8C2" opacity="0.15" />
      </svg>

      <motion.div
        style={{ position: "relative", zIndex: 1, background: "white", borderRadius: "20px", boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)", padding: 0, overflow: "hidden" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* TOP HEADER BAR */}
        <div style={{ height: "48px", background: "#F8F7F4", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#9CA3AF", fontWeight: 500 }}>Business Intelligence Dashboard</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#9CA3AF" }}>Generated in 30 min</span>
        </div>

        {/* CARD BODY */}
        <div style={{ padding: "24px" }}>
          {/* ROW 1 — Score and arc */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "64px", color: "#1A1A1A", lineHeight: 1 }}>{count}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "#9CA3AF", verticalAlign: "middle" }}>/100</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>Business Index Score</p>
            </div>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" stroke="#E5E7EB" strokeWidth="5" fill="none" />
              <motion.circle
                cx="40" cy="40" r="35"
                stroke="#1A1A1A" strokeWidth="5" fill="none"
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
                strokeDasharray="219.9"
                initial={{ strokeDashoffset: 219.9 }}
                animate={isInView ? { strokeDashoffset: 61.6 } : {}}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
              />
            </svg>
          </div>

          {/* ROW 2 — Four metric chips */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
            {[
              { label: "Online Visibility", val: "Low", color: "#EF4444" },
              { label: "Competitors", val: "8 found", color: "#1A1A1A" },
              { label: "Critical Gaps", val: "5 issues", color: "#EF4444" },
              { label: "Status", val: "Action needed", color: "#F59E0B" },
            ].map((chip, i) => (
              <div key={i} style={{ background: "#F8F7F4", borderRadius: "8px", padding: "10px 14px", flex: "1 1 0" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF" }}>{chip.label}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 700, color: chip.color }}>{chip.val}</p>
              </div>
            ))}
          </div>

          {/* DIVIDER */}
          <div style={{ height: 1, background: "#F3F4F6", margin: "20px 0" }} />

          {/* ROW 3 — Two columns */}
          <div style={{ display: "flex", gap: 0 }}>
            {/* Left — Gap Analysis */}
            <div style={{ width: "50%", paddingRight: "16px", borderRight: "1px solid #F3F4F6" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Gap Analysis</p>
              {[
                { dot: "#EF4444", text: "No Google Business Profile" },
                { dot: "#EF4444", text: "Not ranking on local search" },
                { dot: "#F59E0B", text: "Zero review presence" },
                { dot: "#F59E0B", text: "No WhatsApp pipeline" },
                { dot: "#EF4444", text: "3 competitors outranking you on Maps" },
              ].map((g, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: g.dot, flexShrink: 0, marginTop: "5px" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", lineHeight: 1.4 }}>{g.text}</span>
                </motion.div>
              ))}
            </div>
            {/* Right — Recommendations */}
            <div style={{ width: "50%", paddingLeft: "16px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Recommendations</p>
              {[
                "Set up Google Business Profile + local SEO",
                "Build mobile-first website with booking",
                "Deploy WhatsApp automation pipeline",
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#1A1A1A", color: "white", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#374151", lineHeight: 1.4 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{ height: "40px", background: "#F8F7F4", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", padding: "0 24px", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#9CA3AF" }}>Diagnostic completed · 28 Mar 2026</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, background: "#1A1A1A", color: "white", padding: "4px 12px", borderRadius: "100px" }}>View full report →</span>
        </div>
      </motion.div>
    </div>
  );
}
