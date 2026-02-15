/**
 * Privacy Policy Page
 */

import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
    title: 'Privacy Policy | Ahsaan Traders',
    description: 'Privacy Policy for Ahsaan Traders - How we collect, use, and protect your information.',
    alternates: {
        canonical: 'https://ahsaantraders.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Breadcrumb
                title="Privacy Policy"
                subtitle="How we handle your information"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Privacy Policy' },
                ]}
            />

            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto prose prose-slate">
                        <p className="text-sm text-slate-500 mb-6">Last updated: December 2024</p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            When you contact us through our website, phone, or WhatsApp, we may collect:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                            <li>Your name and contact information</li>
                            <li>Phone number and email address</li>
                            <li>Project details and location</li>
                            <li>Photos of areas requiring service</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
                        <p className="text-slate-600 mb-4">
                            We use your information to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                            <li>Provide quotes and estimates for services</li>
                            <li>Schedule site visits and project work</li>
                            <li>Communicate project updates</li>
                            <li>Follow up on completed projects</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">3. Information Security</h2>
                        <p className="text-slate-600 mb-6">
                            We take reasonable measures to protect your personal information. Your data is only shared with our team members directly involved in your project.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">4. Contact Us</h2>
                        <p className="text-slate-600 mb-4">
                            For privacy-related questions, contact us:
                        </p>
                        <ul className="list-none text-slate-600 space-y-2">
                            <li><strong>Email:</strong> info@ahsaantraders.com</li>
                            <li><strong>Phone:</strong> 0321-2420460</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
