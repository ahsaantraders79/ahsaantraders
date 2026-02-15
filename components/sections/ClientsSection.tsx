import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

/**
 * Clients Section - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Static content rendering
 * 3. CSS-only hover animations
 */

const clients = [
    { name: 'Ali Builders', logo: '/company-logos/1.webp' },
    { name: 'Lucky Cement (MACHS)', logo: '/company-logos/2.webp' },
    { name: 'Arabian Traders', logo: '/company-logos/3.webp' },
    { name: 'CNCD Hospital Korangi', logo: '/company-logos/4.webp' },
    { name: 'Pioneer Engineering', logo: '/company-logos/5.webp' },
    { name: 'Popular Juice', logo: '/company-logos/6.webp' },
    { name: 'AHG Pvt Ltd', logo: '/company-logos/7.webp' },
    { name: 'Appollo Houseware', logo: '/company-logos/8.webp' },
] as const;

export default function ClientsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    label="Our Clients"
                    title="Trusted By Industry Leaders"
                    subtitle="Partnering with builders, hospitals, and industries across Karachi"
                />

                {/* Clients Grid - Responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-10 items-end justify-items-center mt-12">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="group flex flex-col items-center justify-end gap-3 w-full"
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    fill
                                    className="object-contain mix-blend-multiply filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    sizes="(max-width: 768px) 100px, 120px"
                                />
                            </div>

                            <p className="text-[11px] sm:text-xs text-slate-500 text-center font-semibold uppercase tracking-wide max-w-[100px] leading-relaxed group-hover:text-slate-800 transition-colors">
                                {client.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
