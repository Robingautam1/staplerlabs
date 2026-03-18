"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  WebDevIllustration,
  AutomationIllustration,
  ReceptionistIllustration,
  OnboardingIllustration,
  SEOIllustration,
  AdsIllustration,
} from "@/components/ServiceIllustrations";

const services = [
  {
    headline: "Websites that work while you sleep",
    illustration: <WebDevIllustration />,
    body: "We don't just build websites - we build digital storefronts that load fast, look sharp, and convert visitors into customers. Whether you need a founder portfolio, a local business site, or a SaaS front-end, we build with Next.js because speed isn't a feature, it's table stakes. Most standard projects go live in under two weeks.",
    outcomes: [
      "A website that loads in under 2 seconds on 4G",
      "Mobile-first design that actually looks good on phones",
      "Built-in SEO foundations from day one",
      "Simple content management you can handle yourself",
      "Post-launch support that doesn't expire the moment you pay",
    ],
  },
  {
    headline: "The best employee you'll ever have works 24 hours a day",
    illustration: <AutomationIllustration />,
    body: "WhatsApp automation, CRM workflows, invoice follow-ups, AI-assisted customer responses - everything that makes your business feel like it has twice the staff. The kind of automation that doesn't just save time, it makes your competitors wonder how you're responding to leads at 2am.",
    outcomes: [
      "WhatsApp bots that qualify leads before you wake up",
      "CRM workflows that move deals forward automatically",
      "Invoice and payment follow-ups that are persistent but polite",
      "Internal process automation that eliminates copy-pasting",
      "AI customer response systems with your brand's voice",
    ],
  },
  {
    headline: "Your receptionist doesn't need a lunch break. Ours doesn't either.",
    illustration: <ReceptionistIllustration />,
    body: "An AI-powered front desk that handles calls, responds on WhatsApp in seconds, qualifies leads, and books appointments - all before a human gets involved. For business owners who are tired of missing calls while they're actually doing their job.",
    outcomes: [
      "Instant WhatsApp first-response to every enquiry",
      "Smart appointment booking with calendar integration",
      "Lead qualification that filters out tyre-kickers",
      "Call handling scripts tailored to your business",
      "Monthly reports on every conversation handled",
    ],
  },
  {
    headline: "You've been running a great business. Now let the internet know.",
    illustration: <OnboardingIllustration />,
    body: "For businesses with zero digital presence - the doctor with a packed waiting room but no Google listing, the CA with 200 clients but no website, the shop that's been around for 30 years but can't be found online. We handle everything: Google Business Profile, your first website, social handles, payment gateway, QR menus, digital visiting cards. The full package.",
    outcomes: [
      "Google Business Profile that shows up in local searches",
      "A professional website that matches your reputation",
      "Social media handles claimed and set up",
      "Digital payment integration - UPI, cards, the works",
      "QR menus, digital cards, and everything to bridge offline and online",
    ],
  },
  {
    headline: "The long game that actually pays off",
    illustration: <SEOIllustration />,
    body: "We won't promise page 1 in 30 days because that's not how SEO works and anyone who tells you otherwise is either lying or selling something. What we will do: build a proper technical foundation, create content that real humans want to read, and optimise your local presence so the people searching for your service actually find you. It takes 3-6 months. It's worth it.",
    outcomes: [
      "Technical SEO audit and fixes that search engines reward",
      "Local SEO that puts you on the map - literally",
      "Content strategy built around what your customers actually search",
      "Google Business Profile optimisation with regular updates",
      "Monthly reports with metrics that make sense to non-SEO people",
    ],
  },
  {
    headline: "Ads that spend your money wisely, not quickly",
    illustration: <AdsIllustration />,
    body: "Meta Ads and Google Ads for businesses that want results without burning money learning how. We handle strategy, creative direction, copy, A/B testing, and monthly reporting. Most clients have never had anyone explain what their ad spend actually bought them. We change that.",
    outcomes: [
      "Campaign strategy based on your actual business goals",
      "Creative direction and ad copy that doesn't sound like everyone else",
      "A/B testing that improves performance month over month",
      "Monthly reports that explain exactly where your money went",
      "Budget recommendations based on data, not gut feel",
    ],
  },
];

const questions = [
  {
    q: "What best describes your business right now?",
    options: [
      { label: "I have a running business but no website or online presence", tags: ["onboarding", "web"] },
      { label: "I have a website but it's not bringing in leads", tags: ["seo", "ads"] },
      { label: "I'm drowning in manual tasks and follow-ups", tags: ["automation", "receptionist"] },
      { label: "I'm starting something new and need the full setup", tags: ["web", "onboarding", "automation"] },
    ],
  },
  {
    q: "What's eating up most of your time?",
    options: [
      { label: "Responding to enquiries and booking appointments", tags: ["receptionist", "automation"] },
      { label: "Trying to figure out social media and online marketing", tags: ["seo", "ads"] },
      { label: "Managing invoices, follow-ups, and CRM stuff", tags: ["automation"] },
      { label: "I don't even know where to start with digital", tags: ["onboarding"] },
    ],
  },
  {
    q: "What would feel like a win in 30 days?",
    options: [
      { label: "My business shows up when people search for it", tags: ["seo", "onboarding"] },
      { label: "Leads are coming in without me chasing them", tags: ["ads", "seo"] },
      { label: "Repetitive tasks are handled automatically", tags: ["automation", "receptionist"] },
      { label: "I have a professional website I can share proudly", tags: ["web"] },
    ],
  },
  {
    q: "What's your budget situation?",
    options: [
      { label: "I need maximum impact with minimum spend", tags: ["onboarding", "seo"] },
      { label: "I can invest if I see clear ROI", tags: ["ads", "automation"] },
      { label: "I want the full package, done properly", tags: ["web", "automation", "ads", "seo"] },
      { label: "I honestly have no idea what things should cost", tags: ["onboarding", "web"] },
    ],
  },
];

