"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most standard business websites go live in 10-14 days. Complex projects with custom functionality can take 3-4 weeks. We'll give you a timeline before we start.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. Most of our automation and web work can be done remotely for anyone, anywhere. SEO and onboarding work best for India-based businesses right now.",
  },
  {
    q: "Can I start with just one service?",
    a: "Absolutely. Most clients start with one service and add others as they see results. No bundles, no upselling pressure.",
  },
  {
    q: "What if I need to pause the project?",
    a: "Life happens. We'll hold your project for up to 30 days at no extra cost. Beyond that, we'll figure something out. We're human.",
  },
  {
    q: "What do you charge?",
    a: "It depends on what you need. A basic business website starts around ₹15,000. Automation projects vary by complexity. We give you a clear quote before any work begins.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = {
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      service:  (form.elements.namedItem("service")  as HTMLSelectElement).value,
      budget:   (form.elements.namedItem("budget")   as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      email:    (form.elements.namedItem("email")    as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setFormError(json.error ?? "Something went wrong. Please try again.");
        setSending(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4 text-center lg:text-left">
              Let&apos;s figure out if we&apos;re a{" "}
              <span className="t-yellow">fit.</span>
            </h1>
            <p className="max-w-2xl mb-16 text-center lg:text-left t-tertiary">
              We don&apos;t do discovery calls where we pitch at you for 45
              minutes. We ask a few questions, you answer honestly, and we tell
              you exactly what we&apos;d do and what it would cost. No fluff.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Form */}
            <FadeIn delay={0.1}>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 t-muted">
                      What&apos;s your business?
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      placeholder="e.g. Dental clinic in Rohtak, SaaS startup in Bengaluru"
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 t-muted">
                      What do you need help with?
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    >
                      <option value="">Select one</option>
                      <option value="web">Web Development</option>
                      <option value="automation">Business Automation</option>
                      <option value="onboarding">
                        Offline to Online Onboarding
                      </option>
                      <option value="seo">SEO &amp; Content</option>
                      <option value="ads">Professional Advertising</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 t-muted">
                      Rough budget range
                    </label>
                    <select
                      name="budget"
                      required
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    >
                      <option value="">Select one</option>
                      <option value="under-15k">Under ₹15,000</option>
                      <option value="15k-50k">₹15,000 - ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="above-1L">Above ₹1,00,000</option>
                      <option value="no-idea">I have no idea yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 t-muted">
                      How soon do you need this?
                    </label>
                    <select
                      name="timeline"
                      required
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    >
                      <option value="">Select one</option>
                      <option value="asap">As soon as possible</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="month">Within a month</option>
                      <option value="no-rush">No rush, just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 t-muted">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 t-muted">
                      Your WhatsApp number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    />
                  </div>

                  {formError && (
                    <p className="text-sm px-4 py-3 rounded-lg" style={{ background: "rgba(255,60,60,0.08)", color: "#ff6b6b", border: "1px solid rgba(255,60,60,0.2)" }}>
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-yellow py-3.5 rounded-md disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send my details"}
                  </button>
                </form>
              ) : (
                <div className="rounded-xl p-8 text-center" style={{ border: "1px solid var(--border-hover)" }}>
                  <p className="t-yellow font-display font-bold text-2xl mb-3">
                    Got it.
                  </p>
                  <p className="text-[15px] t-secondary">
                    We&apos;ll get back to you on WhatsApp within 24 hours.
                    Usually much faster. In the meantime, feel free to message
                    us directly.
                  </p>
                </div>
              )}

              {/* Alternative contact */}
              <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--border-primary)" }}>
                <p className="text-xs font-mono uppercase tracking-wider mb-3 t-dim">
                  Or reach out directly
                </p>
                <p className="text-[15px] t-secondary">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/918292511007"
                    className="t-yellow hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 82925 11007
                  </a>
                </p>
                <p className="text-[15px] mt-1 t-secondary">
                  Email:{" "}
                  <a
                    href="mailto:work@staplerlabs.com"
                    className="t-yellow hover:underline"
                  >
                    work@staplerlabs.com
                  </a>
                </p>
              </div>
            </FadeIn>

            {/* FAQ */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-display font-bold text-lg mb-6">
                  Quick answers
                </h2>
                <div className="space-y-6">
                  {faqs.map((f, i) => (
                    <div key={i}>
                      <p className="text-[15px] font-semibold mb-1.5 t-primary">
                        {f.q}
                      </p>
                      <p className="text-[14px] leading-relaxed t-tertiary">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
