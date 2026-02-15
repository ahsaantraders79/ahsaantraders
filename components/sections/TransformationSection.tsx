'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

export default function TransformationSection() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => setIsDragging(true);

    // Global event listeners for smooth dragging outside element
    useEffect(() => {
        const handleMove = (event: MouseEvent | TouchEvent) => {
            if (!sliderRef.current) return;

            const rect = sliderRef.current.getBoundingClientRect();
            // Check for clientX in both MouseEvent and TouchEvent
            const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX;

            // Calculate position relative to the container
            const position = ((clientX - rect.left) / rect.width) * 100;

            // Clamp between 0 and 100
            setSliderPosition(Math.min(Math.max(position, 0), 100));
        };

        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('touchmove', handleMove);
        }

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, [isDragging]);

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    label="Visible Results"
                    title="See The Difference"
                    subtitle="Witness the quality of our roof restoration and waterproofing services"
                />

                <div className="mt-12 max-w-5xl mx-auto">
                    <div
                        ref={sliderRef}
                        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 select-none cursor-ew-resize touch-none"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                    >
                        {/* After Image (Background) - Clean Finished Roof */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/after.webp"
                                alt="After Waterproofing Treatment"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 border border-white/20">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                After Treatment
                            </div>
                        </div>

                        {/* Before Image (Clipped) - Damaged/Work in Progress */}
                        <div
                            className="absolute inset-0"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <Image
                                src="/images/before.webp"
                                alt="Before Waterproofing"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Dark filter overlay for dramatic effect on 'Before' side */}
                            <div className="absolute inset-0 bg-sepia-[.3] mix-blend-multiply opacity-20" />

                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg border border-white/10">
                                Before Treatment
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 ring-4 ring-black/10">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-slate-600">
                            <span className="font-semibold text-slate-900">Drag the slider</span> to see the transformation from Damaged to Protected.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Add 'touch-none' to global or use inline style to prevent scrolling while dragging on mobile
