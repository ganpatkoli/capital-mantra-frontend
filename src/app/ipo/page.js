"use client";

import Head from "next/head";
import useAPI from "@/hooks/useAPI";
import React, { useState, useMemo, useEffect } from "react";
import { slugify } from "../../data/Data";
import Link from "next/link";
import { Zap, Info, BarChart3, ShieldCheck, ArrowRightLeft, HelpCircle, TrendingUp } from "lucide-react";

/* ---------------- UPDATED FILTER CHIPS (Horizontal Scroll) ---------------- */
const FilterChips = ({ activeValue, options, onChange }) => (
    <div className="flex flex-nowrap gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
        {options.map((opt) => (
            <button
                key={opt.value}
                onClick={() => onChange(opt.value)}
                className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition whitespace-nowrap flex-shrink-0 border ${activeValue === opt.value
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 shadow-sm"
                    }`}
            >
                {opt.label}
            </button>
        ))}
    </div>
);

/* ---------------- STATUS BADGE ---------------- */
const StatusBadge = ({ status }) => {
    const map = {
        Upcoming: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
        Open: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
        Listed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
        Closed: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    };
    return (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${map[status] || "bg-slate-100 text-slate-600"}`}>
            {status}
        </span>
    );
};

/* ---------------- IPO TABLE ---------------- */
const IpoTable = ({ data, showListingGain, page, perPage }) => (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl no-scrollbar">
        <table className="min-w-[1000px] lg:min-w-full w-full text-sm text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-b dark:border-slate-800">
                <tr className="font-semibold uppercase text-[10px] tracking-widest">
                    <th className="px-6 py-5 w-16 text-center">#</th>
                    <th className="px-6 py-5 sticky left-0 bg-slate-50 dark:bg-slate-800 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Company Name</th>
                    <th className="px-6 py-5">Price Band</th>
                    <th className="px-6 py-5">Live GMP</th>
                    <th className="px-6 py-5">Subscription</th>
                    <th className="px-6 py-5">Rating</th>
                    {showListingGain && <th className="px-6 py-5">Listing Gain</th>}
                    <th className="px-6 py-5 text-center">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {data.map((ipo, index) => {
                    const serial = (page - 1) * perPage + index + 1;
                    const gmpValue = parseFloat(ipo.gmp_text?.replace(/[₹,%,+]/g, '')) || 0;
                    const gainValue = parseFloat(ipo.listing_gain_percent) || 0;

                    return (
                        <tr key={ipo.id} className="hover:bg-blue-50/40 dark:hover:bg-slate-800/30 transition-colors group">
                            <td className="px-6 py-5 text-center text-slate-400 font-mono text-xs">{serial}</td>
                            <td className="px-6 py-5 sticky left-0 bg-white dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                <Link href={`/ipo/${ipo.id}/${slugify(ipo.name)}`} className="truncate max-w-[200px] md:max-w-xs group-hover:text-blue-600 transition-colors block">{ipo.name}</Link>
                                <div className="text-[9px] text-slate-400 font-black uppercase mt-1 flex gap-2">
                                    <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{ipo.exchange}</span>
                                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-1.5 py-0.5 rounded">{ipo.category}</span>
                                </div>
                            </td>
                            <td className="px-6 py-5 font-bold text-slate-700 dark:text-slate-300">₹{ipo.price || 'TBA'}</td>
                            <td className={`px-6 py-5 font-black ${gmpValue > 0 ? "text-green-600" : gmpValue < 0 ? "text-red-600" : "text-slate-500"}`}>
                                <div className="flex items-center gap-1.5">
                                    {gmpValue > 0 ? "+" : ""}{ipo.gmp_text || '0'}
                                    {gmpValue > 0 && <span className="animate-bounce-slow">↑</span>}
                                    {gmpValue < 0 && <span>↓</span>}
                                </div>
                            </td>
                            <td className="px-6 py-5 font-bold text-slate-600 dark:text-slate-400">{ipo.subscription || '0.00x'}</td>
                            <td className="px-6 py-5">
                                <div className="flex text-orange-500 text-[10px] items-center">
                                    {Array.from({ length: ipo.rating?.score || 1 }).map((_, i) => (
                                        <span key={i}>🔥</span>
                                    ))}
                                    <span className="ml-2 text-slate-400 font-black tracking-tighter">
                                        {ipo.rating?.score || 1}/5
                                    </span>
                                </div>
                            </td>
                            {showListingGain && (
                                <td className={`px-6 py-5 font-black ${gainValue > 0 ? "text-green-600" : gainValue < 0 ? "text-red-600" : "text-slate-500"}`}>
                                    {gainValue > 0 ? "+" : ""}{ipo.listing_gain_percent}%
                                </td>
                            )}
                            <td className="px-6 py-5 text-center">
                                <StatusBadge status={ipo.status_text} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
export default function App() {
    const [mainCategory, setMainCategory] = useState("all");
    const [subStatus, setSubStatus] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);
    const PER_PAGE = 10;

    const apiPath = useMemo(() => {
        if (mainCategory === "all") return "ipo/all";
        const statusPath = subStatus === "all" ? "active" : subStatus;
        return `ipo/${mainCategory}/${statusPath}`;
    }, [mainCategory, subStatus]);

    const { data = [], loading, error } = useAPI(apiPath);

    useEffect(() => { setPage(1); }, [mainCategory, subStatus]);

    const filteredData = useMemo(() => {
        if (!searchQuery) return data;
        return data.filter((ipo) =>
            ipo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ipo.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data, searchQuery]);

    const totalPages = Math.ceil(filteredData.length / PER_PAGE);
    const paginated = filteredData.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <>
            <Head>
                <title>IPO GMP Tracker 2025 | Live Grey Market Premium & Subscription Status</title>
                <meta name="description" content="Check latest IPO GMP today, upcoming SME & Mainboard IPOs, live subscription status, and listing gains. Stay updated with real-time market data." />
            </Head>

            <main className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 md:px-10 py-4">

                    {/* ---------- HERO SECTION ----------
                    <header className="mt-22 text-center">
                      
                        <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none uppercase">
                            IPO <span className="text-blue-600">GMP</span> TRACKER
                        </h1>
                        <p className="mt-4 text-sm md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                            Daily Grey Market Premium (GMP) updates, real-time subscription status, and professional listing day estimates for Indian IPOs.
                        </p>
                    </header> */}

                    <div className="mt-8 md:mt-16 bg-white dark:bg-slate-900 rounded-3xl md:rounded-[2.5rem] shadow-2xl  md:p-8 dark:border dark:border-slate-800 transition-all">

                        {/* ---------- INTEGRATED SEARCH & TIER 1 FILTERS ---------- */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                            {/* Tier 1: Categories */}
                            <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full md:w-fit overflow-x-auto no-scrollbar">
                                {[
                                    { id: "all", label: "All IPOs" },
                                    { id: "mainboard", label: "Mainboard" },
                                    { id: "sme", label: "SME Segment" },
                                ].map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setMainCategory(cat.id); setSubStatus("all"); }}
                                        className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${mainCategory === cat.id
                                            ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm"
                                            : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* Integrated Search Bar */}
                            <div className="relative w-full md:w-80 group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-slate-400 group-focus-within:text-blue-600 transition-colors">🔍</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search company..."
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs font-bold outline-none focus:border-blue-500 dark:focus:border-blue-600 transition-all text-slate-800 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Tier 2: Status Chips */}
                        <div className="">
                            <FilterChips
                                activeValue={subStatus}
                                onChange={setSubStatus}
                                options={[
                                    { value: "all", label: "Active Trends" },
                                    { value: "open", label: "Live Open" },
                                    { value: "upcoming", label: "Upcoming" },
                                    { value: "closing-today", label: "Closing Today" },
                                    { value: "closed", label: "Closed" },
                                    { value: "listed", label: "Listed" },
                                ]}
                            />
                        </div>
                    </div>

                    {/* ---------- CONTENT AREA ---------- */}
                    {loading ? (
                        <div className="py-32 text-center flex flex-col items-center">
                            <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mb-6"></div>
                            <p className="text-slate-400 font-black uppercase text-[10px]">Processing Live Feed...</p>
                        </div>
                    ) : error ? (
                        <div className="py-20 text-center bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/20">
                            <p className="text-red-500 font-black text-xs uppercase tracking-widest">⚠️ Connection Lost. Please Refresh.</p>
                        </div>
                    ) : filteredData.length === 0 ? (
                        <div className="py-32 text-center text-slate-400 font-bold italic">No IPOs found matching "{searchQuery}"</div>
                    ) : (
                        <>
                            <IpoTable data={paginated} showListingGain={subStatus === "listed"} page={page} perPage={PER_PAGE} />

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-4 mt-10">
                                    <button
                                        disabled={page === 1}
                                        onClick={() => { setPage(page - 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                                        className="px-8 py-3 bg-white dark:bg-slate-800 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg disabled:opacity-20 transition-all dark:text-white"
                                    >← PREV</button>
                                    <span className="text-[11px] font-black text-slate-400">PAGE {page} OF {totalPages}</span>
                                    <button
                                        disabled={page === totalPages}
                                        onClick={() => { setPage(page + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                                        className="px-8 py-3 bg-white dark:bg-slate-800 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg disabled:opacity-20 transition-all dark:text-white"
                                    >NEXT →</button>
                                </div>
                            )}
                        </>
                    )}

                    {/* ---------- SEO KNOWLEDGE HUB (Useful Content) ---------- */}
                    <article className="mt-32 pt-20 border-t border-slate-200 dark:border-slate-800 space-y-24">

                        {/* Section 1: Guide */}
                        <section className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 flex items-center gap-3">
                                    <Zap className="text-yellow-500 fill-yellow-500" />
                                    STRATEGIC IPO INVESTING
                                </h2>
                                <div className="space-y-6 text-slate-600 dark:text-slate-400 font-medium">
                                    <p className="text-lg leading-relaxed">
                                        Investing in an IPO is more than just bidding. To be a successful investor in 2025, you must analyze the Prospectus (DRHP) and understand the Grey Market Sentiment.
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                            <Info className="text-blue-600 flex-shrink-0" />
                                            <p className="text-sm font-bold leading-relaxed">The 70-30 Rule: If the GMP is above 30% of the issue price, it generally indicates a strong listing gain potential.</p>
                                        </div>
                                        <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                            <BarChart3 className="text-emerald-600 flex-shrink-0" />
                                            <p className="text-sm font-bold leading-relaxed">Anchor Investors: Check if big institutional names are buying. It validates the company's valuation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-3xl">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                    <ShieldCheck size={120} />
                                </div>
                                <h3 className="text-2xl font-black mb-6 tracking-tight">2025 INVESTOR CHECKLIST</h3>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-500 font-bold">01.</span>
                                        <span className="text-sm font-bold uppercase tracking-tight">Debt-to-Equity Ratio: Companies with high debt should be approached with caution.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-500 font-bold">02.</span>
                                        <span className="text-sm font-bold uppercase tracking-tight">Management Experience: Reliable promoters lead to better long-term wealth creation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-500 font-bold">03.</span>
                                        <span className="text-sm font-bold uppercase tracking-tight">Market Peer Comparison: Is the IPO priced lower than its competitors?</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2: Detailed Terminology (SEO Keywords) */}
                        <section>
                            <h2 className="text-3xl font-black text-center mb-16 tracking-tighter uppercase">IPO Market Dictionary</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-colors group">
                                    <ArrowRightLeft className="mb-6 text-blue-600 group-hover:scale-110 transition-transform" size={32} />
                                    <h4 className="font-black text-lg mb-4">SME vs Mainboard</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                        Mainboard IPOs are for established giants. SME IPOs are for small enterprises with a minimum application size of ₹1L+.
                                    </p>
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-500 transition-colors group">
                                    <Zap className="mb-6 text-emerald-600 group-hover:scale-110 transition-transform" size={32} />
                                    <h4 className="font-black text-lg mb-4">Grey Market Premium</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                        GMP is the unofficial trading price. A high GMP reflects high demand from retail and institutional bidders.
                                    </p>
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-colors group">
                                    <HelpCircle className="mb-6 text-indigo-600 group-hover:scale-110 transition-transform" size={32} />
                                    <h4 className="font-black text-lg mb-4">Allotment Lottery</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                        When oversubscribed, SEBI ensures a fair allotment using a computerized lottery system per PAN card.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: FAQ */}
                        <section className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">EXPERT INSIGHTS & FAQ</h3>
                                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Frequently asked questions by Indian retail investors.</p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { q: "Is GMP a reliable indicator of listing gains?", a: "While GMP reflects current demand, it is not a legal guarantee. Market volatility on listing day, global cues, and institutional selling can drastically change the final listing price." },
                                    { q: "Why am I not getting any IPO allotments?", a: "Allotment depends on the subscription ratio. If an IPO is subscribed 100x in the retail category, your chances are 1 in 100 per PAN card. Applying from multiple family accounts can improve your probability." },
                                    { q: "Where can I check the live subscription status?", a: "Our tracker pulls data directly from official exchange feeds (NSE and BSE) and updates every 15 minutes during the trading hours of 10 AM to 5 PM." }
                                ].map((item, i) => (
                                    <details key={i} className="group p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                        <summary className="font-black text-slate-900 dark:text-white list-none flex justify-between items-center group-open:text-blue-600">
                                            {item.q}
                                            <span className="transition-transform group-open:rotate-180 text-blue-600">▼</span>
                                        </summary>
                                        <div className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 animate-in fade-in slide-in-from-top-2 font-bold">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: CTA */}
                        <div className="p-10 rounded-[3rem] bg-slate-900 text-center border-1 border-emerald-500 shadow-3xl">
                            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">NEVER MISS AN OPPORTUNITY</h2>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-bold">
                                The Indian stock market moves fast. Bookmark this tracker to stay updated with Daily GMP Trends and Live IPO News.
                            </p>
                            <Link href="#ipos" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600">
                                Browse Active IPOs Now
                            </Link>
                        </div>
                    </article>
                </div>

                <style jsx global>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    @keyframes bounce-slow {
                        0%, 100% { transform: translateY(-10%); }
                        50% { transform: translateY(0); }
                    }
                    .animate-bounce-slow { animation: bounce-slow 1.5s infinite; }
                    ::selection { background: #2563eb; color: white; }
                `}</style>
            </main>
        </>
    );
}