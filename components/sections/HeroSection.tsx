'use client';

import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

/**
 * Hero Section - Performance Optimized
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Preload first slide image with priority
 * 2. Memoized slide components
 * 3. Reduced typing interval for less state updates
 * 4. will-change hints for animations
 * 5. Optimized image loading with proper sizes
 */

const slides = [
    { image: '/images/roof-leaking-seepage-solution.jpg', title: 'Waterproofing' },
    { image: '/images/cool-roof-heat-resistant-paint.jpg', title: 'Heat Proofing' },
    { image: '/images/underground-water-tank-leakage-repair.jpg', title: 'Basement Solutions' },
    { image: '/images/water-reservoir-tank-lining.jpg', title: 'Tank Treatment' },
];

// Memoized Slide component to prevent unnecessary re-renders
const Slide = memo(function Slide({
    image,
    title,
    isActive,
    index
}: {
    image: string;
    title: string;
    isActive: boolean;
    index: number;
}) {
    return (
        <div
            className={`absolute inset-0 transition-all duration-1000 ease-out will-change-[opacity,transform] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            aria-hidden={!isActive}
        >
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-cover transition-transform duration-[6000ms] ease-out will-change-transform ${isActive ? 'scale-110' : 'scale-100'
                        }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
        </div>
    );
});

// Memoized Indicator component
const SlideIndicator = memo(function SlideIndicator({
    index,
    isActive,
    onClick
}: {
    index: number;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`h-1 rounded-full transition-all duration-500 ${isActive ? 'w-8 bg-amber-400' : 'w-4 bg-white/20'
                }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? 'true' : 'false'}
        />
    );
});

function HeroSection() {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto slide with optimized interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Memoized click handler
    const handleSlideChange = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Memoized slides array for render
    const memoizedSlides = useMemo(() =>
        slides.map((slide, index) => (
            <Slide
                key={slide.image}
                image={slide.image}
                title={slide.title}
                isActive={index === currentSlide}
                index={index}
            />
        )),
        [currentSlide]
    );

    return (
        <section className="relative w-full min-h-[100svh] overflow-hidden bg-slate-900 pt-[100px] pb-[10px]">
            {/* Rich Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black z-0" />

            {/* Mesh/Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0" style={{ backgroundSize: '30px 30px' }} />

            {/* Gradient Orbs - glowing effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] will-change-transform animate-pulse-slow" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] will-change-transform" />
                <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] will-change-transform" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 min-h-[100svh] flex flex-col justify-center">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 mb-4 sm:mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                            <span className="text-white/80 text-xs sm:text-sm font-medium">Since 2017</span>
                        </div>

                        {/* Heading */}
                        <div className="mb-6 sm:mb-8 relative z-10">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                                Waterproofing <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                                    That Lasts.
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Stop leaks permanently. We protect homes and industries in Karachi with <span className="text-amber-400 font-medium">premium materials</span> and guaranteed results.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 lg:mb-10">
                            <Button href="/contact" variant="accent" size="lg" className="shadow-lg shadow-amber-500/20">
                                Get Quote
                            </Button>
                            <Button href="/services" variant="outline" size="lg" className="!border-white/20 !text-white hover:!bg-white/10">
                                Our Services
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-300 text-xs sm:text-sm font-medium">
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                <span className="text-amber-400">★</span> 5-Year Warranty
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                <span className="text-blue-400">✓</span> Certified Experts
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                <span className="text-green-400">●</span> 24/7 Support
                            </div>
                        </div>
                    </div>

                    {/* Image Slider */}
                    <div
                        className="relative order-2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] w-full max-w-md mx-auto lg:max-w-none"
                        role="region"
                        aria-label="Image slideshow"
                    >
                        {memoizedSlides}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex gap-2 justify-center lg:justify-start mt-6 sm:mt-8" role="tablist" aria-label="Slide navigation">
                    {slides.map((_, index) => (
                        <SlideIndicator
                            key={index}
                            index={index}
                            isActive={index === currentSlide}
                            onClick={() => handleSlideChange(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(HeroSection);
