
import React from 'react';
import Link from 'next/link';

export default function AuthorBio() {
    return (
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white border shadow-sm flex items-center justify-center text-2xl font-bold text-slate-400 flex-shrink-0">
                WA
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Waqas Ahmad</h3>
                    <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Author</span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                    Senior waterproofing consultant with over 7 years of field experience in Karachi&apos;s construction industry. Specializes in chemical waterproofing and heat proofing solutions.
                </p>
                <Link href="/contact" className="text-blue-600 font-semibold text-sm hover:underline">
                    View Profile &rarr;
                </Link>
            </div>
        </div>
    );
}
