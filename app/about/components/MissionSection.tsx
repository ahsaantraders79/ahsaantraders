export default function MissionSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/10 text-amber-400 mb-3">
                        Mission Statement
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                        Our Mission
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                        &quot;Our mission is to deliver high-quality construction solutions by providing advanced concrete admixtures, reliable waterproofing, and effective heat-proofing services. We are committed to ensuring structural durability, customer satisfaction, and long-term value through innovation, skilled workmanship, and premium-grade materials.&quot;
                    </p>

                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
                </div>
            </div>
        </section>
    );
}
