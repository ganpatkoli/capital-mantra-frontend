// components/Modules/Hero.jsx
import React from 'react';
import { IPO_LIST } from '../../data/Data';
import AnimatedSection from './AnimationWeb';
import { useTheme } from '@/Context/ThemeContext';
import useAPI from '../../hooks/useAPI';

const Hero = () => {
    const { theme } = useTheme();

    const { data, loading, error, refetch, create } = useAPI("ipo/all");

    // const addIPO = async () => {
    //     await create({ name: "New IPO", price: 500 });
    //     refetch(); // reload list
    // };



    console.log("Ddddddddddd0" ,data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR: {error}</p>;

    // console.log("first0", theme)
    return (
        <AnimatedSection animationClass="translate-y-10" rootMargin='-50px 0px'>

            <section
                id="hero"
                className="border-b border-slate-200/70 bg-gradient-to-b from-white via-white to-slate-50 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
            >
                <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pb-20">
                    <div className="flex-1 space-y-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                            Live Market Insights • Best IPO Analysis
                        </span>

                        <h1
                            className="
        text-balance 
        text-2xl 
        sm:text-3xl 
        lg:text-4xl 
        font-semibold 
        tracking-tight 
        text-slate-900 
        dark:text-slate-50
    "
                        >
                            Smart IPO Insights & Simplified Investing — All in One Place.
                        </h1>

                        <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                            Capital Mantra brings you real-time GMP updates, concise IPO research, and beginner-friendly financial blogs —
                            everything you need to make confident investment decisions.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#ipos"
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-[1.05] duration-200" // Added hover animation
                            >
                                View IPO Dashboard
                                <span className="text-lg">↗</span>
                            </a>
                            <a
                                href="#blogs"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-500/60 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-500/60 dark:hover:text-emerald-200 transition hover:scale-[1.05] duration-200" // Added hover animation
                            >
                                Read Latest Blogs
                            </a>
                        </div>

                        <div className="grid gap-3 pt-2 text-xs text-slate-500 sm:grid-cols-3 sm:text-[13px] dark:text-slate-400">
                            <div className="rounded-xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70 transition hover:shadow-md duration-300">
                                <p className="font-semibold text-slate-800 dark:text-slate-100">100% Free Financial Education</p>
                                <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                                    No paywall. Learn the basics of investment, IPOs, and mutual funds.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70 transition hover:shadow-md duration-300">
                                <p className="font-semibold text-slate-800 dark:text-slate-100">Beginner-friendly Investing</p>
                                <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                                    Simple language, real examples, and clear action points for the Indian market.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70 transition hover:shadow-md duration-300">
                                <p className="font-semibold text-slate-800 dark:text-slate-100">Live IPO Tracking (GMP)</p>
                                <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                                    View latest, upcoming, and recently listed IPOs with GMP tracking.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="relative mx-auto max-w-md">
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-400/50 via-cyan-400/40 to-teal-500/30 opacity-60 blur-xl animate-pulse-slow" /> {/* Pulse effect for the background glow */}
                            <div className="relative rounded-3xl border border-emerald-500/50 bg-white/95 p-4 shadow-xl shadow-emerald-500/20 dark:border-emerald-400/30 dark:bg-slate-900/95">
                                <div className="mb-3 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                                    Live IPO Snapshot (Demo Data)
                                </div>

                                <div className="rounded-2xl bg-slate-100/80 p-3 dark:bg-slate-950/80">
                                    <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                                        <span>Company (IPO)</span>
                                        <span>GMP • Status</span>
                                    </div>
                                    <div className="mt-2 divide-y divide-slate-300/80 text-xs dark:divide-slate-800/80">
                                        {
                                            data?.slice(0, 3).map((ipo) => (
                                                <div
                                                    key={ipo.id}
                                                    className="flex items-center justify-between py-2"
                                                >
                                                    <div>
                                                        <p className="text-[13px] font-medium text-slate-900 dark:text-slate-100">
                                                            {ipo.name}
                                                        </p>
                                                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                                            {ipo.symbol} • {ipo.ipoType}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-300">
                                                            {ipo.gmp}
                                                        </p>
                                                        <p className="text-[11px] text-slate-500 dark:text-slate-400">{ipo.status}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <p className="mt-3 text-[10px] leading-relaxed text-slate-500">
                                    * All IPO and GMP numbers are for demonstration purposes only. Please verify before investing.
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