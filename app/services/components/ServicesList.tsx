import Image from 'next/image';
import Button from '@/components/ui/Button';
import { CheckIcon, WaterproofingIcon, HeatProofingIcon, ChemicalsIcon, BlocksIcon, ReadyMixIcon, DewateringIcon } from '@/components/ui/Icons';

const services = [
    {
        id: 'waterproofing',
        title: 'Waterproofing & Leakage Solutions',
        description: 'Complete waterproofing solutions for all types of structures using premium-grade materials. We specialize in preventing and treating water damage with proven techniques and long-lasting results.',
        icon: <WaterproofingIcon size={28} />,
        image: '/images/Roof11.jpg',
        features: [
            'Roof waterproofing',
            'Basement waterproofing',
            'Water tank waterproofing (underground & overhead)',
            'Bathroom, kitchen & washroom leakage treatment',
            'Terrace & balcony waterproofing',
            'Crack sealing and expansion joint filling',
        ],
    },
    {
        id: 'heat-proofing',
        title: 'Heat Proofing Services',
        description: 'Advanced solar-reflective coatings and heat-resistant treatments that significantly reduce indoor temperatures. Energy-efficient solutions to combat Karachi\'s intense summer heat.',
        icon: <HeatProofingIcon size={28} />,
        image: '/images/Roof3.JPG',
        features: [
            'Roof heat proofing coatings',
            'Solar reflective coatings',
            'Energy-saving coatings',
            'Heat reduction treatment for homes',
            'Buildings heat proofing',
            'Warehouses heat treatment',
        ],
    },
    {
        id: 'chemicals',
        title: 'Construction Chemicals',
        description: 'High-performance construction chemicals from trusted brands for enhanced structural durability, waterproofing, and concrete strength.',
        icon: <ChemicalsIcon size={28} />,
        image: '/images/Material.jpg',
        features: [
            'Waterproofing chemicals',
            'High-performance sealants & adhesives',
            'Concrete admixtures (including strength gainers)',
            'Crack fillers',
            'Repair mortars',
            'Bonding agents',
        ],
    },
    {
        id: 'blocks',
        title: 'Cemented Blocks Supply',
        description: 'High-strength cemented blocks manufactured with quality cement and aggregates for all types of construction projects.',
        icon: <BlocksIcon size={28} />,
        image: '/images/Structure.jpeg',
        features: [
            'High-strength cemented block supply',
            'Customized high-strength block solutions',
            'Standard size blocks',
            'Custom size solutions available',
            'Quality tested for strength',
            'On-site delivery service',
        ],
    },
    {
        id: 'ready-mix',
        title: 'Ready-Mix Concrete Supplies',
        description: 'High-quality ready-mix concrete in various grades with on-time delivery across Karachi for all construction applications.',
        icon: <ReadyMixIcon size={28} />,
        image: '/images/Admixture1.JPG',
        features: [
            'Standard ready-mix concrete grades',
            'High-strength concrete',
            'Fast-setting concrete',
            'Customized mix designs',
            'For foundations, slabs, columns, beams',
            'On-site delivery across Karachi',
        ],
    },
    {
        id: 'dewatering',
        title: 'De-Watering Services',
        description: 'Professional de-watering solutions for construction sites, basements, and flooded areas using modern pumping equipment.',
        icon: <DewateringIcon size={28} />,
        image: '/images/Basement1.JPG',
        features: [
            'Construction site dewatering',
            'Basement water removal',
            'Flood water extraction',
            'Continuous pumping services',
            'Emergency response available',
            '24/7 service availability',
        ],
    },
];

export default function ServicesList() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        id={service.id}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-20 last:mb-0"
                    >
                        {/* Image - alternates sides */}
                        <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={service.image}
                                    alt={`${service.title} - Ahsan Traders Karachi`}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[250px] sm:h-[300px] md:h-[350px]"
                                />
                            </div>

                            {/* Icon Badge */}
                            <div className="absolute -bottom-3 right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white shadow-lg">
                                {service.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-3">
                                Service #{index + 1}
                            </span>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                                {service.title}
                            </h2>

                            <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-6">
                                {service.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-2">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckIcon size={10} className="text-green-600" />
                                        </div>
                                        <span className="text-slate-700 text-xs sm:text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button href="/contact" variant="primary" size="md">
                                Get Quote
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
