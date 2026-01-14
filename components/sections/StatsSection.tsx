import React from 'react';
import Image from 'next/image';
import { StatCard } from '../ui/Card';
import { BuildingIcon, UsersIcon, TrophyIcon, ClockIcon } from '../ui/Icons';

/**
 * Stats Section - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Lazy loading for background image
 * 3. Static content rendering
 */

const stats = [
    { value: '500+', label: 'Projects Done', icon: <BuildingIcon size={22} /> },
    { value: '8+', label: 'Years Experience', icon: <ClockIcon size={22} /> },
    { value: '50+', label: 'Happy Clients', icon: <UsersIcon size={22} /> },
    { value: '100%', label: 'Satisfaction', icon: <TrophyIcon size={22} /> },
] as const;

export default function StatsSection() {
    return (
        <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/commercial-roof-waterproofing-project.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    loading="lazy"
                    quality={60}
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/95 to-slate-900/95" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/10 text-amber-400 mb-3">
                        Our Achievements
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                        Numbers That Speak
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                        Delivering excellence in waterproofing and construction since 2017
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            value={stat.value}
                            label={stat.label}
                            icon={stat.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
