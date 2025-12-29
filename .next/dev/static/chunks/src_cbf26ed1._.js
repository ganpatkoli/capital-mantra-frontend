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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const RetirementCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "4d2e4dda63efb7eaa96749b31721af8a0956a10617036ddaf7525f3882a65898") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d2e4dda63efb7eaa96749b31721af8a0956a10617036ddaf7525f3882a65898";
    }
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sip");
    const [currentAge, setCurrentAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(27);
    const [retirementAge, setRetirementAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    const [lifeExpectancy, setLifeExpectancy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    const [monthlyExpense, setMonthlyExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15000);
    const [existingSavings, setExistingSavings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inflationRate, setInflationRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const [preRetReturn, setPreRetReturn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [postRetReturn, setPostRetReturn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    let t0;
    bb0: {
        const CA = Number(currentAge);
        const RA = Number(retirementAge);
        const LE = Number(lifeExpectancy);
        const ME = Number(monthlyExpense);
        const ES = Number(existingSavings);
        const i = inflationRate / 100;
        const rPre = preRetReturn / 100;
        const rPost = postRetReturn / 100;
        const yrsToRetire = RA - CA;
        const yrsInRetirement = LE - RA;
        if (yrsToRetire <= 0 || yrsInRetirement <= 0 || ME <= 0 || rPost <= i || rPre <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    yearsToRetire: 0,
                    yearsInRetirement: 0,
                    annualExpenseAtRetirement: 0,
                    requiredCorpus: 0,
                    monthlySavingRequired: 0,
                    lumpsumRequiredToday: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const futureMonthlyExpense = ME * Math.pow(1 + i, yrsToRetire);
        const annualExpense = futureMonthlyExpense * 12;
        const corpus = annualExpense * (1 - Math.pow((1 + i) / (1 + rPost), yrsInRetirement)) / (rPost - i);
        const existingAtRetirement = ES * Math.pow(1 + rPre, yrsToRetire);
        const netCorpusNeeded = Math.max(0, corpus - existingAtRetirement);
        const monthlyRate = rPre / 12;
        const months = yrsToRetire * 12;
        const sip = netCorpusNeeded * (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));
        const lumpsumToday = netCorpusNeeded / Math.pow(1 + rPre, yrsToRetire);
        let t1;
        if ($[2] !== annualExpense) {
            t1 = Math.round(annualExpense);
            $[2] = annualExpense;
            $[3] = t1;
        } else {
            t1 = $[3];
        }
        let t2;
        if ($[4] !== corpus) {
            t2 = Math.round(corpus);
            $[4] = corpus;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        let t3;
        if ($[6] !== sip) {
            t3 = Math.round(sip);
            $[6] = sip;
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        let t4;
        if ($[8] !== lumpsumToday) {
            t4 = Math.round(lumpsumToday);
            $[8] = lumpsumToday;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        let t5;
        if ($[10] !== t1 || $[11] !== t2 || $[12] !== t3 || $[13] !== t4 || $[14] !== yrsInRetirement || $[15] !== yrsToRetire) {
            t5 = {
                yearsToRetire: yrsToRetire,
                yearsInRetirement: yrsInRetirement,
                annualExpenseAtRetirement: t1,
                requiredCorpus: t2,
                monthlySavingRequired: t3,
                lumpsumRequiredToday: t4
            };
            $[10] = t1;
            $[11] = t2;
            $[12] = t3;
            $[13] = t4;
            $[14] = yrsInRetirement;
            $[15] = yrsToRetire;
            $[16] = t5;
        } else {
            t5 = $[16];
        }
        t0 = t5;
    }
    const { yearsToRetire, yearsInRetirement, annualExpenseAtRetirement, requiredCorpus, monthlySavingRequired, lumpsumRequiredToday } = t0;
    let t1;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-white",
            children: "Retirement Planning Calculator"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 127,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t1;
    } else {
        t1 = $[17];
    }
    let t2;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>setMode("sip");
        $[18] = t2;
    } else {
        t2 = $[18];
    }
    const t3 = `px-4 py-2 text-sm font-semibold ${mode === "sip" ? "bg-indigo-600 text-white" : "bg-transparent text-slate-600 dark:text-slate-300"}`;
    let t4;
    if ($[19] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t2,
            className: t3,
            children: "SIP"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 142,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t3;
        $[20] = t4;
    } else {
        t4 = $[20];
    }
    let t5;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>setMode("lumpsum");
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    const t6 = `px-4 py-2 text-sm font-semibold ${mode === "lumpsum" ? "bg-indigo-600 text-white" : "bg-transparent text-slate-600 dark:text-slate-300"}`;
    let t7;
    if ($[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: t6,
            children: "Lumpsum"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 158,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== t4 || $[25] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border rounded-lg overflow-hidden",
                    children: [
                        t4,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 166,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 166,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t4;
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== currentAge) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Current Age",
            value: currentAge,
            setter: setCurrentAge,
            min: 18,
            max: 70,
            unit: "Yrs"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 175,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = currentAge;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] !== retirementAge) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Retirement Age",
            value: retirementAge,
            setter: setRetirementAge,
            min: 40,
            max: 80,
            unit: "Yrs"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = retirementAge;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] !== lifeExpectancy) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Life Expectancy",
            value: lifeExpectancy,
            setter: setLifeExpectancy,
            min: 60,
            max: 100,
            unit: "Yrs"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = lifeExpectancy;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== monthlyExpense) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Current Monthly Expense",
            value: monthlyExpense,
            setter: setMonthlyExpense,
            min: 5000,
            max: 300000,
            step: 1000,
            unit: "\u20B9"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = monthlyExpense;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== existingSavings) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Existing Retirement Savings",
            value: existingSavings,
            setter: setExistingSavings,
            min: 0,
            max: 50000000,
            step: 50000,
            unit: "\u20B9"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = existingSavings;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== inflationRate) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Expected Inflation Rate",
            value: inflationRate,
            setter: setInflationRate,
            min: 3,
            max: 15,
            step: 0.5,
            unit: "%"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = inflationRate;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== preRetReturn) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Return (Before Retirement)",
            value: preRetReturn,
            setter: setPreRetReturn,
            min: 5,
            max: 20,
            step: 0.5,
            unit: "%"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 223,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = preRetReturn;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== postRetReturn) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGroup, {
            label: "Return (After Retirement)",
            value: postRetReturn,
            setter: setPostRetReturn,
            min: 3,
            max: 12,
            step: 0.5,
            unit: "%"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = postRetReturn;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== t10 || $[44] !== t11 || $[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t15 || $[49] !== t16 || $[50] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t9,
                t10,
                t11,
                t12,
                t13,
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t10;
        $[44] = t11;
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t15;
        $[49] = t16;
        $[50] = t9;
        $[51] = t17;
    } else {
        t17 = $[51];
    }
    let t18;
    if ($[52] !== yearsToRetire) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Years until Retirement: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: yearsToRetire
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 254,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = yearsToRetire;
        $[53] = t18;
    } else {
        t18 = $[53];
    }
    let t19;
    if ($[54] !== yearsInRetirement) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Years in Retirement: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: yearsInRetirement
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 262,
                    columnNumber: 35
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = yearsInRetirement;
        $[55] = t19;
    } else {
        t19 = $[55];
    }
    let t20;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 270,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t20;
    } else {
        t20 = $[56];
    }
    let t21;
    if ($[57] !== annualExpenseAtRetirement) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(annualExpenseAtRetirement);
        $[57] = annualExpenseAtRetirement;
        $[58] = t21;
    } else {
        t21 = $[58];
    }
    let t22;
    if ($[59] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-indigo-600 dark:text-indigo-400 font-semibold",
            children: [
                "Annual Income Required After Retirement:",
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 285,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t21;
        $[60] = t22;
    } else {
        t22 = $[60];
    }
    let t23;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm",
            children: "Required Retirement Corpus"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t23;
    } else {
        t23 = $[61];
    }
    let t24;
    if ($[62] !== requiredCorpus) {
        t24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(requiredCorpus);
        $[62] = requiredCorpus;
        $[63] = t24;
    } else {
        t24 = $[63];
    }
    let t25;
    if ($[64] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 border-t",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-indigo-700 dark:text-indigo-300",
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 308,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 308,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t24;
        $[65] = t25;
    } else {
        t25 = $[65];
    }
    let t26;
    if ($[66] !== lumpsumRequiredToday || $[67] !== mode || $[68] !== monthlySavingRequired) {
        t26 = mode === "sip" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 border-t",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Monthly SIP Required"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 316,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-indigo-700 dark:text-indigo-300",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(monthlySavingRequired)
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 316,
                    columnNumber: 106
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 316,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 border-t",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "One-time Lumpsum Required Today"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 316,
                    columnNumber: 257
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-indigo-700 dark:text-indigo-300",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(lumpsumRequiredToday)
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 316,
                    columnNumber: 315
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 316,
            columnNumber: 226
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = lumpsumRequiredToday;
        $[67] = mode;
        $[68] = monthlySavingRequired;
        $[69] = t26;
    } else {
        t26 = $[69];
    }
    let t27;
    if ($[70] !== t18 || $[71] !== t19 || $[72] !== t22 || $[73] !== t25 || $[74] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6",
            children: [
                t18,
                t19,
                t22,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 326,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t18;
        $[71] = t19;
        $[72] = t22;
        $[73] = t25;
        $[74] = t26;
        $[75] = t27;
    } else {
        t27 = $[75];
    }
    let t28;
    if ($[76] !== t17 || $[77] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-2 gap-10",
            children: [
                t17,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t17;
        $[77] = t27;
        $[78] = t28;
    } else {
        t28 = $[78];
    }
    let t29;
    if ($[79] !== t28 || $[80] !== t8) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-10",
            children: [
                t8,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 347,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t28;
        $[80] = t8;
        $[81] = t29;
    } else {
        t29 = $[81];
    }
    return t29;
};
_s(RetirementCalculator, "pavuN+xg6/MqSvSqk3byWxN/DXY=");
_c = RetirementCalculator;
const __TURBOPACK__default__export__ = RetirementCalculator;
var _c;
__turbopack_context__.k.register(_c, "RetirementCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cbf26ed1._.js.map