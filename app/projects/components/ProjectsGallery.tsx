import SectionHeader from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/Card';

const projects = [
    { title: 'DHA Bungalow Basement', category: 'Basement Waterproofing', image: '/images/Basement2.JPG' },
    { title: 'Industrial Warehouse', category: 'Heat Proofing', image: '/images/Roof12.jpg' },
    { title: 'CNCD Hospital Korangi', category: 'Commercial Waterproofing', image: '/images/Roof20.jpg' },
    { title: 'Underground Water Tank', category: 'Tank Waterproofing', image: '/images/PoolTank1.JPG' },
    { title: 'Overhead Tank Treatment', category: 'Tank Waterproofing', image: '/images/PoolTank2.JPG' },
    { title: 'Commercial Building Roof', category: 'Roof Waterproofing', image: '/images/Roof21.jpg' },
    { title: 'Residential Terrace', category: 'Roof Waterproofing', image: '/images/Roof19.jpg' },
    { title: 'Factory Floor Coating', category: 'Industrial', image: '/images/Roof13.jpg' },
    { title: 'Basement Seepage Solution', category: 'Basement Waterproofing', image: '/images/Basement3.JPG' },
    { title: 'Swimming Pool Waterproofing', category: 'Tank Waterproofing', image: '/images/PoolTank3.JPG' },
    { title: 'Construction Chemical Supply', category: 'Materials', image: '/images/Material1.jpg' },
    { title: 'Ready-Mix Concrete Delivery', category: 'Ready-Mix', image: '/images/Admixture3.JPG' },
    { title: 'Roof Heat Treatment', category: 'Heat Proofing', image: '/images/roof22.jpg' },
    { title: 'Commercial Roof Restoration', category: 'Roof Waterproofing', image: '/images/roof23.jpg' },
    { title: 'Water Tank Leak Repair', category: 'Tank Waterproofing', image: '/images/PoolTank4.JPG' },
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
