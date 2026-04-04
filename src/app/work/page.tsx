"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { useRef } from "react";

const caseStudies = [
  {
    type: "Healthcare \u00b7 Dental Clinic",
    situation: "A 15-year-old dental clinic with a packed schedule but zero online presence \u2014 no website, no Google listing, no digital appointment system.",
    work: "Google Business Profile setup, a clean responsive website, WhatsApp-based appointment booking with automated confirmations, QR visiting card for the reception desk, and local SEO foundation.",
    outcome: "First online appointment booked within 72 hours. Google listing appearing in local search within 2 weeks. 40% of new appointments now come through WhatsApp.",
    tags: ["Consulting", "Web", "Automation"],
  },
  {
    type: "Professional Services \u00b7 Chartered Accountant",
    situation: "A CA firm with 200+ clients was spending 3 hours a day on manual invoice follow-ups and appointment scheduling over phone calls.",
    work: "WhatsApp automation for payment reminders, an online appointment booking system, automated invoice generation from their existing billing software, and a simple portfolio website.",
    outcome: "Follow-up time reduced from 3 hours to 15 minutes daily. Zero missed appointments in the first month. Clients started referring new business because the experience felt professional.",
    tags: ["Automation", "AI Chatbot", "Web"],
  },
  {
    type: "Retail \u00b7 Local Fashion Brand",
    situation: "An Instagram-first fashion brand with 12K followers but no website. All orders handled through DMs, leading to missed messages and zero inventory tracking.",
    work: "A fast, mobile-first product catalogue website with integrated UPI payments, WhatsApp order confirmation automation, and basic inventory management. Google and Meta ad campaigns to drive traffic.",
    outcome: "Went live in 11 days. First direct website sale within 48 hours. Instagram DM volume dropped by 60% as customers started ordering directly. Monthly revenue up 35% within 3 months.",
    tags: ["Web", "Automation", "Performance Marketing"],
  },
  {
    type: "Internal Build \u00b7 StaplerLabs",
    situation: "We needed to build our own platform that practised what it preached \u2014 fast, credible, and built with the same technology stack we recommend to clients.",
    work: "This website. Next.js, Tailwind, Framer Motion. Every illustration hand-coded as SVG. Every line of copy written by humans. Zero stock photos.",
    outcome: "You\u2019re looking at it. If you\u2019ve read this far, it\u2019s working.",
    tags: ["Web", "SEO"],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="px-4 sm:px-6 text-center">
          <FadeIn>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5.5vw, 68px)", fontWeight: 400 }}>
              What <em>actually</em> happened.
            </h1>
            <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-secondary)" }}>
              Four businesses. What they had before, what we built, and the number that changed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ background: "var(--bg-base)", paddingTop: "16px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          {caseStudies.map((cs, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-8 p-6 sm:p-10 card-theme">
                {/* Left meta */}
                <div>
                  <p className="label-caps" style={{ marginBottom: "4px" }}>Case Study 0{i + 1}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 400, marginBottom: "16px" }}>{cs.type}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((t) => (
                      <span key={t} style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, padding: "3px 10px", borderRadius: "100px", background: "var(--bg-base)", color: "var(--text-muted)", border: "1px solid var(--border-default)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <CaseStudyVisual index={i} />
                </div>

                {/* Right content */}
                <div className="space-y-5">
                  <div>
                    <p className="label-caps" style={{ marginBottom: "6px" }}>The Situation</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>{cs.situation}</p>
                  </div>
                  <div>
                    <p className="label-caps" style={{ marginBottom: "6px" }}>What We Built</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>{cs.work}</p>
                  </div>
                  <div>
                    <p className="label-caps" style={{ marginBottom: "6px" }}>The Outcome</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, fontWeight: 600, color: "var(--text-primary)", maxWidth: "none" }}>{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section style={{ background: "var(--bg-base)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "72h", label: "Fastest time to first lead" },
            { val: "40%", label: "Avg new appointments from online" },
            { val: "60%", label: "DM volume reduction" },
            { val: "11d", label: "Fastest go-live" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.1 }}>{s.val}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-muted)", marginTop: "8px", maxWidth: "160px", margin: "8px auto 0" }}>{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 0" }}>
        <div className="px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, color: "white" }}>
              Want to know what your number looks like?
            </h2>
            <p className="mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "#9CA3AF", maxWidth: "480px", marginTop: "16px" }}>
              Start with the diagnostic. Rs. 999. Thirty minutes. Your business, mapped.
            </p>
            <div style={{ marginTop: "36px" }}>
              <Link href="/contact" className="inline-flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, background: "white", color: "var(--bg-dark)", borderRadius: "100px", padding: "14px 28px" }}>
                Get Your Business Diagnostic &mdash; Rs. 999 &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ── Mini visual per case study ── */
