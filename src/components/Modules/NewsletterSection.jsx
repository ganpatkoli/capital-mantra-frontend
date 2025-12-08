// components/Modules/NewsletterSection.jsx
"use client";

import React from 'react';

const NewsletterSection = () => {
    return (
        <section
            id="newsletter"
            className="border-b border-slate-200/70 bg-gradient-to-r from-slate-50 via-slate-50 to-white py-12 sm:py-16 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
        >
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
                    Get curated IPO & market updates in your inbox
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-[15px] dark:text-slate-400">
                    No spam. 1–2 emails per week with IPO calendars, important SEBI
                    updates, beginner‑friendly financial explainers and handpicked
                    learning resources.
                </p>

                <form
                    className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="email"
                        required
                        placeholder="Enter your best email"
                        className="w-full rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-500 focus:border-emerald-500 sm:max-w-xs dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                        onClick={(e) => e.preventDefault()}
                    >
                        Subscribe free
                    </button>
                </form>

                <p className="mt-3 text-[11px] text-slate-500">
                    By subscribing, you agree to receive educational content. You can
                    unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;