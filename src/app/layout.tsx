import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://staplerlabs.com"),

  title: {
    default: "StaplerLabs — Management Consulting + Technology for Established Indian Businesses",
    template: "%s | StaplerLabs",
  },

  description:
    "StaplerLabs is the strategic consulting and technology execution partner for established Indian businesses doing Rs. 50 Lakh to Rs. 50 Crore. AI-powered diagnostics, management consulting, and full-stack technology execution.",

  keywords: [
    "management consulting India",
    "business consulting SMB India",
    "digital transformation India",
    "AI business diagnostics",
    "technology execution partner",
    "small business consulting India",
    "competitive intelligence SMB",
    "business automation India",
    "website development India",
    "StaplerLabs",
  ],

  authors: [{ name: "StaplerLabs", url: "https://staplerlabs.com" }],
  creator: "StaplerLabs",
  publisher: "StaplerLabs",

  openGraph: {
    title: "StaplerLabs — The internet favours startups. We level the field.",
    description:
      "Strategic consulting and technology execution for established Indian businesses doing Rs. 50L to Rs. 50Cr.",
    url: "https://staplerlabs.com",
    siteName: "StaplerLabs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StaplerLabs — Management Consulting + Technology for Established Indian Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StaplerLabs — The internet favours startups. We level the field.",
    description:
      "Strategic consulting and technology execution for established Indian businesses doing Rs. 50L to Rs. 50Cr.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap"
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
