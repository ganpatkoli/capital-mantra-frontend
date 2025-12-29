(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoughnutChart",
    ()=>DoughnutChart,
    "InputGroup",
    ()=>InputGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// components/Calculators/CalculatorUtils.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const DoughnutChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "01b40f9253211e8f04fe14c75a82328d2b8796aa589f39bf2a26bbaafc22bf22") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01b40f9253211e8f04fe14c75a82328d2b8796aa589f39bf2a26bbaafc22bf22";
    }
    const { invested, returns, investedColor, returnsColor } = t0;
    const total = invested + returns;
    const investedPercent = total > 0 ? invested / total * 100 : 50;
    const returnsPercent = total > 0 ? returns / total * 100 : 50;
    const baseInvestedColor = investedColor || "#10B981";
    const baseReturnsColor = returnsColor || "#06B6D4";
    const t1 = `conic-gradient(
            ${baseInvestedColor} 0% ${investedPercent}%,
            ${baseReturnsColor} ${investedPercent}%,
            ${"#475569"} ${investedPercent + returnsPercent}% 100%
        )`;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            background: t1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const style = t2;
    let t3;
    if ($[3] !== style) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: style,
            className: "h-full w-full rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = style;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-4 rounded-full bg-slate-50 dark:bg-slate-900"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-40 w-40",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== baseInvestedColor) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-slate-700 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-1 h-2.5 w-2.5 rounded-full",
                    style: {
                        backgroundColor: baseInvestedColor
                    }
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                    lineNumber: 66,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                "Invested"
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = baseInvestedColor;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== baseReturnsColor) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-slate-700 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-1 h-2.5 w-2.5 rounded-full",
                    style: {
                        backgroundColor: baseReturnsColor
                    }
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                    lineNumber: 76,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                "Returns"
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = baseReturnsColor;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex space-x-4 text-xs font-medium",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t5 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
};
_c = DoughnutChart;
const InputGroup = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "01b40f9253211e8f04fe14c75a82328d2b8796aa589f39bf2a26bbaafc22bf22") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01b40f9253211e8f04fe14c75a82328d2b8796aa589f39bf2a26bbaafc22bf22";
    }
    const { label, value, setter, min, max, unit, accentColor, step: t1, placeholder: t2 } = t0;
    const step = t1 === undefined ? 1 : t1;
    const placeholder = t2 === undefined ? "" : t2;
    let t3;
    if ($[1] !== label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: label,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== setter) {
        t4 = (e)=>setter(e.target.value);
        $[3] = setter;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = placeholder || min;
    let t6;
    if ($[5] !== label || $[6] !== max || $[7] !== min || $[8] !== step || $[9] !== t4 || $[10] !== t5 || $[11] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            id: label,
            value: value,
            onChange: t4,
            placeholder: t5,
            className: "w-20 text-right bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500",
            min: min,
            max: max,
            step: step
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = label;
        $[6] = max;
        $[7] = min;
        $[8] = step;
        $[9] = t4;
        $[10] = t5;
        $[11] = value;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== accentColor || $[14] !== t6 || $[15] !== unit) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: accentColor,
            children: [
                t6,
                unit
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = accentColor;
        $[14] = t6;
        $[15] = unit;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t3 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 170,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t3;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = value || min;
    let t10;
    if ($[20] !== setter) {
        t10 = (e_0)=>setter(e_0.target.value);
        $[20] = setter;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== label) {
        let t12;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /\s/g;
            $[24] = t12;
        } else {
            t12 = $[24];
        }
        t11 = label.replace(t12, "-");
        $[22] = label;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const t12 = `w-full h-1 rounded-lg appearance-none cursor-pointer range-slider-${t11}`;
    const t13 = accentColor.includes("emerald") ? "#10B981" : accentColor.includes("cyan") ? "#06B6D4" : accentColor.includes("fuchsia") ? "#D946EF" : accentColor.includes("purple") ? "#A855F7" : accentColor.includes("indigo") ? "#4F46E5" : accentColor.includes("orange") ? "#F97316" : accentColor.includes("pink") ? "#EC4899" : accentColor.includes("teal") ? "#14B8A6" : accentColor.includes("red") ? "#EF4444" : accentColor.includes("amber") ? "#F59E0B" : "#10B981";
    let t14;
    if ($[25] !== t13) {
        t14 = {
            "--range-color": t13
        };
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== max || $[28] !== min || $[29] !== step || $[30] !== t10 || $[31] !== t12 || $[32] !== t14 || $[33] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: min,
            max: max,
            step: step,
            value: t9,
            onChange: t10,
            className: t12,
            style: t14
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = max;
        $[28] = min;
        $[29] = step;
        $[30] = t10;
        $[31] = t12;
        $[32] = t14;
        $[33] = t9;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t15 || $[36] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t15;
        $[36] = t8;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    return t16;
};
_c1 = InputGroup;
var _c, _c1;
__turbopack_context__.k.register(_c, "DoughnutChart");
__turbopack_context__.k.register(_c1, "InputGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/UI/Utility.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Calculators/SubCalculators/SIPCalculator.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SIPCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "e9e8cbd0981646510c74341da26a3427cc3e8313cac264197875e9d707ed920f") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9e8cbd0981646510c74341da26a3427cc3e8313cac264197875e9d707ed920f";
    }
    const [monthlyInvestment, setMonthlyInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(monthlyInvestment);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalEarnings: 0,
                    calculatedFV: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 12;
        const n = Y * 12;
        const calculatedFV = P * ((Math.pow(1 + r, n) - 1) / r * (1 + r));
        const totalInvested = P * Y * 12;
        const totalEarnings = calculatedFV - totalInvested;
        let t1;
        if ($[2] !== calculatedFV || $[3] !== totalEarnings || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalEarnings,
                calculatedFV
            };
            $[2] = calculatedFV;
            $[3] = totalEarnings;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalEarnings: totalEarnings_0, calculatedFV: calculatedFV_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "SIP Calculator (मासिक निवेश योजना) 📈"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== monthlyInvestment) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Monthly Investment",
            value: monthlyInvestment,
            setter: setMonthlyInvestment,
            min: 1000,
            max: 100000,
            unit: "\u20B9",
            placeholder: "10000",
            accentColor: "text-emerald-600 dark:text-emerald-400",
            step: 100
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = monthlyInvestment;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvested_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvested_0,
                returns: t6,
                investedColor: "#10B981",
                returnsColor: "#06B6D4"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 109,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvested_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== calculatedFV_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV_0);
        $[23] = calculatedFV_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-emerald-700 dark:text-emerald-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Future Value"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvested_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[30] = totalInvested_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Invested"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    const t17 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t18;
    if ($[37] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t17);
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-cyan-600 dark:text-cyan-400",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Earnings"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 213,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t19;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t12 || $[45] !== t16 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 221,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t12;
        $[45] = t16;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t22 || $[49] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t22;
        $[49] = t8;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    return t23;
};
_s(SIPCalculator, "tEP8phYrwL3tUdC8dH3199GL840=");
_c = SIPCalculator;
const __TURBOPACK__default__export__ = SIPCalculator;
var _c;
__turbopack_context__.k.register(_c, "SIPCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LumpsumCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "a6d4196f7db080ad4b6522a65ef9ce5df24703e972bd4ee4c7efda199ba5454a") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6d4196f7db080ad4b6522a65ef9ce5df24703e972bd4ee4c7efda199ba5454a";
    }
    const [lumpsum, setLumpsum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(lumpsum);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalEarnings: 0,
                    calculatedFV: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100;
        const n = Y;
        const calculatedFV = P * Math.pow(1 + r, n);
        const totalInvested = P;
        const totalEarnings = calculatedFV - P;
        let t1;
        if ($[2] !== calculatedFV || $[3] !== totalEarnings || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalEarnings,
                calculatedFV
            };
            $[2] = calculatedFV;
            $[3] = totalEarnings;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalEarnings: totalEarnings_0, calculatedFV: calculatedFV_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Lumpsum Calculator (एकमुश्त निवेश)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== lumpsum) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Initial Investment",
            value: lumpsum,
            setter: setLumpsum,
            min: 1000,
            max: 1000000,
            unit: "\u20B9",
            placeholder: "100000",
            accentColor: "text-cyan-600 dark:text-cyan-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = lumpsum;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvested_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvested_0,
                returns: t6,
                investedColor: "#06B6D4",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 108,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvested_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== calculatedFV_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV_0);
        $[23] = calculatedFV_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-cyan-700 dark:text-cyan-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Future Value"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvested_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[30] = totalInvested_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Invested"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    const t17 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t18;
    if ($[37] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t17);
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-emerald-600 dark:text-emerald-400",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Earnings"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t19;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t12 || $[45] !== t16 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 220,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t12;
        $[45] = t16;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t22 || $[49] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t22;
        $[49] = t8;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    return t23;
};
_s(LumpsumCalculator, "jBA8OSwzXt92F/YAjYL8hNaELEg=");
_c = LumpsumCalculator;
const __TURBOPACK__default__export__ = LumpsumCalculator;
var _c;
__turbopack_context__.k.register(_c, "LumpsumCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const IpoProfitCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "ea2f75a45454ef6b0355f9a3cf880caf05e293f7bd9b2496ea469e7cca330fdc") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea2f75a45454ef6b0355f9a3cf880caf05e293f7bd9b2496ea469e7cca330fdc";
    }
    const [allotmentLots, setAllotmentLots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lotSize, setLotSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issuePrice, setIssuePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [listingPrice, setListingPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const L = Number(allotmentLots);
    const S = Number(lotSize);
    const I = Number(issuePrice);
    const T = Number(listingPrice);
    let t0;
    bb0: {
        if (L <= 0 || S <= 0 || I <= 0 || T <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvestment: 0,
                    profitAmount: 0,
                    gainPercentage: 0,
                    profitColor: "text-slate-600 dark:text-slate-300"
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const totalShares = L * S;
        const listingGainPerShare = T - I;
        const profitAmount = totalShares * listingGainPerShare;
        const totalInvestment = L * S * I;
        const gainPercentage = totalInvestment > 0 ? profitAmount / totalInvestment * 100 : 0;
        const color = profitAmount > 0 ? "text-emerald-600 dark:text-emerald-400" : profitAmount < 0 ? "text-red-600 dark:text-red-400" : "text-slate-600 dark:text-slate-300";
        let t1;
        if ($[2] !== color || $[3] !== gainPercentage || $[4] !== profitAmount || $[5] !== totalInvestment) {
            t1 = {
                totalInvestment,
                profitAmount,
                gainPercentage,
                profitColor: color
            };
            $[2] = color;
            $[3] = gainPercentage;
            $[4] = profitAmount;
            $[5] = totalInvestment;
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        t0 = t1;
    }
    const { totalInvestment: totalInvestment_0, profitAmount: profitAmount_0, gainPercentage: gainPercentage_0, profitColor } = t0;
    let t1;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "IPO Profit Estimator (IPO लाभ अनुमानक)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== allotmentLots) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = allotmentLots;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== lotSize) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = lotSize;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== issuePrice) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Issue Price (\u20B9)",
            value: issuePrice,
            setter: setIssuePrice,
            min: 0,
            max: 5000,
            placeholder: "1062",
            unit: "\u20B9",
            accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = issuePrice;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== listingPrice) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Listing Price (\u20B9)",
            value: listingPrice,
            setter: setListingPrice,
            min: 0,
            max: 6000,
            placeholder: "1300",
            unit: "\u20B9",
            accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 104,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = listingPrice;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t2 || $[17] !== t3 || $[18] !== t4 || $[19] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 col-span-2 md:col-span-1",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Investment:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== totalInvestment_0) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvestment_0);
        $[22] = totalInvestment_0;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 138,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 138,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Estimated Gain/Loss (%):"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    const t11 = `font-semibold ${profitColor}`;
    let t12;
    if ($[27] !== gainPercentage_0) {
        t12 = gainPercentage_0.toFixed(2);
        $[27] = gainPercentage_0;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t11 || $[30] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: t11,
                    children: [
                        t12,
                        " %"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 162,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
        $[30] = t12;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13 || $[33] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t9;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Total Estimated Profit/Loss:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const t16 = `text-3xl font-bold mt-1 ${profitColor}`;
    let t17;
    if ($[36] !== profitAmount_0) {
        t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(profitAmount_0);
        $[36] = profitAmount_0;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t16 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t16,
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 196,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t16;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t14 || $[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-2 md:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t14;
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t19 || $[45] !== t6) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        t6,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 214,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t19;
        $[45] = t6;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    return t20;
};
_s(IpoProfitCalculator, "WnqY3wlEVnQAsnltA7lXW22sEJI=");
_c = IpoProfitCalculator;
const __TURBOPACK__default__export__ = IpoProfitCalculator;
var _c;
__turbopack_context__.k.register(_c, "IpoProfitCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GoalCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "67b2c1eb8a1356ed1abcf6442b4cd3299c588aa3924d4ebe41ae13db053488e5") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "67b2c1eb8a1356ed1abcf6442b4cd3299c588aa3924d4ebe41ae13db053488e5";
    }
    const [futureValue, setFutureValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const FV = Number(futureValue);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (FV <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvestment: 0,
                    totalEarnings: 0,
                    requiredSIP: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 12;
        const n = Y * 12;
        const requiredSIP = FV * (r / (Math.pow(1 + r, n) - 1)) / (1 + r);
        const totalInvestment = requiredSIP * Y * 12;
        const totalEarnings = FV - totalInvestment;
        let t1;
        if ($[2] !== requiredSIP || $[3] !== totalEarnings || $[4] !== totalInvestment) {
            t1 = {
                totalInvestment,
                totalEarnings,
                requiredSIP
            };
            $[2] = requiredSIP;
            $[3] = totalEarnings;
            $[4] = totalInvestment;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvestment: totalInvestment_0, totalEarnings: totalEarnings_0, requiredSIP: requiredSIP_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Goal SIP Planner (लक्ष्य SIP योजना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== futureValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Target Corpus / Goal Amount",
            value: futureValue,
            setter: setFutureValue,
            min: 10000,
            max: 10000000,
            unit: "\u20B9",
            placeholder: "5000000",
            accentColor: "text-purple-600 dark:text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = futureValue;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvestment_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvestment_0,
                returns: t6,
                investedColor: "#A855F7",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 108,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvestment_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== requiredSIP_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(requiredSIP_0);
        $[23] = requiredSIP_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-purple-700 dark:text-purple-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Monthly SIP Required"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvestment_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvestment_0);
        $[30] = totalInvestment_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Investment Required"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    const t17 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t18;
    if ($[37] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t17);
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-purple-600 dark:text-purple-400",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Potential Earnings"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t19;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t12 || $[45] !== t16 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 220,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t12;
        $[45] = t16;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t22 || $[49] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t22;
        $[49] = t8;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    return t23;
};
_s(GoalCalculator, "7Pbi4PgCFWaHlv47nltzXwFQR2Y=");
_c = GoalCalculator;
const __TURBOPACK__default__export__ = GoalCalculator;
var _c;
__turbopack_context__.k.register(_c, "GoalCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const RetirementCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "12e01653234bd0d35981284067f523b618262575ba4a77e4ee22024f8116c3df") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12e01653234bd0d35981284067f523b618262575ba4a77e4ee22024f8116c3df";
    }
    const [currentAge, setCurrentAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [retirementAge, setRetirementAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentMonthlyExpense, setCurrentMonthlyExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inflationRate, setInflationRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [withdrawalRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const CA = Number(currentAge);
    const RA = Number(retirementAge);
    const CME = Number(currentMonthlyExpense);
    const IR = Number(inflationRate);
    let t0;
    bb0: {
        const years = RA - CA;
        if (years <= 0 || CME <= 0 || IR <= 0 || RA <= CA) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    requiredCorpus: 0,
                    estimatedFutureMonthlyExpense: 0,
                    yearsUntilRetirement: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const expense = CME;
        const i = IR / 100;
        const w = withdrawalRate / 100;
        const futureMonthlyExpense = expense * Math.pow(1 + i, years);
        const futureAnnualExpense = futureMonthlyExpense * 12;
        const requiredCorpus = futureAnnualExpense / w;
        let t1;
        if ($[2] !== futureMonthlyExpense || $[3] !== requiredCorpus || $[4] !== years) {
            t1 = {
                requiredCorpus,
                estimatedFutureMonthlyExpense: futureMonthlyExpense,
                yearsUntilRetirement: years
            };
            $[2] = futureMonthlyExpense;
            $[3] = requiredCorpus;
            $[4] = years;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { requiredCorpus: requiredCorpus_0, estimatedFutureMonthlyExpense, yearsUntilRetirement } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Retirement Corpus Calculator (रिटायरमेंट योजना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== currentAge) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = currentAge;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== retirementAge) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = retirementAge;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== currentMonthlyExpense) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Monthly Expense",
            value: currentMonthlyExpense,
            setter: setCurrentMonthlyExpense,
            min: 1000,
            max: 200000,
            unit: "\u20B9",
            placeholder: "50000",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = currentMonthlyExpense;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== inflationRate) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = inflationRate;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== t2 || $[16] !== t3 || $[17] !== t4 || $[18] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Years until Retirement:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== yearsUntilRetirement) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: [
                        yearsUntilRetirement,
                        " Years"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 128,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = yearsUntilRetirement;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Estimated Monthly Expense at Retirement:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 136,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== estimatedFutureMonthlyExpense) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(estimatedFutureMonthlyExpense);
        $[24] = estimatedFutureMonthlyExpense;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-indigo-600 dark:text-indigo-400",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 151,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Safe Withdrawal Rate:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 159,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== withdrawalRate) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-indigo-600 dark:text-indigo-400",
                    children: [
                        withdrawalRate,
                        " %"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 166,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = withdrawalRate;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t11 || $[32] !== t13 || $[33] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t8,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t11;
        $[32] = t13;
        $[33] = t8;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Required Retirement Corpus:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 184,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== requiredCorpus_0) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(requiredCorpus_0);
        $[36] = requiredCorpus_0;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold mt-1 text-indigo-700 dark:text-indigo-300",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 199,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t14 || $[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t14;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== t18 || $[44] !== t6) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t6,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 216,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 216,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t18;
        $[44] = t6;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    return t19;
};
_s(RetirementCalculator, "bNAmnTmVXZZkyNnYhffp5pmJtBA=");
_c = RetirementCalculator;
const __TURBOPACK__default__export__ = RetirementCalculator;
var _c;
__turbopack_context__.k.register(_c, "RetirementCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const EMICalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "bf0661cc0044e4c82999bba7e689644ec9686c84857058107976768d3d8e9ef6") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf0661cc0044e4c82999bba7e689644ec9686c84857058107976768d3d8e9ef6";
    }
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const L = Number(loanAmount);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (L <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInterest: 0,
                    totalPayment: 0,
                    emi: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 12;
        const n = Y * 12;
        const emi = L * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - L;
        let t1;
        if ($[2] !== emi || $[3] !== totalInterest || $[4] !== totalPayment) {
            t1 = {
                totalInterest,
                totalPayment,
                emi
            };
            $[2] = emi;
            $[3] = totalInterest;
            $[4] = totalPayment;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInterest: totalInterest_0, totalPayment: totalPayment_0, emi: emi_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "EMI Calculator (मासिक किश्त गणना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== loanAmount) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Loan Amount",
            value: loanAmount,
            setter: setLoanAmount,
            min: 10000,
            max: 5000000,
            unit: "\u20B9",
            placeholder: "1000000",
            accentColor: "text-orange-600 dark:text-orange-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = loanAmount;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Monthly EMI:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== emi_0) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(emi_0);
        $[18] = emi_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-orange-700 dark:text-orange-400",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 122,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Principal:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== L) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(L);
        $[23] = L;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 145,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Interest:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== totalInterest_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[28] = totalInterest_0;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-red-600 dark:text-red-400",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 168,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-900 dark:text-slate-50",
            children: "Total Payment:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== totalPayment_0) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalPayment_0);
        $[33] = totalPayment_0;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between font-bold",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-orange-700 dark:text-orange-400",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 191,
                    columnNumber: 64
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t11 || $[38] !== t14 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 space-y-2 text-sm",
            children: [
                t11,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t11;
        $[38] = t14;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18 || $[42] !== t8) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t8,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t18;
        $[42] = t8;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t19 || $[45] !== t5) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t5,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 218,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 218,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t19;
        $[45] = t5;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    return t20;
};
_s(EMICalculator, "vqIEUvY6JLSLGrrGAvSNRl6BOCo=");
_c = EMICalculator;
const __TURBOPACK__default__export__ = EMICalculator;
var _c;
__turbopack_context__.k.register(_c, "EMICalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/EPFCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const EPFCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "aaec2ec0f2ebd25cb123714c74d44699854514b693fb2bc691104eb3d118a2dc") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aaec2ec0f2ebd25cb123714c74d44699854514b693fb2bc691104eb3d118a2dc";
    }
    const [salary, setSalary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [employeeContribution, setEmployeeContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [employerContribution, setEmployerContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [rate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8.1);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const S = Number(salary);
    const R = Number(rate);
    const Y = Number(years);
    const EC = Number(employeeContribution) / 100;
    const TC = Number(employerContribution) / 100;
    let t0;
    bb0: {
        if (S <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const monthlyContribution = S * (EC + TC);
        const r_monthly = R / 100 / 12;
        const n_months = Y * 12;
        const maturityValue = monthlyContribution * ((Math.pow(1 + r_monthly, n_months) - 1) / r_monthly * (1 + r_monthly));
        const totalInvested = monthlyContribution * n_months;
        const totalInterest = maturityValue - totalInvested;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "EPF Calculator (कर्मचारी भविष्य निधि)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== salary) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Basic Monthly Salary",
            value: salary,
            setter: setSalary,
            min: 10000,
            max: 100000,
            unit: "\u20B9",
            placeholder: "50000",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = salary;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== employeeContribution) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = employeeContribution;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== employerContribution) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = employerContribution;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== years) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = years;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== t2 || $[16] !== t3 || $[17] !== t4 || $[18] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Total Contribution (Monthly):"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const t8 = S * (EC + TC);
    let t9;
    if ($[21] !== t8) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t8);
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-indigo-700 dark:text-indigo-400",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 137,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Invested:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== totalInvested_0) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[26] = totalInvested_0;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 160,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Interest:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== totalInterest_0) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[31] = totalInterest_0;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-emerald-600 dark:text-emerald-400",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 183,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-900 dark:text-slate-50",
            children: "Maturity Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== maturityValue_0) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[36] = maturityValue_0;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between font-bold",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-indigo-700 dark:text-indigo-300 text-lg",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 206,
                    columnNumber: 64
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t13 || $[41] !== t16 || $[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 space-y-2 text-sm",
            children: [
                t13,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t13;
        $[41] = t16;
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t10 || $[45] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t10,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t10;
        $[45] = t20;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== t21 || $[48] !== t6) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t6,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 233,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 233,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t21;
        $[48] = t6;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    return t22;
};
_s(EPFCalculator, "yrkNXdT2CpAA71ZgoTl9U9ylNyU=");
_c = EPFCalculator;
const __TURBOPACK__default__export__ = EPFCalculator;
var _c;
__turbopack_context__.k.register(_c, "EPFCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/FDCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FDCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "8f1117e8f3e71cd6411d9b42b7059e00d5a3d1c27bca88cd4baf7af59611be2f") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f1117e8f3e71cd6411d9b42b7059e00d5a3d1c27bca88cd4baf7af59611be2f";
    }
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(initialInvestment);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 4;
        const n = Y * 4;
        const maturityValue = P * Math.pow(1 + r, n);
        const totalInterest = maturityValue - P;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest) {
            t1 = {
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const { totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "FD Calculator (साधारण फिक्स्ड डिपॉजिट)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== initialInvestment) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Initial Investment (Principal)",
            value: initialInvestment,
            setter: setInitialInvestment,
            min: 1000,
            max: 1000000,
            unit: "\u20B9",
            placeholder: "500000",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = initialInvestment;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = rate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = years;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Maturity Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== maturityValue_0) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[17] = maturityValue_0;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== totalInterest_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[21] = totalInterest_0;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-600 dark:text-slate-400",
            children: [
                "Total Interest Earned: ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 133,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mt-2",
            children: "Assumes quarterly compounding."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center",
            children: [
                t6,
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t8;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t5,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                    lineNumber: 157,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
        $[30] = t5;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
};
_s(FDCalculator, "TgE6PHp/klexwVTqpy5Sqii1EnU=");
_c = FDCalculator;
const __TURBOPACK__default__export__ = FDCalculator;
var _c;
__turbopack_context__.k.register(_c, "FDCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TaxFDCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "e5f07dd77d7a654803ab9e781d9cda4ff5316ff8555eb35843b9c4685dc4da25") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5f07dd77d7a654803ab9e781d9cda4ff5316ff8555eb35843b9c4685dc4da25";
    }
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tenure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const P = Number(initialInvestment);
    const R = Number(rate);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 4;
        const n = tenure * 4;
        const maturityValue = P * Math.pow(1 + r, n);
        const totalInterest = maturityValue - P;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest) {
            t1 = {
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const { totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Tax Saving FD Calculator (टैक्स सेविंग FD)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== initialInvestment) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Initial Investment",
            value: initialInvestment,
            setter: setInitialInvestment,
            min: 1000,
            max: 150000,
            unit: "\u20B9",
            placeholder: "150000",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = initialInvestment;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = rate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== tenure) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Tenure (Fixed)",
            value: tenure,
            setter: _temp,
            min: 5,
            max: 5,
            unit: "Yrs",
            placeholder: "5",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = tenure;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Total Maturity Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== maturityValue_0) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[17] = maturityValue_0;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== totalInterest_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[21] = totalInterest_0;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-600 dark:text-slate-400",
            children: [
                "Total Interest Earned: ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mt-2",
            children: "Tax deduction under Section 80C applies only to investment up to ₹1.5 Lakh."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center",
            children: [
                t6,
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t8;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t5,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                    lineNumber: 156,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
        $[30] = t5;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
};
_s(TaxFDCalculator, "v68ouzi1CZ9HtQ8IIsKc4EUkJas=");
_c = TaxFDCalculator;
const __TURBOPACK__default__export__ = TaxFDCalculator;
function _temp() {}
var _c;
__turbopack_context__.k.register(_c, "TaxFDCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ReverseSIPCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "b466c74f9407474eadade8d14ea76186afec1e9a971ccc23b29d880ccfabca17") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b466c74f9407474eadade8d14ea76186afec1e9a971ccc23b29d880ccfabca17";
    }
    const [corpus, setCorpus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [monthlyWithdrawal, setMonthlyWithdrawal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const C = Number(corpus);
    const R = Number(rate);
    const W = Number(monthlyWithdrawal);
    let t0;
    bb0: {
        if (C <= 0 || R <= 0 || W <= 0) {
            t0 = 0;
            break bb0;
        }
        const r = R / 100 / 12;
        const term1 = C * r;
        const term2 = 1 - term1 / W;
        if (term2 <= 0) {
            t0 = 999;
            break bb0;
        }
        const n_months = Math.log(term2) / Math.log(1 / (1 + r));
        const n_years = n_months / 12;
        t0 = n_years;
    }
    const years = t0;
    const formatYear = _temp;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Reverse SIP / SWP Planner (मासिक निकासी योजना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== corpus) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Corpus",
            value: corpus,
            setter: setCorpus,
            min: 100000,
            max: 50000000,
            unit: "\u20B9",
            placeholder: "10000000",
            accentColor: "text-red-600 dark:text-red-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = corpus;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = rate;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== monthlyWithdrawal) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Monthly Withdrawal Amount",
            value: monthlyWithdrawal,
            setter: setMonthlyWithdrawal,
            min: 1000,
            max: 100000,
            unit: "\u20B9",
            placeholder: "50000",
            accentColor: "text-red-600 dark:text-red-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = monthlyWithdrawal;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Corpus will last for:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = formatYear(years);
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-4xl font-bold mt-1 text-red-700 dark:text-red-300",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-xs text-slate-500",
            children: "This assumes consistent withdrawal without inflation adjustment."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t5,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                    lineNumber: 114,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t5;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
};
_s(ReverseSIPCalculator, "L6fYk4Ru6sEYb7yDzI/Se/76lqc=");
_c = ReverseSIPCalculator;
const __TURBOPACK__default__export__ = ReverseSIPCalculator;
function _temp(value) {
    if (value === 0) {
        return "0 Years";
    }
    if (value > 900) {
        return "Infinite/99+ Years";
    }
    return `${value.toFixed(1)} Years`;
}
var _c;
__turbopack_context__.k.register(_c, "ReverseSIPCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CAGRCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "28c076821d117e77f5baceb890ea45791f75e43670162e539359eb0e8cefbacb") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28c076821d117e77f5baceb890ea45791f75e43670162e539359eb0e8cefbacb";
    }
    const [startValue, setStartValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endValue, setEndValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const S = Number(startValue);
    const E = Number(endValue);
    const Y = Number(years);
    let t0;
    bb0: {
        if (S <= 0 || E <= 0 || Y <= 0) {
            t0 = 0;
            break bb0;
        }
        const result = (Math.pow(E / S, 1 / Y) - 1) * 100;
        t0 = result;
    }
    const cagr = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "CAGR Calculator (चक्रवृद्धि वार्षिक वृद्धि दर)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== startValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Starting Investment Value",
            value: startValue,
            setter: setStartValue,
            min: 1,
            max: 1000000,
            unit: "\u20B9",
            placeholder: "100000",
            accentColor: "text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = startValue;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== endValue) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Ending Investment Value",
            value: endValue,
            setter: setEndValue,
            min: 1,
            max: 2000000,
            unit: "\u20B9",
            placeholder: "180000",
            accentColor: "text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = endValue;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = years;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Calculated CAGR:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== cagr) {
        t7 = cagr.toFixed(2);
        $[13] = cagr;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-4xl font-bold mt-1 text-teal-700 dark:text-teal-300",
            children: [
                t7,
                " %"
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-xs text-slate-500",
            children: "Average Annual Growth Rate"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t5,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                    lineNumber: 112,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t5;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
};
_s(CAGRCalculator, "JxOgKZMV6pGkx8/UP2iHFwwXPlo=");
_c = CAGRCalculator;
const __TURBOPACK__default__export__ = CAGRCalculator;
var _c;
__turbopack_context__.k.register(_c, "CAGRCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GoldInvestmentCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "f8d7fef6e738b5a7aa6eb1ce6fa9bcfd845536a7d2bf0687de511094056b1edb") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8d7fef6e738b5a7aa6eb1ce6fa9bcfd845536a7d2bf0687de511094056b1edb";
    }
    const [currentValue, setCurrentValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(currentValue);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    futureValue: 0,
                    totalGain: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100;
        const n = Y;
        const futureValue = P * Math.pow(1 + r, n);
        const totalGain = futureValue - P;
        let t1;
        if ($[2] !== futureValue || $[3] !== totalGain) {
            t1 = {
                futureValue,
                totalGain
            };
            $[2] = futureValue;
            $[3] = totalGain;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const { futureValue: futureValue_0, totalGain: totalGain_0 } = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Gold Futures Value (सोने का भविष्य मूल्य)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== currentValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Investment Value",
            value: currentValue,
            setter: setCurrentValue,
            min: 1000,
            max: 10000000,
            unit: "\u20B9",
            placeholder: "500000",
            accentColor: "text-amber-600 dark:text-amber-400",
            step: 1000
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = currentValue;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = rate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = years;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const t6 = totalGain_0 > 0 ? totalGain_0 : 0;
    let t7;
    if ($[16] !== P || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: P,
                returns: t6,
                investedColor: "#F59E0B",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                lineNumber: 103,
                columnNumber: 52
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = P;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Initial Investment:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== P) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(P);
        $[20] = P;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                    lineNumber: 127,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Estimated Gain:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== totalGain_0) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalGain_0);
        $[25] = totalGain_0;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-emerald-600 dark:text-emerald-400",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                    lineNumber: 150,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t10 || $[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800",
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 158,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t10;
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Estimated Future Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== futureValue_0) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(futureValue_0);
        $[33] = futureValue_0;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-amber-700 dark:text-amber-300",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-slate-500",
            children: "This calculation assumes the price of gold appreciates uniformly over the time period."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t15,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t17;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t14 || $[41] !== t19 || $[42] !== t7) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t7,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t14;
        $[41] = t19;
        $[42] = t7;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t20 || $[45] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t5,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                    lineNumber: 215,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t20;
        $[45] = t5;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    return t21;
};
_s(GoldInvestmentCalculator, "Mjvt27T4tkVMvQ8TGZPAX2L087Y=");
_c = GoldInvestmentCalculator;
const __TURBOPACK__default__export__ = GoldInvestmentCalculator;
var _c;
__turbopack_context__.k.register(_c, "GoldInvestmentCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GsecBondCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "796e845eac6c0c3059e842b98f378f584bde43b5c935eba05144f7d6d97e0d62") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "796e845eac6c0c3059e842b98f378f584bde43b5c935eba05144f7d6d97e0d62";
    }
    const [faceValue, setFaceValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [couponRate, setCouponRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maturityYears, setMaturityYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [purchasePrice, setPurchasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [taxBracket, setTaxBracket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const FV = Number(faceValue);
    const CR = Number(couponRate) / 100;
    const Y = Number(maturityYears);
    const PP = Number(purchasePrice);
    const TR = Number(taxBracket) / 100;
    let t0;
    bb0: {
        if (FV <= 0 || CR <= 0 || Y <= 0 || PP <= 0 || TR < 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalCoupon: 0,
                    taxOnCoupon: 0,
                    capitalGain: 0,
                    netMaturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const annualCoupon = FV * CR;
        const totalCoupon = annualCoupon * Y;
        const taxOnCoupon = totalCoupon * TR;
        const actualCapitalGain = FV - PP;
        const netCouponIncome = totalCoupon - taxOnCoupon;
        const netMaturityValue = FV + netCouponIncome + actualCapitalGain;
        let t1;
        if ($[2] !== actualCapitalGain || $[3] !== netMaturityValue || $[4] !== taxOnCoupon || $[5] !== totalCoupon) {
            t1 = {
                totalCoupon,
                taxOnCoupon,
                capitalGain: actualCapitalGain,
                netMaturityValue
            };
            $[2] = actualCapitalGain;
            $[3] = netMaturityValue;
            $[4] = taxOnCoupon;
            $[5] = totalCoupon;
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        t0 = t1;
    }
    const { totalCoupon: totalCoupon_0, taxOnCoupon: taxOnCoupon_0, capitalGain, netMaturityValue: netMaturityValue_0 } = t0;
    let t1;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: " G - Sec Bond Planner(सरकारी बॉन्ड) "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== faceValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Bond Face Value (Per Bond)",
            value: faceValue,
            setter: setFaceValue,
            min: 100,
            max: 5000,
            unit: "\u20B9",
            placeholder: "1000",
            accentColor: "text-blue-600 dark:text-blue-400",
            step: 100
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = faceValue;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== couponRate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = couponRate;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== maturityYears) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = maturityYears;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== purchasePrice) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Purchase Price (Current Price)",
            value: purchasePrice,
            setter: setPurchasePrice,
            min: 100,
            max: 5000,
            unit: "\u20B9",
            placeholder: "980",
            accentColor: "text-blue-600 dark:text-blue-400",
            step: 1
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = purchasePrice;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== taxBracket) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = taxBracket;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t2 || $[19] !== t3 || $[20] !== t4 || $[21] !== t5 || $[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t2;
        $[19] = t3;
        $[20] = t4;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: " Total Coupon Interest(Gross): "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 134,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== totalCoupon_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalCoupon_0);
        $[25] = totalCoupon_0;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: [
                        " ",
                        t9,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 149,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t9;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: " Total Tax on Coupon Income: "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== taxOnCoupon_0) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(taxOnCoupon_0);
        $[30] = taxOnCoupon_0;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-red-600 dark:text-red-400",
                    children: [
                        " ",
                        t12,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 172,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t12;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: " Capital Gain / Loss: "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    const t15 = `font-semibold ${capitalGain >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`;
    let t16;
    if ($[35] !== capitalGain) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(capitalGain);
        $[35] = capitalGain;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t15 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: t15,
                    children: [
                        " ",
                        t16,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 196,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t10 || $[41] !== t13 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 text-sm",
            children: [
                t10,
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t10;
        $[41] = t13;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: " Estimated Net Maturity Value: "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== netMaturityValue_0) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(netMaturityValue_0);
        $[45] = netMaturityValue_0;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-blue-700 dark:text-blue-300",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-slate-500",
            children: "Coupon income is taxed annually.Capital gains calculation is simplified."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t19,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t21;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== t18 || $[53] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t18,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t18;
        $[53] = t23;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== t24 || $[56] !== t7) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t7,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 262,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t24;
        $[56] = t7;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    return t25;
};
_s(GsecBondCalculator, "aBe/X6fJpRPrqCdYpMMu6J8nSP8=");
_c = GsecBondCalculator;
const __TURBOPACK__default__export__ = GsecBondCalculator;
var _c;
__turbopack_context__.k.register(_c, "GsecBondCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/PPFCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PPFCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "10829c760cb455e604b7c79267b07631651189a1e52c7c7216b47e76d9fb40a9") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10829c760cb455e604b7c79267b07631651189a1e52c7c7216b47e76d9fb40a9";
    }
    const [annualDeposit, setAnnualDeposit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7.1);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const P = Number(annualDeposit);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const annualInvestment = Math.min(P, 150000);
        const r = R / 100;
        const n = Y;
        const maturityValue = annualInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const totalInvested = annualInvestment * Y;
        const totalInterest = maturityValue - totalInvested;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "PPF Calculator (पीपीएफ योजना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== annualDeposit) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Annual Deposit",
            value: annualDeposit,
            setter: setAnnualDeposit,
            min: 500,
            max: 150000,
            unit: "\u20B9",
            placeholder: "150000",
            accentColor: "text-pink-600 dark:text-pink-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = annualDeposit;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
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
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalInterest_0 > 0 ? totalInterest_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvested_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvested_0,
                returns: t6,
                investedColor: "#EC4899",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 109,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvested_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== maturityValue_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[23] = maturityValue_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-pink-700 dark:text-pink-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Maturity Value (15 Yrs)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvested_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[30] = totalInvested_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Deposited"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t12 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 189,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t12;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t17 || $[41] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t17;
        $[41] = t8;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    return t18;
};
_s(PPFCalculator, "VDYIPq6U6d3K5KjoSJykvG8Azlc=");
_c = PPFCalculator;
const __TURBOPACK__default__export__ = PPFCalculator;
var _c;
__turbopack_context__.k.register(_c, "PPFCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/CalculatorSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Import sub-calculators
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EPFCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/FDCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/PPFCalculator.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "c2677ac0f645950cbf7fa9285a7d203306e1711b055a208493765f7606cd275b") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2677ac0f645950cbf7fa9285a7d203306e1711b055a208493765f7606cd275b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "sip",
                label: "SIP Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCC8"
            },
            {
                id: "lumpsum",
                label: "Lumpsum Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCB0"
            },
            {
                id: "goal",
                label: "Goal SIP Planner",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83C\uDFAF"
            },
            {
                id: "retirement",
                label: "Retirement Planner",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83C\uDFD6\uFE0F"
            },
            {
                id: "emi",
                label: "EMI Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCB3"
            },
            {
                id: "cagr",
                label: "CAGR Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCCA"
            },
            {
                id: "ppf",
                label: "PPF Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDD12"
            },
            {
                id: "epf",
                label: "EPF Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCBC"
            },
            {
                id: "fd",
                label: "FD Calculator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDDD3\uFE0F"
            },
            {
                id: "taxfd",
                label: "Tax Saving FD",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83C\uDFE6"
            },
            {
                id: "swp",
                label: "Reverse SIP / SWP",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCB8"
            },
            {
                id: "ipo",
                label: "IPO Profit Estimator",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83D\uDCC8"
            },
            {
                id: "gold",
                label: "Gold Future Value",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83E\uDD47"
            },
            {
                id: "gsec",
                label: "G-Sec Bond Planner",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                icon: "\uD83C\uDFDB\uFE0F"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const CALCULATOR_OPTIONS = t0;
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CALCULATOR_OPTIONS[0].id);
    const ActiveComponent = CALCULATOR_OPTIONS.find((opt)=>opt.id === activeCalculator)?.component || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-center md:text-left",
            children: "Popular Calculators"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 111,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (e)=>setActiveCalculator(e.target.value);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = CALCULATOR_OPTIONS.map(_temp);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== activeCalculator) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sm:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: activeCalculator,
                onChange: t2,
                className: "w-full rounded-xl border border-slate-300 bg-white p-43 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 font-medium",
                children: t3
            }, void 0, false, {
                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                lineNumber: 132,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 132,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = activeCalculator;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== activeCalculator) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden sm:flex flex-wrap gap-2 justify-center md:justify-start",
            children: CALCULATOR_OPTIONS.map((opt_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveCalculator(opt_1.id),
                    className: `flex items-center gap-2 rounded-full px-3    py-2 text-sm font-semibold transition-all duration-200 border ${activeCalculator === opt_1.id ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/20 scale-105" : "bg-white text-slate-600 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:border-emerald-500/50"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: opt_1.icon
                        }, void 0, false, {
                            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                            lineNumber: 140,
                            columnNumber: 623
                        }, ("TURBOPACK compile-time value", void 0)),
                        opt_1.label
                    ]
                }, opt_1.id, true, {
                    fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                    lineNumber: 140,
                    columnNumber: 123
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 140,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = activeCalculator;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t1,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 148,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== ActiveComponent) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 157,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = ActiveComponent;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "calculators",
            className: "border-b border-slate-200/70 bg-slate-50 py-8 sm:py-12 dark:border-slate-800/70 dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6",
                children: [
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/CalculatorSection.jsx",
                lineNumber: 165,
                columnNumber: 146
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorSection.jsx",
            lineNumber: 165,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
};
_s(CalculatorSection, "yF9qrwsDkH7ZsH/9PMJSnHFHWFk=");
_c = CalculatorSection;
const __TURBOPACK__default__export__ = CalculatorSection;
function _temp(opt_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: opt_0.id,
        children: [
            opt_0.icon,
            " ",
            opt_0.label
        ]
    }, opt_0.id, true, {
        fileName: "[project]/src/Calculators/CalculatorSection.jsx",
        lineNumber: 176,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CalculatorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_57b7c62f._.js.map