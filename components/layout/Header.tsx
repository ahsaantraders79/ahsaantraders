'use client';

import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import { MenuIcon, CloseIcon, PhoneIcon } from '../ui/Icons';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import AnnouncementBar from './AnnouncementBar';
import { serviceNavItems } from '@/lib/services-data';
import { ServiceIcon } from '@/components/ui/ServiceIcons';

/**
 * Header Premium Mega-Menu with Professional SVG Icons
 *
 * FEATURES:
 * - Glass effect header on scroll
 * - Rich mega-menu dropdown (2-column grid, SVG icons, descriptions)
 * - Mobile: categorized accordion with service cards
 * - Smooth animations, active state highlighting
 * - No emojis professional SVG icons throughout
 */

const navLinks = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Projects', href: '/projects', hasDropdown: false },
    { name: 'Gallery', href: '/gallery', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
] as const;

// ─── Standard NavLink ────────────────────────────
const NavLink = memo(function NavLink({
    name,
    href,
    isActive
}: {
    name: string;
    href: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className={`group relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors
                ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}
            `}
        >
            <span className="relative z-10">{name}</span>
            <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 origin-left ease-out
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
            />
        </Link>
    );
});

// ─── Premium Services Mega-Menu (Desktop) ─────────
const ServicesMegaMenu = memo(function ServicesMegaMenu({
    isActive,
    isDropdownOpen,
    onMouseEnter,
    onMouseLeave,
    pathname,
}: {
    isActive: boolean;
    isDropdownOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    pathname: string;
}) {
    const waterproofingServices = serviceNavItems.filter(s =>
        ['roof-waterproofing', 'basement-waterproofing', 'bathroom-leakage-treatment', 'water-tank-waterproofing', 'heat-proofing'].includes(s.slug)
    );
    const constructionServices = serviceNavItems.filter(s =>
        ['construction-chemicals', 'cemented-blocks', 'ready-mix-concrete', 'dewatering'].includes(s.slug)
    );

    return (
        <div
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link
                href="/services"
                className={`group relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5
                    ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}
                `}
            >
                <span className="relative z-10">Services</span>
                <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 origin-left ease-out
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                />
            </Link>

            {/* ── Mega Menu Panel ── */}
            <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 transition-all duration-300 ease-out
                    ${isDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-3 pointer-events-none'
                    }
                `}
            >
                {/* Connector triangle */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-sm border-l border-t border-slate-100 z-10" />

                <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden w-[600px]">
                    {/* Top accent bar */}
                    <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-x-6">
                            {/* Column 1: Waterproofing */}
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
                                    Waterproofing & Protection
                                </p>
                                <div className="space-y-0.5">
                                    {waterproofingServices.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={item.href}
                                            className={`group/item flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                                                ${pathname === item.href
                                                    ? 'bg-blue-50 ring-1 ring-blue-100'
                                                    : 'hover:bg-slate-50'
                                                }
                                            `}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200
                                                ${pathname === item.href
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-slate-100 text-slate-500 group-hover/item:bg-blue-50 group-hover/item:text-blue-600'
                                                }
                                            `}>
                                                <ServiceIcon slug={item.slug} size={18} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className={`text-sm font-semibold leading-tight transition-colors
                                                    ${pathname === item.href
                                                        ? 'text-blue-700'
                                                        : 'text-slate-800 group-hover/item:text-blue-700'
                                                    }
                                                `}>
                                                    {item.name}
                                                </p>
                                                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                                    {item.tagline}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2: Construction */}
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
                                    Construction & Supply
                                </p>
                                <div className="space-y-0.5">
                                    {constructionServices.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={item.href}
                                            className={`group/item flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                                                ${pathname === item.href
                                                    ? 'bg-blue-50 ring-1 ring-blue-100'
                                                    : 'hover:bg-slate-50'
                                                }
                                            `}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200
                                                ${pathname === item.href
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-slate-100 text-slate-500 group-hover/item:bg-blue-50 group-hover/item:text-blue-600'
                                                }
                                            `}>
                                                <ServiceIcon slug={item.slug} size={18} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className={`text-sm font-semibold leading-tight transition-colors
                                                    ${pathname === item.href
                                                        ? 'text-blue-700'
                                                        : 'text-slate-800 group-hover/item:text-blue-700'
                                                    }
                                                `}>
                                                    {item.name}
                                                </p>
                                                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                                    {item.tagline}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* CTA inside dropdown */}
                                <div className="mt-4 ml-2">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Get Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer bar */}
                    <div className="px-6 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group/all"
                        >
                            View All Services
                            <svg className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <span className="text-[11px] text-slate-400 font-medium">
                            Serving Karachi Since 2017
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});

// ─── Mobile NavLink ──────────────────────────────
const MobileNavLink = memo(function MobileNavLink({
    name,
    href,
    onClick,
    isActive
}: {
    name: string;
    href: string;
    onClick: () => void;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block py-3.5 px-4 text-base font-bold transition-all border-b border-slate-100 last:border-0
                ${isActive
                    ? 'text-blue-700 bg-blue-50/50 border-l-4 border-l-blue-600 pl-3'
                    : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50 border-l-4 border-l-transparent'}
            `}
        >
            {name}
        </Link>
    );
});

