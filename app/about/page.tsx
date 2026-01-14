/**
 * About Page - Company story, mission, values
 */

import { Metadata } from 'next';
import AboutHero from './components/AboutHero';
import CompanyStory from './components/CompanyStory';
import MissionSection from './components/MissionSection';
import ValuesSection from './components/ValuesSection';
import TimelineSection from './components/TimelineSection';
import { StatsSection, ClientsSection, CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'About Us | Ahsan Traders - Waterproofing Experts Since 2017',
    description: 'Learn about Ahsan Traders - Karachi\'s trusted waterproofing and construction solutions provider since 2017. Quality materials, expert workmanship, guaranteed results.',
    keywords: 'ahsan traders about, waterproofing company karachi, construction company sindh, about ahsan traders',
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <CompanyStory />
            <MissionSection />
            <ValuesSection />
            <TimelineSection />
            <StatsSection />
            <ClientsSection />
            <CTASection />
        </>
    );
}
