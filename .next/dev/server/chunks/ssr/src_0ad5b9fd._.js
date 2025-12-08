module.exports = [
"[project]/src/components/Layout/ThemeToggle.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Layout/ThemeToggle.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Context$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Context/ThemeContext.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ThemeToggle = ()=>{
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Context$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        children: theme === 'light' ? // Sun Icon (Light Mode - Filled)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-5 h-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.183a.75.75 0 00-1.06-1.06L15.474 6.782a.75.75 0 001.06 1.06l2.36-2.36zM15.474 17.218a.75.75 0 00-1.06 1.06l2.36 2.36a.75.75 0 001.06-1.06l-2.36-2.36zM4.5 15.75a.75.75 0 00.75.75h2.25a.75.75 0 000-1.5H5.25a.75.75 0 00-.75.75zM17.25 12a.75.75 0 00.75.75h2.25a.75.75 0 000-1.5H18a.75.75 0 00-.75.75zM5.25 6a.75.75 0 00.75.75h2.25a.75.75 0 000-1.5H6a.75.75 0 00-.75.75zM12 18a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H12.75a.75.75 0 01-.75-.75zM6.782 15.474a.75.75 0 00-1.06-1.06l-2.36 2.36a.75.75 0 001.06 1.06l-2.36-2.36z"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                lineNumber: 19,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 18,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : // Moon Icon (Dark Mode - Outline)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-5 h-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21.752 15.002A9.718 9.718 0 0112 21.75c-5.523 0-9.999-4.477-9.999-9.999 0-1.285.247-2.522.695-3.655M2.25 6.25l18.498 18.498M18.75 3a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75V4a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75V3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 24,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25a.75.75 0 01.75-.75zM18.75 3a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75V4a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75V3zM12 18a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H12.75a.75.75 0 01-.75-.75zM5.25 4.5a.75.75 0 01.75.75V6a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H12.75a.75.75 0 01-.75-.75zM6.782 15.474a.75.75 0 00-1.06-1.06l-2.36 2.36a.75.75 0 001.06 1.06l-2.36-2.36z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 23,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ThemeToggle;
}),
"[project]/src/data/Data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// data/Data.js
__turbopack_context__.s([
    "BLOG_CATEGORIES",
    ()=>BLOG_CATEGORIES,
    "BLOG_POSTS",
    ()=>BLOG_POSTS,
    "IPO_LIST",
    ()=>IPO_LIST,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "slugify",
    ()=>slugify
]);
const BLOG_CATEGORIES = [
    "Market News",
    "Investing 101",
    "Mutual Funds",
    "IPO Insights",
    "Taxes & Regulations"
];
const BLOG_POSTS = [
    {
        id: 1,
        title: "How to Read an IPO Prospectus (DRHP) Like a Pro",
        category: "IPO Insights",
        date: "2025-11-15",
        readTime: "7 min read",
        author: "Finance Desk",
        excerpt: "Before applying for any IPO, understanding the DRHP is crucial. Here are the 7 key sections you should always check...",
        imageUrl: "https://placehold.co/600x400/10B981/white?text=Prospectus+Deep+Dive",
        content: [
            "The Draft Red Herring Prospectus (DRHP) is the single most important document for any IPO investor. It's essentially the company's declaration to the market, detailing its financials, risks, business model, and future plans. We focus heavily on the 'Risk Factors' section.",
            "**Financial Performance:** Analyze the last three years' revenue, profit after tax (PAT), and debt levels. Look for consistent growth and check for any one-time gains that artificially inflate profits.",
            "**Key Management Personnel (KMP):** Who is running the show? Look at their experience and history. A stable, experienced KMP is a major positive indicator.",
            "**Litigation and Contingent Liabilities:** This section often holds hidden risks. High, unresolved legal cases or significant off-balance sheet liabilities can severely impact future performance.",
            "**Valuation:** Compare the company's asking price (implied by the price band) to its peers. Is it priced fairly, or is the company asking for a premium? Justification is key.",
            "**Use of Proceeds:** Where is the money raised going? Paying off debt (good), or funding operational expenses (less good)? This shows management's priority.",
            "By systematically reviewing these areas, you move from speculating to informed investing."
        ]
    },
    {
        id: 2,
        title: "5 Golden Rules for Long-Term Wealth Creation in Equity Market",
        category: "Investing 101",
        date: "2025-10-20",
        readTime: "6 min read",
        author: "Smart Investor",
        excerpt: "Discipline beats timing. These 5 rules can help you stay on track through market ups and downs...",
        imageUrl: "https://placehold.co/600x400/06B6D4/white?text=Wealth+Creation+Rules",
        content: [
            "**Rule 1: Start Early and Stay Consistent.** The power of compounding works best over long durations. Even small, regular investments started early far outperform large investments started late.",
            "**Rule 2: Diversify, Diversify, Diversify.** Never put all your capital into a single stock or sector. Use mutual funds or ETFs to spread risk across different industries and asset classes.",
            "**Rule 3: Invest in Quality Businesses.** Focus on companies with low debt, high operating margins, and strong competitive advantages (a 'moat'). Time is the friend of the good business.",
            "**Rule 4: Control Your Emotions.** The biggest enemy of the average investor is panic selling during a downturn and greed-buying during a rally. Stick to your asset allocation plan, regardless of market noise.",
            "**Rule 5: Keep Costs Low.** Expense ratios, brokerage fees, and unnecessary transaction costs eat into long-term returns. Favor low-cost funds and avoid excessive trading."
        ]
    },
    {
        id: 3,
        title: "Upcoming IPOs to Watch This Quarter",
        category: "Market News",
        date: "2025-11-01",
        readTime: "4 min read",
        author: "Research Team",
        excerpt: "A quick look at the most talked‑about IPOs coming in the next few months and what you should track...",
        imageUrl: "https://placehold.co/600x400/D97706/white?text=Upcoming+IPOs+Watch",
        content: [
            "This quarter promises a robust pipeline of new public offerings, primarily in the FinTech and Renewable Energy sectors.",
            "**FinTech Momentum:** Digital payments and lending platforms continue to attract strong investor interest, often commanded by high GMPs. Pay close attention to anchor investor participation, as this signals institutional confidence.",
            "**Renewable Energy:** As the global push for sustainability accelerates, companies specializing in solar component manufacturing and energy storage are hitting the markets. These are long-term plays that require careful assessment of regulatory risk.",
            "**Market Volatility Check:** Given the current global liquidity environment, listing gains are not guaranteed. Use the subscription data (QIB, NII, Retail) to gauge real-time demand."
        ]
    },
    {
        id: 4,
        title: "How IPO Listing Gains are Taxed in India",
        category: "Taxes & Regulations",
        date: "2025-09-12",
        readTime: "5 min read",
        author: "Tax Guide",
        excerpt: "Booked profit in a recent IPO listing? Here's how your gains are actually taxed and how to plan better...",
        imageUrl: "https://placehold.co/600x400/EF4444/white?text=Taxation+Guide",
        content: [
            "In India, the taxation of capital gains from IPOs depends on the holding period after listing:",
            "**Short-Term Capital Gains (STCG):** If you sell the shares within 12 months from the date of allotment (which includes the listing day), the profit is treated as STCG and taxed at a flat rate of 15% (plus cess). This is the most common scenario for those seeking quick listing gains.",
            "**Long-Term Capital Gains (LTCG):** If you hold the shares for more than 12 months, the profit is treated as LTCG. LTCG is tax-exempt up to ₹1,00,000 per financial year. Beyond this limit, LTCG is taxed at 10% (without indexation benefit).",
            "It's essential to consult a tax advisor, as regulations around derivative markets and specific long-term investment schemes can affect your final liability."
        ]
    }
];
const IPO_LIST = [
    {
        id: 1,
        company: "Corona Remedies Ltd",
        symbol: "CORONARM",
        ipoType: "Mainboard",
        openDate: "2025-12-05",
        closeDate: "2025-12-09",
        priceBand: "₹1,050 – ₹1,062",
        lotSize: "14 shares",
        status: "Ongoing",
        gmp: "+₹365 (approx)",
        listingDate: "2025-12-14",
        issueSize: "₹1,500 Cr",
        peRatio: "45x (at upper band)",
        registrar: "Link Intime India Pvt Ltd",
        keyDates: [
            {
                label: "Bidding Open",
                date: "Dec 5"
            },
            {
                label: "Bidding Close",
                date: "Dec 9"
            },
            {
                label: "Allotment Finalization",
                date: "Dec 12"
            },
            {
                label: "Listing Date (Expected)",
                date: "Dec 14"
            }
        ],
        financialSummary: [
            {
                label: "FY24 Revenue",
                value: "₹850 Cr"
            },
            {
                label: "FY24 PAT",
                value: "₹65 Cr"
            },
            {
                label: "Debt/Equity",
                value: "0.45"
            }
        ]
    },
    {
        id: 2,
        company: "XYZ Fintech Services Pvt Ltd",
        symbol: "XYZFIN",
        ipoType: "SME",
        openDate: "2025-12-10",
        closeDate: "2025-12-13",
        priceBand: "₹75 – ₹79",
        lotSize: "1600 shares",
        status: "Upcoming",
        gmp: "TBA",
        listingDate: "TBA",
        issueSize: "₹120 Cr",
        peRatio: "N/A (Loss Making)",
        registrar: "BigShare Services Pvt Ltd",
        keyDates: [
            {
                label: "Bidding Open",
                date: "Dec 10"
            },
            {
                label: "Bidding Close",
                date: "Dec 13"
            },
            {
                label: "Allotment Finalization",
                date: "Dec 16"
            },
            {
                label: "Listing Date (Expected)",
                date: "Dec 18"
            }
        ],
        financialSummary: [
            {
                label: "FY24 Revenue",
                value: "₹55 Cr"
            },
            {
                label: "FY24 PAT",
                value: "-₹8 Cr"
            },
            {
                label: "Debt/Equity",
                value: "0.20"
            }
        ]
    },
    {
        id: 3,
        company: "Alpha Logistics Ltd",
        symbol: "ALPHALOG",
        ipoType: "Mainboard",
        openDate: "2025-11-20",
        closeDate: "2025-11-22",
        priceBand: "₹490 – ₹505",
        lotSize: "29 shares",
        status: "Closed",
        gmp: "+₹70 (listing day)",
        listingDate: "2025-11-28",
        issueSize: "₹850 Cr",
        peRatio: "30x",
        registrar: "KFin Technologies Ltd",
        keyDates: [
            {
                label: "Bidding Open",
                date: "Nov 20"
            },
            {
                label: "Bidding Close",
                date: "Nov 22"
            },
            {
                label: "Allotment Finalization",
                date: "Nov 25"
            },
            {
                label: "Listing Date (Actual)",
                date: "Nov 28"
            }
        ],
        financialSummary: [
            {
                label: "FY24 Revenue",
                value: "₹1,200 Cr"
            },
            {
                label: "FY24 PAT",
                value: "₹40 Cr"
            },
            {
                label: "Debt/Equity",
                value: "0.60"
            }
        ]
    }
];
const NAV_LINKS = [
    {
        label: "Home",
        href: "#hero"
    },
    {
        label: "IPOs",
        href: "#ipos"
    },
    {
        label: "Blogs",
        href: "#blogs"
    },
    {
        label: "Calculators",
        href: "#calculators"
    },
    {
        label: "Newsletter",
        href: "#newsletter"
    }
];
const slugify = (title)=>{
    return title.toLowerCase().trim().replace(/[^\w\s-]/g, '') // Remove all non-word characters (except space/hyphen)
    .replace(/[\s_-]+/g, '-') // Collapse whitespace and underscores/hyphens to a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphen
};
}),
"[project]/src/components/Layout/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Layout/Navbar.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/ThemeToggle.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Navbar = ({ goHome })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        onClick: goHome,
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-black tracking-tight text-emerald-600 dark:text-emerald-400",
                                    children: "₹"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100",
                                        children: "FinIPO Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                        children: "Blogs • IPOs • Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-8 md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "relative transition hover:text-emerald-600 dark:hover:text-emerald-400",
                                        children: [
                                            link.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-200 group-hover:scale-x-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#newsletter",
                                className: "rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                                children: "Get IPO Alerts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen((p)=>!p),
                                className: "inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-800 dark:border-slate-700 dark:text-slate-200",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Toggle navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-4 w-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute inset-x-0 top-0 h-0.5 origin-center rounded-full bg-slate-800 dark:bg-slate-200 transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-slate-800 dark:bg-slate-200 transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                                lineNumber: 69,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute inset-x-0 top-3 h-0.5 origin-center rounded-full bg-slate-800 dark:bg-slate-200 transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                                lineNumber: 74,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/95 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setOpen(false),
                                className: "rounded-lg px-2 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 89,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#newsletter",
                            onClick: ()=>setOpen(false),
                            className: "mt-1 rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                            children: "Get IPO Alerts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Navbar.jsx",
                            lineNumber: 98,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 87,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 86,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout/Navbar.jsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/components/Layout/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Layout/Footer.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-slate-100 py-6 text-[11px] text-slate-600 dark:bg-slate-950 dark:text-slate-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " FinIPO Hub. For education only — not investment advice."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/Footer.jsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "hover:text-slate-800 dark:hover:text-slate-300",
                            children: "Disclaimer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden text-slate-400 sm:inline dark:text-slate-600",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "hover:text-slate-800 dark:hover:text-slate-300",
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden text-slate-400 sm:inline dark:text-slate-600",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-500",
                            children: [
                                "Built with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-500 dark:text-emerald-400",
                                    children: "React"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 22,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)),
                                " &",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-500 dark:text-emerald-400",
                                    children: " Tailwind CSS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/Footer.jsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 7,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/Footer.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/UI/BackButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/UI/BackButton.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const BackButton = ({ onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-4 h-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                }, void 0, false, {
                    fileName: "[project]/src/UI/BackButton.jsx",
                    lineNumber: 10,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/UI/BackButton.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            "Back to Dashboard"
        ]
    }, void 0, true, {
        fileName: "[project]/src/UI/BackButton.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = BackButton;
}),
"[project]/src/components/Modules/BlogDetailView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/BlogDetailView.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/BackButton.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const BlogDetailView = ({ post, goBack })=>{
    console.log("------------", post);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 sm:py-16 bg-slate-50 dark:bg-slate-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClick: goBack
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mt-4 border-b pb-6 border-slate-200 dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: post.date
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: post.readTime
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-slate-600 dark:text-slate-400",
                            children: [
                                "By ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-slate-900 dark:text-slate-50",
                                    children: post.author
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                                    lineNumber: 27,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 w-full overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: post.imageUrl,
                        alt: post.title,
                        className: "w-full h-auto object-cover",
                        onError: (e)=>{
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/800x450/475569/white?text=Blog+Image+Not+Found";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 space-y-6 text-slate-700 dark:text-slate-300",
                    children: post.content.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] leading-relaxed",
                            dangerouslySetInnerHTML: {
                                __html: paragraph
                            }
                        }, index, false, {
                            fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-6 border-t border-slate-200 dark:border-slate-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "We hope this deep dive helps you make better-informed decisions. For more detailed analysis, consider subscribing to our premium alerts."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/BlogDetailView.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlogDetailView;
}),
"[project]/src/UI/ClientBackButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/UI/ClientBackButton.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/BackButton.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ClientBackButton = ()=>{
    // Define the client-side function here
    const handleGoBack = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Note: BackButton must be imported from the correct relative path in your structure:
    // If BackButton is in components/UI/, then the import above is correct.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        onClick: handleGoBack
    }, void 0, false, {
        fileName: "[project]/src/UI/ClientBackButton.jsx",
        lineNumber: 17,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ClientBackButton;
}),
"[project]/src/app/ipo/[...slug]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/blog/[...slug]/page.js
__turbopack_context__.s([
    "default",
    ()=>IpoDetailPageDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogDetailView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/BlogDetailView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$ClientBackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/ClientBackButton.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
async function IpoDetailPageDetail(props) {
    const params = await props.params; // 🔥🔥 MAIN FIX HERE
    console.log("🔥 RESOLVED PARAMS:", params);
    const slugArray = Array.isArray(params.slug) ? params.slug : [];
    console.log("🔥 SLUG ARRAY:", slugArray);
    const id = Number(slugArray[0]);
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPO_LIST"].find((p)=>p.id === id);
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen pt-40 text-center bg-slate-50 dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-red-500",
                children: "404 - Blog Not Found"
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/[...slug]/page.js",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/[...slug]/page.js",
            lineNumber: 38,
            columnNumber: 13
        }, this);
    }
    console.log("postpostpostpost", post);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 dark:bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/ipo/[...slug]/page.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogDetailView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                post: post,
                goBackNode: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$ClientBackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ipo/[...slug]/page.js",
                    lineNumber: 52,
                    columnNumber: 29
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/[...slug]/page.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/ipo/[...slug]/page.js",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ipo/[...slug]/page.js",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_0ad5b9fd._.js.map