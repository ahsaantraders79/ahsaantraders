import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import fs from 'fs';
import path from 'path';
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Suspense } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "@/components/ui/CookieConsent";

// Revalidate all pages every hour (ISR) to keep content fresh for Google
export const revalidate = 3600;

/**
 * Root Layout - Main application wrapper
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. next/font/google for optimized font loading (no render-blocking)
 * 2. Proper viewport meta for faster mobile rendering
 * 3. DNS prefetch and preconnect for critical resources
 * 4. Suspense boundaries for streaming SSR
 */

// Optimized font loading using next/font/google
// This eliminates render-blocking font requests and enables font subsetting
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Enables FOIT prevention
  preload: true,
  variable: "--font-inter",
  // Only load the weights we actually use
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Viewport configuration for better mobile performance
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "Ahsaan Traders | Waterproofing & Construction Solutions in Karachi",
  description: "Leading provider of waterproofing, heat proofing, construction chemicals, cemented blocks, and ready-mix concrete supplies in Karachi. Trusted quality since 2017. Contact: 0321-2420460",
  keywords: "waterproofing karachi, heat proofing, roof waterproofing, basement waterproofing, construction chemicals, ready mix concrete, cemented blocks, leakage solution karachi, Ahsaan traders",
  authors: [{ name: "Ahsaan Traders" }],
  creator: "Ahsaan Traders",
  publisher: "Ahsaan Traders",
  metadataBase: new URL("https://ahsaantraders.com"),
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://ahsaantraders.com",
    siteName: "Ahsaan Traders",
    title: "Ahsaan Traders | Waterproofing & Construction Solutions",
    description: "Expert waterproofing, heat proofing, and construction solutions in Karachi since 2017.",
    images: [
      {
        url: "/images/ahsan-traders-promotional-banner.webp",
        width: 1200,
        height: 630,
        alt: "Ahsaan Traders Waterproofing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsaan Traders | Waterproofing & Construction Solutions",
    description: "Expert waterproofing, heat proofing, and construction solutions in Karachi since 2017.",
    images: ["/images/ahsan-traders-promotional-banner.webp"],
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
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Minimal loading skeleton for WhatsApp button
function WhatsAppButtonSkeleton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500/50 rounded-full animate-pulse" />
  );
}

// JSON-LD: LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Ahsaan Traders",
  "image": "https://ahsaantraders.com/logo.webp",
  "logo": "https://ahsaantraders.com/logo.webp",
  "description": "Karachi's trusted provider of waterproofing, heat proofing, and construction solutions. Quality materials, expert workmanship, guaranteed results.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop # 1, Plot # 13-C, Lane # 2, Rahat Commercial Area, DHA Phase 6",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "postalCode": "75500",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.8093,
    "longitude": 67.0560
  },
  "url": "https://ahsaantraders.com",
  "telephone": "+923212420460",
  "priceRange": "₨₨",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/AhsaanTradersBusiness",
    "https://wa.me/923212420460"
  ]
};

// JSON-LD: WebSite Schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ahsaan Traders",
  "url": "https://ahsaantraders.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ahsaantraders.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read daily announcements (ISR updated)
  let announcements: string[] | undefined;
  try {
    const filePath = path.join(process.cwd(), 'data', 'announcements.json');
    if (fs.existsSync(filePath)) {
      announcements = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch (error) {
    // Fallback to default in component
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://wa.me" />

        {/* Structured Data: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header announcements={announcements} />
        <main>{children}</main>
        <Footer />
        <CookieConsent />

        {/* WhatsApp Floating Button with Suspense */}
        <Suspense fallback={<WhatsAppButtonSkeleton />}>
          <WhatsAppButton />
        </Suspense>
      </body>
      <GoogleAnalytics gaId="G-FJ2RYKY316" />
    </html>
  );
}

