/**
 * Terms of Service Page
 */

import { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
    title: 'Terms of Service | Ahsaan Traders',
    description: 'Terms and conditions for using Ahsaan Traders services.',
};

export default function TermsPage() {
    return (
        <>
            <Breadcrumb
                title="Terms of Service"
                subtitle="Terms and conditions for our services"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Terms of Service' },
                ]}
            />

            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto prose prose-slate">
                        <p className="text-sm text-slate-500 mb-6">Last updated: December 2024</p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">1. Services</h2>
                        <p className="text-slate-600 mb-6">
                            Ahsaan Traders provides waterproofing, heat proofing, construction chemicals, cemented blocks, ready-mix concrete, and de-watering services across Karachi and Sindh.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">2. Quotations</h2>
                        <p className="text-slate-600 mb-6">
                            All quotations are valid for 15 days from the date of issue. Prices may vary based on site conditions, material costs, and project scope changes.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">3. Payment Terms</h2>
                        <p className="text-slate-600 mb-6">
                            Payment terms are agreed upon before project commencement. Typically, an advance is required before starting work, with the balance due upon completion.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">4. Warranty</h2>
                        <p className="text-slate-600 mb-6">
                            We provide warranty on our waterproofing work as specified in the project agreement. Warranty is subject to proper maintenance and care of the treated areas.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">5. Liability</h2>
                        <p className="text-slate-600 mb-6">
                            Ahsaan Traders is not liable for damage caused by natural disasters, structural failures, or work by other contractors. Our liability is limited to re-performing the work under warranty terms.
                        </p>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">6. Contact</h2>
                        <p className="text-slate-600 mb-4">
                            For questions about these terms:
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
