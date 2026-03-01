/**
 * Gallery Page - Visual showcase of completed work
 * 
 * SEO: ImageObject-rich page for visual search and portfolio display
 */

import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Project Gallery | Waterproofing Photos Karachi',
    description: 'Browse Ahsaan Traders\' gallery of waterproofing, heat proofing & construction projects in Karachi. Professional quality work showcased in photos.',
    keywords: 'waterproofing gallery karachi, construction photos, roof waterproofing images, heat proofing before after, project photos karachi',
    alternates: {
        canonical: 'https://www.ahsaantraders.com/gallery',
    },
    openGraph: {
        type: 'website',
        locale: 'en_PK',
        url: 'https://www.ahsaantraders.com/gallery',
        siteName: 'Ahsaan Traders',
        title: 'Project Gallery | Ahsaan Traders',
        description: 'Browse our gallery of waterproofing and construction projects completed across Karachi.',
        images: [
            {
                url: '/images/terrace-waterproofing-application.webp',
                width: 1200,
                height: 630,
                alt: 'Ahsaan Traders Project Gallery',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Project Gallery | Ahsaan Traders',
        description: 'Browse our gallery of waterproofing and construction projects in Karachi.',
        images: ['/images/terrace-waterproofing-application.webp'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function GalleryPage() {
    return (
        <div className="bg-white">
            <Breadcrumb
                title="Project Gallery"
                subtitle="A visual showcase of our waterproofing, heat proofing, and construction projects across Karachi."
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Gallery' },
                ]}
            />
            <GalleryGrid />
            <CTASection />
        </div>
    );
}
