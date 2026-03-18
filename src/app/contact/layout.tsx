import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to hand off your digital operations? Tell us what you need — website, automation, SEO, ads, or all of it. We'll get back on WhatsApp within 24 hours.",
  keywords: [
    "contact StaplerLabs",
    "hire digital startup India",
    "get a website India",
    "business automation quote India",
    "digital marketing inquiry",
    "work with StaplerLabs",
    "website development quote",
  ],
  openGraph: {
    title: "Contact StaplerLabs",
    description:
      "Tell us what you need. We'll get back on WhatsApp within 24 hours — usually much faster.",
    url: "https://staplerlabs.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact StaplerLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | StaplerLabs",
    description:
      "Tell us what you need. We'll get back on WhatsApp within 24 hours — usually much faster.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://staplerlabs.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
