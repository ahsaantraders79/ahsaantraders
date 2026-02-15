import React from 'react';

type InfoBoxVariant = 'answer' | 'warning' | 'tip' | 'pros-cons' | 'pricing';

interface InfoBoxProps {
    variant: InfoBoxVariant;
    title?: string;
    children: React.ReactNode;
}

const config: Record<InfoBoxVariant, { bg: string; border: string; iconBg: string; iconColor: string; titleColor: string }> = {
    answer: { bg: 'bg-blue-50', border: 'border-blue-400', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', titleColor: 'text-blue-900' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-400', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', titleColor: 'text-amber-900' },
    tip: { bg: 'bg-emerald-50', border: 'border-emerald-400', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', titleColor: 'text-emerald-900' },
    'pros-cons': { bg: 'bg-slate-50', border: 'border-slate-300', iconBg: 'bg-slate-200', iconColor: 'text-slate-600', titleColor: 'text-slate-900' },
    pricing: { bg: 'bg-indigo-50', border: 'border-indigo-300', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', titleColor: 'text-indigo-900' },
};

const icons: Record<InfoBoxVariant, React.ReactNode> = {
    answer: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    warning: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    tip: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
    'pros-cons': (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ),
    pricing: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

export default function InfoBox({ variant, title, children }: InfoBoxProps) {
    const c = config[variant];

    return (
        <div className={`my-8 rounded-xl border-l-4 ${c.border} ${c.bg} overflow-hidden`}>
            {title && (
                <div className="flex items-center gap-3 px-5 sm:px-6 pt-5 pb-3">
                    <div className={`w-8 h-8 rounded-lg ${c.iconBg} ${c.iconColor} flex items-center justify-center flex-shrink-0`}>
                        {icons[variant]}
                    </div>
                    <h4 className={`font-bold text-base sm:text-lg ${c.titleColor}`}>{title}</h4>
                </div>
            )}
            <div className="infobox-body px-5 sm:px-6 pb-5 pt-2 text-[15px] sm:text-base leading-7">
                {children}
            </div>
        </div>
    );
}
