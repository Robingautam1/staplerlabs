"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const consultingServices = [
  { mono: "CP", title: "Competitive Positioning Strategy", desc: "Deep analysis of your competitive landscape. Clear digital positioning tailored to your sector, geography, and revenue target." },
  { mono: "DB", title: "Digital Brand Architecture", desc: "Defines your online identity, messaging hierarchy, and positioning. Coherence across all digital touchpoints." },
  { mono: "CA", title: "Customer Acquisition Strategy", desc: "Identifies right channels, funnels, and lead generation approaches for your specific business type." },
  { mono: "SR", title: "90-Day Strategic Roadmap", desc: "Phased, prioritised action plan with clear milestones, success metrics, and resource requirements." },
  { mono: "MC", title: "Monthly Competitor Intelligence", desc: "Ongoing monitoring of how digital competitors are evolving their strategy, spend, and online presence." },
  { mono: "EA", title: "Executive Advisory Sessions", desc: "Direct access to senior StaplerLabs consultants for strategy reviews, decision support, and course corrections." },
];

const techServices = [
  { title: "Full-Stack Web Development", desc: "Custom-built business websites engineered for local SEO, mobile performance, and commercial conversion. Not templates." },
  { title: "Business Automation", desc: "WhatsApp pipelines, appointment scheduling, lead nurturing, follow-up automation, and inquiry management workflows." },
  { title: "Local SEO & Online Listing", desc: "Google Business Profile setup and optimisation, review generation, local keyword strategy, and map ranking management." },
  { title: "AI-Powered Chatbots", desc: "Custom WhatsApp and web chatbots for customer service, appointment booking, lead qualification, and inquiry handling." },
  { title: "Performance Marketing", desc: "Managed Google Ads and Meta campaigns with structured attribution, conversion tracking, and monthly reporting." },
  { title: "Digital Brand Identity", desc: "Logo, brand system, social media setup, and visual identity aligned with your competitive positioning strategy." },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5.5vw, 68px)", fontWeight: 400, marginBottom: "16px" }}>
              Consulting + Technology.<br />
              <em>One integrated engagement.</em>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
              StaplerLabs combines strategic management consulting with full-stack technology execution.
              We diagnose first, advise second, and build third. Every technology product is scoped from
              diagnostic findings, not from a feature list.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How the engagement works */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="label-caps-blue" style={{ marginBottom: "12px" }}>Layer 1</p>
                <h2 style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "16px" }}>Management Consulting</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
                  Strategic advisory on digital positioning, competitive intelligence, online brand
                  architecture, and customer acquisition strategy. For businesses competing with
                  VC-funded startups and D2C brands that spend 40&ndash;60% of revenue on digital.
                </p>
              </div>
              <div>
                <p className="label-caps-blue" style={{ marginBottom: "12px" }}>Layer 2</p>
                <h2 style={{ fontFamily: "var(--font-body)", fontSize: "20px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "16px" }}>Technology Execution</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
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
      <section style={{ background: "var(--bg-base)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="label-caps" style={{ marginBottom: "12px" }}>Consulting services</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "40px" }}>
              Strategy that drives every technical decision
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="card-theme p-6 h-full">
                  <div style={{
                    width: 44, height: 44, background: "var(--bg-base)", borderRadius: "8px",
                    border: "1px solid var(--border-default)", display: "flex", alignItems: "center",
                    justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "18px",
                    color: "var(--text-primary)", marginBottom: "16px",
                  }}>
                    {s.mono}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section style={{ background: "var(--bg-base)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="label-caps" style={{ marginBottom: "12px" }}>Technology services</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "16px" }}>
              Everything recommended by the diagnostic, built to spec
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)", marginBottom: "40px", maxWidth: "600px" }}>
              All technology services are quoted separately from consulting. They are recommended
              by your consultant based on diagnostic findings.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="card-theme p-6 h-full">
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
                    {s.desc}
                  </p>
                  <span style={{
                    display: "inline-block", marginTop: "12px",
                    fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--text-faint)",
                    background: "var(--bg-base)", borderRadius: "9999px",
                    padding: "3px 10px", border: "1px solid var(--border-default)",
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
      <section style={{ background: "var(--bg-base)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="label-caps" style={{ marginBottom: "12px" }}>Pricing</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "16px" }}>
              Transparent. <em>No hidden retainers.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 40px" }}>
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
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "var(--text-muted)", marginBottom: "4px" }}>{p.tier}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--text-primary)" }}>{p.price}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)", marginTop: "2px" }}>{p.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 0" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, color: "white" }}>
              Ready to find out <em>where your business stands?</em>
            </h2>
            <p className="mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "#9CA3AF", maxWidth: "500px", marginTop: "16px" }}>
              Start with the Rs. 999 diagnostic. Get your AI Business Intelligence Dashboard in 30 minutes.
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
