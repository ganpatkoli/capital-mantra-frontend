"use client";

import React from "react";
import Link from "next/link";
import AnimatedSection from "./AnimationWeb";
import {
    Newspaper,
    Rocket,
    Calculator,
    BookOpen
} from "lucide-react";

const WhyIposMatterSection = () => {
    return (
        <AnimatedSection animationClass="translate-y-10" rootMargin="-50px 0px">
            <section
                id="why-ipos"
                className="border-b border-slate-200/70 bg-slate-100 py-16 sm:py-24
                           dark:border-slate-800/70 dark:bg-slate-900"
                aria-labelledby="section-title"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    {/* Header */}
                    <div className="text-center max-w-7xl mx-auto space-y-5">
                        <span className="inline-flex items-center gap-2 rounded-full
                                         border border-emerald-500/30 bg-emerald-500/5
                                         px-4 py-1.5 text-[12px] font-bold uppercase
                                         tracking-[0.2em] text-emerald-600
                                         dark:text-emerald-300">
                            Capital Mitra • Your Strategic Market Partner
                        </span>

                        <h2
                            id="section-title"
                            className="max-w-7xl text-3xl font-black tracking-tight
                                       text-slate-900 sm:text-5xl dark:text-slate-50
                                       leading-tight"
                        >
                            Unlock Financial Growth with{" "}
                            <span className="text-emerald-600 dark:text-emerald-400">
                                Capital Mitra:
                                <br />
                            </span>
                            India&apos;s Premier IPO & Market Intelligence Hub.
                        </h2>

                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            In the fast-paced world of the Indian Share Market,
                            accurate information is the ultimate edge. Capital
                            Mitra simplifies complex financial data into
                            actionable insights. We are your trusted destination
                            for real-time Grey Market Premium (GMP) updates,
                            comprehensive Mainboard & SME IPO analysis, and
                            expert market news.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* 1. News & GMP Tracker */}
                        <article className="rounded-2xl p-7 bg-white shadow-lg
                                            dark:bg-slate-950 border border-transparent
                                            hover:border-emerald-500/30 transform
                                            transition duration-500 hover:scale-[1.03]
                                            flex flex-col items-center text-center">
                            <Newspaper
                                className="w-12 h-12 mb-5 text-emerald-600 dark:text-emerald-400"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                Live IPO & GMP Updates
                            </h3>
                            <p className="mt-3 text-slate-600 dark:text-slate-400
                                          text-sm leading-relaxed font-medium">
                                Stay ahead with instant alerts on upcoming IPOs,
                                subscription status, and live GMP trends sourced
                                directly from NSE & BSE market cycles.
                            </p>
                        </article>

                        {/* 2. SME Corner Analysis */}
                        <article className="rounded-2xl p-7 bg-white shadow-lg
                                            dark:bg-slate-950 border border-transparent
                                            hover:border-cyan-500/30 transform
                                            transition duration-500 hover:scale-[1.03]
                                            flex flex-col items-center text-center">
                            <Rocket
                                className="w-12 h-12 mb-5 text-cyan-600 dark:text-cyan-400"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
                                Expert SME IPO Insights
                            </h3>
                            <p className="mt-3 text-slate-600 dark:text-slate-400
                                          text-sm leading-relaxed font-medium">
                                Navigate high-reward SME IPOs with confidence.
                                Capital Mitra provides granular fundamental
                                analysis and risk assessment for small-cap
                                enterprises.
                            </p>
                        </article>

                        {/* 3. Financial Tools & Calculators */}
                        <article className="rounded-2xl p-7 bg-white shadow-lg
                                            dark:bg-slate-950 border border-transparent
                                            hover:border-indigo-500/30 transform
                                            transition duration-500 hover:scale-[1.03]
                                            flex flex-col items-center text-center">
                            <Calculator
                                className="w-12 h-12 mb-5 text-indigo-600 dark:text-indigo-400"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                                Smart Investment Tools
                            </h3>
                            <p className="mt-3 text-slate-600 dark:text-slate-400
                                          text-sm leading-relaxed font-medium">
                                Quantify your goals with our professional SIP,
                                Lumpsum, and SWP Calculators. Precise financial
                                planning tools built for the modern Indian
                                investor.
                            </p>
                        </article>

                        {/* 4. Educational Market Hub */}
                        <article className="rounded-2xl p-7 bg-white shadow-lg
                                            dark:bg-slate-950 border border-transparent
                                            hover:border-orange-500/30 transform
                                            transition duration-500 hover:scale-[1.03]
                                            flex flex-col items-center text-center">
                            <BookOpen
                                className="w-12 h-12 mb-5 text-orange-600 dark:text-orange-400"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">
                                Stock Market Knowledge
                            </h3>
                            <p className="mt-3 text-slate-600 dark:text-slate-400
                                          text-sm leading-relaxed font-medium">
                                From stock market basics to advanced valuation
                                techniques, Capital Mitra’s educational
                                resources transform beginners into informed
                                market participants.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default WhyIposMatterSection;
