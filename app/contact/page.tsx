/**
 * Contact Page - Contact form and info
 */

import { Metadata } from 'next';
import ContactHero from './components/ContactHero';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
    title: 'Contact Us | Ahsan Traders - Get Free Quote',
    description: 'Contact Ahsan Traders for waterproofing, heat proofing, and construction solutions in Karachi. Call 0321-2420460, email ahsaantraders79@gmail.com, or WhatsApp us.',
    keywords: 'contact ahsan traders, waterproofing quote karachi, construction services contact, get free quote',
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactSection />
        </>
    );
}
