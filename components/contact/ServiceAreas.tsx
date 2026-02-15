

const areas = [
    {
        name: 'DHA',
        detail: 'Phase 1 to Phase 8, Bukhari Commercial, Khayaban-e-Shahbaz',
    },
    {
        name: 'Clifton',
        detail: 'Block 1 to Block 9, Sea View, Boat Basin',
    },
    {
        name: 'Gulshan-e-Iqbal',
        detail: 'Block 1 to Block 16, University Road, Rashid Minhas Road',
    },
    {
        name: 'North Nazimabad',
        detail: 'Block A to Block N, Hyderi, Power House Chowrangi',
    },
    {
        name: 'PECHS',
        detail: 'Block 2, Block 6, Tariq Road, Shahrah-e-Quaideen',
    },
    {
        name: 'Gulistan-e-Jauhar',
        detail: 'Block 1 to Block 20, Perfume Chowk',
    },
    {
        name: 'Scheme 33',
        detail: 'Sector 14-A to 46-A, Safoora Chowrangi',
    },
    {
        name: 'Malir & Korangi',
        detail: 'Malir Cantt, Model Colony, Korangi Industrial Area',
    },
];

export default function ServiceAreas() {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-green-50 text-green-600 mb-3">
                        Coverage Area
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        We Serve All of Karachi
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Our team covers every major area in Karachi &amp; Sindh. Free site inspections available across all locations listed below.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {areas.map((area) => (
                        <div
                            key={area.name}
                            className="group p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                        >
                            <div className="flex items-center gap-2.5 mb-2">
                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="font-bold text-slate-900 text-base">{area.name}</h3>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed pl-[30px]">{area.detail}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        Don&apos;t see your area?{' '}
                        <a href="tel:+923212420460" className="text-blue-600 font-semibold hover:underline">Call us</a>
                        {' '}we likely cover it too.
                    </p>
                </div>
            </div>
        </section>
    );
}
