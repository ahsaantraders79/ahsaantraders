import React from 'react';
import ContactForm from '../contact/ContactForm';
import { PhoneIcon, EmailIcon, WhatsAppIcon, LocationIcon } from '../ui/Icons';

/**
 * CTA Section - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - Form is HTML-only (no JS validation on client)
 * 2. Static content rendering
 * 3. Form uses native validation
 */

export default function CTASection() {
    return (
        <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Content Side */}
                    <div className="text-white">
                        <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/10 text-amber-400 mb-3 sm:mb-4">
                            Get Started Today
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight">
                            Ready to Solve Your
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"> Waterproofing Problems?</span>
                        </h2>

                        <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                            Contact us for a free consultation and quote. Our waterproofing experts are ready to help with all your construction needs.
                        </p>

                        {/* Contact Options */}
                        <div className="space-y-4 mb-6 sm:mb-8">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <PhoneIcon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 mb-1">Call Us</p>
                                    <a href="tel:+923212420460" className="block text-sm sm:text-base font-medium hover:text-blue-400 transition-colors">
                                        0321-2420460
                                    </a>
                                    <a href="tel:+923008235699" className="block text-sm sm:text-base font-medium hover:text-blue-400 transition-colors mt-0.5">
                                        0300-8235699
                                    </a>
                                </div>
                            </div>

                            <a href="mailto:info@ahsaantraders.com" className="flex items-center gap-3 sm:gap-4 group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/10 group-hover:bg-blue-500 flex items-center justify-center transition-colors">
                                    <EmailIcon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Email Us</p>
                                    <p className="text-sm sm:text-base font-medium break-all">info@ahsaantraders.com</p>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/923212420460"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 sm:gap-4 group"
                            >
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-green-500/20 group-hover:bg-green-500 flex items-center justify-center transition-colors">
                                    <WhatsAppIcon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">WhatsApp</p>
                                    <p className="text-sm sm:text-base font-medium">Chat instantly</p>
                                </div>
                            </a>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <LocationIcon size={16} />
                            <span>Serving Karachi & all of Sindh</span>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1.5">
                            Get a Free Quote
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base mb-5 sm:mb-6">
                            Fill out the form and we&apos;ll respond within 24 hours.
                        </p>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
