module.exports = [
"[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputGroup",
    ()=>InputGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const InputGroup = ({ label, value, setter, min, max, step = 1, unit, accentColor = "text-emerald-400" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm text-slate-300",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-semibold ${accentColor}`,
                        children: [
                            unit,
                            value
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>setter(e.target.value),
                className: " w-full h-2 rounded-full              /* 👈 FULL ROUND */ appearance-none bg-slate-700 accent-emerald-500 cursor-pointer  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full   /* 👈 THUMB ROUND */ [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:shadow-lg  [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-emerald-500 "
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: min,
                        max: max,
                        step: step,
                        value: value,
                        onChange: (e)=>setter(e.target.value),
                        className: " w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 "
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-400 text-sm",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
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
"[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const BrokerageCalculator = ()=>{
    // Input States
    const [buyPrice, setBuyPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1000');
    const [sellPrice, setSellPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1050');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('100');
    const [tradeType, setTradeType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('delivery'); // delivery, intraday, options, futures
    const B = Number(buyPrice) || 0;
    const S = Number(sellPrice) || 0;
    const Q = Number(quantity) || 0;
    const accent = "text-indigo-600 dark:text-indigo-400";
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const buyValue = B * Q;
        const sellValue = S * Q;
        const turnover = buyValue + sellValue;
        const grossPL = (S - B) * Q;
        let brokerage = 0;
        let stt = 0;
        let stampDuty = 0;
        let exchangeCharges = 0;
        // --- Logic for different Trade Types ---
        switch(tradeType){
            case 'delivery':
                // 0.05% or ₹20 per side
                brokerage = Math.min(20, buyValue * 0.0005) + Math.min(20, sellValue * 0.0005);
                stt = turnover * 0.001; // 0.1% on both
                stampDuty = buyValue * 0.00015; // 0.015% on buy
                exchangeCharges = turnover * 0.0000345; // NSE Equity
                break;
            case 'intraday':
                // 0.03% or ₹20 per side
                brokerage = Math.min(20, buyValue * 0.0003) + Math.min(20, sellValue * 0.0003);
                stt = sellValue * 0.00025; // 0.025% on sell
                stampDuty = buyValue * 0.00003; // 0.003% on buy
                exchangeCharges = turnover * 0.0000345;
                break;
            case 'options':
                // Flat ₹20 per order
                brokerage = 40;
                stt = sellValue * 0.000625; // 0.0625% on sell side (on premium)
                stampDuty = buyValue * 0.00003;
                exchangeCharges = turnover * 0.00053; // NSE Options
                break;
            case 'futures':
                brokerage = Math.min(20, buyValue * 0.0003) + Math.min(20, sellValue * 0.0003);
                stt = sellValue * 0.000125;
                stampDuty = buyValue * 0.00002;
                exchangeCharges = turnover * 0.00002;
                break;
            default:
                break;
        }
        const sebiFees = turnover * 0.000001; // ₹10 per crore
        const gst = (brokerage + exchangeCharges + sebiFees) * 0.18;
        const totalCharges = brokerage + stt + stampDuty + exchangeCharges + sebiFees + gst;
        const netPL = grossPL - totalCharges;
        return {
            turnover,
            grossPL,
            brokerage,
            stt,
            stampDuty,
            exchangeCharges,
            sebiFees,
            gst,
            totalCharges,
            netPL,
            isProfit: netPL >= 0
        };
    }, [
        B,
        S,
        Q,
        tradeType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "Universal Brokerage Calc"
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl",
                        children: [
                            'delivery',
                            'intraday',
                            'options',
                            'futures'
                        ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTradeType(type),
                                className: `px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${tradeType === type ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600' : 'text-slate-500'}`,
                                children: type
                            }, type, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Buy Price",
                                value: buyPrice,
                                setter: setBuyPrice,
                                unit: "₹",
                                accentColor: accent
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Sell Price",
                                value: sellPrice,
                                setter: setSellPrice,
                                unit: "₹",
                                accentColor: accent
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputGroup"], {
                                label: "Quantity",
                                value: quantity,
                                setter: setQuantity,
                                unit: "Qty",
                                accentColor: accent
                            }, void 0, false, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 uppercase font-bold",
                                                children: "Turnover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 106,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.turnover)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 107,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 uppercase font-bold",
                                                children: "Gross P&L"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 110,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-lg font-semibold ${results.grossPL >= 0 ? 'text-emerald-500' : 'text-rose-500'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.grossPL)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 111,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center p-4 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                                        invested: results.totalCharges,
                                        returns: results.isProfit ? results.netPL : 0,
                                        investedColor: "#f43f5e",
                                        returnsColor: "#10b981"
                                    }, void 0, false, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "Net Profit/Loss"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-black ${results.isProfit ? 'text-emerald-600' : 'text-rose-600'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.netPL)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm border-t border-slate-100 dark:border-slate-800 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between font-bold text-slate-700 dark:text-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total Charges"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-rose-500",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.totalCharges)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Brokerage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 141,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.brokerage)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 142,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "STT / CTT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.stt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "GST (18%)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.gst)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Exchange & SEBI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRupee"])(results.exchangeCharges + results.sebiFees)
                                            }, void 0, false, {
                                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                lineNumber: 97,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
        lineNumber: 78,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BrokerageCalculator;
}),
"[project]/src/app/calculators/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-ssr] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-ssr] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-ssr] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-ssr] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
// --- Sub-Calculator Imports ---
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$BrokerageCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx [app-ssr] (ecmascript)");
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
;
;
;
;
// --- Comprehensive Data Engine for ALL 15 Calculators ---
const contentData = {
    sip: {
        title: "SIP Wealth Projector",
        what: "A Systematic Investment Plan (SIP) is a disciplined investment strategy where you contribute a fixed amount into mutual funds at regular intervals. It automates savings and leverages market cycles to build long-term wealth.",
        why: "It utilizes 'Rupee Cost Averaging'—buying more units when prices are low and fewer when high. This eliminates the need to time the market and harnesses the power of compounding to reach goals like retirement or education.",
        deepDive: "The 'Time-Value' multiplier is the core of SIP success. Starting a SIP just 5 years earlier can result in a maturity corpus that is nearly double, as the exponential growth curve steepens significantly in the final years.",
        formula: "FV = P × ({[1 + i]^n – 1} / i) × (1 + i)",
        variables: [
            {
                k: "P",
                v: "Monthly Installment"
            },
            {
                k: "i",
                v: "Periodic Rate"
            },
            {
                k: "n",
                v: "Tenure (Months)"
            }
        ],
        specs: [
            {
                feature: "Risk",
                value: "Market Linked"
            },
            {
                feature: "Strategy",
                value: "Cost Averaging"
            }
        ],
        pros: [
            "Disciplined Savings",
            "Averages Volatility",
            "Compound Growth"
        ],
        cons: [
            "Market Risk",
            "No Fixed Returns",
            "Short-term Fluctuation"
        ],
        tips_tricks: [
            "The 10% Step-up Secret: Increasing SIP annually can reach your target 5 years faster.",
            "Never stop SIPs during a bear market; that's when wealth is actually made.",
            "Link every SIP to a specific life goal for better retention."
        ]
    },
    brokerage: {
        title: "Brokerage & Tax Terminal",
        what: "This terminal analyzes the total cost of a trade beyond the execution price. It accounts for broker commissions and statutory government taxes like STT, GST, SEBI fees, and State Stamp Duty.",
        why: "Traders operate on thin margins where taxes can exceed the brokerage itself. This tool identifies your exact 'Break-even Price'—the minimum movement needed just to cover trading costs.",
        deepDive: "Statutory charges like STT are significantly higher for delivery trades than intraday. For scalpers, understanding the impact of GST on transaction fees is the difference between a profitable day and a net loss.",
        formula: "Net P&L = (Sell - Buy) - Total Charges",
        variables: [
            {
                k: "STT",
                v: "Govt. Transaction Tax"
            },
            {
                k: "GST",
                v: "18% on Fees"
            },
            {
                k: "SEBI",
                v: "Regulatory Fee"
            }
        ],
        specs: [
            {
                feature: "Compliance",
                value: "Finance Act 2025"
            },
            {
                feature: "Mode",
                value: "Intraday / Delivery"
            }
        ],
        pros: [
            "Tax Transparency",
            "Break-even Analysis",
            "Accurate Net P&L"
        ],
        cons: [
            "Varies by State",
            "Excludes DP Charges",
            "Static Slab logic"
        ],
        tips_tricks: [
            "Intraday trades charge STT only on the sell side, saving 50% on government levies.",
            "Use flat-fee brokers for high volumes to cap your commission impact.",
            "Always calculate taxes before entering trades with less than 0.5% target."
        ]
    },
    emi: {
        title: "Loan EMI Amortization Matrix",
        what: "An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender. It balances the principal repayment and the interest servicing over a specific tenure.",
        why: "Initial EMIs are nearly 80% interest. Visualizing the 'Amortization Schedule' helps you plan prepayments to drastically reduce the total interest burden and exit debt years ahead of schedule.",
        deepDive: "The 'Interest Pre-loading' logic means banks take their profit first. Prepaying just 1-2 extra EMIs in the first 3 years of a 20-year loan can save you up to 25% of the total interest cost.",
        formula: "E = P × r × (1 + r)^n / ((1 + r)^n – 1)",
        variables: [
            {
                k: "P",
                v: "Principal Amount"
            },
            {
                k: "r",
                v: "Monthly Interest"
            },
            {
                k: "n",
                v: "Tenure (Months)"
            }
        ],
        specs: [
            {
                feature: "Method",
                value: "Reducing Balance"
            },
            {
                feature: "Credit Link",
                value: "CIBIL Impact Score"
            }
        ],
        pros: [
            "Fixed Roadmap",
            "Tax Benefits (Home Loan)",
            "Monthly Stability"
        ],
        cons: [
            "Interest Heavy Start",
            "Default Risk",
            "Prepayment Penalty"
        ],
        tips_tricks: [
            "One-Extra Rule: Paying one extra EMI annually can cut a 20-year tenure to 15 years.",
            "Round-up Strategy: Pay ₹25,000 instead of ₹24,200 to shave off months of interest.",
            "Refinance early if market interest rates drop by more than 0.5%."
        ]
    },
    lumpsum: {
        title: "Lumpsum Wealth Estimator",
        what: "A Lumpsum investment is a one-time deposit of a large capital sum into a financial instrument. It calculates the terminal value based on a specific expected CAGR.",
        why: "Perfect for windfalls like bonuses or property sales. It helps you decide whether to invest everything at once or use an STP (Systematic Transfer Plan) to mitigate entry-point risk.",
        deepDive: "Lumpsum returns are sensitive to the 'Entry Valuation'. Investing when the Nifty PE ratio is below 20 historically yields 15%+ CAGR, whereas investing at peaks reduces the margin of safety.",
        formula: "A = P (1 + r/n)^nt",
        variables: [
            {
                k: "P",
                v: "Principal"
            },
            {
                k: "r",
                v: "Return Rate"
            },
            {
                k: "t",
                v: "Tenure (Years)"
            }
        ],
        specs: [
            {
                feature: "Type",
                value: "Single Deposit"
            },
            {
                feature: "Asset",
                value: "Equity/Debt/Gold"
            }
        ],
        pros: [
            "High Absolute Gains",
            "Simple Tracking",
            "No Periodic Commitment"
        ],
        cons: [
            "High Entry Risk",
            "Volatility Impact",
            "Timing Dependence"
        ],
        tips_tricks: [
            "Rule of 72: Divide 72 by your expected return to see how fast your lumpsum doubles.",
            "Never invest a lumpsum at market all-time highs; wait for a 5% healthy correction.",
            "Use Lumpsum for debt-free assets like SGBs to lock in interest + appreciation."
        ]
    },
    ppf: {
        title: "PPF Safe-Savings Terminal",
        what: "Public Provident Fund (PPF) is a sovereign-backed long-term savings tool. It offers a 15-year tenure with interest rates set quarterly by the Ministry of Finance.",
        why: "It provides the coveted 'EEE' status—Exempt on Investment, Exempt on Interest, and Exempt on Maturity. It is the safest retirement pillar for conservative Indian investors.",
        deepDive: "The '5th Day' logic: PPF interest is calculated on the minimum balance between the 5th and the end of the month. Depositing on the 6th means losing 30 days of compounding interest.",
        formula: "A = P [({(1 + i)^n} - 1) / i]",
        variables: [
            {
                k: "P",
                v: "Annual Deposit"
            },
            {
                k: "i",
                v: "Interest Rate"
            },
            {
                k: "n",
                v: "15-50 Years"
            }
        ],
        specs: [
            {
                feature: "Security",
                value: "Govt Guarantee"
            },
            {
                feature: "Tax Status",
                value: "EEE Category"
            }
        ],
        pros: [
            "100% Capital Safety",
            "Tax-Free Maturity",
            "Loan Facility"
        ],
        cons: [
            "15-Year Lock-in",
            "₹1.5L Annual Limit",
            "Rate Fluctuations"
        ],
        tips_tricks: [
            "April Window: Invest the full ₹1.5L between April 1st and 5th to maximize a full year's compounding.",
            "The Extension Hack: Extend in blocks of 5 years to keep the tax-free interest growing indefinitely.",
            "Partial withdrawals are allowed after 6 years for life emergencies without closing the account."
        ]
    },
    goal: {
        title: "Goal Precision Planner",
        what: "This tool reverse-calculates the savings required today to reach a specific financial target in the future, adjusted for inflation and expected returns.",
        why: "It replaces 'hope' with 'math.' Instead of saving randomly, you identify the exact SIP amount needed for a child's Ivy League education or a dream retirement villa.",
        deepDive: "Inflation is the silent wealth killer. A ₹50 Lakh goal in 2025 will require nearly ₹1.2 Crore in 2040 at 6% inflation. This terminal ensures your target corpus maintains its purchasing power.",
        formula: "Required = Goal / (1 + r)^n",
        variables: [
            {
                k: "Target",
                v: "Future Cost"
            },
            {
                k: "Inflation",
                v: "Price Rise %"
            },
            {
                k: "Years",
                v: "Time Horizon"
            }
        ],
        specs: [
            {
                feature: "Focus",
                value: "Target-Based"
            },
            {
                feature: "Analysis",
                value: "Backward Induction"
            }
        ],
        pros: [
            "Clarity of savings",
            "Realistic Roadmap",
            "Prevents Under-saving"
        ],
        cons: [
            "Assumption Dependent",
            "Inflation Variance",
            "Life Change Shifts"
        ],
        tips_tricks: [
            "Always assume 7% inflation for education and 10% for healthcare goals.",
            "Review your goal progress every year and adjust for salary increments.",
            "Diversify the goal corpus across Equity and Debt based on the years remaining."
        ]
    },
    retirement: {
        title: "Retirement Corpus Architect",
        what: "This terminal estimates the total 'Nest Egg' required to sustain your current lifestyle once your active income stops, accounting for life expectancy and inflation.",
        why: "Retirement is the only goal you cannot take a loan for. This tool helps you avoid 'Longevity Risk'—the danger of outliving your savings in your sunset years.",
        deepDive: "The '4% Withdrawal Rule' is the global standard. If your corpus is 25x your annual expenses, you can safely withdraw 4% adjusted for inflation every year for 30+ years without depleting the base.",
        formula: "Corpus = Annual Expenses / Safe Withdrawal Rate",
        variables: [
            {
                k: "Exp",
                v: "Monthly Spending"
            },
            {
                k: "Life",
                v: "Expectancy"
            },
            {
                k: "Inflation",
                v: "Price Rise"
            }
        ],
        specs: [
            {
                feature: "Horizon",
                value: "Ultra Long-term"
            },
            {
                feature: "Tax",
                value: "Post-Withdrawal"
            }
        ],
        pros: [
            "Financial Independence",
            "Medical Security",
            "Peace of Mind"
        ],
        cons: [
            "Rising Medical Costs",
            "Tax Slab Changes",
            "Inflation Spikes"
        ],
        tips_tricks: [
            "Aim for a corpus that is 30x your current annual expenses for a stress-free retirement.",
            "Start a pension SIP as soon as you get your first salary to benefit from 35 years of compounding.",
            "Include a separate medical emergency fund outside your retirement corpus calculation."
        ]
    },
    fd: {
        title: "FD Interest Matrix",
        what: "A Fixed Deposit (FD) is a banking instrument that offers a guaranteed interest rate for a chosen tenure. It is the most popular low-risk savings tool in India.",
        why: "Ideal for short-term parking of funds where capital preservation is the primary goal. It is liquid (with minor penalty) and provides higher interest than a savings account.",
        deepDive: "The 'Real Return' of an FD is often negative. If an FD gives 7% and inflation is 6%, your real gain is only 1%. Furthermore, FD interest is taxable, making post-tax returns even lower.",
        formula: "A = P (1 + r/n)^nt",
        variables: [
            {
                k: "P",
                v: "Deposit Amount"
            },
            {
                k: "r",
                v: "Interest Rate"
            },
            {
                k: "n",
                v: "Compounding Freq"
            }
        ],
        specs: [
            {
                feature: "Risk",
                value: "Zero (DICGC)"
            },
            {
                feature: "Liquidity",
                value: "Immediate (Penalty)"
            }
        ],
        pros: [
            "Guaranteed Returns",
            "Senior Citizen Bonus",
            "Loan Facility"
        ],
        cons: [
            "Taxable Interest",
            "Lower than Inflation",
            "Tenure Lock"
        ],
        tips_tricks: [
            "Laddering Strategy: Split ₹5 Lakh into 5 FDs of 1, 2, 3, 4, and 5 years for constant liquidity.",
            "Avoid long-term FDs when interest rates are expected to rise soon.",
            "Ensure the bank is DICGC insured for up to ₹5 Lakh safety."
        ]
    },
    gold: {
        title: "Gold Investment Matrix",
        what: "This terminal tracks the appreciation of gold as an asset class, including physical gold, digital gold, and Sovereign Gold Bonds (SGBs).",
        why: "Gold is the ultimate hedge against currency devaluation and stock market crashes. It maintains its purchasing power over centuries and provides high liquidity in times of crisis.",
        deepDive: "Sovereign Gold Bonds (SGB) are the smartest way to own gold. You get the market price appreciation plus a fixed 2.5% annual interest, with zero storage costs or making charges.",
        formula: "Value = (Qty × Rate) + SGB Interest",
        variables: [
            {
                k: "Price",
                v: "24K Market Rate"
            },
            {
                k: "Qty",
                v: "Grams Held"
            },
            {
                k: "SGB",
                v: "Interest (2.5%)"
            }
        ],
        specs: [
            {
                feature: "Asset",
                value: "Precious Metal"
            },
            {
                feature: "Hedge",
                value: "Inflation/Crisis"
            }
        ],
        pros: [
            "Global Liquidity",
            "Crisis Protection",
            "Inflation Hedge"
        ],
        cons: [
            "No Monthly Yield",
            "Making Charges",
            "Storage/Theft Risk"
        ],
        tips_tricks: [
            "Hold 10% of your portfolio in gold to reduce overall volatility during market crashes.",
            "Buy Digital Gold for small savings but convert to SGB for long-term holding.",
            "Track the USD-INR exchange rate, as gold prices in India are sensitive to currency fluctuations."
        ]
    },
    ipo: {
        title: "IPO Profit/Gain Matrix",
        what: "This tool calculates the potential listing gains of an Initial Public Offering (IPO) based on the Grey Market Premium (GMP) and issue price.",
        why: "IPOs offer a chance to enter high-growth companies early. This tool helps you calculate your ROI based on the number of lots allotted and the expected listing price.",
        deepDive: "Over-subscription is the key to listing gains. If an IPO is subscribed 50x in the HNI and QIB categories, it creates a supply-demand gap that drives the price up on the listing day.",
        formula: "Profit = (Listing - Issue) × Quantity",
        variables: [
            {
                k: "Issue",
                v: "Offer Price"
            },
            {
                k: "Lot",
                v: "Shares per Lot"
            },
            {
                k: "GMP",
                v: "Grey Market Premium"
            }
        ],
        specs: [
            {
                feature: "Market",
                value: "Primary"
            },
            {
                feature: "Type",
                value: "Equity"
            }
        ],
        pros: [
            "Quick Listing Gains",
            "Early Entry",
            "Standardized Price"
        ],
        cons: [
            "Low Allotment Probability",
            "Listing Loss Risk",
            "Short-term Volatility"
        ],
        tips_tricks: [
            "Check the 'Subscription Status' on the final day before applying to gauge institutional interest.",
            "Apply via multiple family member PANs to increase your allotment probability in the retail category.",
            "Always have an 'Exit Plan' for the listing day; don't hold speculative IPOs for the long term."
        ]
    },
    cagr: {
        title: "CAGR Tool",
        what: "Compound Annual Growth Rate (CAGR) measures the mean annual growth of an investment over a period longer than one year.",
        why: "It is the only accurate way to compare the performance of different asset classes (e.g., Stocks vs. Gold) because it smoothes out volatility into a single annualized figure.",
        deepDive: "CAGR assumes 'reinvestment'. It calculates the rate at which an investment would have grown if it had grown at a steady rate each year. It is vital for evaluating Mutual Fund and Real Estate performance.",
        formula: "CAGR = [(EV / BV)^(1/n)] - 1",
        variables: [
            {
                k: "EV",
                v: "Ending Value"
            },
            {
                k: "BV",
                v: "Start Value"
            },
            {
                k: "n",
                v: "Tenure (Years)"
            }
        ],
        specs: [
            {
                feature: "Metric",
                value: "Geometric Mean"
            },
            {
                feature: "Usage",
                value: "Performance Check"
            }
        ],
        pros: [
            "Accurate Growth Tracking",
            "Standardized Metric",
            "Smoothes Volatility"
        ],
        cons: [
            "Ignores Timing Risk",
            "Linear Projection",
            "Not for Short-term"
        ],
        tips_tricks: [
            "Use CAGR for any investment longer than 3 years to see the real growth.",
            "Compare CAGR with the Benchmark index to see if your investment outperformed the market.",
            "Always look at post-tax CAGR to see your actual purchasing power gain."
        ]
    },
    epf: {
        title: "EPF Retirement Tracker",
        what: "Employee Provident Fund (EPF) is a retirement benefit scheme for salaried employees where both the employer and employee contribute 12% of the basic salary.",
        why: "It creates a massive retirement fund automatically. It is one of the few debt instruments that offers high interest with sovereign safety and triple tax benefits.",
        deepDive: "EPF is the most powerful compounding tool for the Indian middle class. If you start at age 22 and never withdraw, the employer's matching contribution alone can fund a comfortable retirement lifestyle.",
        formula: "A = (Monthly Cont. × Months) + Interest",
        variables: [
            {
                k: "Salary",
                v: "Basic + DA"
            },
            {
                k: "Rate",
                v: "EPFO Interest Rate"
            }
        ],
        specs: [
            {
                feature: "Contributor",
                value: "Employee/Employer"
            },
            {
                feature: "Guarantee",
                value: "Sovereign"
            }
        ],
        pros: [
            "Matching Contribution",
            "Automatic Discipline",
            "Tax-Free Maturity"
        ],
        cons: [
            "Salary Dependent",
            "Withdrawal Restrictions",
            "Fixed Interest"
        ],
        tips_tricks: [
            "Always transfer your EPF UAN when switching jobs; withdrawing breaks the compounding chain.",
            "Increase your VPF (Voluntary Provident Fund) if you want safe, high-interest tax-free returns beyond 12%.",
            "Nominate your family members in the UAN portal to ensure smooth transfer of funds."
        ]
    },
    taxfd: {
        title: "Tax-Saving FD Planner",
        what: "This is a special Fixed Deposit with a mandatory 5-year lock-in period that qualifies for tax deductions under Section 80C.",
        why: "It is for risk-averse investors who want to save tax but don't want the volatility of ELSS or the long 15-year lock-in of PPF.",
        deepDive: "Unlike normal FDs, you cannot take a loan against a Tax-Saving FD, and you cannot withdraw it prematurely. The interest earned is added to your income and taxed as per your slab.",
        formula: "Tax Saved = Invested × Tax Slab",
        variables: [
            {
                k: "Invest",
                v: "Up to ₹1.5L"
            },
            {
                k: "Tenure",
                v: "Fixed 5 Years"
            }
        ],
        specs: [
            {
                feature: "Lock-in",
                value: "5 Years"
            },
            {
                feature: "Benefit",
                value: "Sec 80C"
            }
        ],
        pros: [
            "Guaranteed Returns",
            "80C Tax Benefit",
            "Zero Management"
        ],
        cons: [
            "5-Year Total Lock-in",
            "Taxable Interest",
            "No Loan Facility"
        ],
        tips_tricks: [
            "Only use this if your 80C limit (₹1.5L) isn't already filled by EPF, Insurance, or PPF.",
            "Check interest rates across different banks; sometimes small finance banks offer 1-2% more on Tax FDs.",
            "Remember that the tax benefit is only on the investment, not the interest."
        ]
    },
    swp: {
        title: "SWP Pension Terminal",
        what: "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund corpus at regular intervals, effectively creating a self-made pension.",
        why: "It is the most tax-efficient way to generate monthly income post-retirement. Unlike FD interest or annuities, only the 'Capital Gain' portion of the withdrawal is taxed.",
        deepDive: "SWP manages 'Sequence of Returns' risk. By withdrawing a fixed amount, you sell more units when the market is low and fewer when high, which is the inverse of a SIP.",
        formula: "Remaining = [P(1+r)] - W",
        variables: [
            {
                k: "Corpus",
                v: "Total Fund"
            },
            {
                k: "Withdrawal",
                v: "Monthly Payout"
            },
            {
                k: "r",
                v: "Annual Return"
            }
        ],
        specs: [
            {
                feature: "Goal",
                value: "Regular Income"
            },
            {
                feature: "Tax",
                value: "Capital Gains"
            }
        ],
        pros: [
            "Tax Efficiency",
            "Regular Cash Flow",
            "Capital Appreciation"
        ],
        cons: [
            "Corpus Depletion Risk",
            "Market Volatility",
            "Inflation Impact"
        ],
        tips_tricks: [
            "Keep your withdrawal rate at 5-6% to ensure your corpus lasts for 25+ years.",
            "Use Debt-oriented hybrid funds for SWP to minimize short-term volatility in your monthly payout.",
            "Review your withdrawal amount every 2 years to adjust for lifestyle inflation."
        ]
    },
    gsec: {
        title: "G-Sec Bond Terminal",
        what: "Government Securities (G-Secs) are debt instruments issued by the RBI on behalf of the Government to finance the country's fiscal deficit.",
        why: "They offer the absolute highest degree of safety (Zero default risk). They are now available to retail investors through the RBI Retail Direct portal for steady long-term income.",
        deepDive: "G-Secs have 'Duration Risk.' When interest rates in the economy fall, the price of existing bonds goes up. You can earn through both periodic interest (coupons) and capital appreciation.",
        formula: "Yield = (Coupon / Price) × 100",
        variables: [
            {
                k: "Coupon",
                v: "Fixed Interest"
            },
            {
                k: "Price",
                v: "Market Value"
            }
        ],
        specs: [
            {
                feature: "Safety",
                value: "Sovereign"
            },
            {
                feature: "Tenure",
                value: "Up to 40 Years"
            }
        ],
        pros: [
            "Zero Default Risk",
            "Periodic Interest",
            "High Tenure Options"
        ],
        cons: [
            "Interest Rate Risk",
            "Lower Return than Equity",
            "Limited Liquidity"
        ],
        tips_tricks: [
            "Lock in long-term G-Secs when interest rates are at a cyclical peak for high lifetime yields.",
            "G-Secs are better than FDs for the 30% tax bracket if you hold them through debt mutual funds (indexation benefits).",
            "Use G-Secs as the 'Safety' foundation of your portfolio, keeping 20-30% allocation here."
        ]
    }
};
const CalculatorSection = ()=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sip");
    const guideRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToGuide = ()=>{
        guideRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const CALCULATOR_OPTIONS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 'sip',
                label: 'SIP Engine',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"],
                category: 'Investment',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'brokerage',
                label: 'Brokerage & Tax',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
                category: 'Trading',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$BrokerageCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'lumpsum',
                label: 'Lumpsum Pro',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"],
                category: 'Investment',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'goal',
                label: 'Goal Planner',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                category: 'Planning',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'retirement',
                label: 'Retirement',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                category: 'Planning',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'emi',
                label: 'Loan EMI',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                category: 'Banking',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'ppf',
                label: 'PPF Safe',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
                category: 'Tax Saving',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'fd',
                label: 'FD Interest',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                category: 'Banking',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'gold',
                label: 'Gold Value',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                category: 'Investment',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'ipo',
                label: 'IPO Gain',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                category: 'Investment',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'cagr',
                label: 'CAGR Tool',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                category: 'Investment',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'epf',
                label: 'EPF Tracker',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                category: 'Retirement',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'taxfd',
                label: 'Tax FD',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                category: 'Tax Saving',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'swp',
                label: 'SWP Pension',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
                category: 'Retirement',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: 'gsec',
                label: 'G-Sec Bonds',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                category: 'Investment',
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            }
        ], []);
    const filteredOptions = CALCULATOR_OPTIONS.filter((opt)=>opt.label.toLowerCase().includes(searchTerm.toLowerCase()));
    const current = contentData[activeCalculator] || contentData.sip;
    const ActiveComponent = CALCULATOR_OPTIONS.find((opt)=>opt.id === activeCalculator)?.component;
    const jsonLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": current.title,
            "description": current.what,
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {
                "@type": "Offer",
                "price": "0"
            }
        }), [
        current
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e1caffb46c06d252" + " " + "bg-[#f8fafc] dark:bg-[#020617] min-h-screen transition-all duration-500 text-slate-900 dark:text-slate-100 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-e1caffb46c06d252",
                        children: [
                            current.title,
                            " - Free Financial Tool 2025"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 269,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: current.what.substring(0, 160),
                        className: "jsx-e1caffb46c06d252"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: `finance, calculator, ${activeCalculator}, investment, returns`,
                        className: "jsx-e1caffb46c06d252"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 271,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `https://yourdomain.com/calculators?tool=${activeCalculator}`,
                        className: "jsx-e1caffb46c06d252"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 268,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-e1caffb46c06d252" + " " + "max-w-[1440px] mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "jsx-e1caffb46c06d252" + " " + "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e1caffb46c06d252" + " " + "sticky top-24 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e1caffb46c06d252" + " " + "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search toolkit...",
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "jsx-e1caffb46c06d252" + " " + "w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-xs font-black focus:border-blue-500 outline-none shadow-sm transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "jsx-e1caffb46c06d252" + " " + "space-y-2 max-h-[75vh] overflow-y-auto no-scrollbar pb-10",
                                    children: filteredOptions.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCalculator(tab.id),
                                            className: "jsx-e1caffb46c06d252" + " " + `flex items-center gap-4 px-5 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all w-full border-2 ${activeCalculator === tab.id ? "bg-emerald-500 text-white border-emerald-500 shadow-xl translate-x-1" : "bg-white dark:bg-slate-900 border-transparent hover:border-slate-100 dark:hover:border-slate-800"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                    className: "w-5 h-5 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e1caffb46c06d252" + " " + "text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-e1caffb46c06d252" + " " + "leading-none mb-1 text-[12px] font-semibold fo",
                                                            children: tab.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calculators/page.js",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-e1caffb46c06d252" + " " + "text-[10px] opacity-60 font-semibold uppercase",
                                                            children: tab.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calculators/page.js",
                                                            lineNumber: 299,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, tab.id, true, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 279,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 278,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e1caffb46c06d252" + " " + "lg:col-span-9 space-y-5 mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "jsx-e1caffb46c06d252" + " " + "bg-slate-900 rounded-xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e1caffb46c06d252" + " " + "relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e1caffb46c06d252" + " " + "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e1caffb46c06d252" + " " + "text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calculators/page.js",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Intelligence Engine"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-e1caffb46c06d252" + " " + "text-4xl md:text-3xl font-black not-italic  uppercase font-semibold leading-none",
                                                    children: current.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e1caffb46c06d252" + " " + "bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                    size: 20,
                                                    className: "text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-e1caffb46c06d252" + " " + "text-emerald-400 font-black text-sm uppercase tracking-tighter",
                                                    children: "FY 2025-26 Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 310,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            ActiveComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {
                                className: "jsx-e1caffb46c06d252"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 329,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e1caffb46c06d252" + " " + "p-20 text-center font-black opacity-20 uppercase tracking-widest",
                                children: "Synchronizing Module..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 329,
                                columnNumber: 52
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e1caffb46c06d252" + " " + "grid md:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e1caffb46c06d252" + " " + "bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-b dark:border-slate-800 flex justify-between items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-e1caffb46c06d252" + " " + "text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calculators/page.js",
                                                            lineNumber: 338,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Technical Specifications"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/calculators/page.js",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "divide-y dark:divide-slate-800",
                                                children: current.specs?.map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "flex justify-between items-center px-8 py-5 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "text-[11px] font-black uppercase text-slate-400",
                                                                children: spec.feature
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 344,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "text-xs font-black uppercase",
                                                                children: spec.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 345,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 343,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e1caffb46c06d252" + " " + "bg-slate-950 rounded-xl p-8 text-white border border-slate-800 shadow-2xl flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                size: 14,
                                                                className: "fill-current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 354,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Computational Model"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "bg-white/5 p-6 rounded-xl border border-white/10 text-center mb-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "jsx-e1caffb46c06d252" + " " + "text-lg md:text-xl font-mono font-bold text-emerald-400 tracking-tighter block leading-relaxed",
                                                            children: current.formula
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calculators/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "space-y-3",
                                                children: current.variables?.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "flex justify-between text-[10px] font-bold border-b border-white/5 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "text-emerald-500",
                                                                children: v.k
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 363,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "text-slate-400 uppercase tracking-tight",
                                                                children: v.v
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 364,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 334,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-e1caffb46c06d252" + " " + "dark:bg-gradient-to-r from-emerald-600 to-emerald-700 bg-gradient-to-r from-emerald-500 to-emerald-600  rounded-xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e1caffb46c06d252" + " " + "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-e1caffb46c06d252" + " " + "text-2xl font-black uppercase italic mb-8 flex items-center gap-3 tracking-tighter",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                        size: 28,
                                                        className: "text-yellow-300 fill-yellow-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Strategic Tips & Secrets"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "grid md:grid-cols-3 gap-6",
                                                children: current.tips_tricks?.map((tip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 font-black group-hover:scale-110 transition-transform",
                                                                children: [
                                                                    "0",
                                                                    i + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 383,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "text-xs md:text-sm font-bold leading-relaxed",
                                                                children: tip
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 384,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 380,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "absolute right-[-5%] top-[-10%] w-64 h-64 opacity-10 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 374,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                ref: guideRef,
                                className: "jsx-e1caffb46c06d252" + " " + "bg-white dark:bg-slate-900 p-8 md:p-12 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e1caffb46c06d252" + " " + "grid md:grid-cols-2 gap-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-2xl font-black uppercase italic tracking-tight text-blue-600 flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 397,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " What is this?"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium border-l-4 border-blue-500 pl-6 italic",
                                                        children: current.what
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-2xl font-black uppercase italic tracking-tight text-emerald-600 flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                size: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 405,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Why use this?"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 404,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium",
                                                        children: current.why
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 407,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e1caffb46c06d252" + " " + "p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "jsx-e1caffb46c06d252" + " " + "font-black text-blue-600 uppercase text-xs mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 415,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Professional Masterclass: Deep Dive"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 414,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-e1caffb46c06d252" + " " + "text-sm md:text-base font-bold leading-relaxed text-slate-700 dark:text-slate-300 italic",
                                                children: current.deepDive
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e1caffb46c06d252" + " " + "grid md:grid-cols-2 gap-10 border-t dark:border-slate-800 pt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-xl border border-emerald-100 dark:border-emerald-900/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "font-black text-emerald-700 dark:text-emerald-400 uppercase text-xs flex items-center gap-2 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 425,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Validated Advantages"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 424,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-sm space-y-3 text-slate-700 dark:text-slate-300 font-bold",
                                                        children: current.pros?.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "text-emerald-500 shrink-0",
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/calculators/page.js",
                                                                        lineNumber: 428,
                                                                        columnNumber: 95
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    p
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 428,
                                                                columnNumber: 48
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 427,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 423,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e1caffb46c06d252" + " " + "bg-rose-50 dark:bg-rose-950/20 p-8 rounded-xl border border-rose-100 dark:border-rose-900/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "font-black text-rose-700 dark:text-rose-400 uppercase text-xs flex items-center gap-2 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 433,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Risk Constraints"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 432,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-e1caffb46c06d252" + " " + "text-sm space-y-3 text-slate-700 dark:text-slate-300 font-bold",
                                                        children: current.cons?.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-e1caffb46c06d252" + " " + "flex gap-3 items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        className: "text-rose-500 shrink-0",
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/calculators/page.js",
                                                                        lineNumber: 436,
                                                                        columnNumber: 95
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    c
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/calculators/page.js",
                                                                lineNumber: 436,
                                                                columnNumber: 48
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/calculators/page.js",
                                                        lineNumber: 435,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 393,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 275,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "jsx-e1caffb46c06d252" + " " + "max-w-7xl mx-auto px-4 py-12 border-t dark:border-slate-800 text-center text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]",
                children: "Wealth Intelligence Terminal © 2025"
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 447,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e1caffb46c06d252",
                children: ".no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}::selection{color:#fff;background:#2563eb}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                },
                className: "jsx-e1caffb46c06d252"
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 458,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 266,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CalculatorSection;
}),
];

//# sourceMappingURL=src_c1064883._.js.map