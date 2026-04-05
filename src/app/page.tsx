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
            Your competitors are spending close to 40 percent of their revenue on digital. You are likely spending almost nothing. The gap is not about product quality. It is about visibility. StaplerLabs helps you close that gap with the right strategy first, and the right technology after.
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

        {/* Dashboard illustration — 3D floating card */}
        <HeroDashboard3D />
      </section>

      {/* ══════════════ THE PROBLEM ══════════════ */}
      <section style={{ background: "var(--bg-base)", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={sectionV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={childV} className="label-caps text-center" style={{ marginBottom: "12px" }}>Why this matters</motion.p>
            <motion.h2 variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, maxWidth: "700px", marginBottom: "48px" }}>
              You built something real.<br />
              <span style={{ color: "var(--text-secondary)" }}>The internet just does not know it yet.</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — The Threat */}
            <motion.div className="card-theme p-8 h-full flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] as const }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1, marginBottom: "12px" }}>40–60%</p>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>The Threat</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none", flex: 1 }}>Startups are not winning because they are better. They are winning because they are more visible. Many of them are putting 40 to 60 percent of their revenue into digital. Not into improving the product, but into making sure customers find them first.</p>
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
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none", flex: 1 }}>Most businesses in your revenue range do not have a real digital strategy. At best, they have a few scattered tools. A website here, a listing there. Nothing connected.</p>
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
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none", flex: 1 }}>Every time a customer searches for what you offer and finds your competitor instead, you lose that opportunity permanently. You do not even get a chance to compete.</p>
              <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                  <div style={{ position: "absolute", top: "50%", left: 12, right: 12, height: 1, background: "#E5E7EB" }} />
                  {[
                    { label: "Month 1", sub: "Your competitor starts running ads in your area", color: "#1A1A1A" },
                    { label: "Month 6", sub: "They are ranking above you on every local search", color: "#6B7280" },
                    { label: "Month 12", sub: "They are the business your customers think of first", color: "#E5E7EB" },
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
              <em>Thirty minutes to clarity.</em>
            </motion.h2>
            <motion.p variants={childV} className="text-center mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "56px" }}>
              No long sales calls. No unnecessary back and forth. You give us inputs, we show you exactly where you stand, then we decide next steps.
            </motion.p>
          </motion.div>

          {/* Three cards with arrows */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {[
              {
                step: "01", name: "INTRODUCE", badge: "Free",
                title: "Fill a 15-minute questionnaire",
                desc: "This is tailored to your business. A dental clinic will not see the same questions as a textile distributor. No jargon. No preparation needed.",
                illustration: "form",
              },
              {
                step: "02", name: "IMPRESS", badge: "Rs. 999",
                title: "Get your Business Intelligence Dashboard",
                desc: "Within 30 minutes, you see your Business Index Score, your actual competitors in your area, where you are losing out, and what needs fixing first. The Rs. 999 unlocks your assigned consultant.",
                illustration: "dial",
              },
              {
                step: "03", name: "INITIATE", badge: "Within 24 hours",
                title: "Speak to your consultant",
                desc: "We walk you through everything in simple language. No slides. No pressure. Just clear advice on what will actually move the needle for your business.",
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
              Most firms would take days and charge significantly more to arrive at the same level of clarity. We have built the system so you get that insight in under 30 minutes.
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
              <em>but online it feels invisible, read this carefully.</em>
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
                {["You have been operating for 5 or more years", "You are doing between Rs. 50 Lakh and Rs. 50 Crore annually", "Your digital presence is weak, inconsistent, or not working", "You take the key decisions in your business", "You are based in or expanding into Delhi NCR"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "var(--text-primary)", fontWeight: 600, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 — Your Situation (dark) */}
            <motion.div style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "28px" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-faint)", marginBottom: "16px" }}>This is what we usually hear</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["You have seen newer businesses take customers that should have been yours", "You tried working with an agency and did not see results", "Nobody has shown you clearly where you stand against competitors", "You know your business is good, but online it does not reflect that", "You have been meaning to fix the digital side for two years but never knew where to start"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: "#4B5563", flexShrink: 0 }}>&rarr;</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — Not A Fit If */}
            <motion.div className="card-theme p-7 h-full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-caps" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>This is not for you if</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Your revenue is below Rs. 50 Lakh", "You are already a digital-first business", "You are only looking for a website without strategy"].map((t, i) => (
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
            <motion.h2 variants={childV} className="text-center" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "56px" }}>
              What it costs. <em>All of it.</em>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Diagnostic */}
            <motion.div className="card-theme p-7 flex flex-col" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>Diagnostic</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "var(--text-primary)", marginTop: "4px" }}>Rs. 999</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>one-time</p>
              <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Business Intelligence Dashboard", "Business Index Score", "Competitor Intelligence", "Gap Analysis", "One-hour session with your consultant"].map((f, j) => (
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
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6B7280" }}>Technology quoted separately</p>
              <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Everything in Diagnostic", "Deep-dive strategy session", "Digital Positioning Report", "90-day roadmap", "Tech scoping support"].map((f, j) => (
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
              <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--text-primary)", marginTop: "4px" }}>Rs. 30,000&ndash;50,000</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>per month + tech quoted separately</p>
              <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {["Everything in Starter Bundle", "Ongoing strategic support", "Monthly competitor tracking", "Continuous positioning guidance", "Tech team access"].map((f, j) => (
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
            All technology builds are scoped separately. Website, automation, ads, chatbots. You see exactly what each piece costs before anything starts.
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
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "#9CA3AF", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
            If you want to understand exactly where your business stands today, start with the diagnostic. It takes one form and 30 minutes. No pressure after that. But you will finally have clarity.
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

