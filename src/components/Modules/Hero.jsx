// components/Modules/Hero.jsx
"use client"; // Next.js Client Component

import React, { useEffect, useState } from 'react';
import AnimatedSection from './AnimationWeb';
import { useTheme } from '@/Context/ThemeContext';
import useAPI from '../../hooks/useAPI';
import Link from 'next/link';

const Hero = () => {
    // const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { data, loading, error } = useAPI("ipo/all");


    // Hydration error se bachne ke liye (Next.js specific)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    return (
        <AnimatedSection animationClass="translate-y-10" rootMargin='-50px 0px'>
            <section
                id="hero"
                className="border-b border-slate-200/70 bg-gradient-to-b from-white via-white to-slate-50 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"

            >
                {/* Background Gradient Layer */}


                <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pb-20">

                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                            Welcome to Capital Mitra • Your Market Guide
                        </span>

                        <h1 className="text-semibold text-2xl sm:text-5xl lg:text-4xl font-black tracking-tight text-slate-950 dark:text-slate-50 leading-[1.1]">
                            Master Investing with <span className="text-blue-600 dark:text-emerald-400">Live IPO GMP</span> & Market Insights.
                        </h1>

                        <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                            Capital Mantra brings you real-time GMP updates, concise IPO research, and beginner-friendly financial blogs.
                            Get real-time Grey Market Premium (GMP) alerts, expert IPO analysis, and professional-grade financial calculators. Empowering your investment journey with data-driven precision.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Link href="/ipo" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-105 duration-200">
                                View IPO Dashboard <span className="text-lg">↗</span>
                            </Link>
                            <Link href="news" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 dark:bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-emerald-500/60 transition hover:scale-105 duration-200">
                                Read Market Trends
                            </Link>
                        </div>

                        {/* Features Grid */}
                        <div className="grid gap-3 pt-2 text-xs text-slate-500 sm:grid-cols-3 dark:text-slate-400">
                            {[
                                { t: "100% Free Education", d: "No paywall. Learn basics." },
                                { t: "Beginner Friendly", d: "Simple language & examples." },
                                { t: "Live IPO Tracking", d: "Latest GMP updates." }
                            ].map((item, i) => (
                                <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-3 py-3 transition hover:shadow-md">
                                    <p className="font-semibold text-slate-800 dark:text-slate-100">{item.t}</p>
                                    <p className="mt-1 text-[11px] leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: IPO Live Snapshot Card */}
                    <div className="flex-1">
                        <div className="relative mx-auto max-w-md">
                            {/* Pulse Glow Effect */}
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 opacity-60 blur-xl animate-pulse" />

                            <div className="relative rounded-3xl border border-emerald-500/50 bg-white/95 dark:bg-slate-900/95 p-4 shadow-xl">
                                <div className="mb-3 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                                    <span className="h-2 w-2 rounded-full text-center bg-emerald-600 animate-ping" />
                                    Live IPO Snapshot
                                </div>

                                <div className="rounded-2xl bg-slate-100/80 dark:bg-slate-950/80 p-3">
                                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500 mb-2">
                                        <span>Company</span>
                                        <span>GMP (Est. Gain)</span>
                                    </div>

                                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {loading ? (
                                            <div className="py-12 text-center text-slate-400 font-bold italic animate-pulse">
                                                Capital Mitra is fetching live data...
                                            </div>
                                        ) : (
                                            data?.filter(i => i.status === "O").slice(0, 5).map((ipo) => (
                                                <div key={ipo.id} className="flex items-center justify-between py-2.5">
                                                    <div>
                                                        <p className="text-[13px] font-bold text-slate-900 dark:text-slate-100">{ipo.name}</p>
                                                        <p className="text-[10px] text-slate-500">{ipo.exchange} • {ipo.category || 'MAINBOARD'}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className={`text-[12px] font-bold ${parseFloat(ipo.gmp) >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                                                            {ipo.gmp ? `₹${ipo.gmp}` : '--'}
                                                            <span className="ml-1 text-[10px] font-medium opacity-80">({ipo.gmp_percent}%)</span>
                                                        </p>
                                                        <p className="text-[10px] font-medium text-blue-500 dark:text-blue-400">{ipo.status_text}</p>
                                                    </div>
                                                </div>
                                            ))
                                        )}


                                        <Link href="/ipo" className="mt-6 block w-full rounded-xl dark:bg-emerald-500 text-emerald-950   py-3 text-center text-xs font-bold   ">
                                            View Full Dashboard
                                        </Link>
                                    </div>
                                </div>
                                <p className="mt-4 text-center text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                                    Data Powered by Capital Mitra Intelligence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default Hero;