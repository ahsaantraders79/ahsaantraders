'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const services = [
    { id: 'waterproofing', name: 'Roof Waterproofing', rate: 75, unit: 'sq ft' },
    { id: 'heatproofing', name: 'Heat Proofing', rate: 55, unit: 'sq ft' },
    { id: 'tank', name: 'Water Tank Treatment', rate: 120, unit: 'sq ft' },
    { id: 'bathroom', name: 'Bathroom Leakage', rate: 15000, unit: 'lump sum' },
] as const;

export default function CostCalculatorSection() {
    const [selectedService, setSelectedService] = useState<string>(services[0].id);
    const [area, setArea] = useState<number>(1000); // Default 1000 sq ft

    const currentService = services.find(s => s.id === selectedService) || services[0];
    const isLumpSum = currentService.unit === 'lump sum';

    const estimatedCost = isLumpSum ? currentService.rate : area * currentService.rate;

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content */}
                    <div>
                        <SectionHeader
                            align="left"
                            label="Instant Quote"
                            title="Estimate Your Project Cost"
                            subtitle="Get a quick estimate for your waterproofing needs. Prices are indicative and may vary based on site conditions."
                        />

                        <div className="mt-8 space-y-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Select Service</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {services.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setSelectedService(s.id)}
                                            className={`p-3 rounded-xl border text-left transition-all ${selectedService === s.id
                                                ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500'
                                                : 'border-slate-200 hover:border-blue-300 text-slate-600'
                                                }`}
                                        >
                                            <span className="block font-medium">{s.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {!isLumpSum && (
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700">
                                        Total Area (Square Feet)
                                    </label>
                                    <input
                                        type="range"
                                        min="100"
                                        max="5000"
                                        step="50"
                                        value={area}
                                        onChange={(e) => setArea(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <div className="flex justify-between text-sm text-slate-500 mt-1">
                                        <span>100 sq ft</span>
                                        <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-800">{area} sq ft</span>
                                        <span>5000+ sq ft</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Calculator Card */}
                    <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-xl font-medium text-slate-300 relative z-10">Estimated Cost</h3>

                        <div className="mt-6 mb-8 relative z-10">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl sm:text-6xl font-bold tracking-tight">
                                    Rs. {estimatedCost.toLocaleString()}
                                </span>
                                {!isLumpSum && <span className="text-slate-400">*</span>}
                            </div>
                            <p className="text-slate-400 mt-2 text-sm">
                                {isLumpSum
                                    ? 'Starting price for standard bathrooms'
                                    : `Based on approx. Rs. ${currentService.rate} per ${currentService.unit}`
                                }
                            </p>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <Button href={`https://wa.me/923212420460?text=I need a quote for ${currentService.name} approx ${area} sqft`} variant="primary" size="lg" className="w-full justify-center">
                                Get Exact Quote on WhatsApp
                            </Button>
                            <p className="text-center text-xs text-slate-500">
                                *Final price subject to free site inspection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
