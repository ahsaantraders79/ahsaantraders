import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/services-data';
import { getAllPosts } from '@/data/blogs';

export const revalidate = 86400; // Regenerate sitemap every 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ahsaantraders.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily', // Updated daily with new tips
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map(slug => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.85,
    }));

    // Dynamic blog posts
    const blogPosts: MetadataRoute.Sitemap = getAllPosts().map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedDate),
        changeFrequency: 'weekly' as const,
        priority: 0.75,
    }));

    return [...staticPages, ...servicePages, ...blogPosts];
}
