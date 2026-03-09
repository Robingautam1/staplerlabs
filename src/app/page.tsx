"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

const rotatingWords = ["websites", "automation", "onboarding", "SEO", "ads", "everything"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          className="inline-block t-yellow yellow-glow"
          initial={{ y: 40, opacity: 0, rotateX: -40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const services = [
  {
    title: "Web Development",
    desc: "Digital storefronts that work while you sleep. From founder portfolios to full SaaS front-ends, built fast and built right.",
    icon: <WebDevIllustration />,
  },
  {
    title: "Business Automation",
    desc: "The best employee you'll ever have. WhatsApp bots, CRM workflows, invoice systems - all running without a lunch break.",
    icon: <AutomationIllustration />,
  },
  {
    title: "Online Receptionist",
    desc: "AI-powered front desk that handles calls, qualifies leads, and books appointments before a human ever gets involved.",
    icon: <ReceptionistIllustration />,
  },
  {
    title: "Offline to Online",
    desc: "You've been running a great business. Now let the internet know. Google profiles, websites, QR menus - the full package.",
    icon: <OnboardingIllustration />,
  },
  {
    title: "SEO & Content",
    desc: "The long game that actually pays off. Local SEO, technical audits, and content that real humans want to read.",
    icon: <SEOIllustration />,
  },
  {
    title: "Professional Ads",
    desc: "Meta and Google Ads without burning money learning how. Strategy, creative, copy, and monthly reports you'll actually understand.",
    icon: <AdsIllustration />,
  },
];

const comparisons = [
  {
    theySay: "\u201CWe leverage cutting-edge AI synergies to empower your brand.\u201D",
    weDo: "We set up a WhatsApp bot that replies to your customers in 3 seconds. Then we go home.",
  },
  {
    theySay: "\u201COur holistic approach drives transformational digital outcomes.\u201D",
    weDo: "We build your website, connect your payments, and make sure your Google listing is correct.",
  },
  {
    theySay: "\u201CDiscovery call to align on strategic vision and roadmap.\u201D",
    weDo: "We ask four questions on WhatsApp, send a quote the same day, and start if you say yes.",
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
        "StaplerLabs is a lean digital operations agency. We build websites, automate business workflows, run SEO & ads, and handle your entire digital office.",
      url: "https://staplerlabs.com",
      telephone: "+91-82925-11007",
      email: "work@staplerlabs.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Assam",
      },
      priceRange: "₹₹",
      openingHours: "Mo-Fr 10:00-19:00",
      image: "https://staplerlabs.com/og-image.png",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Professional Ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offline to Online Onboarding" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://staplerlabs.com/#website",
      url: "https://staplerlabs.com",
      name: "StaplerLabs",
      publisher: { "@id": "https://staplerlabs.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://staplerlabs.com/?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 graph-grid" />
        <div className="absolute inset-0 hero-gradient" />

        {/* Large watermark stapler - right side */}
        <motion.div
          className="absolute right-[-8%] top-[10%] pointer-events-none hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <StaplerLogo className="w-[600px] h-[600px]" animate={false} />
        </motion.div>

        {/* Main hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Status line */}
          <motion.div
            className="mb-8 font-mono text-[11px] tracking-[0.15em] uppercase t-dim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <span className="t-yellow">*</span>{" "}
            accepting projects for Q2 2026
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-extrabold text-[1.85rem] sm:text-5xl lg:text-[5.5rem] leading-[1.1] sm:leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            We handle your <br />
            <RotatingWord />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-base sm:text-xl max-w-xl mx-auto leading-relaxed font-normal t-secondary"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.7 }}
          >
            So you can focus on the thing you&apos;re actually good at.{" "}
            <br className="hidden sm:block" />
            We handle the rest.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.9 }}
          >
            <a
              href="#services"
              className="btn-yellow px-8 py-4 rounded-lg text-base w-full sm:w-auto text-center"
              style={{ boxShadow: "0 10px 15px -3px rgba(255,208,0,0.1)" }}
            >
              See what we do
            </a>
            <Link
              href="/contact"
              className="font-medium px-8 py-4 rounded-lg text-base t-primary transition-all w-full sm:w-auto text-center"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}
            >
              Get a free quote
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pb-2 px-10 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            {[
              { number: "47+", label: "businesses onboarded" },
              { number: "3 days", label: "avg. time to go live" },
              { number: "0", label: "times a client chased us" },
            ].map((s, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-xl t-yellow">{s.number}</span>
                <span className="text-sm t-dim">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 3.5 }}
        >
          <motion.div
            className="w-px h-10"
            style={{ backgroundColor: "var(--text-dim)" }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ============ HONESTY SECTION ============ */}
      <section className="py-28 px-6" style={{ borderTop: "1px solid var(--border-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-center mb-4" style={{ color: "var(--yellow-muted)" }}>
              Honesty hour
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-20">
              The problem with most agencies
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {comparisons.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 py-10" style={{ borderBottom: i < comparisons.length - 1 ? "1px solid var(--border-primary)" : "none" }}>
                  <div className="md:pr-10">
                    <p className="text-[11px] font-mono uppercase tracking-[0.15em] mb-3 t-dim">
                      What they say
                    </p>
                    <p className="italic text-[15.5px] leading-relaxed t-tertiary">
                      {c.theySay}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center px-8">
                    <div className="w-px h-full" style={{ backgroundColor: "var(--yellow-muted)" }} />
                  </div>
                  <div className="md:pl-10">
                    <p className="text-[11px] font-mono uppercase tracking-[0.15em] mb-3" style={{ color: "var(--yellow-muted)" }}>
                      What we actually do
                    </p>
                    <p className="text-[15.5px] leading-relaxed t-primary">
                      {c.weDo}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-center mb-4" style={{ color: "var(--yellow-muted)" }}>
              Our toolkit
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-5">
              Six things. Done properly.
            </h2>
            <p className="text-center mb-20 max-w-lg mx-auto text-base t-secondary">
              We don&apos;t do 47 services with varying levels of competence.
              We do six, and we&apos;re unreasonably good at all of them.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link href="/services">
                  <div className="group card-theme rounded-2xl p-7 h-full transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 mb-5 opacity-70 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                    <h3 className="font-display font-bold text-[17px] mb-2.5 group-hover:text-yellow transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed t-secondary">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF STRIP ============ */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid var(--border-primary)", borderBottom: "1px solid var(--border-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: "47+", label: "Businesses onboarded" },
                { number: "3", label: "Avg. days to go live" },
                { number: "0", label: "Times a client chased us" },
                { number: "24/7", label: "Automation uptime" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-display font-extrabold text-4xl sm:text-5xl t-yellow yellow-glow">
                    {s.number}
                  </p>
                  <p className="text-[13px] mt-2 t-tertiary">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ FEATURED CASE STUDY ============ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div
              className="relative rounded-2xl p-10 sm:p-12 overflow-hidden"
              style={{
                borderLeft: "4px solid var(--yellow)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {/* Subtle stapler watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none">
                <StaplerLogo className="w-48 h-48" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] mb-4" style={{ color: "var(--yellow-muted)" }}>
                Featured Project
              </p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 leading-snug">
                A 15-year-old dental clinic in Rohtak.<br />
                Zero online presence.
              </h3>
              <p className="text-[15.5px] leading-relaxed mb-6 max-w-2xl t-secondary">
                Google Business Profile, a clean website, WhatsApp appointment booking,
                and a QR card for the reception desk.
                First online appointment booked within 72 hours of going live.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Onboarding", "Web", "Automation"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid var(--yellow-subtle)", color: "var(--yellow-muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm t-yellow font-medium hover:gap-3 transition-all"
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

      {/* ============ BOTTOM CTA ============ */}
      <section className="py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <FadeIn>
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-5">
              Ready to stop doing<br className="hidden sm:block" /> everything yourself?
            </h2>
            <p className="mb-10 max-w-md mx-auto text-base t-secondary">
              One conversation. No pitch decks. Just honest answers
              about what we&apos;d do and what it costs.
            </p>
            <Link
              href="/contact"
              className="inline-block btn-yellow px-10 py-4 rounded-lg text-base"
              style={{ boxShadow: "0 10px 15px -3px rgba(255,208,0,0.1)" }}
            >
              Let&apos;s talk
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
