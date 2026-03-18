"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import HeroIllustration from "@/components/HeroIllustration";
import CaseStudyMockup from "@/components/CaseStudyMockup";
import { TimelineMini } from "@/components/ServiceIllustrations";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, target]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return unsub;
  }, [rounded]);

  return (
    <span ref={ref} style={{ fontFeatureSettings: '"tnum"' }}>
      {display}{suffix}
    </span>
  );
}

/* ── Stagger wrapper variants (Fix 5) ── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ── Industry marquee data (Fix 10) ── */
const industries = [
  "Chartered Accountants",
  "Dental Clinics",
  "Law Firms",
  "Architecture Firms",
  "Drycleaners",
  "Physiotherapy Practices",
  "Coaching Institutes",
  "Optical Stores",
  "Restaurants",
  "Diagnostic Labs",
  "Interior Designers",
  "Auto Workshops",
];

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
      description: "StaplerLabs takes established offline businesses and builds their entire digital presence from scratch in 30 days.",
      url: "https://staplerlabs.com",
      telephone: "+91-82925-11007",
      email: "work@staplerlabs.com",
      address: { "@type": "PostalAddress", addressCountry: "IN", addressRegion: "Delhi" },
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

      {/* ══════════════ HERO — Two Column ══════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "clamp(100px, 14vh, 160px)", paddingBottom: "clamp(56px, 7vh, 90px)" }}
      >
        <div className="absolute inset-0 graph-grid" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              className="mb-5 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--yellow)" }} />
              <span className="label-caps">accepting projects for Q2 2026</span>
            </motion.div>

            {/* Fix 7: line-height 1.05, letter-spacing -0.02em */}
            <motion.h1
              className="font-display"
              style={{ fontSize: "clamp(38px, 5.2vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              You&apos;ve built a great business.{" "}
              <span style={{ color: "var(--amber)" }}>
                The internet just doesn&apos;t know it yet.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5"
              style={{ fontSize: "16px", lineHeight: 1.72, color: "var(--ink-60)", maxWidth: "580px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              We take established businesses and build everything they need online
              &mdash; website, Google presence, WhatsApp, ads &mdash; in 30 days.
              Then we stick around.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col sm:flex-row items-start gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <Link href="/contact" className="btn-primary">
                Start a project
                <span className="arrow-chip">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link href="/work" className="btn-secondary">
                View our work
              </Link>
            </motion.div>
          </div>

          {/* Right — Illustration (visible on mobile too, smaller) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* ══════════════ INDUSTRY MARQUEE (Fix 10) ══════════════ */}
      <section
        className="overflow-hidden marquee-wrap"
        style={{ borderTop: "1px solid var(--ink-06)", borderBottom: "1px solid var(--ink-06)", paddingTop: "14px", paddingBottom: "14px" }}
      >
        <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
          {[...industries, ...industries].map((name, i) => (
            <span
              key={i}
              className="font-body"
              style={{ fontSize: "13px", fontWeight: 500, color: "var(--tertiary)", flexShrink: 0 }}
            >
              {name}
              <span className="mx-4" style={{ color: "var(--ink-12)" }}>&bull;</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════ COUNTER STATS ══════════════ */}
      <section className="px-6" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-10">
              Businesses we&apos;ve worked with have been running for an average of 9 years before calling us
            </motion.p>
            <motion.div variants={childVariants} className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { target: 47, suffix: "+", label: "Businesses taken online" },
                { target: 30, suffix: "", label: "Days average setup time" },
                { target: 0, suffix: "", label: "Times a client chased us" },
                { target: 24, suffix: "/7", label: "Automation uptime" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-display" style={{ fontSize: "clamp(36px, 5vw, 48px)", color: "var(--amber)", lineHeight: 1, fontFeatureSettings: '"tnum"' }}>
                    <Counter target={s.target} suffix={s.suffix} />
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 400, color: "var(--ink-40)", marginTop: "8px" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ WHY NOW — Amber Left Borders ══════════════ */}
      <section className="px-6" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3" style={{ color: "var(--amber)" }}>Why now</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-10 max-w-3xl mx-auto" style={{ fontSize: "clamp(30px, 3.8vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              Your customers are searching for you.{" "}
              <span style={{ color: "var(--ink-60)" }}>They&apos;re finding someone else.</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "73% of people search online before visiting a local business. If you\u2019re not there, you don\u2019t exist to them.",
              "Your competitors \u2014 many of whom are worse than you \u2014 are showing up on Google because someone set them up.",
              "The businesses we work with have been running for years on referrals alone. After we set them up, they start getting customers they never would have met otherwise.",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <WhyNowCard text={text} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BENTO GRID SERVICES (Fix 4: timeline in first card) ══════════════ */}
      <section
        id="services"
        className="px-6"
        style={{ paddingTop: "64px", paddingBottom: "64px", borderTop: "1px solid var(--ink-06)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3" style={{ color: "var(--amber)" }}>Our toolkit</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-4" style={{ fontSize: "clamp(30px, 3.8vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              Six things. Done properly.
            </motion.h2>
            <motion.p variants={childVariants} className="text-center mb-12" style={{ fontSize: "16px", color: "var(--ink-60)", maxWidth: "580px", margin: "0 auto 48px" }}>
              We don&apos;t do 47 services with varying levels of competence.
              We do six, and we&apos;re unreasonably good at all of them.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Large — spans 2 cols — with timeline (Fix 4) */}
            <FadeIn delay={0} className="lg:col-span-2">
              <Link href="/services">
                <div className="group card-theme h-full" style={{ borderRadius: "14px", padding: "32px" }}>
                  <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>Core offering</p>
                  <h3 className="font-body mb-3" style={{ fontSize: "18px", fontWeight: 600, color: "var(--ink)" }}>
                    Offline to Online Setup
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.72, color: "var(--ink-60)", maxWidth: "520px" }}>
                    We take a business that&apos;s never been online and build everything from scratch &mdash; website, Google Business Profile, WhatsApp Business, QR systems. Thirty days. Fixed price. Done.
                  </p>
                  <div className="mt-5">
                    <TimelineMini />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.06}>
              <Link href="/services">
                <div className="group card-theme h-full" style={{ borderRadius: "14px", padding: "28px" }}>
                  <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>Automation</p>
                  <h3 className="font-body mb-3" style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)" }}>Business Automation</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--ink-60)" }}>
                    Invoice reminders, appointment confirmations, review requests &mdash; all running automatically so your staff can focus on actual work.
                  </p>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.12}>
              <Link href="/services">
                <div className="group card-theme h-full" style={{ borderRadius: "14px", padding: "28px" }}>
                  <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>AI</p>
                  <h3 className="font-body mb-3" style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)" }}>AI Reception Bot</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--ink-60)" }}>
                    Answers enquiries, qualifies leads, and books appointments on WhatsApp. Works at 2am. Never calls in sick.
                  </p>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.18} className="lg:col-span-2">
              <Link href="/services">
                <div className="group card-theme h-full" style={{ borderRadius: "14px", padding: "28px" }}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>Development</p>
                      <h3 className="font-body mb-3" style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)" }}>Web Development</h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--ink-60)" }}>
                        Clean, fast websites that load in under two seconds and convert visitors into customers. No templates. Built from scratch.
                      </p>
                    </div>
                    <div>
                      <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>Growth</p>
                      <h3 className="font-body mb-3" style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)" }}>SEO &amp; Content</h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--ink-60)" }}>
                        The long game that actually pays off. Local SEO, technical audits, and content that real humans want to read.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.24}>
              <Link href="/services">
                <div className="group card-theme h-full" style={{ borderRadius: "14px", padding: "28px" }}>
                  <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>Advertising</p>
                  <h3 className="font-body mb-3" style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)" }}>Professional Ads</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--ink-60)" }}>
                    Meta and Google Ads without burning money learning how. Strategy, creative, copy, and monthly reports you&apos;ll actually understand.
                  </p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════ CASE STUDY + PHONE MOCKUP ══════════════ */}
      <section className="px-6" style={{ paddingTop: "64px", paddingBottom: "64px", borderTop: "1px solid var(--ink-06)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-center">
              <div>
                <p className="label-caps mb-3" style={{ color: "var(--amber)" }}>Featured case study</p>
                <h3 className="font-display mb-4" style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                  A 15-year-old dental clinic.<br />Zero online presence.
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--ink-60)", marginBottom: "16px", maxWidth: "540px" }}>
                  Google Business Profile, a clean website, WhatsApp appointment booking,
                  and a QR card for the reception desk.
                  First online appointment booked within 72 hours of going live.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--ink)", fontWeight: 500, marginBottom: "20px", maxWidth: "540px" }}>
                  They now receive 3&ndash;5 online appointment requests every week they would never have had otherwise.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Onboarding", "Web", "Automation"].map((t) => (
                    <span key={t} className="font-mono" style={{ fontSize: "12px", padding: "6px 12px", borderRadius: "9999px", border: "1px solid var(--yellow-subtle)", color: "var(--amber)" }}>{t}</span>
                  ))}
                </div>
                <Link href="/work" className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-150" style={{ fontSize: "14px", color: "var(--amber)" }}>
                  See more work
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="hidden lg:block">
                <CaseStudyMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS — Horizontal Stepper ══════════════ */}
      <section id="how-it-works" className="px-6" style={{ paddingTop: "64px", paddingBottom: "64px", borderTop: "1px solid var(--ink-06)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={childVariants} className="label-caps text-center mb-3" style={{ color: "var(--amber)" }}>How it works</motion.p>
            <motion.h2 variants={childVariants} className="font-display text-center mb-10" style={{ fontSize: "clamp(30px, 3.8vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              Three steps. Then we handle the rest.
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-[16.66%] right-[16.66%] h-px" style={{ borderTop: "2px dashed var(--ink-12)" }} />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "You tell us about your business.", desc: "One WhatsApp conversation. We ask about your services, your customers, your goals. No forms. No briefs. No jargon." },
                { step: "02", title: "We build everything in 30 days.", desc: "Website live, Google listing verified, WhatsApp Business configured, first ad campaign ready. You focus on running your business." },
                { step: "03", title: "We stick around.", desc: "Monthly reporting, updates, optimization, new campaigns. You get a dedicated person, not a ticket system." },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="text-center md:text-left">
                    <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4" style={{ backgroundColor: "var(--yellow)", color: "var(--ink)" }}>
                      <span className="font-body" style={{ fontSize: "14px", fontWeight: 600 }}>{item.step}</span>
                    </div>
                    <h3 className="font-body mb-2" style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.4 }}>{item.title}</h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.72, color: "var(--ink-60)", maxWidth: "580px" }}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DARK CTA SECTION ══════════════ */}
      <section className="relative px-6 text-center overflow-hidden cta-dark" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198, 144, 10, 0.08) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(30px, 3.8vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
              If your business has been running for years but you&apos;re not online &mdash;{" "}
              <span style={{ color: "var(--yellow)" }}>this is the call to make.</span>
            </h2>
            <p className="mb-8" style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto 32px" }}>
              One conversation. We&apos;ll tell you exactly what you need and what it costs. No pitch deck. No pressure.
            </p>
            <Link href="/contact" className="btn-primary">
              Let&apos;s talk
              <span className="arrow-chip">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ── Why Now Card with animated amber left border ── */
function WhyNowCard({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative pl-6 py-1">
      <motion.div
        className="absolute left-0 top-0 w-[2px] rounded-full"
        style={{ backgroundColor: "var(--amber)" }}
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--ink-60)", maxWidth: "580px" }}>
        {text}
      </p>
    </div>
  );
}
