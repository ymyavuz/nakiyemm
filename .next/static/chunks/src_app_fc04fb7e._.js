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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Sidebar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 min-w-64 flex-shrink-0 bg-white shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `block w-full p-3 text-center rounded-lg font-medium transition-colors ${item.isActive ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'} ${// Grup ayırıcıları için boşluk ekle
                            index === 1 || index === 4 || index === 7 ? 'mt-6' : ''}`,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/src/app/components/Sidebar.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "block w-full p-3 mt-8 text-center rounded-lg font-medium transition-colors border border-red-200 text-red-600 hover:bg-red-50 flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
_s(Sidebar, "wryZfT8dnlIDd1M2uIIbQ0DMsjo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
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
"[project]/src/app/sirket-bilanco/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SirketBilanco)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SirketBilanco() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [sirketler, setSirketler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [secilenSirket, setSecilenSirket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [secilenAy, setSecilenAy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [secilenDonem, setSecilenDonem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bilancoVerisi, setBilancoVerisi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [yukleniyor, setYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hata, setHata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [genelGorunumAktif, setGenelGorunumAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const aylar = [
        {
            value: '1',
            label: 'Ocak'
        },
        {
            value: '2',
            label: 'Şubat'
        },
        {
            value: '3',
            label: 'Mart'
        },
        {
            value: '4',
            label: 'Nisan'
        },
        {
            value: '5',
            label: 'Mayıs'
        },
        {
            value: '6',
            label: 'Haziran'
        },
        {
            value: '7',
            label: 'Temmuz'
        },
        {
            value: '8',
            label: 'Ağustos'
        },
        {
            value: '9',
            label: 'Eylül'
        },
        {
            value: '10',
            label: 'Ekim'
        },
        {
            value: '11',
            label: 'Kasım'
        },
        {
            value: '12',
            label: 'Aralık'
        }
    ];
    const donemler = [
        {
            value: '2023',
            label: '2023'
        },
        {
            value: '2024',
            label: '2024'
        },
        {
            value: '2025',
            label: '2025'
        }
    ];
    // Şirketleri yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SirketBilanco.useEffect": ()=>{
            const sirketleriYukle = {
                "SirketBilanco.useEffect.sirketleriYukle": async ()=>{
                    try {
                        const response = await fetch('/api/sirketler');
                        if (response.ok) {
                            const data = await response.json();
                            setSirketler(data);
                        }
                    } catch (error) {
                        console.error('Şirketler yüklenirken hata:', error);
                    }
                }
            }["SirketBilanco.useEffect.sirketleriYukle"];
            sirketleriYukle();
        }
    }["SirketBilanco.useEffect"], []);
    // Sayfa açılır açılmaz genel özeti yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SirketBilanco.useEffect": ()=>{
            genelOzetiYukle();
        }
    }["SirketBilanco.useEffect"], []);
    // Genel özeti yükle
    const genelOzetiYukle = async ()=>{
        setYukleniyor(true);
        setHata('');
        setGenelGorunumAktif(true);
        try {
            const response = await fetch('/api/sirket-bilanco');
            if (response.ok) {
                const data = await response.json();
                setBilancoVerisi(data);
            } else {
                const errorData = await response.json();
                setHata(errorData.error || 'Genel özet alınırken hata oluştu');
            }
        } catch (error) {
            setHata('Genel özet alınırken hata oluştu');
            console.error('Genel özet yükleme hatası:', error);
        } finally{
            setYukleniyor(false);
        }
    };
    // Bilanço verilerini yükle (filtrelenmiş)
    const bilancoyuYukle = async ()=>{
        setYukleniyor(true);
        setHata('');
        setGenelGorunumAktif(false);
        try {
            const params = new URLSearchParams();
            if (secilenSirket) params.append('sirket_id', secilenSirket);
            if (secilenAy) params.append('ay', secilenAy);
            if (secilenDonem) params.append('donem', secilenDonem);
            const response = await fetch(`/api/sirket-bilanco?${params}`);
            if (response.ok) {
                const data = await response.json();
                setBilancoVerisi(data);
            } else {
                const errorData = await response.json();
                setHata(errorData.error || 'Bilanço verisi alınırken hata oluştu');
            }
        } catch (error) {
            setHata('Bilanço verisi alınırken hata oluştu');
            console.error('Bilanço yükleme hatası:', error);
        } finally{
            setYukleniyor(false);
        }
    };
    // Filtreleri temizle ve genel görünüme dön
    const filtreleriTemizle = ()=>{
        setSecilenSirket('');
        setSecilenAy('');
        setSecilenDonem('');
        setHata('');
        genelOzetiYukle();
    };
    const formatTutar = (tutar)=>{
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        }).format(tutar);
    };
    const formatTarih = (tarih)=>{
        return new Date(tarih).toLocaleDateString('tr-TR');
    };
    const formatSayi = (sayi)=>{
        return new Intl.NumberFormat('tr-TR').format(sayi);
    };
    const getAyAdi = (ayNumarasi)=>{
        const ay = aylar.find((a)=>parseInt(a.value) === ayNumarasi);
        return ay ? ay.label : ayNumarasi.toString();
    };
    // Net kar hesaplama yardımcı fonksiyonu
    const hesaplaNetKar = (gelir, kdv, tevkifat, gider)=>{
        // Toplam Gelir - Tevkifat - Toplam Gider
        return gelir + kdv - tevkifat - gider;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--background)] text-[var(--foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-[var(--foreground)]",
                                children: genelGorunumAktif ? 'Genel Finansal Durum' : 'Şirket Bilanço'
                            }, void 0, false, {
                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold",
                                            children: "Filtreler"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 13
                                        }, this),
                                        !genelGorunumAktif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: filtreleriTemizle,
                                            className: "bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors",
                                            children: "Genel Görünüme Dön"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Şirket Seçin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: secilenSirket,
                                                    onChange: (e)=>setSecilenSirket(e.target.value),
                                                    className: "w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Şirket Seçin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 17
                                                        }, this),
                                                        sirketler.map((sirket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: sirket.sirket_id,
                                                                children: sirket.sirket_adi
                                                            }, sirket.sirket_id, false, {
                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 19
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Ay (Opsiyonel)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: secilenAy,
                                                    onChange: (e)=>setSecilenAy(e.target.value),
                                                    className: "w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Tüm Aylar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 17
                                                        }, this),
                                                        aylar.map((ay)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: ay.value,
                                                                children: ay.label
                                                            }, ay.value, false, {
                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 19
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Dönem (Opsiyonel)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: secilenDonem,
                                                    onChange: (e)=>setSecilenDonem(e.target.value),
                                                    className: "w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Tüm Dönemler"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 17
                                                        }, this),
                                                        donemler.map((donem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: donem.value,
                                                                children: donem.label
                                                            }, donem.value, false, {
                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 19
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: bilancoyuYukle,
                                                disabled: yukleniyor || !secilenSirket && !secilenAy && !secilenDonem,
                                                className: "w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                                                children: yukleniyor ? 'Yükleniyor...' : 'Detaylı Bilanço Getir'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 11
                                }, this),
                                hata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md",
                                    children: hata
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                            lineNumber: 227,
                            columnNumber: 9
                        }, this),
                        bilancoVerisi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                !bilancoVerisi.genel && bilancoVerisi.sirket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-4",
                                            children: "Şirket Bilgileri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Şirket Adı:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        bilancoVerisi.sirket.sirket_adi
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Vergi Numarası:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        bilancoVerisi.sirket.vergi_numarasi
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this),
                                bilancoVerisi.genel && bilancoVerisi.sirketler && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-4",
                                            children: "Genel Bilgiler"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-semibold text-blue-600",
                                                            children: "Toplam Şirket"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold",
                                                            children: bilancoVerisi.sirketler.toplamSirketSayisi
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-semibold text-purple-600",
                                                            children: "Toplam Sefer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold",
                                                            children: bilancoVerisi.seferler.toplamSeferSayisi
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-semibold text-orange-600",
                                                            children: "KDV"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold text-orange-600",
                                                            children: bilancoVerisi.gelirGider.kdvHesaplama !== undefined ? formatTutar(bilancoVerisi.gelirGider.kdvHesaplama) : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base font-semibold text-orange-600",
                                                            children: "Yıllık Vergi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold text-orange-600",
                                                            children: bilancoVerisi.gelirGider.yillikVergiHesaplama !== undefined ? formatTutar(bilancoVerisi.gelirGider.yillikVergiHesaplama) : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: `text-base font-semibold ${(()=>{
                                                                // Frontend'teki Net Kar hesaplaması
                                                                const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                    const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                    const tevkifat = ayVeri.tevkifat;
                                                                    return toplam + tevkifat + hesaplananToplamGider;
                                                                }, 0);
                                                                const frontendNetKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                // KAR = Frontend Net Kar - KDV - Yıllık Vergi
                                                                const kdv = bilancoVerisi.gelirGider.kdvHesaplama || 0;
                                                                const yillikVergi = bilancoVerisi.gelirGider.yillikVergiHesaplama || 0;
                                                                const kar = frontendNetKar - kdv - yillikVergi;
                                                                return kar >= 0 ? 'text-green-600' : 'text-red-600';
                                                            })()}`,
                                                            children: "KAR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-lg font-bold ${(()=>{
                                                                // Frontend'teki Net Kar hesaplaması
                                                                const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                    const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                    const tevkifat = ayVeri.tevkifat;
                                                                    return toplam + tevkifat + hesaplananToplamGider;
                                                                }, 0);
                                                                const frontendNetKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                // KAR = Frontend Net Kar - KDV - Yıllık Vergi
                                                                const kdv = bilancoVerisi.gelirGider.kdvHesaplama || 0;
                                                                const yillikVergi = bilancoVerisi.gelirGider.yillikVergiHesaplama || 0;
                                                                const kar = frontendNetKar - kdv - yillikVergi;
                                                                return kar >= 0 ? 'text-green-600' : 'text-red-600';
                                                            })()}`,
                                                            children: (()=>{
                                                                // Frontend'teki Net Kar hesaplaması
                                                                const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                    const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                    const tevkifat = ayVeri.tevkifat;
                                                                    return toplam + tevkifat + hesaplananToplamGider;
                                                                }, 0);
                                                                const frontendNetKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                // KAR = Frontend Net Kar - KDV - Yıllık Vergi
                                                                const kdv = bilancoVerisi.gelirGider.kdvHesaplama || 0;
                                                                const yillikVergi = bilancoVerisi.gelirGider.yillikVergiHesaplama || 0;
                                                                const kar = frontendNetKar - kdv - yillikVergi;
                                                                return formatTutar(kar);
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this),
                                bilancoVerisi.genel && bilancoVerisi.sirketler && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 py-4 bg-gray-50 border-b",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold",
                                                children: "Şirket Bazında Performans"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full divide-y divide-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Şirket Adı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Sefer Sayısı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Toplam MT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Toplam Gelir"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 443,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Tevkifat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Toplam Gider"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Net Kar/Zarar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Kar Marjı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "bg-white divide-y divide-gray-200",
                                                        children: bilancoVerisi.sirketler.sirketBazindaVeriler.map((sirketVeri, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-gray-50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                                                        children: [
                                                                            sirketVeri.sirket_adi,
                                                                            sirketVeri.ozelDurum && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500 mt-1",
                                                                                children: sirketVeri.ozelDurum
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                                lineNumber: 466,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 463,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                                                            children: sirketVeri.seferSayisi
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                            lineNumber: 470,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500",
                                                                        children: formatSayi(sirketVeri.toplamMT)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600",
                                                                        children: [
                                                                            formatTutar(sirketVeri.gelir + sirketVeri.kdv),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: "KDV dahil"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                                lineNumber: 479,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 477,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-yellow-600",
                                                                        children: formatTutar(sirketVeri.tevkifat || 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-600",
                                                                        children: formatTutar(sirketVeri.gider + sirketVeri.gider / 5 - sirketVeri.gider / 25)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `px-6 py-4 whitespace-nowrap text-right text-sm font-bold ${sirketVeri.gelir + sirketVeri.kdv - sirketVeri.tevkifat - (sirketVeri.gider + sirketVeri.gider / 5 - sirketVeri.gider / 25) >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                                                        children: formatTutar(sirketVeri.gelir + sirketVeri.kdv - sirketVeri.tevkifat - (sirketVeri.gider + sirketVeri.gider / 5 - sirketVeri.gider / 25))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-center text-sm font-medium",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${sirketVeri.gelir + sirketVeri.kdv - sirketVeri.tevkifat - (sirketVeri.gider + sirketVeri.gider / 5 - sirketVeri.gider / 25) >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                                            children: [
                                                                                "%",
                                                                                sirketVeri.gelir + sirketVeri.kdv > 0 ? ((sirketVeri.gelir + sirketVeri.kdv - sirketVeri.tevkifat - (sirketVeri.gider + sirketVeri.gider / 5 - sirketVeri.gider / 25)) / (sirketVeri.gelir + sirketVeri.kdv) * 100).toFixed(1) : '0.0'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                            lineNumber: 493,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                lineNumber: 431,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                bilancoVerisi.seferler.aylikDagitim.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 py-4 bg-gray-50 border-b",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold",
                                                children: "Aylık Performans"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full divide-y divide-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Ay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Sefer Sayısı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Toplam MT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Toplam Gelir"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Tevkifat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 529,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Toplam Gider"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Net Kar/Zarar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Kar Marjı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "bg-white divide-y divide-gray-200",
                                                        children: bilancoVerisi.seferler.aylikDagitim.map((ayVeri, index)=>{
                                                            const toplamGelir = ayVeri.gelir + ayVeri.kdv;
                                                            const toplamGider = ayVeri.gider + ayVeri.soforKdv + ayVeri.tevkifat;
                                                            const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                            const hesaplananNetKar = toplamGelir - ayVeri.tevkifat - hesaplananToplamGider;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-gray-50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                                                        children: getAyAdi(ayVeri.ay)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 552,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                                                            children: ayVeri.seferSayisi
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                            lineNumber: 556,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500",
                                                                        children: formatSayi(ayVeri.toplamMT)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600",
                                                                        children: [
                                                                            formatTutar(toplamGelir),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: "KDV dahil"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 563,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-yellow-600",
                                                                        children: formatTutar(ayVeri.tevkifat)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-600",
                                                                        children: formatTutar(hesaplananToplamGider)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 571,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `px-6 py-4 whitespace-nowrap text-right text-sm font-bold ${ayVeri.gelir + ayVeri.kdv - ayVeri.tevkifat - (ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25) >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                                                        children: formatTutar(ayVeri.gelir + ayVeri.kdv - ayVeri.tevkifat - (ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-6 py-4 whitespace-nowrap text-center text-sm font-medium",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${ayVeri.gelir + ayVeri.kdv - ayVeri.tevkifat - (ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25) >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                                            children: [
                                                                                "%",
                                                                                toplamGelir > 0 ? (hesaplaNetKar(ayVeri.gelir, ayVeri.kdv, ayVeri.tevkifat, ayVeri.gider) / toplamGelir * 100).toFixed(1) : '0.0'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                            lineNumber: 580,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                        lineNumber: 579,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-md p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-4",
                                            children: bilancoVerisi.genel ? 'Genel Finansal Özet' : 'Şirket Finansal Özet'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center p-4 bg-green-50 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Toplam Gelir"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold text-green-600",
                                                            children: formatTutar(bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center p-4 bg-red-50 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Toplam Gider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold text-red-600",
                                                            children: (()=>{
                                                                // Aylık performans tablosundaki Tevkifat + Toplam Gider toplamını hesapla
                                                                const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                    const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                    const tevkifat = ayVeri.tevkifat;
                                                                    return toplam + tevkifat + hesaplananToplamGider;
                                                                }, 0);
                                                                return formatTutar(aylikTevkifatVeGiderToplami);
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-center p-4 rounded ${(()=>{
                                                        // Net kar hesaplaması için doğru gider değerini kullan
                                                        const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                        const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                            const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                            const tevkifat = ayVeri.tevkifat;
                                                            return toplam + tevkifat + hesaplananToplamGider;
                                                        }, 0);
                                                        const netKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                        return netKar >= 0 ? 'bg-blue-50' : 'bg-orange-50';
                                                    })()}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                "Net ",
                                                                (()=>{
                                                                    const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                    const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                        const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                        const tevkifat = ayVeri.tevkifat;
                                                                        return toplam + tevkifat + hesaplananToplamGider;
                                                                    }, 0);
                                                                    const netKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                    return netKar >= 0 ? 'Kar' : 'Zarar';
                                                                })()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xl font-bold ${(()=>{
                                                                const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                    const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                    const tevkifat = ayVeri.tevkifat;
                                                                    return toplam + tevkifat + hesaplananToplamGider;
                                                                }, 0);
                                                                const netKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                return netKar >= 0 ? 'text-blue-600' : 'text-orange-600';
                                                            })()}`,
                                                            children: (()=>{
                                                                const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                    const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                    const tevkifat = ayVeri.tevkifat;
                                                                    return toplam + tevkifat + hesaplananToplamGider;
                                                                }, 0);
                                                                const netKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                return formatTutar(netKar);
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center p-4 bg-gray-50 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Kar Marjı"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 673,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold text-gray-600",
                                                            children: [
                                                                "%",
                                                                (()=>{
                                                                    const toplamGelir = bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0);
                                                                    const aylikTevkifatVeGiderToplami = bilancoVerisi.seferler.aylikDagitim.reduce((toplam, ayVeri)=>{
                                                                        const hesaplananToplamGider = ayVeri.gider + ayVeri.gider / 5 - ayVeri.gider / 25;
                                                                        const tevkifat = ayVeri.tevkifat;
                                                                        return toplam + tevkifat + hesaplananToplamGider;
                                                                    }, 0);
                                                                    const netKar = toplamGelir - aylikTevkifatVeGiderToplami;
                                                                    return toplamGelir > 0 ? (netKar / toplamGelir * 100).toFixed(2) : '0.00';
                                                                })()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                            lineNumber: 674,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/sirket-bilanco/page.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sirket-bilanco/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s(SirketBilanco, "GjUBpf2xFxgn36zJDKjWi/TFrSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SirketBilanco;
var _c;
__turbopack_context__.k.register(_c, "SirketBilanco");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_fc04fb7e._.js.map