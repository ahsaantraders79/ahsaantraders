import React from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

/**
 * Global Loading UI
 * 
 * PERFORMANCE:
 * 1. Immediate visual feedback for route transitions
 * 2. Leverages React Suspense boundaries automatically
 * 3. Lightweight implementation to minimize TBT (Total Blocking Time)
 */
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full p-8">
            <div className="relative">
                {/* Pulse effect background */}
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75 sm:w-16 sm:h-16 w-12 h-12"></div>

                {/* Actual Spinner */}
                <div className="relative bg-white rounded-full p-2 shadow-sm">
                    <LoadingSpinner size="lg" color="blue" />
                </div>
            </div>

            <p className="mt-4 text-slate-500 text-sm font-medium animate-pulse">
                Loading...
            </p>
        </div>
    );
}
