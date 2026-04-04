import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "StaplerLabs is a management consulting and technology execution platform for established Indian businesses. Named after the most underrated tool in the office.",
  keywords: [
    "about StaplerLabs",
    "management consulting India",
    "technology execution India",
    "SMB consulting India",
    "business consulting Delhi NCR",
  ],
  openGraph: {
    title: "About StaplerLabs",
    description:
      "Management consulting and technology execution for established Indian businesses doing Rs. 50L to Rs. 50Cr.",
    url: "https://staplerlabs.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About StaplerLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | StaplerLabs",
    description: "Management consulting and technology execution for established Indian businesses.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://staplerlabs.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