// ─── Mobile Services Accordion ───────────────────
const MobileServicesAccordion = memo(function MobileServicesAccordion({
    onClose,
    pathname,
}: {
    onClose: () => void;
    pathname: string;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isServicesActive = pathname.startsWith('/services');

    return (
        <div className="border-b border-slate-100">
            <div className="flex items-center">
                <Link
                    href="/services"
                    onClick={onClose}
                    className={`flex-1 py-3.5 px-4 text-base font-bold transition-all border-l-4
                        ${isServicesActive
                            ? 'text-blue-700 bg-blue-50/50 border-l-blue-600 pl-3'
                            : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50 border-l-transparent'}
                    `}
                >
                    Services
                </Link>
                <button
                    onClick={() => setIsExpanded(prev => !prev)}
                    className="px-5 py-3.5 text-slate-500 hover:text-blue-600 transition-colors"
                    aria-label="Expand services menu"
                >
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Expanded service list */}
            <div
                className={`overflow-hidden transition-all duration-400 ease-in-out
                    ${isExpanded ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="px-4 py-3 bg-slate-50/70">
                    {/* Category: Waterproofing */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
                        Waterproofing & Protection
                    </p>
                    <div className="grid grid-cols-1 gap-1 mb-4">
                        {serviceNavItems.filter(s =>
                            ['roof-waterproofing', 'basement-waterproofing', 'bathroom-leakage-treatment', 'water-tank-waterproofing', 'heat-proofing'].includes(s.slug)
                        ).map(item => (
                            <Link
                                key={item.slug}
                                href={item.href}
                                onClick={onClose}
                                className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200
                                    ${pathname === item.href
                                        ? 'bg-blue-50 ring-1 ring-blue-200 text-blue-700'
                                        : 'text-slate-700 hover:bg-white active:bg-blue-50'
                                    }
                                `}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                                    ${pathname === item.href
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-white text-slate-500 shadow-sm'
                                    }
                                `}>
                                    <ServiceIcon slug={item.slug} size={16} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold leading-tight">{item.name}</p>
                                    <p className="text-[11px] text-slate-400 mt-0.5 truncate">{item.tagline}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Category: Construction */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
                        Construction & Supply
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                        {serviceNavItems.filter(s =>
                            ['construction-chemicals', 'cemented-blocks', 'ready-mix-concrete', 'dewatering'].includes(s.slug)
                        ).map(item => (
                            <Link
                                key={item.slug}
                                href={item.href}
                                onClick={onClose}
                                className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200
                                    ${pathname === item.href
                                        ? 'bg-blue-50 ring-1 ring-blue-200 text-blue-700'
                                        : 'text-slate-700 hover:bg-white active:bg-blue-50'
                                    }
                                `}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                                    ${pathname === item.href
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-white text-slate-500 shadow-sm'
                                    }
                                `}>
                                    <ServiceIcon slug={item.slug} size={16} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold leading-tight">{item.name}</p>
                                    <p className="text-[11px] text-slate-400 mt-0.5 truncate">{item.tagline}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

// ─── Main Header ─────────────────────────────────
function Header({ announcements }: { announcements?: string[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);
    const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
    const lastScrollY = useRef(0);
    const scrollThreshold = 10; // minimum scroll delta to trigger hide/show

    // Scroll listener: glass effect + auto-hide direction
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    setIsScrolled(currentY > 20);

                    // Only hide/show after passing threshold & not at very top
                    const delta = currentY - lastScrollY.current;
                    if (Math.abs(delta) > scrollThreshold) {
                        if (currentY > 120 && delta > 0) {
                            // Scrolling DOWN past 120px → hide
                            setIsHeaderHidden(true);
                        } else {
                            // Scrolling UP → show
                            setIsHeaderHidden(false);
                        }
                        lastScrollY.current = currentY;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Resize observer to update --header-height
    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                const height = headerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--header-height', `${height}px`);
            }
        };

        // Initial set
        updateHeaderHeight();

        // Observe resize
        const resizeObserver = new ResizeObserver(updateHeaderHeight);
        if (headerRef.current) {
            resizeObserver.observe(headerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    // Also update on scroll state change as it affects height (via class change)
    useEffect(() => {
        if (headerRef.current) {
            // Small timeout to allow transition to start/finish
            const timer = setTimeout(() => {
                const height = headerRef.current?.offsetHeight;
                if (height) {
                    document.documentElement.style.setProperty('--header-height', `${height}px`);
                }
            }, 300); // match transition duration
            return () => clearTimeout(timer);
        }
    }, [isScrolled]);

    const handleMenuToggle = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const handleMenuClose = useCallback(() => setIsMenuOpen(false), []);

    const handleServicesEnter = useCallback(() => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setIsServicesDropdownOpen(true);
    }, []);

    const handleServicesLeave = useCallback(() => {
        dropdownTimeout.current = setTimeout(() => {
            setIsServicesDropdownOpen(false);
        }, 200);
    }, []);

    // Never hide when mobile menu or mega-menu is actively open
    const shouldHide = isHeaderHidden && !isMenuOpen && !isServicesDropdownOpen;

    return (
        <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 flex flex-col font-sans header-auto-hide ${shouldHide ? 'header-hidden' : 'header-visible'}`}>
            {/* Announcement bar only visible at the very top */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-[40px] opacity-100'}`}>
                <AnnouncementBar announcements={announcements} />
            </div>

            <div
                className={`
                    w-full transition-all duration-500 ease-in-out border-b border-transparent
                    ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm h-[70px] sm:h-[80px]'
                        : 'bg-white h-[90px] sm:h-[100px] border-slate-100'
                    }
                `}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center h-full py-2 z-20 group">
                            <Image
                                src="/logo..webp"
                                alt="Ahsaan Traders"
                                width={280}
                                height={100}
                                className={`w-auto object-contain transition-all duration-500 group-hover:scale-105
                                    ${isScrolled ? 'h-[50px] sm:h-[60px]' : 'h-[65px] sm:h-[75px]'}`}
                                priority
                                sizes="(max-width: 640px) 160px, 240px"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-6 bg-slate-50/50 px-6 py-2 rounded-full border border-slate-100 shadow-sm mx-auto">
                            {navLinks.map((link) => {
                                if (link.hasDropdown) {
                                    return (
                                        <ServicesMegaMenu
                                            key={link.name}
                                            isActive={pathname.startsWith('/services')}
                                            isDropdownOpen={isServicesDropdownOpen}
                                            onMouseEnter={handleServicesEnter}
                                            onMouseLeave={handleServicesLeave}
                                            pathname={pathname}
                                        />
                                    );
                                }
                                return (
                                    <NavLink
                                        key={link.name}
                                        name={link.name}
                                        href={link.href}
                                        isActive={pathname === link.href}
                                    />
                                );
                            })}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4 flex-shrink-0 z-20">
                            <Button
                                href="/contact"
                                variant="primary"
                                size="lg"
                                className="shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transform transition-all px-8 py-3 text-base"
                            >
                                Get Quote
                            </Button>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex lg:hidden items-center gap-3">
                            <a
                                href="tel:+923008235699"
                                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 overflow-hidden mobile-call-btn"
                                aria-label="Call us"
                            >
                                <PhoneIcon size={18} />
                                {/* Shine sweep */}
                                <span className="absolute inset-0 rounded-full mobile-call-shine pointer-events-none" />
                                {/* Glow ring */}
                                <span className="absolute inset-[-3px] rounded-full border-2 border-blue-400/60 animate-pulse pointer-events-none" />
                            </a>
                            <button
                                onClick={handleMenuToggle}
                                className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <nav className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                    {navLinks.map((link) => {
                        if (link.hasDropdown) {
                            return (
                                <MobileServicesAccordion
                                    key={link.name}
                                    onClose={handleMenuClose}
                                    pathname={pathname}
                                />
                            );
                        }
                        return (
                            <MobileNavLink
                                key={link.name}
                                name={link.name}
                                href={link.href}
                                onClick={handleMenuClose}
                                isActive={pathname === link.href}
                            />
                        );
                    })}

                    <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 gap-3">
                        <Button href="/contact" variant="primary" className="justify-center w-full py-3 text-lg">
                            Get Free Quote
                        </Button>
                        <WhatsAppButton
                            variant="pill"
                            className="justify-center w-full py-3 text-lg !bg-green-50 !border-green-100 hover:!bg-green-100"
                            label="Chat on WhatsApp"
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default memo(Header);
