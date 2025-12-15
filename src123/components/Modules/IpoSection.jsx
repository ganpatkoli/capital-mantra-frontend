// components/Modules/IpoSection.jsx
"use client";

import React, { useState } from 'react';
import { IPO_LIST, slugify } from '../../data/Data';
import Link from 'next/link';
import AnimatedSection from './AnimationWeb';
// Assuming IpoDetailView is in Modules, so we pass navigateToDetail down

const IpoFilterBar = ({ selectedStatus, setSelectedStatus, search, setSearch }) => {
    // ... (Filter Bar logic)
    const IPO_STATUSES = ["All", "Ongoing", "Upcoming", "Closed"];
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
                {IPO_STATUSES.map((status) => (
                    <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`rounded-full px-3 py-1 font-medium transition ${selectedStatus === status
                            ? "bg-emerald-500 text-emerald-950"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100/80 px-3 py-1.5 text-xs text-slate-700 sm:text-[13px] dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                <span className="text-slate-500 dark:text-slate-400">🔍</span>
                <input
                    type="text"
                    placeholder="Search by company or symbol..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-xs outline-none placeholder:text-slate-500 sm:max-w-xs sm:text-[13px]"
                />
            </div>
        </div>
    );
};

const IpoTable = ({ ipos, navigateToDetail }) => {
    if (!ipos.length) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
                No IPOs found for the selected filters.
            </div>
        );
    }
    const getGmpColor = (gmp) => {
        if (gmp && gmp.includes('+')) return 'text-emerald-600 dark:text-emerald-400';
        if (gmp && gmp.includes('-')) return 'text-red-600 dark:text-red-400';
        return 'text-slate-600 dark:text-slate-300';
    };

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ipos.map((ipo) => (
                <Link
                    key={ipo.id}
                    href={`/ipo/${ipo.id}/${slugify(ipo.company)}`} // SEO-friendly path: /ipo/1/corona-remedies-ltd
                    // We keep the class names on the Link component itself
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:border-emerald-500/50 hover:shadow-emerald-500/20 cursor-pointer dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-slate-950/60"
                >
                    <h3 className="text-[15px] font-semibold text-slate-900 dark:text-slate-50">{ipo.company}</h3>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-2">
                        {ipo.symbol} • {ipo.ipoType}
                    </p>

                    <div className="text-[12px] text-slate-700 space-y-1 dark:text-slate-300">
                        <p><span className="text-slate-500 dark:text-slate-400">Open:</span> {ipo.openDate}</p>
                        <p><span className="text-slate-500 dark:text-slate-400">Close:</span> {ipo.closeDate}</p>
                        <p><span className="text-slate-500 dark:text-slate-400">Price Band:</span> {ipo.priceBand}</p>
                        <p><span className="text-slate-500 dark:text-slate-400">Lot Size:</span> {ipo.lotSize}</p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                        <span className={`text-[12px] font-semibold ${getGmpColor(ipo.gmp)}`}>
                            {ipo.gmp}
                        </span>
                        <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${ipo.status === "Ongoing"
                                ? "bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/40 dark:text-emerald-300"
                                : ipo.status === "Upcoming"
                                    ? "bg-cyan-500/10 text-cyan-600 ring-1 ring-cyan-500/40 dark:text-cyan-300"
                                    : "bg-slate-200/50 text-slate-600 ring-1 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300 dark:ring-slate-500/40"
                                }`}
                        >
                            {ipo.status}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

const IpoSection = ({ navigateToDetail }) => {
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [search, setSearch] = useState("");

    const filteredIpos = IPO_LIST.filter((ipo) => {
        const statusMatch =
            selectedStatus === "All" || ipo.status === selectedStatus;
        const query = search.toLowerCase();
        const searchMatch =
            !query ||
            ipo.company.toLowerCase().includes(query) ||
            ipo.symbol.toLowerCase().includes(query);
        return statusMatch && searchMatch;
    });

    return (
        <AnimatedSection animationClass="translate-y-10" rootMargin='-50px 0px'>

            <section
                id="ipos"
                className="border-b border-slate-200/70 bg-slate-50 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-950"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
                                Live IPO Dashboard India: Track Upcoming, Ongoing & Latest Mainboard/SME IPOs.
                            </h2>
                            <p className="mt-1 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                                Get comprehensive IPO data: Bidding Status, Price Bands, Lot Sizes, and real-time Grey Market Premium (GMP) values for both Mainboard and SME IPO segments.</p>
                        </div>
                        <p className="text-[11px] text-slate-500 sm:text-xs">
                            Tip: Click any card for detailed dates and financials.
                        </p>
                    </div>

                    <div className="mt-5 space-y-4">
                        <IpoFilterBar
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            search={search}
                            setSearch={setSearch}
                        />
                        <IpoTable ipos={filteredIpos} navigateToDetail={navigateToDetail} />
                    </div>

                </div>
            </section>
        </AnimatedSection>
    );
};

export default IpoSection;