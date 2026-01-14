/**
 * Projects Page - Portfolio gallery
 */

import { Metadata } from 'next';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGallery from './components/ProjectsGallery';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Our Projects | Ahsan Traders - Portfolio of Completed Work',
    description: 'View our portfolio of completed waterproofing, heat proofing, and construction projects across Karachi. Quality workmanship demonstrated in residential, commercial, and industrial projects.',
    keywords: 'waterproofing projects karachi, construction portfolio, completed projects, ahsan traders work',
};

export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            <ProjectsGallery />
            <CTASection />
        </>
    );
}
