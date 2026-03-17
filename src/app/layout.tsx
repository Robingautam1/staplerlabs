import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://staplerlabs.com"),

  title: {
    default: "StaplerLabs — We take established businesses online",
    template: "%s | StaplerLabs",
  },

  description:
    "StaplerLabs takes established offline businesses and builds their entire digital presence from scratch in 30 days — website, Google, WhatsApp, ads — then stays as their long-term digital ops partner.",

  keywords: [
    "offline to online business",
    "digital presence for local business",
    "business automation India",
    "website development India",
    "Google Business Profile setup",
    "WhatsApp automation for business",
    "small business digital services",
    "local business SEO India",
    "StaplerLabs",
  ],

  authors: [{ name: "StaplerLabs", url: "https://staplerlabs.com" }],
  creator: "StaplerLabs",
  publisher: "StaplerLabs",

  openGraph: {
    title: "StaplerLabs — We take established businesses online",
    description:
      "Website. Google. WhatsApp. Ads. All of it in 30 days. Then we stick around.",
    url: "https://staplerlabs.com",
    siteName: "StaplerLabs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StaplerLabs — We take established businesses online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StaplerLabs — We take established businesses online",
    description:
      "Website. Google. WhatsApp. Ads. All of it in 30 days. Then we stick around.",
    images: ["/og-image.png"],
    creator: "@staplerlabs",
  },

  alternates: { canonical: "https://staplerlabs.com" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
  category: "technology",
  verification: { google: "EnpQuHDyWNZUTypnbNe45Kt32KfeJ420agd5ADapPPI" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
