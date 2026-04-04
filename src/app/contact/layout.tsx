import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get your AI Business Intelligence Dashboard in 30 minutes. Start with the Rs. 999 diagnostic. Delhi NCR.",
  keywords: [
    "contact StaplerLabs",
    "business diagnostic India",
    "business consulting quote India",
    "AI business intelligence",
    "StaplerLabs Delhi NCR",
  ],
  openGraph: {
    title: "Contact StaplerLabs",
    description: "Get your AI Business Intelligence Dashboard in 30 minutes. Start with the Rs. 999 diagnostic.",
    url: "https://staplerlabs.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact StaplerLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | StaplerLabs",
    description: "Get your AI Business Intelligence Dashboard in 30 minutes. Rs. 999 diagnostic.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://staplerlabs.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
