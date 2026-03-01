import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { CTASection } from '@/components/sections';
import { getServiceBySlug, getRelatedServices, getAllServiceSlugs } from '@/lib/services-data';
import { getServiceSEOContent } from '@/lib/services-seo-content';

/**
 * Dynamic Service Detail Page Next.js 16 + Google E-E-A-T Compliant
 *
 * ARCHITECTURE:
 * - params: Promise<{ slug: string }> awaited per Next.js 16 spec
 * - All section headings/labels/subtitles are UNIQUE per service (from services-seo-content.ts)
 * - No duplicate content between service pages
 *
 * GOOGLE SEO FEATURES:
 * - E-E-A-T signals: Experience (project count), Expertise (process), Authority (brand), Trust (warranty)
 * - Unique H2 headings with natural primary keyword placement
 * - Structured data: Service + FAQPage + BreadcrumbList
 * - Internal linking: related services, cross-page CTAs
 * - Proper heading hierarchy: H1 (Breadcrumb) → H2 (sections) → H3 (items)
 * - No keyword stuffing conversational, helpful language
 */

// ──────────────────────────────────────────────────
// Static params generation (SSG)
// ──────────────────────────────────────────────────
export function generateStaticParams() {
    return getAllServiceSlugs().map(slug => ({ slug }));
}

