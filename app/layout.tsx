import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Suspense } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
  title: "Ahsan Traders | Waterproofing & Construction Solutions in Karachi",
  description: "Leading provider of waterproofing, heat proofing, construction chemicals, cemented blocks, and ready-mix concrete supplies in Karachi. Trusted quality since 2017. Contact: 0321-2420460",
  keywords: "waterproofing karachi, heat proofing, roof waterproofing, basement waterproofing, construction chemicals, ready mix concrete, cemented blocks, leakage solution karachi, ahsan traders",
  authors: [{ name: "Ahsan Traders" }],
  creator: "Ahsan Traders",
  publisher: "Ahsan Traders",
  metadataBase: new URL("https://ahsantraders.com"),
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://ahsantraders.com",
    siteName: "Ahsan Traders",
    title: "Ahsan Traders | Waterproofing & Construction Solutions",
    description: "Expert waterproofing, heat proofing, and construction solutions in Karachi since 2017.",
    images: [
      {
        url: "/images/Roof1.JPG",
        width: 1200,
        height: 630,
        alt: "Ahsan Traders Waterproofing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Traders | Waterproofing & Construction Solutions",
    description: "Expert waterproofing, heat proofing, and construction solutions in Karachi since 2017.",
    images: ["/images/Roof1.JPG"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

// Minimal loading skeleton for WhatsApp button
function WhatsAppButtonSkeleton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500/50 rounded-full animate-pulse" />
  );
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://wa.me" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp Floating Button with Suspense */}
        <Suspense fallback={<WhatsAppButtonSkeleton />}>
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  );
}

