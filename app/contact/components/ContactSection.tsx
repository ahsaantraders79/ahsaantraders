'use client';

import Button from '@/components/ui/Button';
import { PhoneIcon, EmailIcon, LocationIcon, WhatsAppIcon, ClockIcon } from '@/components/ui/Icons';

export default function ContactSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* Contact Info */}
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-600 mb-3">
                            Get In Touch
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-5">
                            Let&apos;s Discuss Your Project
                        </h2>

                        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                            Ready to solve your waterproofing problems? Contact us today for a free consultation. Our experts are available to discuss your requirements and provide the best solutions.
                        </p>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                            <a href="tel:+923212420460" className="group p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-blue-50 transition-all">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-blue-500 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors mb-3">
                                    <PhoneIcon size={18} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Phone</h3>
                                <p className="text-slate-600 text-xs sm:text-sm">0321-2420460</p>
                                <p className="text-slate-600 text-xs sm:text-sm">0300-8235699</p>
                            </a>

                            <a
                                href="https://wa.me/923212420460"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-green-50 transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg bg-green-100 group-hover:bg-green-500 flex items-center justify-center text-green-600 group-hover:text-white transition-colors mb-3">
                                    <WhatsAppIcon size={18} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">WhatsApp</h3>
                                <p className="text-slate-600 text-xs sm:text-sm">Chat instantly</p>
                                <p className="text-slate-600 text-xs sm:text-sm">Quick response</p>
                            </a>

                            <a href="mailto:ahsaantraders79@gmail.com" className="group p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-amber-50 transition-all">
                                <div className="w-10 h-10 rounded-lg bg-amber-100 group-hover:bg-amber-500 flex items-center justify-center text-amber-600 group-hover:text-white transition-colors mb-3">
                                    <EmailIcon size={18} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Email</h3>
                                <p className="text-slate-600 text-xs sm:text-sm break-all">ahsaantraders79@gmail.com</p>
                            </a>

                            <div className="p-4 sm:p-5 rounded-xl bg-slate-50">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
                                    <LocationIcon size={18} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Location</h3>
                                <p className="text-slate-600 text-xs sm:text-sm">Karachi, Sindh</p>
                                <p className="text-slate-600 text-xs sm:text-sm">Pakistan</p>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
                            <div className="flex items-center gap-2.5 mb-3">
                                <ClockIcon size={20} />
                                <h3 className="font-bold text-base">Business Hours</h3>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-blue-100">Monday - Saturday</span>
                                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-blue-100">Sunday</span>
                                    <span className="font-medium">By Appointment</span>
                                </div>
                                <div className="flex justify-between pt-2 border-t border-white/20">
                                    <span className="text-blue-100">Emergency</span>
                                    <span className="font-medium text-amber-400">24/7 Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl shadow-slate-900/5 border border-slate-100">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1.5">
                            Send Us a Message
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base mb-5 sm:mb-6">
                            Fill out the form and we&apos;ll respond within 24 hours.
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="John"
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Doe"
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="0300-1234567"
                                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Service Required *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="roof-waterproofing">Roof Waterproofing</option>
                                    <option value="basement-waterproofing">Basement Waterproofing</option>
                                    <option value="tank-waterproofing">Water Tank Waterproofing</option>
                                    <option value="heat-proofing">Heat Proofing</option>
                                    <option value="chemicals">Construction Chemicals</option>
                                    <option value="ready-mix">Ready-Mix Concrete</option>
                                    <option value="blocks">Cemented Blocks</option>
                                    <option value="dewatering">De-Watering</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" size="lg" fullWidth>
                                Send Message
                            </Button>

                            <p className="text-center text-xs sm:text-sm text-slate-500">
                                Or call us at{' '}
                                <a href="tel:+923212420460" className="text-blue-600 font-medium hover:underline">
                                    0321-2420460
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
