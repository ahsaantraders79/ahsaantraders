export default function HowItWorks() {
    const steps = [
        {
            step: '01',
            title: 'Contact Us',
            description: 'Call, WhatsApp, or fill the form. Tell us about your problem leakage, heat, cracks, or new construction needs.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.584l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            step: '02',
            title: 'Free Site Inspection',
            description: 'Our expert visits your location within 24 hours. We identify the exact cause of the problem and assess the area.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            step: '03',
            title: 'Detailed Quote',
            description: 'You receive a written quotation with the recommended treatment method, estimated cost, timeline, and warranty details.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            step: '04',
            title: 'Professional Execution',
            description: 'Our certified team completes the work with premium materials. We conduct a final inspection and provide a written warranty.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-amber-50 text-amber-600 mb-3">
                        Simple Process
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        How It Works 4 Simple Steps
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        From your first call to project completion, here&apos;s exactly what to expect when you work with Ahsaan Traders.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <div key={step.step} className="relative group">
                            {/* Connector Line (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-blue-200 to-blue-100 z-0" />
                            )}

                            <div className="relative z-10 text-center">
                                {/* Step Number + Icon */}
                                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all duration-300">
                                    {step.icon}
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 rounded-full text-xs font-bold text-slate-900 flex items-center justify-center shadow">
                                        {step.step}
                                    </span>
                                </div>

                                <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
