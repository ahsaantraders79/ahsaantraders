'use client';

import React from 'react';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/923212420460"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 p-1.5 pl-4 bg-white/10 backdrop-blur-md rounded-full border border-green-500/20 shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
            aria-label="Chat on WhatsApp"
        >
            <span className="text-sm font-semibold text-green-700 bg-white/90 px-2 py-1 rounded hidden group-hover:block transition-all">
                Chat with Expert
            </span>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md group-hover:bg-green-600 transition-colors">
                <WhatsAppIcon size={28} className="text-white" />
            </div>
        </a>
    );
}
