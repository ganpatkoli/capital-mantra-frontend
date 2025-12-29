(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Layout/ThemeToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { Moon, Sun } from "lucide-react";
// import React, { useEffect, useState } from "react";
// const ThemeToggle = () => {
//   const [mounted, setMounted] = useState(false);
//   const [theme, setTheme] = useState("light");
//   // Wait until client renders → fixes hydration mismatch
//   useEffect(() => {
//     setMounted(true);
//     // Load saved theme
//     const saved = localStorage.getItem("theme");
//     if (saved) {
//       setTheme(saved);
//       document.documentElement.classList.toggle("dark", saved === "dark");
//       return;
//     }
//     // If no saved theme → check system preference
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     const systemTheme = prefersDark ? "dark" : "light";
//     setTheme(systemTheme);
//     document.documentElement.classList.toggle("dark", systemTheme === "dark");
//   }, []);
//   // Apply theme when changed
//   useEffect(() => {
//     if (!mounted) return;
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme, mounted]);
//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };
//   // Avoid showing wrong icon before mount
//   if (!mounted) {
//     return (
//       <button
//         suppressHydrationWarning
//         className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
//       />
//     );
//   }
//   return (
//     <button
//       suppressHydrationWarning
//       onClick={toggleTheme}
//       className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
//       aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
//     >
//       {theme === "light" ? (
//         // Sun icon
//         <Sun size={22} />
//       ) : (
//       <Moon size={22} />
//       )}
//     </button>
//   );
// };
// export default ThemeToggle;
__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>"); // Icons ke liye
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "79eee898beae7fb25f6e94e9ffe03473c9d5c6978915de0af5ebe6a4f2e3a04a") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79eee898beae7fb25f6e94e9ffe03473c9d5c6978915de0af5ebe6a4f2e3a04a";
    }
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 w-9 h-9"
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
                lineNumber: 111,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] !== setTheme || $[5] !== theme) {
        t2 = ({
            "ThemeToggle[<button>.onClick]": ()=>setTheme(theme === "dark" ? "light" : "dark")
        })["ThemeToggle[<button>.onClick]"];
        $[4] = setTheme;
        $[5] = theme;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== theme) {
        t3 = theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "text-yellow-400 w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 131,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "text-slate-700 w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 131,
            columnNumber: 75
        }, this);
        $[7] = theme;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t2 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t2,
            className: "p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-emerald-400 transition-all duration-300",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_s(ThemeToggle, "QzD9o/ztWUlpI51A2uKjoxDGfZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
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
        href: "/"
    },
    {
        label: "IPOs",
        href: "ipo"
    },
    {
        label: "Tranding News",
        href: "news"
    },
    {
        label: "Calculators",
        href: "calculators"
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Navbar = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "46f283875b7f281f13769d7b1af59260ce82e4206936e5071924d2d6bdf1db73") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46f283875b7f281f13769d7b1af59260ce82e4206936e5071924d2d6bdf1db73";
    }
    const { goHome } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#hero");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                lineNumber: 86,
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
                lineNumber: 101,
                columnNumber: 169
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 101,
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
                    lineNumber: 108,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-slate-500 dark:text-slate-400 tracking-wide",
                    children: "Blogs • IPOs • Insights"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 108,
                    columnNumber: 164
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 108,
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
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = goHome;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== active) {
        t11 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: link.href,
                className: "relative group transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${active === link.href ? "text-emerald-500" : ""}`,
                        children: link.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 123,
                        columnNumber: 110
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `
                    absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                    ${active === link.href ? "w-full bg-emerald-500" : "w-0 bg-emerald-500 group-hover:w-full"}
                  `
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 123,
                        columnNumber: 199
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, link.href, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 123,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)));
        $[12] = active;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t11;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#newsletter",
            className: "relative rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-400 transition",
            children: [
                "Get IPO Alerts",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -right-2 -top-2 h-3 w-3 bg-emerald-400 rounded-full animate-ping"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 149,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -right-2 -top-2 h-3 w-3 bg-emerald-600 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 149,
                    columnNumber: 275
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== t12) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-10",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t12;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== open) {
        t17 = ()=>setOpen(!open);
        $[21] = open;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    const t18 = open ? "\u2716" : "\u2630";
    let t19;
    if ($[23] !== t17 || $[24] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 md:hidden",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t17,
                    className: "p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 180,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t17;
        $[24] = t18;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== t10 || $[27] !== t15 || $[28] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
            children: [
                t10,
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t15;
        $[28] = t19;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] !== open) {
        t21 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 199,
                        columnNumber: 167
                    }, ("TURBOPACK compile-time value", void 0)),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link_0.href,
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70 transition",
                            children: link_0.label
                        }, link_0.href, false, {
                            fileName: "[project]/src/components/Layout/Navbar.jsx",
                            lineNumber: 199,
                            columnNumber: 357
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#newsletter",
                        className: "mt-2 rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition",
                        children: "Get IPO Alerts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 199,
                        columnNumber: 581
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 199,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 199,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = open;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== t20 || $[33] !== t21 || $[34] !== t7) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t7,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t20;
        $[33] = t21;
        $[34] = t7;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    return t22;
};
_s(Navbar, "6qBtSZmB5YDKzDtloaUDNIH6U7o=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/AnimationWeb.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const AnimatedSection = ({ children, animationClass, rootMargin = '-100px 0px' })=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    // --- Custom Hook for Scroll Animations ---
    const useIntersectionObserver = (options)=>{
        _s1();
        const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "AnimatedSection.useIntersectionObserver.useEffect": ()=>{
                const observer = new IntersectionObserver({
                    "AnimatedSection.useIntersectionObserver.useEffect": ([entry])=>{
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            // Optionally stop observing once visible (for fade-in effects)
                            observer.unobserve(entry.target);
                        }
                    }
                }["AnimatedSection.useIntersectionObserver.useEffect"], options);
                if (elementRef.current) {
                    observer.observe(elementRef.current);
                }
                return ({
                    "AnimatedSection.useIntersectionObserver.useEffect": ()=>{
                        if (elementRef.current) {
                            observer.unobserve(elementRef.current);
                        }
                    }
                })["AnimatedSection.useIntersectionObserver.useEffect"];
            }
        }["AnimatedSection.useIntersectionObserver.useEffect"], [
            options
        ]);
        return [
            elementRef,
            isVisible
        ];
    };
    _s1(useIntersectionObserver, "ars/gJ7qRrRI4qdM8DRo1FWAkKE=");
    const [ref, isVisible_0] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `transition-all duration-1000 ${isVisible_0 ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/AnimationWeb.jsx",
        lineNumber: 36,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedSection, "S3pB/CARdZuu4sJyrbmlP3GL7cM=", true);
_c = AnimatedSection;
const __TURBOPACK__default__export__ = AnimatedSection;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Layout/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// components/Layout/Footer.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-client] (ecmascript)");
;
;
;
;
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "2ec1cebdb6505b1a57d9b6b980b991333aa009af6425bfa664d6518da36833e5") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ec1cebdb6505b1a57d9b6b980b991333aa009af6425bfa664d6518da36833e5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            title: "IPO Information",
            items: [
                {
                    label: "Upcoming IPOs",
                    href: "#ipos"
                },
                {
                    label: "Ongoing IPOs",
                    href: "#ipos"
                },
                {
                    label: "Recent Listings",
                    href: "#ipos"
                },
                {
                    label: "GMP Tracking",
                    href: "#ipos"
                }
            ]
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            title: "Financial Education",
            items: [
                {
                    label: "Investing 101",
                    href: "#blogs"
                },
                {
                    label: "Mutual Funds",
                    href: "#blogs"
                },
                {
                    label: "Taxes & Regulations",
                    href: "#blogs"
                },
                {
                    label: "Market News",
                    href: "#blogs"
                }
            ]
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            t0,
            t1,
            {
                title: "Tools & Calculators",
                items: [
                    {
                        label: "SIP Calculator",
                        href: "#calculators"
                    },
                    {
                        label: "EMI Calculator",
                        href: "#calculators"
                    },
                    {
                        label: "Retirement Planner",
                        href: "#calculators"
                    },
                    {
                        label: "Contact Us",
                        href: "#about"
                    }
                ]
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const links = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = links.map(_temp2);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animationClass: "translate-y-10",
            rootMargin: "-50px 0px",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200/70 py-10 dark:border-slate-800/70 bg-white dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-8 md:grid-cols-4",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 md:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wider",
                                        children: "Start Your Capital Mantra Journey"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Footer.jsx",
                                        lineNumber: 89,
                                        columnNumber: 335
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600 dark:text-slate-400 mb-4",
                                        children: "Explore our comprehensive IPO data and expert blogs."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Footer.jsx",
                                        lineNumber: 89,
                                        columnNumber: 475
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#ipos",
                                        className: "inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                                        children: "View IPO Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Footer.jsx",
                                        lineNumber: 89,
                                        columnNumber: 594
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Footer.jsx",
                                lineNumber: 89,
                                columnNumber: 293
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Footer.jsx",
                        lineNumber: 89,
                        columnNumber: 234
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Footer.jsx",
                    lineNumber: 89,
                    columnNumber: 186
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Footer.jsx",
                lineNumber: 89,
                columnNumber: 82
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "© ",
                new Date().getFullYear(),
                " FinIPO Hub. For education only — not investment advice."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "hover:text-slate-800 dark:hover:text-slate-300",
            children: "Disclaimer"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden text-slate-400 sm:inline dark:text-slate-600",
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "hover:text-slate-800 dark:hover:text-slate-300",
            children: "Privacy Policy"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden text-slate-400 sm:inline dark:text-slate-600",
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-emerald-500 dark:text-emerald-400",
            children: "React"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "bg-slate-100 py-6 text-[11px] text-slate-600 dark:bg-slate-950 dark:text-slate-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
                        children: [
                            t5,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3",
                                children: [
                                    t6,
                                    t7,
                                    t8,
                                    t9,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: [
                                            "Built with ",
                                            t10,
                                            " &",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500 dark:text-emerald-400",
                                                children: " Tailwind CSS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Footer.jsx",
                                                lineNumber: 129,
                                                columnNumber: 361
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout/Footer.jsx",
                                        lineNumber: 129,
                                        columnNumber: 306
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Footer.jsx",
                                lineNumber: 129,
                                columnNumber: 239
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Footer.jsx",
                        lineNumber: 129,
                        columnNumber: 120
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Footer.jsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    return t11;
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
function _temp(item, itemIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: item.href,
            className: "text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition",
            children: item.label
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Footer.jsx",
            lineNumber: 138,
            columnNumber: 30
        }, this)
    }, itemIndex, false, {
        fileName: "[project]/src/components/Layout/Footer.jsx",
        lineNumber: 138,
        columnNumber: 10
    }, this);
}
function _temp2(section, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wider",
                children: section.title
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Footer.jsx",
                lineNumber: 141,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 text-sm",
                children: section.items.map(_temp)
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Footer.jsx",
                lineNumber: 141,
                columnNumber: 149
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/Layout/Footer.jsx",
        lineNumber: 141,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/ThemeToggle.jsx [app-client] (ecmascript)");
;
;
;
function Page() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "08cdece99fbf36c4a2018c8ac4394ae85365f30f789f1927d6522abd33dab012") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "08cdece99fbf36c4a2018c8ac4394ae85365f30f789f1927d6522abd33dab012";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-slate-900 dark:text-white mb-4",
                    children: "Next.js Dark Mode"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/Hero.jsx",
                    lineNumber: 13,
                    columnNumber: 140
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/Modules/Hero.jsx",
                    lineNumber: 13,
                    columnNumber: 233
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/Hero.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Service/axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
__turbopack_context__.s([
    "apiDelete",
    ()=>apiDelete,
    "apiGet",
    ()=>apiGet,
    "apiPost",
    ()=>apiPost,
    "apiPut",
    ()=>apiPut,
    "baseURL",
    ()=>baseURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseURL = "http://localhost:5000/api";
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});
const apiGet = async (path, params = {})=>{
    const res = await API.get(`/${path}`, {
        params
    });
    return res.data;
};
const apiPost = async (path, body = {}, params = {})=>{
    const res = await API.post(`/${path}`, body, {
        params
    });
    return res.data;
};
const apiPut = async (path, body = {}, params = {})=>{
    const res = await API.put(`/${path}`, body, {
        params
    });
    return res.data;
};
const apiDelete = async (path, params = {})=>{
    const res = await API.delete(`/${path}`, {
        params
    });
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAPI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Service/axios.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAPI(path, params = {}) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // GET
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAPI.useCallback[fetchData]": async ()=>{
            setLoading(true);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(path, params);
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message || "API Error");
            }
            setLoading(false);
        }
    }["useAPI.useCallback[fetchData]"], [
        path,
        JSON.stringify(params)
    ]);
    // POST
    const create = async (body = {}, extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(path, body, extraParams);
    };
    // PUT
    const update = async (body_0 = {}, extraParams_0 = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPut"])(path, body_0, extraParams_0);
    };
    // DELETE
    const remove = async (extraParams_1 = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiDelete"])(path, extraParams_1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAPI.useEffect": ()=>{
            fetchData();
        }
    }["useAPI.useEffect"], [
        fetchData
    ]);
    return {
        data,
        loading,
        error,
        refetch: fetchData,
        create,
        update,
        remove
    };
}
_s(useAPI, "yZpGE5lmr9HR5OiBdmrBaa5atrY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/IpoSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Sections/AllIpoSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// AnimatedSection और slugify को मान लिया गया है कि वे सही ढंग से आयात (import) किए गए हैं
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAPI.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LARGE_LIMIT = 6; // प्रति पेज आइटम की संख्या
// --- HELPER FUNCTIONS ---
const mapStatusToUI = (code)=>{
    switch(code){
        case "U":
            return "Upcoming";
        case "O":
        case "CT":
            return "Ongoing";
        case "C":
        case "L":
            return "Closed";
        default:
            return "Upcoming";
    }
};
// --------------------------------------------------------
// STATUS BADGE COMPONENT
// --------------------------------------------------------
const StatusBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const { uiStatus } = t0;
    let badgeClasses;
    bb0: switch(uiStatus){
        case "Ongoing":
            {
                badgeClasses = "bg-emerald-500/10 text-emerald-600 ring-emerald-500/40";
                break bb0;
            }
        case "Upcoming":
            {
                badgeClasses = "bg-cyan-500/10 text-cyan-600 ring-cyan-500/40";
                break bb0;
            }
        case "Closed":
            {
                badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
                break bb0;
            }
        default:
            {
                badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
            }
    }
    const t1 = `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ring-1 ${badgeClasses}`;
    let t2;
    if ($[1] !== t1 || $[2] !== uiStatus) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: uiStatus
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = uiStatus;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = StatusBadge;
// Helper component for Listing Gain
const ListingGainDisplay = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const { ipo } = t0;
    const gainValue = parseFloat(ipo.listing_gain_percent);
    const isGain = gainValue >= 0;
    const sign = isGain ? "\u25B2" : "\u25BC";
    const gainClasses = isGain ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400";
    const t1 = `text-sm font-bold ${gainClasses}`;
    let t2;
    if ($[1] !== ipo.listing_gain || $[2] !== ipo.listing_gain_percent || $[3] !== sign || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            children: [
                sign,
                " Listing Gain: ",
                ipo.listing_gain,
                " (",
                ipo.listing_gain_percent,
                "%)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = ipo.listing_gain;
        $[2] = ipo.listing_gain_percent;
        $[3] = sign;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c1 = ListingGainDisplay;
// Helper component for GMP display
const GmpDisplay = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const { ipo } = t0;
    if (ipo.status === "L") {
        return null;
    }
    if (!ipo.gmp || ipo.gmp === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-lg flex flex-col justify-center font-bold bg-slate-100 dark:bg-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center text-slate-500 dark:text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-wider",
                            children: "Live GMP"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 128,
                            columnNumber: 200
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: "--"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 128,
                            columnNumber: 260
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 128,
                    columnNumber: 114
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 128,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let gmpClasses;
    let gmpBg;
    let gmpText = ipo.gmp_text;
    if (ipo.gmp_percent > 0) {
        gmpClasses = "text-emerald-700 dark:text-emerald-400";
        gmpBg = "bg-emerald-100 dark:bg-emerald-900/40";
        gmpText = `+${ipo.gmp_text}`;
    } else {
        if (ipo.gmp_percent < 0) {
            gmpClasses = "text-red-700 dark:text-red-400";
            gmpBg = "bg-red-100 dark:bg-red-900/40";
        } else {
            gmpClasses = "text-slate-700 dark:text-slate-300";
            gmpBg = "bg-slate-100 dark:bg-slate-800";
        }
    }
    const t1 = `p-3 rounded-lg flex flex-col justify-center font-bold ${gmpBg}`;
    const t2 = `text-xs uppercase tracking-wider ${gmpClasses}`;
    let t3;
    if ($[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t2,
            children: "Live GMP"
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 155,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = `text-lg ${gmpClasses}`;
    let t5;
    if ($[4] !== gmpText || $[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t4,
            children: gmpText
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 164,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = gmpText;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 173,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t1 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 182,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t1;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
};
_c2 = GmpDisplay;
// Helper component for detail items
const DetailItem = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const { label, value } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase font-medium text-slate-500 dark:text-slate-400",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 207,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-800 dark:text-slate-100",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 215,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 223,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
_c3 = DetailItem;
// --------------------------------------------------------
// FILTER BAR 
// --------------------------------------------------------
const IpoFilterBar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const { selectedStatus, setSelectedStatus, search, setSearch } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "All",
            "Upcoming",
            "Ongoing",
            "Closed"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const STATUS_TABS = t1;
    let t2;
    if ($[2] !== selectedStatus || $[3] !== setSelectedStatus) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-xs sm:text-[13px]",
            children: STATUS_TABS.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSelectedStatus(status),
                    className: `rounded-full px-4 py-1.5 font-semibold transition duration-300 ${selectedStatus === status ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`,
                    children: status
                }, status, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 260,
                    columnNumber: 98
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 260,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = selectedStatus;
        $[3] = setSelectedStatus;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "🔍"
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 269,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== setSearch) {
        t4 = (e)=>setSearch(e.target.value);
        $[6] = setSearch;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== search || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 rounded-full border border-slate-300 \n                bg-slate-100/80 px-4 py-1.5 text-sm text-slate-700 \n                dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 w-full sm:w-auto",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search IPO name or exchange...",
                    value: search,
                    onChange: t4,
                    className: "w-full bg-transparent outline-none placeholder:text-slate-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 284,
                    columnNumber: 261
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 284,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = search;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t2 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 \n            sm:flex-row sm:items-center sm:justify-between \n            dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-sm shadow-md sticky top-0 z-10",
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 293,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t2;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
};
_c4 = IpoFilterBar;
// --------------------------------------------------------
// IPO TABLE (Grid View) 
// --------------------------------------------------------
const IpoTable = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const { ipos } = t0;
    if (!ipos.length) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 bg-white/80 p-6 text-center \n                text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 backdrop-blur-sm",
                children: "No IPOs found matching the filter criteria."
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 320,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== ipos) {
        t1 = ipos.map(_temp);
        $[2] = ipos;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 337,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c5 = IpoTable;
// --------------------------------------------------------
// MAIN APP COMPONENT (With Pagination)
// --------------------------------------------------------
const App = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cae5aa93c2f1e2bb3c58e32e823b7eafabc34313f0655b6f172a721636d50f35";
    }
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const { data: rawData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ipo/all");
    let t0;
    if ($[1] !== rawData || $[2] !== search || $[3] !== selectedStatus) {
        const sortedIpos = (rawData || []).map(_temp2).sort(_temp3);
        let t1;
        if ($[5] !== search || $[6] !== selectedStatus) {
            t1 = (ipo_0)=>{
                const matchStatus = selectedStatus === "All" || ipo_0.ui_status === selectedStatus;
                const query = search.toLowerCase();
                const matchSearch = ipo_0.name.toLowerCase().includes(query) || ipo_0.exchange && ipo_0.exchange.toLowerCase().includes(query) || ipo_0.category && ipo_0.category.toLowerCase().includes(query) || ipo_0.status_text && ipo_0.status_text.toLowerCase().includes(query);
                return matchStatus && matchSearch;
            };
            $[5] = search;
            $[6] = selectedStatus;
            $[7] = t1;
        } else {
            t1 = $[7];
        }
        t0 = sortedIpos.filter(t1);
        $[1] = rawData;
        $[2] = search;
        $[3] = selectedStatus;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const processedIpos = t0;
    const totalItems = processedIpos.length;
    const totalPages = Math.ceil(totalItems / LARGE_LIMIT);
    const startIndex = (currentPage - 1) * LARGE_LIMIT;
    const endIndex = startIndex + LARGE_LIMIT;
    let t1;
    if ($[8] !== endIndex || $[9] !== processedIpos || $[10] !== startIndex) {
        t1 = processedIpos.slice(startIndex, endIndex);
        $[8] = endIndex;
        $[9] = processedIpos;
        $[10] = startIndex;
        $[11] = t1;
    } else {
        t1 = $[11];
    }
    const paginatedIpos = t1;
    let t2;
    if ($[12] !== totalPages) {
        t2 = (newPage)=>{
            if (newPage >= 1 && newPage <= totalPages) {
                setCurrentPage(newPage);
                document.getElementById("ipo-dashboard-section").scrollIntoView({
                    behavior: "smooth"
                });
            }
        };
        $[12] = totalPages;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    const handlePageChange = t2;
    if (loading) {
        let t3;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-medium text-slate-600 dark:text-slate-400",
                    children: "Loading IPO data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 424,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 424,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[14] = t3;
        } else {
            t3 = $[14];
        }
        return t3;
    }
    let t3;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl",
                    children: "Live IPO Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 433,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xl",
                    children: "Track All Upcoming, Ongoing & Listed IPOs with live Grey Market Premium (GMP)."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 433,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 433,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    let t4;
    if ($[16] !== search || $[17] !== selectedStatus) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoFilterBar, {
                selectedStatus: selectedStatus,
                setSelectedStatus: setSelectedStatus,
                search: search,
                setSearch: setSearch
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 440,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 440,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = search;
        $[17] = selectedStatus;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] !== paginatedIpos) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
                ipos: paginatedIpos
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 449,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 449,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = paginatedIpos;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] !== currentPage || $[22] !== handlePageChange || $[23] !== totalPages) {
        t6 = totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex justify-center items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(currentPage - 1),
                    disabled: currentPage === 1,
                    className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                    children: "← Previous"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 457,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base font-medium text-slate-700 dark:text-slate-300",
                    children: [
                        "Page ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-extrabold text-emerald-600 dark:text-emerald-400",
                            children: currentPage
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 457,
                            columnNumber: 472
                        }, ("TURBOPACK compile-time value", void 0)),
                        " of ",
                        totalPages
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 457,
                    columnNumber: 392
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(currentPage + 1),
                    disabled: currentPage === totalPages,
                    className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                    children: "Next →"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 457,
                    columnNumber: 587
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 457,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = currentPage;
        $[22] = handlePageChange;
        $[23] = totalPages;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    let t7;
    if ($[25] !== totalItems || $[26] !== totalPages) {
        t7 = totalPages <= 1 && totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-center text-sm text-slate-500",
            children: [
                "Showing all ",
                totalItems,
                " IPOs."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 467,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = totalItems;
        $[26] = totalPages;
        $[27] = t7;
    } else {
        t7 = $[27];
    }
    let t8;
    if ($[28] !== t4 || $[29] !== t5 || $[30] !== t6 || $[31] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ipo-dashboard-section",
                className: "bg-slate-50 py-8 sm:py-12 min-h-screen\n                dark:bg-slate-950 transition duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl w-full px-4 sm:px-6",
                    children: [
                        t3,
                        t4,
                        t5,
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 476,
                    columnNumber: 175
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 476,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 476,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t4;
        $[29] = t5;
        $[30] = t6;
        $[31] = t7;
        $[32] = t8;
    } else {
        t8 = $[32];
    }
    return t8;
};
_s(App, "VNpslOnE8VU7WvOdKuzcYaT47VQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c6 = App;
const __TURBOPACK__default__export__ = App;
function _temp(ipo) {
    let dateDisplay;
    if (ipo.status === "L") {
        dateDisplay = `Listed: ${ipo.listing_date_display}`;
    } else {
        dateDisplay = `Open: ${ipo.open_date} - Close: ${ipo.close_date}`;
    }
    const showRange = ipo.gmp_low !== null && ipo.gmp_high !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/ipo/${ipo.id}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(ipo.name)}`,
        className: "flex flex-col relative rounded-xl border border-slate-200 bg-white p-4 shadow-lg \n                            transition hover:shadow-xl hover:shadow-emerald-500/20 \n                            dark:border-slate-800 dark:bg-slate-900 overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-slate-900 dark:text-slate-50 truncate pr-4",
                        children: ipo.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 402
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                        uiStatus: ipo.status_text == "Listed" ? "Closed" : ipo.ui_status
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 501
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 496,
                columnNumber: 346
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3 pb-2 border-b border-slate-100 dark:border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            ipo.exchange || "Mainboard",
                            " / ",
                            ipo.category || "Main"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 756
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-slate-600 dark:text-slate-300",
                        children: dateDisplay
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 819
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 496,
                columnNumber: 588
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                        label: "Price Band",
                        value: ipo.price ? `₹${ipo.price}` : "--"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 951
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                        label: "Lot Size",
                        value: ipo.lot_size || "--"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 1027
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 496,
                columnNumber: 906
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GmpDisplay, {
                ipo: ipo
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 496,
                columnNumber: 1093
            }, this),
            showRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                    label: "Live GMP Range \u2191 | \u2193",
                    value: `₹${ipo.gmp_low} - ₹${ipo.gmp_high}`
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 496,
                    columnNumber: 1153
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 496,
                columnNumber: 1131
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] font-medium",
                        children: ipo.status === "L" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListingGainDisplay, {
                            ipo: ipo
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 496,
                            columnNumber: 1379
                        }, this) : ipo.allotted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-emerald-600 dark:text-emerald-400",
                            children: "✔ Allotment Published"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 496,
                            columnNumber: 1429
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 dark:text-slate-400",
                            children: [
                                "Listing: ",
                                ipo.listing_date_display
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 496,
                            columnNumber: 1511
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 1316
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center px-3 py-1 text-xs font-semibold \n                                bg-emerald-500 text-white rounded-full shadow-md \n                                transition group-hover:bg-emerald-600",
                        children: "View Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 496,
                        columnNumber: 1607
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 496,
                columnNumber: 1260
            }, this)
        ]
    }, ipo.id, true, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 496,
        columnNumber: 10
    }, this);
}
function _temp2(ipo) {
    return {
        ...ipo,
        ui_status: mapStatusToUI(ipo.status)
    };
}
function _temp3(a, b) {
    const statusOrder = {
        "Ongoing": 1,
        "Upcoming": 2,
        "Closed": 3
    };
    if (statusOrder[a.ui_status] !== statusOrder[b.ui_status]) {
        return statusOrder[a.ui_status] - statusOrder[b.ui_status];
    }
    return new Date(b.open_date) - new Date(a.open_date);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "ListingGainDisplay");
