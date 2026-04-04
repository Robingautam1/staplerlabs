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
              maxWidth: "520px",
              margin: "24px auto 0",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategic consulting and technology execution for established Indian businesses doing Rs. 50 Lakh to Rs. 50 Crore &mdash; competing in an era built against them.
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
            {[
              { stat: "40\u201360%", title: "The Threat", desc: "of revenue is spent on digital by VC-funded startups. They\u2019re not better than you \u2014 they\u2019re just better at the internet." },
              { stat: "92%", title: "The Gap", desc: "of SMBs in the Rs. 50L\u201350Cr band have no integrated digital strategy. Your competitors aren\u2019t the problem \u2014 your invisibility is." },
              { stat: "Every month", title: "The Cost", desc: "without a digital strategy is market share lost permanently. Customers who can\u2019t find you online find someone else." },
            ].map((card, i) => (
              <motion.div key={i} className="card-theme p-8 h-full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1, marginBottom: "12px" }}>{card.stat}</p>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>{card.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>{card.desc}</p>
              </motion.div>
            ))}
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
              Every engagement follows the same proven model. No sales pitch. No fluff. Just intelligence, then action.
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
              It is a diagnostic product that most consulting firms charge lakhs to produce. You get it in 30 minutes. Whether or not you continue with StaplerLabs, you walk away knowing exactly where your business stands.
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
              Built for businesses that are<br />
              <em>too serious to ignore digital.</em>
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
              <p className="label-caps" style={{ color: "var(--text-primary)", marginBottom: "16px" }}>You are a fit if</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["5 or more years in operation", "Rs. 50 Lakh to Rs. 50 Crore revenue", "Minimal or fragmented digital presence", "You are the primary decision-maker", "Based in Delhi NCR"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>&check;</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 — Your Situation (dark) */}
            <motion.div style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "28px" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-faint)", marginBottom: "16px" }}>Your situation</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Digital-first competitors gaining your customers", "Previous agency or freelancer disappointed you", "No credible strategic partner at a sensible price", "Your business is good \u2014 the internet does not show it"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "#4B5563", flexShrink: 0 }}>&rarr;</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — Not A Fit If */}
            <motion.div className="card-theme p-7 h-full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>Not a fit if</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Revenue below Rs. 50 Lakh", "New startup with no track record", "Already digital-first business", "Want only a single deliverable"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-faint)", flexShrink: 0 }}>&times;</span>
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
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>&check;</span>
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
                    <span style={{ color: "#6B7280", fontWeight: 600, flexShrink: 0 }}>&check;</span>
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
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>&check;</span>
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

  const gapItems = [
    { dot: "var(--accent-red)", text: "No Google Business Profile" },
    { dot: "var(--accent-red)", text: "Website not mobile-optimised" },
    { dot: "var(--accent-amber)", text: "Zero review presence" },
    { dot: "var(--accent-amber)", text: "No WhatsApp pipeline" },
    { dot: "var(--accent-red)", text: "Competitors outranking on Maps" },
  ];

  const recs = [
    "Google Business Profile setup + local SEO",
    "Mobile-first website with booking",
    "WhatsApp automation pipeline",
  ];

  return (
    <div ref={ref} className="relative mx-auto px-6" style={{ maxWidth: "720px", marginTop: "64px" }}>
      {/* Decorative blob */}
      <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: "-40px", right: "-60px", width: "500px", height: "400px", zIndex: 0, pointerEvents: "none" }}>
        <path d="M 60,80 C 120,-20 320,-20 400,60 C 480,140 500,260 420,330 C 340,400 140,420 60,340 C -20,260 0,180 60,80 Z" fill="#B8D4F5" opacity="0.22" />
      </svg>

      <motion.div
        style={{ position: "relative", zIndex: 1, background: "var(--bg-surface)", borderRadius: "20px", boxShadow: "var(--shadow-hero-card)", padding: "28px", width: "100%" }}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Business Intelligence Dashboard</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)", marginTop: "2px" }}>Generated in 30 minutes from your questionnaire</p>
          </div>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="24" stroke="var(--border-default)" strokeWidth="3.5" fill="none" />
            <motion.circle
              cx="28" cy="28" r="24"
              stroke="var(--text-primary)" strokeWidth="3.5" fill="none"
              strokeLinecap="round"
              transform="rotate(-90 28 28)"
              strokeDasharray="150.8"
              initial={{ strokeDashoffset: 150.8 }}
              animate={isInView ? { strokeDashoffset: 43 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            <text x="28" y="29" textAnchor="middle" dominantBaseline="middle" style={{ fontFamily: "var(--font-display)", fontSize: "14px", fill: "var(--text-primary)" }}>{count}</text>
          </svg>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0" style={{ marginTop: "20px", borderTop: "1px solid var(--border-subtle)", paddingTop: "16px" }}>
          {[
            { label: "BUSINESS INDEX", val: "72/100", color: "var(--text-primary)" },
            { label: "ONLINE VISIBILITY", val: "Low", color: "var(--accent-red)" },
            { label: "COMPETITORS", val: "8", color: "var(--text-primary)" },
            { label: "CRITICAL GAPS", val: "5", color: "var(--accent-red)" },
          ].map((m, i) => (
            <div key={i} style={{ padding: "0 12px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.label}</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: m.color, marginTop: "4px" }}>{m.val}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />

        {/* Two column section */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Gap Analysis */}
          <div>
            <p className="label-caps" style={{ marginBottom: "10px" }}>Gap Analysis</p>
            {gapItems.map((g, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                style={{ marginBottom: "6px" }}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: g.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-secondary)" }}>{g.text}</span>
              </motion.div>
            ))}
          </div>
          {/* Strategic Recommendations */}
          <div>
            <p className="label-caps" style={{ marginBottom: "10px" }}>Strategic Recommendations</p>
            {recs.map((r, i) => (
              <div key={i} className="flex items-start gap-2" style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "var(--text-primary)", minWidth: "16px", flexShrink: 0, marginTop: "1px" }}>{i + 1}.</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
