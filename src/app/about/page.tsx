"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import StaplerDiagram from "@/components/StaplerDiagram";

const businessModelCards = [
  { mono: "DX", title: "Diagnostic", desc: "AI-powered Business Intelligence Dashboard generated in 30 minutes. Business Index Score, competitor map, gap analysis, and visibility assessment." },
  { mono: "CN", title: "Consultant", desc: "A dedicated StaplerLabs consultant walks you through findings, identifies the highest-leverage interventions, and builds your strategic roadmap." },
  { mono: "EX", title: "Execution", desc: "Full-stack technology execution \u2014 website, automation, SEO, chatbots, ads. Scoped from the diagnostic, not from a feature list." },
  { mono: "PT", title: "Partnership", desc: "We stay. Monthly intelligence reports, ongoing competitive monitoring, and strategic advisory. Not a one-time vendor \u2014 a long-term partner." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header — Origin Story */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5.5vw, 68px)", fontWeight: 400, marginBottom: "24px" }}>
              Named after the most <em>underrated</em> tool in the office.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5" style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--text-secondary)" }}>
              <p style={{ maxWidth: "none" }}>
                A stapler is a precision instrument that holds things together &mdash; deceptively
                simple on the outside, engineered on the inside, and only effective when every
                component does its job.
              </p>
              <p style={{ maxWidth: "none" }}>
                StaplerLabs does the same for established businesses: it doesn&apos;t replace what
                the business has built &mdash; it binds new digital capability onto a foundation
                that already has real value.
              </p>
              <p style={{ maxWidth: "none" }}>
                In a market full of agencies called &ldquo;DigiPro Solutions&rdquo; and
                &ldquo;TechBridge Innovations,&rdquo; we named ourselves after a stapler.
                That was deliberate.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Positioning */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "24px" }}>
              What we are
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 600, marginBottom: "16px", maxWidth: "none" }}>
              StaplerLabs is a management consulting and technology execution platform for established
              Indian businesses doing Rs. 50 Lakh to Rs. 50 Crore in annual revenue.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
              We help businesses that are too serious to ignore digital and too smart to overpay for it.
              Because being better at business should not mean losing to someone who is better at the internet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Small on purpose */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "24px" }}>
              We&apos;re small on purpose.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "12px", maxWidth: "none" }}>
              Every project gets a founder&apos;s attention, not an intern&apos;s. We could hire
              more people and take on more clients. We choose not to. Because the moment you scale
              past the point where the person who sold the project is also the person building it,
              quality drops.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
              This doesn&apos;t mean we&apos;re slow. It means we&apos;re selective. If we take your
              project, it&apos;s because we know we can deliver something worth paying for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Business Model Cards */}
      <section style={{ background: "var(--bg-base)", paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, marginBottom: "40px" }}>
              How we work
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {businessModelCards.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-theme rounded-xl p-7 h-full">
                  <div style={{
                    width: 44, height: 44, background: "var(--bg-base)", borderRadius: "8px",
                    border: "1px solid var(--border-default)", display: "flex", alignItems: "center",
                    justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "18px",
                    color: "var(--text-primary)", marginBottom: "16px",
                  }}>
                    {b.mono}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>
                    {b.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "none" }}>
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stapler Diagram — dark section */}
      <section className="anatomy-section">
        <div className="max-w-md mx-auto px-6">
          <FadeIn>
            <p className="label-caps text-center" style={{ color: "#6B7280", marginBottom: "16px" }}>The Anatomy</p>
            <div className="mb-16 text-center">
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 400, color: "white", marginBottom: "16px" }}>The StaplerLabs Anatomy</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "#9CA3AF", maxWidth: "500px", margin: "0 auto" }}>Every part of the tool serves a distinct, critical purpose. Here is how our services map to the anatomy of our namesake.</p>
            </div>
            <StaplerDiagram />
            <p className="text-center" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "18px", color: "#6B7280", marginTop: "24px" }}>
              Every part does its job. That is the only way a stapler works.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 0" }}>
        <div className="px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, color: "white", marginBottom: "16px" }}>
              Now that you know who we are.
            </h2>
            <p className="mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "#9CA3AF", maxWidth: "480px" }}>
              Find out exactly where your business stands.
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
