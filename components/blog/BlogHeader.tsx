
import React from 'react';
import Link from 'next/link';

export default function BlogHeader({ title, category, author, date, readTime, promise }: {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    promise?: string;
}) {
    // Format date properly
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const year = dateObj.getFullYear();
    const formattedDate = `${day} ${month}, ${year}`;

    return (
        <header className="mb-8 sm:mb-12">

            {/* Category Badge & Meta Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm font-medium">
                <Link href={`/blog?category=${category}`} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                    {category}
                </Link>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-slate-500">{formattedDate}</span>
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-slate-500 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readTime}
                </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                {title}
            </h1>

            {/* Promise Statement (The "Hook") */}
            {promise && (
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed border-l-4 border-slate-200 pl-4 sm:pl-6 py-1 italic">
                    {promise}
                </p>
            )}

            {/* Trust Signals (Projects, Warranty, Location) */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs ring-2 ring-white">
                        WA
                    </div>
                    <div className="text-sm">
                        <span className="block font-bold text-slate-900 leading-none">{author}</span>
                        <span className="text-xs text-slate-500">Senior Consultant</span>
                    </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-slate-100"></div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verified by Ahsaan Traders
                </div>
            </div>

        </header>
    );
}
