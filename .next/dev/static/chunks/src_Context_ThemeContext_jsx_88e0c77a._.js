(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/Context/ThemeContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // components/Context/ThemeContext.jsx
// "use client";
// import { useState, useEffect, useContext, createContext } from "react";
// const ThemeContext = createContext();
// export const useTheme = () => useContext(ThemeContext);
// export const ThemeProvider = ({ children }) => {
//   // Initialize theme from localStorage or default to 'dark'
//   const [theme, setTheme] = useState(() => {
//     // This runs only on the client side during hydration
//     if (typeof window === 'undefined') {
//       return 'dark'; // Default server-side
//     }
//     try {
//       const savedTheme = localStorage.getItem('theme');
//       if (savedTheme) {
//         return savedTheme;
//       }
//     } catch (e) {
//       console.error("Could not access localStorage for theme.", e);
//     }
//     // Check system preference if localStorage fails or is empty
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   });
//   useEffect(() => {
//     // Apply theme class to the document root element
//     const root = document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark');
//       root.classList.remove('light');
//     } else {
//       root.classList.remove('dark');
//       root.classList.add('light');
//     }
//     // Persist theme preference
//     try {
//       localStorage.setItem('theme', theme);
//     } catch (e) {
//       console.error("Could not save theme to localStorage.", e);
//     }
//   }, [theme]);
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// Load Tailwind CSS (assumed, no import needed)
// Load Lucide icons (using inline SVG fallback for theme toggle)
// --- Theme Context Setup ---
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useTheme = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e1d7343385efe9621f3547220195260ec5b2f8aa50a27fa8e394089e2f3fb149") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1d7343385efe9621f3547220195260ec5b2f8aa50a27fa8e394089e2f3fb149";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const ThemeProvider = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "e1d7343385efe9621f3547220195260ec5b2f8aa50a27fa8e394089e2f3fb149") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1d7343385efe9621f3547220195260ec5b2f8aa50a27fa8e394089e2f3fb149";
    }
    const { children } = t0;
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_temp);
    let t1;
    let t2;
    if ($[1] !== theme) {
        t1 = ()=>{
            const root = document.documentElement;
            if (theme === "dark") {
                root.classList.add("dark");
                root.classList.remove("light");
            } else {
                root.classList.remove("dark");
                root.classList.add("light");
            }
            ;
            try {
                localStorage.setItem("theme", theme);
            } catch (t3) {
                const e_0 = t3;
                console.error("Could not save theme to localStorage.", e_0);
            }
        };
        t2 = [
            theme
        ];
        $[1] = theme;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            setTheme(_temp2);
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const toggleTheme = t3;
    let t4;
    if ($[5] !== theme) {
        t4 = {
            theme,
            toggleTheme
        };
        $[5] = theme;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== children || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
            value: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/Context/ThemeContext.jsx",
            lineNumber: 142,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
};
_s1(ThemeProvider, "tCbPyTMdUn8yhrvBiwhDKFUY6BE=");
_c = ThemeProvider;
function _temp() {
    ;
    try {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        }
    } catch (t0) {
        const e = t0;
        console.error("Could not access localStorage for theme.", e);
    }
}
function _temp2(prevTheme) {
    return prevTheme === "light" ? "dark" : "light";
}
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_Context_ThemeContext_jsx_88e0c77a._.js.map