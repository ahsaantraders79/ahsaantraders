import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/data/blogs';
import ReactMarkdown from 'react-markdown';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQ from '@/components/blog/FAQ';
import RelatedPostsGrid from '@/components/blog/RelatedPostsGrid';
import ArticleProse from '@/components/blog/ArticleProse';
import InfoBox from '@/components/blog/InfoBox';

// ─── SSG ──────────────────────────────────────────────
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

// ─── SEO META ─────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Ahsaan Traders`,
        description: post.excerpt,
        keywords: [post.primaryKeyword, ...post.tags],
        alternates: {
            canonical: `https://ahsaantraders.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishDate,
            modifiedTime: post.updatedDate,
            authors: [post.author],
            images: [{ url: `https://ahsaantraders.com${post.coverImage}`, width: 1200, height: 630, alt: post.title }],
            url: `https://ahsaantraders.com/blog/${post.slug}`,
            siteName: 'Ahsaan Traders',
            locale: 'en_PK',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [`https://ahsaantraders.com${post.coverImage}`],
        },
        robots: { index: true, follow: true },
    };
}

export const revalidate = 86400;

// ─── PAGE ─────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const relatedPosts = getRelatedPosts(post.slug);

    // JSON-LD: BlogPosting
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [`https://ahsaantraders.com${post.coverImage}`],
        datePublished: post.publishDate,
        dateModified: post.updatedDate,
        author: { '@type': 'Person', name: post.author, url: 'https://ahsaantraders.com' },
        publisher: {
            '@type': 'Organization',
            name: 'Ahsaan Traders',
            logo: { '@type': 'ImageObject', url: 'https://ahsaantraders.com/logo.webp' },
        },
        description: post.excerpt,
        mainEntityOfPage: { '@type': '.webpage', '@id': `https://ahsaantraders.com/blog/${post.slug}` },
        keywords: [post.primaryKeyword, ...post.tags].join(', '),
    };

    // JSON-LD: FAQ
    const faqSchema = post.faq.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    } : null;

    return (
        <div className="bg-white min-h-screen">
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

            {/* ── Hero Breadcrumb ── */}
            <Breadcrumb
                title={post.title}
                subtitle={post.excerpt}
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                ]}
            />

            {/* ── Main Content ── */}
            <main className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Cover Image slightly wider than text for visual impact */}
                    <figure className="max-w-[780px] mx-auto mb-8 sm:mb-10">
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 780px"
                            />
                        </div>
                    </figure>

                    {/* Author Bar below image, mobile-friendly */}
                    <div className="max-w-[680px] mx-auto mb-10 sm:mb-12">
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Avatar */}
                            <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            {/* Name + meta */}
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-slate-900 text-sm leading-tight">{post.author}</p>
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-xs sm:text-sm text-slate-500">
                                    <time dateTime={post.publishDate}>
                                        {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </time>
                                    <span className="text-slate-300">·</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                            {/* Category badge */}
                            {post.category && (
                                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 flex-shrink-0">
                                    {post.category}
                                </span>
                            )}
                        </div>
                        {/* Mobile category shown below on small screens */}
                        {post.category && (
                            <div className="sm:hidden mt-3">
                                <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                                    {post.category}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Article Body 680px for optimal 60-char line length */}
                    <ArticleProse>
                        {/* Intro (sections without heading) */}
                        {post.sections.length > 0 && !post.sections[0].heading && (
                            <ReactMarkdown>{post.sections[0].content}</ReactMarkdown>
                        )}

                        {post.sections.map((section, idx) => {
                            if (idx === 0 && !section.heading) return null;

                            return (
                                <div key={idx} id={`section-${idx}`}>
                                    {section.heading && <h2>{section.heading}</h2>}

                                    {section.type && ['warning', 'tip', 'answer', 'pricing', 'pros-cons'].includes(section.type) ? (
                                        <InfoBox variant={section.type as any} title={section.title}>
                                            <ReactMarkdown>{section.content}</ReactMarkdown>
                                        </InfoBox>
                                    ) : (
                                        <ReactMarkdown>{section.content}</ReactMarkdown>
                                    )}
                                </div>
                            );
                        })}
                    </ArticleProse>

                    {/* Tags */}
                    <div className="max-w-[680px] mx-auto mt-12 pt-8 border-t border-slate-200">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Topics</p>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <FAQ items={post.faq} />

                    {/* ── CTA Section ── */}
                    <div className="max-w-[680px] mx-auto mt-16 space-y-5">

                        {/* CTA 1: Free Inspection Blue gradient */}
                        <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl">
                            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
                                Need Professional Waterproofing?
                            </h3>
                            <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
                                Get a free on-site inspection and detailed written quote. 500+ projects completed across Karachi.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                                >
                                    Get Free Quote
                                </Link>
                                <Link
                                    href="https://wa.me/923212420460"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors shadow-md text-sm"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                                    WhatsApp Us
                                </Link>
                            </div>
                        </section>

                        {/* CTA 2: Call bar Dark */}
                        <section className="bg-slate-900 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-white font-bold text-base sm:text-lg">Call Us Directly</h4>
                                <p className="text-slate-400 text-xs mt-0.5">Mon–Sat, 9 AM – 7 PM</p>
                            </div>
                            <Link
                                href="tel:+923212420460"
                                className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl hover:bg-amber-300 transition-colors text-base"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0321-2420460
                            </Link>
                        </section>

                        {/* CTA 3: Explore Services */}
                        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-center">
                            <h4 className="text-slate-900 font-bold text-base sm:text-lg mb-1">Explore All Our Services</h4>
                            <p className="text-slate-500 text-xs mb-4">Waterproofing · Heat Proofing · Construction Chemicals</p>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-700 text-sm transition-colors"
                            >
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </section>

                    </div>

                    {/* Related Posts */}
                    <RelatedPostsGrid posts={relatedPosts} />

                </div>
            </main>
        </div>
    );
}
