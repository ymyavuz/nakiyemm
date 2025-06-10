module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/components/Sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
'use client';
;
;
;
;
;
const Sidebar = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const handleLogout = ()=>{
        logout();
        router.push('/login');
    };
    const menuItems = [
        {
            href: '/',
            label: 'Dashboard',
            isActive: pathname === '/'
        },
        {
            href: '/veri-yukle',
            label: 'Veri Yükle',
            isActive: pathname === '/veri-yukle'
        },
        {
            href: '/sirket-fiyat-fatura',
            label: 'Şirket İçin Fiyat - Fatura',
            isActive: pathname === '/sirket-fiyat-fatura'
        },
        {
            href: '/sofor-fiyat-fatura',
            label: 'Şöför İçin Fiyat - Fatura',
            isActive: pathname === '/sofor-fiyat-fatura'
        },
        {
            href: '/sirket-bilanco',
            label: 'Şirket Bilanço',
            isActive: pathname === '/sirket-bilanco'
        },
        {
            href: '/sofor-bilanco',
            label: 'Şöför Bilanço',
            isActive: pathname === '/sofor-bilanco'
        },
        {
            href: '/cek-yonetimi',
            label: 'Çek Yönetimi',
            isActive: pathname === '/cek-yonetimi'
        },
        {
            href: '/veritabani-yonetimi',
            label: 'Veritabanı Yönetimi',
            isActive: pathname === '/veritabani-yonetimi'
        },
        {
            href: '/eski-veri-yukle',
            label: 'Eski Veri Yükle',
            isActive: pathname === '/eski-veri-yukle'
        },
        {
            href: '/fatura-excel',
            label: 'Fatura Excel',
            isActive: pathname === '/fatura-excel'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 min-w-64 flex-shrink-0 bg-white shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `block w-full p-3 text-center rounded-lg font-medium transition-colors ${item.isActive ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'} ${// Grup ayırıcıları için boşluk ekle
                            index === 1 || index === 4 || index === 7 ? 'mt-6' : ''}`,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/src/app/components/Sidebar.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "block w-full p-3 mt-8 text-center rounded-lg font-medium transition-colors border border-red-200 text-red-600 hover:bg-red-50 flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            "Çıkış Yap"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Sidebar.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Sidebar.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Sidebar;
}}),
"[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const DonemSecimi = ({ secilenAy, setSecilenAy, secilenDonem, setSecilenDonem })=>{
    const aylar = [
        {
            deger: 1,
            ad: 'Ocak'
        },
        {
            deger: 2,
            ad: 'Şubat'
        },
        {
            deger: 3,
            ad: 'Mart'
        },
        {
            deger: 4,
            ad: 'Nisan'
        },
        {
            deger: 5,
            ad: 'Mayıs'
        },
        {
            deger: 6,
            ad: 'Haziran'
        },
        {
            deger: 7,
            ad: 'Temmuz'
        },
        {
            deger: 8,
            ad: 'Ağustos'
        },
        {
            deger: 9,
            ad: 'Eylül'
        },
        {
            deger: 10,
            ad: 'Ekim'
        },
        {
            deger: 11,
            ad: 'Kasım'
        },
        {
            deger: 12,
            ad: 'Aralık'
        }
    ];
    const donemler = [
        {
            deger: 1,
            ad: '1. Dönem (1-10)'
        },
        {
            deger: 2,
            ad: '2. Dönem (11-20)'
        },
        {
            deger: 3,
            ad: '3. Dönem (21-31)'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mb-2 text-sm font-medium",
                        children: "Ay Seçiniz"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "w-full p-2 border rounded-md",
                        value: secilenAy || '',
                        onChange: (e)=>setSecilenAy(Number(e.target.value) || null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Ay Seçiniz"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            aylar.map((ay)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: ay.deger,
                                    children: ay.ad
                                }, ay.deger, false, {
                                    fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mb-2 text-sm font-medium",
                        children: "Dönem Seçiniz"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "w-full p-2 border rounded-md",
                        value: secilenDonem || '',
                        onChange: (e)=>setSecilenDonem(Number(e.target.value) || null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Dönem Seçiniz"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            donemler.map((donem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: donem.deger,
                                    children: donem.ad
                                }, donem.deger, false, {
                                    fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DonemSecimi;
}}),
"[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const SirketSecimi = ({ secilenSirket, setSecilenSirket })=>{
    const [sirketler, setSirketler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [yukleniyor, setYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sirketleriGetir = async ()=>{
            try {
                setYukleniyor(true);
                const response = await fetch('/api/sirketler');
                if (response.ok) {
                    const data = await response.json();
                    setSirketler(data);
                } else {
                    console.error('Şirketler yüklenirken hata oluştu');
                }
            } catch (error) {
                console.error('Şirketler yüklenirken hata:', error);
            } finally{
                setYukleniyor(false);
            }
        };
        sirketleriGetir();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-2 text-sm font-medium",
                children: "Şirket Seçiniz"
            }, void 0, false, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "w-full p-2 border rounded-md",
                value: secilenSirket || '',
                onChange: (e)=>setSecilenSirket(Number(e.target.value) || null),
                disabled: yukleniyor,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Tüm Şirketler"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    sirketler.map((sirket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: sirket.sirket_id,
                            children: sirket.sirket_adi
                        }, sirket.sirket_id, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SirketSecimi;
}}),
"[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const SeferlerTablosu = ({ seferler, fiyatGuncelle })=>{
    const [yeniFiyatlar, setYeniFiyatlar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [kaydediliyor, setKaydediliyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fiyatListesi, setFiyatListesi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [eslesenYerler, setEslesenYerler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [faturaModuAktif, setFaturaModuAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faturaFiyatlari, setFaturaFiyatlari] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [faturaKaydediliyor, setFaturaKaydediliyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Seferlerin sıra numarasına göre sıralanması için yardımcı fonksiyon
    const siralamaYap = (seferler)=>{
        return [
            ...seferler
        ].sort((a, b)=>{
            const aNum = Number(a.sira_no);
            const bNum = Number(b.sira_no);
            return aNum - bNum;
        });
    };
    // Seferler değiştiğinde yeniFiyatlar state'ini güncelle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fiyatlar = {};
        seferler.forEach((sefer)=>{
            if (sefer && sefer.sefer_id && typeof sefer.sofore_odenen_ucret === 'number') {
                fiyatlar[sefer.sefer_id] = sefer.sofore_odenen_ucret;
            }
        });
        setYeniFiyatlar(fiyatlar);
    }, [
        seferler
    ]);
    // Tüm fiyat listesini getir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchFiyatListesi();
    }, [
        seferler
    ]);
    // Fiyat listesini getiren fonksiyon
    const fetchFiyatListesi = async ()=>{
        try {
            console.log("Fiyat listesi getiriliyor...");
            const response = await fetch('/api/fiyat-listesi?tip=sofor');
            if (response.ok) {
                const data = await response.json();
                setFiyatListesi(data);
                console.log(`Alınan fiyat listesi: ${data.length} kayıt`);
                // Mevcut fiyatlar için eşleşen yerleri bul
                const eslesmeYerleri = {};
                const otomatikFiyatlar = {
                    ...yeniFiyatlar
                };
                seferler.forEach((sefer)=>{
                    if (sefer.sirket) {
                        // Araç tipine göre filtrelenmiş fiyat listesi
                        const filteredList = data.filter((fiyat)=>fiyat.sirket_id === sefer.sirket?.sirket_id && fiyat.arac_tipi === sefer.arac_tipi);
                        console.log(`Şoför sefer #${sefer.sefer_id} için filtrelenmiş fiyat listesi (${sefer.arac_tipi}):`, filteredList.length);
                        // ŞİRKET fiyatına en yakın olanı bul (sofore_odenen_ucret yerine sirketten_alinan_ucret'e göre)
                        const eslesenFiyat = filteredList.find((fiyat)=>Math.abs(fiyat.ucret - sefer.sirketten_alinan_ucret) < 1.0 // Tolerans değeri
                        );
                        if (eslesenFiyat) {
                            eslesmeYerleri[sefer.sefer_id] = eslesenFiyat.tahliye_yeri;
                            // Şoför ücreti varsa, bu ücreti otomatik olarak ayarla
                            if (eslesenFiyat.sofor_ucreti !== null) {
                                otomatikFiyatlar[sefer.sefer_id] = eslesenFiyat.sofor_ucreti;
                            }
                            console.log(`Sefer #${sefer.sefer_id} için şirket fiyatına göre eşleşen fiyat bulundu: ${eslesenFiyat.tahliye_yeri} (Fiyat: ${eslesenFiyat.ucret}, Şoför Ücreti: ${eslesenFiyat.sofor_ucreti})`);
                        } else {
                            console.log(`Sefer #${sefer.sefer_id} için şirket fiyatına göre eşleşen fiyat bulunamadı - Şirket: ${sefer.sirket.sirket_id}, Araç: ${sefer.arac_tipi}, Şirket Fiyatı: ${sefer.sirketten_alinan_ucret}`);
                            // En yakın fiyatı göster (debug için)
                            if (filteredList.length > 0) {
                                filteredList.sort((a, b)=>Math.abs(a.ucret - sefer.sirketten_alinan_ucret) - Math.abs(b.ucret - sefer.sirketten_alinan_ucret));
                                console.log(`En yakın şirket fiyatı: ${filteredList[0].tahliye_yeri} (Fiyat: ${filteredList[0].ucret}, Fark: ${Math.abs(filteredList[0].ucret - sefer.sirketten_alinan_ucret)})`);
                            }
                        }
                    }
                });
                setEslesenYerler(eslesmeYerleri);
                // Yeni fiyatları set et
                setYeniFiyatlar(otomatikFiyatlar);
            }
        } catch (error) {
            console.error('Fiyat listesi getirme hatası:', error);
        }
    };
    // Girilen fiyat için eşleşen tahliye yerini bul
    const findMatchingTahliyeYeri = (sefer, fiyat)=>{
        if (!sefer.sirket) return '';
        console.log(`Şoför eşleşme aranıyor - Şirket: ${sefer.sirket.sirket_id}, Araç: ${sefer.arac_tipi}, Şirket Fiyatı: ${sefer.sirketten_alinan_ucret}, Girilen Şoför Fiyatı: ${fiyat}`);
        // Araç tipine göre filtrelenmiş fiyat listesi
        const filteredList = fiyatListesi.filter((f)=>f.sirket_id === sefer.sirket?.sirket_id && f.arac_tipi === sefer.arac_tipi);
        // 1. İlk olarak girilen şoför fiyatına tam eşleşme var mı bakalım
        let eslesenFiyat = filteredList.find((f)=>f.sofor_ucreti !== null && Math.abs(f.sofor_ucreti - fiyat) < 0.1 // Şoför fiyatı için daha hassas tolerans
        );
        if (eslesenFiyat) {
            console.log(`Şoför fiyatına göre eşleşme bulundu: ${eslesenFiyat.tahliye_yeri} (Şoför Fiyatı: ${eslesenFiyat.sofor_ucreti})`);
            return eslesenFiyat.tahliye_yeri;
        }
        // 2. Şoför fiyatı eşleşmesi bulunamazsa, eski yöntemle şirket fiyatına göre eşleşme arayalım
        eslesenFiyat = filteredList.find((f)=>Math.abs(f.ucret - sefer.sirketten_alinan_ucret) < 1.0 // Tolerans değeri
        );
        if (eslesenFiyat) {
            // Şirket fiyatına göre eşleşme bulundu, şimdi girilen şoför fiyatı ile karşılaştıralım
            if (eslesenFiyat.sofor_ucreti !== null && Math.abs(eslesenFiyat.sofor_ucreti - fiyat) < 1.0) {
                // Şoför fiyatı da aynı kaydın şoför fiyatına yakınsa, eşleşen kaydı kullanalım
                console.log(`Şirket fiyatına göre eşleşen bulundu ve şoför fiyatı da uyumlu: ${eslesenFiyat.tahliye_yeri} (Şirket: ${eslesenFiyat.ucret}, Şoför: ${eslesenFiyat.sofor_ucreti})`);
                return eslesenFiyat.tahliye_yeri;
            } else {
                // Şoför fiyatı farklı, bu durumda eşleşen tahliye yeri bulunamadı olarak değerlendiriyoruz
                console.log(`Şirket fiyatına göre eşleşme bulundu (${eslesenFiyat.tahliye_yeri}) ama şoför fiyatı farklı. Eşleşme yok kabul ediliyor.`);
                return '';
            }
        }
        // Hiçbir şekilde eşleşme bulunamadı
        console.log(`Eşleşen fiyat bulunamadı`);
        console.log("Olası fiyat eşleşmeleri:");
        if (filteredList.length > 0) {
            filteredList.forEach((f)=>{
                console.log(`  Tahliye: ${f.tahliye_yeri}, Şirket: ${f.ucret}, Şoför: ${f.sofor_ucreti}, Şirket Farkı: ${Math.abs(f.ucret - sefer.sirketten_alinan_ucret)}, Şoför Farkı: ${f.sofor_ucreti !== null ? Math.abs(f.sofor_ucreti - fiyat) : 'N/A'}`);
            });
        }
        return '';
    };
    // Fiyat debug butonu
    const debugFiyatEslesmeleri = ()=>{
        console.log("Mevcut fiyat listesi:", fiyatListesi);
        console.log("Mevcut eşleşen yerler:", eslesenYerler);
        console.log("Şirket fiyatları olan kayıtlar:", fiyatListesi.filter((f)=>f.ucret !== null));
        seferler.forEach((sefer)=>{
            if (sefer.sirket) {
                console.log(`Sefer #${sefer.sefer_id} - Şirket: ${sefer.sirket.sirket_adi}, Araç: ${sefer.arac_tipi}, Şirket Fiyatı: ${sefer.sirketten_alinan_ucret}, Şoför Fiyatı: ${sefer.sofore_odenen_ucret}`);
            }
        });
        alert("Şirket ve şoför fiyat eşleştirme bilgileri konsola yazdırıldı. Geliştirici konsolunu kontrol edin.");
    };
    const fiyatDegistir = (seferId, yeniFiyat, sefer)=>{
        if (seferId && !isNaN(yeniFiyat)) {
            // Kullanıcının girdiği değeri direkt olarak set edelim
            setYeniFiyatlar((prev)=>({
                    ...prev,
                    [seferId]: yeniFiyat
                }));
            // Şoför fiyatı değiştiğinde tahliye yerini şirket fiyatına göre bul
            // Yani burada sofore_odenen_ucret değişirken, tahliye yerini sirketten_alinan_ucret'e göre buluyoruz
            const eslesenYer = findMatchingTahliyeYeri(sefer, yeniFiyat);
            console.log(`Şoför sefer #${seferId} için bulunan eşleşen yer: "${eslesenYer}"`);
            // Her durumda state'i güncelle (boş string bile olsa)
            setEslesenYerler((prev)=>({
                    ...prev,
                    [seferId]: eslesenYer
                }));
        }
    };
    // Input değişikliği işleyicisi
    const handleInputChange = (e, sefer)=>{
        const value = e.target.value;
        const numValue = parseFloat(value);
        if (!isNaN(numValue) && numValue > 0) {
            // Sayısal değer kontrolü
            console.log(`Şoför input değeri değişti: ${value}, sayısal değer: ${numValue}`);
            fiyatDegistir(sefer.sefer_id, numValue, sefer);
        } else {
            // Değer boş veya geçersizse, fiyat yerini temizle
            setYeniFiyatlar((prev)=>({
                    ...prev,
                    [sefer.sefer_id]: value === '' ? 0 : numValue || 0
                }));
            setEslesenYerler((prev)=>({
                    ...prev,
                    [sefer.sefer_id]: ''
                }));
        }
    };
    // Toplam fiyatı hesapla (MT * Birim Fiyat)
    const hesaplaToplamFiyat = (sefer, birimFiyat)=>{
        const mt = sefer.mt || 0;
        // YAP-İstanbul için özel durum - MT ile çarpma yapılmayacak
        if (sefer.sirket && sefer.sirket.sirket_adi === 'YAP-İstanbul') {
            return birimFiyat; // MT ile çarpma yapılmayacak, sadece birim fiyat
        }
        return mt * birimFiyat;
    };
    // Tüm fiyat değişikliklerini toplu olarak kaydet
    const tumFiyatlariKaydet = async ()=>{
        setKaydediliyor(true);
        try {
            // Değişen fiyatları bul
            const degisiklikYapilanSeferler = seferler.filter((sefer)=>sefer && sefer.sefer_id && yeniFiyatlar[sefer.sefer_id] !== undefined && yeniFiyatlar[sefer.sefer_id] !== sefer.sofore_odenen_ucret);
            // Değişiklik yoksa işlemi sonlandır
            if (degisiklikYapilanSeferler.length === 0) {
                alert('Değişiklik yapılmadı');
                return;
            }
            // Her bir değişikliği kaydet
            for (const sefer of degisiklikYapilanSeferler){
                await fiyatGuncelle(sefer.sefer_id, yeniFiyatlar[sefer.sefer_id]);
            }
            alert('Tüm fiyat değişiklikleri kaydedildi');
        } catch (error) {
            console.error('Fiyatlar kaydedilirken hata:', error);
            alert('Fiyatlar kaydedilirken bir hata oluştu');
        } finally{
            setKaydediliyor(false);
        }
    };
    // Fatura oluştur - %10 artırılmış fiyatları hesapla
    const faturaOlustur = ()=>{
        const yeniFaturaFiyatlari = {};
        seferler.forEach((sefer)=>{
            if (sefer && sefer.sefer_id) {
                // Mevcut şoför fiyatını %10 artır ve tam sayıya yuvarla
                const mevcutFiyat = yeniFiyatlar[sefer.sefer_id] || sefer.sofore_odenen_ucret;
                const artirilimisFiyat = Math.round(mevcutFiyat * 1.1); // Tam sayıya yuvarla
                yeniFaturaFiyatlari[sefer.sefer_id] = artirilimisFiyat;
            }
        });
        setFaturaFiyatlari(yeniFaturaFiyatlari);
        setFaturaModuAktif(true);
    };
    // Fatura fiyatını değiştir
    const faturaFiyatiDegistir = (seferId, yeniFiyat)=>{
        setFaturaFiyatlari((prev)=>({
                ...prev,
                [seferId]: yeniFiyat
            }));
    };
    // Fatura fiyatlarını kaydet
    const faturaFiyatlariKaydet = async ()=>{
        setFaturaKaydediliyor(true);
        try {
            console.log('Fatura fiyatları kaydediliyor...', faturaFiyatlari);
            // Her bir fatura fiyatını kaydet
            for (const sefer of seferler){
                if (sefer && sefer.sefer_id && faturaFiyatlari[sefer.sefer_id] !== undefined) {
                    console.log(`Sefer ${sefer.sefer_id} için fatura fiyatı kaydediliyor: ${faturaFiyatlari[sefer.sefer_id]}`);
                    const response = await fetch('/api/seferler/sofor-fatura-guncelle', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            seferId: sefer.sefer_id,
                            sofor_fatura_ucreti: faturaFiyatlari[sefer.sefer_id]
                        })
                    });
                    if (!response.ok) {
                        const errorData = await response.json();
                        console.error(`Sefer ${sefer.sefer_id} API hatası:`, errorData);
                        throw new Error(`Sefer ${sefer.sefer_id} fatura ücreti güncellenirken hata oluştu: ${errorData.error || response.statusText}`);
                    }
                    const result = await response.json();
                    console.log(`Sefer ${sefer.sefer_id} başarıyla güncellendi:`, result);
                }
            }
            alert('Fatura fiyatları başarıyla kaydedildi');
            setFaturaModuAktif(false);
            setFaturaFiyatlari({});
            // Sayfayı yenile (parent component'ten seferleri yeniden getir)
            window.location.reload();
        } catch (error) {
            console.error('Fatura fiyatları kaydedilirken hata:', error);
            alert(`Fatura fiyatları kaydedilirken bir hata oluştu: ${error.message || error}`);
        } finally{
            setFaturaKaydediliyor(false);
        }
    };
    // Fatura modunu iptal et
    const faturaModuIptal = ()=>{
        setFaturaModuAktif(false);
        setFaturaFiyatlari({});
    };
    // Seferleri araçlara göre gruplandır
    const aracGruplari = seferler.reduce((gruplar, sefer)=>{
        if (!sefer.arac) return gruplar;
        const aracId = sefer.arac.arac_id;
        if (!gruplar[aracId]) {
            gruplar[aracId] = {
                arac: sefer.arac,
                seferler: []
            };
        }
        gruplar[aracId].seferler.push(sefer);
        return gruplar;
    }, {});
    // Fiyat değişti mi kontrolü
    const fiyatDegistiMi = (sefer)=>{
        if (!sefer || !sefer.sefer_id || yeniFiyatlar[sefer.sefer_id] === undefined) {
            return false;
        }
        return yeniFiyatlar[sefer.sefer_id] !== sefer.sofore_odenen_ucret;
    };
    // Fiyat değeri al
    const getFiyatDegeri = (sefer)=>{
        if (sefer && sefer.sefer_id && yeniFiyatlar[sefer.sefer_id] !== undefined) {
            return yeniFiyatlar[sefer.sefer_id];
        }
        return sefer ? sefer.sofore_odenen_ucret : 0;
    };
    // Genel toplam tutarı hesapla
    const genelToplamTutar = seferler.reduce((toplam, sefer)=>{
        if (faturaModuAktif) {
            const faturaFiyati = faturaFiyatlari[sefer.sefer_id] || 0;
            const toplamFiyat = hesaplaToplamFiyat(sefer, faturaFiyati);
            return toplam + toplamFiyat;
        } else {
            const birimFiyat = getFiyatDegeri(sefer);
            const toplamFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
            return toplam + toplamFiyat;
        }
    }, 0);
    // Araç bazında toplam tutarı hesapla
    const hesaplaAracToplami = (seferler)=>{
        return seferler.reduce((toplam, sefer)=>{
            if (faturaModuAktif) {
                const faturaFiyati = faturaFiyatlari[sefer.sefer_id] || 0;
                const toplamFiyat = hesaplaToplamFiyat(sefer, faturaFiyati);
                return toplam + toplamFiyat;
            } else {
                const birimFiyat = getFiyatDegeri(sefer);
                const toplamFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
                return toplam + toplamFiyat;
            }
        }, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: [
                                    faturaModuAktif ? 'Fatura Modu - ' : '',
                                    "Genel Toplam: ",
                                    genelToplamTutar.toLocaleString('tr-TR'),
                                    " TL"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this),
                            faturaModuAktif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-600 mt-1",
                                children: "Fatura fiyatları (%10 artırılmış) gösteriliyor. Fiyatları düzenleyebilir ve kaydedebilirsiniz."
                            }, void 0, false, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: debugFiyatEslesmeleri,
                                className: "px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm",
                                children: "Fiyat Debug"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            !faturaModuAktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: faturaOlustur,
                                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        children: "Fatura Oluştur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: tumFiyatlariKaydet,
                                        disabled: kaydediliyor,
                                        className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400",
                                        children: kaydediliyor ? 'Kaydediliyor...' : 'Tüm Değişiklikleri Kaydet'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: faturaModuIptal,
                                        className: "px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",
                                        children: "İptal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: faturaFiyatlariKaydet,
                                        disabled: faturaKaydediliyor,
                                        className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400",
                                        children: faturaKaydediliyor ? 'Kaydediliyor...' : 'Fatura Fiyatlarını Kaydet'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            Object.values(aracGruplari).map((grup)=>{
                // Her grup için seferleri sıra numarasına göre sırala
                const siraliSeferler = siralamaYap(grup.seferler);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 p-4 rounded-t-lg border border-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: grup.arac.sofor_adi
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            "Toplam: ",
                                            hesaplaAracToplami(grup.seferler).toLocaleString('tr-TR'),
                                            " TL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-full bg-white border border-t-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-16",
                                                    children: "Sıra No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Şirket"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "İrsaliye No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "İrsaliye Tarihi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-40",
                                                    children: "Tahliye Edilen Firma"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Tahliye Yeri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "MT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Araç Tipi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-24",
                                                    children: "Şirket Birim Fiyatı (TL)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-32",
                                                    children: faturaModuAktif ? 'Fatura Fiyatı (TL)' : 'Birim Fiyat (TL)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Fiyat (TL)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Fiyat Yeri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: siraliSeferler.map((sefer)=>sefer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-16",
                                                        children: sefer.sira_no
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.sirket ? sefer.sirket.sirket_adi : '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.irsaliye_numarasi || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.irsaliye_tarihi ? new Date(sefer.irsaliye_tarihi).toLocaleDateString('tr-TR') : '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-40",
                                                        children: sefer.tahliye_edilen_firma
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.tahliye_yeri
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.mt !== undefined ? sefer.mt : '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.arac_tipi
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-24",
                                                        children: sefer.sirketten_alinan_ucret.toLocaleString('tr-TR')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-32",
                                                        children: faturaModuAktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: "w-full p-1 border rounded bg-blue-50 border-blue-500",
                                                            value: faturaFiyatlari[sefer.sefer_id] || 0,
                                                            onChange: (e)=>faturaFiyatiDegistir(sefer.sefer_id, parseFloat(e.target.value) || 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: `w-full p-1 border rounded ${fiyatDegistiMi(sefer) ? 'bg-yellow-50 border-yellow-500' : ''}`,
                                                            value: getFiyatDegeri(sefer),
                                                            onChange: (e)=>handleInputChange(e, sefer)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border font-medium",
                                                        children: faturaModuAktif ? hesaplaToplamFiyat(sefer, faturaFiyatlari[sefer.sefer_id] || 0).toLocaleString('tr-TR') : hesaplaToplamFiyat(sefer, getFiyatDegeri(sefer)).toLocaleString('tr-TR')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border font-medium text-green-600",
                                                        children: eslesenYerler[sefer.sefer_id] || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, sefer.sefer_id, true, {
                                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                            lineNumber: 515,
                            columnNumber: 11
                        }, this)
                    ]
                }, grup.arac.arac_id, true, {
                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SeferlerTablosu;
}}),
"[project]/src/app/sofor-fiyat-fatura/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SoforFiyatFatura)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sirket$2d$fiyat$2d$fatura$2f$components$2f$DonemSecimi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SirketSecimi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SeferlerTablosu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function SoforFiyatFatura() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [secilenAy, setSecilenAy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [secilenDonem, setSecilenDonem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [secilenSirket, setSecilenSirket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [yuklemeDurumu, setYuklemeDurumu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [seferler, setSeferler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Seferleri getir
    const seferleriGetir = async ()=>{
        if (!secilenAy || !secilenDonem) {
            alert('Lütfen ay ve dönem seçiniz');
            return;
        }
        setYuklemeDurumu(true);
        try {
            // Şirket seçildiyse URL'de belirtilecek, seçilmediyse tüm şirketler getirilecek
            let apiUrl = `/api/seferler/tumunu-listele?ay=${secilenAy}&donem=${secilenDonem}`;
            if (secilenSirket) {
                apiUrl += `&sirketId=${secilenSirket}`;
            }
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                setSeferler(data);
            } else {
                alert('Seferler yüklenirken bir hata oluştu');
            }
        } catch (error) {
            console.error('Seferler yüklenirken hata:', error);
            alert('Seferler yüklenirken bir hata oluştu');
        } finally{
            setYuklemeDurumu(false);
        }
    };
    const fiyatGuncelle = async (seferId, yeniFiyat)=>{
        try {
            const response = await fetch('/api/seferler/sofor-fiyat-guncelle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    seferId,
                    sofore_odenen_ucret: yeniFiyat
                })
            });
            if (response.ok) {
                // Başarılı güncelleme sonrası seferleri yeniden yükle
                seferleriGetir();
            } else {
                alert('Fiyat güncellenirken bir hata oluştu');
            }
        } catch (error) {
            console.error('Fiyat güncellenirken hata:', error);
            alert('Fiyat güncellenirken bir hata oluştu');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--background)] text-[var(--foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-6",
                            children: "Şoför İçin Fiyat - Fatura"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--card-bg)] rounded-lg shadow-md p-6 mb-8 border border-[var(--card-border)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SirketSecimi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            secilenSirket: secilenSirket,
                                            setSecilenSirket: setSecilenSirket
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sirket$2d$fiyat$2d$fatura$2f$components$2f$DonemSecimi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            secilenAy: secilenAy,
                                            setSecilenAy: setSecilenAy,
                                            secilenDonem: secilenDonem,
                                            setSecilenDonem: setSecilenDonem
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: seferleriGetir,
                                            disabled: yuklemeDurumu,
                                            className: "w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400",
                                            children: yuklemeDurumu ? 'Yükleniyor...' : 'Seferleri Getir'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        seferler.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SeferlerTablosu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            seferler: seferler,
                            fiyatGuncelle: fiyatGuncelle
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--card-bg)] rounded-lg shadow-md p-6 border border-[var(--card-border)] text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Seçilen kriterlere uygun sefer bulunamadı."
                            }, void 0, false, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f465c147._.js.map