(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../CalculatorUtils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const InvestmentCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "0a450f62a4bbccd009b54b7750083b08ccdd5fbdb4a071018a3bea1d5cf10ae4") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a450f62a4bbccd009b54b7750083b08ccdd5fbdb4a071018a3bea1d5cf10ae4";
    }
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sip");
    const [monthlyInvestment, setMonthlyInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [lumpsumAmount, setLumpsumAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("10000");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("12");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("10");
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (R <= 0 || Y <= 0) {
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
        const annualRate = R / 100;
        if (mode === "sip") {
            const P = Number(monthlyInvestment);
            if (P <= 0) {
                let t1;
                if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
                    t1 = {
                        totalInvested: 0,
                        totalEarnings: 0,
                        calculatedFV: 0
                    };
                    $[2] = t1;
                } else {
                    t1 = $[2];
                }
                t0 = t1;
                break bb0;
            }
            const monthlyRate = Math.pow(1 + annualRate, 0.08333333333333333) - 1;
            const months = Y * 12;
            let balance = 0;
            for(let i = 0; i < months; i++){
                balance = balance + P;
                balance = balance * (1 + monthlyRate);
            }
            const invested = P * months;
            const fv = Math.floor(balance);
            const t1 = fv - invested;
            let t2;
            if ($[3] !== fv || $[4] !== invested || $[5] !== t1) {
                t2 = {
                    totalInvested: invested,
                    totalEarnings: t1,
                    calculatedFV: fv
                };
                $[3] = fv;
                $[4] = invested;
                $[5] = t1;
                $[6] = t2;
            } else {
                t2 = $[6];
            }
            t0 = t2;
            break bb0;
        }
        const L = Number(lumpsumAmount);
        const fv_0 = Math.floor(L * Math.pow(1 + annualRate, Y));
        const t1 = fv_0 - L;
        let t2;
        if ($[7] !== L || $[8] !== fv_0 || $[9] !== t1) {
            t2 = {
                totalInvested: L,
                totalEarnings: t1,
                calculatedFV: fv_0
            };
            $[7] = L;
            $[8] = fv_0;
            $[9] = t1;
            $[10] = t2;
        } else {
            t2 = $[10];
        }
        t0 = t2;
    }
    const { totalInvested, totalEarnings, calculatedFV } = t0;
    let t1;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 111,
                    columnNumber: 124
                }, ("TURBOPACK compile-time value", void 0)),
                " Investment Tool"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 111,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t1;
    } else {
        t1 = $[11];
    }
    const t2 = mode === "sip" ? "SIP Calculator" : "Lumpsum Calculator";
    let t3;
    if ($[12] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl md:text-3xl font-black uppercase",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 119,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>setMode("sip");
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    const t5 = `px-5 py-3 text-xs font-black uppercase tracking-widest transition ${mode === "sip" ? "bg-emerald-500 text-black" : "text-slate-300 hover:bg-white/10"}`;
    let t6;
    if ($[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: t5,
            children: "SIP"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 135,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ()=>setMode("lumpsum");
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const t8 = `px-5 py-3 text-xs font-black uppercase tracking-widest transition ${mode === "lumpsum" ? "bg-emerald-500 text-black" : "text-slate-300 hover:bg-white/10"}`;
    let t9;
    if ($[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            className: t8,
            children: "Lumpsum"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 151,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t6 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex rounded-xl overflow-hidden border border-white/10",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 159,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t6;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-slate-900 rounded-xl p-8 text-white shadow-2xl relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center gap-6",
                children: [
                    t3,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 168,
                columnNumber: 106
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t10;
        $[24] = t3;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== lumpsumAmount || $[27] !== mode || $[28] !== monthlyInvestment) {
        t12 = mode === "sip" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Monthly Investment",
            value: monthlyInvestment,
            setter: setMonthlyInvestment,
            min: 100,
            max: 1000000,
            step: 100,
            unit: "\u20B9",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 177,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Lumpsum Investment",
            value: lumpsumAmount,
            setter: setLumpsumAmount,
            min: 1000,
            max: 10000000,
            step: 1000,
            unit: "\u20B9",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 177,
            columnNumber: 210
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = lumpsumAmount;
        $[27] = mode;
        $[28] = monthlyInvestment;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== rate) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Expected Annual Return",
            value: rate,
            setter: setRate,
            min: 1,
            max: 30,
            step: 0.1,
            unit: "%",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 187,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = rate;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== years) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Time Period",
            value: years,
            setter: setYears,
            min: 1,
            max: 50,
            unit: "Yrs",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = years;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t12 || $[35] !== t13 || $[36] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-8",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t12;
        $[35] = t13;
        $[36] = t14;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== totalEarnings || $[39] !== totalInvested) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoughnutChart, {
                invested: totalInvested,
                returns: totalEarnings,
                investedColor: "#10b981",
                returnsColor: "#3b82f6"
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 213,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 213,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = totalEarnings;
        $[39] = totalInvested;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] !== t15 || $[42] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 222,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t15;
        $[42] = t16;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black uppercase tracking-widest text-slate-400",
            children: "Invested"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== totalInvested) {
        t19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested);
        $[45] = totalInvested;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-black",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 246,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 246,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t19;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black uppercase tracking-widest text-slate-400",
            children: "Returns"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== totalEarnings) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalEarnings);
        $[50] = totalEarnings;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-black text-blue-600 dark:text-blue-400",
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 269,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 269,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t22;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black uppercase tracking-widest text-slate-400",
            children: "Total Value"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 277,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== calculatedFV) {
        t25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV);
        $[55] = calculatedFV;
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:text-right",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-black text-emerald-600 dark:text-emerald-400",
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 292,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t25;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    let t27;
    if ($[59] !== t20 || $[60] !== t23 || $[61] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [
                t20,
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t20;
        $[60] = t23;
        $[61] = t26;
        $[62] = t27;
    } else {
        t27 = $[62];
    }
    let t28;
    if ($[63] !== t17 || $[64] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl p-8",
            children: [
                t17,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t17;
        $[64] = t27;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    let t29;
    if ($[66] !== t11 || $[67] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-6",
            children: [
                t11,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 319,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t11;
        $[67] = t28;
        $[68] = t29;
    } else {
        t29 = $[68];
    }
    return t29;
};
_s(InvestmentCalculator, "oXwd46EQlHli4Y0GgdmczwuVbyI=");
_c = InvestmentCalculator;
const __TURBOPACK__default__export__ = InvestmentCalculator;
var _c;
__turbopack_context__.k.register(_c, "InvestmentCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ChartLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "m19 9-5 5-4-4-3 3",
            key: "2osh9i"
        }
    ]
];
const ChartLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chart-line", __iconNode);
;
 //# sourceMappingURL=chart-line.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_f5bc7881._.js.map