'use client';

import { useActionState } from 'react';
import { submitContactForm, ContactState } from '@/app/actions/contact';
import Button from '@/components/ui/Button';

// Initial state for the form
const initialState: ContactState = {
    success: false,
    message: '',
    errors: {},
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    if (state.success) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-green-50 rounded-lg border border-green-100 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                    Thank you for contacting us. We will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 text-sm text-green-600 hover:text-green-800 font-medium underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form action={formAction} className="space-y-4">
            {/* Honeypot field for spam prevention */}
            <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base ${state.errors?.name ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                    required
                    autoComplete="name"
                />
                {state.errors?.name && <p className="mt-1 text-xs text-red-500">{state.errors.name}</p>}
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="0300-1234567"
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base ${state.errors?.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                    required
                    autoComplete="tel"
                />
                {state.errors?.phone && <p className="mt-1 text-xs text-red-500">{state.errors.phone}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base ${state.errors?.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                    required
                    autoComplete="email"
                />
                {state.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email}</p>}
            </div>

            <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Service Required *
                </label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        className={`w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base appearance-none ${state.errors?.service ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                            }`}
                        required
                        defaultValue=""
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="roof-waterproofing">Roof Waterproofing</option>
                        <option value="basement-waterproofing">Basement Waterproofing</option>
                        <option value="heat-proofing">Heat Proofing</option>
                        <option value="tank-waterproofing">Water Tank Treatment</option>
                        <option value="chemicals">Construction Chemicals</option>
                        <option value="ready-mix">Ready-Mix Concrete</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                {state.errors?.service && <p className="mt-1 text-xs text-red-500">{state.errors.service}</p>}
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message (Optional)
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Brief description of your requirements..."
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm sm:text-base"
                ></textarea>
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isPending}
                className={isPending ? 'opacity-80 cursor-wait' : ''}
            >
                {isPending ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </span>
                ) : (
                    'Send Message'
                )}
            </Button>

            {state.errors?.root && (
                <p className="text-center text-sm text-red-500 mt-2">{state.errors.root}</p>
            )}
        </form>
    );
}
