'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

/**
 * Packages Section Professional Service Comparison
 *
 * Pakistani Market Verified (2026-2026):
 * - Standard: Basic waterproofing only 1 coat cementitious, 1-year warranty (industry norm for budget jobs)
 * - Premium: Full waterproofing + heat proofing combo multi-layer system, 5-year warranty (most popular)
 * - Industrial: Heavy-duty bituminous membrane + insulation 7-year warranty (factories, warehouses)
 *
 * Notes:
 * - 10-year warranty is NOT standard in Pakistan's waterproofing industry; max reliable is 7 years
 * - Annual maintenance is typically offered in premium+ packages
 * - Priority/emergency support is an industrial-tier feature
 * - Chemical treatment tiers: Basic (cementitious), Advanced (PU/acrylic + primer), Premium (membrane + PU multi-coat)
 */

type FeatureValue = boolean | string;

interface Feature {
    name: string;
    tooltip?: string;
    standard: FeatureValue;
    premium: FeatureValue;
    industrial: FeatureValue;
}

const features: Feature[] = [
    {
        name: 'Free Site Inspection',
        standard: true,
        premium: true,
        industrial: true,
    },
    {
        name: 'Surface Preparation',
        tooltip: 'Cleaning, crack filling, and primer application',
        standard: 'Basic',
        premium: 'Full',
        industrial: 'Industrial-Grade',
    },
    {
        name: 'Crack & Joint Sealing',
        standard: true,
        premium: true,
        industrial: true,
    },
    {
        name: 'Waterproofing Coating',
        tooltip: 'Number of chemical coats applied',
        standard: '2 Coats',
        premium: '3 Coats',
        industrial: '4+ Coats',
    },
    {
        name: 'Heat Proofing Layer',
        tooltip: 'Solar reflective coating for temperature reduction',
        standard: false,
        premium: true,
        industrial: true,
    },
    {
        name: 'Chemical Grade',
        tooltip: 'Quality tier of waterproofing chemicals used',
        standard: 'Cementitious',
        premium: 'Acrylic/PU',
        industrial: 'Bituminous Membrane',
    },
    {
        name: 'Warranty Period',
        standard: '1 Year',
        premium: '5 Years',
        industrial: '7 Years',
    },
    {
        name: 'Annual Maintenance',
        tooltip: 'Scheduled inspection and touch-up visits',
        standard: false,
        premium: true,
        industrial: true,
    },
    {
        name: 'Emergency Response',
        tooltip: 'Priority response for leak emergencies',
        standard: false,
        premium: false,
        industrial: true,
    },
    {
        name: 'Material Certificate',
        tooltip: 'Written certificate for materials used',
        standard: false,
        premium: true,
        industrial: true,
    },
];

const packages = [
    {
        key: 'standard',
        name: 'Standard',
        subtitle: 'Essential Repair',
        description: 'Basic waterproofing for budget-conscious homeowners',
        priceLabel: 'From Rs. 50/sqft',
        recommended: false,
    },
    {
        key: 'premium',
        name: 'Premium',
        subtitle: 'Complete Protection',
        description: 'Full waterproofing + heat proofing combo',
        priceLabel: 'From Rs. 85/sqft',
        recommended: true,
    },
    {
        key: 'industrial',
        name: 'Industrial',
        subtitle: 'Heavy Duty',
        description: 'For factories, warehouses & large buildings',
        priceLabel: 'Custom Quote',
        recommended: false,
    },
] as const;

