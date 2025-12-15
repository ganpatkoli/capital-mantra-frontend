"use client";

import React, { useEffect, useState } from "react";
import BackButton from "../../UI/BackButton";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import axios from "axios";
import { baseURL } from "@/Service/axios";

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------

const IpoDetailView = ({ goBack, apiReponse, gmpApiResponse, id, slug }) => {
    const [tab, setTab] = useState("about");
    const [getNews, setGetNews] = useState([]);

    let ipo = apiReponse.data;
    let gmpData = gmpApiResponse.data;

    // --------------------------------------
    // FETCH NEWS API WHEN NEWS TAB ACTIVE
    // --------------------------------------
    const fetchNews = async () => {
        try {
            const response = await axios.get(`${baseURL}/ipo/news/${slug}`);
            setGetNews(response.data);
        } catch (error) {
            console.log("News API Error:", error);
        }
    };

    useEffect(() => {
        if (tab === "news") fetchNews();
    }, [tab, id]);

    // --------------------------------------
    // RENDER COMPONENT
    // --------------------------------------



    const FAQItem = ({ question, answer }) => {
        const [open, setOpen] = useState(false);

        return (
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg 
            bg-white dark:bg-slate-800 overflow-hidden">

                {/* HEADER */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center p-4 
                text-left hover:bg-slate-50 dark:hover:bg-slate-700/40 transition"
                >
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                        {question}
                    </span>

                    <span
                        className={`transform transition-transform duration-300 
                    ${open ? "rotate-180" : ""}`}
                    >
                        ▼
                    </span>
                </button>

                {/* BODY */}
                {open && (
                    <div className="px-4 mt-2 pb-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {answer}
                    </div>
                )}
            </div>
        );
    };



    const formatIpoDetailKey = (key) => {
        if (!key) return '';
        return key
            .replace(/−\s*/g, '↳ ')
            .replace(/QIB \(Ex\. Anchor\)/, '↳ QIB (Non-Anchor)')
            .replace(/\u003E/g, '>')
            .replace(/\u003C/g, '<')
            .trim();
    };

    const allocationDetails = [
        "Total Shares Offered",
        "QIB Shares Offered",
        "− Anchor Investor Shares Offered",
        "NII (HNI) Shares Offered",
        "Retail Shares Offered",
        "Shareholders Shares Offered"
    ];


    // --- Financial Table Logic (Dynamic) ---
    let financialYears = [];
    if (ipo.financials && ipo.financials.length > 0) {
        // Dynamically get headers, excluding the first column key ("Period Ended")
        financialYears = Object.keys(ipo.financials[0]).filter(key => key !== "Period Ended").reverse(); // Reverse to show latest first
    }

    // --- Key Ratios Table Logic ---
    const keyRatios = [
        { label: "Return on Equity (ROE)", key: "ROE", color: "text-emerald-500", suffix: "%" },
        { label: "RoNW (Return on Net Worth)", key: "RoNW", color: "text-emerald-500", suffix: "%" },
        { label: "P/E (Post IPO)", key: "P/E (x) (Post IPO)", color: "text-blue-500", prefix: "x" },
        { label: "P/E (Pre IPO)", key: "P/E (x) (Pre IPO)", color: "text-slate-500", prefix: "x" },
        { label: "EPS (Post IPO)", key: "EPS Rs (Post IPO)", color: "text-purple-500", prefix: "₹" },
        { label: "Price to Book Value", key: "Price to Book Value", color: "text-orange-500" },
        { label: "Promoter Holding (Post IPO)", key: "Promoter Holding (Post IPO)", color: "text-pink-500" },
    ];

    // --- Additional Financials Table Logic ---
    const additionalFinancials = [
        { label: "Assets", key: "Assets" },
        { label: "Total Income", key: "Total Income" },
        { label: "Profit After Tax", key: "Profit After Tax" },
        { label: "EBITDA", key: "EBITDA" },
        { label: "Net Worth", key: "NET Worth" },
        { label: "Reserves & Surplus", key: "Reserves and Surplus" },
    ];


    const kpiLookup = {};
    ipo.kpi?.forEach(k => {
        kpiLookup[k.metric] = k.value;
    });

    // --- IPO Details Table Logic ---
    // Metrics that should be included in the primary IPO details table.
    const primaryIpoDetailsKeys = [
        "IPO Date", "Listing Date", "Face Value", "Price Band", "Lot Size",
        "Sale Type", "Issue Type", "Listing At", "Total Issue Size"
    ];

    // Filter ipoDetails for the main details table
    const ipoTableDetails = {};
    Object.entries(ipo.ipoDetails || {}).forEach(([key, value]) => {
        if (primaryIpoDetailsKeys.includes(key)) {
            ipoTableDetails[key] = value;
        }
    });



    const financialRows = ipo.financials?.map((row, idx) => (
        <tr
            key={idx}
            className="text-center border-b border-slate-200 dark:border-slate-700 
            hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
        >
            <td className="py-2 px-4 text-left font-medium whitespace-nowrap text-slate-700 dark:text-slate-300">
                {row["Period Ended"]}
            </td>
            {/* Map through dynamic years */}
            {financialYears.map((year, i) => {
                const value = row[year];
                // Use i === 0 to highlight the most recent data
                const isLatest = i === 0;

                // Simplified Period label for table header
                const periodLabel = year.includes('Mar') ? year.replace('31 Mar ', 'FY ') : year.replace('30 Sep ', 'H1 ');

                return (
                    <td
                        key={i}
                        className={`py-2 px-4 font-mono text-right ${isLatest ? 'text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-900 dark:text-white'}`}
                    >
                        {/* Use the dynamically obtained key */}
                        {value !== undefined ? `₹${value} Cr` : '-'}
                    </td>
                );
            })}
        </tr>
    ));

    return (
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* BACK BUTTON */}
                <BackButton onClick={goBack} />

                {/* --------------------------------------
                    HEADER SECTION
                -------------------------------------- */}
                <header className="mt-4 border-b pb-4 border-slate-200 dark:border-slate-800 flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                        <img
                            src={gmpData.logo || "/no-logo.png"}
                            alt={`${gmpData.matched_item.name} Logo`}
                            className="w-full h-full object-contain p-2"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
                            {gmpData.matched_item.name}
                        </h1>

                        <div className="mt-2 flex items-center gap-4 text-sm">
                            <span
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold 
                                    ${gmpData.matched_item.category === "Mainboard"
                                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                                        : "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400"
                                    }`}
                            >
                                {gmpData.matched_item.category} IPO
                            </span>

                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Status:
                                <span
                                    className={`ml-1 font-semibold 
                                        ${gmpData.matched_item.status_text === "Ongoing"
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : "text-orange-600 dark:text-orange-400"
                                        }`}
                                >
                                    {gmpData.matched_item.status_text}
                                </span>
                            </span>
                        </div>
                    </div>
                </header>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"> {[{ label: "Price Band", value: ipo.ipoDetails["Price Band"] }, { label: "Lot Size", value: ipo.ipoDetails['Lot Size'] }, { label: "GMP", value: <span className={"-"}>0.00</span> }, { label: "Issue Size", value: ipo.ipoDetails["Total Issue Size"] },].map((item, i) => (<div key={i} className="text-center"> <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p> <p className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">{item.value}</p> </div>))} </div>
                {/* --------------------------------------
                    TABS
                -------------------------------------- */}
                <div className="mt-10 border-b border-slate-200 dark:border-slate-700 flex gap-6">
                    {["about", "financials", "gmp", "news"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`pb-3 text-sm font-semibold 
                                ${tab === t
                                    ? "text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600"
                                    : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            {t === "about" && "About IPO"}
                            {t === "financials" && "Financials"}
                            {t === "gmp" && "GMP"}
                            {t === "news" && "News"}
                        </button>
                    ))}
                </div>





                {tab === "about" && (
                    <div className="space-y-5">

                        {/* ================= ABOUT IPO ================= */}
                        <div className="p-6 mt-4 rounded-xl border border-slate-200 bg-white 
            dark:bg-slate-900 dark:border-slate-800 shadow-sm">

                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                                About {gmpData.matched_item.name}
                            </h2>

                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                <strong>{gmpData.matched_item.name}</strong> is coming up with a
                                <strong> {gmpData.matched_item.category} IPO</strong> offering a price band of
                                <strong> {ipo.ipoDetails["Price Band"]}</strong>. Investors can apply with a minimum
                                lot size of <strong>{ipo.ipoDetails["Lot Size"]}</strong>.
                                The IPO opens on <strong>{gmpData.matched_item.open_date}</strong> and closes on
                                <strong> {gmpData.matched_item.close_date}</strong>.
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                The company aims to raise <strong>{ipo.ipoDetails["Total Issue Size"]}</strong>.
                                Market buzz, driven by the <strong>Grey Market Premium (GMP)</strong>, shows
                                increasing retail and HNI interest. DRHP reveals that the raised funds will be
                                utilized for business expansion, operational efficiency, and strengthening the
                                financial position.
                            </p>
                        </div>

                        {/* ================= KEY STRENGTHS ================= */}
                        <div className="p-6 rounded-xl border border-slate-200 bg-white 
            dark:bg-slate-900 dark:border-slate-800 shadow-sm">

                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                                Why Investors Are Tracking {gmpData.matched_item.name}
                            </h3>

                            <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li>Attractive price band: <strong>{ipo.ipoDetails["Price Band"] || ipo.ipoDetails["Issue Price"]}</strong></li>
                                <li>Retail-friendly lot size: <strong>{ipo.ipoDetails["Lot Size"]}</strong></li>
                                <li>Strong market sentiment - Current GMP: <strong>{gmpData.current_gmp} ({gmpData.gmp_percentage})</strong></li>
                                <li>
                                    Business fundamentals indicate
                                    {gmpData.matched_item.pe_ratio
                                        ? ` a stable P/E ratio of ${gmpData.matched_item.pe_ratio}`
                                        : " consistent financial growth and outlook"}
                                </li>
                                <li>Sector demand and promoter credibility enhance long-term potential</li>
                            </ul>
                        </div>

                        {/* ================= SHOULD YOU APPLY ================= */}
                        <div className="p-6 rounded-xl border border-slate-200 bg-white 
            dark:bg-slate-900 dark:border-slate-800 shadow-sm">

                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                                Should You Apply for {gmpData.matched_item.name} ?
                            </h3>

                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                The current <strong>GMP of {gmpData.current_gmp} ({gmpData.gmp_percentage})</strong> indicates positive market
                                expectations ahead of listing. However, subscription numbers across QIB, NII, and
                                Retail categories will determine the final sentiment.
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                Investors should evaluate valuation, growth potential, financial stability, and
                                industry environment before applying. Early financial indicators suggest strong
                                prospects for both listing gains and long-term holdings.
                            </p>
                        </div>

                        {/* ================= LISTING ESTIMATE ================= */}
                        <div className="p-6 rounded-xl border border-slate-200 bg-white 
            dark:bg-slate-900 dark:border-slate-800 shadow-sm">

                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                                {gmpData.matched_item.name} Listing Estimate
                            </h3>

                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                Based on the ongoing GMP of <strong>{gmpData.current_gmp} ({gmpData.gmp_percentage}) </strong>, the potential
                                listing price is influenced by:
                            </p>

                            <ul className="list-disc ml-5 mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                <li>Subscription trends across investor categories</li>
                                <li>Market conditions during the listing week</li>
                                <li>Sector performance and liquidity trends</li>
                                <li>Company valuation vs. listed peers</li>
                            </ul>
                        </div>

                        {/* ================== FAQ SECTION — UNIQUE SEO CONTENT ================== */}
                        <section className="p-6 rounded-xl border border-slate-200 bg-white 
dark:bg-slate-900 dark:border-slate-800 shadow-sm mt-6">

                            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-50">
                                {gmpData.matched_item.name} IPO – Frequently Asked Questions (Investor Guide)
                            </h2>

                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                This section answers the most common queries asked by investors before applying for
                                the <strong className="text-slate-900 dark:text-slate-100">{gmpData.matched_item.name} IPO</strong>.
                                All information is structured to help with <strong className="text-emerald-600">investment decisions</strong>,
                                <strong className="text-emerald-600">GMP expectations</strong>, and <strong className="text-emerald-600">
                                    listing-day predictions</strong>.
                            </p>

                            <div className="space-y-3">

                                {console.log("FAQ Render with gmpData:", ipo)}

                                {/* FAQ LIST */}
                                {[
                                    {
                                        q: "What is the official price band for this IPO?",
                                        a: `The price band for the ${gmpData.matched_item.name}  is set at 
                ${ipo.ipoDetails["Price Band"] || ipo.ipoDetails["Issue Price"]}, which positions the valuation in a 
                competitive range compared to recent IPOs in the 
                ${gmpData.matched_item.category} segment.`
                                    },
                                    {
                                        q: "How many shares are included in one lot?",
                                        a: `One lot of the ${gmpData.matched_item.name} IPO consists of 
                ${ipo.ipoDetails["Lot Size"]} shares.  
                This lot size is suitable for retail investors looking to start with 
                a moderate investment exposure.`
                                    },
                                    {
                                        q: "What is today’s GMP (Grey Market Premium)?",
                                        a: `The latest GMP for this IPO is ${gmpData.current_gmp}.  
                While GMP is not an official indicator, it reflects early market 
                sentiment on potential listing performance.`
                                    },
                                    {
                                        q: "When does the IPO open and close for subscription?",
                                        a: `The IPO subscription window opens on ${gmpData.matched_item.open_date} 
                and closes on ${gmpData.matched_item.close_date}.  
                Investors typically track QIB, NII & Retail demand closely during this period.`
                                    },
                                    {
                                        q: "What is the expected listing price of the IPO?",
                                        a: `Based on the current GMP trend and overall sentiment in the broader market, 
                the estimated listing price may see movement aligned with 
                subscription figures, GMP direction, and overall market volatility 
                on the listing day.`
                                    }
                                ].map((item, idx) => (
                                    <FAQItem key={idx} question={item.q} answer={item.a} />
                                ))}

                            </div>
                        </section>



                    </div>
                )}


                {tab === "financials" && (
                    <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
                        <div className="max-w-7xl mx-auto space-y-10 mt-5">

                            {console.log("ipoipoipoipoipo", ipo)}
                            {/* ========================= HEADER AND SUMMARY SECTION ========================= */}
                            <section className="p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl">
                                <div className="flex items-center space-x-4 mb-4">
                                    {ipo.logo && (
                                        <img
                                            src={ipo.logo}
                                            alt={`${gmpData.matched_item.name} Logo`}
                                            className="w-14 h-14 rounded-full object-contain border p-0.5 border-slate-300 dark:border-slate-700"
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/56x56/0d9488/ffffff?text=AMC"; }}
                                        />
                                    )}
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                        {gmpData.matched_item.name} IPO Financial & Issue Overview
                                    </h2>
                                </div>

                                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b pb-3 mb-4 border-slate-100 dark:border-slate-800">
                                    Key Dates, Price Band, and Issue Details
                                </p>

                                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {ipo.summary?.map((line, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <span className="text-emerald-500 font-bold mt-1 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                            </span>
                                            <span dangerouslySetInnerHTML={{ __html: line }} />
                                        </li>
                                    ))}
                                </ul>
                            </section>


                            {/* ========================= TOP CARDS (Key Metrics) ========================= */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                                {ipo.topCards?.map((card, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200
                            dark:border-slate-800 shadow-md transition-shadow duration-300 hover:shadow-lg"
                                    >
                                        <p className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap mb-1">{card.title}</p>
                                        <p className="text-lg font-bold text-slate-900 dark:text-white break-words">
                                            {card.value}
                                        </p>
                                    </div>
                                ))}
                            </div>


                            <div className="space-y-10">

                                {/* ========================= IPO DETAILS TABLE ========================= */}
                                <section className="p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl">
                                    <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                                        {gmpData.matched_item.name} IPO – Key Issue Details
                                    </h2>

                                    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                        <table className="w-full text-sm">
                                            <thead className="bg-slate-100 dark:bg-slate-800">
                                                <tr className="text-left font-semibold text-slate-700 dark:text-slate-300">
                                                    <th className="py-2 px-4">Category</th>
                                                    <th className="py-2 px-4">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(ipo.ipoDetails).map(([label, val], i) => (
                                                    <tr key={i} className="border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                                        <td className="py-2 px-4 font-medium text-slate-700 dark:text-slate-300 w-1/2 sm:w-1/3">{formatIpoDetailKey(label)}</td>
                                                        <td className="py-2 px-4 text-slate-900 dark:text-white">{val || "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                                    {/* ========================= LEFT : IPO ALLOCATION ========================= */}
                                    <section className="lg:col-span-1 p-6 rounded-xl border bg-white 
      dark:bg-slate-900 dark:border-slate-800 shadow-xl">

                                        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                                            IPO Allocation Breakdown
                                        </h2>

                                        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                            <table className="w-full text-sm">
                                                <thead className="bg-slate-100 dark:bg-slate-800">
                                                    <tr className="text-left font-semibold text-slate-700 dark:text-slate-300">
                                                        <th className="py-2 px-4">Investor Category</th>
                                                        <th className="py-2 px-4">Shares / Portion</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {allocationDetails.map((key, i) => (
                                                        <tr
                                                            key={i}
                                                            className="border-b dark:border-slate-700 
              hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                                                        >
                                                            <td
                                                                className={`py-2 px-4 
                ${key.startsWith("−") ? "pl-8 font-normal" : "font-medium"} 
                text-slate-700 dark:text-slate-300`}
                                                            >
                                                                {formatIpoDetailKey(key)}
                                                            </td>

                                                            <td className="py-2 px-4 text-slate-900 dark:text-white font-mono">
                                                                {ipo.ipoDetails[key] || "-"}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* ========================= RIGHT : LOT SIZE ========================= */}
                                    {ipo.lotSize?.length > 0 && (
                                        <section className="lg:col-span-1 p-6 rounded-xl border bg-white 
        dark:bg-slate-900 dark:border-slate-800 shadow-xl">

                                            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                                                IPO Lot Size
                                            </h2>

                                            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                                <table className="w-full text-sm">
                                                    <thead className="bg-slate-100 dark:bg-slate-800">
                                                        <tr className="text-left font-semibold text-slate-700 dark:text-slate-300">
                                                            <th className="py-2 px-3">Category</th>
                                                            <th className="py-2 px-3 text-right">Lots</th>
                                                            <th className="py-2 px-3 text-right">Shares</th>
                                                            <th className="py-2 px-3 text-right">Amount</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {ipo.lotSize.map((item, i) => (
                                                            <tr
                                                                key={i}
                                                                className="border-b dark:border-slate-700 
                hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                                                            >
                                                                <td className="py-2 px-3 font-medium text-slate-700 dark:text-slate-300">
                                                                    {item.application}
                                                                </td>

                                                                <td className="py-2 px-3 text-right">
                                                                    {item.lots}
                                                                </td>

                                                                <td className="py-2 px-3 text-right">
                                                                    {item.shares}
                                                                </td>

                                                                <td className="py-2 px-3 text-right font-mono text-emerald-600 dark:text-emerald-400">
                                                                    {item.amount}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </section>
                                    )}

                                </div>




                                {/* ========================= FINANCIAL PERFORMANCE TABLE (Dynamic) ========================= */}
                                {ipo.financials?.length > 0 && (
                                    <section className="p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl">
                                        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Historical Financial Performance (₹ Crores)</h2>

                                        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                            <table className="w-full text-sm min-w-[700px]">
                                                <thead className="bg-slate-100 dark:bg-slate-800 text-center">
                                                    <tr className="font-semibold text-slate-700 dark:text-slate-300">
                                                        <th className="py-3 px-3 text-left border-r border-slate-200 dark:border-slate-700">Metric</th>
                                                        {/* Dynamic Years from newest to oldest */}
                                                        {financialYears.map((year, idx) => (
                                                            <th key={idx} className={`py-3 px-3 border-r border-slate-200 dark:border-slate-700 ${idx === 0 ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>
                                                                {year.includes('Mar') ? year.replace('31 Mar ', 'FY ') : year.replace('30 Sep ', 'H1 ')}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {financialRows}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>
                                )}


                                {/* <section className="p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl"> */}
                                <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Key Financial Ratios & Indicators (Latest)</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Ratios Table (Left Column) */}
                                    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                        <table className="w-full text-sm">
                                            <thead className="bg-slate-100 dark:bg-slate-800 text-left">
                                                <tr className="font-semibold text-slate-700 dark:text-slate-300">
                                                    <th className="py-2 px-4">Valuation Ratio</th>
                                                    <th className="py-2 px-4">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {keyRatios.map((ratio, i) => (
                                                    <tr key={i} className="border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                                        <td className={`py-2 px-4 font-medium text-slate-700 dark:text-slate-300`}>{ratio.label}</td>
                                                        <td className={`py-2 px-4 font-semibold ${ratio.color}`}>
                                                            {ratio.prefix || ""}{kpiLookup[ratio.key] || "-"}{ratio.suffix || ""}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Additional Financials Table (Right Column) */}
                                    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                        <table className="w-full text-sm">
                                            <thead className="bg-slate-100 dark:bg-slate-800 text-left">
                                                <tr className="font-semibold text-slate-700 dark:text-slate-300">
                                                    <th className="py-2 px-4">Balance Sheet Indicator</th>
                                                    <th className="py-2 px-4">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {additionalFinancials.map((financial, i) => (
                                                    <tr key={i} className="border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                                        <td className="py-2 px-4 font-medium text-slate-700 dark:text-slate-300">{financial.label}</td>
                                                        <td className="py-2 px-4 font-semibold text-slate-900 dark:text-white">
                                                            ₹{ipo.ipoDetails[financial.key]} Cr
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* </section> */}



                                {/* ========================= IPO Timeline and Contact (Retained) ========================= */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                                    {/* IPO Timeline */}
                                    <div className="lg:col-span-2 p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl">
                                        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white border-b pb-3">
                                            IPO Key Dates
                                        </h3>
                                        <div className="space-y-3">
                                            {Object.entries(ipo.timeline || {}).map(([key, value], idx) => (
                                                <div key={idx} className="flex justify-between items-start text-sm border-l-2 pl-3 border-emerald-500/50">
                                                    <span className="font-medium text-slate-600 dark:text-slate-300 w-2/3">{key}</span>
                                                    <span className={`text-right w-1/3 font-semibold ${key.includes('Listing') ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Registrar Contact */}
                                    <div className="p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl">
                                        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white border-b pb-3">
                                            Registrar Details
                                        </h3>
                                        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                            <p className="font-bold text-lg text-slate-900 dark:text-white">{ipo.registrar.name}</p>
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                <a href={`mailto:${ipo.registrar.email}`} className="hover:underline">{ipo.registrar.email}</a>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                                <span>{ipo.registrar.phone.split(',,')[0]}</span>
                                            </div>
                                            <div className="pt-2">
                                                <a href={ipo.registrar.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-indigo-500 hover:text-indigo-400 hover:underline">
                                                    Visit Registrar Website &rarr;
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* ========================= SEO-FRIENDLY ANALYSIS (Retained) ========================= */}
                                <section className="p-6 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800 shadow-xl">
                                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                        Investment Thesis: Financial Analysis
                                    </h3>

                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        The financial data for
                                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                            {" "}{gmpData.matched_item.name}
                                        </span> clearly shows strong operational efficiency. The company has demonstrated robust growth across key balance sheet items, notably
                                        <strong className="text-blue-500"> Assets</strong> (Latest: ₹{ipo.ipoDetails["Assets"]} Cr) and
                                        <strong className="text-blue-500"> Net Worth</strong> (Latest: ₹{ipo.ipoDetails["NET Worth"]} Cr).
                                        A core strength is the exceptional
                                        <strong className="text-emerald-600 dark:text-emerald-400"> Return on Equity (ROE) of {kpiLookup["ROE"]}</strong>, indicating superior capital utilization by the management. The post-IPO P/E ratio stands at {kpiLookup["P/E (x) (Post IPO)"]}, offering a competitive valuation relative to the sector's growth potential.
                                    </p>

                                    <p className="text-sm mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                        The transition in promoter holding from 100% (Pre IPO) to {kpiLookup["Promoter Holding (Post IPO)"]} (Post IPO) is typical for an Offer for Sale (OFS) and signals compliance with listing requirements.
                                        With strong earnings per share ({kpiLookup["EPS Rs (Post IPO)"]} Post IPO), healthy EBITDA (Latest: ₹{ipo.ipoDetails["EBITDA"]} Cr), and a stable AMC industry outlook, the IPO is fundamentally strong for both <strong className="text-indigo-500">listing gains</strong> and <strong className="text-indigo-500">long-term investment</strong>.
                                    </p>
                                </section>

                                {/* ------------- */}
                            </div>
                        </div>
                    </div>
                )}

                {/* ======================================
                    TAB: GMP VIEW
                ====================================== */}
                {tab === "gmp" && (
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* LEFT – GMP TABLE */}
                        <div className="lg:col-span-2 py-6 px-3 rounded-xl border border-slate-200 bg-white 
                                dark:bg-slate-900 dark:border-slate-800">

                            <h2 className="text-xl font-semibold mb-4">
                                GMP – Daily Price Trend & Listing Estimate
                            </h2>

                            {/* TABLE */}
                            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100 dark:bg-slate-800">
                                        <tr className="text-center text-xs">
                                            <th className="py-2 px-3">GMP Date</th>
                                            <th className="py-2 px-3">IPO Price</th>
                                            <th className="py-2 px-3">GMP</th>
                                            <th className="py-2 px-3">Sub2 Sauda</th>
                                            <th className="py-2 px-3">Est. Listing</th>
                                            <th className="py-2 px-3">Profit</th>
                                            <th className="py-2 px-3">Updated</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {gmpData.table?.map((row, i) => {
                                            const isUp = row.movement === "up";
                                            const isDown = row.movement === "down";

                                            return (
                                                <tr key={i} className="text-center border-b dark:border-slate-800">
                                                    <td className="py-3">{row.date}</td>
                                                    <td className="py-3 font-medium">₹{row.ipo_price}</td>

                                                    <td className={`py-3 font-semibold flex items-center justify-center gap-1 
                                                            ${isUp ? "text-emerald-600" : isDown ? "text-red-500" : ""}`}>
                                                        {row.gmp}
                                                        {isUp && "▲"}
                                                        {isDown && "▼"}
                                                    </td>

                                                    <td className="py-3">{row.sub2 || "--"}</td>
                                                    <td className="py-3 font-semibold">₹{row.estimated_listing_price}</td>

                                                    <td className={`py-3 font-semibold 
                                                            ${row.estimated_profit >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                                                        ₹{row.estimated_profit}
                                                    </td>

                                                    <td className="py-3 text-slate-500 dark:text-slate-400">
                                                        {row.last_updated || row.date}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-xs text-slate-500 mt-3">
                                * GMP values are unofficial & vary daily.
                            </p>
                        </div>

                        {/* RIGHT – CHART + TIMELINE STACK */}
                        <div className="space-y-6">

                            {/* GMP CHART */}
                            {gmpData.chart?.length > 0 && (
                                <div className="bg-white dark:bg-slate-900 border rounded-xl p-4 shadow-sm">

                                    <h3 className="text-lg font-semibold mb-4">GMP Trend Chart</h3>

                                    <div className="w-full h-80 relative">

                                        {/* X Label */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-slate-500">
                                            Trendwise Date
                                        </div>

                                        {/* Y Label */}
                                        <div className="absolute -left-6 top-1/2 -rotate-90 text-xs text-slate-500">
                                            GMP Value (₹)
                                        </div>

                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart
                                                data={[...gmpData.chart].reverse()}
                                                margin={{ left: -10, right: 20, top: 10, bottom: 30 }}
                                            >
                                                <CartesianGrid strokeDasharray="4 4" />

                                                <XAxis
                                                    dataKey="date"
                                                    interval={0}
                                                    tick={{ fontSize: 10 }}
                                                    angle={-25}
                                                    dy={18}
                                                />

                                                <YAxis tick={{ fontSize: 10 }} />

                                                <Tooltip />

                                                <defs>
                                                    <linearGradient id="gmpGradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.6} />
                                                        <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>

                                                <Area
                                                    type="monotone"
                                                    dataKey="gmp"
                                                    stroke="#06b6d4"
                                                    strokeWidth={3}
                                                    fill="url(#gmpGradient)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            )}

                            {/* IMPORTANT DATES */}
                            <div className="bg-white dark:bg-slate-900 border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Important Dates</h3>

                                <ol className="relative border-l dark:border-slate-700">

                                    {[
                                        { label: "Bidding Open", date: gmpData.matched_item.open_date, color: "cyan" },
                                        { label: "Bidding Close", date: gmpData.matched_item.close_date, color: "cyan" },
                                        { label: "Allotment Finalization", date: gmpData.matched_item.boa_date, color: "emerald" },
                                        { label: "Listing Date", date: gmpData.matched_item.listing_date, color: "emerald" },
                                    ].map((item, i) => (
                                        <li key={i} className="mb-6 ml-4">
                                            <div className={`absolute w-3 h-3 bg-${item.color}-500 rounded-full mt-1.5 -left-1.5 
                                                ring-4 ring-${item.color}-200`}></div>

                                            <time className="text-xs text-slate-500">{item.date}</time>
                                            <h4 className="text-sm font-semibold">{item.label}</h4>
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                    </div>
                )}

                {/* ======================================
                    TAB: NEWS VIEW
                ====================================== */}
                {tab === "news" && (
                    <>
                        {/* ---------------- NEWS SECTION ---------------- */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold mb-4">
                                Latest News – {gmpData.matched_item.name} IPO
                            </h2>

                            {/* GRID: 1 on mobile, 2 on tablet/laptop */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {(getNews.news || []).map((news, idx) => {
                                    const formattedDate = new Date(news.published_date).toLocaleString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    });

                                    return (
                                        <div
                                            key={idx}
                                            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 
        bg-white dark:bg-slate-900 
        shadow-sm hover:shadow-lg hover:-translate-y-1 
        transition-all duration-300"
                                        >
                                            {/* TOP — Logo + Meta */}
                                            <div className="flex items-start gap-3 mb-4">

                                                {/* PERFECT LOGO */}
                                                <div className="w-12 h-12 rounded-md bg-white dark:bg-slate-800 
            border border-slate-200 dark:border-slate-700 
            flex items-center justify-center overflow-hidden p-1">
                                                    <img
                                                        src={gmpData.logo || "/no-logo.png"}
                                                        alt="logo"
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                </div>

                                                <div className="flex flex-col">
                                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                                                        {formattedDate}
                                                    </span>
                                                    <span className="text-xs text-slate-500 dark:text-slate-500">
                                                        {news.source_name}
                                                    </span>
                                                </div>

                                            </div>

                                            {/* TITLE */}
                                            <h3 className="text-lg font-semibold leading-snug">
                                                {news.name}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                                                {news.description?.slice(0, 180)}...
                                            </p>

                                            {/* LINK */}
                                            <a
                                                href={news.link}
                                                target="_blank"
                                                className="inline-flex items-center gap-1 mt-4 text-emerald-600 
        dark:text-emerald-400 font-semibold text-sm hover:underline"
                                            >
                                                Read Full News →
                                            </a>
                                        </div>

                                    );
                                })}
                            </div>
                        </div>

                        {/* ---------------- ALERTS ---------------- */}

                        <div className="mt-5">
                            <h2 className="text-xl font-semibold mb-4">
                                IPO Alerts – Important Announcements
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {(getNews.alerts || []).map((alert, idx) => {
                                    const formattedDate = new Date(alert.posted_date).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    });

                                    return (
                                        <div
                                            key={idx}
                                            className="p-6 rounded-2xl border border-yellow-300 bg-yellow-50 
        dark:bg-yellow-900/20 dark:border-yellow-900 
        shadow-sm hover:shadow-lg hover:-translate-y-1 
        transition-all duration-300"
                                        >
                                            <p className="text-xs text-yellow-700 dark:text-yellow-300 mb-1">
                                                Posted on {formattedDate}
                                            </p>

                                            <h3 className="text-lg font-semibold text-yellow-200 dark:text-yellow-200 leading-snug">
                                                {alert.name}
                                            </h3>

                                            <div
                                                className="mt-2 text-yellow-800 dark:text-yellow-300 text-sm leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: alert.description }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </>


                )}

                {/* DISCLAIMER */}
                <div className="mt-12 p-6 rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/40">
                    <p className="text-sm font-medium text-red-700 dark:text-red-300">
                        Disclaimer: IPO investments involve risk. GMP values are unofficial and may vary.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IpoDetailView;
