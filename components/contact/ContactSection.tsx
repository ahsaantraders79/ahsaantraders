'use client';

import ContactForm from './ContactForm';
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
                            <div className="group p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-blue-500 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors mb-3">
                                    <PhoneIcon size={18} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Phone</h3>
                                <div className="flex flex-col gap-2">
                                    <a href="tel:+923212420460" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-xs sm:text-sm font-semibold bg-white px-3 py-2 rounded-lg border border-slate-100 hover:border-blue-200 hover:shadow-sm">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        0321-2420460
                                    </a>
                                    <a href="tel:+923008235699" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-xs sm:text-sm font-semibold bg-white px-3 py-2 rounded-lg border border-slate-100 hover:border-blue-200 hover:shadow-sm">
                                        <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors"></span>
                                        0300-8235699
                                    </a>
                                </div>
                            </div>

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

                            <a href="mailto:info@ahsaantraders.com" className="group p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-amber-50 transition-all">
                                <div className="w-10 h-10 rounded-lg bg-amber-100 group-hover:bg-amber-500 flex items-center justify-center text-amber-600 group-hover:text-white transition-colors mb-3">
                                    <EmailIcon size={18} />
                                </div>
                                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Email</h3>
                                <p className="text-slate-600 text-xs sm:text-sm break-all">info@ahsaantraders.com</p>
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

                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