export default function PackagesSection() {
    // For mobile: which package tab is active
    const [activeTab, setActiveTab] = useState<number>(1); // Start on Premium

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50" id="packages">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    label="Service Plans"
                    title="Choose Your Protection Level"
                    subtitle="Transparent service packages tailored for every budget from residential roofs to industrial facilities"
                />

                {/* ───────── DESKTOP TABLE (md+) ───────── */}
                <div className="hidden md:block mt-10">
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                        {/* Header */}
                        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr]">
                            <div className="p-6 bg-slate-900 flex items-end">
                                <span className="text-white/60 text-sm font-medium">Features Included</span>
                            </div>
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.key}
                                    className={`p-6 text-center relative ${pkg.recommended
                                        ? 'bg-blue-700'
                                        : 'bg-slate-900'
                                        }`}
                                >
                                    {pkg.recommended && (
                                        <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-b-lg tracking-wider uppercase">
                                            Most Popular
                                        </span>
                                    )}
                                    <h3 className="font-bold text-xl text-white mb-0.5">{pkg.name}</h3>
                                    <p className={`text-xs ${pkg.recommended ? 'text-blue-200' : 'text-slate-400'}`}>
                                        {pkg.subtitle}
                                    </p>
                                    <p className={`text-xs font-semibold mt-2 ${pkg.recommended ? 'text-amber-300' : 'text-slate-300'}`}>
                                        {pkg.priceLabel}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Rows */}
                        {features.map((feature, index) => (
                            <div
                                key={feature.name}
                                className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-slate-100 last:border-0 transition-colors hover:bg-blue-50/30 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                                    }`}
                            >
                                {/* Feature name */}
                                <div className="p-4 lg:p-5 flex items-center gap-2">
                                    <span className="text-sm font-medium text-slate-700">{feature.name}</span>
                                    {feature.tooltip && (
                                        <span className="group relative cursor-help">
                                            <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-[11px] rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-30 shadow-lg">
                                                {feature.tooltip}
                                            </span>
                                        </span>
                                    )}
                                </div>

                                {/* Values */}
                                {(['standard', 'premium', 'industrial'] as const).map((tier) => (
                                    <div
                                        key={tier}
                                        className={`p-4 lg:p-5 flex items-center justify-center border-l border-slate-100 ${tier === 'premium' ? 'bg-blue-50/20' : ''
                                            }`}
                                    >
                                        {renderValue(feature[tier])}
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* CTA Row */}
                        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-slate-50 border-t border-slate-200">
                            <div className="p-5 flex items-center">
                                <p className="text-xs text-slate-400">All prices are starting rates. Final quote after free site inspection.</p>
                            </div>
                            {packages.map((pkg) => (
                                <div key={pkg.key} className="p-4 flex items-center justify-center border-l border-slate-100">
                                    <Button
                                        href="/contact"
                                        variant={pkg.recommended ? 'primary' : 'outline'}
                                        size="sm"
                                        className={`w-full max-w-[180px] justify-center ${pkg.recommended ? 'shadow-lg shadow-blue-500/20' : ''
                                            }`}
                                    >
                                        {pkg.recommended ? 'Get Premium Quote' : 'Get Quote'}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ───────── MOBILE CARDS (< md) ───────── */}
                <div className="md:hidden mt-8">
                    {/* Tab Switcher */}
                    <div className="flex bg-slate-200/70 rounded-xl p-1 mb-6">
                        {packages.map((pkg, index) => (
                            <button
                                key={pkg.key}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 py-2.5 px-2 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === index
                                    ? 'bg-white text-blue-700 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {pkg.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Package Card */}
                    {packages.map((pkg, pkgIndex) => {
                        if (pkgIndex !== activeTab) return null;
                        const tier = pkg.key as 'standard' | 'premium' | 'industrial';

                        return (
                            <div key={pkg.key} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                                {/* Card Header */}
                                <div className={`p-6 text-center ${pkg.recommended
                                    ? 'bg-gradient-to-br from-blue-700 to-blue-800'
                                    : 'bg-slate-900'
                                    }`}>
                                    {pkg.recommended && (
                                        <span className="inline-block bg-amber-400 text-slate-900 text-[10px] font-extrabold px-3 py-0.5 rounded-full tracking-wider uppercase mb-3">
                                            Most Popular
                                        </span>
                                    )}
                                    <h3 className="font-bold text-2xl text-white">{pkg.name}</h3>
                                    <p className={`text-sm mt-1 ${pkg.recommended ? 'text-blue-200' : 'text-slate-400'}`}>
                                        {pkg.description}
                                    </p>
                                    <p className={`text-lg font-bold mt-3 ${pkg.recommended ? 'text-amber-300' : 'text-white'}`}>
                                        {pkg.priceLabel}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="divide-y divide-slate-100">
                                    {features.map((feature) => {
                                        const value = feature[tier];
                                        return (
                                            <div key={feature.name} className="flex items-center justify-between px-5 py-3.5">
                                                <span className="text-sm text-slate-700 font-medium">{feature.name}</span>
                                                <span className="ml-4 flex-shrink-0">{renderValue(value)}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CTA */}
                                <div className="p-5 border-t border-slate-100">
                                    <Button
                                        href="/contact"
                                        variant={pkg.recommended ? 'primary' : 'outline'}
                                        size="lg"
                                        className={`w-full justify-center ${pkg.recommended ? 'shadow-lg shadow-blue-500/20' : ''
                                            }`}
                                    >
                                        {pkg.recommended ? 'Get Premium Quote' : 'Get Quote'}
                                    </Button>
                                    <p className="text-center text-[11px] text-slate-400 mt-2">
                                        Free site inspection included
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust note */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-400 max-w-2xl mx-auto">
                        All rates are indicative starting prices for standard conditions. Final quotation is provided after a free on-site inspection.
                        Prices vary based on roof condition, surface area, material grade, and project complexity. No hidden charges what we quote is what you pay.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ── Render helper ──
function renderValue(value: FeatureValue) {
    if (typeof value === 'boolean') {
        return value ? (
            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        ) : (
            <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
            </div>
        );
    }
    return <span className="text-sm font-semibold text-slate-800">{value}</span>;
}
