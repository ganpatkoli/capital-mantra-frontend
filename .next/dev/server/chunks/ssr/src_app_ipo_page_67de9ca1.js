module.exports = [
"[project]/src/app/ipo/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
// Using 'lucide-react' icons via inline SVG fallback for completeness
const FilterIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 8,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
// -----------------------------
// ENHANCED STATIC IPO DATA (DEMO)
// -----------------------------
const IPO_DATA = [
    {
        id: 1551,
        name: "Prodocs Solutions",
        exchange: "BSE",
        category: "SME",
        price: 138,
        gmp_percent: 0,
        gmp_text: "₹-- (0.00%)",
        subscription: "2.66x",
        rating: {
            emoji: "🔥",
            score: "1/5"
        },
        listing_gain_percent: 4.35,
        status_text: "Listed"
    },
    {
        id: 1549,
        name: "Corona Remedies IPO",
        exchange: "NSE",
        category: "Mainboard",
        price: 1062,
        gmp_percent: 32.25,
        gmp_text: "₹342.5 (32.25%)",
        subscription: "144.54x",
        rating: {
            emoji: "🔥🔥🔥🔥",
            score: "4/5"
        },
        listing_gain_percent: 38.42,
        status_text: "Listed"
    },
    {
        id: 1548,
        name: "K. V. Toys India",
        exchange: "BSE",
        category: "SME",
        price: 239,
        gmp_percent: 53.97,
        gmp_text: "₹129 (53.97%)",
        subscription: "352.63x",
        rating: {
            emoji: "🔥🔥🔥🔥🔥",
            score: "5/5"
        },
        listing_gain_percent: 33.89,
        status_text: "Listed"
    },
    {
        id: 1555,
        name: "Tech Innovators Ltd.",
        exchange: "NSE",
        category: "Mainboard",
        price: 350,
        gmp_percent: 15.00,
        gmp_text: "₹52.50 (15.00%)",
        subscription: "45.12x",
        rating: {
            emoji: "🔥🔥🔥",
            score: "3/5"
        },
        listing_gain_percent: null,
        status_text: "Open"
    },
    {
        id: 1554,
        name: "Agri Products SME",
        exchange: "BSE",
        category: "SME",
        price: 55,
        gmp_percent: 25.00,
        gmp_text: "₹13.75 (25.00%)",
        subscription: "120.78x",
        rating: {
            emoji: "🔥🔥🔥🔥",
            score: "4/5"
        },
        listing_gain_percent: null,
        status_text: "Open"
    },
    {
        id: 1553,
        name: "Pharma Giants Co.",
        exchange: "NSE",
        category: "Mainboard",
        price: 980,
        gmp_percent: 0,
        gmp_text: "₹-- (0.00%)",
        subscription: "1.05x",
        rating: {
            emoji: "🔥",
            score: "1/5"
        },
        listing_gain_percent: null,
        status_text: "Closed"
    }
];
// -----------------------------
// HELPER FUNCTIONS
// -----------------------------
// Helper to extract numerical rating score (e.g., "4/5" -> 4)
const getScoreValue = (ipo)=>{
    const scoreText = ipo.rating?.score;
    if (!scoreText) return 0;
    return parseInt(scoreText.split('/')[0]) || 0;
};
const FilterChips = ({ label, filterKey, activeValue, options, onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 111,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: options.map((option)=>{
                    const isActive = activeValue === option.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange(filterKey, option.value),
                        className: `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 shadow-sm
                                ${isActive ? 'bg-blue-600 text-white shadow-blue-400/50 hover:bg-blue-700' : 'bg-white text-slate-700 border border-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'}`,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 118,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 114,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 110,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Sortable Table Header Component (includes visual sort indicator)
const SortableHeader = ({ label, sortKey, requestSort, getSortIndicator, isSticky = false, isRightAligned = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        onClick: ()=>requestSort(sortKey),
        className: `px-4 py-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700/80 transition duration-150 
            ${isSticky ? 'sticky left-0 z-20 bg-slate-100 dark:bg-slate-800' : ''}
            ${isRightAligned ? 'text-right' : 'text-left'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-1 ${isRightAligned ? 'justify-end' : 'justify-start'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 145,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base text-blue-500",
                    children: getSortIndicator(sortKey)
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 147,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 144,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const IpoTable = ({ data: data1, requestSort, getSortIndicator })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-[1000px] w-full text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-100 dark:bg-slate-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
                                label: "Company",
                                sortKey: "name",
                                requestSort: requestSort,
                                getSortIndicator: getSortIndicator,
                                isSticky: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 161,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left",
                                children: "Category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 169,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
                                label: "Price Band",
                                sortKey: "price",
                                requestSort: requestSort,
                                getSortIndicator: getSortIndicator,
                                isRightAligned: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 171,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
                                label: "GMP (Current)",
                                sortKey: "gmp_percent",
                                requestSort: requestSort,
                                getSortIndicator: getSortIndicator
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 179,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
                                label: "Subscription",
                                sortKey: "subscription",
                                requestSort: requestSort,
                                getSortIndicator: getSortIndicator,
                                isRightAligned: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 186,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
                                label: "Rating",
                                sortKey: "rating_score",
                                requestSort: requestSort,
                                getSortIndicator: getSortIndicator
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 194,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
                                label: "Listing Gain",
                                sortKey: "listing_gain_percent",
                                requestSort: requestSort,
                                getSortIndicator: getSortIndicator,
                                isRightAligned: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 201,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 rounded-tr-xl text-left",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 209,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 159,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 158,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-slate-200 dark:divide-slate-800",
                    children: data1.length > 0 ? data1.map((ipo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 sticky left-0 z-10 bg-white dark:bg-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-slate-900 dark:text-white truncate max-w-xs",
                                            children: ipo.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 223,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                ipo.exchange || "—",
                                                " ",
                                                ipo.category && `• ${ipo.category}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 226,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 222,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-slate-600 dark:text-slate-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-0.5 rounded-full text-xs font-medium ${ipo.category === "SME" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"}`,
                                        children: ipo.category || "Mainboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 233,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 232,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 font-medium text-slate-800 dark:text-slate-200 text-right",
                                    children: [
                                        "₹",
                                        ipo.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 244,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 rounded-full text-xs font-semibold 
                      ${ipo.gmp_percent > 0 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"}`,
                                        children: ipo.gmp_text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 250,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 249,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-slate-700 dark:text-slate-300 font-mono text-right",
                                    children: ipo.subscription
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 261,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: ipo.rating?.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ipo/page.js",
                                                lineNumber: 268,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                children: [
                                                    "(",
                                                    ipo.rating?.score,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ipo/page.js",
                                                lineNumber: 269,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 267,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 266,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-right",
                                    children: ipo.listing_gain_percent !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-semibold 
                        ${ipo.listing_gain_percent > 0 ? "text-emerald-600 dark:text-emerald-400" : ipo.listing_gain_percent < 0 ? "text-rose-600 dark:text-rose-400" : "text-slate-500"}`,
                                        children: [
                                            ipo.listing_gain_percent > 0 ? "▲" : ipo.listing_gain_percent < 0 ? "▼" : "",
                                            Math.abs(ipo.listing_gain_percent),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 278,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 dark:text-slate-600",
                                        children: "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 290,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 276,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                        status: ipo.status_text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 296,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 295,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, ipo.id, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 217,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: "8",
                            className: "text-center py-10 text-slate-500 dark:text-slate-400",
                            children: "No IPOs found matching the current filters."
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 302,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 301,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 214,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 156,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 155,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const StatusBadge = ({ status })=>{
    let colorClasses = "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
    if (status === "Listed") {
        colorClasses = "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
    } else if (status === "Open") {
        colorClasses = "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
    } else if (status === "Closed") {
        colorClasses = "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-3 py-1 rounded-full text-xs font-semibold ${colorClasses}`,
        children: status
    }, void 0, false, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 325,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// -----------------------------
// MAIN APP COMPONENT
// -----------------------------
const App = ()=>{
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        category: "All",
        status: "All"
    });
    // State for sorting configuration
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        key: 'listing_gain_percent',
        direction: 'descending'
    });
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Local state for dark mode toggle
    // Detect system preference for initial dark mode state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (document.documentElement.classList.contains('dark') || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);
    // --- Sorting Logic ---
    const requestSort = (key)=>{
        let direction = 'ascending';
        // If the same key is clicked, toggle direction
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
            // Third click resets to default sort (optional: could set key to null)
            direction = 'ascending';
        }
        setSortConfig({
            key,
            direction
        });
    };
    const getSortIndicator = (key)=>{
        if (sortConfig.key !== key) return '↕'; // Default indicator
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };
    // --- Filtering and Sorting Combined Logic ---
    const displayData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { data: rawData, loading } = useAPi("ipo/all");
        let currentData = data;
        // 1. Filtering (from external chips)
        if (filters.category !== "All") {
            currentData = currentData.filter((ipo)=>ipo.category === filters.category);
        }
        if (filters.status !== "All") {
            currentData = currentData.filter((ipo)=>ipo.status_text === filters.status);
        }
        // 2. Sorting (from table headers)
        if (sortConfig.key !== null) {
            const sorted = [
                ...currentData
            ].sort((a, b)=>{
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];
                // Custom key handling
                if (sortConfig.key === 'subscription') {
                    aValue = parseFloat(String(a.subscription).replace('x', '')) || 0;
                    bValue = parseFloat(String(b.subscription).replace('x', '')) || 0;
                } else if (sortConfig.key === 'rating_score') {
                    aValue = getScoreValue(a);
                    bValue = getScoreValue(b);
                } else if (sortConfig.key === 'gmp_percent') {
                    aValue = a.gmp_percent || 0;
                    bValue = b.gmp_percent || 0;
                }
                // Handle null/undefined values for sorting (move them to the end)
                if (aValue === null || aValue === undefined) return sortConfig.direction === 'ascending' ? 1 : -1;
                if (bValue === null || bValue === undefined) return sortConfig.direction === 'ascending' ? -1 : 1;
                // Standard comparison
                if (aValue < bValue) {
                    return -1;
                }
                if (aValue > bValue) {
                    return 1;
                }
                return 0;
            });
            // Apply direction
            if (sortConfig.direction === 'descending') {
                sorted.reverse();
            }
            return sorted;
        }
        return currentData;
    }, [
        filters,
        sortConfig
    ]);
    const handleFilterChange = (key, value)=>{
        // If the same chip is clicked, reset the filter to "All"
        if (filters[key] === value) {
            setFilters((prev)=>({
                    ...prev,
                    [key]: "All"
                }));
        } else {
            setFilters((prev)=>({
                    ...prev,
                    [key]: value
                }));
        }
    };
    const toggleDarkMode = ()=>{
        setIsDarkMode((prev)=>{
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    };
    return(// <div className={`min-h-screen mt-20  p-4 sm:p-8 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-20 bg-white max-w-7xl mx-auto dark:bg-slate-950 transition-colors duration-300 min-h-[90vh] rounded-3xl p-4 sm:p-8 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-100 dark:border-slate-800 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-extrabold text-slate-900 dark:text-white",
                            children: "IPO Tracker"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 457,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleDarkMode,
                            className: "mt-3 sm:mt-0 p-2 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition",
                            "aria-label": "Toggle dark mode",
                            children: isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 460,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 456,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 shadow-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterIcon, {
                                    className: "w-6 h-6 mr-2 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 472,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "IPO Filters"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 471,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChips, {
                                    label: "Filter by Category",
                                    filterKey: "category",
                                    activeValue: filters.category,
                                    options: [
                                        {
                                            value: "All",
                                            label: "Show All"
                                        },
                                        {
                                            value: "Mainboard",
                                            label: "Mainboard IPOs"
                                        },
                                        {
                                            value: "SME",
                                            label: "SME IPOs"
                                        }
                                    ],
                                    onChange: handleFilterChange
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 477,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChips, {
                                    label: "Filter by Status",
                                    filterKey: "status",
                                    activeValue: filters.status,
                                    options: [
                                        {
                                            value: "All",
                                            label: "Show All"
                                        },
                                        {
                                            value: "Listed",
                                            label: "Listed"
                                        },
                                        {
                                            value: "Open",
                                            label: "Open Now"
                                        },
                                        {
                                            value: "Closed",
                                            label: "Closed"
                                        }
                                    ],
                                    onChange: handleFilterChange
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 489,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 476,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 470,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
                    data: displayData,
                    requestSort: requestSort,
                    getSortIndicator: getSortIndicator
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 505,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-3",
                            children: "Invest Smarter with Capital Mantra: Your Edge in IPO Investing"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 512,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",
                            children: "Welcome to the Capital Mantra IPO Performance Tracker. We cut through the noise of the stock market to deliver crystal-clear insights on every Initial Public Offering (IPO). Whether you are analyzing a large Mainline IPO or assessing the potential of a growing SME IPO, our standardized metrics—including the comprehensive Composite Score, detailed Subscription rates, and insightful Price Trends—empower you to maximize your returns. We are your reliable investment analysis tool for achieving exceptional listing gains on both the BSE and NSE."
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 515,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 dark:text-gray-400",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Capital Mantra. All rights reserved. Data tracking includes analysis of Grey Market Premium (GMP), P/E Valuation, and historic listing performance. Make confident investment decisions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 518,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 511,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 455,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false));
};
const __TURBOPACK__default__export__ = App;
}),
];

//# sourceMappingURL=src_app_ipo_page_67de9ca1.js.map