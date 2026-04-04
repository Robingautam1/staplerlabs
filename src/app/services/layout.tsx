import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic consulting and technology execution: competitive positioning, digital brand architecture, web development, business automation, SEO, AI chatbots, and performance marketing.",
  keywords: [
    "management consulting services India",
    "web development India",
    "business automation India",
    "AI business diagnostics",
    "competitive positioning strategy",
    "digital transformation SMB India",
  ],
  openGraph: {
    title: "Services — StaplerLabs",
    description: "Consulting + Technology. One integrated engagement for established businesses.",
    url: "https://staplerlabs.com/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "StaplerLabs Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | StaplerLabs",
    description: "Consulting + Technology. One integrated engagement for established businesses.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://staplerlabs.com/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
