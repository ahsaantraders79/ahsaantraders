import React from 'react';

/**
 * LoadingSpinner - Minimal, performant loading indicator
 * Uses pure CSS for animation to avoid main thread blocking
 */
export default function LoadingSpinner({
    size = 'md',
    color = 'blue',
    className = ''
}: {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: 'blue' | 'white' | 'slate';
    className?: string;
}) {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-[3px]',
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-[5px]',
    };

    const colorClasses = {
        blue: 'border-blue-600/30 border-t-blue-600',
        white: 'border-white/30 border-t-white',
        slate: 'border-slate-800/30 border-t-slate-800',
    };

    return (
        <div
            className={`
        inline-block animate-spin rounded-full
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${className}
      `}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
}
