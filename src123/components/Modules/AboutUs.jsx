import React from 'react'
import AnimatedSection from './AnimationWeb';

const AboutSection = () => {
    return (
        <AnimatedSection animationClass="translate-y-10">
            <section
                id="about"
                className="border-b border-slate-200/70 bg-white py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-900"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-6 space-y-6">
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-600 dark:text-cyan-300">
                                Our Mission
                            </span>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                                Our Mission: Empowering Confident Investment Decisions in the Indian Share Market.
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                                Capital Mantra was established with a single vision: to simplify financial markets for India's retail investors. We bridge the gap between complex financial terminology and useful investment knowledge.
                            </p>
                            <p className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                                Our focus is on data-driven IPO analysis, Grey Market Premium (GMP) tracking, and reliable educational content, so that you are always informed. Our Capital Mantra principle is: *Knowledge + Calculation = Success*.
                            </p>
                        </div>
                        <div className="lg:col-span-6 mt-10 lg:mt-0">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Why Choose Capital Mantra?</h3>
                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl text-emerald-500">✓</span>
                                        <div>
                                            <p className="font-semibold">IPO Research and GMP Tracking:</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">In-depth information on DRHP, valuation, and key financials for every major IPO.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl text-emerald-500">✓</span>
                                        <div>
                                            <p className="font-semibold">Simple Investment Blogs:</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Easy-to-understand articles on wealth creation, tax planning, and investment myths.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl text-emerald-500">✓</span>
                                        <div>
                                            <p className="font-semibold">Financial Calculators:</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Instant and accurate tools for SIP, EMI, and retirement planning.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};


export default AboutSection