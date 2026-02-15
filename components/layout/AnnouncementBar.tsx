'use client';

import React, { useState, useEffect, memo, useRef, useCallback } from 'react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const defaultMessages = [
    "Welcome to Ahsaan Traders - Karachi's #1 Waterproofing Experts",
    "Get a Free Consultation Today: 0300-8235699",
    "Premium Quality Heat Proofing & Roof Waterproofing Services",
    "Special Discount on Commercial Projects - Contact Us Now!"
];

// Combine messages for mobile marquee
const getMarqueeText = (msgs: string[]) => msgs.join('   •   ');

interface AnnouncementBarProps {
    announcements?: string[];
}

function AnnouncementBar({ announcements }: AnnouncementBarProps) {
    const messages = (announcements && announcements.length > 0) ? announcements : defaultMessages;

    // Memoize marquee text
    const marqueeText = React.useMemo(() => getMarqueeText(messages), [messages]);

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const typingRef = useRef<NodeJS.Timeout | null>(null);
    const pauseRef = useRef<NodeJS.Timeout | null>(null);

    // ── Desktop: Typing animation ──
    const typeMessage = useCallback((message: string) => {
        let charIndex = 0;
        setDisplayText('');
        setIsTyping(true);

        const type = () => {
            // ... existing typing logic ...
            // Wait, I need to reproduce the logic exactly or it breaks.
            // Original logic:
            if (charIndex <= message.length) {
                setDisplayText(message.slice(0, charIndex));
                charIndex++;
                typingRef.current = setTimeout(type, 35);
            } else {
                setIsTyping(false);
                // Pause, then move to next message
                pauseRef.current = setTimeout(() => {
                    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                }, 3000);
            }
        };
        type();
    }, [messages.length]); // depend on messages.length

    useEffect(() => {
        // Reset index if messages change
        setCurrentMessageIndex(0);
    }, [messages]);

    useEffect(() => {
        // Only run typing on non-mobile (we detect via matchMedia)
        const mql = window.matchMedia('(min-width: 640px)');
        if (!mql.matches) return;

        typeMessage(messages[currentMessageIndex]);

        return () => {
            if (typingRef.current) clearTimeout(typingRef.current);
            if (pauseRef.current) clearTimeout(pauseRef.current);
        };
    }, [currentMessageIndex, typeMessage, messages]);

    return (
        <div className="bg-slate-950 text-white text-xs sm:text-sm py-0 sm:py-2 px-0 sm:px-4 z-50 relative overflow-hidden h-[32px] sm:h-[40px] flex items-center">

            {/* ── Mobile: Scrolling marquee ── */}
            <div className="sm:hidden w-full overflow-hidden">
                <div className="announcement-marquee flex items-center whitespace-nowrap">
                    <span className="inline-block font-medium tracking-wide text-white/90 px-4 flex-shrink-0">
                        {marqueeText}
                    </span>
                    <span className="inline-block font-medium tracking-wide text-white/90 px-4 flex-shrink-0">
                        {marqueeText}
                    </span>
                </div>
            </div>

            {/* ── Desktop: Typing animation ── */}
            <div className="hidden sm:flex container mx-auto items-center justify-between">
                <div className="flex-1 flex justify-start items-center overflow-hidden">
                    <span className="inline-block font-medium tracking-wide">
                        <span className="text-white/90">
                            {displayText}
                            {isTyping && (
                                <span className="inline-block w-[2px] h-[14px] bg-amber-400 ml-0.5 align-middle animate-pulse" />
                            )}
                        </span>
                    </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold tracking-wider uppercase">
                    <WhatsAppButton
                        variant="solid"
                        size="sm"
                        label="Chat on WhatsApp"
                        className="!py-1 !px-3 !text-xs !border-none hover:!bg-green-600"
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(AnnouncementBar);
