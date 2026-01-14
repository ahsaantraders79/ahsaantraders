import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FeatureCard } from '../ui/Card';
import { ShieldCheckIcon, ClockIcon, TrophyIcon, StarIcon, CheckIcon, UsersIcon } from '../ui/Icons';

/**
 * Why Choose Us Section - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Static content rendering
 * 3. CSS-only animations
 */

const features = [
    {
        title: 'Premium Materials',
        description: 'We use only high-grade waterproofing chemicals and construction materials from trusted manufacturers.',
        icon: <ShieldCheckIcon size={26} />,
    },
    {
        title: 'Expert Team',
        description: 'Skilled professionals with years of experience in complex waterproofing and construction projects.',
        icon: <UsersIcon size={26} />,
    },
    {
        title: 'Timely Delivery',
        description: 'Committed to completing projects on schedule without compromising on quality standards.',
        icon: <ClockIcon size={26} />,
    },
    {
        title: 'Customer Focus',
        description: 'Your satisfaction is our priority with excellent after-service support and warranty coverage.',
        icon: <StarIcon size={26} />,
    },
    {
        title: 'Proven Results',
        description: '8+ years of expertise with 500+ successful projects across Karachi and Sindh region.',
        icon: <TrophyIcon size={26} />,
    },
    {
        title: 'Guaranteed Work',
        description: 'Long-lasting durability with proper warranties on all waterproofing and construction work.',
        icon: <CheckIcon size={26} />,
    },
] as const;

export default function WhyChooseUsSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionHeader
                    label="Why Choose Us"
                    title="The Ahsan Traders Advantage"
                    subtitle="Experience the difference of working with Karachi's trusted waterproofing experts"
                />

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
