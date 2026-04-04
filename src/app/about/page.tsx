"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import StaplerDiagram from "@/components/StaplerDiagram";

const businessModelCards = [
  {
    title: "Diagnostic",
    desc: "AI-powered Business Intelligence Dashboard generated in 30 minutes. Business Index Score, competitor map, gap analysis, and visibility assessment.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Consultant",
    desc: "A dedicated StaplerLabs consultant walks you through findings, identifies the highest-leverage interventions, and builds your strategic roadmap.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    title: "Execution",
    desc: "Full-stack technology execution \u2014 website, automation, SEO, chatbots, ads. Scoped from the diagnostic, not from a feature list.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    desc: "We stay. Monthly intelligence reports, ongoing competitive monitoring, and strategic advisory. Not a one-time vendor \u2014 a long-term partner.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header — Origin Story */}
      <section style={{ background: "#FFFFFF", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h1 className="font-display mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 48px)" }}>
              Named after the most{" "}
              <span style={{ color: "var(--color-primary)" }}>underrated</span> tool in the
              office.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5" style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
              <p>
                A stapler is a precision instrument that holds things together &mdash; deceptively
                simple on the outside, engineered on the inside, and only effective when every
                component does its job.
              </p>
              <p>
                StaplerLabs does the same for established businesses: it doesn&apos;t replace what
                the business has built &mdash; it binds new digital capability onto a foundation
                that already has real value.
              </p>
              <p>
                In a market full of agencies called &ldquo;DigiPro Solutions&rdquo; and
                &ldquo;TechBridge Innovations,&rdquo; we named ourselves after a stapler.
                That was deliberate.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Positioning */}
      <section style={{ background: "var(--color-bg-subtle)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              What we are
            </h2>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "16px" }}>
              StaplerLabs is a management consulting and technology execution platform for established
              Indian businesses doing Rs. 50 Lakh to Rs. 50 Crore in annual revenue.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
              We help businesses that are too serious to ignore digital and too smart to overpay for it.
              Because being better at business should not mean losing to someone who is better at the internet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Small on purpose */}
      <section style={{ background: "#FFFFFF", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              We&apos;re small on purpose.
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "12px" }}>
              Every project gets a founder&apos;s attention, not an intern&apos;s. We could hire
              more people and take on more clients. We choose not to. Because the moment you scale
              past the point where the person who sold the project is also the person building it,
              quality drops.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
              This doesn&apos;t mean we&apos;re slow. It means we&apos;re selective. If we take your
              project, it&apos;s because we know we can deliver something worth paying for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Business Model Cards */}
      <section style={{ background: "var(--color-bg-subtle)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-display mb-10" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              How we work
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {businessModelCards.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-theme rounded-xl p-7 h-full" style={{ background: "#FFFFFF" }}>
                  <div className="mb-3" style={{ opacity: 0.8 }}>
                    {b.icon}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--color-primary)", marginBottom: "6px" }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "none" }}>
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stapler Diagram — dark section */}
      <section className="anatomy-section" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-md mx-auto px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl sm:text-4xl mb-4">The StaplerLabs Anatomy</h2>
              <p className="t-secondary text-base max-w-2xl mx-auto">Every part of the tool serves a distinct, critical purpose. Here is how our services map to the anatomy of our namesake.</p>
            </div>
            <StaplerDiagram />
            <p className="text-sm font-mono text-center mt-6" style={{ color: "rgba(249,250,251,0.4)" }}>
              Holding things together since 2024.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="px-6 text-center">
          <FadeIn>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Now that you know who we are.
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Find out exactly where your business stands.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
              Get Your Business Diagnostic &mdash; Rs. 999
              <span className="arrow-chip">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
