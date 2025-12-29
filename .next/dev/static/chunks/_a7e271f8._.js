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
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
(()=>{
    const e = new Error("Cannot find module './SubCalculators/SIPCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/LumpsumCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/IpoProfitCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/GoalCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/RetirementCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/EMICalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/EPFCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/FDCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/TaxFDCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/ReverseSIPCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './SubCalculators/GoldInvestmentCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/GsecBondCalculator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SubCalculators/PPFCalculator'");
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
// --- SEO Content Data Bank ---
const contentData = {
    sip: {
        title: "SIP Calculator",
        mainHeading: "Systematic Investment Plan (SIP) Engine",
        description: "SIP allows you to invest small amounts regularly in mutual funds. It works on the principles of Rupee Cost Averaging and the Power of Compounding.",
        formula: "M = P × ({[1 + i]^n – 1} / i) × (1 + i)",
        variables: [
            {
                k: "P",
                v: "Monthly Installment"
            },
            {
                k: "i",
                v: "Monthly Int. Rate"
            },
            {
                k: "n",
                v: "Total Months"
            }
        ],
        tip: "Increasing your SIP by just 10% every year can potentially double your final wealth.",
        faq: [
            {
                q: "Is SIP better than FD?",
                a: "Historically, equity SIPs have delivered 12-15% returns, outperforming traditional FDs (5-7%) over the long term."
            }
        ]
    },
    lumpsum: {
        title: "Lumpsum Calculator",
        mainHeading: "Wealth Growth for One-Time Investment",
        description: "Ideal for large surplus funds. It is highly effective for long-term wealth creation when the market is undervalued.",
        formula: "FV = PV × (1 + r)^n",
        variables: [
            {
                k: "PV",
                v: "Initial Principal"
            },
            {
                k: "r",
                v: "Annual Return Rate"
            },
            {
                k: "n",
                v: "Number of Years"
            }
        ],
        tip: "Invest lumpsum amounts when the market PE ratio is low for a higher margin of safety.",
        faq: [
            {
                q: "When to choose Lumpsum?",
                a: "Best during market corrections (dips) when valuations are attractive."
            }
        ]
    },
    emi: {
        title: "EMI Calculator",
        mainHeading: "Debt & Loan Repayment Planner",
        description: "Calculate your Equated Monthly Installments for Home, Car, or Personal loans accurately.",
        formula: "E = P × r × (1 + r)^n / ((1 + r)^n – 1)",
        variables: [
            {
                k: "P",
                v: "Loan Principal"
            },
            {
                k: "r",
                v: "Monthly Interest"
            },
            {
                k: "n",
                v: "Loan Tenure"
            }
        ],
        tip: "Paying one extra EMI per year can reduce a 20-year loan tenure by approximately 5 years.",
        faq: [
            {
                q: "What is a reducing rate?",
                a: "Interest is calculated on the remaining principal, saving you more than a flat rate."
            }
        ]
    }
};
const CalculatorSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "6c160b6b29faef57f13317fef543a4eb762a83a5c5ec70c8ec5148840abcf7a7") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c160b6b29faef57f13317fef543a4eb762a83a5c5ec70c8ec5148840abcf7a7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "sip",
                label: "SIP Engine",
                component: SIPCalculator,
                icon: "\uD83D\uDCC8"
            },
            {
                id: "lumpsum",
                label: "Lumpsum Pro",
                icon: "\uD83D\uDCB0",
                component: LumpsumCalculator
            },
            {
                id: "goal",
                label: "Goal Planner",
                icon: "\uD83C\uDFAF",
                component: GoalCalculator
            },
            {
                id: "retirement",
                label: "Retirement",
                icon: "\uD83C\uDFD6\uFE0F",
                component: RetirementCalculator
            },
            {
                id: "emi",
                label: "Loan EMI",
                icon: "\uD83D\uDCB3",
                component: EMICalculator
            },
            {
                id: "cagr",
                label: "CAGR Tool",
                icon: "\uD83D\uDCCA",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "ppf",
                label: "PPF Safe",
                icon: "\uD83D\uDD12",
                component: PPFCalculator
            },
            {
                id: "epf",
                label: "EPF Tracker",
                icon: "\uD83D\uDCBC",
                component: EPFCalculator
            },
            {
                id: "fd",
                label: "FD Interest",
                icon: "\uD83D\uDDD3\uFE0F",
                component: FDCalculator
            },
            {
                id: "taxfd",
                label: "Tax FD",
                icon: "\uD83C\uDFE6",
                component: TaxFDCalculator
            },
            {
                id: "swp",
                label: "SWP Pension",
                icon: "\uD83D\uDCB8",
                component: ReverseSIPCalculator
            },
            {
                id: "ipo",
                label: "IPO Profit",
                icon: "\uD83D\uDE80",
                component: IpoProfitCalculator
            },
            {
                id: "gold",
                label: "Gold Value",
                icon: "\uD83E\uDD47",
                component: GoldInvestmentCalculator
            },
            {
                id: "gsec",
                label: "G-Sec Bonds",
                icon: "\uD83C\uDFDB\uFE0F",
                component: GsecBondCalculator
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const CALCULATOR_OPTIONS = t0;
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CALCULATOR_OPTIONS[0].id);
    const current = contentData[activeCalculator] || contentData.sip;
    const ActiveComponent = CALCULATOR_OPTIONS.find((opt)=>opt.id === activeCalculator)?.component || SIPCalculator;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 px-4",
            children: "Financial Suite"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 181,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== activeCalculator) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "lg:col-span-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-24 space-y-3 max-h-[85vh] overflow-y-auto no-scrollbar pr-2",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar p-1",
                        children: CALCULATOR_OPTIONS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCalculator(tab.id),
                                className: `flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 flex-shrink-0 lg:w-full border ${activeCalculator === tab.id ? "bg-blue-600 text-white border-blue-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] translate-x-2" : "bg-white dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-800 hover:border-blue-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 188,
                                        columnNumber: 739
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    tab.label,
                                    activeCalculator === tab.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "ml-auto hidden lg:block",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 188,
                                        columnNumber: 825
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 188,
                                columnNumber: 268
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 188,
                        columnNumber: 135
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 188,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 188,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = activeCalculator;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== ActiveComponent) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 rounded-[3rem] p-4 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 196,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = ActiveComponent;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 p-8 opacity-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                size: 200
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 204,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 204,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-black uppercase tracking-widest text-blue-500 mb-10 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    size: 14,
                    className: "fill-current"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 211,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0)),
                " Computational Logic"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 211,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== current.formula) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-xl md:text-2xl font-mono font-bold text-blue-400 tracking-tighter block mb-4",
            children: current.formula
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 218,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = current.formula;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-500 uppercase font-black tracking-widest text-center",
            children: "Validated Mathematical Identity"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 226,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center mb-10",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 233,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== current.variables) {
        t9 = current.variables.map(_temp);
        $[14] = current.variables;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-6",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group",
            children: [
                t4,
                t5,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t8;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            className: "absolute -bottom-4 -right-4 opacity-10",
            size: 120
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 267,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xl font-black mb-4 uppercase tracking-tighter italic",
            children: "Expert Tip"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t12;
        $[22] = t13;
    } else {
        t12 = $[21];
        t13 = $[22];
    }
    let t14;
    if ($[23] !== current.tip) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-blue-50 leading-relaxed italic",
            children: [
                '"',
                current.tip,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 277,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = current.tip;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        className: "text-white",
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 285,
                        columnNumber: 104
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "font-black text-xs uppercase tracking-widest leading-none mb-1",
                                children: "Accuracy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 285,
                                columnNumber: 157
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-blue-100 font-bold uppercase",
                                children: "Industry Standard Models"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 285,
                                columnNumber: 249
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 285,
                        columnNumber: 152
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 285,
                columnNumber: 63
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 285,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl relative overflow-hidden h-full",
                children: [
                    t12,
                    t13,
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 292,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t14;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t11 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t11;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8",
            children: "Frequently Asked Questions"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== current.faq) {
        t19 = current.faq.map(_temp2);
        $[32] = current.faq;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 border-t border-slate-100 dark:border-slate-800 pt-16",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 324,
                    columnNumber: 97
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 324,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t19;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== t17 || $[37] !== t20 || $[38] !== t3) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-9 space-y-16",
            children: [
                t3,
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 332,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t17;
        $[37] = t20;
        $[38] = t3;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== t2 || $[41] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#fcfdfe] dark:bg-[#020617] min-h-screen transition-all duration-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12",
                children: [
                    t2,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 342,
                columnNumber: 100
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 342,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t2;
        $[41] = t21;
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    return t22;
};
_s(CalculatorSection, "yF9qrwsDkH7ZsH/9PMJSnHFHWFk=");
_c = CalculatorSection;
const __TURBOPACK__default__export__ = CalculatorSection;
function _temp(v, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col border-b border-white/5 pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-blue-500 font-black text-xs",
                children: v.k
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 353,
                columnNumber: 78
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-slate-400 font-bold uppercase",
                children: v.v
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 353,
                columnNumber: 141
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 353,
        columnNumber: 10
    }, this);
}
function _temp2(item, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "group p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "font-black text-slate-900 dark:text-white text-sm list-none flex justify-between items-center group-open:text-blue-600",
                children: [
                    item.q,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-600 text-xl group-open:rotate-180 transition-transform",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 356,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 356,
                columnNumber: 214
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 font-bold",
                children: item.a
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 356,
                columnNumber: 464
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 356,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CalculatorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield-check", __iconNode);
;
 //# sourceMappingURL=shield-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>History
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ],
    [
        "path",
        {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }
    ]
];
const History = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("history", __iconNode);
;
 //# sourceMappingURL=history.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "History",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>BookOpen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
];
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("book-open", __iconNode);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_a7e271f8._.js.map