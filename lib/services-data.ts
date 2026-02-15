/**
 * Services Data - Comprehensive SEO-optimized content for all service pages
 * 
 * CONTENT RULES:
 * 1. No keyword stuffing natural language only
 * 2. Each service has unique content, FAQs, and images
 * 3. Primary keyword appears in title, H1, and first paragraph only
 * 4. Karachi/location mentioned naturally, not forced
 * 5. E-E-A-T signals: experience, process, materials, warranty
 */

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface ServiceImage {
    src: string;
    alt: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    shortTitle: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    h1: string;
    heroSubtitle: string;
    heroImage: string;
    ogImage: string;
    iconName: string;
    overview: string[];
    problems: { title: string; description: string }[];
    process: ProcessStep[];
    benefits: string[];
    materialsUsed: string[];
    areasServed: string;
    faqs: ServiceFAQ[];
    relatedSlugs: string[];
    galleryImages: ServiceImage[];
}

export const servicesData: ServiceData[] = [
    // ============================
    // 1. ROOF WATERPROOFING
    // ============================
    {
        slug: 'roof-waterproofing',
        title: 'Roof Waterproofing',
        shortTitle: 'Roof Waterproofing',
        metaTitle: 'Roof Waterproofing in Karachi | Ahsaan Traders',
        metaDescription: 'Professional roof waterproofing services in Karachi. Stop leaks permanently with bitumen membrane, acrylic coating & 5-year warranty. Call 0321-2420460.',
        keywords: 'roof waterproofing karachi, roof leakage repair, roof waterproofing cost karachi, bitumen membrane roofing, roof seepage solution, waterproofing company karachi',
        h1: 'Roof Waterproofing Services in Karachi',
        heroSubtitle: 'Permanent protection against monsoon leaks, seepage, and structural water damage for residential and commercial rooftops.',
        heroImage: '/images/commercial-roof-waterproofing.jpg',
        ogImage: '/images/commercial-roof-waterproofing.jpg',
        iconName: 'WaterproofingIcon',
        overview: [
            'Roof waterproofing is the most critical line of defense against water damage in Karachi\'s harsh monsoon climate. At Ahsaan Traders, we specialize in providing durable, multi-layer roof waterproofing solutions that protect your property for years.',
            'Whether you own a residential bungalow in DHA, a commercial building in Clifton, or an industrial facility in Korangi, our certified team uses premium-grade materials and proven techniques to eliminate roof leakage permanently.',
            'Every project begins with a thorough roof inspection, followed by crack repair, surface preparation, and the application of our specialized waterproofing system backed by a 5-year warranty on workmanship and materials.',
        ],
        problems: [
            { title: 'Ceiling Water Stains', description: 'Brown or yellowish patches appearing on ceilings after rain indicate water is seeping through the roof structure.' },
            { title: 'Paint Peeling & Bubbling', description: 'Moisture trapped under paint layers causes bubbling, flaking, and eventual structural decay.' },
            { title: 'Dampness & Mold Growth', description: 'Persistent dampness on walls leads to mold, which affects indoor air quality and health.' },
            { title: 'Cracked Roof Surface', description: 'Thermal expansion and contraction create cracks in concrete roofs, allowing water entry during rains.' },
        ],
        process: [
            { step: 1, title: 'Roof Inspection', description: 'Our engineers inspect the entire roof surface to identify cracks, weak joints, and water pooling areas.' },
            { step: 2, title: 'Surface Preparation', description: 'We clean the roof, remove debris, and repair all cracks and damaged areas before waterproofing.' },
            { step: 3, title: 'Primer Application', description: 'A bonding primer is applied to ensure maximum adhesion of the waterproofing membrane.' },
            { step: 4, title: 'Membrane Installation', description: 'We apply the chosen waterproofing system bitumen membrane, acrylic coating, or polyurethane in multiple layers.' },
            { step: 5, title: 'Joint & Edge Sealing', description: 'All expansion joints, parapet edges, and pipe penetrations are sealed with specialized sealants.' },
            { step: 6, title: 'Quality Inspection', description: 'Final flood test and inspection to ensure 100% waterproof coverage before project handover.' },
        ],
        benefits: [
            'Eliminates roof leakage permanently',
            '5-year warranty on workmanship',
            'Reduces indoor temperature by reflecting heat',
            'Extends roof lifespan by 15-20 years',
            'Prevents structural damage and mold growth',
            'Increases property value',
        ],
        materialsUsed: [
            'APP/SBS Modified Bitumen Membrane',
            'Acrylic Elastomeric Coating',
            'Polyurethane Liquid Membrane',
            'Cementitious Waterproofing Slurry',
            'Expansion Joint Sealant',
            'Polyester Fabric Reinforcement',
        ],
        areasServed: 'We serve all areas across Karachi including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, PECHS, Gulistan-e-Jauhar, Bahria Town, Malir, Korangi, SITE, and surrounding neighborhoods in Sindh.',
        faqs: [
            { question: 'How long does roof waterproofing last?', answer: 'When done professionally with quality materials, roof waterproofing typically lasts 8-15 years depending on the system used. Bitumen membrane systems offer the longest durability, while acrylic coatings may need recoating after 5-7 years.' },
            { question: 'What is the cost of roof waterproofing in Karachi?', answer: 'The cost depends on roof area, condition, and the waterproofing system selected. On average, expect Rs. 35-80 per square foot. We provide free on-site inspections and detailed quotations.' },
            { question: 'Can waterproofing be done during monsoon season?', answer: 'We recommend waterproofing before the monsoon season (ideally March-May). However, emergency repairs can be performed during dry intervals between rains.' },
            { question: 'Do you provide a warranty on roof waterproofing?', answer: 'Yes, we provide a 5-year written warranty covering both materials and workmanship. Any issues within the warranty period are addressed free of charge.' },
            { question: 'How long does the waterproofing process take?', answer: 'A standard residential roof (1,000-2,000 sq ft) typically takes 3-5 days. Larger commercial or industrial projects may take 7-14 days.' },
            { question: 'Which waterproofing method is best for flat roofs?', answer: 'For flat concrete roofs in Karachi, bitumen membrane provides the best protection. It handles thermal movement, standing water, and UV exposure effectively.' },
        ],
        relatedSlugs: ['basement-waterproofing', 'heat-proofing', 'bathroom-leakage-treatment'],
        galleryImages: [
            { src: '/images/commercial-roof-waterproofing.jpg', alt: 'Commercial roof waterproofing project in Karachi' },
            { src: '/images/roof-waterproofing-before-after.jpg', alt: 'Roof waterproofing before and after comparison' },
            { src: '/images/karachi-roof-coat-2.png', alt: 'Protective roof coating application' },
            { src: '/images/premium-roof-coating-finish.jpg', alt: 'Premium waterproof coating finish on rooftop' },
            { src: '/images/bitumen-membrane-roof-application.jpg', alt: 'Bitumen membrane installation on roof surface' },
            { src: '/images/roof-surface-preparation-cleaning.jpg', alt: 'Roof surface preparation and cleaning' },
        ],
    },

    // ============================
    // 2. BASEMENT WATERPROOFING
    // ============================
    {
        slug: 'basement-waterproofing',
        title: 'Basement Waterproofing',
        shortTitle: 'Basement Waterproofing',
        metaTitle: 'Basement Waterproofing Karachi | Seepage Control',
        metaDescription: 'Expert basement waterproofing & seepage control in Karachi. Negative-side treatment, drainage solutions & 5-year warranty. Call Ahsaan Traders 0321-2420460.',
        keywords: 'basement waterproofing karachi, basement seepage solution, basement leakage treatment, underground waterproofing, damp proofing basement karachi',
        h1: 'Basement Waterproofing & Seepage Solutions',
        heroSubtitle: 'Transform damp, unusable basements into dry, functional spaces with our proven waterproofing techniques.',
        heroImage: '/images/basement-foundation-waterproofing.jpg',
        ogImage: '/images/basement-foundation-waterproofing.jpg',
        iconName: 'WaterproofingIcon',
        overview: [
            'Basement waterproofing is essential for protecting your property\'s foundation from groundwater seepage, rising dampness, and structural deterioration. In Karachi\'s high water table areas, untreated basements can quickly become unusable causing mold, odor, and significant property damage.',
            'Ahsaan Traders provides comprehensive basement waterproofing solutions using both positive-side and negative-side treatment methods. Our approach addresses the root cause of water ingress, not just the symptoms.',
            'From luxury bungalows in DHA to commercial basements in the business districts, we\'ve successfully waterproofed over 200 basement projects across Karachi each backed by our written performance guarantee.',
        ],
        problems: [
            { title: 'Rising Damp on Walls', description: 'Moisture wicking up through the foundation causes wet spots, salt deposits, and paint deterioration on lower walls.' },
            { title: 'Standing Water After Rain', description: 'Poor drainage and waterproofing failures allow groundwater to pool in the basement during heavy rainfall.' },
            { title: 'Musty Odor & Mold', description: 'Persistent moisture creates an environment for mold and mildew, making the basement unhealthy and unusable.' },
            { title: 'Foundation Cracks', description: 'Hydrostatic pressure from groundwater causes cracks in foundation walls, compromising structural integrity.' },
        ],
        process: [
            { step: 1, title: 'Moisture Assessment', description: 'We conduct a thorough assessment to determine the source and extent of water intrusion.' },
            { step: 2, title: 'Drainage Planning', description: 'If needed, we design an interior or exterior drainage system to redirect groundwater.' },
            { step: 3, title: 'Crack Injection', description: 'All structural cracks are injected with epoxy or polyurethane grout to stop active leaks.' },
            { step: 4, title: 'Surface Treatment', description: 'Cementitious waterproofing coating is applied to all walls and floor surfaces in multiple coats.' },
            { step: 5, title: 'Membrane Application', description: 'For severe cases, a tanking membrane is installed for an additional barrier against water.' },
            { step: 6, title: 'Curing & Testing', description: 'The system is allowed to cure properly and tested to verify complete water resistance.' },
        ],
        benefits: [
            'Converts unusable space into functional rooms',
            'Stops rising damp and seepage permanently',
            'Prevents mold growth and musty odors',
            'Protects foundation structural integrity',
            'Increases usable floor area and property value',
            '5-year performance warranty',
        ],
        materialsUsed: [
            'Crystalline Waterproofing Compound',
            'Cementitious Coating (Negative Side)',
            'Epoxy Injection Grout',
            'Polyurethane Injection Resin',
            'Bituminous Tanking Membrane',
            'Drainage Channel Systems',
        ],
        areasServed: 'We provide basement waterproofing across Karachi including DHA Phase 1-8, Clifton, Bath Island, Gulshan-e-Iqbal, Nazimabad, Garden, Saddar, and all commercial districts.',
        faqs: [
            { question: 'Can an old basement be waterproofed?', answer: 'Absolutely. We specialize in waterproofing existing basements using negative-side (interior) treatment methods. This eliminates the need for costly external excavation in most cases.' },
            { question: 'What causes basement seepage in Karachi?', answer: 'The primary causes are high water table levels, poor original waterproofing, cracked foundations, and inadequate drainage systems. Karachi\'s coastal proximity contributes to elevated groundwater.' },
            { question: 'How long does basement waterproofing take?', answer: 'A typical residential basement takes 5-10 days depending on size and severity. The waterproofing system needs 7-14 days of curing before the space can be used.' },
            { question: 'Is negative-side waterproofing effective?', answer: 'Yes, modern negative-side crystalline and cementitious systems are highly effective. They actually become stronger over time as they react with water to seal capillaries.' },
            { question: 'Do you waterproof commercial basements and parking areas?', answer: 'Yes, we handle commercial basements, underground parking, and utility rooms. Our team is experienced with large-scale projects for offices, hospitals, and shopping centers.' },
        ],
        relatedSlugs: ['roof-waterproofing', 'water-tank-waterproofing', 'dewatering'],
        galleryImages: [
            { src: '/images/basement-foundation-waterproofing.jpg', alt: 'Basement foundation waterproofing treatment' },
            { src: '/images/karachi-basement.png', alt: 'Professional basement seepage control work' },
            { src: '/images/residential-bungalow-waterproofing.jpg', alt: 'Residential bungalow basement treatment' },
            { src: '/images/cementitious-waterproofing-coating.jpg', alt: 'Cementitious waterproofing coating application' },
        ],
    },

    // ============================
    // 3. BATHROOM LEAKAGE TREATMENT
    // ============================
    {
        slug: 'bathroom-leakage-treatment',
        title: 'Bathroom Leakage Treatment',
        shortTitle: 'Bathroom Leakage',
        metaTitle: 'Bathroom Leakage Treatment Karachi | Ahsaan Traders',
        metaDescription: 'Fix bathroom leakage without tile removal. Expert waterproofing for showers, toilets & kitchens in Karachi. Quick service, lasting results. Call 0321-2420460.',
        keywords: 'bathroom leakage treatment karachi, bathroom waterproofing, shower leakage repair, toilet leakage solution, kitchen waterproofing karachi, washroom waterproofing',
        h1: 'Bathroom & Kitchen Leakage Treatment',
        heroSubtitle: 'Eliminate bathroom leaks, shower seepage, and kitchen moisture damage often without removing tiles.',
        heroImage: '/images/roof-seepage-control-treatment.jpg',
        ogImage: '/images/roof-seepage-control-treatment.jpg',
        iconName: 'WaterproofingIcon',
        overview: [
            'Bathroom and kitchen leakage is one of the most common waterproofing problems in Karachi homes and apartments. Faulty pipe joints, deteriorated grout, and missing waterproofing membranes allow water to seep through floors and walls damaging the ceiling below and adjacent rooms.',
            'At Ahsaan Traders, we offer specialized bathroom leakage treatment solutions that fix the problem at its source. In many cases, we can resolve the issue without breaking tiles, saving you the cost and hassle of full renovation.',
            'Our treatment methods include injection grouting, topical sealant application, and where necessary, membrane installation all designed to provide a long-lasting, leak-free bathroom experience.',
        ],
        problems: [
            { title: 'Ceiling Drips Below Bathroom', description: 'Water dripping from the ceiling of rooms beneath bathrooms is the clearest sign of shower or floor leakage.' },
            { title: 'Grout Deterioration', description: 'Worn-out grout between tiles allows water to penetrate behind tiles and into the floor slab.' },
            { title: 'Wall Dampness', description: 'Moisture patches on walls adjacent to bathrooms indicate pipe joint failure or missing wall waterproofing.' },
            { title: 'Pipe Joint Leaks', description: 'Aging or poorly installed pipe connections beneath the bathroom floor develop leaks over time.' },
        ],
        process: [
            { step: 1, title: 'Leak Source Identification', description: 'We pinpoint the exact source of leakage through visual inspection and moisture testing.' },
            { step: 2, title: 'Method Selection', description: 'Based on severity, we recommend either non-destructive treatment (no tile removal) or targeted repair.' },
            { step: 3, title: 'Grout & Joint Treatment', description: 'Damaged grout lines are removed and replaced with waterproof epoxy grout.' },
            { step: 4, title: 'Sealant Application', description: 'Penetrating sealants are applied to tile surfaces and joints to create a water barrier.' },
            { step: 5, title: 'Pipe Repair (if needed)', description: 'Any detected pipe joint failures are repaired or replaced by our plumbing team.' },
            { step: 6, title: 'Water Test & Verification', description: 'We conduct a 24-48 hour water retention test to confirm the repair is successful.' },
        ],
        benefits: [
            'Fix leaks without breaking tiles in most cases',
            'Quick turnaround typically 1-3 days',
            'Eliminates ceiling damage in rooms below',
            'Prevents mold and health hazards',
            'Cost-effective compared to full renovation',
            'Warranty on all treatments',
        ],
        materialsUsed: [
            'Epoxy Tile Grout',
            'Polyurethane Injection Resin',
            'Penetrating Silicone Sealant',
            'Acrylic Waterproofing Membrane',
            'Pipe Joint Sealant Tape',
            'Cementitious Repair Mortar',
        ],
        areasServed: 'Available for bathroom leakage repair across all Karachi neighborhoods including apartments in Gulshan, Clifton, DHA, North Nazimabad, Bahadurabad, PECHS, and Scheme 33.',
        faqs: [
            { question: 'Can bathroom leakage be fixed without breaking tiles?', answer: 'Yes, in most cases we can treat bathroom leaks using injection grouting and topical sealants without removing any tiles. This method is faster, cleaner, and more affordable.' },
            { question: 'How do I know if my bathroom is leaking?', answer: 'Common signs include water stains on the ceiling below the bathroom, damp walls near the bathroom, peeling paint, or a musty smell. If you notice any of these, get it checked immediately.' },
            { question: 'How much does bathroom leakage treatment cost?', answer: 'Non-destructive treatment typically costs Rs. 15,000-40,000 depending on bathroom size and leak severity. This is significantly less than full tile replacement.' },
            { question: 'How long does the treatment last?', answer: 'Our bathroom waterproofing treatments last 5-8 years. We recommend periodic maintenance of grout lines to maximize longevity.' },
            { question: 'Do you fix kitchen leakage too?', answer: 'Yes, kitchen sinks, countertops, and floor drains are treated with the same professional techniques used for bathrooms.' },
        ],
        relatedSlugs: ['roof-waterproofing', 'water-tank-waterproofing', 'construction-chemicals'],
        galleryImages: [
            { src: '/images/roof-seepage-control-treatment.jpg', alt: 'Bathroom seepage control treatment' },
            { src: '/images/residential-bungalow-waterproofing.jpg', alt: 'Residential waterproofing solution' },
            { src: '/images/acrylic-waterproofing-chemical-application.jpg', alt: 'Waterproofing chemical application' },
            { src: '/images/roof-crack-filling-repair.jpg', alt: 'Crack filling and repair work' },
        ],
    },

    // ============================
    // 4. WATER TANK WATERPROOFING
    // ============================
    {
        slug: 'water-tank-waterproofing',
        title: 'Water Tank Waterproofing',
        shortTitle: 'Tank Waterproofing',
        metaTitle: 'Water Tank Waterproofing Karachi | Leak-Free Tanks',
        metaDescription: 'Professional water tank waterproofing in Karachi. Underground & overhead tank treatment with food-safe coatings. Prevent leaks & contamination. Call 0321-2420460.',
        keywords: 'water tank waterproofing karachi, underground tank waterproofing, overhead tank repair, tank leakage repair, water tank coating, swimming pool waterproofing karachi',
        h1: 'Water Tank Waterproofing & Lining Services',
        heroSubtitle: 'Ensure clean, leak-free water storage with our food-safe waterproofing solutions for underground and overhead tanks.',
        heroImage: '/images/water-reservoir-tank-lining.jpg',
        ogImage: '/images/water-reservoir-tank-lining.jpg',
        iconName: 'WaterproofingIcon',
        overview: [
            'Water tank waterproofing protects your water supply from contamination and prevents costly leakage. Whether it\'s an underground concrete reservoir or an overhead rooftop tank, deteriorating waterproofing leads to water loss, structural damage, and potential health risks.',
            'Ahsaan Traders provides specialized water tank waterproofing and lining services using food-grade, non-toxic coatings that are safe for potable water storage. Our solutions also extend to swimming pools, ponds, and industrial water reservoirs.',
            'With over 150 tank waterproofing projects completed across Karachi, we understand the unique challenges of each tank type and apply the most effective treatment methods to ensure decades of reliable performance.',
        ],
        problems: [
            { title: 'Water Level Drops Rapidly', description: 'If your tank loses water faster than usage, it indicates cracks or joint failures allowing water to escape.' },
            { title: 'External Dampness', description: 'Wet patches or salt deposits on the exterior walls of the tank signal active leakage through the concrete.' },
            { title: 'Rusty/Contaminated Water', description: 'Deteriorated interior coating allows concrete minerals and external contaminants to enter the water supply.' },
            { title: 'Structural Cracking', description: 'Thermal stress and ground movement create cracks in tank walls, especially in underground structures.' },
        ],
        process: [
            { step: 1, title: 'Tank Draining & Cleaning', description: 'The tank is drained, cleaned, and inspected for cracks, honeycombs, and coating failures.' },
            { step: 2, title: 'Crack & Joint Repair', description: 'All cracks and construction joints are treated with waterproof repair mortar and sealant.' },
            { step: 3, title: 'Surface Preparation', description: 'The interior surface is prepared by grinding or sandblasting to ensure proper coating adhesion.' },
            { step: 4, title: 'Primer Application', description: 'A specialized primer compatible with the waterproofing system is applied.' },
            { step: 5, title: 'Waterproof Coating', description: 'Food-grade cementitious or epoxy waterproofing coating is applied in 2-3 coats.' },
            { step: 6, title: 'Curing & Filling', description: 'The coating is cured for the recommended period before the tank is refilled and tested.' },
        ],
        benefits: [
            'Stops water leakage and saves thousands on water bills',
            'Food-grade coatings safe for drinking water',
            'Prevents contamination from outside sources',
            'Extends tank life by 20+ years',
            'Applicable to all tank types and sizes',
            'Swimming pool waterproofing available',
        ],
        materialsUsed: [
            'FDA-Approved Cementitious Coating',
            'Epoxy Tank Lining System',
            'Crystalline Waterproofing Admixture',
            'Polyurethane Joint Sealant',
            'Non-Toxic Repair Mortar',
            'SBR Bonding Agent',
        ],
        areasServed: 'We provide water tank waterproofing services throughout Karachi, including residential areas in DHA, Clifton, Gulshan, and commercial/industrial zones in Korangi, Landhi, SITE, and Port Qasim.',
        faqs: [
            { question: 'Is the tank waterproofing coating safe for drinking water?', answer: 'Yes, we exclusively use food-grade, non-toxic coatings that are approved for potable water storage. These coatings do not leach chemicals into your water supply.' },
            { question: 'How long does tank waterproofing take?', answer: 'The process takes 3-5 days for standard residential tanks. An additional 3-5 days of curing is recommended before refilling with water.' },
            { question: 'Can you waterproof an underground tank without digging?', answer: 'Yes, we use interior (negative-side) waterproofing methods that treat the tank from inside, eliminating the need for external excavation.' },
            { question: 'Do you do swimming pool waterproofing?', answer: 'Yes, swimming pool waterproofing is one of our specialties. We use chlorine-resistant and UV-stable coatings designed for pool environments.' },
            { question: 'What is the warranty on tank waterproofing?', answer: 'We provide a 5-year warranty on all water tank waterproofing work, covering both materials and workmanship.' },
        ],
        relatedSlugs: ['basement-waterproofing', 'roof-waterproofing', 'construction-chemicals'],
        galleryImages: [
            { src: '/images/water-reservoir-tank-lining.jpg', alt: 'Water reservoir tank lining treatment' },
            { src: '/images/underground-water-tank-leakage-repair.jpg', alt: 'Underground water tank leakage repair' },
            { src: '/images/overhead-tank-waterproofing-coating.jpg', alt: 'Overhead tank waterproofing coating' },
            { src: '/images/swimming-pool-waterproofing-karachi.jpg', alt: 'Swimming pool waterproofing in Karachi' },
        ],
    },

    // ============================
    // 5. HEAT PROOFING
    // ============================
    {
        slug: 'heat-proofing',
        title: 'Heat Proofing & Cool Roof Coating',
        shortTitle: 'Heat Proofing',
        metaTitle: 'Heat Proofing Services Karachi | Cool Roof Coating',
        metaDescription: 'Reduce indoor temperature by 8-12°C with professional heat proofing in Karachi. Solar reflective coatings, energy savings & 5-year warranty. Call 0321-2420460.',
        keywords: 'heat proofing karachi, cool roof coating, heat reflective paint karachi, roof heat insulation, solar reflective coating, heat proofing cost karachi',
        h1: 'Heat Proofing & Cool Roof Solutions',
        heroSubtitle: 'Beat Karachi\'s extreme summers with advanced solar-reflective coatings that reduce indoor temperatures by 8-12°C.',
        heroImage: '/images/heat-reflective-roof-coating-white.jpg',
        ogImage: '/images/heat-reflective-roof-coating-white.jpg',
        iconName: 'HeatProofingIcon',
        overview: [
            'Heat proofing is essential for buildings in Karachi, where summer temperatures routinely exceed 40°C. Without proper roof insulation, concrete roofs absorb and radiate heat into living and working spaces driving up cooling costs and reducing comfort.',
            'Our cool roof coating technology uses advanced solar-reflective pigments that bounce back up to 90% of solar radiation. This results in measurable temperature reduction of 8-12°C on the top floor, significant energy savings, and extended roof life.',
            'Ahsaan Traders has heat-proofed hundreds of residential buildings, factories, warehouses, and commercial properties across Karachi. Our heat proofing solutions can be applied independently or combined with our waterproofing services for dual protection.',
        ],
        problems: [
            { title: 'Unbearable Top Floor Heat', description: 'Rooms directly below the roof become extremely hot in summer, making them uncomfortable even with AC running.' },
            { title: 'High Electricity Bills', description: 'Excessive heat absorption increases air conditioning load, resulting in significantly higher energy costs.' },
            { title: 'Roof Surface Degradation', description: 'UV radiation and thermal cycling degrade the roof surface, causing cracks and reducing its lifespan.' },
            { title: 'Worker Discomfort (Factories)', description: 'In industrial buildings, excessive heat affects worker productivity and can pose health risks.' },
        ],
        process: [
            { step: 1, title: 'Thermal Assessment', description: 'We measure current roof surface temperature and indoor temperature to establish a baseline.' },
            { step: 2, title: 'Surface Preparation', description: 'The roof is cleaned, and minor cracks are filled to ensure a smooth application surface.' },
            { step: 3, title: 'Primer Coat', description: 'A heat-resistant primer is applied to enhance adhesion and durability of the heat proofing coat.' },
            { step: 4, title: 'Reflective Coating Application', description: 'Solar reflective heat proofing coating is applied in 2-3 thick coats with proper drying time between each.' },
            { step: 5, title: 'Quality Verification', description: 'Post-application temperature testing confirms the heat reduction performance.' },
        ],
        benefits: [
            'Reduces indoor temperature by 8-12°C',
            'Cuts electricity costs by 20-35%',
            'Protects roof from UV degradation',
            'Can be applied over existing waterproofing',
            'White or colored finishes available',
            'Eco-friendly and non-toxic',
        ],
        materialsUsed: [
            'Solar Reflective Elastomeric Coating',
            'Nano-Ceramic Heat Insulation Paint',
            'Acrylic Heat Barrier Primer',
            'Thermal Insulation Membrane',
            'UV-Resistant Top Coat',
        ],
        areasServed: 'Our heat proofing services cover all of Karachi including residential areas, industrial zones in SITE, Korangi, Landhi, commercial buildings in Saddar, I.I. Chundrigar Road, and the Port Qasim industrial area.',
        faqs: [
            { question: 'How much can heat proofing reduce temperature?', answer: 'Our solar reflective coatings typically reduce roof surface temperature by 20-25°C and indoor temperature of the top floor by 8-12°C. Results vary based on building insulation and ventilation.' },
            { question: 'Does heat proofing also waterproof the roof?', answer: 'Most heat proofing coatings provide a basic water-resistant layer but are not a substitute for dedicated waterproofing. We recommend applying waterproofing first, then heat proofing on top for dual protection.' },
            { question: 'How long does heat proofing coating last?', answer: 'Quality heat proofing coatings last 5-8 years before needing recoating. The actual lifespan depends on sun exposure, coating thickness, and maintenance.' },
            { question: 'What is the cost of heat proofing per sq ft in Karachi?', answer: 'Heat proofing costs range from Rs. 15-40 per square foot depending on the coating system selected. We offer free quotations with on-site assessment.' },
            { question: 'Can heat proofing be done on factory/warehouse roofs?', answer: 'Absolutely. Industrial heat proofing is one of our core specialties. We\'ve insulated factories, warehouses, and cold storage facilities across Karachi\'s industrial zones.' },
            { question: 'Is heat proofing worth it in Karachi?', answer: 'Definitely. With 6-7 months of intense heat, the energy savings alone often pay for the treatment within 2-3 years. Plus, it extends roof life and improves comfort.' },
        ],
        relatedSlugs: ['roof-waterproofing', 'construction-chemicals', 'ready-mix-concrete'],
        galleryImages: [
            { src: '/images/heat-reflective-roof-coating-white.jpg', alt: 'Heat reflective white cool roof coating' },
            { src: '/images/industrial-shed-heat-insulation.jpg', alt: 'Industrial warehouse heat insulation' },
            { src: '/images/karachi-cool-roof.png', alt: 'Cool roof coating reducing heat in Karachi' },
            { src: '/images/factory-warehouse-heat-proofing.jpg', alt: 'Factory roof heat proofing application' },
            { src: '/images/cool-roof-heat-resistant-paint.jpg', alt: 'Cool roof heat-resistant paint application' },
        ],
    },

    // ============================
    // 6. CONSTRUCTION CHEMICALS
    // ============================
    {
        slug: 'construction-chemicals',
        title: 'Construction Chemicals Supply',
        shortTitle: 'Construction Chemicals',
        metaTitle: 'Construction Chemicals Karachi | Admixtures & Sealants',
        metaDescription: 'Quality construction chemicals in Karachi waterproofing compounds, concrete admixtures, sealants, bonding agents & repair mortars. Bulk supply. Call 0321-2420460.',
        keywords: 'construction chemicals karachi, concrete admixtures, waterproofing chemicals, sealants adhesives, bonding agents, repair mortar karachi, strength gainer admixture',
        h1: 'Construction Chemicals & Admixtures Supply',
        heroSubtitle: 'Premium-grade construction chemicals for enhanced concrete strength, waterproofing, and structural durability.',
        heroImage: '/images/karachi-chemicals.png',
        ogImage: '/images/karachi-chemicals.png',
        iconName: 'ChemicalsIcon',
        overview: [
            'High-performance construction chemicals are the backbone of modern building projects. From concrete admixtures that enhance strength and workability to specialized waterproofing compounds, the right chemicals make the difference between a structure that lasts decades and one that fails prematurely.',
            'Ahsaan Traders supplies a comprehensive range of construction chemicals sourced from trusted manufacturers. Whether you need strength-gaining admixtures for high-rise foundations, crack fillers for repair work, or bonding agents for plastering we stock it all with fast delivery across Karachi.',
            'Our technical team provides guidance on product selection, dosage, and application methods. We support contractors, builders, and engineers with both retail and bulk supply options.',
        ],
        problems: [
            { title: 'Weak Concrete Mix', description: 'Standard concrete may not achieve required PSI strength without proper admixtures, especially for foundations and columns.' },
            { title: 'Concrete Cracking', description: 'Rapid curing, thermal stress, and shrinkage cause concrete to crack without appropriate crack-reducing admixtures.' },
            { title: 'Poor Bonding', description: 'New concrete or plaster may fail to bond with existing surfaces without proper bonding agents.' },
            { title: 'Water Penetration', description: 'Untreated concrete is porous and allows water to penetrate, leading to steel corrosion and strength loss.' },
        ],
        process: [
            { step: 1, title: 'Requirement Assessment', description: 'We discuss your project needs to recommend the right chemicals and quantities.' },
            { step: 2, title: 'Product Selection', description: 'Our technical team helps select the perfect product for your specific application.' },
            { step: 3, title: 'Dosage Guidance', description: 'We provide precise dosage instructions and mixing procedures for optimal results.' },
            { step: 4, title: 'Delivery', description: 'Fast delivery from our Karachi warehouse to your project site.' },
            { step: 5, title: 'On-Site Support', description: 'Our team is available for on-site guidance if needed during application.' },
        ],
        benefits: [
            'Premium-grade chemicals from trusted brands',
            'Technical guidance and dosage support',
            'Retail and bulk supply options',
            'Fast delivery across Karachi',
            'Competitive pricing for contractors',
            'All products tested and certified',
        ],
        materialsUsed: [
            'Concrete Strength Gainer (Admixtures)',
            'Waterproofing Integral Compounds',
            'SBR Latex Bonding Agent',
            'Crack-Filling Epoxy & Polyurethane',
            'Repair Mortar & Grout',
            'Plasticizers & Superplasticizers',
            'Curing Compounds',
            'Anti-Corrosion Coatings',
        ],
        areasServed: 'We supply construction chemicals across Karachi with delivery to residential projects, commercial sites, and industrial facilities in all areas including DHA, Clifton, SITE, Korangi, Landhi, and Bahria Town.',
        faqs: [
            { question: 'Do you supply construction chemicals in bulk?', answer: 'Yes, we offer bulk supply for contractors and large projects at competitive rates. Contact us with your project requirements for a customized quotation.' },
            { question: 'What concrete admixtures do you stock?', answer: 'We stock a wide range including strength gainers, plasticizers, superplasticizers, retarders, accelerators, waterproofing admixtures, and air-entraining agents.' },
            { question: 'Do you provide technical guidance on products?', answer: 'Absolutely. Our team includes experienced technicians who can advise on product selection, dosage calculation, and proper application methods.' },
            { question: 'Can you deliver to my construction site?', answer: 'Yes, we offer same-day or next-day delivery across Karachi. For ongoing projects, we can set up scheduled deliveries.' },
            { question: 'Are your chemicals compatible with all cement brands?', answer: 'Yes, our admixtures and chemicals are designed to work with all standard Portland cement types commonly available in Pakistan.' },
        ],
        relatedSlugs: ['ready-mix-concrete', 'cemented-blocks', 'roof-waterproofing'],
        galleryImages: [
            { src: '/images/karachi-chemicals.png', alt: 'Construction chemicals supply in Karachi' },
            { src: '/images/construction-chemical-drums-supply.jpg', alt: 'Chemical drums supply for construction projects' },
            { src: '/images/concrete-admixture-chemical-additive.jpg', alt: 'Concrete admixture and chemical additives' },
            { src: '/images/sbr-bonding-agent-latex.jpg', alt: 'SBR bonding agent for concrete applications' },
        ],
    },

    // ============================
    // 7. CEMENTED BLOCKS
    // ============================
    {
        slug: 'cemented-blocks',
        title: 'Cemented Blocks Supply',
        shortTitle: 'Cemented Blocks',
        metaTitle: 'Cemented Blocks Supply Karachi | Concrete Blocks',
        metaDescription: 'High-strength cemented blocks supply in Karachi. Solid & hollow concrete blocks, custom sizes, quality tested. On-site delivery. Call Ahsaan Traders 0321-2420460.',
        keywords: 'cemented blocks karachi, concrete blocks supply, hollow blocks karachi, solid cement blocks, construction blocks supply, block supply karachi',
        h1: 'Quality Cemented Blocks Supply in Karachi',
        heroSubtitle: 'High-strength, quality-tested cemented blocks for residential, commercial, and industrial construction projects.',
        heroImage: '/images/solid-cement-blocks-construction.jpg',
        ogImage: '/images/solid-cement-blocks-construction.jpg',
        iconName: 'BlocksIcon',
        overview: [
            'Quality cemented blocks form the structural backbone of modern construction. Using superior cement-to-aggregate ratios and proper curing processes, our blocks deliver consistent strength, dimensional accuracy, and durability for all types of building projects.',
            'Ahsaan Traders manufactures and supplies both solid and hollow concrete blocks in standard and custom sizes. Every batch is quality tested for compressive strength to ensure compliance with building standards.',
            'We serve builders, contractors, and developers across Karachi with reliable supply and on-time delivery directly to your construction site. Our competitive pricing and consistent quality have made us a preferred block supplier for projects ranging from boundary walls to multi-story buildings.',
        ],
        problems: [
            { title: 'Inconsistent Block Quality', description: 'Many local suppliers produce blocks with inadequate cement ratios, resulting in weak walls that crack and crumble.' },
            { title: 'Dimensional Inaccuracy', description: 'Poorly manufactured blocks vary in size, making wall construction uneven and requiring excessive plaster.' },
            { title: 'Unreliable Supply', description: 'Inconsistent supply and delayed deliveries disrupt project timelines and increase costs.' },
            { title: 'No Strength Testing', description: 'Blocks without compressive strength testing pose structural risks, especially in load-bearing applications.' },
        ],
        process: [
            { step: 1, title: 'Requirement Discussion', description: 'We discuss your project needs block type, quantity, size, and delivery schedule.' },
            { step: 2, title: 'Sample Approval', description: 'Sample blocks are provided for your inspection and strength testing approval.' },
            { step: 3, title: 'Production', description: 'Blocks are manufactured using optimized cement-aggregate ratios and proper vibration compaction.' },
            { step: 4, title: 'Quality Testing', description: 'Each batch is tested for compressive strength and dimensional accuracy before dispatch.' },
            { step: 5, title: 'Delivery', description: 'Blocks are loaded carefully and delivered to your project site on schedule.' },
        ],
        benefits: [
            'Consistent strength across every batch',
            'Standard and custom sizes available',
            'Quality-tested for compressive strength',
            'Competitive pricing for bulk orders',
            'Reliable on-time delivery',
            'Suitable for load-bearing and partition walls',
        ],
        materialsUsed: [
            'Portland Cement',
            'Graded Aggregate & Sand',
            'Quality Water Supply',
            'Steel Molds for Accuracy',
            'Vibration Compaction Equipment',
            'Curing Tanks for Proper Hydration',
        ],
        areasServed: 'We deliver cemented blocks across Karachi including construction sites in DHA, Bahria Town, Clifton, North Karachi, Scheme 33, Malir, Gadap Town, and all industrial areas.',
        faqs: [
            { question: 'What sizes of blocks do you supply?', answer: 'We supply standard sizes (16x8x6 inches, 16x8x8 inches) as well as custom sizes. Both solid and hollow block varieties are available.' },
            { question: 'What is the minimum order quantity?', answer: 'We recommend minimum orders of 500 blocks for delivery. However, smaller quantities can be arranged for pickup from our facility.' },
            { question: 'Are your blocks suitable for load-bearing walls?', answer: 'Yes, our solid blocks meet the required compressive strength for load-bearing wall construction. We provide test certificates on request.' },
            { question: 'How fast can you deliver?', answer: 'Standard orders are delivered within 24–48 hours within Karachi. For large ongoing projects, we set up scheduled deliveries.' },
            { question: 'Do you offer hollow blocks too?', answer: 'Yes, we supply both solid and hollow concrete blocks. Hollow blocks are ideal for partition walls, offering good thermal insulation and lighter weight.' },
        ],
        relatedSlugs: ['ready-mix-concrete', 'construction-chemicals', 'dewatering'],
        galleryImages: [
            { src: '/images/solid-cement-blocks-construction.jpg', alt: 'Solid cement blocks for construction' },
            { src: '/images/concrete-hollow-blocks-stack.jpg', alt: 'Stacked concrete hollow blocks' },
        ],
    },

    // ============================
    // 8. READY-MIX CONCRETE
    // ============================
    {
        slug: 'ready-mix-concrete',
        title: 'Ready-Mix Concrete Supply',
        shortTitle: 'Ready-Mix Concrete',
        metaTitle: 'Ready-Mix Concrete Supply Karachi | All Grades',
        metaDescription: 'Premium ready-mix concrete supply in Karachi. All grades available with on-time transit mixer delivery. Strength-tested batches. Call Ahsaan Traders 0321-2420460.',
        keywords: 'ready mix concrete karachi, RMC supply karachi, concrete supply, transit mixer concrete, concrete delivery karachi, ready mix concrete price',
        h1: 'Ready-Mix Concrete Supply & Delivery',
        heroSubtitle: 'Quality-controlled, strength-tested ready-mix concrete delivered to your construction site across Karachi.',
        heroImage: '/images/karachi-concrete-2.png',
        ogImage: '/images/karachi-concrete-2.png',
        iconName: 'ReadyMixIcon',
        overview: [
            'Ready-mix concrete eliminates the guesswork from on-site mixing, delivering consistent, quality-controlled concrete directly to your project. Every batch is precisely proportioned at our plant to meet your specified grade and strength requirements.',
            'Ahsaan Traders provides ready-mix concrete supply with transit mixer delivery across Karachi. Whether you need standard-grade concrete for residential foundations or high-strength mixes for commercial high-rises, we deliver on time, every time.',
            'Our concrete is enhanced with quality admixtures for improved workability, strength gain, and durability. Each batch comes with a mix design certificate and can be tested on-site for slump and cube strength verification.',
        ],
        problems: [
            { title: 'Inconsistent Site-Mixed Concrete', description: 'Manual mixing on-site often results in inconsistent cement-water ratios, leading to variable concrete quality.' },
            { title: 'Labor & Time Inefficiency', description: 'Site mixing requires additional labor, space, and time compared to ready-mix delivery.' },
            { title: 'Strength Compliance Issues', description: 'Without laboratory proportioning, achieving the specified concrete grade consistently is difficult.' },
            { title: 'Material Wastage', description: 'On-site mixing leads to cement, aggregate, and water wastage compared to precision batching.' },
        ],
        process: [
            { step: 1, title: 'Grade & Volume Discussion', description: 'We confirm the concrete grade, total volume, and pour schedule with your project team.' },
            { step: 2, title: 'Mix Design', description: 'Our team prepares a mix design tailored to your specifications and site conditions.' },
            { step: 3, title: 'Batching', description: 'Concrete is precision-batched at our plant with quality aggregates, cement, and admixtures.' },
            { step: 4, title: 'Transit Mixer Delivery', description: 'Ready-mix concrete is delivered via transit mixers to maintain freshness and workability.' },
            { step: 5, title: 'On-Site Pour Support', description: 'Our team coordinates delivery timing to match your pouring schedule and requirements.' },
        ],
        benefits: [
            'Consistent quality and strength in every batch',
            'Saves labor, time, and material costs',
            'All standard and high-strength grades available',
            'Transit mixer delivery across Karachi',
            'Mix design certificates provided',
            'On-time delivery for critical pours',
        ],
        materialsUsed: [
            'Portland Cement (OPC & Blended)',
            'Graded Coarse & Fine Aggregates',
            'Strength-Gaining Admixtures',
            'Superplasticizers for Workability',
            'Quality-Controlled Water',
            'Fly Ash or Slag (for special mixes)',
        ],
        areasServed: 'Ready-mix concrete delivery covers all Karachi zones including DHA, Clifton, Gulshan-e-Iqbal, North Karachi, Bahria Town, Malir, Korangi, SITE, and surrounding areas within a 50 km radius.',
        faqs: [
            { question: 'What concrete grades do you supply?', answer: 'We supply all standard grades from C15 to C50+ (2000 PSI to 7000+ PSI). Custom mix designs for specialized applications are also available.' },
            { question: 'What is the minimum order for ready-mix concrete?', answer: 'Minimum order is typically one transit mixer load (approximately 4-6 cubic meters). Smaller quantities can be arranged based on availability.' },
            { question: 'How do you ensure concrete quality?', answer: 'Every batch is proportioned using calibrated equipment, enhanced with admixtures, and tested. We provide slump test data and mix design certificates.' },
            { question: 'Can you deliver on short notice?', answer: 'Yes, we accommodate urgent orders with same-day delivery when possible. For planned pours, we recommend booking 24-48 hours in advance.' },
            { question: 'Do you add admixtures to the concrete?', answer: 'Yes, our ready-mix includes appropriate admixtures for workability, strength gain, and durability. Special admixtures like waterproofing or retarders are available on request.' },
        ],
        relatedSlugs: ['construction-chemicals', 'cemented-blocks', 'dewatering'],
        galleryImages: [
            { src: '/images/karachi-concrete-2.png', alt: 'Ready-mix concrete supply in Karachi' },
            { src: '/images/concrete-strength-psi-test-certificate.jpg', alt: 'Concrete strength PSI test certificate' },
            { src: '/images/expert-construction-site-supervision.jpg', alt: 'Expert supervision during concrete pour' },
        ],
    },

    // ============================
    // 9. DE-WATERING SERVICES
    // ============================
    {
        slug: 'dewatering',
        title: 'De-Watering Services',
        shortTitle: 'De-Watering',
        metaTitle: 'Dewatering Services Karachi | Construction Pumping',
        metaDescription: 'Professional dewatering services in Karachi for construction sites, basements & flooded areas. 24/7 pumping, emergency response available. Call 0321-2420460.',
        keywords: 'dewatering services karachi, construction site dewatering, basement dewatering, water pumping service, flood water removal karachi, groundwater control karachi',
        h1: 'Professional De-Watering Services in Karachi',
        heroSubtitle: 'Reliable water removal and groundwater control for construction sites, basements, and emergency flood situations.',
        heroImage: '/images/karachi-basement.png',
        ogImage: '/images/karachi-basement.png',
        iconName: 'DewateringIcon',
        overview: [
            'De-watering is a critical service for any construction project dealing with groundwater or accumulated water. Karachi\'s high water table, especially in low-lying and coastal areas, often requires continuous pumping to keep excavations dry and workable.',
            'Ahsaan Traders provides professional de-watering solutions using powerful submersible pumps and wellpoint systems. Whether you need water removal for foundation excavation, basement construction, or emergency flood response our team is equipped to handle projects of any scale.',
            'We also offer 24/7 emergency de-watering services for properties affected by flooding, burst pipes, or monsoon water accumulation. Our rapid response team arrives with the equipment needed to get your property dry quickly.',
        ],
        problems: [
            { title: 'Flooded Excavations', description: 'High water table causes excavations to fill with groundwater, halting construction and weakening soil.' },
            { title: 'Basement Flooding', description: 'Completed basements can flood during heavy rains or due to groundwater rise, damaging interiors and utilities.' },
            { title: 'Construction Delays', description: 'Uncontrolled water on construction sites causes project delays, increased costs, and safety hazards.' },
            { title: 'Monsoon Emergency', description: 'Karachi\'s monsoon season regularly causes flooding in low-lying areas, requiring immediate water removal.' },
        ],
        process: [
            { step: 1, title: 'Site Assessment', description: 'We evaluate the water volume, source, and site conditions to determine the right pumping solution.' },
            { step: 2, title: 'Equipment Mobilization', description: 'Appropriate pumps, hoses, and discharge arrangements are mobilized to the site.' },
            { step: 3, title: 'Pumping Operations', description: 'Our operators run the pumps continuously or intermittently as needed to keep the area dry.' },
            { step: 4, title: 'Water Management', description: 'Pumped water is discharged safely into storm drains or designated disposal areas.' },
            { step: 5, title: 'Continuous Monitoring', description: 'For ongoing projects, we provide staffed or automated pumping with regular monitoring.' },
        ],
        benefits: [
            '24/7 emergency response available',
            'Powerful submersible pumps for any depth',
            'Continuous pumping for construction sites',
            'Rapid mobilization within hours',
            'Experienced operators and crew',
            'Flexible rental and contract options',
        ],
        materialsUsed: [
            'Submersible Pumps (Various Capacities)',
            'Wellpoint Dewatering Systems',
            'Heavy-Duty Discharge Hoses',
            'Sump Pit Equipment',
            'Water Level Monitoring Instruments',
            'Generator Sets for Uninterrupted Power',
        ],
        areasServed: 'De-watering services available across Karachi including flood-prone areas in Lyari, Surjani, Orangi, Gulistan-e-Jauhar, Malir, Korangi, and all construction sites city-wide. Emergency services available 24/7.',
        faqs: [
            { question: 'Do you offer 24/7 emergency de-watering?', answer: 'Yes, our emergency team is available around the clock. For flooding situations, we mobilize pumps and crew within 2-4 hours of your call.' },
            { question: 'What capacity pumps do you use?', answer: 'We use submersible pumps ranging from small 2-inch units for basements to large industrial pumps capable of handling hundreds of gallons per minute for construction sites.' },
            { question: 'How long can you run continuous pumping?', answer: 'We provide continuous 24/7 pumping for as long as your project requires. For extended projects, we station operators and backup equipment on-site.' },
            { question: 'Do you handle monsoon flood situations?', answer: 'Yes, monsoon flood response is a major part of our services. We help both residential and commercial properties recover from flooding quickly and safely.' },
            { question: 'Can dewatering be combined with waterproofing?', answer: 'Absolutely. We often de-water a site first, then apply permanent waterproofing solutions. This combination ensures the problem is solved at both ends.' },
        ],
        relatedSlugs: ['basement-waterproofing', 'roof-waterproofing', 'water-tank-waterproofing'],
        galleryImages: [
            { src: '/images/karachi-basement.png', alt: 'Dewatering operations for basement construction' },
            { src: '/images/expert-construction-site-supervision.jpg', alt: 'Expert supervision during dewatering' },
            { src: '/images/professional-waterproofing-workers-team.jpg', alt: 'Professional dewatering team at work' },
        ],
    },
];

