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
          className="inline-block text-yellow yellow-glow"
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
    desc: "The best employee you'll ever have. WhatsApp bots, CRM workflows, invoice systems — all running without a lunch break.",
    icon: <AutomationIllustration />,
  },
  {
    title: "Online Receptionist",
    desc: "AI-powered front desk that handles calls, qualifies leads, and books appointments before a human ever gets involved.",
    icon: <ReceptionistIllustration />,
  },
  {
    title: "Offline to Online",
    desc: "You've been running a great business. Now let the internet know. Google profiles, websites, QR menus — the full package.",
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

const floatingPills = [
  { label: "Next.js", x: "8%", y: "18%", delay: 0 },
  { label: "WhatsApp Bots", x: "78%", y: "12%", delay: 0.3 },
  { label: "Google Ads", x: "85%", y: "65%", delay: 0.6 },
  { label: "Local SEO", x: "5%", y: "70%", delay: 0.9 },
  { label: "CRM", x: "72%", y: "38%", delay: 0.4 },
  { label: "QR Menus", x: "12%", y: "45%", delay: 0.7 },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 graph-grid" />
        <div className="absolute inset-0 hero-gradient" />

        {/* Large watermark stapler — right side */}
        <motion.div
          className="absolute right-[-8%] top-[10%] pointer-events-none hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <StaplerLogo className="w-[600px] h-[600px]" animate={false} />
        </motion.div>

        {/* Floating tech pills — desktop only */}
        {floatingPills.map((pill, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:block pointer-events-none"
            style={{ left: pill.x, top: pill.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.15, 0.15, 0],
              scale: [0.8, 1, 1, 0.9],
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              opacity: { duration: 8, delay: pill.delay + 2, repeat: Infinity, repeatDelay: 2 },
              y: { duration: 6, delay: pill.delay + 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="text-xs font-mono text-yellow/80 border border-yellow/20 px-3 py-1.5 rounded-full bg-yellow/5 backdrop-blur-sm">
              {pill.label}
            </span>
          </motion.div>
        ))}

        {/* Main hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Animated logo badge */}
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <div className="flex items-center gap-3 border border-gray-mid/40 rounded-full px-5 py-2 bg-gray-dark/40 backdrop-blur-sm">
              <StaplerLogo className="w-7 h-7 rounded-lg" animate={true} />
              <span className="text-sm text-cream/60 font-medium">
                The agency that holds everything together
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-extrabold text-[2.75rem] sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            We handle your <br className="hidden sm:block" />
            <RotatingWord />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-7 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#9A9A9A" }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.7 }}
          >
            Web development. Automation. Onboarding. SEO. Ads.
            <br className="hidden sm:block" />
            So you can do the thing you&apos;re actually good at.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.9 }}
          >
            <a
              href="#services"
              className="bg-yellow text-jet font-semibold px-8 py-4 rounded-lg text-base hover:brightness-110 transition-all shadow-lg shadow-yellow/10 hover:shadow-yellow/20"
            >
              See what we do
            </a>
            <Link
              href="/contact"
              className="border border-cream/20 text-cream/80 font-medium px-8 py-4 rounded-lg text-base hover:border-cream/40 hover:text-cream transition-all"
            >
              Get a free quote
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            {[
              "47+ businesses onboarded",
              "3-day avg. launch time",
              "Zero client chasing",
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-2 text-sm" style={{ color: "#666" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#FFD000" strokeWidth="1.5" opacity="0.5" />
                  <path d="M4.5 7 L6.2 8.7 L9.5 5.3" stroke="#FFD000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 3.5 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: "#555" }}>
            Scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="#555" strokeWidth="1.5" />
              <motion.circle
                cx="8" cy="7" r="1.5" fill="#FFD000"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ HONESTY SECTION ============ */}
      <section className="py-28 px-6 border-t border-gray-mid/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-yellow/50 text-center mb-4">
              Honesty hour
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-20">
              The problem with most agencies
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {comparisons.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 py-10 border-b border-gray-mid/15 last:border-0">
                  <div className="md:pr-10">
                    <p className="text-[11px] font-mono uppercase tracking-[0.15em] mb-3" style={{ color: "#555" }}>
                      What they say
                    </p>
                    <p className="italic text-[15px] leading-relaxed" style={{ color: "#666" }}>
                      {c.theySay}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center px-8">
                    <div className="w-px h-full bg-yellow/30" />
                  </div>
                  <div className="md:pl-10">
                    <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-yellow/60 mb-3">
                      What we actually do
                    </p>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#CFCFCF" }}>
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
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-yellow/50 text-center mb-4">
              Our toolkit
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-5">
              Six things. Done properly.
            </h2>
            <p className="text-center mb-20 max-w-lg mx-auto text-base" style={{ color: "#888" }}>
              We don&apos;t do 47 services with varying levels of competence.
              We do six, and we&apos;re unreasonably good at all of them.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link href="/services">
                  <div className="group bg-gray-dark/40 border border-gray-mid/15 rounded-2xl p-7 h-full hover:border-yellow/30 hover:bg-gray-dark/60 transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 mb-5 opacity-70 group-hover:opacity-100 transition-opacity">{s.icon}</div>
                    <h3 className="font-display font-bold text-[17px] mb-2.5 group-hover:text-yellow transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#888" }}>
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
      <section className="py-20 px-6 border-y border-gray-mid/15">
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
                  <p className="font-display font-extrabold text-4xl sm:text-5xl text-yellow yellow-glow">
                    {s.number}
                  </p>
                  <p className="text-[13px] mt-2" style={{ color: "#777" }}>{s.label}</p>
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
            <div className="relative border-l-4 border-yellow bg-gray-dark/30 rounded-2xl p-10 sm:p-12 overflow-hidden">
              {/* Subtle stapler watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none">
                <StaplerLogo className="w-48 h-48" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-yellow/60 mb-4">
                Featured Project
              </p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 leading-snug">
                A 15-year-old dental clinic in Rohtak.<br />
                Zero online presence.
              </h3>
              <p className="text-[15px] leading-relaxed mb-6 max-w-2xl" style={{ color: "#999" }}>
                Google Business Profile, a clean website, WhatsApp appointment booking,
                and a QR card for the reception desk.
                First online appointment booked within 72 hours of going live.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Onboarding", "Web", "Automation"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-yellow/25 text-yellow/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-yellow font-medium hover:gap-3 transition-all"
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
            <p className="mb-10 max-w-md mx-auto text-base" style={{ color: "#888" }}>
              One conversation. No pitch decks. Just honest answers
              about what we&apos;d do and what it costs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow text-jet font-semibold px-10 py-4 rounded-lg text-base hover:brightness-110 transition-all shadow-lg shadow-yellow/10"
            >
              Let&apos;s talk
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
