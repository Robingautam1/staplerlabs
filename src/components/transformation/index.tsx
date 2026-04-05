"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamic imports to keep bundle splitting efficient
const GoogleVisibilityCard = dynamic(() => import("./GoogleVisibilityCard"), { ssr: false });
const WhatsAppCard = dynamic(() => import("./WhatsAppCard"), { ssr: false });
const ReviewsCard = dynamic(() => import("./ReviewsCard"), { ssr: false });
const TrafficCard = dynamic(() => import("./TrafficCard"), { ssr: false });
const ResponseCard = dynamic(() => import("./ResponseCard"), { ssr: false });
const SetupCard = dynamic(() => import("./SetupCard"), { ssr: false });
const RevenueCard = dynamic(() => import("./RevenueCard"), { ssr: false });

interface CardConfig {
  tag: string;
  title: string;
  description: string;
  component: React.ReactNode;
  className: string; // grid area / span
  minH: number;
}

const cards: CardConfig[] = [
  {
    tag: "DISCOVERY",
    title: "From invisible to first result",
    description: "Your business shows up when someone searches for what you do.",
    component: <GoogleVisibilityCard />,
    className: "md:col-span-2 lg:col-span-2",
    minH: 280,
  },
  {
    tag: "AUTOMATION",
    title: "Enquiries answered at 2am",
    description: "A customer messages at midnight. They get a booking confirmation before you wake up.",
    component: <WhatsAppCard />,
    className: "md:col-span-2 lg:col-span-3",
    minH: 280,
  },
  {
    tag: "TRUST",
    title: "Zero reviews to 4.8★",
    description: "Automated review requests after every visit.",
    component: <ReviewsCard />,
    className: "lg:col-span-1",
    minH: 220,
  },
  {
    tag: "VISIBILITY",
    title: "200 visitors. First month.",
    description: "Real people finding you through Google Search.",
    component: <TrafficCard />,
    className: "lg:col-span-2",
    minH: 220,
  },
  {
    tag: "SPEED",
    title: "3 seconds. Not 3 hours.",
    description: "First response to every enquiry, automatically.",
    component: <ResponseCard />,
    className: "lg:col-span-2",
    minH: 220,
  },
  {
    tag: "SETUP",
    title: "Everything live in 30 days",
    description: "Website, Google, WhatsApp, QR card — all connected and working.",
    component: <SetupCard />,
    className: "md:col-span-2 lg:col-span-3",
    minH: 280,
  },
  {
    tag: "ROI",
    title: "Pays for itself in month one",
    description: "One extra customer a week covers the entire monthly retainer.",
    component: <RevenueCard />,
    className: "md:col-span-2 lg:col-span-2",
    minH: 280,
  },
];

/* Row-based stagger: Row1 (0,1), Row2 (2,3,4), Row3 (5,6) */
const rowDelays = [0, 0, 0.18, 0.18, 0.18, 0.36, 0.36];

export default function TransformationSection() {
  return (
    <section
      className="px-6"
      style={{ paddingTop: "80px", paddingBottom: "80px", background: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p
            className="font-body mb-3"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Before &amp; after
          </p>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(30px, 4.2vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Before us. After us.
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Before working with us, most businesses were invisible online. After implementation, they start showing up. It is not magic. It is just the work that should have been done two years ago.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.tag}
              className={`card-theme overflow-hidden ${card.className}`}
              style={{
                borderRadius: "16px",
                padding: "28px",
                minHeight: card.minH,
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: rowDelays[i] + (i % 3) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Tag */}
              <p
                className="font-body mb-2"
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {card.tag}
              </p>

              {/* Illustration area — takes up most space */}
              <div className="flex-1 flex items-center justify-center my-3" style={{ minHeight: 0 }}>
                {card.component}
              </div>

              {/* Title + description at bottom */}
              <div className="mt-auto">
                <p
                  className="font-body"
                  style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}
                >
                  {card.title}
                </p>
                <p
                  className="font-body mt-1"
                  style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
