import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    PhoneIcon,
    EmailIcon,
    LocationIcon,
    WhatsAppIcon,
    FacebookIcon,
    InstagramIcon,
} from '../ui/Icons';

/**
 * Footer Component - Server Component (No 'use client')
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - No JS sent to client
 * 2. Static data - No runtime computation
 * 3. Inline icons for no additional imports
 */

const services = [
    { name: 'Roof Waterproofing', href: '/services#waterproofing' },
    { name: 'Basement Waterproofing', href: '/services#waterproofing' },
    { name: 'Heat Proofing', href: '/services#heat-proofing' },
    { name: 'Water Tank Treatment', href: '/services#waterproofing' },
    { name: 'Construction Chemicals', href: '/services#chemicals' },
    { name: 'Ready-Mix Concrete', href: '/services#ready-mix' },
] as const;

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
] as const;

// Get current year at build time (SSG) or request time (SSR)
const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <>
            <footer className="bg-[#0a1628] text-white">
                {/* Main Footer Content */}
                <div className="container mx-auto">
                    <div className="pt-[60px] pb-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

                        {/* Column 1: Company Info */}
                        <div>
                            <Link href="/" className="inline-block mb-5">
                                <Image
                                    src="/logo..webp"
                                    alt="Ahsaan Traders"
                                    width={180}
                                    height={80}
                                    className="h-12 w-auto object-contain"
                                />
                            </Link>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Karachi&apos;s trusted provider of waterproofing, heat proofing, and construction solutions. Quality materials, expert workmanship, guaranteed results.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://wa.me/923212420460"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="WhatsApp"
                                >
                                    <WhatsAppIcon size={18} />
                                </a>
                                <a
                                    href="https://www.facebook.com/AhsaanTradersBusiness"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon size={18} />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <InstagramIcon size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Our Services */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-5 relative">
                                Our Services
                                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></span>
                            </h4>
                            <ul className="space-y-3 mt-4">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            href={service.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></span>
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-5 relative">
                                Quick Links
                                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></span>
                            </h4>
                            <ul className="space-y-3 mt-4">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact Us */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-5 relative">
                                Contact Us
                                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></span>
                            </h4>

                            <div className="space-y-4 mt-4">
                                {/* Phone */}
                                {/* Phone */}
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <PhoneIcon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Call Us</p>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href="tel:+923212420460"
                                                className="px-3 py-1.5 rounded bg-white/5 hover:bg-blue-600 transition-colors text-sm text-white flex items-center gap-2 w-max"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                0321-2420460
                                            </a>
                                            <a
                                                href="tel:+923008235699"
                                                className="px-3 py-1.5 rounded bg-white/5 hover:bg-blue-600 transition-colors text-sm text-white flex items-center gap-2 w-max"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                                0300-8235699
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <a href="mailto:info@ahsaantraders.com" className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-blue-500 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <EmailIcon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">Email</p>
                                        <p className="text-sm text-white group-hover:text-blue-400 transition-colors break-all">info@ahsaantraders.com</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <LocationIcon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">Location</p>
                                        <p className="text-sm text-white">Karachi, Sindh, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <p className="text-gray-500 text-xs sm:text-sm">
                                © {currentYear} <span className="text-white">Ahsaan Traders</span>. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <span>•</span>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
