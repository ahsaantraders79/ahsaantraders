import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development and performance
  reactStrictMode: true,

  // Optimize images with modern formats and aggressive caching
  images: {
    // Enable modern image formats for smaller file sizes (up to 60% smaller)
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift with placeholder blur
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    // Enable remote patterns if needed
    remotePatterns: [],
    // Allow various image qualities
    qualities: [60, 75, 80, 85, 90, 100],
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable experimental features for better performance
  experimental: {
    // Optimize CSS loading
    optimizeCss: true,
    // Enable optimistic client cache
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimize output
  output: 'standalone',

  // PoweredBy header removal for security/smaller response
  poweredByHeader: false,

  // Generate ETags for caching
  generateEtags: true,

  // Compress responses
  compress: true,
};

export default nextConfig;
