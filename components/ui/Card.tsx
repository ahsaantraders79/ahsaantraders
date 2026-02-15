import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Card Components - Server Components with optimized images
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Components - No JS for static cards
 * 2. Image priority prop for above-fold cards
 * 3. Proper loading="lazy" for below-fold
 * 4. CSS-only animations (no JS)
 * 5. Optimized image quality settings
 */

// ============================================
// SERVICE CARD
// ============================================
interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    href?: string;
    className?: string;
    priority?: boolean;
}

export function ServiceCard({
    title,
    description,
    icon,
    image,
    href,
    className = '',
    priority = false,
}: ServiceCardProps) {
    const CardWrapper = href ? Link : 'div';
    const wrapperProps = href ? { href } : {};

    return (
        <CardWrapper
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(wrapperProps as any)}
            className={`
        group block bg-white rounded-xl overflow-hidden
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        h-full
        ${className}
      `}
        >
            {/* Image Section */}
            {image && (
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={priority}
                        loading={priority ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            {/* Content Section */}
            <div className="p-4 sm:p-5 lg:p-6">
                {/* Icon */}
                {icon && (
                    <div className="w-11 h-11 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                        {icon}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Read More Link */}
                {href && (
                    <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-blue-600 font-medium text-xs sm:text-sm group-hover:gap-2.5 transition-all duration-200">
                        <span>Learn More</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                )}
            </div>
        </CardWrapper>
    );
}

// ============================================
// PROJECT CARD
// ============================================
interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    href?: string;
    className?: string;
    priority?: boolean;
}

export function ProjectCard({
    title,
    category,
    image,
    href,
    className = '',
    priority = false,
}: ProjectCardProps) {
    const CardWrapper = href ? Link : 'div';
    const wrapperProps = href ? { href } : {};

    return (
        <CardWrapper
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(wrapperProps as any)}
            className={`
        group relative block rounded-xl overflow-hidden
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)]
        transition-all duration-300 ease-out
        aspect-[4/3]
        ${className}
      `}
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                <span className="text-amber-400 text-xs sm:text-sm font-medium mb-1">
                    {category}
                </span>
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold line-clamp-2">
                    {title}
                </h3>
            </div>
        </CardWrapper>
    );
}

// ============================================
// FEATURE CARD
// ============================================
interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

export function FeatureCard({
    title,
    description,
    icon,
    className = '',
}: FeatureCardProps) {
    return (
        <div
            className={`
        group p-5 sm:p-6 bg-white rounded-xl
        shadow-[0_2px_8px_rgba(0,0,0,0.05)]
        hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        text-center
        h-full
        ${className}
      `}
        >
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                {icon}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                {title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}

// ============================================
// TESTIMONIAL CARD
// ============================================
interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
    className?: string;
}

export function TestimonialCard({
    quote,
    author,
    role,
    avatar,
    className = '',
}: TestimonialCardProps) {
    return (
        <div
            className={`
        p-5 sm:p-6 bg-white rounded-xl
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
        transition-all duration-300
        ${className}
      `}
        >
            {/* Quote Icon */}
            <div className="text-blue-500 mb-3">
                <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                &quot;{quote}&quot;
            </p>

            <div className="flex items-center gap-3">
                {avatar && (
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                        <Image
                            src={avatar}
                            alt={author}
                            width={40}
                            height={40}
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                )}
                <div>
                    <p className="font-bold text-slate-800 text-sm">{author}</p>
                    <p className="text-xs text-slate-500">{role}</p>
                </div>
            </div>
        </div>
    );
}

// ============================================
// STAT CARD
// ============================================
interface StatCardProps {
    value: string;
    label: string;
    icon?: React.ReactNode;
    className?: string;
}

export function StatCard({
    value,
    label,
    icon,
    className = '',
}: StatCardProps) {
    return (
        <div
            className={`
        p-4 sm:p-5 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl
        border border-white/20
        text-center text-white
        transition-all duration-300
        hover:bg-white/15
        ${className}
      `}
        >
            {icon && (
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                    {icon}
                </div>
            )}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                {value}
            </p>
            <p className="text-xs sm:text-sm text-white/80">
                {label}
            </p>
        </div>
    );
}