// ──────────────────────────────────────────────────
// Dynamic metadata async, awaits Promise<params>
// ──────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.keywords,
        alternates: {
            canonical: `https://www.ahsaantraders.com/services/${service.slug}`,
        },
        openGraph: {
            type: 'website',
            locale: 'en_PK',
            url: `https://www.ahsaantraders.com/services/${service.slug}`,
            siteName: 'Ahsaan Traders',
            title: service.metaTitle,
            description: service.metaDescription,
        },
        twitter: {
            card: 'summary_large_image',
            title: service.metaTitle,
            description: service.metaDescription,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// ──────────────────────────────────────────────────
// Page component async, awaits Promise<params>
// ──────────────────────────────────────────────────
export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const relatedServices = getRelatedServices(service.relatedSlugs);
    const seo = getServiceSEOContent(slug);

    // ── JSON-LD: Service Schema ──
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.overview[0],
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Ahsaan Traders",
            "url": "https://www.ahsaantraders.com",
            "telephone": "+923212420460",
            "priceRange": "$$",
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
                "latitude": "24.8107",
                "longitude": "67.0311"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "Karachi",
            "containedInPlace": { "@type": "State", "name": "Sindh" }
        },
        "url": `https://www.ahsaantraders.com/services/${service.slug}`,
        "image": `https://www.ahsaantraders.com${service.ogImage}`,
    };

    // ── JSON-LD: FAQ Schema ──
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <>
            {/* ── Structured Data ── */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* ── Hero Breadcrumb (contains H1) ── */}
            <Breadcrumb
                title={service.title}
                subtitle={service.heroSubtitle}
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: service.title },
                ]}
            />



            {/* ══════ SECTION 2: Service Overview ══════ */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                {seo.sectionLabels.overview}
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                                {seo.sectionTitles.overview}
                            </h2>
                            <div className="space-y-4">
                                {service.overview.map((para, i) => (
                                    <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                        {para}
                                    </p>
                                ))}
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Button href="/contact" variant="primary" size="lg">
                                    Get Free Quote
                                </Button>
                                <Button href="https://wa.me/923212420460" variant="outline" size="lg" className="!border-green-500 !text-green-700 hover:!bg-green-50">
                                    <svg className="w-4 h-4 mr-1.5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                                    WhatsApp Us
                                </Button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <Image
                                    src={service.galleryImages[0]?.src || service.heroImage}
                                    alt={service.galleryImages[0]?.alt || service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl px-5 py-3 shadow-xl">
                                <p className="text-2xl sm:text-3xl font-extrabold">5yr</p>
                                <p className="text-xs font-medium text-blue-100">Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 3: Highlights Stats Bar (moved here) ══════ */}
            {seo.highlights.length > 0 && (
                <section className="relative z-10 py-10 bg-slate-50/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {seo.highlights.map((h, i) => (
                                    <div key={i} className="text-center group">
                                        <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                            {h.value}
                                        </p>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 uppercase tracking-wider">
                                            {h.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ══════ SECTION 3: Common Problems ══════ */}
            <section className="py-16 sm:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label={seo.sectionLabels.problems}
                        title={seo.sectionTitles.problems}
                        subtitle={seo.sectionSubtitles.problems}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {service.problems.map((problem, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mb-4 text-lg font-bold">
                                    {i + 1}
                                </div>
                                <h3 className="text-base font-bold text-slate-800 mb-2">{problem.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 4: Our Process ══════ */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label={seo.sectionLabels.process}
                        title={seo.sectionTitles.process}
                        subtitle={seo.sectionSubtitles.process}
                    />
                    <div className="mt-12 max-w-4xl mx-auto">
                        {service.process.map((step, i) => (
                            <div key={i} className="flex gap-4 sm:gap-6 mb-8 last:mb-0 group">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold flex items-center justify-center text-sm sm:text-base shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                        {step.step}
                                    </div>
                                    {i < service.process.length - 1 && (
                                        <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-blue-300 to-blue-100 mt-2" />
                                    )}
                                </div>
                                <div className="pb-4">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1.5">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 5: Why Choose Us (E-E-A-T) ══════ */}
            {seo.whyChooseUs.length > 0 && (
                <section className="py-16 sm:py-20 bg-blue-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            label="Why Ahsaan Traders"
                            title={`Why Choose Us for ${service.title}`}
                            subtitle="Experience, expertise, and a commitment to delivering results that last not just promises."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            {seo.whyChooseUs.map((point, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100 group hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold flex items-center justify-center text-lg flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-2">{point.title}</h3>
                                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{point.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Button href="/contact" variant="primary" size="lg">
                                Get Your Free Consultation
                            </Button>
                        </div>
                    </div>
                </section>
            )}

            {/* ══════ SECTION 6: Benefits + Materials ══════ */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/karachi-roof-real.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </span>
                                {seo.sectionTitles.benefits}
                            </h2>
                            <div className="space-y-3">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                                        <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-sm sm:text-base text-white/90">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                {seo.sectionTitles.materials}
                            </h2>
                            <div className="space-y-3">
                                {service.materialsUsed.map((material, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                                        <svg className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                                        <span className="text-sm sm:text-base text-white/90">{material}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 7: Service Gallery ══════ */}
            {service.galleryImages.length > 2 && (
                <section className="py-16 sm:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            label={seo.sectionLabels.gallery}
                            title={seo.sectionTitles.gallery}
                            subtitle={seo.sectionSubtitles.gallery}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                            {service.galleryImages.slice(0, 6).map((img, i) => (
                                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {img.alt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ══════ SECTION 8: Areas Served ══════ */}
            <section className="py-12 sm:py-16 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4">{seo.sectionTitles.areas}</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            {service.areasServed}
                        </p>
                        <div className="mt-6">
                            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm sm:text-base inline-flex items-center gap-1.5">
                                Not sure if we cover your area? Contact us →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 9: FAQ ══════ */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label={seo.sectionLabels.faq}
                        title={seo.sectionTitles.faq}
                        subtitle={seo.sectionSubtitles.faq}
                    />
                    <div className="max-w-3xl mx-auto mt-12 space-y-4">
                        {service.faqs.map((faq, i) => (
                            <details key={i} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-bold text-slate-800 text-sm sm:text-base hover:text-blue-700 transition-colors list-none">
                                    <span className="flex items-start gap-3 pr-4">
                                        <span className="text-blue-600 font-extrabold mt-px">{String(i + 1).padStart(2, '0')}</span>
                                        {faq.question}
                                    </span>
                                    <svg className="w-5 h-5 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-8">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 10: Related Services (Internal Links) ══════ */}
            {relatedServices.length > 0 && (
                <section className="py-16 sm:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            label={seo.sectionLabels.related}
                            title={seo.sectionTitles.related}
                            subtitle={seo.sectionSubtitles.related}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                            {relatedServices.map(rs => (
                                <Link key={rs.slug} href={`/services/${rs.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-100">
                                    <div className="relative h-44 overflow-hidden">
                                        <Image
                                            src={rs.heroImage}
                                            alt={rs.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-2">
                                            {rs.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-2">{rs.overview[0]?.substring(0, 120)}...</p>
                                        <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-3 group-hover:gap-2.5 transition-all duration-200">
                                            Learn More
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ══════ SECTION 11: Service-Specific CTA ══════ */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                        {seo.ctaHeading}
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        {seo.ctaSubtext}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 text-base"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            Get Free Consultation
                        </Link>
                        <Link
                            href="https://wa.me/923212420460"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-200 text-base"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                            WhatsApp Now
                        </Link>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-200">
                        <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Free inspection</span>
                        <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> No-obligation quote</span>
                        <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Same-week scheduling</span>
                    </div>
                </div>
            </section>
        </>
    );
}
