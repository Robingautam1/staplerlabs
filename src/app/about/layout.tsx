import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "StaplerLabs is a lean digital operations agency. We believe in no lock-in contracts, no jargon, and no hiding behind dashboards. Just real work that moves your business forward.",
  keywords: [
    "about StaplerLabs",
    "digital agency India",
    "lean agency India",
    "no contract digital agency",
    "honest digital marketing agency",
    "small business agency India",
    "Guwahati agency",
  ],
  openGraph: {
    title: "About StaplerLabs",
    description:
      "We're a lean digital operations agency. No lock-in. No jargon. No hiding behind dashboards. Just work that actually moves the needle.",
    url: "https://staplerlabs.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About StaplerLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | StaplerLabs",
    description:
      "We're a lean digital operations agency. No lock-in. No jargon. No hiding behind dashboards.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://staplerlabs.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
