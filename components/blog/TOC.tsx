
import React from 'react';
import Link from 'next/link';

interface TOCProps {
    headings: { id: string; text: string; level: number }[];
}

export default function TOC({ headings }: TOCProps) {
    if (!headings || headings.length === 0) return null;

    return (
        <nav className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Contents
            </h4>
            <ul className="space-y-2.5 text-sm">
                {headings.map((h) => (
                    <li key={h.id} style={{ paddingLeft: `${(h.level - 2) * 12}px` }}>
                        <Link
                            href={`#${h.id}`}
                            className="block text-slate-600 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 line-clamp-1 py-0.5"
                        >
                            {h.text}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mini CTA inside TOC for extra conversion visibility */}
            <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900 mb-2">Need Help?</p>
                <Link
                    href="/contact"
                    className="block w-full text-center py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                    Get Free Quote
                </Link>
            </div>
        </nav>
    );
}

// Mobile Accordion Version
export function TOCMobile({ headings }: TOCProps) {
    if (!headings || headings.length === 0) return null;

    return (
        <details className="mb-8 bg-slate-50 border border-slate-200 rounded-lg lg:hidden group">
            <summary className="font-bold text-slate-900 p-4 cursor-pointer flex items-center justify-between list-none">
                <span>Table of Contents</span>
                <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <nav className="px-4 pb-4 pt-0 border-t border-slate-100 mt-2">
                <ul className="space-y-3 mt-3">
                    {headings.map((h) => (
                        <li key={h.id} className="text-sm">
                            <Link href={`#${h.id}`} className="text-blue-700 underline decoration-blue-200 underline-offset-2">
                                {h.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </details>
    );
}
