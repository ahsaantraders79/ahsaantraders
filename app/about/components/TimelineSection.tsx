import SectionHeader from '@/components/ui/SectionHeader';

const milestones = [
    {
        year: '2017',
        title: 'Company Founded',
        description: 'Started waterproofing services in Karachi',
        icon: '🚀'
    },
    {
        year: '2018',
        title: 'First Major Project',
        description: 'DHA Bungalow basement waterproofing',
        icon: '🏠'
    },
    {
        year: '2019',
        title: 'Service Expansion',
        description: 'Added heat proofing & construction chemicals',
        icon: '📈'
    },
    {
        year: '2020',
        title: 'Ready-Mix Launch',
        description: 'Started Ready-Mix Concrete & Blocks supply',
        icon: '🏗️'
    },
    {
        year: '2022',
        title: 'Industrial Clients',
        description: 'Partnered with Lucky Cement & factories',
        icon: '🏭'
    },
    {
        year: '2024',
        title: '500+ Projects',
        description: 'Milestone of 500+ completed projects',
        icon: '🏆'
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
                        {milestones.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className="relative bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                            >
                                {/* Year Badge */}
                                <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {milestone.year}
                                </div>

                                {/* Icon */}
                                <div className="text-2xl mb-3 mt-2">{milestone.icon}</div>

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
                        {milestones.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className="flex gap-4 items-start"
                            >
                                {/* Year */}
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                                    <span className="text-lg">{milestone.icon}</span>
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
