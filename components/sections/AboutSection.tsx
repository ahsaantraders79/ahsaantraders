import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { CheckIcon, TrophyIcon } from '../ui/Icons';

/**
 * About Section - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Lazy loading for image (below fold)
 * 3. Static content rendering
 */

const features = [
    'Premium waterproofing materials',
    'Strength-gainer admixtures',
    '9+ years industry experience',
    'Residential & commercial projects',
    'Industrial clients served',
    'On-time project delivery',
] as const;

export default function AboutSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
                            <Image
                                src="/images/professional-waterproofing-workers-team.webp"
                                alt="Ahsaan Traders professional waterproofing team"
                                width={600}
                                height={450}
                                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:-right-5 lg:-right-8 bg-white rounded-xl shadow-xl shadow-slate-900/10 p-4 sm:p-5 max-w-[160px] sm:max-w-[180px]">
                            <div className="flex items-center gap-2.5 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                    <TrophyIcon size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl font-bold text-slate-800">9+</p>
                                    <p className="text-xs text-slate-500">Years</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-600">Of trusted excellence</p>
                        </div>

                        <div className="hidden lg:block absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-2xl -z-10" aria-hidden="true" />
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-600 mb-3 sm:mb-4">
                            About Ahsaan Traders
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-5 leading-tight">
                            Leading Construction Solutions
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Since 2017</span>
                        </h2>

                        <p className="text-base sm:text-lg text-slate-600 mb-4 leading-relaxed">
                            Ahsaan Traders is a trusted service provider in waterproofing, heat proofing, construction chemicals, cemented blocks, strength-gainer admixtures, and ready-mix concrete supplies.
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                            With extensive experience and advanced construction technologies, we specialize in resolving roof leakage, basement seepage, waterproofing challenges, and structural durability issues. Our premium-grade construction chemicals and ready-mix delivery ensure long-lasting performance.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <CheckIcon size={12} className="text-green-600" />
                                    </div>
                                    <span className="text-slate-700 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button href="/about" variant="primary" size="md">
                                Learn More
                            </Button>
                            <Button href="/contact" variant="ghost" size="md">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
