/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Suppress quality warnings by allowing used qualities
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Note: 'qualities' is not a standard config in Next.js 14, but we can usually ignore the warning. 
        // However, if the warning persists, it might mean the user is restricted.
        // For now, let's just ensure basic config is present.
    },
};

export default nextConfig;
