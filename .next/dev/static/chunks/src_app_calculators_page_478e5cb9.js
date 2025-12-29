(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonalLoanCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PersonalLoanCalculator() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "1c0d44097154cf84149a9f0ddb0daa7eb467ccedbcd25e84e9128f186119ef75") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1c0d44097154cf84149a9f0ddb0daa7eb467ccedbcd25e84e9128f186119ef75";
    }
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500000);
    const [interestRate, setInterestRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12.5);
    const [loanTenure, setLoanTenure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    const emi = Math.round(P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
    let t0;
    if ($[1] !== emi || $[2] !== totalAmount || $[3] !== totalInterest) {
        t0 = {
            emi,
            totalInterest,
            totalAmount
        };
        $[1] = emi;
        $[2] = totalAmount;
        $[3] = totalInterest;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const stats = t0;
    let t1;
    if ($[5] !== loanAmount) {
        t1 = {
            name: "Principal",
            value: loanAmount
        };
        $[5] = loanAmount;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== stats.totalInterest) {
        t2 = {
            name: "Interest",
            value: stats.totalInterest
        };
        $[7] = stats.totalInterest;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== t1 || $[10] !== t2) {
        t3 = [
            t1,
            t2
        ];
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const chartData = t3;
    let t4;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            "#f8fafc",
            "#5367ff"
        ];
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const COLORS = t4;
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-black text-slate-800 border-l-4 border-indigo-600 pl-4 uppercase tracking-tighter",
            children: "Personal Loan Calculator"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Loan amount"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== loanAmount) {
        t7 = loanAmount.toLocaleString();
        $[15] = loanAmount;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center text-sm font-bold text-slate-500 uppercase",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-50 px-4 py-1.5 rounded-lg text-indigo-600 font-black italic border border-indigo-100",
                    children: [
                        "₹ ",
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 102,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "PersonalLoanCalculator[<input>.onChange]": (e)=>setLoanAmount(Number(e.target.value))
        })["PersonalLoanCalculator[<input>.onChange]"];
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== loanAmount) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: "10000",
            max: "2500000",
            step: "10000",
            value: loanAmount,
            onChange: t9,
            className: "w-full h-1.5 bg-gray-100 rounded-lg appearance-none accent-indigo-600"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[20] = loanAmount;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t8;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Interest rate (p.a)"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== interestRate) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center text-sm font-bold text-slate-500 uppercase",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-50 px-4 py-1.5 rounded-lg text-indigo-600 font-black border border-indigo-100",
                    children: [
                        interestRate,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 143,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[26] = interestRate;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "PersonalLoanCalculator[<input>.onChange]": (e_0)=>setInterestRate(Number(e_0.target.value))
        })["PersonalLoanCalculator[<input>.onChange]"];
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== interestRate) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: "10",
            max: "25",
            step: "0.1",
            value: interestRate,
            onChange: t14,
            className: "w-full h-1.5 bg-gray-100 rounded-lg appearance-none accent-indigo-600"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[29] = interestRate;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t13 || $[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[31] = t13;
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Loan tenure (Years)"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== loanTenure) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center text-sm font-bold text-slate-500 uppercase",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-50 px-4 py-1.5 rounded-lg text-indigo-600 font-black border border-indigo-100",
                    children: [
                        loanTenure,
                        " Yr"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 184,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[35] = loanTenure;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "PersonalLoanCalculator[<input>.onChange]": (e_1)=>setLoanTenure(Number(e_1.target.value))
        })["PersonalLoanCalculator[<input>.onChange]"];
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== loanTenure) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: "1",
            max: "5",
            step: "1",
            value: loanTenure,
            onChange: t19,
            className: "w-full h-1.5 bg-gray-100 rounded-lg appearance-none accent-indigo-600"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[38] = loanTenure;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== t18 || $[41] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[40] = t18;
        $[41] = t20;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== t11 || $[44] !== t16 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t11,
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[43] = t11;
        $[44] = t16;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 font-bold uppercase tracking-tighter",
            children: "Monthly EMI"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== stats.emi) {
        t24 = stats.emi.toLocaleString();
        $[48] = stats.emi;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-black text-slate-800 text-lg italic",
                    children: [
                        "₹",
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 243,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[50] = t24;
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 font-bold uppercase tracking-tighter",
            children: "Total interest"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[52] = t26;
    } else {
        t26 = $[52];
    }
    let t27;
    if ($[53] !== stats.totalInterest) {
        t27 = stats.totalInterest.toLocaleString();
        $[53] = stats.totalInterest;
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-black text-slate-800",
                    children: [
                        "₹",
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 266,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[55] = t27;
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    let t29;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-900",
            children: "Total amount"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    let t30;
    if ($[58] !== stats.totalAmount) {
        t30 = stats.totalAmount.toLocaleString();
        $[58] = stats.totalAmount;
        $[59] = t30;
    } else {
        t30 = $[59];
    }
    let t31;
    if ($[60] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-lg font-black pt-2 border-t border-dashed",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-indigo-600",
                    children: [
                        "₹",
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 289,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[60] = t30;
        $[61] = t31;
    } else {
        t31 = $[61];
    }
    let t32;
    if ($[62] !== t25 || $[63] !== t28 || $[64] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-8 border-t border-slate-50 space-y-4",
            children: [
                t25,
                t28,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[62] = t25;
        $[63] = t28;
        $[64] = t31;
        $[65] = t32;
    } else {
        t32 = $[65];
    }
    let t33;
    if ($[66] !== t22 || $[67] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-10",
            children: [
                t5,
                t22,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[66] = t22;
        $[67] = t32;
        $[68] = t33;
    } else {
        t33 = $[68];
    }
    let t34;
    if ($[69] !== chartData) {
        t34 = chartData.map({
            "PersonalLoanCalculator[chartData.map()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                    fill: COLORS[i],
                    stroke: "none"
                }, i, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 317,
                    columnNumber: 60
                }, this)
        }["PersonalLoanCalculator[chartData.map()]"]);
        $[69] = chartData;
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    let t35;
    if ($[71] !== chartData || $[72] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-72 h-72",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                        data: chartData,
                        innerRadius: 85,
                        outerRadius: 115,
                        dataKey: "value",
                        startAngle: 90,
                        endAngle: 450,
                        children: t34
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 326,
                        columnNumber: 96
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 326,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 326,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[71] = chartData;
        $[72] = t34;
        $[73] = t35;
    } else {
        t35 = $[73];
    }
    let t36;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-[10px] font-black uppercase text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-3 h-1.5 bg-slate-100 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 335,
                    columnNumber: 99
                }, this),
                "Principal"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[74] = t36;
    } else {
        t36 = $[74];
    }
    let t37;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-8 mt-8",
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-[10px] font-black uppercase text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-1.5 bg-indigo-600 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 342,
                            columnNumber: 137
                        }, this),
                        "Interest"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 342,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[75] = t37;
    } else {
        t37 = $[75];
    }
    let t38;
    if ($[76] !== t35) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-slate-50/30 rounded-3xl p-8",
            children: [
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[76] = t35;
        $[77] = t38;
    } else {
        t38 = $[77];
    }
    let t39;
    if ($[78] !== t33 || $[79] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto p-10 bg-white border border-gray-100 rounded-[32px] shadow-sm flex flex-col lg:flex-row gap-12 font-sans mt-10",
            children: [
                t33,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[78] = t33;
        $[79] = t38;
        $[80] = t39;
    } else {
        t39 = $[80];
    }
    return t39;
}
_s(PersonalLoanCalculator, "mLV2uzS4U2guFsIruO2o1tUFwQs=");
_c = PersonalLoanCalculator;
var _c;
__turbopack_context__.k.register(_c, "PersonalLoanCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_calculators_page_478e5cb9.js.map