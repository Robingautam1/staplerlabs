import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://staplerlabs.com"),

  title: {
    default: "StaplerLabs — We run your digital office",
    template: "%s | StaplerLabs",
  },

  description:
    "StaplerLabs is a lean digital operations agency in India. We build websites, automate business workflows, run SEO & ads, and handle your entire digital office — so you can focus on what you're actually good at.",

  keywords: [
    "digital agency India",
    "web development agency India",
    "business automation India",
    "website development Guwahati",
    "digital marketing Guwahati",
    "SEO agency India",
    "WhatsApp automation for business",
    "Next.js web development",
    "offline to online onboarding",
    "Google Ads management India",
    "small business digital services",
    "StaplerLabs",
  ],

  authors: [{ name: "StaplerLabs", url: "https://staplerlabs.com" }],
  creator: "StaplerLabs",
  publisher: "StaplerLabs",

  openGraph: {
    title: "StaplerLabs — We run your digital office",
    description:
      "Web. Automation. Onboarding. SEO. Ads. All of it. So you can focus on what you're actually good at.",
    url: "https://staplerlabs.com",
    siteName: "StaplerLabs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StaplerLabs — We run your digital office",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StaplerLabs — We run your digital office",
    description:
      "Web. Automation. Onboarding. SEO. Ads. All of it. So you can focus on what you're actually good at.",
    images: ["/og-image.png"],
    creator: "@staplerlabs",
  },

  alternates: {
    canonical: "https://staplerlabs.com",
  },

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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('staplerlabs-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
