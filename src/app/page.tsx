"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import {
  WebDevIllustration,
  AutomationIllustration,
  ReceptionistIllustration,
  OnboardingIllustration,
  SEOIllustration,
  AdsIllustration,
} from "@/components/ServiceIllustrations";
import StaplerLogo from "@/components/StaplerLogo";

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
    theySay: '"We leverage cutting-edge AI synergies to empower your brand."',
    weDo: "We set up a WhatsApp bot that replies to your customers in 3 seconds. Then we go home.",
  },
  {
    theySay: '"Our holistic approach drives transformational digital outcomes."',
    weDo: "We build your website, connect your payments, and make sure your Google listing is correct.",
  },
  {
    theySay: '"Discovery call to align on strategic vision and roadmap."',
    weDo: "We ask four questions on WhatsApp, send a quote the same day, and start if you say yes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
        {/* Watermark stapler */}
        <div className="absolute right-[-5%] top-[15%] opacity-[0.04] pointer-events-none">
          <StaplerLogo className="w-[500px] h-[500px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            We run your{" "}
            <span className="text-yellow">digital office.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Web. Automation. Onboarding. SEO. Ads. All of it.
            <br className="hidden sm:block" /> So you can do the thing you&apos;re actually good at.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#services"
              className="inline-block mt-10 bg-yellow text-jet font-semibold px-8 py-3.5 rounded-md text-base hover:bg-yellow/90 transition-colors"
            >
              See what we do
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="opacity-30">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="#F0F0F0" strokeWidth="2" />
            <circle cx="10" cy="8" r="2" fill="#F0F0F0" />
          </svg>
        </motion.div>
      </section>

      {/* ============ HONESTY SECTION ============ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16">
              The problem with most agencies
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {comparisons.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 py-8 border-b border-gray-mid/20 last:border-0">
                  <div className="md:pr-8">
                    <p className="text-xs font-mono text-cream/30 uppercase tracking-wider mb-2">
                      What they say
                    </p>
                    <p className="text-cream/50 italic text-sm leading-relaxed">
                      {c.theySay}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center px-6">
                    <div className="w-px h-full bg-yellow/40" />
                  </div>
                  <div className="md:pl-8">
                    <p className="text-xs font-mono text-yellow/60 uppercase tracking-wider mb-2">
                      What we actually do
                    </p>
                    <p className="text-cream/90 text-sm leading-relaxed">
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
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-4">
              Six things. Done properly.
            </h2>
            <p className="text-cream/50 text-center mb-16 max-w-lg mx-auto">
              We don&apos;t do 47 services with varying levels of competence. We do six, and we&apos;re unreasonably good at all of them.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link href="/services">
                  <div className="group bg-gray-dark/50 border border-gray-mid/20 rounded-xl p-6 h-full hover:border-yellow/40 transition-all duration-200 cursor-pointer">
                    <div className="w-16 h-16 mb-4">{s.icon}</div>
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-yellow transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-cream/50 leading-relaxed">
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
      <section className="py-16 px-6 border-y border-gray-mid/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "47+", label: "Businesses onboarded" },
                { number: "3", label: "Avg. days to go live" },
                { number: "0", label: "Times a client had to chase us" },
                { number: "24/7", label: "Automation uptime" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-yellow">
                    {s.number}
                  </p>
                  <p className="text-xs sm:text-sm text-cream/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ FEATURED CASE STUDY ============ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="border-l-4 border-yellow bg-gray-dark/40 rounded-r-xl p-8 sm:p-10">
              <p className="text-xs font-mono text-yellow/60 uppercase tracking-wider mb-3">
                Featured Project
              </p>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">
                A 15-year-old dental clinic in Rohtak. Zero online presence.
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4">
                Google Business Profile, a clean website, WhatsApp appointment booking, and a QR card for the reception desk.
                First online appointment booked within 72 hours of going live.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Onboarding", "Web", "Automation"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-yellow/30 text-yellow/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/work"
                className="inline-block mt-6 text-sm text-yellow font-medium hover:underline"
              >
                See more work &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Ready to stop doing everything yourself?
          </h2>
          <p className="text-cream/50 mb-8 max-w-md mx-auto">
            One conversation. No pitch decks. Just honest answers about what we&apos;d do and what it costs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow text-jet font-semibold px-8 py-3.5 rounded-md hover:bg-yellow/90 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
