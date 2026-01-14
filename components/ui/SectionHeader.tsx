import React from 'react';

/**
 * SectionHeader Component - Server Component
 */

type Alignment = 'left' | 'center' | 'right';

interface SectionHeaderProps {
    label?: string;
    title: string;
    subtitle?: string;
    alignment?: Alignment;
    align?: Alignment; // Alias for alignment
    dark?: boolean;
    light?: boolean; // Alias for dark (semantics might vary but for now assuming intent was for dark background)
    className?: string;
}

export default function SectionHeader({
    label,
    title,
    subtitle,
    alignment,
    align,
    dark = false,
    light,
    className = '',
}: SectionHeaderProps) {
    // Resolve props
    const finalAlignment = align || alignment || 'center';
    const isDark = light || dark; // If either is true, render for dark background

    return (
        <div className={`flex flex-col ${finalAlignment === 'center' ? 'items-center text-center mx-auto' : finalAlignment === 'right' ? 'items-end text-right ml-auto' : 'items-start text-left'} mb-10 sm:mb-12 md:mb-14 max-w-3xl ${className}`}>
            {/* Label/Badge */}
            {label && (
                <span
                    className={`
            inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3
            ${isDark ? 'bg-white/10 text-amber-400' : 'bg-blue-50 text-blue-600'}
          `}
                >
                    {label}
                </span>
            )}

            {/* Title */}
            <h2
                className={`
          text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight
          ${isDark ? 'text-white' : 'text-slate-800'}
        `}
            >
                {title}
            </h2>

            {/* Decorative Line */}
            <div
                className={`
          mt-3 sm:mt-4 w-14 sm:w-16 h-1 rounded-full
          bg-gradient-to-r from-amber-400 to-orange-500
        `}
                aria-hidden="true"
            />

            {/* Subtitle */}
            {subtitle && (
                <p
                    className={`
            mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed
            ${isDark ? 'text-slate-300' : 'text-slate-600'}
          `}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
