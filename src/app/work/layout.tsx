import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real results for real businesses. See how StaplerLabs helped a dental chain automate bookings, took a financial advisory firm digital, and more.",
  keywords: [
    "digital startup case studies India",
    "web development portfolio India",
    "business automation results",
    "WhatsApp chatbot results",
    "digital transformation case study",
    "StaplerLabs portfolio",
    "startup work Guwahati",
  ],
  openGraph: {
    title: "Our Work — StaplerLabs",
    description:
      "Real results for real businesses. Dental bookings automated. Financial advisors taken digital. And more.",
    url: "https://staplerlabs.com/work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StaplerLabs — Our Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | StaplerLabs",
    description:
      "Real results for real businesses. Dental bookings automated. Financial advisors taken digital. And more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://staplerlabs.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
