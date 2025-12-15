"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedSection from "./AnimationWeb";
import { slugify } from "../../data/Data";
import useAPI from "../../hooks/useAPI";

import { useMemo } from 'react';



// --- MOCK EXTERNAL DEPENDENCIES (for runnable code) ---
// const Link = ({ href, children, className }) => <a href="#" onClick={(e) => e.preventDefault()} className={className}>{children}</a>;
// const AnimatedSection = ({ children }) => <div className="animate-in fade-in">{children}</div>;
// const slugify = (text) => tex/ mockIpoList, loading: false });


// --------------------------------------------------------
// STATUS MAP FOR UI
// --------------------------------------------------------
const mapStatusToUI = (code) => {
    switch (code) {
        case "U": return "Upcoming";
        case "O": return "Ongoing";
        case "CT": return "Ongoing"; // Close Today should be treated as Ongoing for UI tabs
        case "C":
        case "L": return "Closed";
        default: return "Upcoming";
    }
};

//
// --------------------------------------------------------
// FILTER BAR
// --------------------------------------------------------
const IpoFilterBar = ({ selectedStatus, setSelectedStatus, search, setSearch }) => {
    const STATUS_TABS = ["All", "Upcoming", "Ongoing", "Closed"];

    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 
            sm:flex-row sm:items-center sm:justify-between 
            dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-sm shadow-md sticky top-0 z-10">

            {/* Status Tabs (Sthiti Tabs) */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
                {STATUS_TABS.map((status) => (
                    <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`rounded-full px-4 py-1.5 font-semibold transition duration-300 ${selectedStatus === status
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Search (Khoj) */}
            <div className="flex items-center gap-2 rounded-full border border-slate-300 
                bg-slate-100/80 px-4 py-1.5 text-sm text-slate-700 
                dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 w-full sm:w-auto">
                <span>🔍</span>
                <input
                    type="text"
                    placeholder="Search IPO name or exchange..." // IPO ka naam ya exchange khojein...
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent outline-none placeholder:text-slate-500"
                />
            </div>
        </div>
    );
};

//
// --------------------------------------------------------
// IPO TABLE (Grid View)
// --------------------------------------------------------
const IpoTable = ({ ipos }) => {

    const { data, loading, error, refetch, create } = useAPI("ipo/all");


    if (!data.length) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center 
                text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 backdrop-blur-sm">
                No IPOs found matching the filter criteria. {/* Filter criteria se koi IPO nahi mila. */}
            </div>
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((ipo) => {

                let dateDisplay;
                if (ipo.status === "L") {
                    // Listed: Show Listing Date only
                    dateDisplay = `Listed: ${ipo.listing_date_display}`;
                } else {
                    // U, O, CT, C: Show Open and Close Date
                    dateDisplay = `Open: ${ipo.open_date} - Close: ${ipo.close_date}`;
                }

                const showRange = ipo.gmp_low !== null && ipo.gmp_high !== null;

                return (
                    <Link
                        key={ipo.id}
                        href={`/ipo/${ipo.id}/${slugify(ipo.name)}`}
                        className="flex flex-col relative rounded-xl border border-slate-200 bg-white p-4 shadow-lg 
                            transition hover:shadow-xl hover:shadow-emerald-500/20 
                            dark:border-slate-800 dark:bg-slate-900 overflow-hidden group" // Added group for hover effects
                    >

                        {/* TOP HEADER: Name and Status */}
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 truncate pr-4">
                                {ipo.name}
                            </h3>
                            <StatusBadge uiStatus={ipo.status_text == "Listed" ? "Alotted" : ipo.status_text} />
                        </div>

                        {/* SUB-HEADER: Exchange, Category, and Key Date */}
                        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                            <p>
                                {/* Exchange / Category (Exchange / Varg) */}
                                {ipo.exchange || 'Mainboard'} / {ipo.category || 'Main'}
                            </p>
                            <p className="font-semibold text-slate-600 dark:text-slate-300">
                                {/* Date Information (Tareekh ki Jankari) */}
                                {dateDisplay}
                            </p>
                        </div>

                        {/* KEY DETAILS GRID: Price & Lot Size */}
                {/* KEY DETAILS GRID: Price & Lot Size */}
<div className="grid grid-flow-col auto-cols-fr gap-3 mb-4">
    <DetailItem label="Price Band" value={ipo.price ? `₹${ipo.price}` : "--"} />
    <DetailItem label="Lot Size" value={ipo.lot_size || "--"} />

    {showRange && (
        <DetailItem
            label="Gmp Range  ↑ | ↓"
            value={`₹${ipo.gmp_low} - ₹${ipo.gmp_high}`}
        />
    )}
</div>

                        {/* GMP SECTION (Bottom Bar) */}
                        <GmpDisplay ipo={ipo} />

                        {/* BOTTOM FOOTER / BUTTONS */}
                        <div className="mt-4 flex justify-between items-center">
                            {/* Left Side Info: Allotment Status / Listing Gain */}
                            <div className="text-[11px] font-medium">
                                {ipo.status === "L" ? (
                                    <ListingGainDisplay ipo={ipo} />
                                ) : ipo.allotted ? (
                                    <p className="text-emerald-600 dark:text-emerald-400">
                                        ✔ Allotment Published {/* Aavantan Jaari */}
                                    </p>
                                ) : (
                                    <p className="text-slate-500 dark:text-slate-400">
                                        Listing: {ipo.listing_date_display} {/* Soochi Hone Ki Tareekh */}
                                    </p>
                                )}
                            </div>

                            {/* Right Side: View Details Button (Point 4) */}
                            <div className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold 
                                bg-emerald-500 text-white rounded-full shadow-md 
                                transition group-hover:bg-emerald-600">
                                View Details {/* Aur Jankari Dekhein */}
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

// Helper component for detail items
const DetailItem = ({ label, value }) => (
    <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
        <p className="text-[10px] uppercase font-medium text-slate-500 dark:text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{value}</p>
    </div>
);

// Helper component for GMP display (Includes Low/High range - Point 2)
const GmpDisplay = ({ ipo }) => {
    if (ipo.status === "L") {
        return null; // Listed IPOs show gain in ListingGainDisplay
    }

    let gmpClasses = "text-slate-600 dark:text-slate-300";
    let gmpBg = "bg-slate-100 dark:bg-slate-800";
    let gmpText = ipo.gmp_text;

    if (ipo.gmp_percent > 0) {
        gmpClasses = "text-emerald-700 dark:text-emerald-400";
        gmpBg = "bg-emerald-100 dark:bg-emerald-900/40";
        gmpText = `+${ipo.gmp_text}`; // Add + sign for clarity
    } else if (ipo.gmp_percent < 0) {
        gmpClasses = "text-red-700 dark:text-red-400";
        gmpBg = "bg-red-100 dark:bg-red-900/40";
    }

    // Show range if GMP is non-zero and range data is available
    const showRange = ipo.gmp !== 0 && ipo.gmp_low !== null && ipo.gmp_high !== null;

    return (
        <div className={`p-3 rounded-lg flex flex-col justify-center font-bold ${gmpBg}`}>
            <div className="flex justify-between items-center">
                <p className={`text-xs uppercase tracking-wider ${gmpClasses}`}>Live GMP</p>
                <p className={`text-lg ${gmpClasses}`}>{gmpText}</p>
            </div>

            {/* {showRange && (
                <p className="text-[10px] text-right font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Range: Low/High (Seema: Kam/Zyaada)
                    Gmp : ₹{ipo.gmp_low} - ₹{ipo.gmp_high}
                </p>
            )} */}
        </div>
    );
};

// Helper component for Listing Gain
const ListingGainDisplay = ({ ipo }) => {
    const isGain = ipo.listing_gain_percent >= 0;
    const gainClasses = isGain ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400';

    return (
        <p className={`text-sm font-bold ${gainClasses}`}>
            {/* Listing Gain (Soochi Hone Par Labh) */}
            {isGain ? '▲' : '▼'} Listing Gain: {ipo.listing_gain} ({ipo.listing_gain_percent}%)
        </p>
    );
};


// Helper component for Status Badge
const StatusBadge = ({ uiStatus }) => {
    let badgeClasses = "";
    switch (uiStatus) {
        case "Ongoing":
            badgeClasses = "bg-emerald-500/10 text-emerald-600 ring-emerald-500/40";
            break;
        case "Upcoming":
            badgeClasses = "bg-cyan-500/10 text-cyan-600 ring-cyan-500/40";
            break;
        case "Closed":
            badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
            break;
        default:
            badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
    }

    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ring-1 ${badgeClasses}`}
        >
            {/* IPO Status (IPO Ki Sthiti) */}
            {uiStatus}
        </span>
    );
};


//
// --------------------------------------------------------
// MAIN APP COMPONENT
// --------------------------------------------------------
const App = () => {
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [search, setSearch] = useState("");

    const { data: rawData, loading } = useAPI("ipo/all");

    // Add UI status field to the raw data
    const ipos = useMemo(() => (rawData || []).map((ipo) => ({
        ...ipo,
        ui_status: mapStatusToUI(ipo.status),
    })), [rawData]);

    // FILTER LOGIC
    const filteredIpos = ipos.filter((ipo) => {
        const matchStatus = selectedStatus === "All" || ipo.ui_status === selectedStatus;
        const query = search.toLowerCase();
        const matchSearch =
            ipo.name.toLowerCase().includes(query) ||
            ipo.exchange.toLowerCase().includes(query) ||
            ipo.category.toLowerCase().includes(query) ||
            ipo.status_text.toLowerCase().includes(query);

        return matchStatus && matchSearch;
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-950">
                {/* Loading IPO data... (IPO data load ho raha hai...) */}
                <p className="text-lg font-medium text-slate-600 dark:text-slate-400">Loading IPO data...</p>
            </div>
        );
    }

    return (
        <AnimatedSection>
            <section className="bg-slate-50 py-8 sm:py-12 min-h-screen
                dark:bg-slate-950 transition duration-300">

                <div className="mx-auto max-w-7xl w-7xl px-4 sm:px-6">

                    {/* HEADER */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
                            {/* Live IPO Dashboard (Live IPO Dashboard) */}
                            Live IPO Dashboard
                        </h2>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                            {/* Track All Upcoming, Ongoing & Listed IPOs... (Sabhi aane wale, chal rahe aur soochi hue IPOs ko track karein...) */}
                            Track All Upcoming, Ongoing & Listed IPOs with live Grey Market Premium (GMP).
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-6">
                        <IpoFilterBar
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            search={search}
                            setSearch={setSearch}
                        />

                        <IpoTable ipos={filteredIpos} />
                    </div>

                </div>
            </section>
        </AnimatedSection>
    );
};

export default App;