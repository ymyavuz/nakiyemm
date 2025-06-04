(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Sidebar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 min-w-64 flex-shrink-0 bg-white shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `block w-full p-3 text-center rounded-lg font-medium transition-colors ${item.isActive ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'} ${// Grup ayırıcıları için boşluk ekle
                        index === 1 || index === 4 || index === 7 ? 'mt-6' : ''}`,
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Sidebar.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Sidebar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mb-2 text-sm font-medium",
                        children: "Ay Seçiniz"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "w-full p-2 border rounded-md",
                        value: secilenAy || '',
                        onChange: (e)=>setSecilenAy(Number(e.target.value) || null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Ay Seçiniz"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            aylar.map((ay)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mb-2 text-sm font-medium",
                        children: "Dönem Seçiniz"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "w-full p-2 border rounded-md",
                        value: secilenDonem || '',
                        onChange: (e)=>setSecilenDonem(Number(e.target.value) || null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Dönem Seçiniz"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            donemler.map((donem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
_c = DonemSecimi;
const __TURBOPACK__default__export__ = DonemSecimi;
var _c;
__turbopack_context__.k.register(_c, "DonemSecimi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const SirketSecimi = ({ secilenSirket, setSecilenSirket })=>{
    _s();
    const [sirketler, setSirketler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [yukleniyor, setYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SirketSecimi.useEffect": ()=>{
            const sirketleriGetir = {
                "SirketSecimi.useEffect.sirketleriGetir": async ()=>{
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
                }
            }["SirketSecimi.useEffect.sirketleriGetir"];
            sirketleriGetir();
        }
    }["SirketSecimi.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-2 text-sm font-medium",
                children: "Şirket Seçiniz"
            }, void 0, false, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "w-full p-2 border rounded-md",
                value: secilenSirket || '',
                onChange: (e)=>setSecilenSirket(Number(e.target.value) || null),
                disabled: yukleniyor,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Tüm Şirketler"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    sirketler.map((sirket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
_s(SirketSecimi, "fpQal7yFb1zPPLpGXsi3Vj8u/K4=");
_c = SirketSecimi;
const __TURBOPACK__default__export__ = SirketSecimi;
var _c;
__turbopack_context__.k.register(_c, "SirketSecimi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const SeferlerTablosu = ({ seferler, fiyatGuncelle })=>{
    _s();
    const [yeniFiyatlar, setYeniFiyatlar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [kaydediliyor, setKaydediliyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fiyatListesi, setFiyatListesi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [eslesenYerler, setEslesenYerler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [faturaModuAktif, setFaturaModuAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faturaFiyatlari, setFaturaFiyatlari] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [faturaKaydediliyor, setFaturaKaydediliyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeferlerTablosu.useEffect": ()=>{
            const fiyatlar = {};
            seferler.forEach({
                "SeferlerTablosu.useEffect": (sefer)=>{
                    if (sefer && sefer.sefer_id && typeof sefer.sofore_odenen_ucret === 'number') {
                        fiyatlar[sefer.sefer_id] = sefer.sofore_odenen_ucret;
                    }
                }
            }["SeferlerTablosu.useEffect"]);
            setYeniFiyatlar(fiyatlar);
        }
    }["SeferlerTablosu.useEffect"], [
        seferler
    ]);
    // Tüm fiyat listesini getir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeferlerTablosu.useEffect": ()=>{
            fetchFiyatListesi();
        }
    }["SeferlerTablosu.useEffect"], [
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
        // YAP-İstanbul için özel durum - MT ile çarpma
        if (sefer.sirket && sefer.sirket.sirket_adi === 'YAP-İstanbul') {
            return birimFiyat; // MT ile çarpma
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            faturaModuAktif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: debugFiyatEslesmeleri,
                                className: "px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm",
                                children: "Fiyat Debug"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            !faturaModuAktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: faturaOlustur,
                                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        children: "Fatura Oluştur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: faturaModuIptal,
                                        className: "px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",
                                        children: "İptal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 p-4 rounded-t-lg border border-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: grup.arac.sofor_adi
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-full bg-white border border-t-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-16",
                                                    children: "Sıra No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Şirket"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "İrsaliye No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "İrsaliye Tarihi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-40",
                                                    children: "Tahliye Edilen Firma"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Tahliye Yeri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "MT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Araç Tipi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-24",
                                                    children: "Şirket Birim Fiyatı (TL)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left w-32",
                                                    children: faturaModuAktif ? 'Fatura Fiyatı (TL)' : 'Birim Fiyat (TL)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3 border text-left",
                                                    children: "Fiyat (TL)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: siraliSeferler.map((sefer)=>sefer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-16",
                                                        children: sefer.sira_no
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.sirket ? sefer.sirket.sirket_adi : '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.irsaliye_numarasi || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.irsaliye_tarihi ? new Date(sefer.irsaliye_tarihi).toLocaleDateString('tr-TR') : '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-40",
                                                        children: sefer.tahliye_edilen_firma
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.tahliye_yeri
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.mt !== undefined ? sefer.mt : '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border",
                                                        children: sefer.arac_tipi
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-24",
                                                        children: sefer.sirketten_alinan_ucret.toLocaleString('tr-TR')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border w-32",
                                                        children: faturaModuAktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: "w-full p-1 border rounded bg-blue-50 border-blue-500",
                                                            value: faturaFiyatlari[sefer.sefer_id] || 0,
                                                            onChange: (e)=>faturaFiyatiDegistir(sefer.sefer_id, parseFloat(e.target.value) || 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 px-3 border font-medium",
                                                        children: faturaModuAktif ? hesaplaToplamFiyat(sefer, faturaFiyatlari[sefer.sefer_id] || 0).toLocaleString('tr-TR') : hesaplaToplamFiyat(sefer, getFiyatDegeri(sefer)).toLocaleString('tr-TR')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_s(SeferlerTablosu, "YC/MoS1+u8Io0wsjuEJ3OjqtU6Q=");
_c = SeferlerTablosu;
const __TURBOPACK__default__export__ = SeferlerTablosu;
var _c;
__turbopack_context__.k.register(_c, "SeferlerTablosu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sofor-fiyat-fatura/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SoforFiyatFatura)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sirket$2d$fiyat$2d$fatura$2f$components$2f$DonemSecimi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sirket-fiyat-fatura/components/DonemSecimi.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SirketSecimi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sofor-fiyat-fatura/components/SirketSecimi.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SeferlerTablosu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sofor-fiyat-fatura/components/SeferlerTablosu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function SoforFiyatFatura() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [secilenAy, setSecilenAy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [secilenDonem, setSecilenDonem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [secilenSirket, setSecilenSirket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [yuklemeDurumu, setYuklemeDurumu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [seferler, setSeferler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--background)] text-[var(--foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-6",
                            children: "Şoför İçin Fiyat - Fatura"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--card-bg)] rounded-lg shadow-md p-6 mb-8 border border-[var(--card-border)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SirketSecimi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sirket$2d$fiyat$2d$fatura$2f$components$2f$DonemSecimi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        seferler.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sofor$2d$fiyat$2d$fatura$2f$components$2f$SeferlerTablosu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            seferler: seferler,
                            fiyatGuncelle: fiyatGuncelle
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-fiyat-fatura/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--card-bg)] rounded-lg shadow-md p-6 border border-[var(--card-border)] text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(SoforFiyatFatura, "laYPHqPCn6b4VAG7tgGnCwLVxCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SoforFiyatFatura;
var _c;
__turbopack_context__.k.register(_c, "SoforFiyatFatura");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    };
    _react.default.startTransition(navigate);
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    /**
   * The possible states for prefetch are:
   * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
   * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
   * - false: we will not prefetch if in the viewport at all
   * - 'unstable_dynamicOnHover': this starts in "auto" mode, but switches to "full" when the link is hovered
   */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, appPrefetchKind, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        appPrefetchKind,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            "TURBOPACK unreachable";
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_658d50c0._.js.map