
import React from 'react';
import Link from 'next/link';

export default function ContactCTA() {
    return (
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl mt-16">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
                Still Seeing Leakage or Cracks?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
                Don&apos;t let water damage weaken your home. Get a professional inspection from Ahsaan Traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                >
                    Get Free Inspection Quote
                </Link>
                <Link
                    href="https://wa.me/923212420460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors shadow-md text-sm"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                    WhatsApp Us
                </Link>
            </div>
            <p className="mt-4 text-xs text-blue-200/70">
                Serving DHA, Clifton, Gulshan, North Nazimabad &amp; all Karachi areas.
            </p>
        </section>
    );
}
