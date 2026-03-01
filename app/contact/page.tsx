/**
 * Contact Page - Contact form, NAP, map, WhatsApp, FAQ, Service Areas
 *
 * SEO: ContactPage schema, LocalBusiness, FAQPage, NAP consistency
 * Google Ranking: FAQ section, service areas, process steps, trust signals
 */

import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';
import ContactFAQ from '@/components/contact/ContactFAQ';
import ServiceAreas from '@/components/contact/ServiceAreas';
import HowItWorks from '@/components/contact/HowItWorks';
import WhyContactUs from '@/components/contact/WhyContactUs';

export const metadata: Metadata = {
    title: 'Contact Ahsaan Traders | Free Waterproofing Quote Karachi',
    description: 'Contact Ahsaan Traders for waterproofing, heat proofing & construction services in Karachi. Call 0321-2420460 for a free site inspection. Serving DHA, Clifton, Gulshan & all Karachi.',
    keywords: 'contact ahsaan traders, waterproofing quote karachi, free estimate waterproofing, construction services contact, waterproofing company karachi phone number, roof leakage repair karachi',
    alternates: {
        canonical: 'https://www.ahsaantraders.com/contact',
    },
    openGraph: {
        type: 'website',
        locale: 'en_PK',
        url: 'https://www.ahsaantraders.com/contact',
        siteName: 'Ahsaan Traders',
        title: 'Contact Ahsaan Traders | Free Quote in Karachi',
        description: 'Get a free waterproofing or construction quote. Call, WhatsApp, or fill our form. 500+ projects completed across Karachi.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Ahsaan Traders | Free Quote',
        description: 'Get a free waterproofing or construction quote. Call, WhatsApp, or fill our form.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

// FAQ data for JSON-LD schema (matches the ContactFAQ component)
const faqItems = [
    {
        question: 'How do I get a free waterproofing quote in Karachi?',
        answer: 'Simply call us at 0321-2420460, send a WhatsApp message, or fill the contact form on this page. We will schedule a free site inspection within 24 hours and provide a detailed written quote with no obligation.',
    },
    {
        question: 'What areas in Karachi do you serve?',
        answer: 'We serve all areas across Karachi including DHA (Phase 1-8), Clifton, Gulshan-e-Iqbal, North Nazimabad, PECHS, Gulistan-e-Jauhar, Scheme 33, Malir, Korangi, Federal B Area, and surrounding areas in Sindh.',
    },
    {
        question: 'How quickly can you start work after I contact you?',
        answer: 'After your free inspection, we can typically begin work within 2-3 business days. For emergency leakage repairs, we offer same-day service.',
    },
    {
        question: 'Do you provide a warranty on waterproofing work?',
        answer: 'Yes, all our waterproofing services come with a written warranty ranging from 5 to 10 years depending on the treatment method.',
    },
    {
        question: 'What information should I have ready when I call?',
        answer: 'It helps to know the approximate area size, the type of surface (roof, basement, walls), when the leakage started, and any photos of the affected area.',
    },
    {
        question: 'Is the site inspection really free?',
        answer: 'Yes, 100% free with no hidden charges. Our expert will visit your site, identify the exact cause of the problem, and provide a detailed quote at no cost.',
    },
    {
        question: 'Can I get waterproofing done during the monsoon season?',
        answer: 'Emergency patches can be applied during dry periods between rains. For a complete treatment, we recommend scheduling before the monsoon.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, bank transfer, JazzCash, and EasyPaisa. For larger projects, we offer flexible payment plans.',
    },
];

export default function ContactPage() {
    // JSON-LD: LocalBusiness Schema
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Ahsaan Traders',
        description: 'Professional waterproofing, heat proofing, and construction services in Karachi. Established 2017, 500+ projects completed.',
        url: 'https://www.ahsaantraders.com',
        telephone: '+923212420460',
        email: 'info@ahsaantraders.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Karachi',
            addressRegion: 'Sindh',
            addressCountry: 'PK',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.8607,
            longitude: 67.0011,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '19:00',
            },
        ],
        areaServed: [
            { '@type': 'City', name: 'Karachi' },
            { '@type': 'State', name: 'Sindh' },
        ],
        priceRange: '$$',
        image: 'https://www.ahsaantraders.com/images/expert-construction-site-supervision.webp',
        sameAs: [
            'https://wa.me/923212420460',
        ],
    };

    // JSON-LD: FAQPage Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    // JSON-LD: ContactPage Schema
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Ahsaan Traders',
        description: 'Get in touch with Ahsaan Traders for waterproofing and construction services in Karachi.',
        url: 'https://www.ahsaantraders.com/contact',
        mainEntity: {
            '@type': 'LocalBusiness',
            name: 'Ahsaan Traders',
            telephone: '+923212420460',
        },
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />

            {/* Hero Breadcrumb */}
            <ContactHero />

            {/* Contact Form + Info Section */}
            <ContactSection />

            {/* How It Works - 4 Step Process */}
            <HowItWorks />

            {/* Why Choose Us - Trust Signals */}
            <WhyContactUs />

            {/* Service Areas in Karachi */}
            <ServiceAreas />

            {/* FAQ Section */}
            <ContactFAQ />
        </>
    );
}
