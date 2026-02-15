'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

/**
 * Cost Calculator Section Verified Karachi Market Rates (2026-2026)
 *
 * Rates researched from:
 * - Roof waterproofing: Rs. 50–150/sqft (avg ~Rs. 85/sqft for standard chemical treatment)
 * - Heat proofing: Rs. 35–100/sqft (avg ~Rs. 50/sqft for acrylic coating)
 * - Water tank: Rs. 80–200/sqft (avg ~Rs. 100/sqft for food-grade coating)
 * - Bathroom leakage: Rs. 15,000–35,000 per bathroom (non-destructive treatment)
 * - Basement waterproofing: Rs. 120–250/sqft (negative-side treatment)
 */

const services = [
    { id: 'waterproofing', name: 'Roof Waterproofing', rate: 85, unit: 'sq ft', description: 'Chemical & membrane treatment' },
    { id: 'heatproofing', name: 'Heat Proofing', rate: 50, unit: 'sq ft', description: 'Solar reflective coating' },
    { id: 'tank', name: 'Water Tank Treatment', rate: 100, unit: 'sq ft', description: 'Food-safe internal coating' },
    { id: 'basement', name: 'Basement Waterproofing', rate: 150, unit: 'sq ft', description: 'Negative-side membrane' },
    { id: 'bathroom', name: 'Bathroom Leakage', rate: 20000, unit: 'per bathroom', description: 'No tile-break repair' },
] as const;

export default function CostCalculatorSection() {
    const [selectedService, setSelectedService] = useState<string>(services[0].id);
    const [area, setArea] = useState<number>(1000);

    const currentService = services.find(s => s.id === selectedService) || services[0];
    const isLumpSum = currentService.unit === 'per bathroom';

    const estimatedCost = isLumpSum ? currentService.rate : area * currentService.rate;

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left: Controls */}
                    <div>
                        <SectionHeader
                            align="left"
                            label="Instant Quote"
                            title="Estimate Your Project Cost"
                            subtitle="Get a quick estimate for your waterproofing or construction needs. Prices are approximate and may vary based on site conditions, roof type, and material selection."
                        />

                        <div className="mt-8 space-y-6">
                            {/* Service Selection */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-800">Select Service</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {services.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setSelectedService(s.id)}
                                            className={`group p-3.5 rounded-xl border text-left transition-all duration-200 ${selectedService === s.id
                                                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20 shadow-sm'
                                                : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            <span className={`block font-semibold text-sm ${selectedService === s.id ? 'text-blue-700' : 'text-slate-800'
                                                }`}>
                                                {s.name}
                                            </span>
                                            <span className="block text-[11px] text-slate-400 mt-0.5">
                                                {s.description}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Area Slider */}
                            {!isLumpSum && (
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-bold text-slate-800">
                                            Total Area
                                        </label>
                                        <span className="font-mono text-sm bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg">
                                            {area.toLocaleString()} sq ft
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="200"
                                        max="10000"
                                        step="50"
                                        value={area}
                                        onChange={(e) => setArea(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>200 sq ft</span>
                                        <span>10,000 sq ft</span>
                                    </div>
                                </div>
                            )}

                            {/* Rate info */}
                            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-slate-500">
                                    {isLumpSum
                                        ? 'Price varies based on bathroom size and leakage severity. Starting from Rs. 15,000.'
                                        : `Rate: Rs. ${currentService.rate}/sq ft. Actual rate depends on roof condition, material grade, and project complexity.`
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Cost Card */}
                    <div className="lg:sticky lg:top-32">
                        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-7 sm:p-9 text-white shadow-2xl shadow-slate-900/30 relative overflow-hidden border border-slate-700/30">
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

                            {/* Service label */}
                            <div className="relative z-10 flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                <span className="text-sm font-medium text-slate-300">{currentService.name}</span>
                            </div>

                            {/* Amount */}
                            <div className="relative z-10 mb-2">
                                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Estimated Cost</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-sm text-slate-400">Rs.</span>
                                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                        {estimatedCost.toLocaleString()}
                                    </span>
                                </div>
                                <p className="text-slate-400 mt-2 text-xs">
                                    {isLumpSum
                                        ? 'Starting price for standard bathroom (non-destructive method)'
                                        : `Based on ${area.toLocaleString()} sq ft × Rs. ${currentService.rate}/sq ft`
                                    }
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6" />

                            {/* CTA */}
                            <div className="relative z-10 space-y-3">
                                <Button
                                    href={`https://wa.me/923212420460?text=I need a quote for ${currentService.name}${!isLumpSum ? ` (approx. ${area} sqft)` : ''}`}
                                    variant="primary"
                                    size="lg"
                                    className="w-full justify-center !text-sm sm:!text-base !py-3 sm:!py-3.5"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                                    <span className="whitespace-nowrap">Get Exact Quote</span>
                                </Button>
                                <p className="text-center text-[11px] text-slate-500">
                                    *Final price determined after free on-site inspection
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
