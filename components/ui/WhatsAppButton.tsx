'use client';

import React from 'react';
import { WhatsAppIcon } from './Icons';

interface WhatsAppButtonProps {
    variant?: 'floating' | 'solid' | 'outline' | 'pill' | 'minimal';
    label?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
}

export default function WhatsAppButton({
    variant = 'floating',
    label = 'WhatsApp Us',
    className = '',
    size = 'md',
    showIcon = true,
}: WhatsAppButtonProps) {
    const phoneNumber = "923212420460";
    const message = "Hello, I'm interested in Ahsaan Traders waterproofing services.";
    const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // 1. Fixed Floating Button (Bottom Right)
    if (variant === 'floating') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 p-1.5 pl-4 bg-white/10 backdrop-blur-md rounded-full border border-green-500/20 shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 ${className}`}
                aria-label="Chat on WhatsApp"
            >
                <span className="text-sm font-semibold text-green-700 bg-white/90 px-2 py-1 rounded hidden group-hover:block transition-all shadow-sm">
                    Chat with Expert
                </span>
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-md group-hover:bg-[#128C7E] transition-colors relative">
                    <WhatsAppIcon size={28} className="text-white" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                </div>
            </a>
        );
    }

    // Size Classes
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // 2. Pill Style (Requested: White bg, Green Border, Green Text, Green Icon)
    if (variant === 'pill') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    inline-flex items-center gap-2.5 rounded-full font-bold
                    bg-white border-[1.5px] border-[#25D366] text-[#25D366]
                    hover:bg-[#E5FFEB] transition-all duration-300 shadow-sm hover:shadow-md
                    ${sizeClasses[size]}
                    ${className}
                `}
            >
                {showIcon && <WhatsAppIcon size={size === 'lg' ? 24 : 20} />}
                <span>{label}</span>
            </a>
        );
    }

    // 3. Solid Style (Green bg, White text)
    if (variant === 'solid') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    inline-flex items-center gap-2.5 rounded-full font-bold
                    bg-[#25D366] text-white border border-[#25D366]
                    hover:bg-[#128C7E] hover:border-[#128C7E] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105
                    ${sizeClasses[size]}
                    ${className}
                `}
            >
                {showIcon && <WhatsAppIcon size={size === 'lg' ? 24 : 20} className="text-white" />}
                <span>{label}</span>
            </a>
        );
    }

    // 4. Outline/Minimal
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                inline-flex items-center gap-2 font-semibold text-[#25D366] hover:text-[#128C7E] transition-colors
                ${className}
            `}
        >
            {showIcon && <WhatsAppIcon size={20} />}
            <span>{label}</span>
        </a>
    );
}
