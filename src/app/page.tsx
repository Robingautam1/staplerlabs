"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import TransformationSection from "@/components/transformation";

/* ── Stagger wrapper variants ── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
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
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "clamp(110px, 16vh, 180px)", paddingBottom: "clamp(60px, 8vh, 100px)", background: "#FFFFFF" }}
      >
        <div className="absolute inset-0 graph-grid opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            className="font-display mx-auto"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 800, maxWidth: "900px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            The internet favours startups.{" "}
            <span style={{ color: "var(--color-primary)" }}>
              We level the field for businesses that actually built something.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 mx-auto"
            style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "700px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            StaplerLabs is the strategic consulting and technology partner for established
            Indian businesses doing Rs. 50 Lakh to Rs. 50 Crore &mdash; competing in an era built against them.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
              Get Your Business Diagnostic &mdash; Rs. 999
              <span className="arrow-chip">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              See How It Works
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.6 }}>
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* ── Trust stats row ── */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { val: "63M+", label: "SMBs in India" },
              { val: "Rs. 50L\u201350Cr", label: "Our Revenue Band" },
              { val: "Delhi NCR", label: "Launch 2026" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-primary)", letterSpacing: "-0.01em" }}>{s.val}</p>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-muted)", marginTop: "2px" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ THE PROBLEM — 3-Column Cards ══════════════ */}
      <section style={{ background: "var(--color-bg-subtle)", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3">Why this matters</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-12 mx-auto" style={{ fontSize: "clamp(28px, 3.5vw, 38px)", maxWidth: "700px" }}>
              You built something real.{" "}
              <span style={{ color: "var(--color-text-secondary)" }}>The internet doesn&apos;t know it yet.</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "threat",
                title: "The Threat",
                stat: "40\u201360%",
                desc: "of revenue is spent on digital by VC-funded startups. They&apos;re not better than you \u2014 they&apos;re just better at the internet.",
              },
              {
                icon: "gap",
                title: "The Gap",
                stat: "92%",
                desc: "of SMBs in the Rs. 50L\u201350Cr band have no integrated digital strategy. Your competitors aren&apos;t the problem \u2014 your invisibility is.",
              },
              {
                icon: "cost",
                title: "The Cost",
                stat: "Every month",
                desc: "without a digital strategy is market share lost permanently. Customers who can&apos;t find you online find someone else.",
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-theme p-8 h-full" style={{ background: "#FFFFFF" }}>
                  <p style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1, marginBottom: "12px" }}>
                    {card.stat}
                  </p>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "none" }}>
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS — The 3I Model ══════════════ */}
      <section id="how-it-works" style={{ background: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3">How it works</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 38px)" }}>
              Three steps. Thirty minutes to your first intelligence report.
            </motion.h2>
            <motion.p variants={childVariants} className="text-center mx-auto mb-14" style={{ fontSize: "16px", color: "var(--color-text-secondary)", maxWidth: "600px" }}>
              Every engagement follows the same proven model. No sales pitch. No fluff. Just intelligence, then action.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[16.66%] right-[16.66%]" style={{ top: 44, height: 2, background: "linear-gradient(to right, transparent, var(--color-primary) 25%, var(--color-primary) 75%, transparent)", opacity: 0.15, borderRadius: 1 }} />

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  name: "INTRODUCE",
                  title: "Fill a 15-minute questionnaire",
                  desc: "Sector-specific. Dynamically generated for your business type. Zero cost. No commitment.",
                  tag: "Free",
                },
                {
                  step: "02",
                  name: "IMPRESS",
                  title: "Get your AI Intelligence Dashboard",
                  desc: "Business Index Score, competitor map, gap analysis, and visibility assessment \u2014 generated in 30 minutes.",
                  tag: "Rs. 999",
                },
                {
                  step: "03",
                  name: "INITIATE",
                  title: "Meet your assigned consultant",
                  desc: "A StaplerLabs consultant walks you through findings and recommends exactly what to fix first.",
                  tag: "24 hours",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <div style={{
                        width: 48, height: 48, borderRadius: "50%",
                        background: "var(--color-primary-light)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "16px", fontWeight: 800, color: "var(--color-primary)"
                      }}>
                        {item.step}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-primary)" }}>
                        {item.name}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "340px" }}>
                      {item.desc}
                    </p>
                    <span style={{
                      display: "inline-block", marginTop: "12px",
                      fontSize: "12px", fontWeight: 600, color: "var(--color-primary)",
                      background: "var(--color-primary-light)", borderRadius: "9999px",
                      padding: "4px 12px",
                    }}>
                      {item.tag}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
              Start Your Diagnostic &mdash; Rs. 999
              <span className="arrow-chip">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ DASHBOARD PREVIEW ══════════════ */}
      <section style={{ background: "var(--color-bg-subtle)", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3">What you get</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-12 mx-auto" style={{ fontSize: "clamp(28px, 3.5vw, 38px)", maxWidth: "700px" }}>
              Intelligence that used to cost lakhs. Now available in 30 minutes.
            </motion.h2>
          </motion.div>

          <FadeIn>
            <BIDashboardPreview />
          </FadeIn>
        </div>
      </section>

      {/* ══════════════ WHO THIS IS FOR ══════════════ */}
      <section style={{ background: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3">Who this is for</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-12 mx-auto" style={{ fontSize: "clamp(28px, 3.5vw, 38px)", maxWidth: "800px" }}>
              Built for businesses that are too serious to ignore digital{" "}
              <span style={{ color: "var(--color-text-secondary)" }}>and too smart to overpay for it.</span>
            </motion.h2>
          </motion.div>

          {/* Revenue band visual */}
          <FadeIn>
            <div className="mx-auto mb-12" style={{ maxWidth: "600px" }}>
              <div style={{ height: 8, borderRadius: 4, background: "var(--color-border)", position: "relative" }}>
                <div style={{
                  position: "absolute", left: "15%", right: "15%", top: 0, bottom: 0,
                  borderRadius: 4, background: "var(--color-primary)",
                }} />
              </div>
              <div className="flex justify-between mt-3" style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)" }}>
                <span>Rs. 0</span>
                <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>Rs. 50L &mdash; Rs. 50Cr</span>
                <span>Rs. 100Cr+</span>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare",
                desc: "Multi-specialty clinics, dental practices, diagnostic labs losing patients to Practo and Google-visible competitors.",
                sectors: ["Clinics", "Dental", "Diagnostics", "Physiotherapy"],
              },
              {
                title: "Professional Services",
                desc: "CAs, law firms, architects who built their practice on referrals but can\u2019t be found by anyone searching online.",
                sectors: ["CA Firms", "Law Firms", "Architecture", "Interior Design"],
              },
              {
                title: "Manufacturing & Retail",
                desc: "Established businesses with 10\u201330 years of reputation, zero digital presence, and D2C brands eating their lunch.",
                sectors: ["Textiles", "Jewellery", "Food & Beverage", "Education"],
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-theme p-7 h-full">
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "16px", maxWidth: "none" }}>
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.sectors.map((s) => (
                      <span key={s} style={{
                        fontSize: "12px", fontWeight: 500, color: "var(--color-primary)",
                        background: "var(--color-primary-light)", borderRadius: "9999px",
                        padding: "3px 10px",
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ THE TRANSFORMATION — Before/After Bento Grid ══════════════ */}
      <TransformationSection />

      {/* ══════════════ PRICING ══════════════ */}
      <section style={{ background: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3">Pricing</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 38px)" }}>
              Transparent pricing. No hidden retainers.
            </motion.h2>
            <motion.p variants={childVariants} className="text-center mx-auto mb-14" style={{ fontSize: "16px", color: "var(--color-text-secondary)", maxWidth: "600px" }}>
              Consulting and technology are always priced as separate, transparent line items. You see exactly what you&apos;re paying for.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Diagnostic",
                price: "Rs. 999",
                period: "one-time",
                highlight: false,
                features: [
                  "AI Business Intelligence Dashboard",
                  "Business Index Score",
                  "Competitor Intelligence Report",
                  "Gap Analysis & Visibility Assessment",
                  "1-hour guide session with consultant",
                ],
                cta: "Start Diagnostic",
              },
              {
                tier: "Starter Bundle",
                price: "Rs. 9,999",
                period: "one-time + tech quoted separately",
                highlight: true,
                features: [
                  "Everything in Diagnostic",
                  "3-hour deep-dive strategic session",
                  "Written Digital Positioning Report",
                  "90-Day Strategic Roadmap",
                  "Tech team access for scoping",
                ],
                cta: "Get Started",
              },
              {
                tier: "Strategic Retainer",
                price: "Rs. 30K\u201350K",
                period: "per month + tech quoted separately",
                highlight: false,
                features: [
                  "Everything in Starter Bundle",
                  "Ongoing strategic consulting",
                  "Monthly Competitor Intelligence",
                  "Digital positioning management",
                  "Tech team on-call for scoping",
                ],
                cta: "Talk to Us",
              },
            ].map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="relative rounded-xl p-8 h-full flex flex-col"
                  style={{
                    background: plan.highlight ? "var(--color-primary)" : "#FFFFFF",
                    border: plan.highlight ? "none" : "1px solid var(--color-border)",
                    color: plan.highlight ? "#FFFFFF" : "var(--color-text-primary)",
                    transform: plan.highlight ? "scale(1.02)" : "none",
                  }}
                >
                  {plan.highlight && (
                    <span style={{
                      position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                      fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                      background: "#FFFFFF", color: "var(--color-primary)", borderRadius: "9999px",
                      padding: "4px 14px",
                    }}>
                      Most Popular
                    </span>
                  )}
                  <p style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px", opacity: plan.highlight ? 0.8 : 1, color: plan.highlight ? "rgba(255,255,255,0.8)" : "var(--color-text-muted)" }}>
                    {plan.tier}
                  </p>
                  <p style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "4px" }}>
                    {plan.price}
                  </p>
                  <p style={{ fontSize: "13px", marginBottom: "24px", opacity: plan.highlight ? 0.7 : 1, color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)" }}>
                    {plan.period}
                  </p>
                  <div className="flex-1">
                    <div className="space-y-3 mb-8">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                            <path d="M3 8.5l3 3 7-7" stroke={plan.highlight ? "rgba(255,255,255,0.8)" : "var(--color-primary)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span style={{ fontSize: "14px", lineHeight: 1.5, color: plan.highlight ? "rgba(255,255,255,0.9)" : "var(--color-text-secondary)" }}>
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="text-center font-semibold rounded-lg py-3 transition-all duration-150 block"
                    style={{
                      fontSize: "14px",
                      background: plan.highlight ? "#FFFFFF" : "var(--color-primary)",
                      color: plan.highlight ? "var(--color-primary)" : "#FFFFFF",
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BLUE CTA SECTION ══════════════ */}
      <section className="relative text-center overflow-hidden" style={{ background: "var(--color-primary)", paddingTop: "80px", paddingBottom: "80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#FFFFFF" }}>
              Ready to find out exactly where your business stands?
            </h2>
            <p className="mb-8 mx-auto" style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "560px" }}>
              One questionnaire. Thirty minutes. Your complete Business Intelligence Dashboard.
              No pitch deck. No pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-150"
              style={{ fontSize: "15px", padding: "14px 28px", background: "#FFFFFF", color: "var(--color-primary)" }}
            >
              Get Your Business Diagnostic &mdash; Rs. 999
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="mt-6 flex items-center justify-center gap-6" style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
              <a href="mailto:work@staplerlabs.com" className="hover:underline">work@staplerlabs.com</a>
              <a href="https://wa.me/918292511007" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ── Business Intelligence Dashboard Preview (illustrated) ── */
function BIDashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.div
        className="rounded-xl overflow-hidden mx-auto"
        style={{
          maxWidth: "800px",
          border: "1px solid var(--color-border)",
          background: "#FFFFFF",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Dashboard header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text-primary)" }}>Business Intelligence Dashboard</p>
            <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Generated in 30 minutes from your questionnaire</p>
          </div>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: `conic-gradient(var(--color-primary) 0% 72%, var(--color-border) 72% 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 800, color: "var(--color-primary)",
            }}>
              72
            </div>
          </div>
        </div>

        {/* Dashboard cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0" style={{ borderBottom: "1px solid var(--color-border)" }}>
          {[
            { label: "Business Index Score", val: "72/100", color: "var(--color-primary)" },
            { label: "Online Visibility", val: "Low", color: "#EF4444" },
            { label: "Competitors Found", val: "8", color: "var(--color-primary)" },
            { label: "Critical Gaps", val: "5", color: "var(--color-warning)" },
            { label: "Recommendations", val: "3", color: "var(--color-success)" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "16px 20px",
              borderRight: i < 4 ? "1px solid var(--color-border)" : "none",
            }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                {item.label}
              </p>
              <p style={{ fontSize: "20px", fontWeight: 800, color: item.color }}>
                {item.val}
              </p>
            </div>
          ))}
        </div>

        {/* Simulated content rows */}
        <div style={{ padding: "20px 24px" }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-bg-subtle)" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>GAP ANALYSIS</p>
              {["No Google Business Profile", "Website not mobile-optimised", "Zero review presence", "No WhatsApp pipeline", "Competitor outranking on Maps"].map((g, i) => (
                <div key={i} className="flex items-center gap-2" style={{ marginBottom: "6px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: i < 2 ? "#EF4444" : i < 4 ? "var(--color-warning)" : "var(--color-primary)" }} />
                  <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{g}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-bg-subtle)" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "8px" }}>STRATEGIC RECOMMENDATIONS</p>
              {["Google Business Profile setup + local SEO", "Mobile-first website with booking", "WhatsApp automation pipeline"].map((r, i) => (
                <div key={i} className="flex items-start gap-2" style={{ marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)", flexShrink: 0, marginTop: "1px" }}>{i + 1}.</span>
                  <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
