/**
 * Services Hub Page - All services with detailed information
 * 
 * SEO: Serves as the main services landing page with internal links to each service detail page
 */

import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import { WhyChooseUsSection, CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Our Services | Waterproofing, Heat Proofing & Construction',
    description: 'Explore Ahsaan Traders\' professional services roof waterproofing, basement treatment, heat proofing, construction chemicals, cemented blocks & ready-mix concrete in Karachi.',
    keywords: 'waterproofing services karachi, heat proofing karachi, basement waterproofing, roof waterproofing, construction chemicals, ready mix concrete karachi, cemented blocks supply',
    alternates: {
        canonical: 'https://ahsaantraders.com/services',
    },
    openGraph: {
        type: 'website',
        locale: 'en_PK',
        url: 'https://ahsaantraders.com/services',
        siteName: 'Ahsaan Traders',
        title: 'Our Services | Ahsaan Traders',
        description: 'Professional waterproofing, heat proofing, and construction solutions in Karachi since 2017.',
        images: [
            {
                url: '/images/commercial-roof-waterproofing.jpg',
                width: 1200,
                height: 630,
                alt: 'Ahsaan Traders Professional Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services | Ahsaan Traders',
        description: 'Professional waterproofing, heat proofing, and construction solutions in Karachi since 2017.',
        images: ['/images/commercial-roof-waterproofing.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesList />
            <WhyChooseUsSection />
            <CTASection />
        </>
    );
}
