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
    // const {  toggleTheme } = useTheme();
    // Initialize theme from localStorage or default to 'dark'
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        try {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
        } catch (e) {
            console.error("Could not access localStorage for theme.", e);
        }
        // Check system preference if localStorage fails or is empty
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Apply theme class to the document root element
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
        // Persist theme preference
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.error("Could not save theme to localStorage.", e);
        }
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme === 'light' ? 'dark' : 'light');
    };
    // console.log("toggleTheme",toggleTheme)
    console.log("theme", theme);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        children: theme === 'light' ? // Sun Icon (Light Mode - Filled)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "17",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "lucide lucide-sun-icon lucide-sun",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 240
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 272
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 20v2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 292
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m4.93 4.93 1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 313
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m17.66 17.66 1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 346
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 12h2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 381
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 12h2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 401
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m6.34 17.66-1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 422
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m19.07 4.93-1.41 1.41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                    lineNumber: 64,
                    columnNumber: 456
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 64,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : // Moon Icon (Dark Mode - Outline)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "17",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "lucide lucide-moon-icon lucide-moon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                lineNumber: 68,
                columnNumber: 242
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 68,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
        lineNumber: 57,
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
"[project]/src/components/Modules/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/Hero.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
;
;
;
const Hero = ()=>{
    // ... (content remains the same, ensure all links are relative)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "border-b border-slate-200/70 bg-gradient-to-b from-white via-white to-slate-50 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Live market insights • IPO tracker"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/Hero.jsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50",
                            children: [
                                "Simplify your",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-cyan-400 dark:to-teal-300",
                                    children: [
                                        " ",
                                        "investing journey"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "with curated financial blogs & IPO research."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/Hero.jsx",
                            lineNumber: 19,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300",
                            children: "FinIPO Hub brings you beginner‑friendly financial content, in‑depth IPO reviews, GMP trends, and market updates — all in one clean, distraction‑free interface."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/Hero.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#ipos",
                                    className: "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                                    children: [
                                        "View IPO Dashboard",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#blogs",
                                    className: "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-emerald-500/60 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-500/60 dark:hover:text-emerald-200",
                                    children: "Read latest blogs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/Hero.jsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 pt-2 text-xs text-slate-500 sm:grid-cols-3 sm:text-[13px] dark:text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-800 dark:text-slate-100",
                                            children: "100% free content"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400",
                                            children: "No paywalls. Learn the basics of investing, IPOs, mutual funds and more."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-800 dark:text-slate-100",
                                            children: "Beginner‑friendly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400",
                                            children: "Simple language, real examples, and clear action points."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-200 bg-white/70 px-3 py-3 dark:border-slate-800 dark:bg-slate-900/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-slate-800 dark:text-slate-100",
                                            children: "IPO focused"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 65,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400",
                                            children: "Track latest, upcoming & recently listed IPOs at a glance."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/Hero.jsx",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/Hero.jsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/Hero.jsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/Hero.jsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-400/50 via-cyan-400/40 to-teal-500/30 opacity-60 blur-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-3xl border border-emerald-500/50 bg-white/95 p-4 shadow-xl shadow-emerald-500/20 dark:border-emerald-400/30 dark:bg-slate-900/95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Live IPO snapshot (demo data)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-slate-100/80 p-3 dark:bg-slate-950/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Company"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                        lineNumber: 84,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GMP • Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 divide-y divide-slate-300/80 text-xs dark:divide-slate-800/80",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPO_LIST"].slice(0, 3).map((ipo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[13px] font-medium text-slate-900 dark:text-slate-100",
                                                                        children: ipo.company
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                                        lineNumber: 94,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                                        children: [
                                                                            ipo.symbol,
                                                                            " • ",
                                                                            ipo.ipoType
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                                        lineNumber: 97,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                                                lineNumber: 93,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] font-semibold text-emerald-600 dark:text-emerald-300",
                                                                        children: ipo.gmp
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                                        children: ipo.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                                                lineNumber: 101,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, ipo.id, true, {
                                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                                lineNumber: 87,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[10px] leading-relaxed text-slate-500",
                                        children: "*All IPO and GMP numbers shown here are for UI demo only and should not be treated as financial advice. Always verify details with your broker / official sources before investing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/Hero.jsx",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/Hero.jsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/Hero.jsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/Hero.jsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/Hero.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/Hero.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/src/components/Modules/IpoSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/IpoSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Assuming IpoDetailView is in Modules, so we pass navigateToDetail down
const IpoFilterBar = ({ selectedStatus, setSelectedStatus, search, setSearch })=>{
    // ... (Filter Bar logic)
    const IPO_STATUSES = [
        "All",
        "Ongoing",
        "Upcoming",
        "Closed"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-950/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 text-xs sm:text-[13px]",
                children: IPO_STATUSES.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedStatus(status),
                        className: `rounded-full px-3 py-1 font-medium transition ${selectedStatus === status ? "bg-emerald-500 text-emerald-950" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"}`,
                        children: status
                    }, status, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100/80 px-3 py-1.5 text-xs text-slate-700 sm:text-[13px] dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500 dark:text-slate-400",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search by company or symbol...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "w-full bg-transparent text-xs outline-none placeholder:text-slate-500 sm:max-w-xs sm:text-[13px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const IpoTable = ({ ipos, navigateToDetail })=>{
    if (!ipos.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400",
            children: "No IPOs found for the selected filters."
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 45,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    const getGmpColor = (gmp)=>{
        if (gmp && gmp.includes('+')) return 'text-emerald-600 dark:text-emerald-400';
        if (gmp && gmp.includes('-')) return 'text-red-600 dark:text-red-400';
        return 'text-slate-600 dark:text-slate-300';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        children: ipos.map((ipo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/ipo/${ipo.id}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugify"])(ipo.company)}`,
                // We keep the class names on the Link component itself
                className: "rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:border-emerald-500/50 hover:shadow-emerald-500/20 cursor-pointer dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-slate-950/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[15px] font-semibold text-slate-900 dark:text-slate-50",
                        children: ipo.company
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] text-slate-500 dark:text-slate-400 mb-2",
                        children: [
                            ipo.symbol,
                            " • ",
                            ipo.ipoType
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[12px] text-slate-700 space-y-1 dark:text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 dark:text-slate-400",
                                        children: "Open:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                        lineNumber: 71,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    ipo.openDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 dark:text-slate-400",
                                        children: "Close:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                        lineNumber: 72,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    ipo.closeDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 dark:text-slate-400",
                                        children: "Price Band:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                        lineNumber: 73,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    ipo.priceBand
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 dark:text-slate-400",
                                        children: "Lot Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                        lineNumber: 74,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    ipo.lotSize
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[12px] font-semibold ${getGmpColor(ipo.gmp)}`,
                                children: ipo.gmp
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${ipo.status === "Ongoing" ? "bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/40 dark:text-emerald-300" : ipo.status === "Upcoming" ? "bg-cyan-500/10 text-cyan-600 ring-1 ring-cyan-500/40 dark:text-cyan-300" : "bg-slate-200/50 text-slate-600 ring-1 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300 dark:ring-slate-500/40"}`,
                                children: ipo.status
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, ipo.id, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 59,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 57,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const IpoSection = ({ navigateToDetail })=>{
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredIpos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPO_LIST"].filter((ipo)=>{
        const statusMatch = selectedStatus === "All" || ipo.status === selectedStatus;
        const query = search.toLowerCase();
        const searchMatch = !query || ipo.company.toLowerCase().includes(query) || ipo.symbol.toLowerCase().includes(query);
        return statusMatch && searchMatch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ipos",
        className: "border-b border-slate-200/70 bg-slate-50 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50",
                                    children: "IPO dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 max-w-xl text-sm text-slate-600 dark:text-slate-400",
                                    children: "Track latest, upcoming and recently closed IPOs. Data below is sample only – connect with an external API or your backend to make it 100% live."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-500 sm:text-xs",
                            children: "Tip: Click any card for detailed dates and financials."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoFilterBar, {
                            selectedStatus: selectedStatus,
                            setSelectedStatus: setSelectedStatus,
                            search: search,
                            setSearch: setSearch
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
                            ipos: filteredIpos,
                            navigateToDetail: navigateToDetail
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 118,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 114,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IpoSection;
}),
"[project]/src/components/Modules/BlogSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/BlogSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// FIX: Correct path up two levels to reach the data folder
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const BlogFilters = ({ activeCategory, setActiveCategory })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2 text-xs sm:text-[13px]",
        children: [
            "All",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLOG_CATEGORIES"]
        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveCategory(cat),
                className: `rounded-full px-3 py-1 font-medium transition ${activeCategory === cat ? "bg-emerald-500 text-emerald-950" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"}`,
                children: cat
            }, cat, false, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BlogPostCard = ({ post })=>{
    return(// Link to the SEO-friendly Catch-All route
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/blog/${post.id}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugify"])(post.title)}`,
        className: "group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-0 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-emerald-500/20 cursor-pointer dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-slate-950/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: post.imageUrl,
                        alt: `Featured image for ${post.title}`,
                        className: "w-full h-40 object-cover rounded-t-2xl transition duration-300 group-hover:scale-105",
                        onError: (e)=>{
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x400/475569/white?text=Blog+Image";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-0 right-0 m-2 rounded-full bg-slate-950/70 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm",
                        children: post.readTime
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300",
                                children: post.category
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: post.date
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "By ",
                                    post.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[15px] font-semibold leading-snug text-slate-900 dark:text-slate-50",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] leading-relaxed text-slate-600 dark:text-slate-400",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 51,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-4 pt-0 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "Read More"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 group-hover:text-emerald-700 dark:text-emerald-300 dark:group-hover:text-emerald-200",
                        children: [
                            "View Details",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transition-transform group-hover:translate-x-0.5",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 70,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, post.id, true, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 32,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
};
const BlogSection = ()=>{
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const filteredPosts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BLOG_POSTS"].filter((post)=>{
        if (activeCategory === "All") return true;
        return post.category === activeCategory;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "blogs",
        className: "border-b border-slate-200/70 bg-slate-50 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50",
                                    children: "Financial blogs & learning hub"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 max-w-xl text-sm text-slate-600 dark:text-slate-400",
                                    children: "Short, practical articles on investing basics, IPO investing strategies, market psychology, and tax planning."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogFilters, {
                            activeCategory: activeCategory,
                            setActiveCategory: setActiveCategory
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 98,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                    children: filteredPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogPostCard, {
                            post: post
                        }, post.id, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 116,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 97,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 93,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlogSection;
}),
"[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Calculators/CalculatorUtils.jsx
__turbopack_context__.s([
    "DoughnutChart",
    ()=>DoughnutChart,
    "InputGroup",
    ()=>InputGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const DoughnutChart = ({ invested, returns, investedColor, returnsColor })=>{
    const total = invested + returns;
    const investedPercent = total > 0 ? invested / total * 100 : 50;
    const returnsPercent = total > 0 ? returns / total * 100 : 50;
    const baseInvestedColor = investedColor || '#10B981'; // Default Emerald
    const baseReturnsColor = returnsColor || '#06B6D4'; // Default Cyan
    const emptyColor = '#475569'; // Slate 600
    const style = {
        background: `conic-gradient(
            ${baseInvestedColor} 0% ${investedPercent}%,
            ${baseReturnsColor} ${investedPercent}%,
            ${emptyColor} ${investedPercent + returnsPercent}% 100%
        )`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-40 w-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: style,
                        className: "h-full w-full rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-4 rounded-full bg-slate-50 dark:bg-slate-900"
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex space-x-4 text-xs font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-slate-700 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-1 h-2.5 w-2.5 rounded-full",
                                style: {
                                    backgroundColor: baseInvestedColor
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Invested"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-slate-700 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-1 h-2.5 w-2.5 rounded-full",
                                style: {
                                    backgroundColor: baseReturnsColor
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Returns"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const InputGroup = ({ label, value, setter, min, max, unit, accentColor, step = 1, placeholder = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: label,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: accentColor,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                id: label,
                                value: value,
                                onChange: (e)=>setter(e.target.value),
                                placeholder: placeholder || min,
                                className: "w-20 text-right bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500",
                                min: min,
                                max: max,
                                step: step
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value || min,
                onChange: (e)=>setter(e.target.value),
                className: `w-full h-1 rounded-lg appearance-none cursor-pointer range-slider-${label.replace(/\s/g, '-')}`,
                style: {
                    '--range-color': accentColor.includes('emerald') ? '#10B981' : accentColor.includes('cyan') ? '#06B6D4' : accentColor.includes('fuchsia') ? '#D946EF' : accentColor.includes('purple') ? '#A855F7' : accentColor.includes('indigo') ? '#4F46E5' : accentColor.includes('orange') ? '#F97316' : accentColor.includes('pink') ? '#EC4899' : accentColor.includes('teal') ? '#14B8A6' : accentColor.includes('red') ? '#EF4444' : accentColor.includes('amber') ? '#F59E0B' : '#10B981'
                }
            }, void 0, false, {
                fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/UI/Utility.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/UI/Utility.js
__turbopack_context__.s([
    "formatRupee",
    ()=>formatRupee
]);
const formatRupee = (value)=>{
    // Ensure value is a safe number (NaN, null, undefined check)
    if (typeof value !== 'number' || isNaN(value)) {
        value = 0;
    }
    // Only return currency for non-negative or very large numbers that are clearly numeric output
    if (value < 0 && value > -9000000) {
        // Handles negative output safely
        return `−₹ ${Math.abs(value).toLocaleString('en-IN', {
            maximumFractionDigits: 0
        })}`;
    }
    return `₹ ${value.toLocaleString('en-IN', {
        maximumFractionDigits: 0
    })}`;
};
}),
"[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Calculators/SubCalculators/SIPCalculator.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SIPCalculator = ()=>{
    const [monthlyInvestment, setMonthlyInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const P = Number(monthlyInvestment);
    const R = Number(rate);
    const Y = Number(years);
    const { totalInvested, totalEarnings, calculatedFV } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (P <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInvested: 0,
                totalEarnings: 0,
                calculatedFV: 0
            };
        }
        const r = R / 100 / 12; // Monthly rate
        const n = Y * 12; // Total months
        // Future Value of Annuity Due formula (Investment at start of month)
        // FV = P * [ ((1+r)^n - 1) / r ] * (1+r)
        const calculatedFV = P * ((Math.pow(1 + r, n) - 1) / r * (1 + r));
        const totalInvested = P * Y * 12;
        const totalEarnings = calculatedFV - totalInvested;
        return {
            totalInvested,
            totalEarnings,
            calculatedFV
        };
    }, [
        P,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "SIP Calculator (मासिक निवेश योजना) 📈"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Monthly Investment",
                                value: monthlyInvestment,
                                setter: setMonthlyInvestment,
                                min: 1000,
                                max: 100000,
                                unit: "₹",
                                placeholder: "10000",
                                accentColor: "text-emerald-600 dark:text-emerald-400",
                                step: 100
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Expected Annual Return",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 30,
                                unit: "%",
                                placeholder: "12",
                                accentColor: "text-emerald-600 dark:text-emerald-400",
                                step: 0.1
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time Period",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 50,
                                unit: "Yrs",
                                placeholder: "10",
                                accentColor: "text-emerald-600 dark:text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                            invested: totalInvested,
                            returns: totalEarnings > 0 ? totalEarnings : 0,
                            investedColor: "#10B981",
                            returnsColor: "#06B6D4"
                        }, void 0, false, {
                            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold text-emerald-700 dark:text-emerald-300",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Future Value"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Invested"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-cyan-600 dark:text-cyan-400",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalEarnings > 0 ? totalEarnings : 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Earnings"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SIPCalculator;
}),
"[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LumpsumCalculator = ()=>{
    const [lumpsum, setLumpsum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const P = Number(lumpsum);
    const R = Number(rate);
    const Y = Number(years);
    const { totalInvested, totalEarnings, calculatedFV } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (P <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInvested: 0,
                totalEarnings: 0,
                calculatedFV: 0
            };
        }
        const r = R / 100;
        const n = Y;
        const calculatedFV = P * Math.pow(1 + r, n);
        const totalInvested = P;
        const totalEarnings = calculatedFV - P;
        return {
            totalInvested,
            totalEarnings,
            calculatedFV
        };
    }, [
        P,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "Lumpsum Calculator (एकमुश्त निवेश)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Initial Investment",
                                value: lumpsum,
                                setter: setLumpsum,
                                min: 1000,
                                max: 1000000,
                                unit: "₹",
                                placeholder: "100000",
                                accentColor: "text-cyan-600 dark:text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Expected Annual Return",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 30,
                                unit: "%",
                                placeholder: "15",
                                accentColor: "text-cyan-600 dark:text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time Period",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 50,
                                unit: "Yrs",
                                placeholder: "5",
                                accentColor: "text-cyan-600 dark:text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                            invested: totalInvested,
                            returns: totalEarnings > 0 ? totalEarnings : 0,
                            investedColor: "#06B6D4",
                            returnsColor: "#10B981"
                        }, void 0, false, {
                            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold text-cyan-700 dark:text-cyan-300",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Future Value"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Invested"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-emerald-600 dark:text-emerald-400",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalEarnings > 0 ? totalEarnings : 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Earnings"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 79,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
        lineNumber: 32,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LumpsumCalculator;
}),
"[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const IpoProfitCalculator = ()=>{
    const [allotmentLots, setAllotmentLots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [lotSize, setLotSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [issuePrice, setIssuePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [listingPrice, setListingPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const L = Number(allotmentLots);
    const S = Number(lotSize);
    const I = Number(issuePrice);
    const T = Number(listingPrice);
    const { totalInvestment, profitAmount, gainPercentage, profitColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (L <= 0 || S <= 0 || I <= 0 || T <= 0) {
            return {
                totalInvestment: 0,
                profitAmount: 0,
                gainPercentage: 0,
                profitColor: 'text-slate-600 dark:text-slate-300'
            };
        }
        const totalShares = L * S;
        const listingGainPerShare = T - I;
        const profitAmount = totalShares * listingGainPerShare;
        const totalInvestment = L * S * I;
        const gainPercentage = totalInvestment > 0 ? profitAmount / totalInvestment * 100 : 0;
        const color = profitAmount > 0 ? 'text-emerald-600 dark:text-emerald-400' : profitAmount < 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-300';
        return {
            totalInvestment,
            profitAmount,
            gainPercentage,
            profitColor: color
        };
    }, [
        L,
        S,
        I,
        T
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "IPO Profit Estimator (IPO लाभ अनुमानक)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 col-span-2 md:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Lots Allotted",
                                value: allotmentLots,
                                setter: setAllotmentLots,
                                min: 0,
                                max: 10,
                                placeholder: "1",
                                unit: "",
                                accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Lot Size (Shares)",
                                value: lotSize,
                                setter: setLotSize,
                                min: 0,
                                max: 100,
                                placeholder: "14",
                                unit: "",
                                accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Issue Price (₹)",
                                value: issuePrice,
                                setter: setIssuePrice,
                                min: 0,
                                max: 5000,
                                placeholder: "1062",
                                unit: "₹",
                                accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Listing Price (₹)",
                                value: listingPrice,
                                setter: setListingPrice,
                                min: 0,
                                max: 6000,
                                placeholder: "1300",
                                unit: "₹",
                                accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-2 md:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Investment:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                                lineNumber: 48,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900 dark:text-slate-50",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvestment)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Estimated Gain/Loss (%):"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${profitColor}`,
                                                children: [
                                                    gainPercentage.toFixed(2),
                                                    " %"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                        children: "Total Estimated Profit/Loss:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-3xl font-bold mt-1 ${profitColor}`,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(profitAmount)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IpoProfitCalculator;
}),
"[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GoalCalculator = ()=>{
    const [futureValue, setFutureValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const FV = Number(futureValue);
    const R = Number(rate);
    const Y = Number(years);
    const { totalInvestment, totalEarnings, requiredSIP } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (FV <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInvestment: 0,
                totalEarnings: 0,
                requiredSIP: 0
            };
        }
        const r = R / 100 / 12; // Monthly rate
        const n = Y * 12; // Total months
        const requiredSIP = FV * (r / (Math.pow(1 + r, n) - 1)) / (1 + r);
        const totalInvestment = requiredSIP * Y * 12;
        const totalEarnings = FV - totalInvestment;
        return {
            totalInvestment,
            totalEarnings,
            requiredSIP
        };
    }, [
        FV,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "Goal SIP Planner (लक्ष्य SIP योजना)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Target Corpus / Goal Amount",
                                value: futureValue,
                                setter: setFutureValue,
                                min: 10000,
                                max: 10000000,
                                unit: "₹",
                                placeholder: "5000000",
                                accentColor: "text-purple-600 dark:text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Expected Annual Return",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 30,
                                unit: "%",
                                placeholder: "10",
                                accentColor: "text-purple-600 dark:text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time to Goal",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 50,
                                unit: "Yrs",
                                placeholder: "15",
                                accentColor: "text-purple-600 dark:text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                            invested: totalInvestment,
                            returns: totalEarnings > 0 ? totalEarnings : 0,
                            investedColor: "#A855F7",
                            returnsColor: "#10B981"
                        }, void 0, false, {
                            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold text-purple-700 dark:text-purple-300",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(requiredSIP)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Monthly SIP Required"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvestment)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Investment Required"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-purple-600 dark:text-purple-400",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalEarnings > 0 ? totalEarnings : 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Potential Earnings"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GoalCalculator;
}),
"[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const RetirementCalculator = ()=>{
    const [currentAge, setCurrentAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [retirementAge, setRetirementAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentMonthlyExpense, setCurrentMonthlyExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [inflationRate, setInflationRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [withdrawalRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const CA = Number(currentAge);
    const RA = Number(retirementAge);
    const CME = Number(currentMonthlyExpense);
    const IR = Number(inflationRate);
    const { requiredCorpus, estimatedFutureMonthlyExpense, yearsUntilRetirement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const years = RA - CA;
        if (years <= 0 || CME <= 0 || IR <= 0 || RA <= CA) {
            return {
                requiredCorpus: 0,
                estimatedFutureMonthlyExpense: 0,
                yearsUntilRetirement: 0
            };
        }
        const expense = CME;
        const i = IR / 100;
        const w = withdrawalRate / 100;
        const futureMonthlyExpense = expense * Math.pow(1 + i, years);
        const futureAnnualExpense = futureMonthlyExpense * 12;
        const requiredCorpus = futureAnnualExpense / w;
        return {
            requiredCorpus,
            estimatedFutureMonthlyExpense: futureMonthlyExpense,
            yearsUntilRetirement: years
        };
    }, [
        CA,
        RA,
        CME,
        IR,
        withdrawalRate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "Retirement Corpus Calculator (रिटायरमेंट योजना)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Current Age",
                                value: currentAge,
                                setter: setCurrentAge,
                                min: 18,
                                max: 90,
                                placeholder: "30",
                                unit: "Yrs",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Retirement Age",
                                value: retirementAge,
                                setter: setRetirementAge,
                                min: 20,
                                max: 100,
                                placeholder: "60",
                                unit: "Yrs",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Current Monthly Expense",
                                value: currentMonthlyExpense,
                                setter: setCurrentMonthlyExpense,
                                min: 1000,
                                max: 200000,
                                unit: "₹",
                                placeholder: "50000",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Expected Inflation Rate",
                                value: inflationRate,
                                setter: setInflationRate,
                                min: 0,
                                max: 20,
                                unit: "%",
                                placeholder: "6",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Years until Retirement:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                                lineNumber: 51,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900 dark:text-slate-50",
                                                children: [
                                                    yearsUntilRetirement,
                                                    " Years"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Estimated Monthly Expense at Retirement:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                                lineNumber: 55,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-indigo-600 dark:text-indigo-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(estimatedFutureMonthlyExpense)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Safe Withdrawal Rate:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-indigo-600 dark:text-indigo-400",
                                                children: [
                                                    withdrawalRate,
                                                    " %"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                        children: "Required Retirement Corpus:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold mt-1 text-indigo-700 dark:text-indigo-300",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(requiredCorpus)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
        lineNumber: 37,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RetirementCalculator;
}),
"[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const EMICalculator = ()=>{
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const L = Number(loanAmount);
    const R = Number(rate);
    const Y = Number(years);
    const { totalInterest, totalPayment, emi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (L <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInterest: 0,
                totalPayment: 0,
                emi: 0
            };
        }
        const r = R / 100 / 12; // Monthly rate
        const n = Y * 12; // Total months
        // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
        const emi = L * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - L;
        return {
            totalInterest,
            totalPayment,
            emi
        };
    }, [
        L,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "EMI Calculator (मासिक किश्त गणना)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Loan Amount",
                                value: loanAmount,
                                setter: setLoanAmount,
                                min: 10000,
                                max: 5000000,
                                unit: "₹",
                                placeholder: "1000000",
                                accentColor: "text-orange-600 dark:text-orange-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Annual Interest Rate",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 30,
                                unit: "%",
                                placeholder: "8.5",
                                step: 0.1,
                                accentColor: "text-orange-600 dark:text-orange-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Loan Tenure",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 30,
                                unit: "Yrs",
                                placeholder: "20",
                                accentColor: "text-orange-600 dark:text-orange-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                        children: "Monthly EMI:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-orange-700 dark:text-orange-400",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(emi)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Principal:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900 dark:text-slate-50",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(L)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Interest:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-red-600 dark:text-red-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-900 dark:text-slate-50",
                                                children: "Total Payment:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                                lineNumber: 60,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-orange-700 dark:text-orange-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalPayment)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
        lineNumber: 32,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EMICalculator;
}),
"[project]/src/Calculators/SubCalculators/EPFCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const EPFCalculator = ()=>{
    const [salary, setSalary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [employeeContribution, setEmployeeContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12);
    const [employerContribution, setEmployerContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12);
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(8.1); // EPF rate
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const S = Number(salary);
    const R = Number(rate);
    const Y = Number(years);
    const EC = Number(employeeContribution) / 100;
    const TC = Number(employerContribution) / 100;
    const { totalInvested, totalInterest, maturityValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (S <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInvested: 0,
                totalInterest: 0,
                maturityValue: 0
            };
        }
        // Monthly contribution (Employee + Employer) on Basic Salary
        const monthlyContribution = S * (EC + TC);
        const r_monthly = R / 100 / 12; // Monthly rate
        const n_months = Y * 12; // Total months
        // Future Value of Annuity Due (Monthly compounding/contribution)
        const maturityValue = monthlyContribution * ((Math.pow(1 + r_monthly, n_months) - 1) / r_monthly * (1 + r_monthly));
        const totalInvested = monthlyContribution * n_months;
        const totalInterest = maturityValue - totalInvested;
        return {
            totalInvested,
            totalInterest,
            maturityValue
        };
    }, [
        S,
        R,
        Y,
        EC,
        TC
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "EPF Calculator (कर्मचारी भविष्य निधि)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Current Basic Monthly Salary",
                                value: salary,
                                setter: setSalary,
                                min: 10000,
                                max: 100000,
                                unit: "₹",
                                placeholder: "50000",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Employee Contribution",
                                value: employeeContribution,
                                setter: setEmployeeContribution,
                                min: 1,
                                max: 12,
                                unit: "%",
                                placeholder: "12",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Employer Contribution",
                                value: employerContribution,
                                setter: setEmployerContribution,
                                min: 1,
                                max: 12,
                                unit: "%",
                                placeholder: "12",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Years Remaining for Service",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 40,
                                unit: "Yrs",
                                placeholder: "20",
                                accentColor: "text-indigo-600 dark:text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                        children: "Total Contribution (Monthly):"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-indigo-700 dark:text-indigo-400",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(S * (EC + TC))
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Invested:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                                lineNumber: 60,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900 dark:text-slate-50",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Interest:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-emerald-600 dark:text-emerald-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                                lineNumber: 65,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-900 dark:text-slate-50",
                                                children: "Maturity Value:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                                lineNumber: 68,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-indigo-700 dark:text-indigo-300 text-lg",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                                lineNumber: 69,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
        lineNumber: 39,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EPFCalculator;
}),
"[project]/src/Calculators/SubCalculators/FDCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const FDCalculator = ()=>{
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const P = Number(initialInvestment);
    const R = Number(rate);
    const Y = Number(years);
    const { totalInterest, maturityValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (P <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInterest: 0,
                maturityValue: 0
            };
        }
        // Compound quarterly (4 times a year)
        const r = R / 100 / 4;
        const n = Y * 4;
        // Formula for Future Value (Compound Interest): P * (1 + r)^n
        const maturityValue = P * Math.pow(1 + r, n);
        const totalInterest = maturityValue - P;
        return {
            totalInterest,
            maturityValue
        };
    }, [
        P,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "FD Calculator (साधारण फिक्स्ड डिपॉजिट)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Initial Investment (Principal)",
                                value: initialInvestment,
                                setter: setInitialInvestment,
                                min: 1000,
                                max: 1000000,
                                unit: "₹",
                                placeholder: "500000",
                                accentColor: "text-yellow-600 dark:text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Annual Interest Rate",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 15,
                                unit: "%",
                                step: 0.1,
                                placeholder: "7.5",
                                accentColor: "text-yellow-600 dark:text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time Period",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 20,
                                unit: "Yrs",
                                placeholder: "5",
                                accentColor: "text-yellow-600 dark:text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                children: "Maturity Value:"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue)
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-slate-600 dark:text-slate-400",
                                children: [
                                    "Total Interest Earned: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-2",
                                children: "Assumes quarterly compounding."
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
        lineNumber: 33,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FDCalculator;
}),
"[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TaxFDCalculator = ()=>{
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [tenure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5); // Fixed tenure for Tax Saving FD
    const P = Number(initialInvestment);
    const R = Number(rate);
    const { totalInterest, maturityValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (P <= 0 || R <= 0) {
            return {
                totalInterest: 0,
                maturityValue: 0
            };
        }
        // Compound quarterly (4 times a year) for typical FD
        const r = R / 100 / 4;
        const n = tenure * 4;
        // Formula for Future Value (Compound Interest): P * (1 + r)^n
        const maturityValue = P * Math.pow(1 + r, n);
        const totalInterest = maturityValue - P;
        return {
            totalInterest,
            maturityValue
        };
    }, [
        P,
        R,
        tenure
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "Tax Saving FD Calculator (टैक्स सेविंग FD)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Initial Investment",
                                value: initialInvestment,
                                setter: setInitialInvestment,
                                min: 1000,
                                max: 150000,
                                unit: "₹",
                                placeholder: "150000",
                                accentColor: "text-yellow-600 dark:text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Annual Interest Rate",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 15,
                                unit: "%",
                                step: 0.1,
                                placeholder: "7.5",
                                accentColor: "text-yellow-600 dark:text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Tenure (Fixed)",
                                value: tenure,
                                setter: ()=>{},
                                min: 5,
                                max: 5,
                                unit: "Yrs",
                                placeholder: "5",
                                accentColor: "text-yellow-600 dark:text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                children: "Total Maturity Value:"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue)
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-slate-600 dark:text-slate-400",
                                children: [
                                    "Total Interest Earned: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-2",
                                children: "Tax deduction under Section 80C applies only to investment up to ₹1.5 Lakh."
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TaxFDCalculator;
}),
"[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ReverseSIPCalculator = ()=>{
    const [corpus, setCorpus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [monthlyWithdrawal, setMonthlyWithdrawal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const C = Number(corpus);
    const R = Number(rate);
    const W = Number(monthlyWithdrawal);
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (C <= 0 || R <= 0 || W <= 0) return 0;
        const r = R / 100 / 12; // Monthly rate
        // n = log( 1 - (C * r / W) ) / log( 1 / (1 + r) )
        const term1 = C * r;
        const term2 = 1 - term1 / W;
        if (term2 <= 0) return 999; // Essentially infinite or very long
        const n_months = Math.log(term2) / Math.log(1 / (1 + r));
        const n_years = n_months / 12;
        return n_years;
    }, [
        C,
        R,
        W
    ]);
    const formatYear = (value)=>{
        if (value === 0) return '0 Years';
        if (value > 900) return 'Infinite/99+ Years';
        return `${value.toFixed(1)} Years`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "Reverse SIP / SWP Planner (मासिक निकासी योजना)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                lineNumber: 41,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Current Corpus",
                                value: corpus,
                                setter: setCorpus,
                                min: 100000,
                                max: 50000000,
                                unit: "₹",
                                placeholder: "10000000",
                                accentColor: "text-red-600 dark:text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Expected Annual Return",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 30,
                                unit: "%",
                                placeholder: "10",
                                accentColor: "text-red-600 dark:text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Monthly Withdrawal Amount",
                                value: monthlyWithdrawal,
                                setter: setMonthlyWithdrawal,
                                min: 1000,
                                max: 100000,
                                unit: "₹",
                                placeholder: "50000",
                                accentColor: "text-red-600 dark:text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                children: "Corpus will last for:"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-bold mt-1 text-red-700 dark:text-red-300",
                                children: formatYear(years)
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-xs text-slate-500",
                                children: "This assumes consistent withdrawal without inflation adjustment."
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ReverseSIPCalculator;
}),
"[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CAGRCalculator = ()=>{
    const [startValue, setStartValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [endValue, setEndValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const S = Number(startValue);
    const E = Number(endValue);
    const Y = Number(years);
    const cagr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (S <= 0 || E <= 0 || Y <= 0) return 0;
        // CAGR Formula: ((End Value / Start Value) ^ (1 / Years) - 1) * 100
        const result = (Math.pow(E / S, 1 / Y) - 1) * 100;
        return result;
    }, [
        S,
        E,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "CAGR Calculator (चक्रवृद्धि वार्षिक वृद्धि दर)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Starting Investment Value",
                                value: startValue,
                                setter: setStartValue,
                                min: 1,
                                max: 1000000,
                                unit: "₹",
                                placeholder: "100000",
                                accentColor: "text-teal-600 dark:text-teal-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Ending Investment Value",
                                value: endValue,
                                setter: setEndValue,
                                min: 1,
                                max: 2000000,
                                unit: "₹",
                                placeholder: "180000",
                                accentColor: "text-teal-600 dark:text-teal-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time Period",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 50,
                                unit: "Yrs",
                                placeholder: "5",
                                accentColor: "text-teal-600 dark:text-teal-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                children: "Calculated CAGR:"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-bold mt-1 text-teal-700 dark:text-teal-300",
                                children: [
                                    cagr.toFixed(2),
                                    " %"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-xs text-slate-500",
                                children: "Average Annual Growth Rate"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CAGRCalculator;
}),
"[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GoldInvestmentCalculator = ()=>{
    const [currentValue, setCurrentValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const P = Number(currentValue);
    const R = Number(rate);
    const Y = Number(years);
    const { futureValue, totalGain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (P <= 0 || R <= 0 || Y <= 0) {
            return {
                futureValue: 0,
                totalGain: 0
            };
        }
        const r = R / 100;
        const n = Y;
        // FV = P * (1 + r)^n (Simple compounding for asset price growth)
        const futureValue = P * Math.pow(1 + r, n);
        const totalGain = futureValue - P;
        return {
            futureValue,
            totalGain
        };
    }, [
        P,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "Gold Futures Value (सोने का भविष्य मूल्य)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Current Investment Value",
                                value: currentValue,
                                setter: setCurrentValue,
                                min: 1000,
                                max: 10000000,
                                unit: "₹",
                                placeholder: "500000",
                                accentColor: "text-amber-600 dark:text-amber-400",
                                step: 1000
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Expected Annual Growth (CAGR)",
                                value: rate,
                                setter: setRate,
                                min: 1,
                                max: 20,
                                unit: "%",
                                step: 0.1,
                                placeholder: "8.5",
                                accentColor: "text-amber-600 dark:text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time Horizon",
                                value: years,
                                setter: setYears,
                                min: 1,
                                max: 30,
                                unit: "Yrs",
                                placeholder: "10",
                                accentColor: "text-amber-600 dark:text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                                    invested: P,
                                    returns: totalGain > 0 ? totalGain : 0,
                                    investedColor: "#F59E0B",
                                    returnsColor: "#10B981"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Initial Investment:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                                lineNumber: 52,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900 dark:text-slate-50",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(P)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: "Total Estimated Gain:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-emerald-600 dark:text-emerald-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalGain)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                        children: "Estimated Future Value:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold mt-1 text-amber-700 dark:text-amber-300",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(futureValue)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-slate-500",
                                        children: "This calculation assumes the price of gold appreciates uniformly over the time period."
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GoldInvestmentCalculator;
}),
"[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GsecBondCalculator = ()=>{
    const [faceValue, setFaceValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000); // Standard Face Value
    const [couponRate, setCouponRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [maturityYears, setMaturityYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [purchasePrice, setPurchasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000); // Assume at par initially
    const [taxBracket, setTaxBracket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30); // Default high tax bracket
    const FV = Number(faceValue);
    const CR = Number(couponRate) / 100;
    const Y = Number(maturityYears);
    const PP = Number(purchasePrice);
    const TR = Number(taxBracket) / 100;
    const { totalCoupon, taxOnCoupon, capitalGain, netMaturityValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (FV <= 0 || CR <= 0 || Y <= 0 || PP <= 0 || TR < 0) {
            return {
                totalCoupon: 0,
                taxOnCoupon: 0,
                capitalGain: 0,
                netMaturityValue: 0
            };
        }
        // 1. Total Coupon/Interest Income (taxable as ordinary income)
        const annualCoupon = FV * CR;
        const totalCoupon = annualCoupon * Y;
        // 2. Tax on Coupon Income
        const taxOnCoupon = totalCoupon * TR;
        // 3. Capital Gain (The difference between face value received at maturity and purchase price)
        const actualCapitalGain = FV - PP;
        // 4. Net Maturity Value = Face Value + (Total Coupon Income - Tax on Coupon) + Capital Gain (Tax ignored for CG for simplification)
        const netCouponIncome = totalCoupon - taxOnCoupon;
        const netMaturityValue = FV + netCouponIncome + actualCapitalGain;
        return {
            totalCoupon,
            taxOnCoupon,
            capitalGain: actualCapitalGain,
            netMaturityValue
        };
    }, [
        FV,
        CR,
        Y,
        PP,
        TR
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: " G - Sec Bond Planner(सरकारी बॉन्ड) "
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Bond Face Value (Per Bond)",
                                value: faceValue,
                                setter: setFaceValue,
                                min: 100,
                                max: 5000,
                                unit: "₹",
                                placeholder: "1000",
                                accentColor: "text-blue-600 dark:text-blue-400",
                                step: 100
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Annual Coupon Rate",
                                value: couponRate,
                                setter: setCouponRate,
                                min: 1,
                                max: 15,
                                unit: "%",
                                step: 0.1,
                                placeholder: "7.0",
                                accentColor: "text-blue-600 dark:text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Maturity Period",
                                value: maturityYears,
                                setter: setMaturityYears,
                                min: 1,
                                max: 20,
                                unit: "Yrs",
                                placeholder: "10",
                                accentColor: "text-blue-600 dark:text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Purchase Price (Current Price)",
                                value: purchasePrice,
                                setter: setPurchasePrice,
                                min: 100,
                                max: 5000,
                                unit: "₹",
                                placeholder: "980",
                                accentColor: "text-blue-600 dark:text-blue-400",
                                step: 1
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Tax Bracket on Interest",
                                value: taxBracket,
                                setter: setTaxBracket,
                                min: 0,
                                max: 40,
                                unit: "%",
                                placeholder: "30",
                                accentColor: "text-red-600 dark:text-red-400",
                                step: 1
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: " Total Coupon Interest(Gross): "
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900 dark:text-slate-50",
                                                children: [
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalCoupon),
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                                lineNumber: 59,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: " Total Tax on Coupon Income: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-red-600 dark:text-red-400",
                                                children: [
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(taxOnCoupon),
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                                lineNumber: 63,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 dark:text-slate-400",
                                                children: " Capital Gain / Loss: "
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                                lineNumber: 66,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${capitalGain >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`,
                                                children: [
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(capitalGain),
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                                lineNumber: 67,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
                                        children: " Estimated Net Maturity Value: "
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold mt-1 text-blue-700 dark:text-blue-300",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(netMaturityValue)
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-slate-500",
                                        children: "Coupon income is taxed annually.Capital gains calculation is simplified."
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
        lineNumber: 43,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GsecBondCalculator;
}),
"[project]/src/Calculators/SubCalculators/PPFCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const PPFCalculator = ()=>{
    const [annualDeposit, setAnnualDeposit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(7.1); // Fixed rate for PPF (often 7.1%)
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(15); // Fixed maturity for PPF
    const P = Number(annualDeposit);
    const R = Number(rate);
    const Y = Number(years);
    const { totalInvested, totalInterest, maturityValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (P <= 0 || R <= 0 || Y <= 0) {
            return {
                totalInvested: 0,
                totalInterest: 0,
                maturityValue: 0
            };
        }
        // Check for max deposit limit
        const annualInvestment = Math.min(P, 150000);
        const r = R / 100;
        const n = Y;
        // PPF Maturity Formula (similar to FV of annuity due, compounded annually)
        const maturityValue = annualInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const totalInvested = annualInvestment * Y;
        const totalInterest = maturityValue - totalInvested;
        return {
            totalInvested,
            totalInterest,
            maturityValue
        };
    }, [
        P,
        R,
        Y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
                children: "PPF Calculator (पीपीएफ योजना)"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Annual Deposit",
                                value: annualDeposit,
                                setter: setAnnualDeposit,
                                min: 500,
                                max: 150000,
                                unit: "₹",
                                placeholder: "150000",
                                accentColor: "text-pink-600 dark:text-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Interest Rate (Fixed)",
                                value: rate,
                                setter: setRate,
                                min: 5,
                                max: 8,
                                unit: "%",
                                step: 0.1,
                                placeholder: "7.1",
                                accentColor: "text-pink-600 dark:text-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Time Period (Fixed)",
                                value: years,
                                setter: setYears,
                                min: 15,
                                max: 15,
                                unit: "Yrs",
                                placeholder: "15",
                                accentColor: "text-pink-600 dark:text-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                            invested: totalInvested,
                            returns: totalInterest > 0 ? totalInterest : 0,
                            investedColor: "#EC4899",
                            returnsColor: "#10B981"
                        }, void 0, false, {
                            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold text-pink-700 dark:text-pink-300",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Maturity Value (15 Yrs)"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested)
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "Total Deposited"
                                }, void 0, false, {
                                    fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PPFCalculator;
}),
"[project]/src/Calculators/CalculatorSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Calculators/CalculatorSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Import all sub-calculators
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EPFCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/FDCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/PPFCalculator.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const CalculatorSection = ()=>{
    const CALCULATOR_OPTIONS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 'sip',
                label: 'SIP Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '📈'
            },
            {
                id: 'lumpsum',
                label: 'Lumpsum Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '💰'
            },
            {
                id: 'goal',
                label: 'Goal SIP Planner',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🎯'
            },
            {
                id: 'retirement',
                label: 'Retirement Planner',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🏖️'
            },
            {
                id: 'emi',
                label: 'EMI Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '💳'
            },
            {
                id: 'cagr',
                label: 'CAGR Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '📊'
            },
            {
                id: 'ppf',
                label: 'PPF Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🔒'
            },
            {
                id: 'epf',
                label: 'EPF Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '💼'
            },
            {
                id: 'fd',
                label: 'FD Calculator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🗓️'
            },
            {
                id: 'taxfd',
                label: 'Tax Saving FD',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🏦'
            },
            {
                id: 'swp',
                label: 'Reverse SIP / SWP',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '💸'
            },
            {
                id: 'ipo',
                label: 'IPO Profit Estimator',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: ' IPO'
            },
            {
                id: 'gold',
                label: 'Gold Future Value',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🥇'
            },
            {
                id: 'gsec',
                label: 'G-Sec Bond Planner',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                icon: '🏛️'
            }
        ], []);
    // Default to the first calculator
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(CALCULATOR_OPTIONS[0].id);
    const ActiveComponent = CALCULATOR_OPTIONS.find((opt)=>opt.id === activeCalculator)?.component || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "calculators",
        className: "border-b border-slate-200/70 bg-slate-50 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 border-r border-slate-200 dark:border-slate-800 lg:pr-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 mb-4",
                                children: "Popular Calculators"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "space-y-1",
                                children: CALCULATOR_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCalculator(opt.id),
                                        className: `w-full text-left rounded-lg px-4 py-3 text-sm transition duration-150 flex items-center ${activeCalculator === opt.id ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold" : "text-slate-700 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:bg-slate-800"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-3 text-lg",
                                                children: opt.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                                                lineNumber: 72,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            opt.label
                                        ]
                                    }, opt.id, true, {
                                        fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                                        lineNumber: 63,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-xs text-slate-500",
                                children: "उपलब्ध कैलकुलेटर में से चुनें और अपनी निवेश योजना बनाएं।"
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
                            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                            lineNumber: 87,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                lineNumber: 53,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 51,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/Calculators/CalculatorSection.jsx",
        lineNumber: 47,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CalculatorSection;
}),
"[project]/src/components/Modules/NewsletterSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/NewsletterSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const NewsletterSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "newsletter",
        className: "border-b border-slate-200/70 bg-gradient-to-r from-slate-50 via-slate-50 to-white py-12 sm:py-16 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50",
                    children: "Get curated IPO & market updates in your inbox"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-slate-600 sm:text-[15px] dark:text-slate-400",
                    children: "No spam. 1–2 emails per week with IPO calendars, important SEBI updates, beginner‑friendly financial explainers and handpicked learning resources."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center",
                    onSubmit: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            required: true,
                            placeholder: "Enter your best email",
                            className: "w-full rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-500 focus:border-emerald-500 sm:max-w-xs dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                            onClick: (e)=>e.preventDefault(),
                            children: "Subscribe free"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-[11px] text-slate-500",
                    children: "By subscribing, you agree to receive educational content. You can unsubscribe anytime."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NewsletterSection;
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$Hero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/Hero.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$IpoSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/IpoSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/BlogSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$NewsletterSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/NewsletterSection.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
// Note: No need for activeView/detailData state here anymore!
// The page itself only renders the dashboard content.
const Dashboard = ()=>{
    // Function to ensure Navbar links work, although smooth scrolling is client-side
    const goHome = (e)=>{
        if (e) e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "fin-ipo-hub",
        className: "min-h-screen font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                goHome: goHome
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$Hero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 28,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$IpoSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 31,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 32,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$NewsletterSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 33,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Dashboard;
}),
];

//# sourceMappingURL=src_b544996e._.js.map