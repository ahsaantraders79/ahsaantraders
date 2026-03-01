/**
 * Projects Page - Portfolio of completed projects
 * 
 * SEO: Project portfolio with case studies and proof of work
 */

import { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import CaseStudiesSection from '@/components/projects/CaseStudiesSection';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Our Projects | Waterproofing Portfolio Karachi',
    description: 'View Ahsaan Traders\' completed waterproofing, heat proofing & construction projects in Karachi. Before/after photos, case studies & client results.',
    keywords: 'waterproofing projects karachi, construction portfolio, roof waterproofing results, before after waterproofing, Ahsaan traders projects',
    alternates: {
        canonical: 'https://www.ahsaantraders.com/projects',
    },
    openGraph: {
        type: 'website',
        locale: 'en_PK',
        url: 'https://www.ahsaantraders.com/projects',
        siteName: 'Ahsaan Traders',
        title: 'Our Projects | Ahsaan Traders Portfolio',
        description: 'View completed waterproofing & construction projects across Karachi with before/after results.',
        images: [
            {
                url: '/images/roof-waterproofing-before-after.webp',
                width: 1200,
                height: 630,
                alt: 'Ahsaan Traders Project Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Projects | Ahsaan Traders Portfolio',
        description: 'View completed waterproofing & construction projects across Karachi.',
        images: ['/images/roof-waterproofing-before-after.webp'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            <CaseStudiesSection />
            <ProjectsGallery />
            <CTASection />
        </>
    );
}
