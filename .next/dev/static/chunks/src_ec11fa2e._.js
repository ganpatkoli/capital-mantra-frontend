(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/Service/axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
__turbopack_context__.s([
    "apiDelete",
    ()=>apiDelete,
    "apiGet",
    ()=>apiGet,
    "apiPost",
    ()=>apiPost,
    "apiPut",
    ()=>apiPut,
    "baseURL",
    ()=>baseURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseURL = "http://localhost:5000/api";
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});
const apiGet = async (path, params = {})=>{
    const res = await API.get(`/${path}`, {
        params
    });
    return res.data;
};
const apiPost = async (path, body = {}, params = {})=>{
    const res = await API.post(`/${path}`, body, {
        params
    });
    return res.data;
};
const apiPut = async (path, body = {}, params = {})=>{
    const res = await API.put(`/${path}`, body, {
        params
    });
    return res.data;
};
const apiDelete = async (path, params = {})=>{
    const res = await API.delete(`/${path}`, {
        params
    });
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAPI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Service/axios.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAPI(path, params = {}) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // GET
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAPI.useCallback[fetchData]": async ()=>{
            setLoading(true);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(path, params);
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message || "API Error");
            }
            setLoading(false);
        }
    }["useAPI.useCallback[fetchData]"], [
        path,
        JSON.stringify(params)
    ]);
    // POST
    const create = async (body = {}, extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(path, body, extraParams);
    };
    // PUT
    const update = async (body_0 = {}, extraParams_0 = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPut"])(path, body_0, extraParams_0);
    };
    // DELETE
    const remove = async (extraParams_1 = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiDelete"])(path, extraParams_1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAPI.useEffect": ()=>{
            fetchData();
        }
    }["useAPI.useEffect"], [
        fetchData
    ]);
    return {
        data,
        loading,
        error,
        refetch: fetchData,
        create,
        update,
        remove
    };
}
_s(useAPI, "yZpGE5lmr9HR5OiBdmrBaa5atrY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfessionalTDSCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAPI.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProfessionalTDSCalculator() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(148);
    if ($[0] !== "74c662c2a3bc1127c66f636d182de8f3cb2804466494a2faa5eb236b70b32f80") {
        for(let $i = 0; $i < 148; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74c662c2a3bc1127c66f636d182de8f3cb2804466494a2faa5eb236b70b32f80";
    }
    const [residentStatus, setResidentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("resident");
    const [natureOfPayment, setNatureOfPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100000);
    const [panNotAvailable, setPanNotAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("tds-rates");
    let t0;
    let t1;
    if ($[1] !== data || $[2] !== natureOfPayment || $[3] !== residentStatus) {
        t0 = ({
            "ProfessionalTDSCalculator[useEffect()]": ()=>{
                if (data?.data?.length > 0 && !natureOfPayment) {
                    const initial = data.data.find({
                        "ProfessionalTDSCalculator[useEffect() > data.data.find()]": (r)=>r.residential_status === residentStatus
                    }["ProfessionalTDSCalculator[useEffect() > data.data.find()]"]);
                    if (initial) {
                        setNatureOfPayment(initial.section);
                    }
                }
            }
        })["ProfessionalTDSCalculator[useEffect()]"];
        t1 = [
            data,
            residentStatus,
            natureOfPayment
        ];
        $[1] = data;
        $[2] = natureOfPayment;
        $[3] = residentStatus;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ProfessionalTDSCalculator[useEffect()]": ()=>{
                const handleClickOutside = {
                    "ProfessionalTDSCalculator[useEffect() > handleClickOutside]": (event)=>{
                        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                            setIsDropdownOpen(false);
                        }
                    }
                }["ProfessionalTDSCalculator[useEffect() > handleClickOutside]"];
                document.addEventListener("mousedown", handleClickOutside);
                return ()=>document.removeEventListener("mousedown", handleClickOutside);
            }
        })["ProfessionalTDSCalculator[useEffect()]"];
        t3 = [];
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const formatNature = _ProfessionalTDSCalculatorFormatNature;
    let currentSection;
    let payableAmount;
    let rate;
    let t10;
    let t11;
    let t12;
    let t13;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let tdsAmount;
    let threshold;
    if ($[8] !== amount || $[9] !== data?.data || $[10] !== isDropdownOpen || $[11] !== loading || $[12] !== natureOfPayment || $[13] !== panNotAvailable || $[14] !== residentStatus || $[15] !== searchTerm) {
        t13 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const filteredOptions = data?.data?.filter({
                "ProfessionalTDSCalculator[(anonymous)()]": (r_0)=>r_0.residential_status === residentStatus && (r_0.section.toLowerCase().includes(searchTerm.toLowerCase()) || r_0.nature_of_payment.toLowerCase().includes(searchTerm.toLowerCase()))
            }["ProfessionalTDSCalculator[(anonymous)()]"]) || [];
            let t14;
            let t15;
            let t16;
            if ($[31] !== amount || $[32] !== data?.data || $[33] !== isDropdownOpen || $[34] !== loading || $[35] !== natureOfPayment || $[36] !== panNotAvailable || $[37] !== residentStatus) {
                currentSection = data?.data?.find({
                    "ProfessionalTDSCalculator[(anonymous)()]": (r_1)=>r_1.section === natureOfPayment && r_1.residential_status === residentStatus
                }["ProfessionalTDSCalculator[(anonymous)()]"]) || {
                    section: natureOfPayment,
                    deduction_rate: 10,
                    threshold: "0",
                    pan_inoperative_applicable_rate: 20
                };
                threshold = Number(currentSection.threshold);
                rate = panNotAvailable ? currentSection.pan_inoperative_applicable_rate || 20 : currentSection.deduction_rate;
                tdsAmount = amount > threshold ? amount * rate / 100 : 0;
                payableAmount = amount - tdsAmount;
                if (loading) {
                    let t17;
                    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
                        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-20 text-center font-bold text-blue-600 animate-pulse",
                            children: "Fetching latest TDS rates..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 116,
                            columnNumber: 19
                        }, this);
                        $[53] = t17;
                    } else {
                        t17 = $[53];
                    }
                    t13 = t17;
                    break bb0;
                }
                t12 = "max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden mt-10";
                t9 = "flex-1 p-10 space-y-8 border-r border-gray-50";
                if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
                    t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-slate-800",
                        children: "TDS Details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this);
                    $[54] = t10;
                } else {
                    t10 = $[54];
                }
                let t17;
                if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
                    t17 = [
                        "resident",
                        "non_resident"
                    ];
                    $[55] = t17;
                } else {
                    t17 = $[55];
                }
                if ($[56] !== residentStatus) {
                    t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 bg-slate-100 p-1 rounded-xl w-fit",
                        children: t17.map({
                            "ProfessionalTDSCalculator[(anonymous)()]": (status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "ProfessionalTDSCalculator[(anonymous)() > <button>.onClick]": ()=>{
                                            setResidentStatus(status);
                                            setNatureOfPayment("");
                                        }
                                    }["ProfessionalTDSCalculator[(anonymous)() > <button>.onClick]"],
                                    className: `px-8 py-2 text-xs font-black uppercase rounded-lg transition-all ${residentStatus === status ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"}`,
                                    children: status
                                }, status, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 141,
                                    columnNumber: 69
                                }, this)
                        }["ProfessionalTDSCalculator[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this);
                    $[56] = residentStatus;
                    $[57] = t11;
                } else {
                    t11 = $[57];
                }
                t4 = "space-y-2 relative";
                t5 = dropdownRef;
                if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
                    t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[10px] font-black text-gray-400 uppercase tracking-widest",
                        children: "Nature of payment"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 156,
                        columnNumber: 16
                    }, this);
                    $[58] = t6;
                } else {
                    t6 = $[58];
                }
                if ($[59] !== isDropdownOpen) {
                    t15 = ({
                        "ProfessionalTDSCalculator[<div>.onClick]": ()=>setIsDropdownOpen(!isDropdownOpen)
                    })["ProfessionalTDSCalculator[<div>.onClick]"];
                    $[59] = isDropdownOpen;
                    $[60] = t15;
                } else {
                    t15 = $[60];
                }
                t16 = "w-full p-4 rounded-xl border-2 border-slate-50 bg-slate-50/50 font-bold text-slate-700 cursor-pointer flex justify-between items-center";
                t14 = natureOfPayment ? `Section ${natureOfPayment} - ${formatNature(currentSection.nature_of_payment)}` : "Select Payment Type";
                $[31] = amount;
                $[32] = data?.data;
                $[33] = isDropdownOpen;
                $[34] = loading;
                $[35] = natureOfPayment;
                $[36] = panNotAvailable;
                $[37] = residentStatus;
                $[38] = currentSection;
                $[39] = payableAmount;
                $[40] = rate;
                $[41] = t10;
                $[42] = t11;
                $[43] = t12;
                $[44] = t14;
                $[45] = t15;
                $[46] = t16;
                $[47] = t4;
                $[48] = t5;
                $[49] = t6;
                $[50] = t9;
                $[51] = tdsAmount;
                $[52] = threshold;
            } else {
                currentSection = $[38];
                payableAmount = $[39];
                rate = $[40];
                t10 = $[41];
                t11 = $[42];
                t12 = $[43];
                t14 = $[44];
                t15 = $[45];
                t16 = $[46];
                t4 = $[47];
                t5 = $[48];
                t6 = $[49];
                t9 = $[50];
                tdsAmount = $[51];
                threshold = $[52];
            }
            let t17;
            if ($[61] !== t14) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 213,
                    columnNumber: 15
                }, this);
                $[61] = t14;
                $[62] = t17;
            } else {
                t17 = $[62];
            }
            const t18 = `w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`;
            let t19;
            if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M19 9l-7 7-7-7"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 222,
                    columnNumber: 15
                }, this);
                $[63] = t19;
            } else {
                t19 = $[63];
            }
            let t20;
            if ($[64] !== t18) {
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: t18,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 229,
                    columnNumber: 15
                }, this);
                $[64] = t18;
                $[65] = t20;
            } else {
                t20 = $[65];
            }
            if ($[66] !== t15 || $[67] !== t16 || $[68] !== t17 || $[69] !== t20) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: t15,
                    className: t16,
                    children: [
                        t17,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 236,
                    columnNumber: 14
                }, this);
                $[66] = t15;
                $[67] = t16;
                $[68] = t17;
                $[69] = t20;
                $[70] = t7;
            } else {
                t7 = $[70];
            }
            t8 = isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-2 bg-white text-dark border border-gray-100 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-b bg-slate-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            type: "text",
                            placeholder: "Search section or nature... (e.g. 194J)",
                            className: "w-full p-2 text-black rounded-lg border border-gray-200 outline-none focus:border-blue-600 text-sm",
                            value: searchTerm,
                            onChange: {
                                "ProfessionalTDSCalculator[<input>.onChange]": (e)=>setSearchTerm(e.target.value)
                            }["ProfessionalTDSCalculator[<input>.onChange]"],
                            onClick: _ProfessionalTDSCalculatorInputOnClick
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 245,
                            columnNumber: 234
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 245,
                        columnNumber: 192
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-60 overflow-y-auto",
                        children: filteredOptions.length > 0 ? filteredOptions.map({
                            "ProfessionalTDSCalculator[filteredOptions.map()]": (r_2, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: {
                                        "ProfessionalTDSCalculator[filteredOptions.map() > <div>.onClick]": ()=>{
                                            setNatureOfPayment(r_2.section);
                                            setIsDropdownOpen(false);
                                            setSearchTerm("");
                                        }
                                    }["ProfessionalTDSCalculator[filteredOptions.map() > <div>.onClick]"],
                                    className: "p-4 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-none transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-slate-700",
                                            children: [
                                                "Section ",
                                                r_2.section
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 254,
                                            columnNumber: 191
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: formatNature(r_2.nature_of_payment)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 254,
                                            columnNumber: 264
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 248,
                                    columnNumber: 77
                                }, this)
                        }["ProfessionalTDSCalculator[filteredOptions.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 text-center text-gray-400 text-sm",
                            children: "No results found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 255,
                            columnNumber: 68
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 247,
                        columnNumber: 118
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 245,
                columnNumber: 30
            }, this);
        }
        $[8] = amount;
        $[9] = data?.data;
        $[10] = isDropdownOpen;
        $[11] = loading;
        $[12] = natureOfPayment;
        $[13] = panNotAvailable;
        $[14] = residentStatus;
        $[15] = searchTerm;
        $[16] = currentSection;
        $[17] = payableAmount;
        $[18] = rate;
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
        $[22] = t13;
        $[23] = t4;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
        $[27] = t8;
        $[28] = t9;
        $[29] = tdsAmount;
        $[30] = threshold;
    } else {
        currentSection = $[16];
        payableAmount = $[17];
        rate = $[18];
        t10 = $[19];
        t11 = $[20];
        t12 = $[21];
        t13 = $[22];
        t4 = $[23];
        t5 = $[24];
        t6 = $[25];
        t7 = $[26];
        t8 = $[27];
        t9 = $[28];
        tdsAmount = $[29];
        threshold = $[30];
    }
    if (t13 !== Symbol.for("react.early_return_sentinel")) {
        return t13;
    }
    let t14;
    if ($[71] !== t4 || $[72] !== t5 || $[73] !== t6 || $[74] !== t7 || $[75] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            ref: t5,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[71] = t4;
        $[72] = t5;
        $[73] = t6;
        $[74] = t7;
        $[75] = t8;
        $[76] = t14;
    } else {
        t14 = $[76];
    }
    let t15;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-[10px] text-black  uppercase tracking-widest",
            children: "Amount of payment"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[77] = t15;
    } else {
        t15 = $[77];
    }
    let t16;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "ProfessionalTDSCalculator[<input>.onChange]": (e_1)=>setAmount(Number(e_1.target.value))
        })["ProfessionalTDSCalculator[<input>.onChange]"];
        $[78] = t16;
    } else {
        t16 = $[78];
    }
    let t17;
    if ($[79] !== amount) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: amount,
            onChange: t16,
            className: "w-full p-4 text-2xl text-black rounded-xl border-2 border-slate-50 focus:border-blue-600 outline-none"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[79] = amount;
        $[80] = t17;
    } else {
        t17 = $[80];
    }
    let t18;
    if ($[81] !== amount || $[82] !== threshold) {
        t18 = amount <= threshold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-orange-500 text-[10px] font-bold uppercase mt-1",
            children: [
                "Below threshold: ₹",
                threshold.toLocaleString()
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 338,
            columnNumber: 34
        }, this);
        $[81] = amount;
        $[82] = threshold;
        $[83] = t18;
    } else {
        t18 = $[83];
    }
    let t19;
    if ($[84] !== t17 || $[85] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t15,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[84] = t17;
        $[85] = t18;
        $[86] = t19;
    } else {
        t19 = $[86];
    }
    let t20;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ProfessionalTDSCalculator[<input>.onChange]": (e_2)=>setPanNotAvailable(e_2.target.checked)
        })["ProfessionalTDSCalculator[<input>.onChange]"];
        $[87] = t20;
    } else {
        t20 = $[87];
    }
    let t21;
    if ($[88] !== panNotAvailable) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: panNotAvailable,
            onChange: t20,
            className: "w-5 h-5 accent-blue-600 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[88] = panNotAvailable;
        $[89] = t21;
    } else {
        t21 = $[89];
    }
    let t22;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold text-slate-600 group-hover:text-blue-600",
            children: "PAN not available (Apply 20% TDS)"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[90] = t22;
    } else {
        t22 = $[90];
    }
    let t23;
    if ($[91] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-3 cursor-pointer group select-none",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[91] = t21;
        $[92] = t23;
    } else {
        t23 = $[92];
    }
    let t24;
    if ($[93] !== t10 || $[94] !== t11 || $[95] !== t14 || $[96] !== t19 || $[97] !== t23 || $[98] !== t9) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t14,
                t19,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[93] = t10;
        $[94] = t11;
        $[95] = t14;
        $[96] = t19;
        $[97] = t23;
        $[98] = t9;
        $[99] = t24;
    } else {
        t24 = $[99];
    }
    let t25;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2",
            children: "TDS Deducted"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[100] = t25;
    } else {
        t25 = $[100];
    }
    let t26;
    if ($[101] !== tdsAmount) {
        t26 = tdsAmount.toLocaleString();
        $[101] = tdsAmount;
        $[102] = t26;
    } else {
        t26 = $[102];
    }
    let t27;
    if ($[103] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-6xl font-black text-slate-800 tracking-tighter",
            children: [
                "₹",
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[103] = t26;
        $[104] = t27;
    } else {
        t27 = $[104];
    }
    let t28;
    if ($[105] !== rate) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 inline-block px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg uppercase",
            children: [
                "Applied Rate: ",
                rate,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[105] = rate;
        $[106] = t28;
    } else {
        t28 = $[106];
    }
    let t29;
    if ($[107] !== t27 || $[108] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-50",
            children: [
                t25,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[107] = t27;
        $[108] = t28;
        $[109] = t29;
    } else {
        t29 = $[109];
    }
    const t30 = `${amount > 0 ? payableAmount / amount * 100 : 100}%`;
    let t31;
    if ($[110] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-4 w-full bg-blue-100 rounded-full overflow-hidden flex",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-blue-600 transition-all duration-700",
                style: {
                    width: t30
                }
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 442,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[110] = t30;
        $[111] = t31;
    } else {
        t31 = $[111];
    }
    let t32;
    if ($[112] !== payableAmount) {
        t32 = payableAmount.toLocaleString();
        $[112] = payableAmount;
        $[113] = t32;
    } else {
        t32 = $[113];
    }
    let t33;
    if ($[114] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-black text-xl text-slate-800",
            children: [
                "₹",
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[114] = t32;
        $[115] = t33;
    } else {
        t33 = $[115];
    }
    let t34;
    if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
            children: "Net Payable"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[116] = t34;
    } else {
        t34 = $[116];
    }
    let t35;
    if ($[117] !== t33) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[117] = t33;
        $[118] = t35;
    } else {
        t35 = $[118];
    }
    let t36;
    if ($[119] !== tdsAmount) {
        t36 = tdsAmount.toLocaleString();
        $[119] = tdsAmount;
        $[120] = t36;
    } else {
        t36 = $[120];
    }
    let t37;
    if ($[121] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-black text-xl text-slate-800",
            children: [
                "₹",
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[121] = t36;
        $[122] = t37;
    } else {
        t37 = $[122];
    }
    let t38;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
            children: "TDS Portion"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[123] = t38;
    } else {
        t38 = $[123];
    }
    let t39;
    if ($[124] !== t37) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[124] = t37;
        $[125] = t39;
    } else {
        t39 = $[125];
    }
    let t40;
    if ($[126] !== t35 || $[127] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center px-1",
            children: [
                t35,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[126] = t35;
        $[127] = t39;
        $[128] = t40;
    } else {
        t40 = $[128];
    }
    let t41;
    if ($[129] !== t31 || $[130] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t31,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[129] = t31;
        $[130] = t40;
        $[131] = t41;
    } else {
        t41 = $[131];
    }
    let t42;
    if ($[132] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-serif italic text-lg",
            children: "i"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[132] = t42;
    } else {
        t42 = $[132];
    }
    let t43;
    if ($[133] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-black text-slate-800 mb-1",
            children: "Section Rule"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[133] = t43;
    } else {
        t43 = $[133];
    }
    const t44 = currentSection.section;
    const t45 = currentSection.deduction_rate;
    let t46;
    if ($[134] !== threshold) {
        t46 = threshold.toLocaleString();
        $[134] = threshold;
        $[135] = t46;
    } else {
        t46 = $[135];
    }
    let t47;
    if ($[136] !== currentSection.deduction_rate || $[137] !== currentSection.section || $[138] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 bg-white rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm",
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        t43,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-gray-500 leading-relaxed font-medium",
                            children: [
                                "As per Section ",
                                t44,
                                ", TDS is applicable at ",
                                t45,
                                "% if the amount exceeds ₹",
                                t46,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 556,
                            columnNumber: 143
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 556,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        $[136] = currentSection.deduction_rate;
        $[137] = currentSection.section;
        $[138] = t46;
        $[139] = t47;
    } else {
        t47 = $[139];
    }
    let t48;
    if ($[140] !== t29 || $[141] !== t41 || $[142] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-10 bg-slate-50/30 flex flex-col justify-between",
            children: [
                t29,
                t41,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[140] = t29;
        $[141] = t41;
        $[142] = t47;
        $[143] = t48;
    } else {
        t48 = $[143];
    }
    let t49;
    if ($[144] !== t12 || $[145] !== t24 || $[146] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t24,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[144] = t12;
        $[145] = t24;
        $[146] = t48;
        $[147] = t49;
    } else {
        t49 = $[147];
    }
    return t49;
}
_s(ProfessionalTDSCalculator, "VWMqgqSrZah2RvnaRpmUvVX/fuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ProfessionalTDSCalculator;
function _ProfessionalTDSCalculatorInputOnClick(e_0) {
    return e_0.stopPropagation();
}
function _ProfessionalTDSCalculatorFormatNature(text) {
    return text?.split("_").map(_ProfessionalTDSCalculatorFormatNatureAnonymous).join(" ");
}
function _ProfessionalTDSCalculatorFormatNatureAnonymous(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
}
var _c;
__turbopack_context__.k.register(_c, "ProfessionalTDSCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ec11fa2e._.js.map