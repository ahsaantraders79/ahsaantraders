'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem('cookieConsent');

        if (!consent) {
            // Delay showing the banner for 2.5 seconds
            const timer = setTimeout(() => {
                setShouldRender(true);
                // Small delay to allow render before transition
                setTimeout(() => setIsVisible(true), 50);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        // Wait for transition to finish before unmounting
        setTimeout(() => {
            localStorage.setItem('cookieConsent', 'true');
            setShouldRender(false);
        }, 300);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur shadow-2xl rounded-xl border border-slate-700/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Content */}
                <div className="text-center sm:text-left">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        We use cookies to enhance your browsing experience and analyze our traffic.
                        By continuing to use our website, you agree to our
                        <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 ml-1 underline decoration-blue-400/30 hover:decoration-blue-400">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
                    <button
                        onClick={handleAccept}
                        className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        Accept All
                    </button>
                    {/* Optional: Add Decline logic if needed, but Accept is standard for simple compliance */}
                </div>
            </div>
        </div>
    );
}
