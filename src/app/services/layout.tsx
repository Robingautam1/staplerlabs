import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, business automation, offline-to-online onboarding, SEO & content, and Google Ads management. Lean execution, real results — by StaplerLabs.",
  keywords: [
    "web development services India",
    "business automation services",
    "WhatsApp automation",
    "SEO services India",
    "Google Ads management",
    "local business website India",
    "offline to online business India",
    "digital operations startup",
  ],
  openGraph: {
    title: "Services — StaplerLabs",
    description:
      "Websites, automation, onboarding, SEO, and ads. Everything your digital office needs — under one roof.",
    url: "https://staplerlabs.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StaplerLabs Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | StaplerLabs",
    description:
      "Websites, automation, onboarding, SEO, and ads. Everything your digital office needs — under one roof.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://staplerlabs.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