function CaseStudyVisual({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const ink = "rgba(26,26,26,";
  const f = "'DM Sans', sans-serif";
  const dark = "#1A1A1A";
  const visuals = [
    // 0 — Dental: Before/After Google listing split
    <svg key={0} viewBox="0 0 200 130" fill="none" className="w-full h-auto">
      <text x="50" y="10" textAnchor="middle" fontSize="6" fill={`${ink}0.3)`} fontFamily={f} fontWeight="600" letterSpacing="0.06em">BEFORE</text>
      <rect x="5" y="16" width="90" height="50" rx="6" fill="#FFFFFF" stroke={`${ink}0.08)`} strokeWidth="0.8" />
      <rect x="12" y="24" width="40" height="4" rx="1.5" fill={`${ink}0.06)`} />
      <rect x="12" y="32" width="60" height="3" rx="1" fill={`${ink}0.04)`} />
      <rect x="12" y="38" width="50" height="3" rx="1" fill={`${ink}0.03)`} />
      <rect x="12" y="48" width="36" height="8" rx="4" fill="rgba(239,68,68,0.08)" />
      <text x="30" y="54" textAnchor="middle" fontSize="5" fill="rgba(239,68,68,0.6)" fontFamily={f}>Not found</text>
      <path d="M98 42 L108 42" stroke={dark} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M105 39 L108 42 L105 45" stroke={dark} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
      <text x="150" y="10" textAnchor="middle" fontSize="6" fill={dark} fontFamily={f} fontWeight="600" letterSpacing="0.06em" opacity="0.7">AFTER</text>
      <rect x="105" y="16" width="90" height="50" rx="6" fill="#FFFFFF" stroke={dark} strokeWidth="1" />
      <rect x="105" y="16" width="90" height="50" rx="6" fill={dark} opacity="0.03" />
      <rect x="112" y="24" width="50" height="4" rx="1.5" fill={dark} opacity="0.25" />
      <rect x="112" y="32" width="65" height="3" rx="1" fill={`${ink}0.08)`} />
      {[0,1,2,3,4].map(s => <text key={s} x={112 + s*9} y="44" fontSize="7" fill={dark} opacity="0.6">{"\u2605"}</text>)}
      <text x="159" y="44" fontSize="6" fill={`${ink}0.35)`} fontFamily={f}>4.8</text>
      <rect x="112" y="48" width="36" height="8" rx="4" fill="rgba(16,185,129,0.1)" />
      <text x="130" y="54" textAnchor="middle" fontSize="5" fill="#10B981" fontFamily={f} fontWeight="600">#1 result</text>
      <text x="100" y="128" textAnchor="middle" fontSize="5.5" fill={`${ink}0.3)`} fontFamily={f}>72h to first booking</text>
    </svg>,
    // 1 — CA: Automation flow
    <svg key={1} viewBox="0 0 200 130" fill="none" className="w-full h-auto">
      {[{y:8,l:"Invoice sent",icon:"\ud83d\udcc4"},{y:38,l:"Auto-reminder",icon:"\ud83d\udd14"},{y:68,l:"Payment received",icon:"\ud83d\udcb3"},{y:98,l:"Reconciled",icon:"\u2713"}].map((n,i) => (
        <g key={i}>
          <rect x="35" y={n.y} width="130" height="24" rx="8" fill="#FFFFFF" stroke={i === 3 ? dark : `${ink}0.08)`} strokeWidth={i === 3 ? 1.2 : 0.8} />
          {i === 3 && <rect x="35" y={n.y} width="130" height="24" rx="8" fill={dark} opacity="0.04" />}
          <text x="56" y={n.y+16} fontSize="7.5" fill={`${ink}0.5)`} fontFamily={f}>{n.l}</text>
          <text x="46" y={n.y+16} fontSize="8">{n.icon}</text>
          {i < 3 && <line x1="100" y1={n.y+24} x2="100" y2={n.y+38} stroke={dark} strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />}
        </g>
      ))}
      <rect x="140" y="108" width="55" height="16" rx="8" fill={dark} opacity="0.08" />
      <text x="167" y="119" textAnchor="middle" fontSize="6" fill={dark} fontFamily={f} fontWeight="600">3h {"\u2192"} 15min</text>
    </svg>,
    // 2 — Fashion: Revenue chart
    <svg key={2} viewBox="0 0 200 130" fill="none" className="w-full h-auto">
      <rect x="8" y="6" width="62" height="118" rx="10" fill="#FFFFFF" stroke={`${ink}0.12)`} strokeWidth="1" />
      <rect x="24" y="10" width="30" height="3" rx="1.5" fill={`${ink}0.08)`} />
      <rect x="14" y="18" width="50" height="34" rx="3" fill={`${ink}0.02)`} />
      <rect x="18" y="22" width="30" height="3" rx="1" fill={dark} opacity="0.25" />
      <rect x="18" y="28" width="40" height="3" rx="1" fill={`${ink}0.06)`} />
      <rect x="14" y="98" width="50" height="14" rx="5" fill={dark} opacity="0.12" />
      <text x="39" y="108" textAnchor="middle" fontSize="6" fill={dark} fontFamily={f} fontWeight="600">Buy Now</text>
      <text x="138" y="14" textAnchor="middle" fontSize="6" fill={`${ink}0.3)`} fontFamily={f} fontWeight="500">Monthly Revenue</text>
      {[{x:90,h:14},{x:106,h:22},{x:122,h:18},{x:138,h:30},{x:154,h:26},{x:170,h:42},{x:186,h:56}].map((b,i) => (
        <rect key={i} x={b.x} y={108-b.h} width="11" height={b.h} rx="2.5" fill={dark} opacity={0.12 + i*0.08} />
      ))}
      <line x1="90" y1="108" x2="197" y2="108" stroke={`${ink}0.06)`} strokeWidth="0.5" />
      <rect x="154" y="42" width="40" height="14" rx="7" fill="rgba(16,185,129,0.1)" />
      <text x="174" y="52" textAnchor="middle" fontSize="6.5" fill="#10B981" fontFamily={f} fontWeight="600">+35%</text>
    </svg>,
    // 3 — StaplerLabs: Code editor
    <svg key={3} viewBox="0 0 200 130" fill="none" className="w-full h-auto">
      <rect x="8" y="8" width="184" height="108" rx="8" fill="#FFFFFF" stroke={`${ink}0.1)`} strokeWidth="1" />
      <rect x="8" y="8" width="184" height="20" rx="8" fill={`${ink}0.02)`} />
      <rect x="8" y="20" width="184" height="8" fill={`${ink}0.02)`} />
      <circle cx="20" cy="18" r="3" fill="#FF5F56" opacity="0.5" />
      <circle cx="30" cy="18" r="3" fill="#FFBD2E" opacity="0.5" />
      <circle cx="40" cy="18" r="3" fill="#27C93F" opacity="0.5" />
      <text x="100" y="20" textAnchor="middle" fontSize="5.5" fill={`${ink}0.2)`} fontFamily={f}>page.tsx</text>
      <rect x="24" y="34" width="22" height="4" rx="1" fill="#7C3AED" opacity="0.2" />
      <rect x="50" y="34" width="40" height="4" rx="1" fill={`${ink}0.06)`} />
      <rect x="24" y="42" width="18" height="4" rx="1" fill="#EF4444" opacity="0.15" />
      <rect x="46" y="42" width="55" height="4" rx="1" fill={`${ink}0.05)`} />
      <rect x="32" y="50" width="28" height="4" rx="1" fill={dark} opacity="0.25" />
      <rect x="64" y="50" width="45" height="4" rx="1" fill={`${ink}0.06)`} />
      <rect x="32" y="58" width="60" height="4" rx="1" fill={`${ink}0.04)`} />
      <rect x="32" y="66" width="48" height="4" rx="1" fill="#10B981" opacity="0.15" />
      <g transform="translate(24, 96)">
        {[{l:"Next.js",w:34},{l:"Tailwind",w:38},{l:"Motion",w:34},{l:"SVG",w:26}].map((p,i) => (
          <g key={i}>
            <rect x={i > 0 ? [0,38,80,118][i] : 0} y="0" width={p.w} height="12" rx="6" fill={dark} opacity="0.08" />
            <text x={i > 0 ? [0,38,80,118][i] + p.w/2 : p.w/2} y="9" textAnchor="middle" fontSize="5.5" fill={dark} fontFamily={f} opacity="0.7">{p.l}</text>
          </g>
        ))}
      </g>
    </svg>,
  ];

  return (
    <div ref={ref} className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/10", backgroundColor: "var(--bg-base)", border: "1px solid var(--border-default)" }}>
      <motion.div
        className="w-full h-full flex items-center justify-center p-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {visuals[index] || visuals[3]}
      </motion.div>
    </div>
  );
}
