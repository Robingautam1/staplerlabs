"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import StaplerDiagram from "@/components/StaplerDiagram";

const beliefIcons = [
  // Padlock — no lock-in
  <svg key="lock" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0" />
    <circle cx="12" cy="16" r="1.5" fill="var(--amber)" stroke="none" />
  </svg>,
  // Speech bubble — no jargon
  <svg key="speech" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-4.5-1.1L3 21l1.1-4.5A9 9 0 1 1 21 12Z" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="13" y2="14" />
  </svg>,
  // Eye — no hiding
  <svg key="eye" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // Price tag — no mystery pricing
  <svg key="tag" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 2 12l8.5 8.5a1 1 0 0 0 1.4 0L22 10.5V2H12Z" />
    <circle cx="17" cy="7" r="1.5" fill="var(--amber)" stroke="none" />
  </svg>,
];

const beliefs = [
  {
    title: "No lock-in contracts",
    desc: "If we're doing good work, you'll stay. If we're not, you shouldn't have to. Month-to-month, always.",
  },
  {
    title: "No jargon in client calls",
    desc: "If we can't explain what we're doing in plain language, we probably don't understand it well enough ourselves.",
  },
  {
    title: "No hiding behind dashboards",
    desc: "We send updates before you ask. If something's going wrong, you hear about it from us, not from your customers.",
  },
  {
    title: "No mystery pricing",
    desc: "You get a quote before we start. No surprise invoices, no scope-creep charges. If the scope changes, we talk about it first.",
  },
];

const builtFor = [
  "Local businesses in Tier 2 and Tier 3 cities who've been doing great work offline and need to exist online",
  "Founders who are the smartest person in their field but don't have time to figure out digital marketing",
  "Professionals - doctors, CAs, lawyers - who know they should be online but don't know where to start",
  "Small teams that need enterprise-level automation at prices that don't require a board meeting",
  "Anyone who's been burned by a vendor that promised the world and delivered a WordPress template",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">
              Named after the most{" "}
              <span className="t-yellow">underrated</span> tool in the
              office.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed t-secondary">
              <p>
                In a market full of agencies called &ldquo;DigiPro
                Solutions&rdquo; and &ldquo;TechBridge Innovations,&rdquo; we
                named ourselves after a stapler. That was deliberate.
              </p>
              <p>
                Because a stapler is the most underrated tool in any office. It
                holds everything together without making a noise about it. No
                one writes LinkedIn posts about their stapler. No one takes it
                to conferences. But take it away, and everything falls apart.
              </p>
              <p>
                That&apos;s what we do. We build the systems, the websites, the
                automations, and the digital infrastructure that holds your
                business together. And then we get out of the way so you can do
                the thing you&apos;re actually good at.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            {/* Spotlight illustration */}
            <div className="flex justify-center mb-8">
              <svg viewBox="0 0 200 100" fill="none" className="w-48 h-auto" style={{ overflow: "visible" }}>
                {/* Spotlight beam */}
                <path d="M100 12 L50 90 L150 90 Z" fill="var(--amber)" opacity="0.04" />
                <path d="M100 12 L60 90 L140 90 Z" fill="var(--amber)" opacity="0.04" />
                {/* Lamp */}
                <rect x="88" y="2" width="24" height="14" rx="4" fill="var(--bg-card)" stroke="rgba(var(--ink-rgb),0.12)" strokeWidth="1" />
                <rect x="94" y="16" width="12" height="3" rx="1" fill="var(--amber)" opacity="0.4" />
                {/* Person silhouette at desk */}
                <circle cx="100" cy="62" r="8" fill="rgba(var(--ink-rgb),0.06)" />
                <rect x="88" y="72" width="24" height="16" rx="3" fill="rgba(var(--ink-rgb),0.04)" stroke="rgba(var(--ink-rgb),0.06)" strokeWidth="0.8" />
                {/* Desk */}
                <line x1="60" y1="90" x2="140" y2="90" stroke="rgba(var(--ink-rgb),0.1)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Monitor */}
                <rect x="78" y="74" width="16" height="12" rx="2" fill="var(--amber)" opacity="0.08" stroke="rgba(var(--ink-rgb),0.08)" strokeWidth="0.5" />
              </svg>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl mb-6">
              We&apos;re small on purpose.
            </h2>
            <p className="text-base leading-relaxed mb-4 t-secondary">
              Every project gets a founder&apos;s attention, not an
              intern&apos;s. We could hire more people and take on more clients.
              We choose not to. Because the moment you scale past the point
              where the person who sold the project is also the person building
              it, quality drops. We&apos;ve seen it happen. We refuse to let it
              happen here.
            </p>
            <p className="text-base leading-relaxed t-secondary">
              This doesn&apos;t mean we&apos;re slow. It means we&apos;re
              selective. If we take your project, it&apos;s because we know
              we can deliver something worth paying for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl mb-10">
              Things we actually believe in
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {beliefs.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-theme rounded-xl p-6 h-full">
                  <div className="mb-3 opacity-60">
                    {beliefIcons[i]}
                  </div>
                  <h3 className="font-display text-base mb-2 t-yellow">
                    {b.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed t-secondary">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl mb-8">
              Who we&apos;re built for
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {builtFor.map((b, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--yellow)" }} />
                  <p className="text-[15px] leading-relaxed t-secondary">{b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stapler Diagram — exploded view */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-md mx-auto">
          <FadeIn>
            <StaplerDiagram />
            <p className="text-sm font-mono t-dim text-center mt-6">
              Holding things together since 2024.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl mb-4">
            Now that you know who we are.
          </h2>
          <p className="mb-8 max-w-md mx-auto t-tertiary">
            Let&apos;s find out if we can help you.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
            <span className="arrow-chip">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
