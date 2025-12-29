"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "./AnimationWeb";
import { slugify } from "../../data/Data";
import useAPI from "../../hooks/useAPI";

const LARGE_LIMIT = 10; // Table mein limit thodi badha di hai

const StatusBadge = ({ uiStatus }) => {
    const isOngoing = uiStatus === "Open" || uiStatus === "Closing Today";
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${isOngoing
            ? "bg-emerald-500/10 text-emerald-600 ring-emerald-500/30 dark:text-emerald-400"
            : "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700"
            }`}>
            {uiStatus}
        </span>
    );
};

const AllIpoSection = () => {
    const [mainCategory, setMainCategory] = useState("all");
    const [subStatus, setSubStatus] = useState("all");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const apiPath = useMemo(() => {
        if (mainCategory === "all") return "ipo/all";
        const statusPath = subStatus === "all" ? "active" : subStatus;
        return `ipo/${mainCategory}/${statusPath}`;
    }, [mainCategory, subStatus]);

    const { data: rawData, loading } = useAPI(apiPath);

    useEffect(() => { setCurrentPage(1); }, [mainCategory, subStatus]);

    const mapStatusToUI = (code) => {
        switch (code) {
            case "U": return "Upcoming";
            case "O": return "Open";
            case "CT": return "Closing Today";
            case "C": return "Closed";
            case "L": return "Listed";
            default: return "Upcoming";
        }
    };

    const processedIpos = useMemo(() => {
        const baseData = (rawData || []).map(ipo => ({
            ...ipo,
            ui_status: mapStatusToUI(ipo.status),
        }));
        return baseData.filter(ipo => {
            const query = search.toLowerCase();
            return ipo.name.toLowerCase().includes(query) || ipo.exchange?.toLowerCase().includes(query);
        });
    }, [rawData, search]);

    const totalPages = Math.ceil(processedIpos.length / LARGE_LIMIT);
    const paginatedIpos = processedIpos.slice((currentPage - 1) * LARGE_LIMIT, currentPage * LARGE_LIMIT);

    const mainCategories = [
        { id: "all", label: "All IPOs" },
        { id: "mainboard", label: "Mainboard" },
        { id: "sme", label: "SME" },
    ];

    const statusFilters = [
        { id: "all", label: "All Status" },
        { id: "open", label: "Live Open" },
        { id: "upcoming", label: "Upcoming" },
        { id: "closing-today", label: "Closing Today" },
        { id: "closed", label: "Closed" },
        { id: "listed", label: "Listed" },
    ];

    return (
        <AnimatedSection>
            <section id="ipos" className="bg-white dark:bg-[#020617] py-12 sm:py-20 min-h-screen transition-colors duration-500">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">

                    {/* Header */}
                    <header className="mb-10 text-center">
                        <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-5xl lg:text-5xl">

                            Capital <span className="text-blue-600 dark:text-emerald-500">Mitra</span> Live IPO Tracker

                        </h2>
                        <p className="mt-4 text-base font-medium text-slate-500 dark:text-slate-400">
                            Professional tracking for Mainboard and SME listings with real-time GMP data.
                        </p>
                    </header>

                    {/* Filter Bar (Two-Tier) */}
                    <nav className="sticky top-0 z-40 space-y-4 mb-8 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto no-scrollbar w-full md:w-auto">
                                {mainCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setMainCategory(cat.id); setSubStatus("all"); }}
                                        className={`flex-1 whitespace-nowrap px-6 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${mainCategory === cat.id
                                            ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-emerald-400 shadow-sm"
                                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                            <div className="relative w-full md:w-64">
                                <input
                                    type="text"
                                    placeholder="Search company..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-10 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                />
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50">🔍</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                            {statusFilters.map((status) => (
                                <button
                                    key={status.id}
                                    onClick={() => setSubStatus(status.id)}
                                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all ${subStatus === status.id
                                        ? "bg-blue-600 border-blue-600 text-white dark:bg-emerald-500 dark:border-emerald-500"
                                        : "bg-transparent border-slate-200 dark:border-slate-700 text-slate-500 hover:border-blue-400 dark:hover:border-emerald-400"
                                        }`}
                                >
                                    {status.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Tabular Content Section */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center min-h-[400px]">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
                        </div>
                    ) : paginatedIpos.length > 0 ? (
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                            <table className="w-full text-sm text-left border-collapse min-w-[900px]">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                                    <tr className="text-[10px] font-black uppercase tracking-widest">
                                        <th className="px-6 py-4 w-16 text-center">#</th>
                                        <th className="px-6 py-4  left-0 bg-slate-50 dark:bg-slate-800 z-10">Company Name</th>
                                        <th className="px-6 py-4">Price</th>
                                        <th className="px-6 py-4">GMP</th>
                                        <th className="px-6 py-4">Sub.</th>
                                        <th className="px-6 py-4">Listing Date</th>
                                        <th className="px-6 py-4 text-center">Status</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {paginatedIpos.map((ipo, index) => (
                                        <tr key={ipo.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                                            <td className="px-6 py-4 text-center text-slate-400 font-mono text-xs">
                                                {(currentPage - 1) * LARGE_LIMIT + index + 1}
                                            </td>
                                            <td className="px-6 py-4  left-0 bg-white dark:bg-slate-900 z-10 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 font-bold text-slate-900 dark:text-white">
                                                <div className="truncate max-w-[200px]">{ipo.name}</div>
                                                <div className="text-[9px] text-slate-400 uppercase tracking-tighter">{ipo.exchange} • {ipo.category}</div>
                                            </td>
                                            <td className="px-6 py-4 font-black text-blue-600 dark:text-emerald-400 whitespace-nowrap">
                                                ₹{ipo.price || 'TBA'}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                <span className={`${parseFloat(ipo.gmp) >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                    ₹{ipo.gmp || '0'}
                                                </span>
                                                <span className="text-[9px] block text-slate-400">({ipo.gmp_percent || '0'}%)</span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                {ipo.subscription || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                                {ipo.listing_date_display || 'TBA'}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <StatusBadge uiStatus={ipo.ui_status} />
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link
                                                    href={`/ipo/${ipo.id}/${slugify(ipo.name)}`}
                                                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 dark:bg-white px-3 py-1.5 text-[10px] font-black uppercase text-white dark:text-slate-900 hover:scale-105 transition-transform"
                                                >
                                                    View Details
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="py-20 text-center border-2 border-dashed rounded-3xl dark:border-slate-800">
                            <p className="text-slate-500">No results found.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && !loading && (
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <button
                                onClick={() => { setCurrentPage(p => Math.max(p - 1, 1)); }}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-[10px] disabled:opacity-20 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                            >PREV</button>
                            <span className="text-xs font-black dark:text-slate-400 uppercase tracking-widest">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => { setCurrentPage(p => Math.min(p + 1, totalPages)); }}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-[10px] disabled:opacity-20 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                            >NEXT</button>
                        </div>
                    )}
                </div>

                <style jsx global>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
            </section>
        </AnimatedSection>
    );
};

export default AllIpoSection;