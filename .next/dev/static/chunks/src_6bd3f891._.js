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
"[project]/src/app/ipo/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAPI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/Data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
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
/* ---------------- UPDATED FILTER CHIPS (Horizontal Scroll) ---------------- */ const FilterChips = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84";
    }
    const { activeValue, options, onChange } = t0;
    let t1;
    if ($[1] !== activeValue || $[2] !== onChange || $[3] !== options) {
        let t2;
        if ($[5] !== activeValue || $[6] !== onChange) {
            t2 = (opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange(opt.value),
                    className: `px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition whitespace-nowrap flex-shrink-0 border ${activeValue === opt.value ? "bg-emerald-500 border-emerald-500 text-white shadow-md" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 shadow-sm"}`,
                    children: opt.label
                }, opt.value, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 29,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0));
            $[5] = activeValue;
            $[6] = onChange;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = options.map(t2);
        $[1] = activeValue;
        $[2] = onChange;
        $[3] = options;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-nowrap gap-2 overflow-x-auto no-scrollbar pb-1 px-1",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
};
_c = FilterChips;
/* ---------------- STATUS BADGE ---------------- */ const StatusBadge = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84";
    }
    const { status } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            Upcoming: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
            Open: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
            Listed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
            Closed: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const map = t1;
    const t2 = `px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${map[status] || "bg-slate-100 text-slate-600"}`;
    let t3;
    if ($[2] !== status || $[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: status
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = status;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c1 = StatusBadge;
/* ---------------- IPO TABLE ---------------- */ const IpoTable = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84";
    }
    const { data, showListingGain, page, perPage } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5 w-16 text-center",
            children: "#"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5 sticky left-0 bg-slate-50 dark:bg-slate-800 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]",
            children: "Company Name"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5",
            children: "Price Band"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5",
            children: "Live GMP"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5",
            children: "Subscription"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5",
            children: "Rating"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 120,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== showListingGain) {
        t7 = showListingGain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5",
            children: "Listing Gain"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 137,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = showListingGain;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-5 text-center",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 145,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-b dark:border-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "font-semibold uppercase text-[10px] tracking-widest",
                children: [
                    t1,
                    t2,
                    t3,
                    t4,
                    t5,
                    t6,
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 152,
                columnNumber: 128
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 152,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t7;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== data || $[13] !== page || $[14] !== perPage || $[15] !== showListingGain) {
        let t11;
        if ($[17] !== page || $[18] !== perPage || $[19] !== showListingGain) {
            t11 = (ipo, index)=>{
                const serial = (page - 1) * perPage + index + 1;
                const gmpValue = parseFloat(ipo.gmp_text?.replace(/[₹,%,+]/g, "")) || 0;
                const gainValue = parseFloat(ipo.listing_gain_percent) || 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "hover:bg-blue-50/40 dark:hover:bg-slate-800/30 transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-6 py-5 text-center text-slate-400 font-mono text-xs",
                            children: serial
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 166,
                            columnNumber: 116
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-6 py-5 sticky left-0 bg-white dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/ipo/${ipo.id}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$Data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(ipo.name)}`,
                                    className: "truncate max-w-[200px] md:max-w-xs group-hover:text-blue-600 transition-colors block",
                                    children: ipo.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 166,
                                    columnNumber: 352
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] text-slate-400 font-black uppercase mt-1 flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded",
                                            children: ipo.exchange
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 166,
                                            columnNumber: 597
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-1.5 py-0.5 rounded",
                                            children: ipo.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 166,
                                            columnNumber: 689
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 166,
                                    columnNumber: 517
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 166,
                            columnNumber: 200
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-6 py-5 font-bold text-slate-700 dark:text-slate-300",
                            children: [
                                "₹",
                                ipo.price || "TBA"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 166,
                            columnNumber: 806
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: `px-6 py-5 font-black ${gmpValue > 0 ? "text-green-600" : gmpValue < 0 ? "text-red-600" : "text-slate-500"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    gmpValue > 0 ? "+" : "",
                                    ipo.gmp_text || "0",
                                    gmpValue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-bounce-slow",
                                        children: "↑"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 166,
                                        columnNumber: 1134
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    gmpValue < 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 166,
                                        columnNumber: 1198
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 166,
                                columnNumber: 1028
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 166,
                            columnNumber: 903
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-6 py-5 font-bold text-slate-600 dark:text-slate-400",
                            children: ipo.subscription || "0.00x"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 166,
                            columnNumber: 1224
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-6 py-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex text-orange-500 text-[10px] items-center",
                                children: [
                                    Array.from({
                                        length: ipo.rating?.score || 1
                                    }).map(_temp),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-slate-400 font-black tracking-tighter",
                                        children: [
                                            ipo.rating?.score || 1,
                                            "/5"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ipo/page.js",
                                        lineNumber: 168,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 166,
                                columnNumber: 1355
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 166,
                            columnNumber: 1329
                        }, ("TURBOPACK compile-time value", void 0)),
                        showListingGain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: `px-6 py-5 font-black ${gainValue > 0 ? "text-green-600" : gainValue < 0 ? "text-red-600" : "text-slate-500"}`,
                            children: [
                                gainValue > 0 ? "+" : "",
                                ipo.listing_gain_percent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 168,
                            columnNumber: 159
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-6 py-5 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                status: ipo.status_text
                            }, void 0, false, {
                                fileName: "[project]/src/app/ipo/page.js",
                                lineNumber: 168,
                                columnNumber: 383
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 168,
                            columnNumber: 345
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, ipo.id, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 166,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[17] = page;
            $[18] = perPage;
            $[19] = showListingGain;
            $[20] = t11;
        } else {
            t11 = $[20];
        }
        t10 = data.map(t11);
        $[12] = data;
        $[13] = page;
        $[14] = perPage;
        $[15] = showListingGain;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: "divide-y divide-slate-100 dark:divide-slate-800",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl no-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-[1000px] lg:min-w-full w-full text-sm text-left border-collapse",
                children: [
                    t9,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 196,
                columnNumber: 158
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    return t12;
};
_c2 = IpoTable;
function App() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f38d156666b247dc7371d754ade5aa983d3c58ab9a31cbe131827c2ee745a84";
    }
    const [mainCategory, setMainCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [subStatus, setSubStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    let t0;
    bb0: {
        if (mainCategory === "all") {
            t0 = "ipo/all";
            break bb0;
        }
        const statusPath = subStatus === "all" ? "active" : subStatus;
        t0 = `ipo/${mainCategory}/${statusPath}`;
    }
    const apiPath = t0;
    const { data: t1, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(apiPath);
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const data = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "App[useEffect()]": ()=>{
                setPage(1);
            }
        })["App[useEffect()]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== mainCategory || $[5] !== subStatus) {
        t4 = [
            mainCategory,
            subStatus
        ];
        $[4] = mainCategory;
        $[5] = subStatus;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    bb1: {
        if (!searchQuery) {
            t5 = data;
            break bb1;
        }
        let t6;
        if ($[7] !== data || $[8] !== searchQuery) {
            let t7;
            if ($[10] !== searchQuery) {
                t7 = ({
                    "App[data.filter()]": (ipo)=>ipo.name.toLowerCase().includes(searchQuery.toLowerCase()) || ipo.category.toLowerCase().includes(searchQuery.toLowerCase())
                })["App[data.filter()]"];
                $[10] = searchQuery;
                $[11] = t7;
            } else {
                t7 = $[11];
            }
            t6 = data.filter(t7);
            $[7] = data;
            $[8] = searchQuery;
            $[9] = t6;
        } else {
            t6 = $[9];
        }
        t5 = t6;
    }
    const filteredData = t5;
    const totalPages = Math.ceil(filteredData.length / 10);
    let t6;
    if ($[12] !== filteredData || $[13] !== page) {
        t6 = filteredData.slice((page - 1) * 10, page * 10);
        $[12] = filteredData;
        $[13] = page;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const paginated = t6;
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "IPO GMP Tracker 2025 | Live Grey Market Premium & Subscription Status"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 305,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "description",
                    content: "Check latest IPO GMP today, upcoming SME & Mainboard IPOs, live subscription status, and listing gains. Stay updated with real-time market data."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 305,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [
            {
                id: "all",
                label: "All IPOs"
            },
            {
                id: "mainboard",
                label: "Mainboard"
            },
            {
                id: "sme",
                label: "SME Segment"
            }
        ];
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== mainCategory) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full md:w-fit overflow-x-auto no-scrollbar",
            children: t8.map({
                "App[(anonymous)()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "App[(anonymous)() > <button>.onClick]": ()=>{
                                setMainCategory(cat.id);
                                setSubStatus("all");
                            }
                        }["App[(anonymous)() > <button>.onClick]"],
                        className: `flex-1 md:flex-none px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${mainCategory === cat.id ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"}`,
                        children: cat.label
                    }, cat.id, false, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 329,
                        columnNumber: 38
                    }, this)
            }["App[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 328,
            columnNumber: 10
        }, this);
        $[17] = mainCategory;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 group-focus-within:text-blue-600 transition-colors",
                children: "🔍"
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 343,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "App[<input>.onChange]": (e)=>{
                setSearchQuery(e.target.value);
                setPage(1);
            }
        })["App[<input>.onChange]"];
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== searchQuery) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full md:w-80 group",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search company...",
                    value: searchQuery,
                    onChange: t11,
                    className: "w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs font-bold outline-none focus:border-blue-500 dark:focus:border-blue-600 transition-all text-slate-800 dark:text-white"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 362,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[21] = searchQuery;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-center gap-4 mb-6",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t9;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [
            {
                value: "all",
                label: "Active Trends"
            },
            {
                value: "open",
                label: "Live Open"
            },
            {
                value: "upcoming",
                label: "Upcoming"
            },
            {
                value: "closing-today",
                label: "Closing Today"
            },
            {
                value: "closed",
                label: "Closed"
            },
            {
                value: "listed",
                label: "Listed"
            }
        ];
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== subStatus) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChips, {
                activeValue: subStatus,
                onChange: setSubStatus,
                options: t14
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 404,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[27] = subStatus;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t13 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 md:mt-16 bg-white dark:bg-slate-900 rounded-3xl md:rounded-[2.5rem] shadow-2xl  md:p-8 dark:border dark:border-slate-800 transition-all",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== error || $[33] !== filteredData.length || $[34] !== loading || $[35] !== page || $[36] !== paginated || $[37] !== searchQuery || $[38] !== subStatus || $[39] !== totalPages) {
        t17 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-32 text-center flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mb-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 421,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 font-black uppercase text-[10px]",
                    children: "Processing Live Feed..."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 421,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 421,
            columnNumber: 21
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-20 text-center bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 font-black text-xs uppercase tracking-widest",
                children: "⚠️ Connection Lost. Please Refresh."
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 421,
                columnNumber: 417
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 421,
            columnNumber: 296
        }, this) : filteredData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-32 text-center text-slate-400 font-bold italic",
            children: [
                'No IPOs found matching "',
                searchQuery,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 421,
            columnNumber: 566
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
                    data: paginated,
                    showListingGain: subStatus === "listed",
                    page: page,
                    perPage: 10
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 421,
                    columnNumber: 682
                }, this),
                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center gap-4 mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: page === 1,
                            onClick: {
                                "App[<button>.onClick]": ()=>{
                                    setPage(page - 1);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                }
                            }["App[<button>.onClick]"],
                            className: "px-8 py-3 bg-white dark:bg-slate-800 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg disabled:opacity-20 transition-all dark:text-white",
                            children: "← PREV"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 421,
                            columnNumber: 858
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-black text-slate-400",
                            children: [
                                "PAGE ",
                                page,
                                " OF ",
                                totalPages
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 429,
                            columnNumber: 223
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: page === totalPages,
                            onClick: {
                                "App[<button>.onClick]": ()=>{
                                    setPage(page + 1);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                }
                            }["App[<button>.onClick]"],
                            className: "px-8 py-3 bg-white dark:bg-slate-800 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg disabled:opacity-20 transition-all dark:text-white",
                            children: "NEXT →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 429,
                            columnNumber: 313
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 421,
                    columnNumber: 796
                }, this)
            ]
        }, void 0, true);
        $[32] = error;
        $[33] = filteredData.length;
        $[34] = loading;
        $[35] = page;
        $[36] = paginated;
        $[37] = searchQuery;
        $[38] = subStatus;
        $[39] = totalPages;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "text-yellow-500 fill-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 452,
                    columnNumber: 124
                }, this),
                "STRATEGIC IPO INVESTING"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg leading-relaxed",
            children: "Investing in an IPO is more than just bidding. To be a successful investor in 2025, you must analyze the Prospectus (DRHP) and understand the Grey Market Sentiment."
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "text-blue-600 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 466,
                    columnNumber: 138
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-bold leading-relaxed",
                    children: "The 70-30 Rule: If the GMP is above 30% of the issue price, it generally indicates a strong listing gain potential."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 466,
                    columnNumber: 186
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 text-slate-600 dark:text-slate-400 font-medium",
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: [
                                t20,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "text-emerald-600 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 473,
                                            columnNumber: 260
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold leading-relaxed",
                                            children: "Anchor Investors: Check if big institutional names are buying. It validates the company's valuation."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 473,
                                            columnNumber: 316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 473,
                                    columnNumber: 133
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 473,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 473,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    let t23;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                size: 120
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 481,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-black mb-6 tracking-tight",
            children: "2025 INVESTOR CHECKLIST"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[45] = t22;
        $[46] = t23;
    } else {
        t22 = $[45];
        t23 = $[46];
    }
    let t24;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-500 font-bold",
                    children: "01."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 491,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold uppercase tracking-tight",
                    children: "Debt-to-Equity Ratio: Companies with high debt should be approached with caution."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 491,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-500 font-bold",
                    children: "02."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 498,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold uppercase tracking-tight",
                    children: "Management Experience: Reliable promoters lead to better long-term wealth creation."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 498,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    let t27;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid lg:grid-cols-2 gap-16 items-center",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-3xl",
                    children: [
                        t22,
                        t23,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4 text-slate-400",
                            children: [
                                t24,
                                t25,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-500 font-bold",
                                            children: "03."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 506,
                                            columnNumber: 280
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold uppercase tracking-tight",
                                            children: "Market Peer Comparison: Is the IPO priced lower than its competitors?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ipo/page.js",
                                            lineNumber: 506,
                                            columnNumber: 332
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 506,
                                    columnNumber: 241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 506,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 506,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-black text-center mb-16 tracking-tighter uppercase",
            children: "IPO Market Dictionary"
        }, void 0, false, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[49] = t26;
        $[50] = t27;
    } else {
        t26 = $[49];
        t27 = $[50];
    }
    let t28;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                    className: "mb-6 text-blue-600 group-hover:scale-110 transition-transform",
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 516,
                    columnNumber: 168
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-black text-lg mb-4",
                    children: "SME vs Mainboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 516,
                    columnNumber: 270
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500 leading-relaxed font-bold",
                    children: "Mainboard IPOs are for established giants. SME IPOs are for small enterprises with a minimum application size of ₹1L+."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 516,
                    columnNumber: 331
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-500 transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "mb-6 text-emerald-600 group-hover:scale-110 transition-transform",
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 523,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-black text-lg mb-4",
                    children: "Grey Market Premium"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 523,
                    columnNumber: 265
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500 leading-relaxed font-bold",
                    children: "GMP is the unofficial trading price. A high GMP reflects high demand from retail and institutional bidders."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 523,
                    columnNumber: 329
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [
                        t28,
                        t29,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500 transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "mb-6 text-indigo-600 group-hover:scale-110 transition-transform",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 530,
                                    columnNumber: 237
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-black text-lg mb-4",
                                    children: "Allotment Lottery"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 530,
                                    columnNumber: 337
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 leading-relaxed font-bold",
                                    children: "When oversubscribed, SEBI ensures a fair allotment using a computerized lottery system per PAN card."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ipo/page.js",
                                    lineNumber: 530,
                                    columnNumber: 399
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 530,
                            columnNumber: 78
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 530,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-black tracking-tighter mb-4 uppercase",
                    children: "EXPERT INSIGHTS & FAQ"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 537,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 font-bold uppercase text-[10px] tracking-widest",
                    children: "Frequently asked questions by Indian retail investors."
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 537,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[54] = t31;
    } else {
        t31 = $[54];
    }
    let t32;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-4xl mx-auto",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        {
                            q: "Is GMP a reliable indicator of listing gains?",
                            a: "While GMP reflects current demand, it is not a legal guarantee. Market volatility on listing day, global cues, and institutional selling can drastically change the final listing price."
                        },
                        {
                            q: "Why am I not getting any IPO allotments?",
                            a: "Allotment depends on the subscription ratio. If an IPO is subscribed 100x in the retail category, your chances are 1 in 100 per PAN card. Applying from multiple family accounts can improve your probability."
                        },
                        {
                            q: "Where can I check the live subscription status?",
                            a: "Our tracker pulls data directly from official exchange feeds (NSE and BSE) and updates every 15 minutes during the trading hours of 10 AM to 5 PM."
                        }
                    ].map(_AppAnonymous)
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 544,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "mt-32 pt-20 border-t border-slate-200 dark:border-slate-800 space-y-24",
            children: [
                t26,
                t30,
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-10 rounded-[3rem] bg-slate-900 text-center border-1 border-emerald-500 shadow-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-black text-white mb-4 uppercase tracking-tight",
                            children: "NEVER MISS AN OPPORTUNITY"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 560,
                            columnNumber: 219
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 mb-8 max-w-2xl mx-auto font-bold",
                            children: "The Indian stock market moves fast. Bookmark this tracker to stay updated with Daily GMP Trends and Live IPO News."
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 560,
                            columnNumber: 326
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#ipos",
                            className: "inline-flex items-center gap-3 bg-emerald-600 text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600",
                            children: "Browse Active IPOs Now"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ipo/page.js",
                            lineNumber: 560,
                            columnNumber: 507
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 560,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    if ($[57] !== t16 || $[58] !== t17) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-10 py-4",
            children: [
                t16,
                t17,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ipo/page.js",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[57] = t16;
        $[58] = t17;
        $[59] = t34;
    } else {
        t34 = $[59];
    }
    let t35;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "8c47a240e28e58fd",
            children: ".no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}@keyframes bounce-slow{0%,to{transform:translateY(-10%)}50%{transform:translateY(0)}}.animate-bounce-slow{animation:1.5s infinite bounce-slow}::selection{color:#fff;background:#2563eb}"
        }, void 0, false, void 0, this);
        $[60] = t35;
    } else {
        t35 = $[60];
    }
    let t36;
    if ($[61] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen transition-colors duration-500",
                    children: [
                        t34,
                        t35
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ipo/page.js",
                    lineNumber: 583,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
        $[61] = t34;
        $[62] = t36;
    } else {
        t36 = $[62];
    }
    return t36;
}
_s(App, "uvq3Y/VpxkB82aBjingJGVW/V4A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c3 = App;
function _AppAnonymous(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "group p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "font-black text-slate-900 dark:text-white list-none flex justify-between items-center group-open:text-blue-600",
                children: [
                    item.q,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "transition-transform group-open:rotate-180 text-blue-600",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ipo/page.js",
                        lineNumber: 592,
                        columnNumber: 352
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 592,
                columnNumber: 212
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 animate-in fade-in slide-in-from-top-2 font-bold",
                children: item.a
            }, void 0, false, {
                fileName: "[project]/src/app/ipo/page.js",
                lineNumber: 592,
                columnNumber: 445
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 592,
        columnNumber: 10
    }, this);
}
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: "🔥"
    }, i, false, {
        fileName: "[project]/src/app/ipo/page.js",
        lineNumber: 595,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FilterChips");
__turbopack_context__.k.register(_c1, "StatusBadge");
__turbopack_context__.k.register(_c2, "IpoTable");
__turbopack_context__.k.register(_c3, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6bd3f891._.js.map