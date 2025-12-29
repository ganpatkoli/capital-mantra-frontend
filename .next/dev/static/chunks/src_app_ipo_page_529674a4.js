(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/ipo/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
'use client';
;
;
// Using 'lucide-react' icons via inline SVG fallback for completeness
const FilterIcon = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = props;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_c = FilterIcon;
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
        status_text: "Open" // New status
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
        status_text: "Open" // New status
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
        status_text: "Closed" // New status
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
const FilterChips = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd";
    }
    const { label, filterKey, activeValue, options, onChange } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 155,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== activeValue || $[4] !== filterKey || $[5] !== onChange || $[6] !== options) {
        let t3;
        if ($[8] !== activeValue || $[9] !== filterKey || $[10] !== onChange) {
            t3 = (option)=>{
                const isActive = activeValue === option.value;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange(filterKey, option.value),
                    className: `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 shadow-sm
                                ${isActive ? "bg-blue-600 text-white shadow-blue-400/50 hover:bg-blue-700" : "bg-white text-slate-700 border border-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600"}`,
                    children: option.label
                }, option.value, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 167,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[8] = activeValue;
            $[9] = filterKey;
            $[10] = onChange;
            $[11] = t3;
        } else {
            t3 = $[11];
        }
        t2 = options.map(t3);
        $[3] = activeValue;
        $[4] = filterKey;
        $[5] = onChange;
        $[6] = options;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[12] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 188,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] !== t1 || $[15] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 w-full",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t1;
        $[15] = t3;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    return t4;
};
_c1 = FilterChips;
// Sortable Table Header Component (includes visual sort indicator)
const SortableHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd";
    }
    const { label, sortKey, requestSort, getSortIndicator, isSticky: t1, isRightAligned: t2 } = t0;
    const isSticky = t1 === undefined ? false : t1;
    const isRightAligned = t2 === undefined ? false : t2;
    let t3;
    if ($[1] !== requestSort || $[2] !== sortKey) {
        t3 = ()=>requestSort(sortKey);
        $[1] = requestSort;
        $[2] = sortKey;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = `px-4 py-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700/80 transition duration-150 
            ${isSticky ? "sticky left-0 z-20 bg-slate-100 dark:bg-slate-800" : ""}
            ${isRightAligned ? "text-right" : "text-left"}`;
    const t5 = `flex items-center gap-1 ${isRightAligned ? "justify-end" : "justify-start"}`;
    let t6;
    if ($[4] !== label) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 240,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = label;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== getSortIndicator || $[7] !== sortKey) {
        t7 = getSortIndicator(sortKey);
        $[6] = getSortIndicator;
        $[7] = sortKey;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-base text-blue-500",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 257,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t5 || $[12] !== t6 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 265,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
        $[12] = t6;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t3 || $[16] !== t4 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            onClick: t3,
            className: t4,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 275,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t3;
        $[16] = t4;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    return t10;
};
_c2 = SortableHeader;
const IpoTable = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd";
    }
    const { data: data1, requestSort, getSortIndicator } = t0;
    let t1;
    if ($[1] !== getSortIndicator || $[2] !== requestSort) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
            label: "Company",
            sortKey: "name",
            requestSort: requestSort,
            getSortIndicator: getSortIndicator,
            isSticky: true
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 300,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = getSortIndicator;
        $[2] = requestSort;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-3 text-left",
            children: "Category"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 309,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[5] !== getSortIndicator || $[6] !== requestSort) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
            label: "Price Band",
            sortKey: "price",
            requestSort: requestSort,
            getSortIndicator: getSortIndicator,
            isRightAligned: true
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 320,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
            label: "GMP (Current)",
            sortKey: "gmp_percent",
            requestSort: requestSort,
            getSortIndicator: getSortIndicator
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 321,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
            label: "Subscription",
            sortKey: "subscription",
            requestSort: requestSort,
            getSortIndicator: getSortIndicator,
            isRightAligned: true
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 322,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
            label: "Rating",
            sortKey: "rating_score",
            requestSort: requestSort,
            getSortIndicator: getSortIndicator
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 323,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableHeader, {
            label: "Listing Gain",
            sortKey: "listing_gain_percent",
            requestSort: requestSort,
            getSortIndicator: getSortIndicator,
            isRightAligned: true
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 324,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = getSortIndicator;
        $[6] = requestSort;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-3 rounded-tr-xl text-left",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 341,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t1 || $[14] !== t3 || $[15] !== t4 || $[16] !== t5 || $[17] !== t6 || $[18] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-slate-100 dark:bg-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700",
                children: [
                    t1,
                    t2,
                    " ",
                    t3,
                    t4,
                    t5,
                    t6,
                    t7,
                    t8,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 348,
                columnNumber: 60
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 348,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t1;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== data1) {
        t10 = data1.length > 0 ? data1.map(_temp) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: "8",
                className: "text-center py-10 text-slate-500 dark:text-slate-400",
                children: "No IPOs found matching the current filters."
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 361,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 361,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = data1;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: "divide-y divide-slate-200 dark:divide-slate-800",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 369,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-[1000px] w-full text-sm",
                children: [
                    t9,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 377,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
        $[25] = t9;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    return t12;
};
_c3 = IpoTable;
const StatusBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd";
    }
    const { status } = t0;
    let colorClasses = "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
    if (status === "Listed") {
        colorClasses = "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
    } else {
        if (status === "Open") {
            colorClasses = "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
        } else {
            if (status === "Closed") {
                colorClasses = "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300";
            }
        }
    }
    const t1 = `px-3 py-1 rounded-full text-xs font-semibold ${colorClasses}`;
    let t2;
    if ($[1] !== status || $[2] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: status
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 412,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = status;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c4 = StatusBadge;
// -----------------------------
// MAIN APP COMPONENT
// -----------------------------
const App = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30d19d695458449eff0cf071216eb256211d0b6db4c026edc906604990a277cd";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            category: "All",
            status: "All"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            key: "listing_gain_percent",
            direction: "descending"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            if (document.documentElement.classList.contains("dark") || window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== sortConfig.direction || $[6] !== sortConfig.key) {
        t4 = (key)=>{
            let direction = "ascending";
            if (sortConfig.key === key && sortConfig.direction === "ascending") {
                direction = "descending";
            } else {
                if (sortConfig.key === key && sortConfig.direction === "descending") {
                    direction = "ascending";
                }
            }
            setSortConfig({
                key,
                direction
            });
        };
        $[5] = sortConfig.direction;
        $[6] = sortConfig.key;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const requestSort = t4;
    let t5;
    if ($[8] !== sortConfig.direction || $[9] !== sortConfig.key) {
        t5 = (key_0)=>{
            if (sortConfig.key !== key_0) {
                return "\u2195";
            }
            return sortConfig.direction === "ascending" ? "\u25B2" : "\u25BC";
        };
        $[8] = sortConfig.direction;
        $[9] = sortConfig.key;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const getSortIndicator = t5;
    let t6;
    bb0: {
        useAPi("ipo/all");
        let currentData = data;
        if (filters.category !== "All") {
            let t7;
            if ($[11] !== filters.category) {
                t7 = (ipo)=>ipo.category === filters.category;
                $[11] = filters.category;
                $[12] = t7;
            } else {
                t7 = $[12];
            }
            currentData = data.filter(t7);
        }
        if (filters.status !== "All") {
            let t7;
            if ($[13] !== filters.status) {
                t7 = (ipo_0)=>ipo_0.status_text === filters.status;
                $[13] = filters.status;
                $[14] = t7;
            } else {
                t7 = $[14];
            }
            currentData = currentData.filter(t7);
        }
        if (sortConfig.key !== null) {
            let t7;
            if ($[15] !== sortConfig.direction || $[16] !== sortConfig.key) {
                t7 = (a, b)=>{
                    let aValue = a[sortConfig.key];
                    let bValue = b[sortConfig.key];
                    if (sortConfig.key === "subscription") {
                        aValue = parseFloat(String(a.subscription).replace("x", "")) || 0;
                        bValue = parseFloat(String(b.subscription).replace("x", "")) || 0;
                    } else {
                        if (sortConfig.key === "rating_score") {
                            aValue = getScoreValue(a);
                            bValue = getScoreValue(b);
                        } else {
                            if (sortConfig.key === "gmp_percent") {
                                aValue = a.gmp_percent || 0;
                                bValue = b.gmp_percent || 0;
                            }
                        }
                    }
                    if (aValue === null || aValue === undefined) {
                        return sortConfig.direction === "ascending" ? 1 : -1;
                    }
                    if (bValue === null || bValue === undefined) {
                        return sortConfig.direction === "ascending" ? -1 : 1;
                    }
                    if (aValue < bValue) {
                        return -1;
                    }
                    if (aValue > bValue) {
                        return 1;
                    }
                    return 0;
                };
                $[15] = sortConfig.direction;
                $[16] = sortConfig.key;
                $[17] = t7;
            } else {
                t7 = $[17];
            }
            const sorted = [
                ...currentData
            ].sort(t7);
            if (sortConfig.direction === "descending") {
                sorted.reverse();
            }
            t6 = sorted;
            break bb0;
        }
        t6 = currentData;
    }
    const displayData = t6;
    let t7;
    if ($[18] !== filters) {
        t7 = (key_1, value)=>{
            if (filters[key_1] === value) {
                setFilters((prev)=>({
                        ...prev,
                        [key_1]: "All"
                    }));
            } else {
                setFilters((prev_0)=>({
                        ...prev_0,
                        [key_1]: value
                    }));
            }
        };
        $[18] = filters;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const handleFilterChange = t7;
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ()=>{
            setIsDarkMode(_temp2);
        };
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const toggleDarkMode = t8;
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-extrabold text-slate-900 dark:text-white",
            children: "IPO Tracker"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 622,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const t10 = isDarkMode ? "\u2600\uFE0F Light Mode" : "\uD83C\uDF19 Dark Mode";
    let t11;
    if ($[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-100 dark:border-slate-800 mb-6",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleDarkMode,
                    className: "mt-3 sm:mt-0 p-2 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition",
                    "aria-label": "Toggle dark mode",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 630,
                    columnNumber: 163
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 630,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterIcon, {
                    className: "w-6 h-6 mr-2 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 638,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0)),
                "IPO Filters"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 638,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = [
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
        ];
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== filters.category || $[27] !== handleFilterChange) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChips, {
            label: "Filter by Category",
            filterKey: "category",
            activeValue: filters.category,
            options: t13,
            onChange: handleFilterChange
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 661,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = filters.category;
        $[27] = handleFilterChange;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = [
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
        ];
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== filters.status || $[31] !== handleFilterChange) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChips, {
            label: "Filter by Status",
            filterKey: "status",
            activeValue: filters.status,
            options: t15,
            onChange: handleFilterChange
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 689,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = filters.status;
        $[31] = handleFilterChange;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t14 || $[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 shadow-inner",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6",
                    children: [
                        t14,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 698,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 698,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t14;
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== displayData || $[37] !== getSortIndicator || $[38] !== requestSort) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
            data: displayData,
            requestSort: requestSort,
            getSortIndicator: getSortIndicator
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 707,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = displayData;
        $[37] = getSortIndicator;
        $[38] = requestSort;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    let t20;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-3",
            children: "Invest Smarter with Capital Mantra: Your Edge in IPO Investing"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 718,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",
            children: "Welcome to the Capital Mantra IPO Performance Tracker. We cut through the noise of the stock market to deliver crystal-clear insights on every Initial Public Offering (IPO). Whether you are analyzing a large Mainline IPO or assessing the potential of a growing SME IPO, our standardized metrics—including the comprehensive Composite Score, detailed Subscription rates, and insightful Price Trends—empower you to maximize your returns. We are your reliable investment analysis tool for achieving exceptional listing gains on both the BSE and NSE."
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 719,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t19;
        $[41] = t20;
    } else {
        t19 = $[40];
        t20 = $[41];
    }
    let t21;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 text-center",
            children: [
                t19,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 dark:text-gray-400",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Capital Mantra. All rights reserved. Data tracking includes analysis of Grey Market Premium (GMP), P/E Valuation, and historic listing performance. Make confident investment decisions."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 728,
                    columnNumber: 128
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 728,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== t11 || $[44] !== t17 || $[45] !== t18) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 bg-white max-w-7xl mx-auto dark:bg-slate-950 transition-colors duration-300 min-h-[90vh] rounded-3xl p-4 sm:p-8 shadow-2xl",
                children: [
                    t11,
                    t17,
                    t18,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 735,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[43] = t11;
        $[44] = t17;
        $[45] = t18;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    return t22;
};
_s(App, "XSKy6hw8JraQLBiyprPE0JnPkwU=");
_c5 = App;
const __TURBOPACK__default__export__ = App;
function _temp(ipo) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 sticky left-0 z-10 bg-white dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium text-slate-900 dark:text-white truncate max-w-xs",
                        children: ipo.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 747,
                        columnNumber: 167
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: [
                            ipo.exchange || "\u2014",
                            " ",
                            ipo.category && `• ${ipo.category}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 747,
                        columnNumber: 261
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 747,
                columnNumber: 95
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 text-slate-600 dark:text-slate-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-0.5 rounded-full text-xs font-medium ${ipo.category === "SME" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"}`,
                    children: ipo.category || "Mainboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 747,
                    columnNumber: 437
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 747,
                columnNumber: 376
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 font-medium text-slate-800 dark:text-slate-200 text-right",
                children: [
                    "₹",
                    ipo.price
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 747,
                columnNumber: 715
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-2 py-1 rounded-full text-xs font-semibold 
                      ${ipo.gmp_percent > 0 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"}`,
                    children: ipo.gmp_text
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 747,
                    columnNumber: 842
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 747,
                columnNumber: 816
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 text-slate-700 dark:text-slate-300 font-mono text-right",
                children: ipo.subscription
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 748,
                columnNumber: 225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: ipo.rating?.emoji
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 748,
                            columnNumber: 397
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-500 dark:text-slate-400",
                            children: [
                                "(",
                                ipo.rating?.score,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 748,
                            columnNumber: 429
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 748,
                    columnNumber: 356
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 748,
                columnNumber: 330
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 text-right",
                children: ipo.listing_gain_percent !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-semibold 
                        ${ipo.listing_gain_percent > 0 ? "text-emerald-600 dark:text-emerald-400" : ipo.listing_gain_percent < 0 ? "text-rose-600 dark:text-rose-400" : "text-slate-500"}`,
                    children: [
                        ipo.listing_gain_percent > 0 ? "\u25B2" : ipo.listing_gain_percent < 0 ? "\u25BC" : "",
                        Math.abs(ipo.listing_gain_percent),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 748,
                    columnNumber: 603
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-400 dark:text-slate-600",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 749,
                    columnNumber: 324
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 748,
                columnNumber: 529
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                    status: ipo.status_text
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 749,
                    columnNumber: 417
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 749,
                columnNumber: 391
            }, this)
        ]
    }, ipo.id, true, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 747,
        columnNumber: 10
    }, this);
}
function _temp2(prev_1) {
    const newMode = !prev_1;
    if (newMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    return newMode;
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FilterIcon");
__turbopack_context__.k.register(_c1, "FilterChips");
__turbopack_context__.k.register(_c2, "SortableHeader");
__turbopack_context__.k.register(_c3, "IpoTable");
__turbopack_context__.k.register(_c4, "StatusBadge");
__turbopack_context__.k.register(_c5, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_ipo_page_529674a4.js.map