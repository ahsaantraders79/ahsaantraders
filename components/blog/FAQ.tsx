import React from 'react';

interface FAQProps {
    items: { question: string; answer: string }[];
}

export default function FAQ({ items }: FAQProps) {
    if (items.length === 0) return null;

    return (
        <section className="mt-16 max-w-[680px] mx-auto">
            <div className="border-t-2 border-slate-200 pt-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">?</span>
                    Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                    {items.map((item, i) => (
                        <details key={i} className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-colors">
                            <summary className="font-semibold text-slate-900 cursor-pointer px-5 py-4 flex items-center justify-between list-none [&::-webkit-details-marker]:hidden text-[15px] sm:text-base leading-snug">
                                <span className="pr-4">{item.question}</span>
                                <span className="ml-2 w-6 h-6 rounded-full bg-slate-100 group-open:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all group-open:rotate-180">
                                    <svg className="w-3.5 h-3.5 text-slate-500 group-open:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-5 pb-5 text-slate-600 leading-relaxed text-[15px] border-t border-slate-100 pt-4">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
