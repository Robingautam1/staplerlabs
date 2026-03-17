"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

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
                  {/* Project visual */}
                  <div
                    className="w-full rounded-lg flex flex-col items-center justify-center gap-2"
                    style={{
                      aspectRatio: "16/10",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-primary)",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                    <span className="text-[10px] font-mono uppercase tracking-wider t-dim">
                      Client work &middot; confidential
                    </span>
                  </div>
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
