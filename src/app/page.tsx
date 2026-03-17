"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import StaplerLogo from "@/components/StaplerLogo";
import {
  WebDevIllustration,
  AutomationIllustration,
  ReceptionistIllustration,
  OnboardingIllustration,
  SEOIllustration,
  AdsIllustration,
} from "@/components/ServiceIllustrations";

const services = [
  {
    title: "Offline to Online Setup",
    desc: "We take a business that\u2019s never been online and build everything from scratch \u2014 website, Google Business Profile, WhatsApp Business, QR systems, the works. Thirty days. Fixed price. Done.",
    icon: <OnboardingIllustration />,
  },
  {
    title: "Business Automation",
    desc: "Invoice reminders, appointment confirmations, review requests, lead follow-ups \u2014 all running automatically so your staff can focus on actual work.",
    icon: <AutomationIllustration />,
  },
  {
    title: "AI Reception Bot",
    desc: "Answers enquiries, qualifies leads, and books appointments on WhatsApp before a human needs to get involved. Works at 2am. Never calls in sick.",
    icon: <ReceptionistIllustration />,
  },
  {
    title: "Web Development",
    desc: "Clean, fast websites that load in under two seconds and convert visitors into customers. No templates. No WordPress. Built from scratch, every time.",
    icon: <WebDevIllustration />,
  },
  {
    title: "SEO & Content",
    desc: "The long game that actually pays off. Local SEO, technical audits, and content that real humans want to read.",
    icon: <SEOIllustration />,
  },
  {
    title: "Professional Ads",
    desc: "Meta and Google Ads without burning money learning how. Strategy, creative, copy, and monthly reports you\u2019ll actually understand.",
    icon: <AdsIllustration />,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://staplerlabs.com/#organization",
      name: "StaplerLabs",
      url: "https://staplerlabs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://staplerlabs.com/og-image.png",
        width: 1200,
        height: 630,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-82925-11007",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      email: "work@staplerlabs.com",
      sameAs: ["https://www.instagram.com/staplerlabs"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://staplerlabs.com/#localbusiness",
      name: "StaplerLabs",
      description:
        "StaplerLabs takes established offline businesses and builds their entire digital presence from scratch in 30 days.",
      url: "https://staplerlabs.com",
      telephone: "+91-82925-11007",
      email: "work@staplerlabs.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Delhi",
      },
      priceRange: "\u20b9\u20b9",
      openingHours: "Mo-Fr 10:00-19:00",
      image: "https://staplerlabs.com/og-image.png",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offline to Online Setup" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Reception Bot" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Professional Ads" } },
        ],
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="absolute inset-0 graph-grid" />
        <div className="absolute inset-0 hero-gradient" />

        {/* Large watermark stapler */}
        <motion.div
          className="absolute right-[-8%] top-[10%] pointer-events-none hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <StaplerLogo className="w-[600px] h-[600px]" animate={false} />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Status badge */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#C6900A" }}
            />
            <span className="label-caps">
              accepting projects for Q2 2026
            </span>
          </motion.div>

          {/* Headline — Instrument Serif */}
          <motion.h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ color: "var(--text-heading)" }}>
              You&apos;ve built a great business.
            </span>
            <br />
            <span style={{ color: "#C6900A" }}>
              The internet just doesn&apos;t know it yet.
            </span>
          </motion.h1>

          {/* Subheading — Inter body */}
          <motion.p
            className="mt-7 max-w-2xl mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--text-secondary)", fontWeight: 400 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            We take established businesses and build everything they need online
            &mdash; website, Google presence, WhatsApp, ads &mdash; in 30 days.
            Then we stick around.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <a
              href="#how-it-works"
              className="btn-yellow w-full sm:w-auto text-center"
              style={{ padding: "14px 32px" }}
            >
              See how it works
            </a>
            <Link
              href="/work"
              className="btn-outline w-full sm:w-auto text-center"
              style={{ padding: "14px 32px" }}
            >
              View our work
            </Link>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-10"
            style={{ backgroundColor: "var(--text-dim)" }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ============ SOCIAL PROOF / STATS ============ */}
      <section
        className="px-6"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "1px solid var(--border-primary)",
          borderBottom: "1px solid var(--border-primary)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="label-caps text-center mb-12 max-w-xl mx-auto" style={{ letterSpacing: "0.1em" }}>
              Businesses we&apos;ve worked with have been running for an average of 9 years before calling us
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: "47+", label: "Businesses taken online" },
                { number: "30", label: "Days average setup time" },
                { number: "0", label: "Times a client chased us" },
                { number: "24/7", label: "Automation uptime" },
              ].map((s, i) => (
                <div key={i}>
                  <p
                    className="font-display yellow-glow"
                    style={{ fontSize: "clamp(40px, 5vw, 52px)", color: "#C6900A", lineHeight: 1 }}
                  >
                    {s.number}
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 400, color: "var(--text-muted)", marginTop: "8px" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ WHY NOW ============ */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-center mb-4" style={{ color: "#C6900A", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Why now
            </p>
            <h2 className="font-display text-center mb-16 max-w-3xl mx-auto" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15 }}>
              Your customers are searching for you.{" "}
              <span style={{ color: "var(--text-secondary)" }}>They&apos;re finding someone else.</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "73% of people search online before visiting a local business. If you\u2019re not there, you don\u2019t exist to them.",
              "Your competitors \u2014 many of whom are worse than you \u2014 are showing up on Google because someone set them up. That someone could have been us.",
              "The businesses we work with have been running for years on referrals alone. After we set them up, they start getting customers they never would have met otherwise.",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid rgba(26, 23, 16, 0.12)" }}
                >
                  <p style={{ fontSize: "15.5px", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section id="services" className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid var(--border-primary)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-center mb-4" style={{ color: "#C6900A", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Our toolkit
            </p>
            <h2 className="font-display text-center mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15 }}>
              Six things. Done properly.
            </h2>
            <p className="text-center mb-20 max-w-lg mx-auto" style={{ fontSize: "16px", color: "var(--text-secondary)" }}>
              We don&apos;t do 47 services with varying levels of competence.
              We do six, and we&apos;re unreasonably good at all of them.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link href="/services">
                  <div
                    className="group card-theme h-full cursor-pointer"
                    style={{ borderRadius: "12px", padding: "24px" }}
                  >
                    <div className="w-14 h-14 mb-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200">{s.icon}</div>
                    <h3
                      className="mb-2.5 group-hover:t-yellow transition-colors duration-150"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--text-heading)" }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                      {s.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED CASE STUDY ============ */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid var(--border-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="relative overflow-hidden"
              style={{
                borderLeft: "4px solid var(--yellow)",
                backgroundColor: "var(--bg-card)",
                borderRadius: "12px",
                padding: "clamp(32px, 4vw, 48px)",
              }}
            >
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none">
                <StaplerLogo className="w-48 h-48" />
              </div>
              <p className="label-caps mb-4" style={{ color: "var(--yellow)" }}>
                A client who called us after years of running on word of mouth
              </p>
              <h3 className="font-display mb-4" style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.2 }}>
                A 15-year-old dental clinic.<br />
                Zero online presence.
              </h3>
              <p style={{ fontSize: "15.5px", lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: "16px", maxWidth: "640px" }}>
                Google Business Profile, a clean website, WhatsApp appointment booking,
                and a QR card for the reception desk.
                First online appointment booked within 72 hours of going live.
              </p>
              <p style={{ fontSize: "15.5px", lineHeight: 1.75, color: "var(--text-primary)", fontWeight: 500, marginBottom: "24px", maxWidth: "640px" }}>
                They now receive 3&ndash;5 online appointment requests every week they would never have had otherwise.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Onboarding", "Web", "Automation"].map((t) => (
                  <span
                    key={t}
                    className="font-mono"
                    style={{ fontSize: "12px", padding: "6px 12px", borderRadius: "9999px", border: "1px solid var(--yellow-subtle)", color: "var(--yellow)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-150"
                style={{ fontSize: "14px", color: "var(--yellow)" }}
              >
                See more work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", borderTop: "1px solid var(--border-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-center mb-4" style={{ color: "#C6900A", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              How it works
            </p>
            <h2 className="font-display text-center mb-16" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15 }}>
              Three steps. Then we handle the rest.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "You tell us about your business.",
                desc: "One WhatsApp conversation. We ask about your services, your customers, your goals. No forms. No briefs. No jargon.",
              },
              {
                step: "02",
                title: "We build everything in 30 days.",
                desc: "Website live, Google listing verified, WhatsApp Business configured, first ad campaign ready. You focus on running your business.",
              },
              {
                step: "03",
                title: "We stick around.",
                desc: "Monthly reporting, updates, optimization, new campaigns. You get a dedicated person, not a ticket system.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="card-theme h-full" style={{ borderRadius: "12px", padding: "32px" }}>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, color: "#C6900A", display: "block", marginBottom: "16px" }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="mb-3"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.4 }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section
        className="px-6 text-center relative overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-primary)",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
        <FadeIn>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2 }}>
              If your business has been running for years but you&apos;re not online &mdash;{" "}
              <span style={{ color: "#C6900A" }}>this is the call to make.</span>
            </h2>
            <p className="mb-10 max-w-lg mx-auto" style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              One conversation. We&apos;ll tell you exactly what you need and what it costs.
              No pitch deck. No pressure.
            </p>
            <Link
              href="/contact"
              className="inline-block btn-yellow"
              style={{ padding: "14px 40px" }}
            >
              Let&apos;s talk
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