// Helper: Get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(s => s.slug === slug);
}

// Helper: Get all slugs for static generation
export function getAllServiceSlugs(): string[] {
    return servicesData.map(s => s.slug);
}

// Helper: Get related services
export function getRelatedServices(slugs: string[]): ServiceData[] {
    return slugs
        .map(slug => getServiceBySlug(slug))
        .filter((s): s is ServiceData => s !== undefined);
}

// Navigation data for header dropdown
// Short one-liners for mega menu descriptions
const serviceTaglines: Record<string, string> = {
    'roof-waterproofing': 'Permanent monsoon & leak protection',
    'basement-waterproofing': 'Foundation sealing & moisture control',
    'bathroom-leakage-treatment': 'No-break tile repair technology',
    'water-tank-waterproofing': 'Food-safe tank & pool coating',
    'heat-proofing': 'Cool roof & energy savings',
    'construction-chemicals': 'Admixtures, sealants & bonding agents',
    'cemented-blocks': 'Strength-tested solid & hollow blocks',
    'ready-mix-concrete': 'All grades, transit mixer delivery',
    'dewatering': '24/7 emergency water removal',
};

export const serviceNavItems = servicesData.map(s => ({
    name: s.shortTitle,
    href: `/services/${s.slug}`,
    slug: s.slug,
    tagline: serviceTaglines[s.slug] || '',
}));
