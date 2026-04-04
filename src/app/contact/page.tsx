"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    q: "What is the Rs. 999 diagnostic?",
    a: "It\u2019s an AI-generated Business Intelligence Dashboard that includes your Business Index Score, competitor map, gap analysis, and visibility assessment. You also get a 1-hour guide session with an assigned StaplerLabs consultant. It\u2019s a diagnostic product fee, not a consultation fee.",
  },
  {
    q: "What happens after the diagnostic?",
    a: "Your consultant walks you through the dashboard and recommends the 2\u20133 highest-leverage interventions. You can then choose the Starter Bundle (Rs. 9,999 one-time) or Strategic Retainer (Rs. 30K\u201350K/month). No pressure.",
  },
  {
    q: "Do you work with businesses outside Delhi NCR?",
    a: "We\u2019re launching in Delhi NCR first. Mumbai, Bangalore, and Hyderabad are next. If you\u2019re in those cities, register now and we\u2019ll reach out when we expand.",
  },
  {
    q: "What size businesses do you work with?",
    a: "Established businesses generating Rs. 50 Lakh to Rs. 50 Crore in annual revenue. Below that, we\u2019re not the right fit. Above that, you likely have in-house teams already.",
  },
  {
    q: "Are consulting and technology priced separately?",
    a: "Always. Consulting fees cover strategic advisory. Technology products are scoped and quoted individually based on what the diagnostic reveals. Full transparency.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <section style={{ background: "#FFFFFF", paddingTop: "48px", paddingBottom: "80px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h1 className="font-display mb-4 text-center lg:text-left" style={{ fontSize: "clamp(32px, 4.5vw, 48px)" }}>
              Find out where your business{" "}
              <span style={{ color: "var(--color-primary)" }}>really stands.</span>
            </h1>
            <p className="max-w-2xl mb-10 sm:mb-14 text-center lg:text-left" style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
              Start with the Rs. 999 diagnostic. Get your AI Business Intelligence Dashboard
              in 30 minutes. Then decide if we&apos;re the right partner.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
            {/* Form */}
            <FadeIn delay={0.1}>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
                      What&apos;s your business?
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      placeholder="e.g. Dental clinic in Delhi NCR, CA firm in Gurgaon"
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
                      What do you need help with?
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    >
                      <option value="">Select one</option>
                      <option value="diagnostic">Business Diagnostic (Rs. 999)</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="web">Web Development</option>
                      <option value="automation">Business Automation</option>
                      <option value="seo">SEO &amp; Online Listing</option>
                      <option value="ads">Performance Marketing</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
                      Annual revenue range
                    </label>
                    <select
                      name="budget"
                      required
                      className="w-full input-theme rounded-lg px-4 py-3 text-[15px] border transition-colors"
                    >
                      <option value="">Select one</option>
                      <option value="under-50L">Under Rs. 50 Lakh</option>
                      <option value="50L-2Cr">Rs. 50 Lakh - Rs. 2 Crore</option>
                      <option value="2Cr-10Cr">Rs. 2 Crore - Rs. 10 Crore</option>
                      <option value="10Cr-50Cr">Rs. 10 Crore - Rs. 50 Crore</option>
                      <option value="above-50Cr">Above Rs. 50 Crore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
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
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
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
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
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
                    <p className="text-sm px-4 py-3 rounded-lg" style={{ background: "rgba(239,68,68,0.06)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.15)" }}>
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-primary justify-center py-3.5 rounded-md disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Get Your Business Diagnostic \u2014 Rs. 999"}
                    {!sending && (
                      <span className="arrow-chip">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="rounded-xl p-8 text-center" style={{ border: "1px solid var(--color-primary)", background: "var(--color-primary-light)" }}>
                  <p style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-primary)", marginBottom: "12px" }}>
                    Got it.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--color-text-secondary)" }}>
                    We&apos;ll get back to you on WhatsApp within 24 hours.
                    Usually much faster.
                  </p>
                </div>
              )}

              {/* Alternative contact */}
              <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                  Or reach out directly
                </p>
                <p style={{ fontSize: "15px", color: "var(--color-text-secondary)" }}>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/918292511007"
                    style={{ color: "var(--color-primary)", fontWeight: 500 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 82925 11007
                  </a>
                </p>
                <p style={{ fontSize: "15px", marginTop: "4px", color: "var(--color-text-secondary)" }}>
                  Email:{" "}
                  <a
                    href="mailto:work@staplerlabs.com"
                    style={{ color: "var(--color-primary)", fontWeight: 500 }}
                  >
                    work@staplerlabs.com
                  </a>
                </p>
                <p style={{ fontSize: "15px", marginTop: "4px", color: "var(--color-text-muted)" }}>
                  Delhi NCR, India
                </p>
              </div>
            </FadeIn>

            {/* FAQ */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-display mb-6" style={{ fontSize: "18px", fontWeight: 700 }}>
                  Common questions
                </h2>
                <div className="space-y-0">
                  {faqs.map((f, i) => (
                    <div key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between py-4 text-left"
                      >
                        <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", paddingRight: "16px" }}>
                          {f.q}
                        </p>
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="shrink-0"
                          animate={{ rotate: openFaq === i ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M4 6l4 4 4-4" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: "hidden" }}
                          >
                            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--color-text-secondary)", paddingBottom: "16px" }}>
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
