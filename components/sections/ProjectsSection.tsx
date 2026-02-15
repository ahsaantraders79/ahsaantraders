import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { ProjectCard } from '../ui/Card';
import Button from '../ui/Button';

/**
 * Projects Section - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Lazy loading for all images (below fold)
 * 3. CSS-only animations
 */

const projects = [
    {
        title: 'DHA Bungalow Basement',
        category: 'Basement Waterproofing',
        image: '/images/basement-foundation-waterproofing.webp',
    },
    {
        title: 'Industrial Warehouse Roof',
        category: 'Heat Proofing',
        image: '/images/commercial-roof-waterproofing.webp',
    },
    {
        title: 'CNCD Hospital Korangi',
        category: 'Commercial Project',
        image: '/images/hospital-building-renovation-karachi.webp',
    },
    {
        title: 'Underground Water Tank',
        category: 'Tank Waterproofing',
        image: '/images/water-reservoir-tank-lining.webp',
    },
    {
        title: 'Residential Terrace',
        category: 'Roof Waterproofing',
        image: '/images/terrace-waterproofing-finished.webp',
    },
    {
        title: 'Commercial Building',
        category: 'Heat Proofing',
        image: '/images/industrial-shed-heat-insulation.webp',
    },
    {
        title: 'Swimming Pool Construction',
        category: 'Waterproofing',
        image: '/images/swimming-pool-waterproofing-karachi.webp',
    },
    {
        title: 'Concrete Block Supply',
        category: 'Material Supply',
        image: '/images/solid-cement-blocks-construction.webp',
    },
    {
        title: 'Roof Leakage Repair',
        category: 'Maintenance',
        image: '/images/roof-waterproofing-before-after.webp',
    },
] as const;

export default function ProjectsSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionHeader
                    label="Our Portfolio"
                    title="Recent Projects"
                    subtitle="Quality workmanship across residential, commercial, and industrial projects in Karachi"
                />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
                        >
                            <ProjectCard
                                title={project.title}
                                category={project.category}
                                image={project.image}
                                priority={false}
                            />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10 sm:mt-12">
                    <Button href="/projects" variant="outline" size="md">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