__turbopack_context__.k.register(_c2, "GmpDisplay");
__turbopack_context__.k.register(_c3, "DetailItem");
__turbopack_context__.k.register(_c4, "IpoFilterBar");
__turbopack_context__.k.register(_c5, "IpoTable");
__turbopack_context__.k.register(_c6, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/BlogSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/MarketNewsSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
// Icons for visual hierarchy
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_LIMIT = 6;
// नई कॉन्स्टेंट: अधिकतम पेज जिन्हें हम डिस्प्ले पर हैंडल करेंगे
const MAX_PAGES_TO_SHOW = 2;
// API functions (omitted for brevity, assume fetchNews is the same)
const fetchNews = async (page, limit)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:5000/api/news?page=${page}&limit=${limit}`);
        const data = response.data;
        return data || {
            news: [],
            totalPages: 1,
            totalItems: 0
        };
    } catch (error) {
        console.error("Error fetching news data:", error);
        return {
            news: [],
            totalPages: 1,
            totalItems: 0
        };
    }
};
const extractCategories = (data)=>{
    const categories = new Set();
    data.news.forEach((item)=>{
        if (item.category) {
            categories.add(item.category);
        }
    });
    return Array.from(categories).sort();
};
// ----------------------------------------------------------------------
const MarketNewsFilters = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "504254306e69435d224f8ad7c9fc338a0c1444ddb4b3432a21f0599172450f43") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "504254306e69435d224f8ad7c9fc338a0c1444ddb4b3432a21f0599172450f43";
    }
    const { activeCategory, setActiveCategory, categories } = t0;
    let t1;
    if ($[1] !== categories) {
        t1 = [
            "All",
            ...categories
        ];
        $[1] = categories;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const filterCategories = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                    className: "w-4 h-4 text-emerald-600"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 69,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0)),
                "Sectors:"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== activeCategory || $[5] !== filterCategories || $[6] !== setActiveCategory) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-wrap gap-3 items-center p-4 bg-slate-100/50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700",
            children: [
                t2,
                filterCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(cat),
                        className: `rounded-lg px-4 py-1.5 font-semibold text-sm transition duration-200 border ${activeCategory === cat ? "bg-emerald-600 border-emerald-700 text-white shadow-sm shadow-emerald-500/50" : "bg-white border-slate-300 text-slate-800 hover:bg-emerald-50 hover:border-emerald-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600"}`,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 76,
                        columnNumber: 194
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = activeCategory;
        $[5] = filterCategories;
        $[6] = setActiveCategory;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
_c = MarketNewsFilters;
const NewsCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "504254306e69435d224f8ad7c9fc338a0c1444ddb4b3432a21f0599172450f43") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "504254306e69435d224f8ad7c9fc338a0c1444ddb4b3432a21f0599172450f43";
    }
    const { news } = t0;
    let t1;
    if ($[1] !== news.date) {
        t1 = new Date(news.date).toLocaleTimeString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
        $[1] = news.date;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const formattedDate = t1;
    const t2 = news.category || "General";
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = news.news_source || news.source;
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-500 dark:text-slate-400",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 124,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs font-semibold",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 132,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-0.5 bg-emerald-500 mt-2 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== news.title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold leading-snug text-slate-900 group-hover:text-emerald-600 transition dark:text-white",
            children: news.title
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 148,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = news.title;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t6 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 flex flex-col space-y-2",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 156,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const t10 = news.summary || "No detailed summary available. Click to read the full article.";
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 pt-0 pb-4 flex-grow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-relaxed text-slate-600 dark:text-slate-400",
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 166,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-4 h-4 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== formattedDate) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-1 text-slate-500 dark:text-slate-400",
            children: [
                t12,
                formattedDate
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = formattedDate;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 transition-all duration-200",
            children: [
                "Read More",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "w-4 h-4 transition-transform group-hover:translate-x-0.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 189,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-sm font-medium",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 196,
                columnNumber: 121
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t13;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== news.link || $[25] !== news.title || $[26] !== t11 || $[27] !== t15 || $[28] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: news.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex flex-col rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 overflow-hidden",
            children: [
                t9,
                t11,
                t15
            ]
        }, news.title, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = news.link;
        $[25] = news.title;
        $[26] = t11;
        $[27] = t15;
        $[28] = t9;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    return t16;
};
_c1 = NewsCard;
const MarketNewsSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "504254306e69435d224f8ad7c9fc338a0c1444ddb4b3432a21f0599172450f43") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "504254306e69435d224f8ad7c9fc338a0c1444ddb4b3432a21f0599172450f43";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [allNews, setAllNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [pagedNews, setPagedNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [, setFilteredNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            const loadNews = async ()=>{
                setIsLoading(true);
                const apiData = await fetchNews(1, 500);
                if (apiData.news && apiData.news.length > 0) {
                    setAllNews(apiData.news);
                    setCategories(extractCategories(apiData));
                } else {
                    setAllNews([]);
                    setCategories([]);
                }
                setIsLoading(false);
            };
            loadNews();
        };
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] !== activeCategory || $[8] !== allNews || $[9] !== currentPage) {
        t6 = ()=>{
            const filtered = allNews.filter((news)=>{
                if (activeCategory === "All") {
                    return true;
                }
                return news.category === activeCategory;
            });
            const startIndex = (currentPage - 1) * DEFAULT_LIMIT;
            const endIndex = currentPage * DEFAULT_LIMIT;
            const paged = filtered.slice(startIndex, endIndex);
            setFilteredNews(filtered);
            setPagedNews(paged);
            setTotalPages(Math.ceil(filtered.length / DEFAULT_LIMIT));
        };
        t7 = [
            activeCategory,
            allNews,
            currentPage
        ];
        $[7] = activeCategory;
        $[8] = allNews;
        $[9] = currentPage;
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[12] !== totalPages) {
        t8 = (newPage)=>{
            if (newPage >= 1 && newPage <= totalPages) {
                setCurrentPage(newPage);
                document.getElementById("market-news").scrollIntoView({
                    behavior: "smooth"
                });
            }
        };
        $[12] = totalPages;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const handlePageChange = t8;
    const shouldShowViewAll = currentPage === MAX_PAGES_TO_SHOW && totalPages > MAX_PAGES_TO_SHOW;
    const shouldShowPaginationControls = totalPages > 1 && currentPage < MAX_PAGES_TO_SHOW;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-50 dark:bg-slate-950  border-slate-200 dark:border-slate-800 pt-1 pb-6 mb-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " text-center max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "inline w-8 h-8 mr-3 text-emerald-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                    lineNumber: 334,
                                    columnNumber: 295
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Financial News Digest: Real-Time Headlines"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 334,
                            columnNumber: 209
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-lg text-slate-600 dark:text-slate-400",
                            children: "Breaking headlines and curated intelligence from India's key financial sectors."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 334,
                            columnNumber: 405
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 334,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 334,
                columnNumber: 113
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 334,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== activeCategory || $[16] !== allNews.length || $[17] !== categories || $[18] !== isLoading) {
        t10 = !isLoading && allNews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketNewsFilters, {
            activeCategory: activeCategory,
            setActiveCategory: (cat)=>{
                setActiveCategory(cat);
                setCurrentPage(1);
            },
            categories: categories
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 341,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = activeCategory;
        $[16] = allNews.length;
        $[17] = categories;
        $[18] = isLoading;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-12",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 355,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== isLoading || $[23] !== pagedNews) {
        t12 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-full text-center py-24 text-emerald-600 font-semibold text-lg animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                    className: "inline w-6 h-6 mr-2 animate-bounce transform rotate-45"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 363,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0)),
                "Fetching latest market intelligence..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 363,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)) : pagedNews.length > 0 ? pagedNews.map(_temp) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-full text-center py-20 text-slate-500 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6",
            children: "No news found in the selected category or on this page."
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 363,
            columnNumber: 293
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = isLoading;
        $[23] = pagedNews;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 372,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== currentPage || $[28] !== handlePageChange || $[29] !== shouldShowPaginationControls) {
        t14 = shouldShowPaginationControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(currentPage - 1),
                    disabled: currentPage === 1,
                    className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 380,
                            columnNumber: 329
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Previous"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 380,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-medium text-slate-700 dark:text-slate-300",
                    children: [
                        "Page ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-extrabold text-emerald-600 dark:text-emerald-400",
                            children: currentPage
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 380,
                            columnNumber: 460
                        }, ("TURBOPACK compile-time value", void 0)),
                        " of ",
                        MAX_PAGES_TO_SHOW
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 380,
                    columnNumber: 382
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handlePageChange(currentPage + 1),
                    disabled: currentPage === MAX_PAGES_TO_SHOW,
                    className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                    children: [
                        "Next ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 380,
                            columnNumber: 887
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 380,
                    columnNumber: 582
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[27] = currentPage;
        $[28] = handlePageChange;
        $[29] = shouldShowPaginationControls;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== shouldShowViewAll || $[32] !== totalPages) {
        t15 = (shouldShowViewAll || totalPages <= MAX_PAGES_TO_SHOW && totalPages > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/view-all-news",
            className: "ml-8 flex items-center gap-2 px-8 py-3 text-lg font-extrabold rounded-lg transition duration-200 bg-emerald-100 text-emerald-800 border-2 border-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800",
            children: [
                "View All News",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-5 h-5 transition-transform group-hover:translate-x-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 390,
                    columnNumber: 386
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 390,
            columnNumber: 87
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = shouldShowViewAll;
        $[32] = totalPages;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t14 || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 flex justify-center items-center gap-4",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 399,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t14;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t11 || $[38] !== t13 || $[39] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "market-news",
            className: "border-b border-slate-200/70 bg-white py-10 sm:py-28 dark:border-slate-800/70 dark:bg-slate-950",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [
                        t11,
                        t13,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 408,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/BlogSection.jsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t11;
        $[38] = t13;
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    return t17;
};
_s(MarketNewsSection, "3v1ADh2t8mQja0Pio8NDvvJI6tU=");
_c2 = MarketNewsSection;
const __TURBOPACK__default__export__ = MarketNewsSection;
function _temp(news_0, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsCard, {
        news: news_0
    }, index, false, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 420,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MarketNewsFilters");
__turbopack_context__.k.register(_c1, "NewsCard");
__turbopack_context__.k.register(_c2, "MarketNewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/CalculatorSectionInfo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-client] (ecmascript)");
;
;
;
;
const CalculatorSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "5f7bfbb998c9c0acecf20d034bbc4ff913ced9764734d6571829a5e840a43dd1") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f7bfbb998c9c0acecf20d034bbc4ff913ced9764734d6571829a5e840a43dd1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                title: "SIP Return Calculator",
                icon: "\uD83D\uDCCA",
                description: "Calculate how much your investment will grow over time through a Systematic Investment Plan (SIP). Understand the power of compound interest."
            },
            {
                title: "Lump Sum Investment Calculator",
                icon: "\uD83D\uDCC8",
                description: "Estimate future returns and maturity value on a one-time (Lump Sum) investment. Set your financial goals."
            },
            {
                title: "Retirement Corpus Planner",
                icon: "\uD83D\uDC74",
                description: "Find out how much capital (corpus) you will need for retirement and how much you should start saving today."
            },
            {
                title: "Loan EMI Calculator",
                icon: "\uD83C\uDFE0",
                description: "Accurately calculate the monthly installment (EMI) for your Home, Car, or Personal Loan. Simplify your budget."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const CALCULATOR_LIST = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-3xl mx-auto space-y-4 mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-fuchsia-600 dark:text-fuchsia-300",
                    children: "Capital Mantra Tools"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                    lineNumber: 38,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50",
                    children: "Free Financial Calculators: Optimize SIP, EMI, and Retirement Planning."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                    lineNumber: 38,
                    columnNumber: 311
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base leading-relaxed text-slate-700 dark:text-slate-300",
                    children: "Accurately plan your financial goals using Capital Mantra's investment and finance calculators. Strengthen your capital with tools for SIP Returns, EMI, and Retirement planning."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                    lineNumber: 38,
                    columnNumber: 487
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
            lineNumber: 38,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animationClass: "translate-y-10",
            rootMargin: "-150px 0px",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "calculators",
                className: "py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/70 dark:border-slate-800/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                            children: CALCULATOR_LIST.map(_temp)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                            lineNumber: 45,
                            columnNumber: 269
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                    lineNumber: 45,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                lineNumber: 45,
                columnNumber: 83
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = CalculatorSection;
const __TURBOPACK__default__export__ = CalculatorSection;
function _temp(calc, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border border-slate-200 bg-slate-50/70 shadow-lg dark:border-slate-800 dark:bg-slate-950/70 transform transition duration-300 hover:shadow-fuchsia-500/20 hover:scale-[1.02]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl mb-3",
                children: calc.icon
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                lineNumber: 54,
                columnNumber: 227
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-slate-900 dark:text-slate-50 mb-2",
                children: calc.title
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                lineNumber: 54,
                columnNumber: 275
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-600 dark:text-slate-400",
                children: calc.description
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                lineNumber: 54,
                columnNumber: 365
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "mt-3 inline-flex items-center text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 transition",
                children: "Use Calculator →"
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                lineNumber: 54,
                columnNumber: 445
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CalculatorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/NewsletterSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/NewsletterSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const NewsletterSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "bcd228ee306a0245398ade58f9bfc06f4b89223846d6aae24e2c1bf10be9be6c") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bcd228ee306a0245398ade58f9bfc06f4b89223846d6aae24e2c1bf10be9be6c";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50",
            children: "Get curated IPO & market updates in your inbox"
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-slate-600 sm:text-[15px] dark:text-slate-400",
            children: "No spam. 1–2 emails per week with IPO calendars, important SEBI updates, beginner‑friendly financial explainers and handpicked learning resources."
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "newsletter",
            className: "border-b border-slate-200/70 bg-gradient-to-r from-slate-50 via-slate-50 to-white py-12 sm:py-16 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center",
                        onSubmit: _temp,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                required: true,
                                placeholder: "Enter your best email",
                                className: "w-full rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-500 focus:border-emerald-500 sm:max-w-xs dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                                lineNumber: 27,
                                columnNumber: 400
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                                onClick: _temp2,
                                children: "Subscribe free"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                                lineNumber: 27,
                                columnNumber: 715
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                        lineNumber: 27,
                        columnNumber: 294
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[11px] text-slate-500",
                        children: "By subscribing, you agree to receive educational content. You can unsubscribe anytime."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                        lineNumber: 27,
                        columnNumber: 977
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
                lineNumber: 27,
                columnNumber: 226
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/NewsletterSection.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = NewsletterSection;
const __TURBOPACK__default__export__ = NewsletterSection;
function _temp(e) {
    return e.preventDefault();
}
function _temp2(e_0) {
    return e_0.preventDefault();
}
var _c;
__turbopack_context__.k.register(_c, "NewsletterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/WhyIpoMatters.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-client] (ecmascript)");
;
;
;
;
const WhyIposMatterSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "f7178b66aafab67833d010bd985a54876a451db0ce3ef25377c98ee9393349f2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7178b66aafab67833d010bd985a54876a451db0ce3ef25377c98ee9393349f2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-3xl mx-auto space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-300",
                    children: "Investment Opportunity"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 14,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50",
                    children: "Maximize Returns: Why Investing in Indian IPOs is Crucial for Portfolio Growth."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 14,
                    columnNumber: 307
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base leading-relaxed text-slate-700 dark:text-slate-300",
                    children: "An Initial Public Offering (IPO) provides early access to high-growth companies. At Capital Mantra, we highlight how smart IPO participation offers long-term portfolio diversification, not just quick listing gains."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 14,
                    columnNumber: 491
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-emerald-600 dark:text-emerald-400",
                    children: "Growth Potential"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 21,
                    columnNumber: 160
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-slate-700 dark:text-slate-300",
                    children: "IPOs offer an opportunity to invest in new companies with rapid growth potential in emerging sectors."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 21,
                    columnNumber: 255
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-cyan-600 dark:text-cyan-400",
                    children: "Liquidity Advantage"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 28,
                    columnNumber: 160
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-slate-700 dark:text-slate-300",
                    children: "Once listed, your shares can be easily sold, providing high liquidity compared to unlisted investments."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 28,
                    columnNumber: 252
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animationClass: "translate-y-10",
            rootMargin: "-50px 0px",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "why-ipos",
                className: "border-b border-slate-200/70 bg-slate-100 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: [
                        t0,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center",
                            children: [
                                t1,
                                t2,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400",
                                            children: "Market Insight"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                            lineNumber: 35,
                                            columnNumber: 500
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-slate-700 dark:text-slate-300",
                                            children: "The detailed information required for the IPO process gives you a deep understanding of the company's fundamentals and strategy."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                            lineNumber: 35,
                                            columnNumber: 591
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                    lineNumber: 35,
                                    columnNumber: 350
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                            lineNumber: 35,
                            columnNumber: 269
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                    lineNumber: 35,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                lineNumber: 35,
                columnNumber: 82
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c = WhyIposMatterSection;
const __TURBOPACK__default__export__ = WhyIposMatterSection;
var _c;
__turbopack_context__.k.register(_c, "WhyIposMatterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modules/AboutUs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-client] (ecmascript)");
;
;
;
;
const AboutSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "25ea35aa9141cb02a63ba2415a4d3135bbad08031177225f83a3e85e90451933") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "25ea35aa9141cb02a63ba2415a4d3135bbad08031177225f83a3e85e90451933";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-6 space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-600 dark:text-cyan-300",
                    children: "Our Mission"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 14,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50",
                    children: "Our Mission: Empowering Confident Investment Decisions in the Indian Share Market."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 14,
                    columnNumber: 268
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300",
                    children: "Capital Mantra was established with a single vision: to simplify financial markets for India's retail investors. We bridge the gap between complex financial terminology and useful investment knowledge."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 14,
                    columnNumber: 455
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300",
                    children: "Our focus is on data-driven IPO analysis, Grey Market Premium (GMP) tracking, and reliable educational content, so that you are always informed. Our Capital Mantra principle is: *Knowledge + Calculation = Success*."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 14,
                    columnNumber: 747
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/AboutUs.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4",
            children: "Why Choose Capital Mantra?"
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/AboutUs.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl text-emerald-500",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 28,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "IPO Research and GMP Tracking:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                            lineNumber: 28,
                            columnNumber: 105
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 dark:text-slate-400",
                            children: "In-depth information on DRHP, valuation, and key financials for every major IPO."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                            lineNumber: 28,
                            columnNumber: 168
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 28,
                    columnNumber: 100
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/AboutUs.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl text-emerald-500",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 35,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: "Simple Investment Blogs:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                            lineNumber: 35,
                            columnNumber: 105
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 dark:text-slate-400",
                            children: "Easy-to-understand articles on wealth creation, tax planning, and investment myths."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                            lineNumber: 35,
                            columnNumber: 162
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 35,
                    columnNumber: 100
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/AboutUs.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animationClass: "translate-y-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "border-b border-slate-200/70 bg-white py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:grid lg:grid-cols-12 lg:gap-16",
                        children: [
                            t0,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 mt-10 lg:mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950",
                                    children: [
                                        t1,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-sm text-slate-700 dark:text-slate-300",
                                            children: [
                                                t2,
                                                t3,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl text-emerald-500",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                            lineNumber: 42,
                                                            columnNumber: 574
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: "Financial Calculators:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 630
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                                    children: "Instant and accurate tools for SIP, EMI, and retirement planning."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 685
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                            lineNumber: 42,
                                                            columnNumber: 625
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                    lineNumber: 42,
                                                    columnNumber: 535
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                            lineNumber: 42,
                                            columnNumber: 458
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                    lineNumber: 42,
                                    columnNumber: 335
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                lineNumber: 42,
                                columnNumber: 290
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                        lineNumber: 42,
                        columnNumber: 235
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 42,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                lineNumber: 42,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/AboutUs.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c = AboutSection;
const __TURBOPACK__default__export__ = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$IpoSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/IpoSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/BlogSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$CalculatorSectionInfo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/CalculatorSectionInfo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$NewsletterSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/NewsletterSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$WhyIpoMatters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/WhyIpoMatters.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AboutUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AboutUs.jsx [app-client] (ecmascript)");
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
// Note: No need for activeView/detailData state here anymore!
// The page itself only renders the dashboard content.
const Dashboard = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "0449e9efbc2af063c3d454ebf5caa3cca5e7b4b5e214fe655b854cd48617eee9") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0449e9efbc2af063c3d454ebf5caa3cca5e7b4b5e214fe655b854cd48617eee9";
    }
    const goHome = _temp;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "fin-ipo-hub",
            className: "min-h-screen mt-10 font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    goHome: goHome
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 30,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 105
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$IpoSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 113
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$WhyIpoMatters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 127
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 144
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$CalculatorSectionInfo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 159
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AboutUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 180
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$NewsletterSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 30,
                            columnNumber: 196
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 30,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 30,
                    columnNumber: 224
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = Dashboard;
const __TURBOPACK__default__export__ = Dashboard;
function _temp(e) {
    if (e) {
        e.preventDefault();
    }
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_173560aa._.js.map