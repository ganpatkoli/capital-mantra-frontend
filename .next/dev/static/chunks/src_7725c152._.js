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
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
// --- Sub-Calculator Imports ---
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
(()=>{
    const e = new Error("Cannot find module '../../Calculators/SubCalculators/BrokerageCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
;
;
;
;
// --- Comprehensive Data Hub for ALL 14 Calculators ---
const contentData = {
    sip: {
        title: "SIP Wealth Projector",
        description: "Systematic Investment Plan (SIP) compounding aur rupee cost averaging ke jariye wealth create karne ka sabse anushasit (disciplined) tarika hai.",
        formula: "FV = P × ({[1 + i]^n – 1} / i) × (1 + i)",
        variables: [
            {
                k: "P",
                v: "Monthly Investment"
            },
            {
                k: "i",
                v: "Monthly Rate"
            },
            {
                k: "n",
                v: "Total Months"
            }
        ],
        specs: [
            {
                feature: "Strategy",
                value: "Cost Averaging"
            },
            {
                feature: "Tax",
                value: "ELSS 80C Support"
            }
        ],
        logic: [
            {
                step: "Unit Accumulation",
                desc: "Low NAV par zyada units aur high NAV par kam units buy karna."
            },
            {
                step: "Compounding",
                desc: "Returns reinvest hokar exponential growth banate hain."
            }
        ],
        pros: [
            "Market timing ki chinta nahi",
            "Choti shuruat (₹500)"
        ],
        cons: [
            "Market linked volatility",
            "Long-term patience"
        ],
        tips_tricks: [
            "Har saal SIP ko 10% badhane (Step-up) se aapka corpus 2x tezi se badh sakta hai."
        ],
        chart_context: "Power of compounding over time"
    },
    brokerage: {
        title: "Trade Net-Profit Analyzer",
        description: "Trading mein purchase price ke alawa brokerage fees, STT, aur GST jaise charges shamil hote hain. Ye tool aapka actual 'In-hand' profit nikalta hai.",
        formula: "Net P&L = (Sell - Buy) - (Statutory Taxes + Brokerage)",
        variables: [
            {
                k: "STT",
                v: "Securities Transaction Tax"
            },
            {
                k: "GST",
                v: "18% on Brokerage + Exchange Fees"
            },
            {
                k: "SEBI",
                v: "Turnover based regulatory fee"
            }
        ],
        specs: [
            {
                feature: "Mode",
                value: "Intraday / Delivery"
            },
            {
                feature: "Compliant",
                value: "Updated for FY 2025-26"
            }
        ],
        logic: [
            {
                step: "Turnover Calc",
                desc: "Buy aur Sell values ka sum nikal kar turnover determine karna."
            },
            {
                step: "Tax Deductions",
                desc: "Deduction of STT, GST, SEBI, aur Stamp Duty layers."
            }
        ],
        pros: [
            "Full transparency on profit",
            "Precise exit planning"
        ],
        cons: [
            "Taxes vary by state",
            "Excludes DP charges"
        ],
        tips_tricks: [
            "Discount brokers aksar flat-fee charge karte hain jo bade volume trades ke liye sasta hota hai."
        ],
        chart_context: "Trading charge decomposition"
    },
    emi: {
        title: "Loan EMI Amortization Matrix",
        description: "EMI aapke loan ko fixed monthly kist mein todta hai. Isme Principal aur Interest dono shamil hote hain.",
        formula: "E = P × r × (1 + r)^n / ((1 + r)^n – 1)",
        variables: [
            {
                k: "P",
                v: "Loan Principal"
            },
            {
                k: "r",
                v: "Monthly Interest Rate"
            },
            {
                k: "n",
                v: "Months"
            }
        ],
        specs: [
            {
                feature: "Type",
                value: "Reducing Balance"
            },
            {
                feature: "Credit",
                value: "CIBIL Impact"
            }
        ],
        logic: [
            {
                step: "Interest Heavy Start",
                desc: "Pehle kist mein interest component zyada hota hai."
            },
            {
                step: "Principal Shift",
                desc: "Dhire-dhire principal repayment badhta jata hai."
            }
        ],
        pros: [
            "Predictable outflow",
            "Home loan tax benefits"
        ],
        cons: [
            "Total interest principal se zyada ho sakta hai"
        ],
        tips_tricks: [
            "Har saal ek extra EMI dene se 20 saal ka loan 15 saal mein khatam ho sakta hai."
        ],
        chart_context: "Principal vs Interest repayment cycle"
    },
    ppf: {
        title: "PPF Safe-Savings Terminal",
        description: "PPF ek government-backed safe investment hai jo 100% tax-free returns provide karta hai.",
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
                v: "15-Year Tenure"
            }
        ],
        specs: [
            {
                feature: "Security",
                value: "Sovereign Guarantee"
            },
            {
                feature: "Tax",
                value: "EEE Category"
            }
        ],
        logic: [
            {
                step: "Interest Accrual",
                desc: "Lowest balance between 5th and end of month par interest."
            },
            {
                step: "Lock-in Period",
                desc: "15 years ki long-term disciplined saving."
            }
        ],
        pros: [
            "Risk-free saving",
            "Highest tax benefit (80C)"
        ],
        cons: [
            "Limited liquidity",
            "Long lock-in"
        ],
        tips_tricks: [
            "Har mahine ki 5 tarikh se pehle paise jama karein taaki poore mahine ka interest mile."
        ],
        chart_context: "Tax-free wealth accumulation"
    }
};
const CalculatorSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(115);
    if ($[0] !== "41c19dddc7a20b1aaaec9b2271e5ef014dacebf779b1d0c622dd2d5310fb127c") {
        for(let $i = 0; $i < 115; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "41c19dddc7a20b1aaaec9b2271e5ef014dacebf779b1d0c622dd2d5310fb127c";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sip");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "sip",
                label: "SIP Engine",
                icon: "\uD83D\uDCC8",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "brokerage",
                label: "Brokerage & Tax",
                icon: "\uD83E\uDDFE",
                category: "Trading",
                component: BrokerageCalculator
            },
            {
                id: "lumpsum",
                label: "Lumpsum Pro",
                icon: "\uD83D\uDCB0",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "goal",
                label: "Goal Planner",
                icon: "\uD83C\uDFAF",
                category: "Planning",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "retirement",
                label: "Retirement",
                icon: "\uD83C\uDFD6\uFE0F",
                category: "Planning",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "emi",
                label: "Loan EMI",
                icon: "\uD83D\uDCB3",
                category: "Banking",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "ppf",
                label: "PPF Safe",
                icon: "\uD83D\uDD12",
                category: "Tax Saving",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "fd",
                label: "FD Interest",
                icon: "\uD83D\uDDD3\uFE0F",
                category: "Banking",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "gold",
                label: "Gold Value",
                icon: "\uD83E\uDD47",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "ipo",
                label: "IPO Gain",
                icon: "\uD83D\uDE80",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "cagr",
                label: "CAGR Tool",
                icon: "\uD83D\uDCCA",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "epf",
                label: "EPF Tracker",
                icon: "\uD83D\uDCBC",
                category: "Retirement",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "taxfd",
                label: "Tax FD",
                icon: "\uD83C\uDFE6",
                category: "Tax Saving",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "swp",
                label: "SWP Pension",
                icon: "\uD83D\uDCB8",
                category: "Retirement",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "gsec",
                label: "G-Sec Bonds",
                icon: "\uD83C\uDFDB\uFE0F",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const CALCULATOR_OPTIONS = t0;
    let t1;
    if ($[2] !== searchTerm) {
        t1 = CALCULATOR_OPTIONS.filter((opt)=>opt.label.toLowerCase().includes(searchTerm.toLowerCase()));
        $[2] = searchTerm;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredOptions = t1;
    const current = contentData[activeCalculator] || contentData.sip;
    const ActiveComponent = CALCULATOR_OPTIONS.find((opt_0)=>opt_0.id === activeCalculator)?.component;
    let t2;
    if ($[4] !== current.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: [
                    current.title,
                    " | Financial Intelligence"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 282,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 282,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = current.title;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors",
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 290,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search tools...",
                    className: "w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-xs font-black focus:border-blue-500 outline-none shadow-sm",
                    onChange: (e)=>setSearchTerm(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 297,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 297,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== activeCalculator || $[9] !== filteredOptions) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "lg:col-span-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-24 space-y-6",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "space-y-2 max-h-[75vh] overflow-y-auto no-scrollbar pb-10",
                        children: filteredOptions.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCalculator(tab.id),
                                className: `flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all w-full border-2 ${activeCalculator === tab.id ? "bg-blue-600 text-white border-blue-600 shadow-xl" : "bg-white dark:bg-slate-900 text-slate-500 border-transparent hover:border-slate-100 dark:hover:border-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 304,
                                        columnNumber: 596
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-none mb-1",
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 304,
                                                columnNumber: 666
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] opacity-60 font-bold",
                                                children: tab.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 304,
                                                columnNumber: 714
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 304,
                                        columnNumber: 639
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 304,
                                columnNumber: 191
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 304,
                        columnNumber: 88
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 304,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 304,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = activeCalculator;
        $[9] = filteredOptions;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 313,
                    columnNumber: 121
                }, ("TURBOPACK compile-time value", void 0)),
                " Intelligence Terminal"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 313,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== current.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none",
                    children: current.title
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 320,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 320,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = current.title;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-emerald-400 font-black text-sm uppercase flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 328,
                        columnNumber: 180
                    }, ("TURBOPACK compile-time value", void 0)),
                    " FY 2025-26 Ready"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 328,
                columnNumber: 95
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 328,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6",
                children: [
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 335,
                columnNumber: 106
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 335,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t7;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== ActiveComponent) {
        t10 = ActiveComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 343,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = ActiveComponent;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white dark:bg-slate-900 rounded-[3rem] p-6 md:p-10 shadow-2xl border border-slate-100 dark:border-slate-800",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-black uppercase italic tracking-tighter",
            children: "Mastering the Logic"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 359,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== current.description) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-blue-100 text-sm leading-relaxed font-medium",
            children: [
                current.description,
                " Understanding how these variables interact helps you stay disciplined during market cycles."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 366,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = current.description;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black border border-white/20",
                    children: "VALIDATED"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 374,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-500/20 px-4 py-2 rounded-xl text-[10px] font-black border border-emerald-500/30 text-emerald-300 uppercase italic",
                    children: "Precision 1.0"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 374,
                    columnNumber: 150
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 374,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 381,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t13;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black uppercase tracking-widest text-blue-200 mb-6",
            children: "Concept Visualization"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 389,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== activeCalculator) {
        t17 = activeCalculator === "sip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            size: 64,
            className: "text-blue-300 mx-auto animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 396,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = activeCalculator;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== activeCalculator) {
        t18 = activeCalculator === "emi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            size: 64,
            className: "text-blue-300 mx-auto"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 404,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = activeCalculator;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== activeCalculator) {
        t19 = activeCalculator === "brokerage" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
            size: 64,
            className: "text-blue-300 mx-auto"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 412,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = activeCalculator;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== activeCalculator) {
        t20 = ![
            "sip",
            "emi",
            "brokerage"
        ].includes(activeCalculator) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
            size: 64,
            className: "text-blue-300 mx-auto"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 420,
            columnNumber: 70
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = activeCalculator;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== current.chart_context) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-[11px] font-bold text-blue-100 italic tracking-tight",
            children: [
                '"Model: ',
                current.chart_context,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 428,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = current.chart_context;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t17 || $[39] !== t18 || $[40] !== t19 || $[41] !== t20 || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 text-center",
            children: [
                t16,
                t17,
                t18,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 436,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t17;
        $[39] = t18;
        $[40] = t19;
        $[41] = t20;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== t15 || $[45] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-10 items-center relative z-10",
                children: [
                    t15,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 448,
                columnNumber: 140
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 448,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t15;
        $[45] = t22;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== current.title) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-black uppercase italic tracking-tight mb-6 underline decoration-blue-500 underline-offset-8",
            children: [
                "Understanding the ",
                current.title
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 457,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = current.title;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== current.title) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-600 dark:text-slate-400 leading-relaxed text-lg",
            children: [
                "Financial planning involves multiple charges and market variables besides the purchasing price. A ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: current.title
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 465,
                    columnNumber: 183
                }, ("TURBOPACK compile-time value", void 0)),
                " is an online tool designed to help you analyze costs, potential growth, and liabilities in advance. Whether you are calculating trading taxes or wealth accumulation, this analyzer provides accurate information instantaneously."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 465,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = current.title;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== t24 || $[52] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 473,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t24;
        $[52] = t25;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-black text-blue-600 uppercase text-xs flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 482,
                    columnNumber: 94
                }, ("TURBOPACK compile-time value", void 0)),
                " Key Determinants:"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 482,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "text-sm space-y-3 text-slate-500 dark:text-slate-400 font-medium list-disc pl-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Transaction Value:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 489,
                                    columnNumber: 143
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Base capital is directly proportional to final output."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 489,
                            columnNumber: 139
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Compounding / Amortization:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 489,
                                    columnNumber: 242
                                }, ("TURBOPACK compile-time value", void 0)),
                                " The frequency of accruals determines the speed of wealth or debt."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 489,
                            columnNumber: 238
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Regulatory Charges:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 489,
                                    columnNumber: 361
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Statutory taxes like GST, STT, and Stamp Duty are deducted at the terminal stage."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 489,
                            columnNumber: 357
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 489,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 489,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    let t29;
    let t30;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-black text-blue-600 uppercase text-xs flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 497,
                    columnNumber: 94
                }, ("TURBOPACK compile-time value", void 0)),
                " How to use effectively?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 497,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium",
            children: "Select your tool from the toolkit directory. Input accurate buy/sell prices or monthly contributions. The terminal instantaneously computes your net realization, giving you a clear roadmap before you carry out the trade or investment."
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 498,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t29;
        $[57] = t30;
    } else {
        t29 = $[56];
        t30 = $[57];
    }
    let t31;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-10 border-t dark:border-slate-800 pt-10",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t29,
                        t30,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-500 uppercase italic",
                                children: "Pro Tip: Always account for 6% annual inflation for long-term goals."
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 507,
                                columnNumber: 242
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 507,
                            columnNumber: 134
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 507,
                    columnNumber: 97
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 507,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    let t32;
    if ($[59] !== t26) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-12",
            children: [
                t26,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 514,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t26;
        $[60] = t32;
    } else {
        t32 = $[60];
    }
    let t33;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-b dark:border-slate-800 flex justify-between items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 522,
                        columnNumber: 240
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Key Specifications"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 522,
                columnNumber: 136
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 522,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t33;
    } else {
        t33 = $[61];
    }
    let t34;
    if ($[62] !== current.specs) {
        t34 = current.specs?.map(_temp);
        $[62] = current.specs;
        $[63] = t34;
    } else {
        t34 = $[63];
    }
    let t35;
    if ($[64] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y dark:divide-slate-800",
                    children: t34
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 537,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 537,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t34;
        $[65] = t35;
    } else {
        t35 = $[65];
    }
    let t36;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-black uppercase tracking-widest text-blue-500 mb-8 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    size: 14,
                    className: "fill-current"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 545,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0)),
                " Computational Algorithm"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 545,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t36;
    } else {
        t36 = $[66];
    }
    let t37;
    if ($[67] !== current.formula) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 p-6 rounded-3xl border border-white/10 text-center mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "text-lg md:text-xl font-mono font-bold text-blue-400 tracking-tighter block",
                children: current.formula
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 552,
                columnNumber: 95
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 552,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = current.formula;
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== current.variables) {
        t38 = current.variables?.map(_temp2);
        $[69] = current.variables;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 568,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t38;
        $[72] = t39;
    } else {
        t39 = $[72];
    }
    let t40;
    if ($[73] !== t37 || $[74] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 rounded-[2.5rem] p-8 text-white flex flex-col justify-between border border-slate-800 shadow-2xl relative",
            children: [
                t36,
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 576,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t37;
        $[74] = t39;
        $[75] = t40;
    } else {
        t40 = $[75];
    }
    let t41;
    if ($[76] !== t35 || $[77] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [
                t35,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 585,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t35;
        $[77] = t40;
        $[78] = t41;
    } else {
        t41 = $[78];
    }
    let t42;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-black text-[10px] uppercase mb-6 text-emerald-600 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 594,
                    columnNumber: 106
                }, ("TURBOPACK compile-time value", void 0)),
                " Trade Benefits"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 594,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t42;
    } else {
        t42 = $[79];
    }
    let t43;
    if ($[80] !== current.pros) {
        t43 = current.pros?.map(_temp3);
        $[80] = current.pros;
        $[81] = t43;
    } else {
        t43 = $[81];
    }
    let t44;
    if ($[82] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/20 shadow-sm",
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: t43
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 609,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 609,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = t43;
        $[83] = t44;
    } else {
        t44 = $[83];
    }
    let t45;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-black text-[10px] uppercase mb-6 text-rose-600 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 617,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0)),
                " Risk Assessment"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 617,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[84] = t45;
    } else {
        t45 = $[84];
    }
    let t46;
    if ($[85] !== current.cons) {
        t46 = current.cons?.map(_temp4);
        $[85] = current.cons;
        $[86] = t46;
    } else {
        t46 = $[86];
    }
    let t47;
    if ($[87] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-rose-50 dark:bg-rose-900/10 p-8 rounded-[2rem] border border-rose-100 dark:border-rose-900/20 shadow-sm",
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: t46
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 632,
                    columnNumber: 140
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 632,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t46;
        $[88] = t47;
    } else {
        t47 = $[88];
    }
    let t48;
    let t49;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            size: 40,
            className: "absolute -right-4 -top-4 text-white/5 rotate-12"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 641,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-black text-[10px] uppercase mb-6 text-blue-400",
            children: "Wealth Secret"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 642,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t48;
        $[90] = t49;
    } else {
        t48 = $[89];
        t49 = $[90];
    }
    const t50 = current.tips_tricks?.[0];
    let t51;
    if ($[91] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-bold leading-relaxed italic opacity-90 tracking-tight",
            children: [
                '"',
                t50,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 652,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[91] = t50;
        $[92] = t51;
    } else {
        t51 = $[92];
    }
    let t52;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mt-8 group flex items-center gap-2 text-[10px] font-black uppercase text-blue-400 hover:text-white transition-all",
            children: [
                "Learn Net Realization ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                    size: 16,
                    className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 660,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 660,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[93] = t52;
    } else {
        t52 = $[93];
    }
    let t53;
    if ($[94] !== t51) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 p-8 rounded-[2rem] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group",
            children: [
                t48,
                t49,
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 667,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[94] = t51;
        $[95] = t53;
    } else {
        t53 = $[95];
    }
    let t54;
    if ($[96] !== t44 || $[97] !== t47 || $[98] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: [
                t44,
                t47,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 675,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[96] = t44;
        $[97] = t47;
        $[98] = t53;
        $[99] = t54;
    } else {
        t54 = $[99];
    }
    let t55;
    if ($[100] !== t11 || $[101] !== t23 || $[102] !== t32 || $[103] !== t41 || $[104] !== t54 || $[105] !== t9) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-9 space-y-8",
            children: [
                t9,
                t11,
                t23,
                t32,
                t41,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 685,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[100] = t11;
        $[101] = t23;
        $[102] = t32;
        $[103] = t41;
        $[104] = t54;
        $[105] = t9;
        $[106] = t55;
    } else {
        t55 = $[106];
    }
    let t56;
    if ($[107] !== t5 || $[108] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-[1440px] mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8",
            children: [
                t5,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 698,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[107] = t5;
        $[108] = t55;
        $[109] = t56;
    } else {
        t56 = $[109];
    }
    let t57;
    let t58;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "max-w-7xl mx-auto px-4 py-12 border-t dark:border-slate-800 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]",
                children: "Financial Intelligence Terminal © 2025 | Powered by Precise Wealth Models"
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 708,
                columnNumber: 103
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 708,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "d54731231a57dfec",
            children: ".no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}::selection{color:#fff;background:#2563eb}"
        }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0));
        $[110] = t57;
        $[111] = t58;
    } else {
        t57 = $[110];
        t58 = $[111];
    }
    let t59;
    if ($[112] !== t2 || $[113] !== t56) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#f8fafc] dark:bg-[#020617] min-h-screen transition-all duration-500",
            children: [
                t2,
                t56,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 718,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[112] = t2;
        $[113] = t56;
        $[114] = t59;
    } else {
        t59 = $[114];
    }
    return t59;
};
_s(CalculatorSection, "U/EldhnzKRTblXnWfz+nTpxyjTU=");
_c = CalculatorSection;
const __TURBOPACK__default__export__ = CalculatorSection;
function _temp(spec, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center px-8 py-5 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-black uppercase text-slate-400",
                children: spec.feature
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 729,
                columnNumber: 145
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-black text-slate-900 dark:text-white uppercase",
                children: spec.value
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 729,
                columnNumber: 232
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 729,
        columnNumber: 10
    }, this);
}
function _temp2(v, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between text-[10px] font-bold border-b border-white/5 pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-blue-500",
                children: v.k
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 732,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 uppercase tracking-tight",
                children: v.v
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 732,
                columnNumber: 151
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 732,
        columnNumber: 10
    }, this);
}
function _temp3(p, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-xs font-bold text-slate-700 dark:text-slate-300 flex items-start gap-3",
        children: [
            "✓ ",
            p
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 735,
        columnNumber: 10
    }, this);
}
function _temp4(c, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-xs font-bold text-slate-700 dark:text-slate-300 flex items-start gap-3",
        children: [
            "× ",
            c
        ]
    }, i_1, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 738,
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

//# sourceMappingURL=src_7725c152._.js.map