(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NPVCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NPVCalculator() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "dbbed0224facfb364ed06164b3a78900670a22bf60243ed32969f9e7b828b339") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dbbed0224facfb364ed06164b3a78900670a22bf60243ed32969f9e7b828b339";
    }
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100000);
    const [discountRate, setDiscountRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            20000,
            30000,
            40000,
            50000,
            60000
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [cashFlows, setCashFlows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [npv, setNpv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[2] !== cashFlows || $[3] !== discountRate || $[4] !== initialInvestment) {
        t1 = ({
            "NPVCalculator[useEffect()]": ()=>{
                let totalNPV = -initialInvestment;
                const r = discountRate / 100;
                cashFlows.forEach({
                    "NPVCalculator[useEffect() > cashFlows.forEach()]": (cf, index)=>{
                        totalNPV = totalNPV + cf / Math.pow(1 + r, index + 1);
                        totalNPV;
                    }
                }["NPVCalculator[useEffect() > cashFlows.forEach()]"]);
                setNpv(Math.round(totalNPV));
            }
        })["NPVCalculator[useEffect()]"];
        t2 = [
            initialInvestment,
            discountRate,
            cashFlows
        ];
        $[2] = cashFlows;
        $[3] = discountRate;
        $[4] = initialInvestment;
        $[5] = t1;
        $[6] = t2;
    } else {
        t1 = $[5];
        t2 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[7] !== cashFlows) {
        t3 = ({
            "NPVCalculator[addCashFlow]": ()=>setCashFlows([
                    ...cashFlows,
                    0
                ])
        })["NPVCalculator[addCashFlow]"];
        $[7] = cashFlows;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const addCashFlow = t3;
    let t4;
    if ($[9] !== cashFlows) {
        t4 = ({
            "NPVCalculator[updateCashFlow]": (index_0, value)=>{
                const newFlows = [
                    ...cashFlows
                ];
                newFlows[index_0] = Number(value);
                setCashFlows(newFlows);
            }
        })["NPVCalculator[updateCashFlow]"];
        $[9] = cashFlows;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const updateCashFlow = t4;
    let t5;
    if ($[11] !== cashFlows) {
        t5 = ({
            "NPVCalculator[removeCashFlow]": (index_1)=>{
                setCashFlows(cashFlows.filter({
                    "NPVCalculator[removeCashFlow > cashFlows.filter()]": (_, i)=>i !== index_1
                }["NPVCalculator[removeCashFlow > cashFlows.filter()]"]));
            }
        })["NPVCalculator[removeCashFlow]"];
        $[11] = cashFlows;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const removeCashFlow = t5;
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#0052cc] p-6 text-white text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold tracking-tight",
                    children: "NPV Calculator"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 95,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-100 text-sm opacity-90",
                    children: "Net Present Value of your Investments"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 95,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-bold text-gray-600 block uppercase",
            children: "Initial Investment (Year 0)"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 font-bold mr-2",
            children: "₹"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "NPVCalculator[<input>.onChange]": (e)=>setInitialInvestment(Number(e.target.value))
        })["NPVCalculator[<input>.onChange]"];
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== initialInvestment) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-xl space-y-4",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center bg-white border border-gray-200 rounded-lg p-3 shadow-sm",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            value: initialInvestment,
                            onChange: t9,
                            className: "w-full font-bold text-blue-700 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 125,
                            columnNumber: 164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 125,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[17] = initialInvestment;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-bold text-gray-600 block uppercase",
            children: "Discount Rate (%)"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "NPVCalculator[<input>.onChange]": (e_0)=>setDiscountRate(Number(e_0.target.value))
        })["NPVCalculator[<input>.onChange]"];
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== discountRate) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-xl space-y-4",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: "1",
                    max: "50",
                    step: "0.5",
                    value: discountRate,
                    onChange: t12,
                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 149,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-right font-bold text-blue-700",
                    children: [
                        discountRate,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 149,
                    columnNumber: 248
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[21] = discountRate;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-bold text-gray-600 uppercase",
            children: "Annual Cash Flows"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const t16 = cashFlows.length + 1;
    let t17;
    if ($[25] !== addCashFlow || $[26] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center px-1",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: addCashFlow,
                    className: "flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1.5 rounded-full font-bold hover:bg-green-600 transition-all",
                    children: [
                        t15,
                        " Year ",
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 172,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[25] = addCashFlow;
        $[26] = t16;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== cashFlows || $[29] !== removeCashFlow || $[30] !== updateCashFlow) {
        let t19;
        if ($[32] !== removeCashFlow || $[33] !== updateCashFlow) {
            t19 = ({
                "NPVCalculator[cashFlows.map()]": (cf_0, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-400 w-16",
                                children: [
                                    "Year ",
                                    idx + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 184,
                                columnNumber: 109
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center bg-white border border-gray-200 rounded-lg p-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm mr-2",
                                        children: "₹"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 184,
                                        columnNumber: 276
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: cf_0,
                                        onChange: {
                                            "NPVCalculator[cashFlows.map() > <input>.onChange]": (e_1)=>updateCashFlow(idx, e_1.target.value)
                                        }["NPVCalculator[cashFlows.map() > <input>.onChange]"],
                                        className: "w-full font-semibold text-gray-700 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calculators/page.js",
                                        lineNumber: 184,
                                        columnNumber: 329
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 184,
                                columnNumber: 185
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "NPVCalculator[cashFlows.map() > <button>.onClick]": ()=>removeCashFlow(idx)
                                }["NPVCalculator[cashFlows.map() > <button>.onClick]"],
                                className: "text-red-400 hover:text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 188,
                                    columnNumber: 111
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/calculators/page.js",
                                lineNumber: 186,
                                columnNumber: 137
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 184,
                        columnNumber: 58
                    }, this)
            })["NPVCalculator[cashFlows.map()]"];
            $[32] = removeCashFlow;
            $[33] = updateCashFlow;
            $[34] = t19;
        } else {
            t19 = $[34];
        }
        t18 = cashFlows.map(t19);
        $[28] = cashFlows;
        $[29] = removeCashFlow;
        $[30] = updateCashFlow;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-60 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-gray-200",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t17 || $[38] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== t10 || $[41] !== t13 || $[42] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t10,
                t13,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t13;
        $[42] = t20;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    const t22 = `p-10 rounded-full w-72 h-72 border-8 flex flex-col justify-center items-center transition-all ${npv >= 0 ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`;
    let t23;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-xs font-bold uppercase mb-2",
            children: "Net Present Value"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    const t24 = `text-3xl font-black ${npv >= 0 ? "text-green-700" : "text-red-700"}`;
    let t25;
    if ($[45] !== npv) {
        t25 = npv.toLocaleString();
        $[45] = npv;
        $[46] = t25;
    } else {
        t25 = $[46];
    }
    let t26;
    if ($[47] !== t24 || $[48] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t24,
            children: [
                "₹",
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[47] = t24;
        $[48] = t25;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    const t27 = `mt-2 text-[10px] font-bold px-3 py-1 rounded-full text-white ${npv >= 0 ? "bg-green-500" : "bg-red-500"}`;
    const t28 = npv >= 0 ? "PROFITABLE" : "UNPROFITABLE";
    let t29;
    if ($[50] !== t27 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t27,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[50] = t27;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== t22 || $[54] !== t26 || $[55] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t22,
            children: [
                t23,
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[53] = t22;
        $[54] = t26;
        $[55] = t29;
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-[#0052cc] font-bold text-sm mb-2 flex items-center gap-2",
            children: "💡 Investment Insight"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    const t32 = npv >= 0 ? "\u092F\u0939 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u0906\u092A\u0915\u0947 \u0921\u093F\u0938\u094D\u0915\u093E\u0909\u0902\u091F \u0930\u0947\u091F \u0938\u0947 \u0905\u0927\u093F\u0915 \u0930\u093F\u091F\u0930\u094D\u0928 \u0926\u0947 \u0930\u0939\u093E \u0939\u0948\u0964 \u0907\u0938\u092E\u0947\u0902 \u0928\u093F\u0935\u0947\u0936 \u0915\u0930\u0928\u093E \u092B\u093E\u092F\u0926\u0947\u092E\u0902\u0926 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948\u0964" : "\u092F\u0939 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u0906\u092A\u0915\u0947 \u0921\u093F\u0938\u094D\u0915\u093E\u0909\u0902\u091F \u0930\u0947\u091F \u0915\u0947 \u092E\u0941\u0915\u093E\u092C\u0932\u0947 \u0918\u093E\u091F\u0947 \u0915\u093E \u0938\u094C\u0926\u093E \u0932\u0917 \u0930\u0939\u093E \u0939\u0948\u0964 \u0915\u0943\u092A\u092F\u093E \u0926\u094B\u092C\u093E\u0930\u093E \u0935\u093F\u091A\u093E\u0930 \u0915\u0930\u0947\u0902\u0964";
    let t33;
    if ($[58] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 w-full space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 p-6 rounded-2xl border border-blue-100",
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm leading-relaxed",
                        children: t32
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 288,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 288,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[58] = t32;
        $[59] = t33;
    } else {
        t33 = $[59];
    }
    let t34;
    if ($[60] !== t30 || $[61] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center",
            children: [
                t30,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[60] = t30;
        $[61] = t33;
        $[62] = t34;
    } else {
        t34 = $[62];
    }
    let t35;
    if ($[63] !== t21 || $[64] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mt-10",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [
                        t21,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 305,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[63] = t21;
        $[64] = t34;
        $[65] = t35;
    } else {
        t35 = $[65];
    }
    return t35;
}
_s(NPVCalculator, "PI7fz5wwgrp7FQRT89phFBcslMA=");
_c = NPVCalculator;
var _c;
__turbopack_context__.k.register(_c, "NPVCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_583eb670._.js.map