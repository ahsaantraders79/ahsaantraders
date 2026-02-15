'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
    { src: '/images/basement-foundation-waterproofing.jpg', alt: 'Basement Foundation Waterproofing', category: 'Waterproofing' },
    { src: '/images/commercial-roof-waterproofing.jpg', alt: 'Commercial Roof Waterproofing', category: 'Waterproofing' },
    { src: '/images/roof-waterproofing-before-after.jpg', alt: 'Roof Waterproofing Before & After', category: 'Waterproofing' },
    { src: '/images/terrace-waterproofing-finished.jpg', alt: 'Terrace Waterproofing Finished', category: 'Waterproofing' },
    { src: '/images/expert-construction-site-supervision.jpg', alt: 'Expert Site Supervision', category: 'Construction' },
    { src: '/images/professional-waterproofing-workers-team.jpg', alt: 'Professional Waterproofing Team', category: 'Team' },
    { src: '/images/hospital-building-renovation-karachi.jpg', alt: 'Hospital Renovation Project', category: 'Construction' },
    { src: '/images/water-reservoir-tank-lining.jpg', alt: 'Water Tank Lining', category: 'Waterproofing' },
    { src: '/images/industrial-shed-heat-insulation.jpg', alt: 'Industrial Heat Insulation', category: 'Heat Proofing' },
    { src: '/images/swimming-pool-waterproofing-karachi.jpg', alt: 'Swimming Pool Waterproofing', category: 'Waterproofing' },
    { src: '/images/solid-cement-blocks-construction.jpg', alt: 'Solid Cement Blocks', category: 'Construction' },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Category Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 lg:gap-6">
                    {filtered.map((image, index) => (
                        <div
                            key={image.src}
                            className="break-inside-avoid mb-4 sm:mb-5 lg:mb-6"
                        >
                            <div
                                className="relative group rounded-2xl overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300"
                                onClick={() => setLightboxIndex(index)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
                                    <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm w-fit mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.category}
                                    </span>
                                    <p className="text-white font-bold text-base sm:text-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {image.alt}
                                    </p>
                                </div>
                                {/* Zoom Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
                                    <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Count */}
                <div className="text-center mt-10 sm:mt-14">
                    <p className="text-slate-500 text-sm">
                        Showing <span className="font-semibold text-slate-700">{filtered.length}</span> of{' '}
                        <span className="font-semibold text-slate-700">{galleryImages.length}</span> projects
                    </p>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Prev Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1);
                        }}
                        className="absolute left-2 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div className="max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={filtered[lightboxIndex].src}
                            alt={filtered[lightboxIndex].alt}
                            width={1400}
                            height={1000}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            priority
                        />
                        <div className="text-center mt-4">
                            <p className="text-white font-semibold text-lg">{filtered[lightboxIndex].alt}</p>
                            <p className="text-white/60 text-sm mt-1">{filtered[lightboxIndex].category} • {lightboxIndex + 1} / {filtered.length}</p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0);
                        }}
                        className="absolute right-2 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
}
