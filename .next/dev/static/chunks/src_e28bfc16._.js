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
"[project]/src/app/news/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Sections/AllIpoSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '.0/AnimationWeb'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../.data/Data'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAPI.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// --- HELPER FUNCTIONS ---
const mapStatusToUI = (code)=>{
    switch(code){
        case "U":
            return "Upcoming";
        case "O":
        case "CT":
            return "Ongoing";
        case "C":
        case "L":
            return "Closed";
        default:
            return "Upcoming";
    }
};
// --------------------------------------------------------
// STATUS BADGE COMPONENT
// --------------------------------------------------------
const StatusBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const { uiStatus } = t0;
    let badgeClasses;
    bb0: switch(uiStatus){
        case "Ongoing":
            {
                badgeClasses = "bg-emerald-500/10 text-emerald-600 ring-emerald-500/40";
                break bb0;
            }
        case "Upcoming":
            {
                badgeClasses = "bg-cyan-500/10 text-cyan-600 ring-cyan-500/40";
                break bb0;
            }
        case "Closed":
            {
                badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
                break bb0;
            }
        default:
            {
                badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
            }
    }
    const t1 = `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ring-1 ${badgeClasses}`;
    let t2;
    if ($[1] !== t1 || $[2] !== uiStatus) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: [
                "            ",
                uiStatus,
                "        "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = uiStatus;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = StatusBadge;
// Helper component for Listing Gain
const ListingGainDisplay = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const { ipo } = t0;
    const isGain = ipo.listing_gain_percent >= 0;
    const sign = isGain ? "\u25B2" : "\u25BC";
    const gainClasses = isGain ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400";
    const t1 = `text-sm font-bold ${gainClasses}`;
    let t2;
    if ($[1] !== ipo.listing_gain || $[2] !== ipo.listing_gain_percent || $[3] !== sign || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            children: [
                "            ",
                sign,
                " Listing Gain: ",
                ipo.listing_gain,
                " (",
                ipo.listing_gain_percent,
                "%)         "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = ipo.listing_gain;
        $[2] = ipo.listing_gain_percent;
        $[3] = sign;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c1 = ListingGainDisplay;
// Helper component for GMP display (Point 2 and Bottom Bar)
const GmpDisplay = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const { ipo } = t0;
    if (ipo.status === "L") {
        return null;
    }
    if (!ipo.gmp || ipo.gmp === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 rounded-lg flex flex-col justify-center font-bold bg-slate-100 dark:bg-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center text-slate-500 dark:text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-wider",
                            children: "Live GMP"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 126,
                            columnNumber: 200
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: "--"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 126,
                            columnNumber: 260
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 126,
                    columnNumber: 114
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 126,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let gmpClasses;
    let gmpBg;
    let gmpText = ipo.gmp_text;
    if (ipo.gmp_percent > 0) {
        gmpClasses = "text-emerald-700 dark:text-emerald-400";
        gmpBg = "bg-emerald-100 dark:bg-emerald-900/40";
        gmpText = `+${ipo.gmp_text}`;
    } else {
        if (ipo.gmp_percent < 0) {
            gmpClasses = "text-red-700 dark:text-red-400";
            gmpBg = "bg-red-100 dark:bg-red-900/40";
        } else {
            gmpClasses = "text-slate-700 dark:text-slate-300";
            gmpBg = "bg-slate-100 dark:bg-slate-800";
        }
    }
    const t1 = `p-3 rounded-lg flex flex-col justify-center font-bold ${gmpBg}`;
    const t2 = `text-xs uppercase tracking-wider ${gmpClasses}`;
    let t3;
    if ($[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t2,
            children: "Live GMP"
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 153,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = `text-lg ${gmpClasses}`;
    let t5;
    if ($[4] !== gmpText || $[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t4,
            children: gmpText
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 162,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = gmpText;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                "                ",
                t3,
                "                ",
                t5,
                "            "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 171,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t1 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                "            ",
                t6,
                "        "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 180,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t1;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
};
_c2 = GmpDisplay;
// Helper component for detail items
const DetailItem = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const { label, value } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase font-medium text-slate-500 dark:text-slate-400",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 205,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-800 dark:text-slate-100",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 213,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50",
            children: [
                "        ",
                t1,
                "        ",
                t2,
                "    "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 221,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
_c3 = DetailItem;
// --------------------------------------------------------
// FILTER BAR (Same as yours)
// --------------------------------------------------------
const IpoFilterBar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const { selectedStatus, setSelectedStatus, search, setSearch } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "All",
            "Upcoming",
            "Ongoing",
            "Closed"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const STATUS_TABS = t1;
    let t2;
    if ($[2] !== selectedStatus || $[3] !== setSelectedStatus) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-xs sm:text-[13px]",
            children: [
                "                ",
                STATUS_TABS.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedStatus(status),
                        className: `rounded-full px-4 py-1.5 font-semibold transition duration-300 ${selectedStatus === status ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`,
                        children: [
                            "                        ",
                            status,
                            "                    "
                        ]
                    }, status, true, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 258,
                        columnNumber: 114
                    }, ("TURBOPACK compile-time value", void 0))),
                "            "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 258,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = selectedStatus;
        $[3] = setSelectedStatus;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "🔍"
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 267,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== setSearch) {
        t4 = (e)=>setSearch(e.target.value);
        $[6] = setSearch;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== search || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 rounded-full border border-slate-300 \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 bg-slate-100/80 px-4 py-1.5 text-sm text-slate-700 \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 w-full sm:w-auto",
            children: [
                "                ",
                t3,
                "                ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search IPO name or exchange...",
                    value: search,
                    onChange: t4,
                    className: "w-full bg-transparent outline-none placeholder:text-slate-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 282,
                    columnNumber: 345
                }, ("TURBOPACK compile-time value", void 0)),
                "            "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 282,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = search;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t2 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 sm:flex-row sm:items-center sm:justify-between \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-sm shadow-md sticky top-0 z-10",
            children: [
                "                        ",
                t2,
                "                        ",
                t5,
                "        "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 291,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t2;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
};
_c4 = IpoFilterBar;
// --------------------------------------------------------
// IPO TABLE (Grid View) - FIX: अब यह प्रॉप्स का उपयोग करता है
// --------------------------------------------------------
const IpoTable = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const { ipos } = t0;
    if (!ipos.length) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 bg-white/80 p-6 text-center \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 backdrop-blur-sm",
                children: "                No IPOs found matching the filter criteria.             "
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 318,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== ipos) {
        t1 = ipos.map(_temp);
        $[2] = ipos;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
            children: [
                "            ",
                t1,
                "        "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 335,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c5 = IpoTable;
// --------------------------------------------------------
// MAIN APP COMPONENT (Same logic, but uses updated IpoTable)
// --------------------------------------------------------
const App = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29bed43a8a60dcb3b1f90f3002d0ec77fc5dbcf4877c327d7c212260d9116513";
    }
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { data: rawData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ipo/all");
    let t0;
    if ($[1] !== rawData) {
        t0 = rawData || [];
        $[1] = rawData;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = t0.map(_temp2);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const ipos = t1;
    let t2;
    if ($[5] !== ipos || $[6] !== search || $[7] !== selectedStatus) {
        let t3;
        if ($[9] !== search || $[10] !== selectedStatus) {
            t3 = (ipo_0)=>{
                const matchStatus = selectedStatus === "All" || ipo_0.ui_status === selectedStatus;
                const query = search.toLowerCase();
                const matchSearch = ipo_0.name.toLowerCase().includes(query) || ipo_0.exchange && ipo_0.exchange.toLowerCase().includes(query) || ipo_0.category && ipo_0.category.toLowerCase().includes(query) || ipo_0.status_text && ipo_0.status_text.toLowerCase().includes(query);
                return matchStatus && matchSearch;
            };
            $[9] = search;
            $[10] = selectedStatus;
            $[11] = t3;
        } else {
            t3 = $[11];
        }
        t2 = ipos.filter(t3);
        $[5] = ipos;
        $[6] = search;
        $[7] = selectedStatus;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const filteredIpos = t2;
    if (loading) {
        let t3;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-950",
                children: [
                    "                ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium text-slate-600 dark:text-slate-400",
                        children: "Loading IPO data..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 406,
                        columnNumber: 121
                    }, ("TURBOPACK compile-time value", void 0)),
                    "            "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 406,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[12] = t3;
        } else {
            t3 = $[12];
        }
        return t3;
    }
    let t3;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl",
            children: "                            Live IPO Dashboard                         "
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 415,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                "                        ",
                t3,
                "                        ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xl",
                    children: "\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 Track All Upcoming, Ongoing & Listed IPOs with live Grey Market Premium (GMP). \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 "
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 422,
                    columnNumber: 84
                }, ("TURBOPACK compile-time value", void 0)),
                "                    "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 422,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== search || $[16] !== selectedStatus) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoFilterBar, {
            selectedStatus: selectedStatus,
            setSelectedStatus: setSelectedStatus,
            search: search,
            setSearch: setSearch
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 429,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = search;
        $[16] = selectedStatus;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== filteredIpos) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
            ipos: filteredIpos
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 438,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = filteredIpos;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] !== t5 || $[21] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
            children: [
                "            ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-slate-50 py-8 sm:py-12 min-h-screen\r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 dark:bg-slate-950 transition duration-300",
                    children: [
                        "                ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl w-7xl px-4 sm:px-6",
                            children: [
                                "                                        ",
                                t4,
                                "                                        ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        "                        ",
                                        t5,
                                        "                        ",
                                        t6,
                                        "                    "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 446,
                                    columnNumber: 340
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 446,
                            columnNumber: 202
                        }, ("TURBOPACK compile-time value", void 0)),
                        "            "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 446,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0)),
                "        "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 446,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    return t7;
};
_s(App, "7J++RpoGAaNlRDo5KRIXxsAYHIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c6 = App;
const __TURBOPACK__default__export__ = App;
function _temp(ipo) {
    let dateDisplay;
    if (ipo.status === "L") {
        dateDisplay = `Listed: ${ipo.listing_date_display}`;
    } else {
        dateDisplay = `Open: ${ipo.open_date} - Close: ${ipo.close_date}`;
    }
    const showRange = ipo.gmp_low !== null && ipo.gmp_high !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/ipo/${ipo.id}/${slugify(ipo.name)}`,
        className: "flex flex-col relative rounded-xl border border-slate-200 bg-white p-4 shadow-lg \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 transition hover:shadow-xl hover:shadow-emerald-500/20 \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 dark:border-slate-800 dark:bg-slate-900 overflow-hidden group",
        children: [
            "                                                ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    "                            ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-slate-900 dark:text-slate-50 truncate pr-4",
                        children: [
                            "                                ",
                            ipo.name,
                            "                            "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 566
                    }, this),
                    "                            ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                        uiStatus: ipo.status_text == "Listed" ? "Closed" : ipo.ui_status
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 753
                    }, this),
                    "                        "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 464,
                columnNumber: 482
            }, this),
            "                                                ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3 pb-2 border-b border-slate-100 dark:border-slate-800",
                children: [
                    "                            ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "                                ",
                            ipo.exchange || "Mainboard",
                            " / ",
                            ipo.category || "Main",
                            "                            "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 1108
                    }, this),
                    "                            ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-slate-600 dark:text-slate-300",
                        children: [
                            "                                ",
                            dateDisplay,
                            "                            "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 1259
                    }, this),
                    "                        "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 464,
                columnNumber: 912
            }, this),
            "                        ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                        label: "Price Band",
                        value: ipo.price ? `₹${ipo.price}` : "--"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 1499
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                        label: "Lot Size",
                        value: ipo.lot_size || "--"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 1575
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 464,
                columnNumber: 1454
            }, this),
            "                                                ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GmpDisplay, {
                ipo: ipo
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 464,
                columnNumber: 1689
            }, this),
            showRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                    label: "Live GMP Range \u2191 | \u2193",
                    value: `₹${ipo.gmp_low} - ₹${ipo.gmp_high}`
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 464,
                    columnNumber: 1749
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 464,
                columnNumber: 1727
            }, this),
            "                                                ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex justify-between items-center",
                children: [
                    "                                                        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] font-medium",
                        children: [
                            "                                ",
                            ipo.status === "L" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListingGainDisplay, {
                                ipo: ipo
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/page.js",
                                lineNumber: 464,
                                columnNumber: 2111
                            }, this) : ipo.allotted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-600 dark:text-emerald-400",
                                children: "                                        ✔ Allotment Published                                     "
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/page.js",
                                lineNumber: 464,
                                columnNumber: 2161
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 dark:text-slate-400",
                                children: [
                                    "                                        Listing: ",
                                    ipo.listing_date_display,
                                    "                                    "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news/page.js",
                                lineNumber: 464,
                                columnNumber: 2320
                            }, this),
                            "                            "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 2016
                    }, this),
                    "                                                        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center px-3 py-1 text-xs font-semibold \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 bg-emerald-500 text-white rounded-full shadow-md \r\n\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 transition group-hover:bg-emerald-600",
                        children: "                                View Details                             "
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 464,
                        columnNumber: 2576
                    }, this),
                    "                        "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 464,
                columnNumber: 1904
            }, this),
            "                    "
        ]
    }, ipo.id, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 464,
        columnNumber: 10
    }, this);
}
function _temp2(ipo) {
    return {
        ...ipo,
        ui_status: mapStatusToUI(ipo.status)
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "ListingGainDisplay");
__turbopack_context__.k.register(_c2, "GmpDisplay");
__turbopack_context__.k.register(_c3, "DetailItem");
__turbopack_context__.k.register(_c4, "IpoFilterBar");
__turbopack_context__.k.register(_c5, "IpoTable");
__turbopack_context__.k.register(_c6, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e28bfc16._.js.map