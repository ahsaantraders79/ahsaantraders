'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from '../ui/Icons';

/**
 * Header - Responsive with performance optimizations
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Memoized components to prevent unnecessary re-renders
 * 2. useCallback for event handlers
 * 3. Passive scroll listener for better scrolling performance
 * 4. will-change CSS for GPU acceleration
 */

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
] as const;

// Memoized NavLink component to prevent re-renders
const NavLink = memo(function NavLink({
    name,
    href,
    isScrolled
}: {
    name: string;
    href: string;
    isScrolled: boolean;
}) {
    return (
        <Link
            href={href}
            className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled
                    ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
        >
            {name}
        </Link>
    );
});

// Memoized Mobile NavLink
const MobileNavLink = memo(function MobileNavLink({
    name,
    href,
    onClick
}: {
    name: string;
    href: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
        >
            {name}
        </Link>
    );
});

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Optimized scroll handler with passive listener
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Memoized toggle handler
    const handleMenuToggle = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const handleMenuClose = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-[background-color,box-shadow] ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base text-white bg-blue-600`}>
                            AT
                        </div>
                        <div className="hidden sm:block">
                            <p className={`font-bold text-sm md:text-base leading-tight ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                                Ahsan Traders
                            </p>
                            <p className={`text-[10px] md:text-xs ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                                Waterproofing & Construction
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                name={link.name}
                                href={link.href}
                                isScrolled={isScrolled}
                            />
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Phone - Desktop */}
                        <a
                            href="tel:+923008235699"
                            className={`hidden md:flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-white'
                                }`}
                        >
                            <PhoneIcon size={16} />
                            <span className="hidden xl:inline">0300-8235699</span>
                        </a>

                        {/* Get Quote Button */}
                        <Button href="/contact" variant="primary" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
                            Get Quote
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={handleMenuToggle}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                                }`}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-x-0 top-14 sm:top-16 bg-white shadow-xl transition-all duration-300 will-change-[opacity,visibility] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <nav className="container mx-auto px-4 py-4">
                    {navLinks.map((link) => (
                        <MobileNavLink
                            key={link.name}
                            name={link.name}
                            href={link.href}
                            onClick={handleMenuClose}
                        />
                    ))}

                    {/* Mobile Contact */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                        <a
                            href="tel:+923212420460"
                            className="flex items-center gap-3 py-2 px-4 text-slate-600"
                        >
                            <PhoneIcon size={18} />
                            <span>0321-2420460</span>
                        </a>
                        <a
                            href="https://wa.me/923212420460"
                            className="flex items-center gap-3 py-2 px-4 text-green-600"
                        >
                            <WhatsAppIcon size={18} />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

// Export as memoized component
export default memo(Header);
