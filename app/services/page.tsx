/**
 * Services Page - All services with detailed information
 */

import { Metadata } from 'next';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import { WhyChooseUsSection, CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Our Services | Ahsan Traders - Waterproofing, Heat Proofing & More',
    description: 'Professional waterproofing, heat proofing, basement treatment, construction chemicals, ready-mix concrete, and cemented blocks services in Karachi. Quality solutions for all construction needs.',
    keywords: 'waterproofing services karachi, heat proofing karachi, basement waterproofing, roof waterproofing, construction chemicals, ready mix concrete karachi, cemented blocks supply',
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
