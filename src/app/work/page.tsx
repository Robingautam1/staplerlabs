"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { useRef } from "react";

const caseStudies = [
  {
    type: "Healthcare · Dental Clinic",
    situation:
      "A 15-year-old dental clinic with a packed schedule but zero online presence \u2014 no website, no Google listing, no digital appointment system.",
    work: "Google Business Profile setup, a clean responsive website, WhatsApp-based appointment booking with automated confirmations, QR visiting card for the reception desk, and local SEO foundation.",
    outcome:
      "First online appointment booked within 72 hours. Google listing appearing in local search within 2 weeks. 40% of new appointments now come through WhatsApp.",
    tags: ["Onboarding", "Web", "Automation"],
  },
  {
    type: "Professional Services · Chartered Accountant",
    situation:
      "A CA firm with 200+ clients was spending 3 hours a day on manual invoice follow-ups and appointment scheduling over phone calls.",
    work: "WhatsApp automation for payment reminders, an online appointment booking system, automated invoice generation from their existing billing software, and a simple portfolio website.",
    outcome:
      "Follow-up time reduced from 3 hours to 15 minutes daily. Zero missed appointments in the first month. Clients started referring new business because the experience felt professional.",
    tags: ["Automation", "Receptionist", "Web"],
  },
  {
    type: "E-commerce · Local Fashion Brand",
    situation:
      "An Instagram-first fashion brand with 12K followers but no website. All orders handled through DMs, leading to missed messages and zero inventory tracking.",
    work: "A fast, mobile-first product catalogue website with integrated UPI payments, WhatsApp order confirmation automation, and basic inventory management. Google and Meta ad campaigns to drive traffic beyond Instagram.",
    outcome:
      "Went live in 11 days. First direct website sale within 48 hours. Instagram DM volume dropped by 60% as customers started ordering directly. Monthly revenue up 35% within 3 months.",
    tags: ["Web", "Automation", "Ads"],
  },
  {
    type: "Internal Build · StaplerLabs",
    situation:
      "We needed to build our own agency website that practised what it preached - fast, honest, and built with the same tools we sell.",
    work: "This website. Next.js, Tailwind, Framer Motion. Every illustration hand-coded as SVG. Every line of copy written by humans. Zero stock photos.",
    outcome:
      "You're looking at it. If you've read this far, it's working.",
    tags: ["Web", "SEO"],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 text-center">
        <FadeIn>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl">
            Work that <span className="t-yellow">speaks</span> for itself
          </h1>
          <p className="mt-4 max-w-xl mx-auto t-tertiary text-sm sm:text-base">
            Real projects. Real outcomes. No stock screenshots or vague testimonials.
          </p>
        </FadeIn>
      </section>

      {/* Case studies */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {caseStudies.map((cs, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-8 p-6 sm:p-10 rounded-xl card-theme"
                style={i % 2 === 0 ? { borderLeft: "4px solid var(--yellow)" } : {}}
              >
                {/* Left meta */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--yellow-muted)" }}>
                    Case Study 0{i + 1}
                  </p>
                  <p className="font-display text-lg mb-4 t-primary">
                    {cs.type}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{ border: "1px solid var(--yellow-subtle)", color: "var(--yellow-muted)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Project visual — mini illustration */}
                  <CaseStudyVisual index={i} />
                </div>

                {/* Right content */}
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-1.5 t-muted">
                      The Situation
                    </p>
                    <p className="text-[15px] leading-relaxed t-secondary">
                      {cs.situation}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-1.5 t-muted">
                      What We Built
                    </p>
                    <p className="text-[15px] leading-relaxed t-secondary">
                      {cs.work}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--yellow-muted)" }}>
                      The Outcome
                    </p>
                    <p className="text-[15px] leading-relaxed font-medium t-primary">
                      {cs.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Metrics counter for dramatic effect */}
      <section className="py-12 px-6" style={{ borderTop: "1px solid var(--border-primary)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "72h", label: "Fastest time to first lead" },
            { val: "40%", label: "Avg new appointments from online" },
            { val: "60%", label: "DM volume reduction" },
            { val: "11d", label: "Fastest go-live" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p className="font-display text-2xl sm:text-3xl t-yellow">{s.val}</p>
              <p className="text-xs mt-1 t-muted">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Honest note */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="card-theme rounded-xl p-8">
              <p className="text-[15px] leading-relaxed italic t-secondary">
                &ldquo;We&apos;re a young agency building our portfolio publicly.
                Every project we take teaches us something. Every client gets the
                benefit of that. We&apos;d rather show you three real projects than
                fifty fake ones.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl mb-4">
            Want to be the next case study?
          </h2>
          <p className="mb-8 max-w-md mx-auto t-tertiary">
            We promise not to put your name on the website without asking first.
          </p>
          <Link
            href="/contact"
            className="inline-block btn-yellow px-8 py-3.5 rounded-md"
          >
            Let&apos;s talk
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}

/* ── Mini visual per case study (replaces "confidential" placeholder) ── */
function CaseStudyVisual({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const visuals = [
    // 0 — Dental: Google listing + WhatsApp
    <svg key={0} viewBox="0 0 200 125" fill="none" className="w-full h-auto">
      <rect x="10" y="10" width="180" height="60" rx="8" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1" />
      <rect x="18" y="18" width="60" height="6" rx="2" fill="var(--amber)" opacity="0.3" />
      <rect x="18" y="28" width="100" height="4" rx="1.5" fill="rgba(var(--ink-rgb),0.08)" />
      <rect x="18" y="36" width="80" height="4" rx="1.5" fill="rgba(var(--ink-rgb),0.05)" />
      {[0,1,2,3,4].map(s => <text key={s} x={18 + s*12} y="56" fontSize="9" fill="var(--amber)" opacity="0.6">★</text>)}
      <text x="78" y="56" fontSize="7" fill="rgba(var(--ink-rgb),0.35)" fontFamily="var(--font-inter), Inter, sans-serif">4.8</text>
      <rect x="10" y="80" width="80" height="36" rx="8" fill="#DCF8C6" opacity="0.6" />
      <rect x="16" y="88" width="50" height="4" rx="1.5" fill="rgba(26,23,16,0.12)" />
      <rect x="16" y="96" width="40" height="4" rx="1.5" fill="rgba(26,23,16,0.08)" />
      <circle cx="170" cy="98" r="12" fill="#25D366" opacity="0.15" />
      <text x="170" y="102" textAnchor="middle" fontSize="10" fill="#25D366">✓</text>
    </svg>,
    // 1 — CA: Automation flow
    <svg key={1} viewBox="0 0 200 125" fill="none" className="w-full h-auto">
      {[{y:14,l:"Invoice"},{y:44,l:"Reminder"},{y:74,l:"Payment"},{y:104,l:"Done"}].map((n,i) => (
        <g key={i}>
          <rect x="50" y={n.y} width="100" height="24" rx="6" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1" />
          <text x="100" y={n.y+16} textAnchor="middle" fontSize="8" fill="rgba(var(--ink-rgb),0.5)" fontFamily="var(--font-inter), Inter, sans-serif">{n.l}</text>
          {i < 3 && <line x1="100" y1={n.y+24} x2="100" y2={n.y+30} stroke="var(--amber)" strokeWidth="1" strokeDasharray="2 2" />}
          {i < 3 && <path d={`M97 ${n.y+28} L100 ${n.y+32} L103 ${n.y+28}`} stroke="var(--amber)" strokeWidth="0.8" fill="none" />}
        </g>
      ))}
    </svg>,
    // 2 — Fashion: Mobile storefront + chart
    <svg key={2} viewBox="0 0 200 125" fill="none" className="w-full h-auto">
      <rect x="10" y="8" width="70" height="110" rx="10" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1" />
      <rect x="25" y="12" width="40" height="4" rx="2" fill="rgba(var(--ink-rgb),0.08)" />
      <rect x="16" y="22" width="58" height="40" rx="4" fill="rgba(var(--ink-rgb),0.03)" />
      <rect x="20" y="26" width="20" height="3" rx="1" fill="var(--amber)" opacity="0.3" />
      <rect x="20" y="32" width="40" height="3" rx="1" fill="rgba(var(--ink-rgb),0.06)" />
      <rect x="20" y="68" width="50" height="10" rx="4" fill="var(--yellow)" opacity="0.2" />
      <text x="45" y="76" textAnchor="middle" fontSize="6" fill="var(--amber)" fontFamily="var(--font-inter), Inter, sans-serif">Buy Now</text>
      {[{x:100,h:18},{x:118,h:28},{x:136,h:24},{x:154,h:36},{x:172,h:50}].map((b,i) => (
        <rect key={i} x={b.x} y={108-b.h} width="12" height={b.h} rx="2" fill="var(--amber)" opacity={0.2+i*0.1} />
      ))}
      <line x1="100" y1="108" x2="186" y2="108" stroke="rgba(var(--ink-rgb),0.08)" strokeWidth="0.5" />
      <text x="143" y="122" textAnchor="middle" fontSize="6" fill="rgba(var(--ink-rgb),0.3)" fontFamily="var(--font-inter), Inter, sans-serif">+35% revenue</text>
    </svg>,
    // 3 — StaplerLabs: Code/build
    <svg key={3} viewBox="0 0 200 125" fill="none" className="w-full h-auto">
      <rect x="10" y="10" width="180" height="105" rx="8" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1" />
      <rect x="10" y="10" width="180" height="22" rx="8" fill="rgba(var(--ink-rgb),0.03)" />
      <rect x="10" y="28" width="180" height="4" fill="rgba(var(--ink-rgb),0.03)" />
      <circle cx="22" cy="21" r="3" fill="#FF5F56" opacity="0.6" />
      <circle cx="32" cy="21" r="3" fill="#FFBD2E" opacity="0.6" />
      <circle cx="42" cy="21" r="3" fill="#27C93F" opacity="0.6" />
      <rect x="20" y="40" width="30" height="4" rx="1" fill="var(--amber)" opacity="0.3" />
      <rect x="55" y="40" width="50" height="4" rx="1" fill="rgba(var(--ink-rgb),0.08)" />
      <rect x="30" y="50" width="70" height="4" rx="1" fill="rgba(var(--ink-rgb),0.06)" />
      <rect x="30" y="60" width="50" height="4" rx="1" fill="rgba(var(--ink-rgb),0.05)" />
      <rect x="20" y="70" width="25" height="4" rx="1" fill="var(--amber)" opacity="0.2" />
      <rect x="50" y="70" width="60" height="4" rx="1" fill="rgba(var(--ink-rgb),0.06)" />
      <rect x="30" y="80" width="80" height="4" rx="1" fill="rgba(var(--ink-rgb),0.04)" />
      <text x="100" y="102" textAnchor="middle" fontSize="6" fill="rgba(var(--ink-rgb),0.25)" fontFamily="var(--font-inter), Inter, sans-serif">Next.js · Tailwind · Framer Motion</text>
    </svg>,
  ];

  return (
    <div ref={ref} className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/10", backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-primary)" }}>
      <motion.div
        className="w-full h-full flex items-center justify-center p-3"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {visuals[index] || visuals[3]}
      </motion.div>
    </div>
  );
}
