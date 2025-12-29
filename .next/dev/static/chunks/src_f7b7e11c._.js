(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Layout/ThemeToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeToggle = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "fb277497b46087b1f0924a8620ae00186187ea7cd3e729cba739782ed9acb428") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb277497b46087b1f0924a8620ae00186187ea7cd3e729cba739782ed9acb428";
    }
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            setMounted(true);
            const saved = localStorage.getItem("theme");
            if (saved) {
                setTheme(saved);
                document.documentElement.classList.toggle("dark", saved === "dark");
                return;
            }
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const systemTheme = prefersDark ? "dark" : "light";
            setTheme(systemTheme);
            document.documentElement.classList.toggle("dark", systemTheme === "dark");
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] !== mounted || $[4] !== theme) {
        t2 = ()=>{
            if (!mounted) {
                return;
            }
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        };
        t3 = [
            theme,
            mounted
        ];
        $[3] = mounted;
        $[4] = theme;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            setTheme(_temp);
        };
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const toggleTheme = t4;
    if (!mounted) {
        let t5;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                suppressHydrationWarning: true,
                className: "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                lineNumber: 72,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        return t5;
    }
    const t5 = `Switch to ${theme === "light" ? "dark" : "light"} mode`;
    let t6;
    if ($[9] !== theme) {
        t6 = theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "17",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 20v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 240
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m4.93 4.93 1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 261
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m17.66 17.66 1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 294
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 12h2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 329
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 12h2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 349
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m6.34 17.66-1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 370
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m19.07 4.93-1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 82,
                    columnNumber: 404
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 82,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "17",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                lineNumber: 82,
                columnNumber: 605
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 82,
            columnNumber: 447
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = theme;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            suppressHydrationWarning: true,
            onClick: toggleTheme,
            className: "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
            "aria-label": t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
};
_s(ThemeToggle, "yLq2oAjmd0cQvIPFJF3D7jVmNBE=");
_c = ThemeToggle;
const __TURBOPACK__default__export__ = ThemeToggle;
function _temp(prev) {
    return prev === "light" ? "dark" : "light";
}
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/Data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Layout/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/ThemeToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Navbar = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "c0f295b81376c45917efcf4846fad2b9fdf2aaa843dfedc8dbfa72f83e39cd4b") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c0f295b81376c45917efcf4846fad2b9fdf2aaa843dfedc8dbfa72f83e39cd4b";
    }
    const { goHome } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#hero");
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>setMounted(true);
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            let lastScroll = 0;
            const handleScroll = ()=>{
                const current = window.scrollY;
                setScrolled(current > 10);
                if (current > lastScroll && current > 80) {
                    setHidden(true);
                } else {
                    setHidden(false);
                }
                lastScroll = current;
            };
            window.addEventListener("scroll", handleScroll);
            return ()=>window.removeEventListener("scroll", handleScroll);
        };
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            const updateActive = ()=>{
                setActive(window.location.hash || "#hero");
            };
            window.addEventListener("hashchange", updateActive);
            updateActive();
            return ()=>window.removeEventListener("hashchange", updateActive);
        };
        t6 = [];
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    if (!mounted) {
        let t7;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed w-full top-0 z-50 backdrop-blur-xl bg-white/0 dark:bg-slate-900/0 h-16"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 85,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[7] = t7;
        } else {
            t7 = $[7];
        }
        return t7;
    }
    const t7 = `
        fixed w-full top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        backdrop-blur-xl
        ${scrolled ? "bg-white/70 dark:bg-slate-950/70 shadow-lg border-b border-slate-200/20 dark:border-slate-800/20" : "bg-transparent border-b border-transparent"}
      `;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40 group-hover:scale-110 transition-transform",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Favicon.svg",
                alt: "logo",
                width: 40,
                height: 40,
                className: "w-[26px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 100,
                columnNumber: 169
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo1.svg",
                    alt: "FinIPO Hub",
                    width: 150,
                    height: 40,
                    className: "w-[140px] group-hover:opacity-80 transition"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 107,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-slate-500 dark:text-slate-400 tracking-wide",
                    children: "Blogs • IPOs • Insights"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 107,
                    columnNumber: 164
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== goHome) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: goHome,
            className: "flex items-center gap-3 group cursor-pointer select-none",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = goHome;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== searchOpen) {
        t11 = ()=>setSearchOpen(!searchOpen);
        $[12] = searchOpen;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: "🔍"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 130,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t11,
            className: "text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const t14 = `
                absolute right-0 top-8 px-3 py-2 w-48 rounded-lg 
                bg-white/90 dark:bg-slate-900/90 shadow-md 
                border border-slate-200 dark:border-slate-700 text-sm
                transition-all duration-300
                ${searchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              `;
    let t15;
    if ($[17] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search IPOs...",
            className: t14
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t14;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t13 || $[20] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t13;
        $[20] = t15;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] !== active) {
        t17 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.href,
                className: "relative group transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${active === link.href ? "text-emerald-500" : ""}`,
                        children: link.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 169,
                        columnNumber: 107
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `
                    absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                    ${active === link.href ? "w-full bg-emerald-500" : "w-0 bg-emerald-500 group-hover:w-full"}
                  `
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 169,
                        columnNumber: 196
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, link.href, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 169,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)));
        $[22] = active;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t17;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#newsletter",
            className: "relative rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-400 transition",
            children: [
                "Get IPO Alerts",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -right-2 -top-2 h-3 w-3 bg-emerald-400 rounded-full animate-ping"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 195,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -right-2 -top-2 h-3 w-3 bg-emerald-600 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 195,
                    columnNumber: 275
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== t16 || $[29] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-10",
            children: [
                t16,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 202,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t16;
        $[29] = t18;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== open) {
        t23 = ()=>setOpen(!open);
        $[32] = open;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    const t24 = open ? "\u2716" : "\u2630";
    let t25;
    if ($[34] !== t23 || $[35] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 md:hidden",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t23,
                    className: "p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition",
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 227,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t23;
        $[35] = t24;
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] !== t10 || $[38] !== t21 || $[39] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
            children: [
                t10,
                t21,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 236,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t10;
        $[38] = t21;
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] !== open) {
        t27 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden border-t bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col px-4 py-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search...",
                        className: "px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 246,
                        columnNumber: 167
                    }, ("TURBOPACK compile-time value", void 0)),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link_0.href,
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70 transition",
                            children: link_0.label
                        }, link_0.href, false, {
                            fileName: "[project]/src/components/Layout/Navbar.jsx",
                            lineNumber: 246,
                            columnNumber: 357
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#newsletter",
                        className: "mt-2 rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition",
                        children: "Get IPO Alerts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 246,
                        columnNumber: 581
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 246,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 246,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = open;
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    if ($[43] !== t26 || $[44] !== t27 || $[45] !== t7) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t7,
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t26;
        $[44] = t27;
        $[45] = t7;
        $[46] = t28;
    } else {
        t28 = $[46];
    }
    return t28;
};
_s(Navbar, "I9X5Uslqu+fIS5nfdZOYIJFpY6g=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f7b7e11c._.js.map