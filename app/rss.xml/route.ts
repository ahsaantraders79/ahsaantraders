
import { getAllPosts } from '@/data/blogs';

export async function GET() {
    const posts = getAllPosts();
    const siteUrl = 'https://www.ahsaantraders.com';

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Ahsaan Traders Blog</title>
        <link>${siteUrl}</link>
        <description>Expert waterproofing and construction advice for Karachi homeowners.</description>
        <language>en-pk</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        ${posts
            .map((post) => `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${siteUrl}/blog/${post.slug}</link>
            <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
            <description><![CDATA[${post.excerpt}]]></description>
            <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
            <author>info@ahsaantraders.com (${post.author})</author>
        </item>`)
            .join('')}
    </channel>
    </rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            // Cache for 1 day
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
        },
    });
}
