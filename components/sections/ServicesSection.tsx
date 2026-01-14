import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { ServiceCard } from '../ui/Card';
import {
    WaterproofingIcon,
    HeatProofingIcon,
    ChemicalsIcon,
    BlocksIcon,
    ReadyMixIcon,
    DewateringIcon,
} from '../ui/Icons';

/**
 * Services Section - Server Component (No 'use client')
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Static rendering - Pre-rendered at build time
 * 3. Reduced animation overhead
 */

const services = [
    {
        title: 'Waterproofing & Leakage Solutions',
        description: 'Complete solutions including roof waterproofing, basement waterproofing, water tank treatment (underground & overhead), bathroom/kitchen leakage, terrace waterproofing, crack sealing, and expansion joint filling.',
        icon: <WaterproofingIcon size={26} />,
        image: '/images/roof-leaking-seepage-solution.jpg',
        href: '/services#waterproofing',
    },
    {
        title: 'Heat Proofing Services',
        description: 'Roof heat proofing coatings, solar reflective treatments, and energy-saving coatings. Effective heat reduction treatment for homes, buildings, and warehouses to combat Karachi\'s intense summer heat.',
        icon: <HeatProofingIcon size={26} />,
        image: '/images/cool-roof-heat-resistant-paint.jpg',
        href: '/services#heat-proofing',
    },
    {
        title: 'Construction Chemicals',
        description: 'Premium waterproofing chemicals, high-performance sealants & adhesives, concrete admixtures including strength gainers, crack fillers, repair mortars, and bonding agents for enhanced durability.',
        icon: <ChemicalsIcon size={26} />,
        image: '/images/premium-waterproofing-materials-bucket.jpg',
        href: '/services#chemicals',
    },
    {
        title: 'Cemented Blocks Supply',
        description: 'High-strength cemented block supply with customized solutions. We provide quality blocks for all construction requirements with on-site delivery across Karachi.',
        icon: <BlocksIcon size={26} />,
        image: '/images/concrete-hollow-blocks-stack.jpg',
        href: '/services#blocks',
    },
    {
        title: 'Ready-Mix Concrete Supplies',
        description: 'Standard and high-strength ready-mix concrete grades, fast-setting concrete, and customized mix designs for foundations, slabs, columns, and beams with on-site delivery across Karachi.',
        icon: <ReadyMixIcon size={26} />,
        image: '/images/concrete-admixture-chemical-additive.jpg',
        href: '/services#ready-mix',
    },
    {
        title: 'De-Watering Services',
        description: 'Professional de-watering solutions for construction sites, basements, and flooded areas. We provide efficient water removal services using modern pumping equipment.',
        icon: <DewateringIcon size={26} />,
        image: '/images/expert-construction-site-supervision.jpg',
        href: '/services#dewatering',
    },
] as const;

export default function ServicesSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionHeader
                    label="Our Core Services"
                    title="Professional Construction Solutions"
                    subtitle="From waterproofing to ready-mix concrete, we provide comprehensive solutions with premium materials and expert workmanship since 2017"
                />

                {/* Services Grid - CSS animations instead of JS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                image={service.image}
                                href={service.href}
                                priority={index < 3}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
