import Image from 'next/image';

export default function CompanyStory() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/Working.jpg"
                                alt="Ahsan Traders professional team"
                                width={600}
                                height={450}
                                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[420px]"
                            />
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:-right-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 sm:p-5 rounded-xl shadow-xl">
                            <p className="text-3xl sm:text-4xl font-bold">8+</p>
                            <p className="text-xs sm:text-sm">Years of Excellence</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-600 mb-3">
                            Company Profile
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-5">
                            Ahsan Traders – Leading Construction Solutions
                        </h2>

                        <p className="text-base sm:text-lg text-slate-600 mb-4 leading-relaxed">
                            Ahsan Traders is a leading and trusted service provider in the fields of waterproofing, heat proofing, construction chemicals, cemented blocks, strength-gainer admixtures, and ready-mix concrete supplies.
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                            Since 2017, we have been delivering high-quality, durable, and professional solutions for residential, commercial, and industrial clients across Karachi and Sindh.
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                            With extensive experience and advanced construction technologies, we specialize in resolving roof leakage, basement seepage, waterproofing challenges, and structural durability issues. Our premium-grade construction chemicals and ready-mix delivery ensure long-lasting performance and enhanced concrete strength.
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed font-medium">
                            Ahsan Traders is committed to quality workmanship, timely execution, and customer satisfaction, making us a preferred partner in the construction industry.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-50 rounded-xl">
                            <div className="text-center">
                                <p className="text-xl sm:text-2xl font-bold text-blue-600">500+</p>
                                <p className="text-xs text-slate-500">Projects</p>
                            </div>
                            <div className="text-center border-x border-slate-200">
                                <p className="text-xl sm:text-2xl font-bold text-blue-600">50+</p>
                                <p className="text-xs text-slate-500">Clients</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl sm:text-2xl font-bold text-blue-600">100%</p>
                                <p className="text-xs text-slate-500">Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
