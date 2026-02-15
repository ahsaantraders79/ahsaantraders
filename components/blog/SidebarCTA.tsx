
import React from 'react';
import Button from '@/components/ui/Button';

export default function SidebarCTA() {
    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" />
                </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 relative z-10">Free Inspection</h3>
            <p className="text-slate-300 text-sm mb-6 relative z-10 leading-relaxed">
                Avoid costly damages. Get a professional roof assessment in Karachi today.
            </p>
            <div className="relative z-10 space-y-3">
                <Button href="/contact" variant="primary" fullWidth size="sm" className="shadow-lg shadow-blue-500/20">
                    Book Now
                </Button>
                <Button href="https://wa.me/923212420460" variant="secondary" fullWidth size="sm" className="bg-white/10 text-white hover:bg-white/20 border-none">
                    WhatsApp
                </Button>
            </div>
        </div>
    );
}
