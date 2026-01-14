'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Breadcrumb Component - Page header with background image
 * 
 * Better responsive design with proper stacking
 */

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    title: string;
    subtitle?: string;
    items: BreadcrumbItem[];
    backgroundImage: string;
    minHeight?: string;
}

export default function Breadcrumb({
    title,
    subtitle,
    items,
    backgroundImage,
    minHeight = '400px',
}: BreadcrumbProps) {
    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{ minHeight }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-slate-900/75" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                    <ol className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base flex-wrap">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-amber-400 font-medium">{item.label}</span>
                                )}
                                {index < items.length - 1 && (
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}

                {/* Decorative Line */}
                <div className="mt-5 sm:mt-6 flex justify-center">
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0 50V25C360 5 720 15 1080 10C1260 8 1380 20 1440 25V50H0Z" className="fill-white" />
                </svg>
            </div>
        </section>
    );
}
