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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
// --- Sub-Calculators (Brokerage and Equity specific logic added) ---
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-client] (ecmascript)");
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
// Assume BrokerageCalculator is a new component you'll create
// import BrokerageCalculator from "../../Calculators/SubCalculators/BrokerageCalculator";
const contentData = {
    brokerage: {
        title: "Trade Net-Profit Analyzer",
        formula: "Net Profit = (Selling Price - Buying Price) - Total Regulatory Charges",
        variables: [
            {
                k: "STT",
                v: "Securities Transaction Tax"
            },
            {
                k: "SEBI Fee",
                v: "Market Regulator Charges"
            },
            {
                k: "Stamp Duty",
                v: "State-wise Transaction Tax"
            }
        ],
        specs: [
            {
                feature: "Asset Class",
                value: "Equity/F&O/Intraday"
            },
            {
                feature: "Taxation",
                value: "GST @18% on Brokerage"
            },
            {
                feature: "Break-even",
                value: "Price needed to cover costs"
            }
        ],
        logic: [
            {
                step: "Gross Calculation",
                desc: "Determining the absolute difference between Buy & Sell value."
            },
            {
                step: "Tax Deductions",
                desc: "Calculating mandatory government taxes like STT and Stamp Duty."
            },
            {
                step: "Net Realization",
                desc: "The final 'In-hand' profit after subtracting all statutory fees."
            }
        ],
        pros: [
            "Prevents hidden cost surprises",
            "Helps in planning exit price"
        ],
        cons: [
            "Taxes vary by state",
            "Doesn't include DP charges"
        ],
        tips_tricks: [
            "For intraday trades, STT is only charged on the sell side, saving you costs."
        ],
        insight: "Profit isn't just Sell - Buy. Regulatory charges can take up to 0.1% of your total turnover."
    },
    sip: {
        title: "SIP Wealth Projector",
        formula: "FV = P × ({[1 + i]^n – 1} / i) × (1 + i)",
        variables: [
            {
                k: "P",
                v: "Monthly Investment"
            },
            {
                k: "i",
                v: "Monthly Interest"
            },
            {
                k: "n",
                v: "Tenure"
            }
        ],
        specs: [
            {
                feature: "Strategy",
                value: "Rupee Cost Averaging"
            },
            {
                feature: "Tax",
                value: "LTCG Applicable"
            }
        ],
        logic: [
            {
                step: "Power of 10",
                desc: "Small monthly sums grow through the magic of compounding."
            }
        ],
        pros: [
            "Disciplined approach",
            "Low entry barrier"
        ],
        cons: [
            "Requires long-term patience"
        ],
        tips_tricks: [
            "Treat SIP as a 'salary deduction' for maximum discipline."
        ],
        insight: "Time in the market is superior to timing the market."
    }
};
const CalculatorSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(90);
    if ($[0] !== "47fb085b054d3d747e723cf2f01b72a377caba18cfd56d2f65dfd0ec1ac731a7") {
        for(let $i = 0; $i < 90; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "47fb085b054d3d747e723cf2f01b72a377caba18cfd56d2f65dfd0ec1ac731a7";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("brokerage");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "sip",
                label: "SIP Projector",
                icon: "\uD83D\uDCC8",
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
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
                label: "Goal Architect",
                icon: "\uD83C\uDFAF",
                category: "Planning",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "emi",
                label: "Loan Matrix",
                icon: "\uD83D\uDCB3",
                category: "Banking",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
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
                lineNumber: 140,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 140,
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
            className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500",
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 148,
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
                    lineNumber: 155,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 155,
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
                        className: "space-y-2 max-h-[70vh] overflow-y-auto no-scrollbar",
                        children: filteredOptions.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCalculator(tab.id),
                                className: `flex items-center gap-4 px-5 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all w-full border-2 ${activeCalculator === tab.id ? "bg-blue-600 text-white border-blue-600 shadow-lg translate-x-1" : "bg-white dark:bg-slate-900 text-slate-500 border-transparent hover:border-slate-100 dark:hover:border-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 162,
                                        columnNumber: 604
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-none mb-1",
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 162,
                                                columnNumber: 674
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] opacity-60 font-bold",
                                                children: tab.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calculators/page.js",
                                                lineNumber: 162,
                                                columnNumber: 722
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 162,
                                        columnNumber: 647
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 162,
                                columnNumber: 185
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 162,
                        columnNumber: 88
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 162,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 162,
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
            className: "text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 171,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0)),
                " Trade Intelligence"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 171,
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
                    className: "text-4xl md:text-6xl font-black italic uppercase leading-tight tracking-tighter",
                    children: current.title
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 178,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 178,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = current.title;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black opacity-50 uppercase mb-1",
            children: "Live Tax Engine"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 186,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 px-6 py-3 rounded-2xl border border-white/20 backdrop-blur-md",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-emerald-400 font-black text-sm flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 193,
                                columnNumber: 217
                            }, ("TURBOPACK compile-time value", void 0)),
                            " UPDATED 2025"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 193,
                        columnNumber: 142
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 193,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 193,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 200,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t7;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -right-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 208,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== ActiveComponent) {
        t13 = ActiveComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 223,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = ActiveComponent;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white dark:bg-slate-900 rounded-[3rem] p-6 md:p-10 shadow-2xl border border-slate-100 dark:border-slate-800",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-black uppercase italic tracking-tighter flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 239,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                " Breaking Down the Math"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== current.insight) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-blue-100 text-sm leading-relaxed font-medium",
            children: current.insight
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 246,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = current.insight;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 p-4 rounded-2xl border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-black opacity-60 uppercase mb-2 text-blue-200",
                    children: "Processing Mode"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 254,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-bold",
                    children: "Post-Tax Analysis"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 254,
                    columnNumber: 176
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 p-4 rounded-2xl border border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-black opacity-60 uppercase mb-2 text-blue-200",
                            children: "Regulatory Sync"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 261,
                            columnNumber: 124
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold",
                            children: "SEBI/GST Compliant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 261,
                            columnNumber: 221
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 261,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 261,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t16) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t15,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t16;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black uppercase tracking-widest text-blue-200 mb-6",
            children: "Execution Logic Visualization"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== activeCalculator) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 text-center relative",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: activeCalculator === "brokerage" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-end h-24 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 bg-blue-400 rounded-t-lg h-full animate-bounce",
                                        style: {
                                            animationDelay: "0.1s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 283,
                                        columnNumber: 257
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 bg-blue-200 rounded-t-lg h-3/4 animate-bounce",
                                        style: {
                                            animationDelay: "0.2s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 285,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 bg-emerald-400 rounded-t-lg h-1/2 animate-bounce",
                                        style: {
                                            animationDelay: "0.3s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 287,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 283,
                                columnNumber: 209
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-100",
                                children: "Charge Decomposition Chart"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 289,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        size: 64,
                        className: "text-blue-300 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 289,
                        columnNumber: 111
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 283,
                    columnNumber: 127
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = activeCalculator;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== t19 || $[36] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-10 items-center relative z-10",
                children: [
                    t19,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 297,
                columnNumber: 140
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 297,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t19;
        $[36] = t21;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-b dark:border-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 306,
                        columnNumber: 206
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Regulatory Specifications"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 306,
                columnNumber: 102
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 306,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== current.specs) {
        t24 = current.specs?.map(_temp);
        $[39] = current.specs;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y dark:divide-slate-800",
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 321,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t24;
        $[42] = t25;
    } else {
        t25 = $[42];
    }
    let t26;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
            className: "absolute -right-10 -bottom-10 text-white/5 w-40 h-40 group-hover:rotate-12 transition-transform"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 329,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-black uppercase tracking-widest text-blue-500 mb-8 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    size: 14,
                    className: "fill-current"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 336,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0)),
                " Core Wealth Algorithm"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 336,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] !== current.formula) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 p-6 rounded-3xl border border-white/10 text-center mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "text-lg md:text-xl font-mono font-bold text-blue-400 tracking-tighter",
                children: current.formula
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 343,
                columnNumber: 95
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 343,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = current.formula;
        $[46] = t28;
    } else {
        t28 = $[46];
    }
    let t29;
    if ($[47] !== current.variables) {
        t29 = current.variables?.map(_temp2);
        $[47] = current.variables;
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 359,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== t28 || $[52] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 rounded-[2.5rem] p-8 text-white border border-slate-800 shadow-2xl relative overflow-hidden group",
            children: [
                t26,
                t27,
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 367,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t28;
        $[52] = t30;
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] !== t25 || $[55] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [
                t25,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t25;
        $[55] = t31;
        $[56] = t32;
    } else {
        t32 = $[56];
    }
    let t33;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-black text-[10px] uppercase mb-6 text-emerald-600 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 385,
                    columnNumber: 106
                }, ("TURBOPACK compile-time value", void 0)),
                " Trade Benefits"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 385,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t33;
    } else {
        t33 = $[57];
    }
    let t34;
    if ($[58] !== current.pros) {
        t34 = current.pros?.map(_temp3);
        $[58] = current.pros;
        $[59] = t34;
    } else {
        t34 = $[59];
    }
    let t35;
    if ($[60] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/20",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: t34
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 400,
                    columnNumber: 142
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 400,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t34;
        $[61] = t35;
    } else {
        t35 = $[61];
    }
    let t36;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-black text-[10px] uppercase mb-6 text-rose-600 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 408,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0)),
                " Important Risks"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t36;
    } else {
        t36 = $[62];
    }
    let t37;
    if ($[63] !== current.cons) {
        t37 = current.cons?.map(_temp4);
        $[63] = current.cons;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-rose-50 dark:bg-rose-900/10 p-8 rounded-[2rem] border border-rose-100 dark:border-rose-900/20",
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: t37
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 423,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t37;
        $[66] = t38;
    } else {
        t38 = $[66];
    }
    let t39;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-black text-[10px] uppercase mb-6 text-blue-400 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 431,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0)),
                " Pro Tip"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 431,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t39;
    } else {
        t39 = $[67];
    }
    const t40 = current.tips_tricks?.[0];
    let t41;
    if ($[68] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-bold leading-relaxed italic opacity-90 tracking-tight",
                    children: [
                        '"',
                        t40,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 439,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 439,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t40;
        $[69] = t41;
    } else {
        t41 = $[69];
    }
    let t42;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mt-8 group flex items-center gap-2 text-[10px] font-black uppercase text-blue-400 hover:text-white transition-all",
            children: [
                "Learn Net Realization ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                    size: 16,
                    className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 447,
                    columnNumber: 167
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 447,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t42;
    } else {
        t42 = $[70];
    }
    let t43;
    if ($[71] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 p-8 rounded-[2rem] text-white flex flex-col justify-between shadow-2xl",
            children: [
                t41,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 454,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t41;
        $[72] = t43;
    } else {
        t43 = $[72];
    }
    let t44;
    if ($[73] !== t35 || $[74] !== t38 || $[75] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: [
                t35,
                t38,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 462,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t35;
        $[74] = t38;
        $[75] = t43;
        $[76] = t44;
    } else {
        t44 = $[76];
    }
    let t45;
    if ($[77] !== t12 || $[78] !== t14 || $[79] !== t22 || $[80] !== t32 || $[81] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-9 space-y-8",
            children: [
                t12,
                t14,
                t22,
                t32,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 472,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t12;
        $[78] = t14;
        $[79] = t22;
        $[80] = t32;
        $[81] = t44;
        $[82] = t45;
    } else {
        t45 = $[82];
    }
    let t46;
    if ($[83] !== t45 || $[84] !== t5) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-[1400px] mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8",
            children: [
                t5,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 484,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t45;
        $[84] = t5;
        $[85] = t46;
    } else {
        t46 = $[85];
    }
    let t47;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "d54731231a57dfec",
            children: ".no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}::selection{color:#fff;background:#2563eb}"
        }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0));
        $[86] = t47;
    } else {
        t47 = $[86];
    }
    let t48;
    if ($[87] !== t2 || $[88] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#f8fafc] dark:bg-[#020617] min-h-screen transition-all duration-500",
            children: [
                t2,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 500,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t2;
        $[88] = t46;
        $[89] = t48;
    } else {
        t48 = $[89];
    }
    return t48;
};
_s(CalculatorSection, "31XCoDIQ76y5ixlTsnohh5PQlfI=");
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
                lineNumber: 511,
                columnNumber: 145
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight",
                children: spec.value
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 511,
                columnNumber: 232
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 511,
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
                lineNumber: 514,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 uppercase tracking-widest text-right",
                children: v.v
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 514,
                columnNumber: 151
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 514,
        columnNumber: 10
    }, this);
}
function _temp3(p, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-xs font-bold text-slate-700 dark:text-slate-300 flex items-start gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-500 mt-0.5",
                children: "•"
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 517,
                columnNumber: 112
            }, this),
            " ",
            p
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 517,
        columnNumber: 10
    }, this);
}
function _temp4(c, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-xs font-bold text-slate-700 dark:text-slate-300 flex items-start gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-rose-500 mt-0.5",
                children: "•"
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 520,
                columnNumber: 112
            }, this),
            " ",
            c
        ]
    }, i_1, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 520,
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

//# sourceMappingURL=src_85b1c271._.js.map