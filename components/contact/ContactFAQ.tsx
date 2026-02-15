'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'How do I get a free waterproofing quote in Karachi?',
        answer: 'Simply call us at 0321-2420460, send a WhatsApp message, or fill the contact form on this page. We will schedule a free site inspection within 24 hours and provide a detailed written quote with no obligation.',
    },
    {
        question: 'What areas in Karachi do you serve?',
        answer: 'We serve all areas across Karachi including DHA (Phase 1-8), Clifton, Gulshan-e-Iqbal, North Nazimabad, PECHS, Gulistan-e-Jauhar, Scheme 33, Malir, Korangi, Federal B Area, and surrounding areas in Sindh.',
    },
    {
        question: 'How quickly can you start work after I contact you?',
        answer: 'After your free inspection, we can typically begin work within 2-3 business days. For emergency leakage repairs, we offer same-day service just mention it\'s urgent when you call.',
    },
    {
        question: 'Do you provide a warranty on waterproofing work?',
        answer: 'Yes, all our waterproofing services come with a written warranty ranging from 5 to 10 years depending on the treatment method. The warranty covers material failure and workmanship defects.',
    },
    {
        question: 'What information should I have ready when I call?',
        answer: 'It helps to know: the approximate area size (sq. ft.), the type of surface (roof, basement, walls), when the leakage started, and any photos of the affected area. However, our team can assess everything during the free inspection.',
    },
    {
        question: 'Is the site inspection really free?',
        answer: 'Yes, 100% free with no hidden charges. Our expert will visit your site, identify the exact cause of the problem, and provide a detailed quote all at no cost. You\'re under no obligation to proceed.',
    },
    {
        question: 'Can I get waterproofing done during the monsoon season?',
        answer: 'Emergency patches can be applied during dry periods between rains. However, for a complete, long-lasting waterproofing treatment, we recommend scheduling before the monsoon (ideally March-May). Contact us to plan ahead.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, bank transfer, JazzCash, and EasyPaisa. For larger projects, we offer flexible payment plans with an advance before work begins and the balance upon completion.',
    },
];

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-600 mb-3">
                        Common Questions
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Everything you need to know before reaching out. Can&apos;t find your answer? Call us at{' '}
                        <a href="tel:+923212420460" className="text-blue-600 font-semibold hover:underline">0321-2420460</a>.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl border transition-all duration-200 ${openIndex === index
                                ? 'border-blue-200 shadow-md shadow-blue-500/5'
                                : 'border-slate-100 hover:border-slate-200'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`font-semibold text-sm sm:text-base leading-snug ${openIndex === index ? 'text-blue-700' : 'text-slate-800'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === index
                                    ? 'bg-blue-100 text-blue-600 rotate-180'
                                    : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                                    <div className="border-t border-slate-100 pt-4">
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
