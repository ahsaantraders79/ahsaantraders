/**
 * Per-Service SEO Content Unique section titles, labels, and trust signals
 *
 * GOOGLE SEO GUIDELINES FOLLOWED:
 * 1. E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness
 * 2. Helpful Content: Unique, valuable content per page no thin/duplicate pages
 * 3. Natural keyword placement in H2 headings (primary keyword once per heading max)
 * 4. No keyword stuffing conversational, helpful language
 * 5. Trust signals: stats, warranty, experience, certifications
 */

export interface ServiceSEOContent {
    sectionTitles: {
        overview: string;
        problems: string;
        process: string;
        benefits: string;
        materials: string;
        gallery: string;
        areas: string;
        faq: string;
        related: string;
    };
    sectionLabels: {
        overview: string;
        problems: string;
        process: string;
        gallery: string;
        faq: string;
        related: string;
    };
    sectionSubtitles: {
        problems: string;
        process: string;
        gallery: string;
        faq: string;
        related: string;
    };
    whyChooseUs: { title: string; description: string }[];
    highlights: { value: string; label: string }[];
    ctaHeading: string;
    ctaSubtext: string;
}

export const serviceSEOContent: Record<string, ServiceSEOContent> = {
    // ═══════════════════════════════════════
    // 1. ROOF WATERPROOFING
    // ═══════════════════════════════════════
    'roof-waterproofing': {
        sectionTitles: {
            overview: 'Understanding Professional Roof Waterproofing',
            problems: 'Warning Signs Your Roof Needs Waterproofing',
            process: 'Our Proven 6-Step Roof Waterproofing Process',
            benefits: 'Advantages of Professional Roof Protection',
            materials: 'Premium Waterproofing Materials We Use',
            gallery: 'Roof Waterproofing Projects Across Karachi',
            areas: 'Roof Waterproofing Coverage Areas in Karachi',
            faq: 'Roof Waterproofing Your Questions Answered',
            related: 'Complementary Building Protection Services',
        },
        sectionLabels: {
            overview: 'Expert Roof Solutions',
            problems: 'Identify the Damage Early',
            process: 'From Inspection to Completion',
            gallery: 'Real Roof Projects',
            faq: 'Homeowner FAQs',
            related: 'Complete Property Protection',
        },
        sectionSubtitles: {
            problems: 'These symptoms indicate your roof needs professional waterproofing delaying treatment only increases repair costs.',
            process: 'We follow an internationally recognized methodology refined over 9+ years of Karachi roofing experience.',
            gallery: 'Browse real roof waterproofing projects completed for homeowners and businesses across Karachi.',
            faq: 'Honest, expert answers about roof waterproofing costs, timelines, and long-term outcomes.',
            related: 'Maximize your property protection with services that work seamlessly alongside roof waterproofing.',
        },
        whyChooseUs: [
            { title: '9+ Years of Karachi Roofing Experience', description: 'We understand the monsoon patterns, salt air corrosion, and extreme thermal stress unique to Karachi. Our solutions are engineered for local conditions.' },
            { title: '500+ Roofs Successfully Waterproofed', description: 'From DHA bungalows to SITE industrial warehouses our portfolio covers every roof type and waterproofing challenge in the city.' },
            { title: '5-Year Written Performance Warranty', description: 'Every project is backed by a documented 5-year warranty on both materials and workmanship. Problems within warranty? We fix them free.' },
            { title: 'ISI-Certified Materials Only', description: 'We exclusively use certified, internationally approved waterproofing materials never substandard alternatives that fail within months.' },
        ],
        highlights: [
            { value: '500+', label: 'Roofs Waterproofed' },
            { value: '5yr', label: 'Written Warranty' },
            { value: '9+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
        ],
        ctaHeading: 'Stop Roof Leaks Before Monsoon Season',
        ctaSubtext: 'Book a free roof inspection today our engineers will assess your roof and provide a no-obligation waterproofing plan.',
    },

    // ═══════════════════════════════════════
    // 2. BASEMENT WATERPROOFING
    // ═══════════════════════════════════════
    'basement-waterproofing': {
        sectionTitles: {
            overview: 'Why Basement Waterproofing Is Essential in Karachi',
            problems: 'Signs of Basement Water Damage You Shouldn\'t Ignore',
            process: 'How We Waterproof Basements From the Inside Out',
            benefits: 'Benefits of a Professionally Waterproofed Basement',
            materials: 'Basement-Grade Waterproofing Solutions',
            gallery: 'Basement Waterproofing Transformations',
            areas: 'Basement Waterproofing Service Locations',
            faq: 'Basement Waterproofing Expert Answers',
            related: 'Related Foundation Protection Services',
        },
        sectionLabels: {
            overview: 'Foundation Protection',
            problems: 'Spot the Warning Signs',
            process: 'Our Proven Approach',
            gallery: 'Before & After Results',
            faq: 'Property Owner FAQs',
            related: 'Comprehensive Protection',
        },
        sectionSubtitles: {
            problems: 'Ignoring these basement water damage signs can lead to structural failure, mold infestations, and significant property devaluation.',
            process: 'Our negative-side waterproofing method eliminates costly external excavation while delivering permanent results.',
            gallery: 'Real basement waterproofing projects showing the transformation from damp, unusable space to dry, functional rooms.',
            faq: 'Get clear answers about basement waterproofing methods, costs, and what to expect during the process.',
            related: 'Protect your entire property foundation with these complementary waterproofing and drainage solutions.',
        },
        whyChooseUs: [
            { title: 'Negative-Side Waterproofing Specialists', description: 'We specialize in treating basements from the inside no excavation needed. Our crystalline and cementitious systems seal water at the source.' },
            { title: '200+ Basements Rescued in Karachi', description: 'We\'ve transformed flooded, moldy basements into functional living and storage spaces across DHA, Clifton, and commercial districts.' },
            { title: 'High Water Table Expertise', description: 'Karachi\'s coastal proximity creates unique groundwater challenges. Our engineers design drainage and waterproofing systems specifically for these conditions.' },
            { title: 'Structural Integrity Preservation', description: 'Our methods protect the foundation while stopping water we never compromise structural safety for waterproofing convenience.' },
        ],
        highlights: [
            { value: '200+', label: 'Basements Waterproofed' },
            { value: '100%', label: 'Interior Treatment' },
            { value: '5yr', label: 'Performance Guarantee' },
            { value: '0', label: 'Excavation Required' },
        ],
        ctaHeading: 'Reclaim Your Basement Space',
        ctaSubtext: 'Schedule a free moisture assessment we\'ll identify the exact source of water intrusion and recommend the most cost-effective solution.',
    },

    // ═══════════════════════════════════════
    // 3. BATHROOM LEAKAGE TREATMENT
    // ═══════════════════════════════════════
    'bathroom-leakage-treatment': {
        sectionTitles: {
            overview: 'How Bathroom Leakage Treatment Works',
            problems: 'How to Tell If Your Bathroom Is Leaking',
            process: 'Our Non-Destructive Bathroom Repair Method',
            benefits: 'Why Non-Destructive Treatment Saves You Money',
            materials: 'Professional-Grade Bathroom Sealants & Coatings',
            gallery: 'Bathroom Leakage Repair Results',
            areas: 'Bathroom Repair Services Across Karachi',
            faq: 'Bathroom Leakage Common Concerns',
            related: 'Other Waterproofing Services You May Need',
        },
        sectionLabels: {
            overview: 'No-Break Technology',
            problems: 'Recognize the Symptoms',
            process: 'Quick & Clean Repair',
            gallery: 'Proven Results',
            faq: 'Apartment Owner FAQs',
            related: 'Additional Solutions',
        },
        sectionSubtitles: {
            problems: 'Bathroom leaks often go unnoticed until they cause ceiling damage in the room below. Catch them early with these signs.',
            process: 'In most cases, we fix bathroom leaks without removing a single tile saving you thousands in renovation costs.',
            gallery: 'See how we\'ve resolved bathroom and kitchen leakage problems for apartment and home owners across Karachi.',
            faq: 'Get straightforward answers about bathroom leakage treatment costs, duration, and effectiveness.',
            related: 'Protect your entire home from water damage with these complementary treatment services.',
        },
        whyChooseUs: [
            { title: 'No Tile Removal in 85% of Cases', description: 'Our injection grouting and topical sealant technology fixes most bathroom leaks without breaking tiles faster, cleaner, and far more affordable.' },
            { title: 'Same-Day Diagnosis, 1-3 Day Fix', description: 'We pinpoint leak sources quickly with moisture detection tools. Most bathroom treatments are completed within 1-3 working days.' },
            { title: '1,000+ Bathrooms Treated in Karachi', description: 'From penthouse washrooms in Clifton to apartment bathrooms in Gulshan we\'ve solved every type of bathroom leakage scenario.' },
            { title: 'Kitchen Leakage Included', description: 'The same professional techniques work for kitchen sinks, countertop joints, and floor drains one team handles it all.' },
        ],
        highlights: [
            { value: '1000+', label: 'Bathrooms Treated' },
            { value: '85%', label: 'Fixed Without Tile Removal' },
            { value: '1-3', label: 'Days to Complete' },
            { value: '70%', label: 'Cost Savings vs Renovation' },
        ],
        ctaHeading: 'Fix Bathroom Leaks Without the Mess',
        ctaSubtext: 'Book a leak inspection today we\'ll tell you if your bathroom can be fixed without removing tiles and provide an upfront quote.',
    },

    // ═══════════════════════════════════════
    // 4. WATER TANK WATERPROOFING
    // ═══════════════════════════════════════
    'water-tank-waterproofing': {
        sectionTitles: {
            overview: 'Protecting Your Water Supply With Tank Waterproofing',
            problems: 'Signs Your Water Tank Is Leaking or Contaminated',
            process: 'Our Food-Safe Tank Waterproofing Procedure',
            benefits: 'Why Professional Tank Waterproofing Matters',
            materials: 'FDA-Approved Tank Coatings & Linings',
            gallery: 'Water Tank Waterproofing Projects',
            areas: 'Tank Waterproofing Services Throughout Karachi',
            faq: 'Water Tank Waterproofing FAQ',
            related: 'Other Water Protection Services',
        },
        sectionLabels: {
            overview: 'Safe Water Storage',
            problems: 'Check Your Tank Health',
            process: 'Certified Treatment Process',
            gallery: 'Tank Projects',
            faq: 'Tank Owner Questions',
            related: 'Water Management Solutions',
        },
        sectionSubtitles: {
            problems: 'A leaking or contaminated water tank wastes thousands in water bills and poses serious health risks to your family.',
            process: 'Every step follows food-safety protocols to ensure your stored water remains clean, safe, and leak-free.',
            gallery: 'Real tank waterproofing work from underground reservoirs and overhead tanks to swimming pools.',
            faq: 'Get answers about tank coatings, safety certifications, treatment duration, and warranty coverage.',
            related: 'Complete your water infrastructure protection with these complementary services.',
        },
        whyChooseUs: [
            { title: 'Food-Grade, Non-Toxic Coatings Only', description: 'We exclusively use FDA-approved, potable water-safe coatings. No harmful chemicals leach into your drinking water guaranteed.' },
            { title: '150+ Tanks Waterproofed Across Karachi', description: 'Underground reservoirs, overhead tanks, swimming pools, and industrial water storage we\'ve handled every type and size.' },
            { title: 'Interior Treatment No Digging Required', description: 'Our negative-side approach treats tanks from inside, eliminating the need for costly external excavation around underground tanks.' },
            { title: 'Swimming Pool Specialists', description: 'We also waterproof swimming pools with chlorine-resistant, UV-stable coatings designed for long-term pool environments.' },
        ],
        highlights: [
            { value: '150+', label: 'Tanks Waterproofed' },
            { value: '20yr', label: 'Extended Tank Life' },
            { value: '100%', label: 'Food-Safe Materials' },
            { value: '5yr', label: 'Leak-Free Warranty' },
        ],
        ctaHeading: 'Protect Your Water Supply Today',
        ctaSubtext: 'Schedule a tank inspection we\'ll check for cracks, contamination risks, and coating failures, then provide a detailed treatment plan.',
    },

    // ═══════════════════════════════════════
    // 5. HEAT PROOFING
    // ═══════════════════════════════════════
    'heat-proofing': {
        sectionTitles: {
            overview: 'How Heat Proofing Reduces Indoor Temperature',
            problems: 'Signs Your Building Needs Heat Proofing',
            process: 'Our Solar-Reflective Coating Application Process',
            benefits: 'Measurable Benefits of Cool Roof Technology',
            materials: 'Advanced Heat-Reflective Coating Systems',
            gallery: 'Heat Proofing Projects Residential & Industrial',
            areas: 'Heat Proofing Coverage Across Karachi',
            faq: 'Heat Proofing & Cool Roof Questions',
            related: 'Complementary Roof Protection Services',
        },
        sectionLabels: {
            overview: 'Beat the Heat',
            problems: 'Is Your Building Overheating?',
            process: 'Application Methodology',
            gallery: 'Cool Roof Results',
            faq: 'Energy Savings FAQs',
            related: 'Dual Protection Options',
        },
        sectionSubtitles: {
            problems: 'If your top floor feels like an oven during summer, your building is absorbing and radiating excessive solar heat.',
            process: 'Our application follows a precise methodology that ensures maximum solar reflectance and coating longevity.',
            gallery: 'See the dramatic difference heat proofing makes on homes, factories, and commercial buildings throughout Karachi.',
            faq: 'Get practical answers about temperature reduction, energy savings, coating lifespan, and costs.',
            related: 'Combine heat proofing with these services for comprehensive roof protection against both heat and water.',
        },
        whyChooseUs: [
            { title: 'Guaranteed 8-12°C Temperature Reduction', description: 'Our solar-reflective coatings are proven to reduce top-floor indoor temperature by 8-12°C we measure results before and after.' },
            { title: 'Industrial & Factory Specialists', description: 'We\'ve heat-proofed factories, warehouses, and cold storage facilities across Karachi\'s industrial zones including SITE, Korangi, and Landhi.' },
            { title: '20-35% Electricity Bill Savings', description: 'Lower AC load means significantly reduced electricity costs. Most clients see ROI within 2-3 cooling seasons.' },
            { title: 'Dual Protection Available', description: 'We can apply heat proofing over existing waterproofing or install both systems together for complete roof protection at a bundled price.' },
        ],
        highlights: [
            { value: '12°C', label: 'Max Temp Reduction' },
            { value: '35%', label: 'Energy Cost Savings' },
            { value: '90%', label: 'Solar Reflectance' },
            { value: '5-8yr', label: 'Coating Lifespan' },
        ],
        ctaHeading: 'Cool Your Building Before Summer Hits',
        ctaSubtext: 'Get a free thermal assessment our team will measure your roof temperature and recommend the ideal cooling solution for your building.',
    },

    // ═══════════════════════════════════════
    // 6. CONSTRUCTION CHEMICALS
    // ═══════════════════════════════════════
    'construction-chemicals': {
        sectionTitles: {
            overview: 'Premium Construction Chemicals for Stronger Buildings',
            problems: 'Common Construction Failures From Poor Chemical Selection',
            process: 'How We Help You Choose the Right Products',
            benefits: 'Advantages of Using Professional-Grade Chemicals',
            materials: 'Our Complete Construction Chemical Range',
            gallery: 'Construction Chemical Products & Applications',
            areas: 'Chemical Supply & Delivery Across Karachi',
            faq: 'Construction Chemical Questions',
            related: 'Related Building Material Services',
        },
        sectionLabels: {
            overview: 'Building Science',
            problems: 'Avoid Costly Failures',
            process: 'Expert Product Guidance',
            gallery: 'Product Range',
            faq: 'Contractor FAQs',
            related: 'Complete Building Solutions',
        },
        sectionSubtitles: {
            problems: 'Using incorrect or substandard chemicals leads to concrete failure, steel corrosion, and premature structural deterioration.',
            process: 'Our technical team ensures you get exactly the right product, dosage, and application method for your specific project.',
            gallery: 'Browse our range of admixtures, sealants, bonding agents, and specialty repair chemicals.',
            faq: 'Practical answers about chemical selection, bulk pricing, delivery schedules, and technical support.',
            related: 'Complete your construction material needs with our complementary product and service offerings.',
        },
        whyChooseUs: [
            { title: 'Technical Expertise On Every Order', description: 'Our team includes certified technicians who advise on product selection, dosage calculation, and proper application not just sales.' },
            { title: '50+ Products From Trusted Manufacturers', description: 'We stock a comprehensive range of admixtures, sealants, bonding agents, and repair mortars from nationally recognized brands.' },
            { title: 'Same-Day Delivery Across Karachi', description: 'Order before noon and receive delivery the same day. For ongoing projects, we set up scheduled deliveries to match your construction timeline.' },
            { title: 'Competitive Contractor Pricing', description: 'Bulk pricing for contractors and developers. The more you order, the better the rates with no compromise on material quality.' },
        ],
        highlights: [
            { value: '50+', label: 'Products Available' },
            { value: '24hr', label: 'Delivery Turnaround' },
            { value: '100%', label: 'Certified Materials' },
            { value: '9+', label: 'Years Supplying Karachi' },
        ],
        ctaHeading: 'Order Construction Chemicals With Expert Support',
        ctaSubtext: 'Tell us your project requirements we\'ll recommend the right products, provide dosage guidance, and deliver to your site.',
    },

    // ═══════════════════════════════════════
    // 7. CEMENTED BLOCKS
    // ═══════════════════════════════════════
    'cemented-blocks': {
        sectionTitles: {
            overview: 'Quality Cemented Blocks The Foundation of Strong Walls',
            problems: 'Risks of Using Low-Quality Concrete Blocks',
            process: 'Our Quality-Controlled Block Production Process',
            benefits: 'Why Our Blocks Outperform Local Alternatives',
            materials: 'Raw Materials & Manufacturing Standards',
            gallery: 'Our Block Products & Delivery',
            areas: 'Block Supply Delivery Zones in Karachi',
            faq: 'Cemented Block Ordering Questions',
            related: 'Other Construction Material Services',
        },
        sectionLabels: {
            overview: 'Structural Building Blocks',
            problems: 'Don\'t Risk Weak Walls',
            process: 'Precision Manufacturing',
            gallery: 'Block Range',
            faq: 'Builder FAQs',
            related: 'Complete Material Supply',
        },
        sectionSubtitles: {
            problems: 'Cheap blocks may save money upfront but lead to cracked walls, uneven surfaces, and structural safety concerns.',
            process: 'Every block is manufactured under controlled conditions with optimum cement-aggregate ratios and proper curing.',
            gallery: 'See our solid and hollow block varieties, manufacturing process, and site delivery operations.',
            faq: 'Get answers about block sizes, load-bearing capacity, minimum orders, and delivery timelines.',
            related: 'Source all your construction materials from one trusted supplier for consistency and convenience.',
        },
        whyChooseUs: [
            { title: 'Every Batch Strength-Tested', description: 'We test compressive strength on every production batch. You receive blocks you can trust for load-bearing and partition walls alike.' },
            { title: 'Dimensional Accuracy Guaranteed', description: 'Precision steel molds and vibration compaction ensure consistent sizing reducing plaster wastage and construction time.' },
            { title: 'On-Time Delivery, Every Time', description: 'Standard orders delivered within 24-48 hours in Karachi. For large projects, we match deliveries to your construction schedule.' },
            { title: 'Solid & Hollow Options Available', description: 'Standard and custom sizes in both solid (load-bearing) and hollow (partition/insulation) varieties to match your exact requirements.' },
        ],
        highlights: [
            { value: '10K+', label: 'Daily Block Capacity' },
            { value: '100%', label: 'Strength Tested' },
            { value: '24-48h', label: 'Delivery Time' },
            { value: '500+', label: 'Projects Supplied' },
        ],
        ctaHeading: 'Order Quality-Tested Blocks for Your Project',
        ctaSubtext: 'Request a sample and quotation we\'ll deliver test blocks for your inspection along with strength certificates.',
    },

    // ═══════════════════════════════════════
    // 8. READY-MIX CONCRETE
    // ═══════════════════════════════════════
    'ready-mix-concrete': {
        sectionTitles: {
            overview: 'Why Ready-Mix Concrete Outperforms Site-Mixed Batches',
            problems: 'Hidden Costs of On-Site Concrete Mixing',
            process: 'From Mix Design to Transit Mixer Delivery',
            benefits: 'Advantages of Precision-Batched Ready-Mix',
            materials: 'Concrete Ingredients & Quality Controls',
            gallery: 'Ready-Mix Concrete Deliveries & Pours',
            areas: 'Concrete Delivery Coverage in Karachi',
            faq: 'Ready-Mix Concrete Ordering Guide',
            related: 'Complementary Construction Services',
        },
        sectionLabels: {
            overview: 'Precision Concrete',
            problems: 'Stop Wasting Resources',
            process: 'Quality-Controlled Delivery',
            gallery: 'On-Site Pours',
            faq: 'Contractor Ordering Guide',
            related: 'Build With Confidence',
        },
        sectionSubtitles: {
            problems: 'Site-mixed concrete introduces variability that can compromise structural strength and waste valuable resources.',
            process: 'Every batch is laboratory-designed, precision-batched, and delivered fresh via transit mixer to your pour site.',
            gallery: 'See our transit mixer fleet, on-site concrete pours, and quality testing in action across Karachi.',
            faq: 'Practical information about concrete grades, minimum orders, pricing, and delivery coordination.',
            related: 'Pair ready-mix concrete with these services for a complete construction material solution.',
        },
        whyChooseUs: [
            { title: 'All Grades From C15 to C50+', description: 'Whether you need standard residential foundation mix or high-strength commercial columns we batch all grades to specification.' },
            { title: 'Mix Design Certificates Included', description: 'Every delivery comes with documented mix design and can be verified with on-site slump testing and cube strength results.' },
            { title: 'On-Time Transit Mixer Delivery', description: 'We coordinate delivery timing with your pour schedule. Early morning, weekend, and large-volume pours are all accommodated.' },
            { title: 'Admixture-Enhanced for Performance', description: 'Our concrete includes professionally dosed admixtures for workability, strength gain, and durability not plain basic mixes.' },
        ],
        highlights: [
            { value: '7000+', label: 'Max PSI Available' },
            { value: '100%', label: 'Batch Certified' },
            { value: '24hr', label: 'Delivery Available' },
            { value: '50km', label: 'Delivery Radius' },
        ],
        ctaHeading: 'Book Your Concrete Pour With Confidence',
        ctaSubtext: 'Share your project specs we\'ll prepare a custom mix design and schedule transit mixer delivery to match your timeline.',
    },

    // ═══════════════════════════════════════
    // 9. DE-WATERING SERVICES
    // ═══════════════════════════════════════
    'dewatering': {
        sectionTitles: {
            overview: 'Professional De-Watering for Construction & Emergencies',
            problems: 'When You Need Professional De-Watering Services',
            process: 'Our Rapid Water Removal Methodology',
            benefits: 'Why Professional De-Watering Makes a Difference',
            materials: 'Industrial Pumping Equipment We Deploy',
            gallery: 'De-Watering Operations in Action',
            areas: 'Emergency De-Watering Coverage All Karachi',
            faq: 'De-Watering Services Key Questions',
            related: 'Follow-Up Waterproofing Services',
        },
        sectionLabels: {
            overview: 'Water Control Experts',
            problems: 'Time-Critical Situations',
            process: 'Rapid Response Protocol',
            gallery: 'Field Operations',
            faq: 'Emergency Response FAQs',
            related: 'Permanent Solutions',
        },
        sectionSubtitles: {
            problems: 'Standing water halts construction, damages foundations, and creates safety hazards. These situations demand immediate professional response.',
            process: 'From emergency calls to long-term construction pumping, our protocol ensures water is removed safely and efficiently.',
            gallery: 'See our pumping operations at construction sites, flooded basements, and monsoon emergency responses across Karachi.',
            faq: 'Get answers about emergency response times, pump capacities, pricing, and long-term site dewatering contracts.',
            related: 'After removing the water, protect your property permanently with these professional waterproofing services.',
        },
        whyChooseUs: [
            { title: '24/7 Emergency Response Team', description: 'Flooding doesn\'t follow business hours. Our emergency crew mobilizes within 2-4 hours of your call day, night, or during monsoon.' },
            { title: 'Industrial-Grade Pumping Power', description: 'From compact 2-inch basement pumps to high-capacity industrial units handling hundreds of gallons per minute we match equipment to scale.' },
            { title: 'Construction-Site Specialists', description: 'We provide continuous, staffed dewatering for excavation projects, ensuring your foundation work stays dry and on schedule.' },
            { title: 'Combined De-Watering + Waterproofing', description: 'We remove the water first, then apply permanent waterproofing solving the problem completely in one engagement.' },
        ],
        highlights: [
            { value: '2-4hr', label: 'Emergency Response' },
            { value: '24/7', label: 'Always Available' },
            { value: '100+', label: 'Sites Dewatered' },
            { value: '∞', label: 'Continuous Pumping' },
        ],
        ctaHeading: 'Need Water Removed? Call Now.',
        ctaSubtext: 'For emergencies, call us immediately at 0321-2420460. For planned construction dewatering, schedule a site assessment.',
    },
};

/**
 * Get SEO content for a service by slug.
 * Falls back to sensible defaults if not found.
 */
export function getServiceSEOContent(slug: string): ServiceSEOContent {
    return serviceSEOContent[slug] || {
        sectionTitles: {
            overview: 'About This Service',
            problems: 'Common Problems We Solve',
            process: 'Our Step-by-Step Process',
            benefits: 'Key Benefits',
            materials: 'Materials & Solutions',
            gallery: 'Project Gallery',
            areas: 'Areas We Serve',
            faq: 'Frequently Asked Questions',
            related: 'Related Services',
        },
        sectionLabels: {
            overview: 'Professional Service',
            problems: 'Signs You Need Help',
            process: 'How We Work',
            gallery: 'Our Work',
            faq: 'Common Questions',
            related: 'Explore More',
        },
        sectionSubtitles: {
            problems: 'Recognizing these warning signs early can save you from expensive repairs down the line.',
            process: 'Every project follows a proven methodology to ensure quality, durability, and your complete satisfaction.',
            gallery: 'See the quality and attention to detail we bring to every project.',
            faq: 'Get clear, honest answers about our services.',
            related: 'Discover our other professional solutions that complement this service.',
        },
        whyChooseUs: [],
        highlights: [],
        ctaHeading: 'Ready to Get Started?',
        ctaSubtext: 'Contact us today for a free consultation and no-obligation quotation.',
    };
}
