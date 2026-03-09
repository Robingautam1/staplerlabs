"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import StaplerLogo from "@/components/StaplerLogo";

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
  "Anyone who's been burned by an agency that promised the world and delivered a WordPress template",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6">
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-10">
              Things we actually believe in
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {beliefs.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-theme rounded-xl p-6 h-full">
                  <h3 className="font-display font-bold text-base mb-2 t-yellow">
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8">
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

      {/* Desk illustration / logo section */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <div className="max-w-xs mx-auto mb-8">
            <StaplerLogo className="w-24 h-24 mx-auto" hoverAnimate={true} />
          </div>
          <p className="text-sm font-mono t-dim">
            Holding things together since 2024.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl mb-4">
            Now that you know who we are.
          </h2>
          <p className="mb-8 max-w-md mx-auto t-tertiary">
            Let&apos;s find out if we can help you.
          </p>
          <Link
            href="/contact"
            className="inline-block btn-yellow px-8 py-3.5 rounded-md"
          >
            Get in touch
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
