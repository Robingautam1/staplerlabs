"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const consultingServices = [
  {
    title: "Competitive Positioning Strategy",
    desc: "Deep analysis of your competitive landscape. Clear digital positioning tailored to your sector, geography, and revenue target.",
  },
  {
    title: "Digital Brand Architecture",
    desc: "Defines your online identity, messaging hierarchy, and positioning. Coherence across all digital touchpoints.",
  },
  {
    title: "Customer Acquisition Strategy",
    desc: "Identifies right channels, funnels, and lead generation approaches for your specific business type.",
  },
  {
    title: "90-Day Strategic Roadmap",
    desc: "Phased, prioritised action plan with clear milestones, success metrics, and resource requirements.",
  },
  {
    title: "Monthly Competitor Intelligence",
    desc: "Ongoing monitoring of how digital competitors are evolving their strategy, spend, and online presence.",
  },
  {
    title: "Executive Advisory Sessions",
    desc: "Direct access to senior StaplerLabs consultants for strategy reviews, decision support, and course corrections.",
  },
];

const techServices = [
  {
    title: "Full-Stack Web Development",
    desc: "Custom-built business websites engineered for local SEO, mobile performance, and commercial conversion. Not templates.",
  },
  {
    title: "Business Automation",
    desc: "WhatsApp pipelines, appointment scheduling, lead nurturing, follow-up automation, and inquiry management workflows.",
  },
  {
    title: "Local SEO & Online Listing",
    desc: "Google Business Profile setup and optimisation, review generation, local keyword strategy, and map ranking management.",
  },
  {
    title: "AI-Powered Chatbots",
    desc: "Custom WhatsApp and web chatbots for customer service, appointment booking, lead qualification, and inquiry handling.",
  },
  {
    title: "Performance Marketing",
    desc: "Managed Google Ads and Meta campaigns with structured attribution, conversion tracking, and monthly reporting.",
  },
  {
    title: "Digital Brand Identity",
    desc: "Logo, brand system, social media setup, and visual identity aligned with your competitive positioning strategy.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ background: "#FFFFFF", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h1 className="font-display" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", marginBottom: "16px" }}>
              Consulting + Technology.{" "}
              <span style={{ color: "var(--color-primary)" }}>One integrated engagement.</span>
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
              StaplerLabs combines strategic management consulting with full-stack technology execution.
              We diagnose first, advise second, and build third. Every technology product is scoped from
              diagnostic findings, not from a feature list.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How the engagement works */}
      <section style={{ background: "var(--color-bg-subtle)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="label-caps mb-3">Layer 1</p>
                <h2 className="font-display mb-4" style={{ fontSize: "24px" }}>
                  Management Consulting
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "none" }}>
                  Strategic advisory on digital positioning, competitive intelligence, online brand
                  architecture, and customer acquisition strategy. For businesses competing with
                  VC-funded startups and D2C brands that spend 40&ndash;60% of revenue on digital.
                </p>
              </div>
              <div>
                <p className="label-caps mb-3">Layer 2</p>
                <h2 className="font-display mb-4" style={{ fontSize: "24px" }}>
                  Technology Execution
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "none" }}>
                  Full-stack web development, business automation, WhatsApp pipelines, local SEO,
                  AI chatbots, and performance marketing. Always scoped from the consulting layer,
                  never sold in isolation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Consulting Services */}
      <section style={{ background: "#FFFFFF", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="label-caps mb-3">Consulting services</p>
            <h2 className="font-display mb-10" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Strategy that drives every technical decision
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="card-theme p-6 h-full">
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "6px", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "none" }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section style={{ background: "var(--color-bg-subtle)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="label-caps mb-3">Technology services</p>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Everything recommended by the diagnostic, built to spec
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "40px", maxWidth: "600px" }}>
              All technology services are quoted separately from consulting. They are recommended
              by your consultant based on diagnostic findings.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="card-theme p-6 h-full" style={{ background: "#FFFFFF" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "6px", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--color-text-secondary)", maxWidth: "none" }}>
                    {s.desc}
                  </p>
                  <span style={{
                    display: "inline-block", marginTop: "12px",
                    fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)",
                    background: "var(--color-bg-subtle)", borderRadius: "9999px",
                    padding: "3px 10px",
                  }}>
                    Quoted separately
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section style={{ background: "#FFFFFF", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="label-caps mb-3">Pricing</p>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Transparent. No hidden retainers.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto 40px" }}>
              Consulting and technology are always priced as separate, transparent line items.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { tier: "Diagnostic", price: "Rs. 999", note: "One-time" },
              { tier: "Starter Bundle", price: "Rs. 9,999", note: "One-time + tech" },
              { tier: "Strategic Retainer", price: "Rs. 30K\u201350K/mo", note: "+ tech" },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-theme p-6 text-center">
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "4px" }}>{p.tier}</p>
                  <p style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-text-primary)", letterSpacing: "-0.02em" }}>{p.price}</p>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>{p.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--color-primary)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display mb-4" style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "#FFFFFF" }}>
              Ready to find out where your business stands?
            </h2>
            <p className="mb-8 mx-auto" style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", maxWidth: "500px" }}>
              Start with the Rs. 999 diagnostic. Get your AI Business Intelligence Dashboard
              in 30 minutes.
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
