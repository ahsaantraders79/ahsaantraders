
import Image from 'next/image';
import Button from '@/components/ui/Button';

// Mock Case Study Data - Using realistic Karachi contexts and existing real images
const caseStudies = [
    {
        id: 'industrial-roofing',
        title: 'Industrial Factory Roof Waterproofing & Heat Proofing',
        location: 'Korangi Industrial Area, Karachi',
        challenge: 'A 25,000 sq ft textile factory roof was suffering from severe leakage during monsoon rains, damaging expensive machinery. Additionally, extreme summer heat was raising internal temperatures, affecting worker productivity.',
        solution: 'We implemented a dual-layer strategy. First, we repaired all cracks and applied a bitumen membrane for 100% waterproofing. Then, we applied our specialized heat-reflective coating to reduce surface temperature.',
        results: [
            'Zero leakage reported in subsequent monsoon season.',
            'Internal temperature reduced by 6-8°C.',
            'Estimated energy savings of 15% on cooling.',
        ],
        image: '/images/commercial-roof-waterproofing.webp',
        tags: ['Industrial', 'Roofing', 'Heat Proofing'],
    },
    {
        id: 'dha-basement',
        title: 'Luxury Bungalow Basement Seepage Solution',
        location: 'DHA Phase 6, Karachi',
        challenge: 'A newly constructed basement in a high-end bungalow faced rising dampness and water seepage from the ground, causing paint peeling and a musty odor, rendering the space unusable.',
        solution: 'We excavated the perimeter to treat the external retaining walls with a heavy-duty cementitious coating. Internally, we used negative-side waterproofing slurry to seal capillaries and stop water ingress.',
        results: [
            'Basement completely dry and odorless within 7 days.',
            'Successfully converted into a home theater.',
            'Client property value preserved.',
        ],
        image: '/images/basement-foundation-waterproofing.webp',
        tags: ['Residential', 'Basement', 'Repair'],
    },
    {
        id: 'clifton-terrace',
        title: 'Apartment Complex Terrace Refurbishment',
        location: 'Clifton Block 4, Karachi',
        challenge: 'The shared terrace of a 10-story apartment building had worn-out joint fillers, causing leakages into the top-floor apartments. The residents needed a durable, non-disruptive solution.',
        solution: 'Our team cleaned the surface thoroughly, treated all expansion joints with high-elasticity commercial sealants, and applied a UV-resistant acrylic waterproofing coat for long-term protection.',
        results: [
            'Leaks stopped immediately for top-floor residents.',
            'Aesthetically pleasing white finish.',
            'Project completed in just 4 days with minimal disturbance.',
        ],
        image: '/images/terrace-waterproofing-finished.webp',
        tags: ['Commercial', 'Terrace', 'Maintenance'],
    },
];

export default function CaseStudiesSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Case Studies</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Real Challenges, Proven Solutions</h2>
                    <p className="text-lg text-slate-600">
                        Dive deeper into how we solve complex construction and waterproofing problems for our clients across Karachi.
                    </p>
                </div>

                <div className="space-y-20">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1" />
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-w-4 aspect-h-3 h-[300px] sm:h-[400px]">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                                <p className="text-blue-600 font-medium mb-4 flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {study.location}
                                </p>

                                <div className="space-y-4 text-sm sm:text-base">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">The Challenge</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Our Solution</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">{study.solution}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 mt-2">
                                        <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">Key Results</h4>
                                        <ul className="space-y-1.5">
                                            {study.results.map((result, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                                                    <span className="text-green-500 mt-0.5 shrink-0">✔</span>
                                                    <span>{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button href="/contact" variant="primary" size="lg">
                        Discuss Your Project With Us
                    </Button>
                </div>
            </div>
        </section>
    );
}
