/**
 * About Page - Company story, mission, values, and timeline
 * 
 * SEO: Organization trust signals, E-E-A-T, company credentials
 */

import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionSection from '@/components/about/MissionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TimelineSection from '@/components/about/TimelineSection';
import { StatsSection, CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'About Ahsaan Traders | Waterproofing Experts Since 2017',
    description: 'Learn about Ahsaan Traders Karachi\'s trusted waterproofing and construction company. 500+ projects completed, certified experts, and 5-year warranty on all work.',
    keywords: 'about Ahsaan traders, waterproofing company karachi, construction company karachi, waterproofing experts, trusted contractors karachi',
    alternates: {
        canonical: 'https://www.ahsaantraders.com/about',
    },
    openGraph: {
        type: 'website',
        locale: 'en_PK',
        url: 'https://www.ahsaantraders.com/about',
        siteName: 'Ahsaan Traders',
        title: 'About Ahsaan Traders | Waterproofing Experts',
        description: 'Karachi\'s trusted waterproofing and construction company since 2017. 500+ projects, certified experts.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Ahsaan Traders | Waterproofing Experts',
        description: 'Karachi\'s trusted waterproofing and construction company since 2017.',
    },
    robots: {
        index: true,
        follow: true,
    },
};


export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <CompanyStory />
            <MissionSection />
            <ValuesSection />
            <StatsSection />
            <TimelineSection />
            <CTASection />
        </>
    );
}
