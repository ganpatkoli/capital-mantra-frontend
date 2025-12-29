module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/Service/axios.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const baseURL = "http://localhost:5000/api";
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/src/hooks/useAPI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Service/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
function useAPI(path, params = {}) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // GET
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(path, params);
            setData(result);
            setError(null);
        } catch (err) {
            setError(err.message || "API Error");
        }
        setLoading(false);
    }, [
        path,
        JSON.stringify(params)
    ]);
    // POST
    const create = async (body = {}, extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])(path, body, extraParams);
    };
    // PUT
    const update = async (body = {}, extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPut"])(path, body, extraParams);
    };
    // DELETE
    const remove = async (extraParams = {})=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Service$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiDelete"])(path, extraParams);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, [
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
}),
"[project]/src/app/news/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Sections/AllIpoSection.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAPI.js [app-ssr] (ecmascript)");
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
const StatusBadge = ({ uiStatus })=>{
    let badgeClasses = "";
    switch(uiStatus){
        case "Ongoing":
            badgeClasses = "bg-emerald-500/10 text-emerald-600 ring-emerald-500/40";
            break;
        case "Upcoming":
            badgeClasses = "bg-cyan-500/10 text-cyan-600 ring-cyan-500/40";
            break;
        case "Closed":
            badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
            break;
        default:
            badgeClasses = "bg-slate-200/50 text-slate-600 ring-slate-400/40 dark:bg-slate-500/10 dark:text-slate-300";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ring-1 ${badgeClasses}`,
        children: [
            "            ",
            uiStatus,
            "        "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Helper component for Listing Gain
const ListingGainDisplay = ({ ipo })=>{
    const isGain = ipo.listing_gain_percent >= 0;
    const sign = isGain ? '▲' : '▼';
    const gainClasses = isGain ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-sm font-bold ${gainClasses}`,
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
        lineNumber: 59,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Helper component for GMP display (Point 2 and Bottom Bar)
const GmpDisplay = ({ ipo })=>{
    if (ipo.status === "L") {
        return null;
    }
    // Use GMP text/percent only if Gmp value is available
    if (!ipo.gmp || ipo.gmp === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 rounded-lg flex flex-col justify-center font-bold bg-slate-100 dark:bg-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center text-slate-500 dark:text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-wider",
                        children: "Live GMP"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 76,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "--"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 77,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 75,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 74,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    let gmpClasses = "";
    let gmpBg = "";
    let gmpText = ipo.gmp_text;
    if (ipo.gmp_percent > 0) {
        gmpClasses = "text-emerald-700 dark:text-emerald-400";
        gmpBg = "bg-emerald-100 dark:bg-emerald-900/40";
        gmpText = `+${ipo.gmp_text}`;
    } else if (ipo.gmp_percent < 0) {
        gmpClasses = "text-red-700 dark:text-red-400";
        gmpBg = "bg-red-100 dark:bg-red-900/40";
    } else {
        // gmp is available but percent is 0
        gmpClasses = "text-slate-700 dark:text-slate-300";
        gmpBg = "bg-slate-100 dark:bg-slate-800";
    }
    // Range only shown in the DetailItem section for clean bottom bar
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-3 rounded-lg flex flex-col justify-center font-bold ${gmpBg}`,
        children: [
            "            ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    "                ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs uppercase tracking-wider ${gmpClasses}`,
                        children: "Live GMP"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 104,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    "                ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-lg ${gmpClasses}`,
                        children: gmpText
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 105,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    "            "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 103,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "        "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 102,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// Helper component for detail items
const DetailItem = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50",
        children: [
            "        ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase font-medium text-slate-500 dark:text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            "        ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-slate-800 dark:text-slate-100",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            "    "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
// --------------------------------------------------------
// FILTER BAR (Same as yours)
// --------------------------------------------------------
const IpoFilterBar = ({ selectedStatus, setSelectedStatus, search, setSearch })=>{
    const STATUS_TABS = [
        "All",
        "Upcoming",
        "Ongoing",
        "Closed"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3                sm:flex-row sm:items-center sm:justify-between                dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-sm shadow-md sticky top-0 z-10",
        children: [
            "            ",
            "            ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 text-xs sm:text-[13px]",
                children: [
                    "                ",
                    STATUS_TABS.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedStatus(status),
                            className: `rounded-full px-4 py-1.5 font-semibold transition duration-300 ${selectedStatus === status ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`,
                            children: [
                                "                        ",
                                status,
                                "                    "
                            ]
                        }, status, true, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 133,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    "            "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 131,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "            ",
            "            ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-full border border-slate-300                    bg-slate-100/80 px-4 py-1.5 text-sm text-slate-700                    dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 w-full sm:w-auto",
                children: [
                    "                ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 150,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    "                ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search IPO name or exchange...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "w-full bg-transparent outline-none placeholder:text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 151,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    "            "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 147,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "        "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 126,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --------------------------------------------------------
// IPO TABLE (Grid View) - FIX: अब यह प्रॉप्स का उपयोग करता है
// --------------------------------------------------------
const IpoTable = ({ ipos })=>{
    if (!ipos.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-white/80 p-6 text-center                    text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 backdrop-blur-sm",
            children: [
                "                No IPOs found matching the filter criteria. ",
                "            "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 170,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        children: [
            "            ",
            ipos.map((ipo)=>{
                let dateDisplay;
                if (ipo.status === "L") {
                    // Listed: Show Listing Date only
                    dateDisplay = `Listed: ${ipo.listing_date_display}`;
                } else {
                    // U, O, CT, C: Show Open and Close Date
                    dateDisplay = `Open: ${ipo.open_date} - Close: ${ipo.close_date}`;
                }
                const showRange = ipo.gmp_low !== null && ipo.gmp_high !== null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/ipo/${ipo.id}/${slugify(ipo.name)}`,
                    className: "flex flex-col relative rounded-xl border border-slate-200 bg-white p-4 shadow-lg                                transition hover:shadow-xl hover:shadow-emerald-500/20                                dark:border-slate-800 dark:bg-slate-900 overflow-hidden group",
                    children: [
                        "                        ",
                        "                        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                "                            ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-slate-900 dark:text-slate-50 truncate pr-4",
                                    children: [
                                        "                                ",
                                        ipo.name,
                                        "                            "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 203,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                            ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                    uiStatus: ipo.status_text == "Listed" ? "Closed" : ipo.ui_status
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 206,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                        "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 202,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "                        ",
                        "                        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3 pb-2 border-b border-slate-100 dark:border-slate-800",
                            children: [
                                "                            ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "                                ",
                                        ipo.exchange || 'Mainboard',
                                        " / ",
                                        ipo.category || 'Main',
                                        "                            "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 211,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                            ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-slate-600 dark:text-slate-300",
                                    children: [
                                        "                                ",
                                        dateDisplay,
                                        "                            "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 214,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                        "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 210,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "                        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                    label: "Price Band",
                                    value: ipo.price ? `₹${ipo.price}` : "--"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 221,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                    label: "Lot Size",
                                    value: ipo.lot_size || "--"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 222,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 220,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "                        ",
                        "                        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GmpDisplay, {
                            ipo: ipo
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 227,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        showRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                label: "Live GMP Range ↑ | ↓",
                                value: `₹${ipo.gmp_low} - ₹${ipo.gmp_high}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/page.js",
                                lineNumber: 232,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 231,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        "                        ",
                        "                        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-between items-center",
                            children: [
                                "                            ",
                                "                            ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] font-medium",
                                    children: [
                                        "                                ",
                                        ipo.status === "L" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ListingGainDisplay, {
                                            ipo: ipo
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.js",
                                            lineNumber: 244,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : ipo.allotted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-600 dark:text-emerald-400",
                                            children: "                                        ✔ Allotment Published                                     "
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.js",
                                            lineNumber: 246,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 dark:text-slate-400",
                                            children: [
                                                "                                        Listing: ",
                                                ipo.listing_date_display,
                                                "                                    "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/news/page.js",
                                            lineNumber: 250,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "                            "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 242,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                            ",
                                "                            ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center px-3 py-1 text-xs font-semibold                                    bg-emerald-500 text-white rounded-full shadow-md                                    transition group-hover:bg-emerald-600",
                                    children: "                                View Details                             "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.js",
                                    lineNumber: 257,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "                        "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.js",
                            lineNumber: 240,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "                    "
                    ]
                }, ipo.id, true, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 193,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            }),
            "        "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 178,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --------------------------------------------------------
// MAIN APP COMPONENT (Same logic, but uses updated IpoTable)
// --------------------------------------------------------
const App = ()=>{
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { data: rawData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ipo/all");
    // Add UI status field to the raw data
    const ipos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(rawData || []).map((ipo)=>({
                ...ipo,
                ui_status: mapStatusToUI(ipo.status)
            })), [
        rawData
    ]);
    // FILTER LOGIC
    const filteredIpos = ipos.filter((ipo)=>{
        const matchStatus = selectedStatus === "All" || ipo.ui_status === selectedStatus;
        const query = search.toLowerCase();
        const matchSearch = ipo.name.toLowerCase().includes(query) || ipo.exchange && ipo.exchange.toLowerCase().includes(query) || ipo.category && ipo.category.toLowerCase().includes(query) || ipo.status_text && ipo.status_text.toLowerCase().includes(query);
        return matchStatus && matchSearch;
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-950",
            children: [
                "                ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-medium text-slate-600 dark:text-slate-400",
                    children: "Loading IPO data..."
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.js",
                    lineNumber: 301,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                "            "
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.js",
            lineNumber: 300,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
        children: [
            "            ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-slate-50 py-8 sm:py-12 min-h-screen                   dark:bg-slate-950 transition duration-300",
                children: [
                    "                ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl w-7xl px-4 sm:px-6",
                        children: [
                            "                    ",
                            "                    ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    "                        ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl",
                                        children: "                            Live IPO Dashboard                         "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/page.js",
                                        lineNumber: 315,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "                        ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xl",
                                        children: "                            Track All Upcoming, Ongoing & Listed IPOs with live Grey Market Premium (GMP).                         "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/page.js",
                                        lineNumber: 318,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "                    "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news/page.js",
                                lineNumber: 314,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "                    ",
                            "                    ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    "                        ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoFilterBar, {
                                        selectedStatus: selectedStatus,
                                        setSelectedStatus: setSelectedStatus,
                                        search: search,
                                        setSearch: setSearch
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/page.js",
                                        lineNumber: 325,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "                        ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpoTable, {
                                        ipos: filteredIpos
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/page.js",
                                        lineNumber: 332,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "                    "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news/page.js",
                                lineNumber: 324,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "                "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/page.js",
                        lineNumber: 311,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    "            "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.js",
                lineNumber: 308,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "        "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.js",
        lineNumber: 307,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5c26fc8._.js.map