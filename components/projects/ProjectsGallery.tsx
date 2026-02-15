import SectionHeader from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/Card';

const projects = [
    { title: 'DHA Bungalow Basement', category: 'Basement Waterproofing', image: '/images/basement-foundation-waterproofing.jpg' },
    { title: 'Industrial Warehouse', category: 'Heat Proofing', image: '/images/terrace-waterproofing-finished.jpg' },
    { title: 'CNCD Hospital Korangi', category: 'Commercial Waterproofing', image: '/images/commercial-roof-waterproofing.jpg' },
    { title: 'Underground Water Tank', category: 'Tank Waterproofing', image: '/images/underground-water-tank-leakage-repair.jpg' },
    { title: 'Overhead Tank Treatment', category: 'Tank Waterproofing', image: '/images/overhead-tank-waterproofing-coating.jpg' },
    { title: 'Commercial Building Roof', category: 'Roof Waterproofing', image: '/images/durable-roof-weatherproofing-layer.jpg' },
    { title: 'Residential Terrace', category: 'Roof Waterproofing', image: '/images/roof-waterproofing-before-after.jpg' },
    { title: 'Factory Floor Coating', category: 'Industrial', image: '/images/expert-construction-site-supervision.jpg' },
    { title: 'Basement Seepage Solution', category: 'Basement Waterproofing', image: '/images/residential-bungalow-waterproofing.jpg' },
    { title: 'Swimming Pool Waterproofing', category: 'Tank Waterproofing', image: '/images/swimming-pool-waterproofing-karachi.jpg' },
    { title: 'Construction Chemical Supply', category: 'Materials', image: '/images/construction-chemical-drums-supply.jpg' },
    { title: 'Ready-Mix Concrete Delivery', category: 'Ready-Mix', image: '/images/concrete-admixture-chemical-additive.jpg' },
    { title: 'Roof Heat Treatment', category: 'Heat Proofing', image: '/images/heat-reflective-roof-coating-white.jpg' },
    { title: 'Commercial Roof Restoration', category: 'Roof Waterproofing', image: '/images/premium-roof-coating-finish.jpg' },
    { title: 'Water Tank Leak Repair', category: 'Tank Waterproofing', image: '/images/roof-seepage-control-treatment.jpg' },
];

export default function ProjectsGallery() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    label="Portfolio"
                    title="Completed Projects"
                    subtitle="A showcase of our quality work across Karachi and Sindh"
                />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            category={project.category}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