const serviceMap: Record<string, string> = {
  web: "Web Development",
  automation: "Business Automation",
  receptionist: "Online Receptionist",
  onboarding: "Offline to Online Onboarding",
  seo: "SEO & Content",
  ads: "Professional Advertising",
};

export default function ServicesPage() {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleAnswer = (tags: string[]) => {
    const newScores = { ...scores };
    tags.forEach((t) => (newScores[t] = (newScores[t] || 0) + 1));
    setScores(newScores);
    setStep(step + 1);
  };

  const getResult = () => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, 2).map(([key]) => serviceMap[key]);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 text-center">
        <FadeIn>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl">
            What we <span className="t-yellow">actually</span> do
          </h1>
          <p className="mt-4 max-w-xl mx-auto t-tertiary text-sm sm:text-base">
            Six services. No fluff. Each one exists because we watched businesses struggle without it.
          </p>
        </FadeIn>
      </section>

      {/* Service sections */}
      {services.map((s, i) => (
        <section
          key={i}
          className="py-14 sm:py-20 px-4 sm:px-6"
          style={i % 2 !== 0 ? { backgroundColor: "var(--bg-card)" } : {}}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
              style={i % 2 !== 0 ? { direction: "rtl" } : {}}
            >
              <FadeIn
                direction={i % 2 === 0 ? "left" : "right"}
                className="order-2 lg:order-1"
                delay={0}
              >
                <div style={{ direction: "ltr" }}>
                  <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--yellow-muted)" }}>
                    0{i + 1}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl mb-4 leading-snug">
                    {s.headline}
                  </h2>
                  <p className="text-[15.5px] leading-relaxed mb-6 t-secondary">
                    {s.body}
                  </p>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-3 t-muted">
                      What you get
                    </p>
                    <ul className="space-y-2.5">
                      {s.outcomes.map((o, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-[15px] t-secondary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--yellow)" }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn
                direction={i % 2 === 0 ? "right" : "left"}
                className="order-1 lg:order-2"
                delay={0.1}
              >
                <div
                  className="w-full max-w-sm mx-auto card-theme rounded-2xl p-8 flex items-center justify-center"
                  style={{ direction: "ltr", minHeight: "280px", borderRadius: "16px" }}
                >
                  {s.illustration}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ============ DIAGNOSTIC QUIZ ============ */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl mb-3">
              Not sure which one you need?
            </h2>
            <p className="mb-10 t-tertiary">
              Four quick questions. No form submissions. Just a nudge in the right direction.
            </p>
          </FadeIn>

          {step === -1 && (
            <FadeIn delay={0.1}>
              <button
                onClick={() => setStep(0)}
                className="btn-primary"
              >
                Take the quiz
              </button>
            </FadeIn>
          )}

          {step >= 0 && step < questions.length && (
            <FadeIn key={step} delay={0}>
              <div className="text-left rounded-xl p-8" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-primary)" }}>
                <p className="text-xs font-mono mb-2 t-dim">
                  Question {step + 1} of {questions.length}
                </p>
                <p className="font-display text-lg mb-6">
                  {questions[step].q}
                </p>
                <div className="space-y-3">
                  {questions[step].options.map((o, j) => (
                    <button
                      key={j}
                      onClick={() => handleAnswer(o.tags)}
                      className="w-full text-left px-5 py-3.5 rounded-lg text-[15px] t-secondary transition-all"
                      style={{ border: "1px solid var(--border-primary)" }}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {step >= questions.length && (
            <FadeIn delay={0}>
              <div className="rounded-xl p-8 text-left" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-hover)" }}>
                <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--yellow-muted)" }}>
                  Our recommendation
                </p>
                <p className="font-display text-xl mb-4">
                  Based on your answers, we&apos;d start with:
                </p>
                <div className="space-y-2 mb-6">
                  {getResult().map((r, i) => (
                    <p key={i} className="t-yellow font-semibold text-lg">
                      {i + 1}. {r}
                    </p>
                  ))}
                </div>
                <p className="text-[15px] mb-6 t-tertiary">
                  Of course, we&apos;d want to chat before committing to anything. Every business is different.
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary text-sm"
                  >
                    Let&apos;s talk
                  </Link>
                  <button
                    onClick={() => {
                      setStep(-1);
                      setScores({});
                    }}
                    className="px-6 py-3 rounded-md text-sm t-tertiary transition-colors"
                    style={{ border: "1px solid var(--border-primary)" }}
                  >
                    Retake quiz
                  </button>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-6 text-center" style={{ marginTop: "40px" }}>
        <FadeIn>
          <h2 className="font-display text-3xl mb-4">
            Want to talk specifics?
          </h2>
          <p className="mb-8 max-w-md mx-auto t-tertiary">
            Tell us what you need. We&apos;ll tell you exactly what we&apos;d do, how long it takes, and what it costs.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Let&apos;s talk
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
