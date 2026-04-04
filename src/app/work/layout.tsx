import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real results for real businesses. Case studies from healthcare, professional services, and retail. See how StaplerLabs delivers measurable outcomes.",
  keywords: [
    "business consulting case studies India",
    "digital transformation results",
    "web development portfolio India",
    "business automation case study",
    "StaplerLabs portfolio",
  ],
  openGraph: {
    title: "Our Work — StaplerLabs",
    description: "Real projects. Real outcomes. No stock screenshots or vague testimonials.",
    url: "https://staplerlabs.com/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "StaplerLabs — Our Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | StaplerLabs",
    description: "Real projects. Real outcomes. Case studies from healthcare, professional services, and retail.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://staplerlabs.com/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
