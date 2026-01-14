import React from 'react';
import Button from '../ui/Button';
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
                            <a href="tel:+923212420460" className="flex items-center gap-3 sm:gap-4 group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/10 group-hover:bg-blue-500 flex items-center justify-center transition-colors">
                                    <PhoneIcon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Call Us</p>
                                    <p className="text-sm sm:text-base font-medium">0321-2420460 / 0300-8235699</p>
                                </div>
                            </a>

                            <a href="mailto:ahsaantraders79@gmail.com" className="flex items-center gap-3 sm:gap-4 group">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/10 group-hover:bg-blue-500 flex items-center justify-center transition-colors">
                                    <EmailIcon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Email Us</p>
                                    <p className="text-sm sm:text-base font-medium break-all">ahsaantraders79@gmail.com</p>
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

                        <form className="space-y-4" action="/api/contact" method="POST">
                            <div>
                                <label htmlFor="cta-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="cta-name"
                                    name="name"
                                    placeholder="Your name"
                                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                                    required
                                    autoComplete="name"
                                />
                            </div>

                            <div>
                                <label htmlFor="cta-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="cta-phone"
                                    name="phone"
                                    placeholder="0300-1234567"
                                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                                    required
                                    autoComplete="tel"
                                />
                            </div>

                            <div>
                                <label htmlFor="cta-service" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Service Required *
                                </label>
                                <select
                                    id="cta-service"
                                    name="service"
                                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="roof-waterproofing">Roof Waterproofing</option>
                                    <option value="basement-waterproofing">Basement Waterproofing</option>
                                    <option value="heat-proofing">Heat Proofing</option>
                                    <option value="tank-waterproofing">Water Tank Treatment</option>
                                    <option value="chemicals">Construction Chemicals</option>
                                    <option value="ready-mix">Ready-Mix Concrete</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="cta-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="cta-message"
                                    name="message"
                                    rows={3}
                                    placeholder="Brief description of your requirements..."
                                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm sm:text-base"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" size="lg" fullWidth>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
