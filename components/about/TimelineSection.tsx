import SectionHeader from '@/components/ui/SectionHeader';

const milestones = [
    {
        year: '2017',
        title: 'Company Founded',
        description: 'Started waterproofing services in Karachi',
        iconPath: 'M4.5 10.5L12 3l7.5 7.5M5 11v8a1 1 0 001 1h3m10-9v8a1 1 0 01-1 1h-3m-6 0v-4a1 1 0 011-1h2a1 1 0 011 1v4m-6 0h6',
    },
    {
        year: '2018',
        title: 'First Major Project',
        description: 'DHA Bungalow basement waterproofing',
        iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
        year: '2019',
        title: 'Service Expansion',
        description: 'Added heat proofing & construction chemicals',
        iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
        year: '2020',
        title: 'Ready-Mix Launch',
        description: 'Started Ready-Mix Concrete & Blocks supply',
        iconPath: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    },
    {
        year: '2022',
        title: 'Industrial Clients',
        description: 'Partnered with Lucky Cement & factories',
        iconPath: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21',
    },
    {
        year: '2024',
        title: '500+ Projects',
        description: 'Milestone of 500+ completed projects',
        iconPath: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m9 0H7.5M12 3l2.5 7.5H9.5L12 3z',
    },
];

export default function TimelineSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    label="Our Journey"
                    title="Growing With Karachi"
                    subtitle="Key milestones in our growth story"
                />

                {/* Timeline - Horizontal scroll on mobile, grid on desktop */}
                <div className="relative">
                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {milestones.map((milestone) => (
                            <div
                                key={milestone.year}
                                className="relative bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                            >
                                {/* Year Badge */}
                                <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {milestone.year}
                                </div>

                                {/* Icon */}
                                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 mt-2 group-hover:bg-blue-100 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={milestone.iconPath} />
                                    </svg>
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                                    {milestone.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile - Vertical Timeline */}
                    <div className="md:hidden space-y-4">
                        {milestones.map((milestone) => (
                            <div
                                key={milestone.year}
                                className="flex gap-4 items-start"
                            >
                                {/* Year */}
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={milestone.iconPath} />
                                    </svg>
                                    <span className="text-[10px] font-bold">{milestone.year}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-slate-50 rounded-xl p-3">
                                    <h3 className="font-bold text-slate-800 text-sm mb-0.5">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-xs text-slate-500">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
