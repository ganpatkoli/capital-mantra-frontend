module.exports = [
"[project]/src/components/Layout/ThemeToggle.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>"); // Icons ke liye
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
"use client";
;
;
;
;
function ThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hydration mismatch se bachne ke liye
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 w-9 h-9"
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
        lineNumber: 89,
        columnNumber: 24
    }, this); // Blank space jab tak mount na ho
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        className: "p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-emerald-400 transition-all duration-300",
        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "text-yellow-400 w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 97,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "text-slate-700 w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
            lineNumber: 99,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/ThemeToggle.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
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
}),
"[project]/src/components/Layout/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/ThemeToggle.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Navbar = ({ goHome })=>{
    // ---------- STABLE HOOK ORDER ----------
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#hero");
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // fix hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    // ---------- SCROLL LOGIC ----------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let lastScroll = 0;
        const handleScroll = ()=>{
            const current = window.scrollY;
            setScrolled(current > 10);
            if (current > lastScroll && current > 80) {
                setHidden(true); // navbar hides
            } else {
                setHidden(false);
            }
            lastScroll = current;
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    // ---------- ACTIVE LINK TRACKER ----------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateActive = ()=>{
            setActive(window.location.hash || "#hero");
        };
        window.addEventListener("hashchange", updateActive);
        updateActive();
        return ()=>window.removeEventListener("hashchange", updateActive);
    }, []);
    // Prevent hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed w-full top-0 z-50 backdrop-blur-xl bg-white/0 dark:bg-slate-900/0 h-16"
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Navbar.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `
        fixed w-full top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        backdrop-blur-xl
        ${scrolled ? "bg-white/70 dark:bg-slate-950/70 shadow-lg border-b border-slate-200/20 dark:border-slate-800/20" : "bg-transparent border-b border-transparent"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: goHome,
                        className: "flex items-center gap-3 group cursor-pointer select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40 group-hover:scale-110 transition-transform",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Favicon.svg",
                                    alt: "logo",
                                    width: 40,
                                    height: 40,
                                    className: "w-[26px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo1.svg",
                                        alt: "FinIPO Hub",
                                        width: 150,
                                        height: 40,
                                        className: "w-[140px] group-hover:opacity-80 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-slate-500 dark:text-slate-400 tracking-wide",
                                        children: "Blogs • IPOs • Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "relative group transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${active === link.href ? "text-emerald-500" : ""}`,
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `
                    absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                    ${active === link.href ? "w-full bg-emerald-500" : "w-0 bg-emerald-500 group-hover:w-full"}
                  `
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#newsletter",
                                className: "relative rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-400 transition",
                                children: [
                                    "Get IPO Alerts",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -right-2 -top-2 h-3 w-3 bg-emerald-400 rounded-full animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -right-2 -top-2 h-3 w-3 bg-emerald-600 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(!open),
                                className: "p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition",
                                children: open ? "✖" : "☰"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Navbar.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col px-4 py-3 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search...",
                            className: "px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Navbar.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setOpen(false),
                                className: "px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70 transition",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/Layout/Navbar.jsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#newsletter",
                            className: "mt-2 rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition",
                            children: "Get IPO Alerts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/Navbar.jsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/Navbar.jsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Navbar.jsx",
                lineNumber: 161,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout/Navbar.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/components/Modules/AnimationWeb.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const AnimatedSection = ({ children, animationClass, rootMargin = '-100px 0px' })=>{
    // --- Custom Hook for Scroll Animations ---
    const useIntersectionObserver = (options)=>{
        const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
        const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            const observer = new IntersectionObserver(([entry])=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally stop observing once visible (for fade-in effects)
                    observer.unobserve(entry.target);
                }
            }, options);
            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
            return ()=>{
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            };
        }, [
            options
        ]);
        return [
            elementRef,
            isVisible
        ];
    };
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/AnimationWeb.jsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnimatedSection;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-ssr] (ecmascript)");
;
;
;
const Footer = ()=>{
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
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
            },
            {
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
            },
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
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                animationClass: "translate-y-10",
                rootMargin: "-50px 0px",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-200/70 py-10 dark:border-slate-800/70 bg-white dark:bg-slate-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-6xl px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-8 md:grid-cols-4",
                            children: [
                                links.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wider",
                                                children: section.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Footer.jsx",
                                                lineNumber: 46,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm",
                                                children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: item.href,
                                                            className: "text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Layout/Footer.jsx",
                                                            lineNumber: 52,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, itemIndex, false, {
                                                        fileName: "[project]/src/components/Layout/Footer.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/Footer.jsx",
                                                lineNumber: 49,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/Layout/Footer.jsx",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 md:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wider",
                                            children: "Start Your Capital Mantra Journey"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/Footer.jsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600 dark:text-slate-400 mb-4",
                                            children: "Explore our comprehensive IPO data and expert blogs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/Footer.jsx",
                                            lineNumber: 65,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#ipos",
                                            className: "inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400",
                                            children: "View IPO Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/Footer.jsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Footer.jsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/Footer.jsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Footer.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
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
                            lineNumber: 81,
                            columnNumber: 21
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
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden text-slate-400 sm:inline dark:text-slate-600",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-slate-800 dark:hover:text-slate-300",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden text-slate-400 sm:inline dark:text-slate-600",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 93,
                                    columnNumber: 25
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
                                            lineNumber: 95,
                                            columnNumber: 40
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " &",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-500 dark:text-emerald-400",
                                            children: " Tailwind CSS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/Footer.jsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/Footer.jsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout/Footer.jsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/Footer.jsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/Footer.jsx",
                lineNumber: 79,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/Modules/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/ThemeToggle.jsx [app-ssr] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-slate-900 dark:text-white mb-4",
                children: "Next.js Dark Mode"
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/Hero.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$ThemeToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Modules/Hero.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modules/Hero.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/Service/axios.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const baseURL = "http://localhost:5000/api";
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/src/hooks/useAPI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Service/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
function useAPI(path, params = {}) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // GET
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(path, params);
            setData(result);
            setError(null);
        } catch (err) {
            setError(err.message || "API Error");
        }
        setLoading(false);
    }, [
        path,
        JSON.stringify(params)
    ]);
    // POST
    const create = async (body = {}, extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])(path, body, extraParams);
    };
    // PUT
    const update = async (body = {}, extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPut"])(path, body, extraParams);
    };
    // DELETE
    const remove = async (extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiDelete"])(path, extraParams);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, [
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
}),
"[project]/src/components/Modules/IpoSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Sections/AllIpoSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// AnimatedSection और slugify को मान लिया गया है कि वे सही ढंग से आयात (import) किए गए हैं
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAPI.js [app-ssr] (ecmascript)");
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
const StatusBadge = ({ uiStatus })=>{
    let badgeClasses = "";
    switch(uiStatus){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ring-1 ${badgeClasses}`,
        children: uiStatus
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Helper component for Listing Gain
const ListingGainDisplay = ({ ipo })=>{
    // Ensure numerical comparison
    const gainValue = parseFloat(ipo.listing_gain_percent);
    const isGain = gainValue >= 0;
    const sign = isGain ? '▲' : '▼';
    const gainClasses = isGain ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-sm font-bold ${gainClasses}`,
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
        lineNumber: 63,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Helper component for GMP display
const GmpDisplay = ({ ipo })=>{
    if (ipo.status === "L") {
        return null;
    }
    if (!ipo.gmp || ipo.gmp === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 rounded-lg flex flex-col justify-center font-bold bg-slate-100 dark:bg-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center text-slate-500 dark:text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-wider",
                        children: "Live GMP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "--"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 78,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 77,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    let gmpClasses = "";
    let gmpBg = "";
    let gmpText = ipo.gmp_text;
    if (ipo.gmp_percent > 0) {
        gmpClasses = "text-emerald-700 dark:text-emerald-400";
        gmpBg = "bg-emerald-100 dark:bg-emerald-900/40";
        gmpText = `+${ipo.gmp_text}`;
    } else if (ipo.gmp_percent < 0) {
        gmpClasses = "text-red-700 dark:text-red-400";
        gmpBg = "bg-red-100 dark:bg-red-900/40";
    } else {
        // gmp is available but percent is 0
        gmpClasses = "text-slate-700 dark:text-slate-300";
        gmpBg = "bg-slate-100 dark:bg-slate-800";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-3 rounded-lg flex flex-col justify-center font-bold ${gmpBg}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-xs uppercase tracking-wider ${gmpClasses}`,
                    children: "Live GMP"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-lg ${gmpClasses}`,
                    children: gmpText
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 105,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 104,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Helper component for detail items
const DetailItem = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase font-medium text-slate-500 dark:text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 116,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-slate-800 dark:text-slate-100",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 117,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
// --------------------------------------------------------
// FILTER BAR 
// --------------------------------------------------------
const IpoFilterBar = ({ selectedStatus, setSelectedStatus, search, setSearch })=>{
    const STATUS_TABS = [
        "All",
        "Upcoming",
        "Ongoing",
        "Closed"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3  sm:flex-row sm:items-center sm:justify-between  dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-sm shadow-md sticky top-0 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 text-xs sm:text-[13px]",
                children: STATUS_TABS.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedStatus(status),
                        className: `rounded-full px-4 py-1.5 font-semibold transition duration-300 ${selectedStatus === status ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`,
                        children: status
                    }, status, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 135,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 133,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-full border border-slate-300  bg-slate-100/80 px-4 py-1.5 text-sm text-slate-700  dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 w-full sm:w-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search IPO name or exchange...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "w-full bg-transparent outline-none placeholder:text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 149,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 128,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --------------------------------------------------------
// IPO TABLE (Grid View) 
// --------------------------------------------------------
const IpoTable = ({ ipos })=>{
    if (!ipos.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-white/80 p-6 text-center  text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 backdrop-blur-sm",
            children: "No IPOs found matching the filter criteria."
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 172,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        children: ipos.map((ipo)=>{
            let dateDisplay;
            if (ipo.status === "L") {
                dateDisplay = `Listed: ${ipo.listing_date_display}`;
            } else {
                dateDisplay = `Open: ${ipo.open_date} - Close: ${ipo.close_date}`;
            }
            const showRange = ipo.gmp_low !== null && ipo.gmp_high !== null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/ipo/${ipo.id}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugify"])(ipo.name)}`,
                className: "flex flex-col relative rounded-xl border border-slate-200 bg-white p-4 shadow-lg  transition hover:shadow-xl hover:shadow-emerald-500/20  dark:border-slate-800 dark:bg-slate-900 overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold text-slate-900 dark:text-slate-50 truncate pr-4",
                                children: ipo.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 202,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                uiStatus: ipo.status_text == "Listed" ? "Closed" : ipo.ui_status
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 205,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 201,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3 pb-2 border-b border-slate-100 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    ipo.exchange || 'Mainboard',
                                    " / ",
                                    ipo.category || 'Main'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 210,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-slate-600 dark:text-slate-300",
                                children: dateDisplay
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 213,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 209,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                label: "Price Band",
                                value: ipo.price ? `₹${ipo.price}` : "--"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 220,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                label: "Lot Size",
                                value: ipo.lot_size || "--"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 221,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 219,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GmpDisplay, {
                        ipo: ipo
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 226,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    showRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "Live GMP Range ↑ | ↓",
                            value: `₹${ipo.gmp_low} - ₹${ipo.gmp_high}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 231,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 230,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-medium",
                                children: ipo.status === "L" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ListingGainDisplay, {
                                    ipo: ipo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                    lineNumber: 243,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : ipo.allotted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-emerald-600 dark:text-emerald-400",
                                    children: "✔ Allotment Published"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                    lineNumber: 245,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: [
                                        "Listing: ",
                                        ipo.listing_date_display
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                    lineNumber: 249,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 241,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  bg-emerald-500 text-white rounded-full shadow-md  transition group-hover:bg-emerald-600",
                                children: "View Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 256,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 239,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, ipo.id, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 192,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 180,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --------------------------------------------------------
// MAIN APP COMPONENT (With Pagination)
// --------------------------------------------------------
const App = ()=>{
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1); // Pagination State
    const { data: rawData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ipo/all");
    // Add UI status field and apply filtering/sorting
    const processedIpos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const sortedIpos = (rawData || []).map((ipo)=>({
                ...ipo,
                ui_status: mapStatusToUI(ipo.status)
            })).sort((a, b)=>{
            // Sort by a combination of status (Ongoing first) and then by open date
            const statusOrder = {
                "Ongoing": 1,
                "Upcoming": 2,
                "Closed": 3
            };
            if (statusOrder[a.ui_status] !== statusOrder[b.ui_status]) {
                return statusOrder[a.ui_status] - statusOrder[b.ui_status];
            }
            // For the same status, sort by date (newest first for Ongoing/Upcoming, latest listing for Closed)
            return new Date(b.open_date) - new Date(a.open_date);
        });
        // Apply search and status filtering
        return sortedIpos.filter((ipo)=>{
            const matchStatus = selectedStatus === "All" || ipo.ui_status === selectedStatus;
            const query = search.toLowerCase();
            const matchSearch = ipo.name.toLowerCase().includes(query) || ipo.exchange && ipo.exchange.toLowerCase().includes(query) || ipo.category && ipo.category.toLowerCase().includes(query) || ipo.status_text && ipo.status_text.toLowerCase().includes(query);
            return matchStatus && matchSearch;
        });
    }, [
        rawData,
        selectedStatus,
        search
    ]);
    // PAGINATION LOGIC
    const totalItems = processedIpos.length;
    const totalPages = Math.ceil(totalItems / LARGE_LIMIT);
    const paginatedIpos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const startIndex = (currentPage - 1) * LARGE_LIMIT;
        const endIndex = startIndex + LARGE_LIMIT;
        return processedIpos.slice(startIndex, endIndex);
    }, [
        processedIpos,
        currentPage
    ]);
    const handlePageChange = (newPage)=>{
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            // Scroll to the top of the section after navigation
            document.getElementById('ipo-dashboard-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-medium text-slate-600 dark:text-slate-400",
                children: "Loading IPO data..."
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 331,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 330,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "ipo-dashboard-section",
            className: "bg-slate-50 py-8 sm:py-12 min-h-screen dark:bg-slate-950 transition duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl w-full px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl",
                                children: "Live IPO Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 345,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xl",
                                children: "Track All Upcoming, Ongoing & Listed IPOs with live Grey Market Premium (GMP)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 348,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 344,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoFilterBar, {
                            selectedStatus: selectedStatus,
                            setSelectedStatus: setSelectedStatus,
                            search: search,
                            setSearch: setSearch
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 355,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 354,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
                            ipos: paginatedIpos
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/IpoSection.jsx",
                            lineNumber: 365,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 364,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex justify-center items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePageChange(currentPage - 1),
                                disabled: currentPage === 1,
                                className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                                children: "← Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 371,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium text-slate-700 dark:text-slate-300",
                                children: [
                                    "Page ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-extrabold text-emerald-600 dark:text-emerald-400",
                                        children: currentPage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                        lineNumber: 380,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 379,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePageChange(currentPage + 1),
                                disabled: currentPage === totalPages,
                                className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                                lineNumber: 383,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 370,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    totalPages <= 1 && totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-center text-sm text-slate-500",
                        children: [
                            "Showing all ",
                            totalItems,
                            " IPOs."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/IpoSection.jsx",
                        lineNumber: 393,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/IpoSection.jsx",
                lineNumber: 341,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/IpoSection.jsx",
            lineNumber: 338,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/IpoSection.jsx",
        lineNumber: 337,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/src/components/Modules/BlogSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Modules/MarketNewsSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
// Icons for visual hierarchy
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:5000/api/news?page=${page}&limit=${limit}`);
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
const MarketNewsFilters = ({ activeCategory, setActiveCategory, categories })=>{
    const filterCategories = [
        "All",
        ...categories
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 flex flex-wrap gap-3 items-center p-4 bg-slate-100/50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "w-4 h-4 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 44,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Sectors:"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 43,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            filterCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveCategory(cat),
                    // Filters: Flat, clean look with strong text contrast
                    className: `rounded-lg px-4 py-1.5 font-semibold text-sm transition duration-200 border ${activeCategory === cat ? "bg-emerald-600 border-emerald-700 text-white shadow-sm shadow-emerald-500/50" // Active: Solid background
                     : "bg-white border-slate-300 text-slate-800 hover:bg-emerald-50 hover:border-emerald-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600" // Inactive: Minimal border
                    }`,
                    children: cat
                }, cat, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const NewsCard = ({ news })=>{
    const formattedDate = new Date(news.date).toLocaleTimeString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: news.link,
        target: "_blank",
        rel: "noopener noreferrer",
        // Card: Border-only appearance, no shadow, subtle color line on hover
        className: "group flex flex-col rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md",
                                children: news.category || "General"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 dark:text-slate-400",
                                children: news.news_source || news.source
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-0.5 bg-emerald-500 mt-2 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold leading-snug text-slate-900 group-hover:text-emerald-600 transition dark:text-white",
                        children: news.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-0 pb-4 flex-grow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-relaxed text-slate-600 dark:text-slate-400",
                    children: news.summary || "No detailed summary available. Click to read the full article."
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-sm font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1 text-slate-500 dark:text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-4 h-4 text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                formattedDate
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 transition-all duration-200",
                            children: [
                                "Read More",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, news.title, true, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 74,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const MarketNewsSection = ()=>{
    const [allNews, setAllNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Pagination State
    const [pagedNews, setPagedNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filteredNews, setFilteredNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- EFFECT 1: Load data from API ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadNews = async ()=>{
            setIsLoading(true);
            // Fetching a large sample to allow client-side filtering/pagination across categories
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
    }, []);
    // --- EFFECT 2: Filter and Page on state change ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = allNews.filter((news)=>{
            if (activeCategory === "All") return true;
            return news.category === activeCategory;
        });
        const startIndex = (currentPage - 1) * DEFAULT_LIMIT;
        const endIndex = currentPage * DEFAULT_LIMIT;
        const paged = filtered.slice(startIndex, endIndex);
        setFilteredNews(filtered);
        setPagedNews(paged);
        setTotalPages(Math.ceil(filtered.length / DEFAULT_LIMIT));
    }, [
        activeCategory,
        allNews,
        currentPage
    ]);
    const handlePageChange = (newPage)=>{
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            document.getElementById('market-news').scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    // Determine if we should show the View All button
    const shouldShowViewAll = currentPage === MAX_PAGES_TO_SHOW && totalPages > MAX_PAGES_TO_SHOW;
    const shouldShowPaginationControls = totalPages > 1 && currentPage < MAX_PAGES_TO_SHOW;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "market-news",
        // Section Background: Very light for contrast
        className: "border-b border-slate-200/70 bg-white py-10 sm:py-28 dark:border-slate-800/70 dark:bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50 dark:bg-slate-950  border-slate-200 dark:border-slate-800 pt-1 pb-6 mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " text-center max-w-7xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "inline w-8 h-8 mr-3 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Financial News Digest: Real-Time Headlines"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 205,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-lg text-slate-600 dark:text-slate-400",
                                children: "Breaking headlines and curated intelligence from India's key financial sectors."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 209,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 203,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                    lineNumber: 202,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 201,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: !isLoading && allNews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketNewsFilters, {
                            activeCategory: activeCategory,
                            setActiveCategory: (cat)=>{
                                setActiveCategory(cat);
                                setCurrentPage(1);
                            },
                            categories: categories
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 222,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-full text-center py-24 text-emerald-600 font-semibold text-lg animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "inline w-6 h-6 mr-2 animate-bounce transform rotate-45"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Fetching latest market intelligence..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 236,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : pagedNews.length > 0 ? pagedNews.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsCard, {
                                news: news
                            }, index, false, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 242,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-full text-center py-20 text-slate-500 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6",
                            children: "No news found in the selected category or on this page."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/BlogSection.jsx",
                            lineNumber: 245,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 flex justify-center items-center gap-4",
                        children: [
                            shouldShowPaginationControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePageChange(currentPage - 1),
                                        disabled: currentPage === 1,
                                        className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                                lineNumber: 262,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Previous"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                        lineNumber: 257,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-medium text-slate-700 dark:text-slate-300",
                                        children: [
                                            "Page ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold text-emerald-600 dark:text-emerald-400",
                                                children: currentPage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                                lineNumber: 267,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " of ",
                                            MAX_PAGES_TO_SHOW
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                        lineNumber: 266,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePageChange(currentPage + 1),
                                        disabled: currentPage === MAX_PAGES_TO_SHOW,
                                        className: "flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
                                        children: [
                                            "Next ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                                lineNumber: 276,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                        lineNumber: 271,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            (shouldShowViewAll || totalPages <= MAX_PAGES_TO_SHOW && totalPages > 0) && // This button is visible after page 2, or if total pages is 1 or 2
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/view-all-news",
                                className: "ml-8 flex items-center gap-2 px-8 py-3 text-lg font-extrabold rounded-lg transition duration-200 bg-emerald-100 text-emerald-800 border-2 border-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800",
                                children: [
                                    "View All News",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5 transition-transform group-hover:translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                        lineNumber: 288,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                                lineNumber: 283,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/BlogSection.jsx",
                        lineNumber: 252,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/BlogSection.jsx",
                lineNumber: 217,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Modules/BlogSection.jsx",
        lineNumber: 195,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MarketNewsSection;
}),
"[project]/src/components/Modules/CalculatorSectionInfo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-ssr] (ecmascript)");
;
;
;
const CalculatorSection = ()=>{
    const CALCULATOR_LIST = [
        {
            title: "SIP Return Calculator",
            icon: "📊",
            description: "Calculate how much your investment will grow over time through a Systematic Investment Plan (SIP). Understand the power of compound interest."
        },
        {
            title: "Lump Sum Investment Calculator",
            icon: "📈",
            description: "Estimate future returns and maturity value on a one-time (Lump Sum) investment. Set your financial goals."
        },
        {
            title: "Retirement Corpus Planner",
            icon: "👴",
            description: "Find out how much capital (corpus) you will need for retirement and how much you should start saving today."
        },
        {
            title: "Loan EMI Calculator",
            icon: "🏠",
            description: "Accurately calculate the monthly installment (EMI) for your Home, Car, or Personal Loan. Simplify your budget."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        animationClass: "translate-y-10",
        rootMargin: "-150px 0px",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "calculators",
            className: "py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/70 dark:border-slate-800/70",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto space-y-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-fuchsia-600 dark:text-fuchsia-300",
                                children: "Capital Mantra Tools"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50",
                                children: "Free Financial Calculators: Optimize SIP, EMI, and Retirement Planning."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed text-slate-700 dark:text-slate-300",
                                children: "Accurately plan your financial goals using Capital Mantra's investment and finance calculators. Strengthen your capital with tools for SIP Returns, EMI, and Retirement planning."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                        children: CALCULATOR_LIST.map((calc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-6 border border-slate-200 bg-slate-50/70 shadow-lg dark:border-slate-800 dark:bg-slate-950/70 transform transition duration-300 hover:shadow-fuchsia-500/20 hover:scale-[1.02]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-3",
                                        children: calc.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-900 dark:text-slate-50 mb-2",
                                        children: calc.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600 dark:text-slate-400",
                                        children: calc.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "mt-3 inline-flex items-center text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 transition",
                                        children: "Use Calculator →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                        lineNumber: 60,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
                lineNumber: 34,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
            lineNumber: 30,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/CalculatorSectionInfo.jsx",
        lineNumber: 29,
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
"[project]/src/components/Modules/WhyIpoMatters.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-ssr] (ecmascript)");
;
;
;
const WhyIposMatterSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        animationClass: "translate-y-10",
        rootMargin: "-50px 0px",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "why-ipos",
            className: "border-b border-slate-200/70 bg-slate-100 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-300",
                                children: "Investment Opportunity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50",
                                children: "Maximize Returns: Why Investing in Indian IPOs is Crucial for Portfolio Growth."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed text-slate-700 dark:text-slate-300",
                                children: "An Initial Public Offering (IPO) provides early access to high-growth companies. At Capital Mantra, we highlight how smart IPO participation offers long-term portfolio diversification, not just quick listing gains."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-emerald-600 dark:text-emerald-400",
                                        children: "Growth Potential"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-700 dark:text-slate-300",
                                        children: "IPOs offer an opportunity to invest in new companies with rapid growth potential in emerging sectors."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                        lineNumber: 26,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-cyan-600 dark:text-cyan-400",
                                        children: "Liquidity Advantage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-700 dark:text-slate-300",
                                        children: "Once listed, your shares can be easily sold, providing high liquidity compared to unlisted investments."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                        lineNumber: 30,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400",
                                        children: "Market Insight"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-700 dark:text-slate-300",
                                        children: "The detailed information required for the IPO process gives you a deep understanding of the company's fundamentals and strategy."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
            lineNumber: 7,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/WhyIpoMatters.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyIposMatterSection;
}),
"[project]/src/components/Modules/AboutUs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AnimationWeb.jsx [app-ssr] (ecmascript)");
;
;
;
const AboutSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AnimationWeb$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        animationClass: "translate-y-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "border-b border-slate-200/70 bg-white py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:grid lg:grid-cols-12 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-600 dark:text-cyan-300",
                                    children: "Our Mission"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50",
                                    children: "Our Mission: Empowering Confident Investment Decisions in the Indian Share Market."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                    lineNumber: 17,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300",
                                    children: "Capital Mantra was established with a single vision: to simplify financial markets for India's retail investors. We bridge the gap between complex financial terminology and useful investment knowledge."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300",
                                    children: "Our focus is on data-driven IPO analysis, Grey Market Premium (GMP) tracking, and reliable educational content, so that you are always informed. Our Capital Mantra principle is: *Knowledge + Calculation = Success*."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 mt-10 lg:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4",
                                        children: "Why Choose Capital Mantra?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                        lineNumber: 29,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 text-sm text-slate-700 dark:text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl text-emerald-500",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                        lineNumber: 32,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "IPO Research and GMP Tracking:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                lineNumber: 34,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                                children: "In-depth information on DRHP, valuation, and key financials for every major IPO."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                lineNumber: 35,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                lineNumber: 31,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl text-emerald-500",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "Simple Investment Blogs:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                lineNumber: 41,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                                children: "Easy-to-understand articles on wealth creation, tax planning, and investment myths."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                lineNumber: 42,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                        lineNumber: 40,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                lineNumber: 38,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl text-emerald-500",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                        lineNumber: 46,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "Financial Calculators:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                lineNumber: 48,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                                children: "Instant and accurate tools for SIP, EMI, and retirement planning."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                                lineNumber: 49,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                                lineNumber: 45,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                        lineNumber: 30,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modules/AboutUs.jsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modules/AboutUs.jsx",
                    lineNumber: 12,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Modules/AboutUs.jsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Modules/AboutUs.jsx",
            lineNumber: 7,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Modules/AboutUs.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AboutSection;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$CalculatorSectionInfo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/CalculatorSectionInfo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$NewsletterSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/NewsletterSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$WhyIpoMatters$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/WhyIpoMatters.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AboutUs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modules/AboutUs.jsx [app-ssr] (ecmascript)");
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
        className: "min-h-screen mt-10 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                goHome: goHome
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$Hero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$IpoSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 32,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$WhyIpoMatters$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 33,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$BlogSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$CalculatorSectionInfo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$AboutUs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modules$2f$NewsletterSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 37,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 29,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Dashboard;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__606062cb._.js.map