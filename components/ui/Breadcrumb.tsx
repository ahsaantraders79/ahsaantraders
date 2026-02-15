import React from 'react';
import Link from 'next/link';
import BreadcrumbJsonLd from './BreadcrumbJsonLd';

/**
 * Breadcrumb Premium page header with SEO structured data
 *
 * DESIGN: slate-900 with subtle radial gradient, properly spaced below fixed navbar
 * Mobile: compact padding, smaller text
 * SEO: BreadcrumbList via BreadcrumbJsonLd
 */

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    title: string;
    subtitle?: string;
    items?: BreadcrumbItem[];
}

export default function Breadcrumb({
    title,
    subtitle,
    items,
}: BreadcrumbProps) {
    const breadcrumbItems: BreadcrumbItem[] = items || [
        { label: 'Home', href: '/' },
        { label: title },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-slate-900">
            <BreadcrumbJsonLd items={breadcrumbItems} />

            {/* Radial gradient accent for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Content */}
            <div
                className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8 sm:pb-12 md:pb-16 transition-[padding] duration-300 ease-out"
                style={{ paddingTop: 'calc(var(--header-height, 140px) + 1.5rem)' }}
            >
                {/* Breadcrumb trail */}
                <nav
                    aria-label="Breadcrumb"
                    className="flex flex-wrap justify-center items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium mb-4 sm:mb-5"
                >
                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <svg
                                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-amber-400 max-w-[200px] sm:max-w-none truncate" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {/* Accent line */}
                <div className="mt-5 sm:mt-7 flex justify-center">
                    <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                </div>
            </div>
        </section>
    );
}
