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
"[project]/src/app/eski-veri-yukle/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EskiVeriYukle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function EskiVeriYukle() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedPeriod, setSelectedPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isFileSelected, setIsFileSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [excelDataBySirket, setExcelDataBySirket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showData, setShowData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sirketler, setSirketler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [sirketlerYukleniyor, setSirketlerYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Veritabanından şirket bilgilerini çekme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchSirketler = async ()=>{
            try {
                setSirketlerYukleniyor(true);
                const response = await fetch('/api/sirketler');
                if (!response.ok) {
                    throw new Error('Şirket verileri çekilemedi');
                }
                const data = await response.json();
                // Şirketleri ID'ye göre map'leyelim
                const sirketMap = {};
                data.forEach((sirket)=>{
                    const sirketId = String(sirket.sirket_id);
                    sirketMap[sirketId] = {
                        id: sirketId,
                        ad: sirket.sirket_adi || `Şirket ${sirketId}`
                    };
                });
                setSirketler(sirketMap);
            } catch (error) {
                console.error('Şirket verileri çekilirken hata oluştu:', error);
                // Hata durumunda varsayılan şirket isimleri kullanılacak
                setSirketler({
                    '1': {
                        id: '1',
                        ad: 'Şirket 1'
                    },
                    '2': {
                        id: '2',
                        ad: 'Şirket 2'
                    },
                    '3': {
                        id: '3',
                        ad: 'Şirket 3'
                    }
                });
            } finally{
                setSirketlerYukleniyor(false);
            }
        };
        fetchSirketler();
    }, []);
    const months = [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
    ];
    const periods = [
        {
            id: '1',
            name: '1-10'
        },
        {
            id: '2',
            name: '11-20'
        },
        {
            id: '3',
            name: '21-Ay Sonu'
        }
    ];
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
            setIsFileSelected(true);
            setShowData(false);
        } else {
            setFileName('');
            setIsFileSelected(false);
            setShowData(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isFileSelected || !fileInputRef.current?.files?.[0]) {
            alert('Lütfen bir dosya seçin');
            return;
        }
        const file = fileInputRef.current.files[0];
        const reader = new FileReader();
        reader.onload = (evt)=>{
            try {
                if (!evt.target?.result) return;
                const binaryStr = evt.target.result;
                const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"])(binaryStr, {
                    type: 'binary'
                });
                // Her şirket için ayrı veriler
                const dataGroupedBySirket = {};
                // Her sayfa için döngü
                workbook.SheetNames.forEach((sheetName, sheetIndex)=>{
                    // Sayfa indeksine göre şirket id'sini belirle (1-tabanlı)
                    const sirketId = String(sheetIndex + 1);
                    const worksheet = workbook.Sheets[sheetName];
                    const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                        defval: null
                    });
                    // Her satıra şirket id'si ekle
                    const dataWithCompanyId = rawData.map((row)=>({
                            ...row,
                            sirket_id: sirketId
                        }));
                    // Verileri şirket ID'sine göre gruplandır
                    const processedData = processExcelData(dataWithCompanyId);
                    // Şirket ID'sine göre veri kaydet
                    dataGroupedBySirket[sirketId] = processedData;
                });
                setExcelDataBySirket(dataGroupedBySirket);
                setShowData(true);
            } catch (error) {
                console.error('Excel dosyası okunurken hata oluştu:', error);
                alert('Excel dosyası okunurken bir hata oluştu.');
            }
        };
        reader.readAsBinaryString(file);
    };
    // Excel verilerini seferlere göre işleme fonksiyonu
    const processExcelData = (rawData)=>{
        const seferler = [];
        let currentSefer = null;
        rawData.forEach((row)=>{
            // Sıra No sütunu varsa ve değeri dolu ise, yeni sefer başlat
            const firstColumnKey = Object.keys(row)[0];
            if (row[firstColumnKey] !== null && row[firstColumnKey] !== undefined && row[firstColumnKey] !== '') {
                // Yeni sefer
                if (currentSefer) {
                    seferler.push(currentSefer);
                }
                currentSefer = {
                    seferNo: row[firstColumnKey],
                    duraklar: [
                        row
                    ],
                    tumVeriler: {
                        ...row
                    } // Ham verilerin tam kopyası
                };
            } else if (currentSefer) {
                // Mevcut sefere yeni durak ekle
                currentSefer.duraklar.push(row);
                // Eğer durakta boş olmayan değerler varsa, bunları tumVeriler'e ekle
                Object.keys(row).forEach((key)=>{
                    if (row[key] !== null && row[key] !== undefined && row[key] !== '') {
                        // Önceki değer var mı kontrol et
                        if (currentSefer.tumVeriler[key] === undefined || currentSefer.tumVeriler[key] === null || currentSefer.tumVeriler[key] === '') {
                            // Önceki değer yoksa yeni değeri ekle
                            currentSefer.tumVeriler[key] = row[key];
                        } else {
                            // Önceki değer varsa, aynı değer mi kontrol et
                            if (String(currentSefer.tumVeriler[key]) !== String(row[key])) {
                                // İki değeri birleştir - aralarına " - " ekle
                                if (!String(currentSefer.tumVeriler[key]).includes(String(row[key]))) {
                                    const combinedValue = `${currentSefer.tumVeriler[key]} - ${row[key]}`;
                                    currentSefer.tumVeriler[key] = combinedValue;
                                }
                            }
                        }
                    }
                });
            }
        });
        // Son seferi ekle
        if (currentSefer) {
            seferler.push(currentSefer);
        }
        return seferler;
    };
    // Bir tablo için sütun verilerini getirme fonksiyonu
    const getColumnValue = (sefer, columnName)=>{
        // İlk sefer için debug bilgisi
        if (sefer.seferNo === 1 && columnName === 'Şöför') {
            console.log('Excel sütun adları:', Object.keys(sefer.tumVeriler || {}));
            console.log('Sefer verileri:', sefer.tumVeriler);
        }
        // Şöför için özel işlem - araç ID'sini çıkar ve göster
        if (columnName === 'Şöför') {
            let soforDegeri = '';
            // Öncelikle Excel'deki orijinal veriyi kontrol et
            if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && sefer.tumVeriler[columnName] !== null && sefer.tumVeriler[columnName] !== '') {
                soforDegeri = sefer.tumVeriler[columnName];
            } else {
                // Kısmı eşleşme için şöför sütunu ara
                const soforMatchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>{
                    const lowerK = k.toLowerCase();
                    return lowerK.includes('şöför') || lowerK.includes('şoför') || lowerK.includes('soför') || lowerK.includes('sofor') || lowerK.includes('driver') || lowerK.includes('sürücü');
                });
                if (soforMatchingKey && sefer.tumVeriler[soforMatchingKey] !== null && sefer.tumVeriler[soforMatchingKey] !== undefined && sefer.tumVeriler[soforMatchingKey] !== '') {
                    soforDegeri = sefer.tumVeriler[soforMatchingKey];
                }
            }
            // Şöför değeri varsa, araç ID'sini vurgula
            if (soforDegeri) {
                // ID pattern'i kontrol et
                const idPattern = /[\(\[\{#]?\s*(?:ID|id|Id)?:?\s*(\d+)\s*[\)\]\}]?|[\-–]\s*(\d+)\s*$|#\s*(\d+)/;
                const idMatch = soforDegeri.match(idPattern);
                if (idMatch) {
                    const extractedId = idMatch[1] || idMatch[2] || idMatch[3];
                    // ID'yi vurgulu göster
                    const cleanName = soforDegeri.replace(/[\(\[\{].*?[\)\]\}]/g, '').replace(/[\-–]\s*\d+\s*$/g, '').replace(/\s*ID:?\s*\d+/gi, '').replace(/#\s*\d+/g, '').trim();
                    return `${cleanName} [Araç ID: ${extractedId}]`;
                }
            }
            return soforDegeri;
        }
        // Taşıma Fiyatı için özel işlem
        if (columnName === 'Birim Fiyatı') {
            return getTasimaFiyati(sefer);
        }
        // Araç Tipi için özel işlem - MT değerine göre belirle
        if (columnName === 'Araç Tipi') {
            // Önce MT değerini al
            let mtValue = null;
            // MT sütununu bul
            if (sefer.tumVeriler && sefer.tumVeriler['MT'] !== undefined && sefer.tumVeriler['MT'] !== null && sefer.tumVeriler['MT'] !== '') {
                mtValue = sefer.tumVeriler['MT'];
            } else {
                // Kısmı eşleşme için MT sütunu ara
                const mtMatchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>k.toLowerCase().includes('mt') || k.toLowerCase().includes('tonaj') || k.toLowerCase().includes('ağırlık') || k.toLowerCase().includes('agirlik'));
                if (mtMatchingKey && sefer.tumVeriler[mtMatchingKey] !== null && sefer.tumVeriler[mtMatchingKey] !== undefined && sefer.tumVeriler[mtMatchingKey] !== '') {
                    mtValue = sefer.tumVeriler[mtMatchingKey];
                }
            }
            // MT değeri varsa buna göre araç tipini belirle
            if (mtValue !== null && mtValue !== undefined && mtValue !== '') {
                try {
                    // MT değerini sayıya çevir
                    const mtNumeric = parseFloat(mtValue.toString().replace(/[^\d.,]/g, '').replace(',', '.'));
                    if (!isNaN(mtNumeric)) {
                        if (mtNumeric < 23) {
                            return 'Kırkayak';
                        } else {
                            return 'Tır';
                        }
                    }
                } catch (e) {
                    console.error('MT değeri işlenirken hata:', e);
                }
            }
            // MT değeri yoksa veya işlenemediyse, Excel'den direkt Araç Tipi değerini al
            if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && sefer.tumVeriler[columnName] !== null && sefer.tumVeriler[columnName] !== '') {
                return sefer.tumVeriler[columnName];
            }
            // Kısmı eşleşme için Araç Tipi sütunu ara
            const aracTipiMatchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>k.toLowerCase().includes('araç') && k.toLowerCase().includes('tip') || k.toLowerCase().includes('arac') && k.toLowerCase().includes('tip') || k.toLowerCase().includes('vehicle') && k.toLowerCase().includes('type'));
            if (aracTipiMatchingKey && sefer.tumVeriler[aracTipiMatchingKey] !== null && sefer.tumVeriler[aracTipiMatchingKey] !== undefined && sefer.tumVeriler[aracTipiMatchingKey] !== '') {
                return sefer.tumVeriler[aracTipiMatchingKey];
            }
            return '';
        }
        // İrsaliye Tarihi için özel işlem
        if (columnName === 'İrsaliye Tarihi') {
            // Öncelikle Excel'deki orijinal veriyi kontrol et
            let tarihDegeri = '';
            if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && sefer.tumVeriler[columnName] !== null && sefer.tumVeriler[columnName] !== '') {
                tarihDegeri = sefer.tumVeriler[columnName];
            } else {
                // Kısmı eşleşme için (başlık farklı olabilir)
                const matchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>k.toLowerCase().includes(columnName.toLowerCase()));
                if (matchingKey && sefer.tumVeriler[matchingKey] !== null && sefer.tumVeriler[matchingKey] !== undefined && sefer.tumVeriler[matchingKey] !== '') {
                    tarihDegeri = sefer.tumVeriler[matchingKey];
                }
            }
            // Eğer tarih değeri varsa, GG AA YYYY formatına çevir
            if (tarihDegeri) {
                try {
                    // Tarih formatını kontrol et ve dönüştür
                    const cleanDateStr = tarihDegeri.toString().trim();
                    // Nokta veya slash ile ayrılmış tarih formatı
                    const dateParts = cleanDateStr.split(/[\/\.]/);
                    if (dateParts.length >= 3) {
                        const day = parseInt(dateParts[0], 10);
                        const month = parseInt(dateParts[1], 10);
                        let year = parseInt(dateParts[2], 10);
                        // 2 haneli yıl kontrolü
                        if (year < 100) {
                            year += 2000; // 23 -> 2023
                        }
                        // Geçerli tarih değerleri kontrolü
                        if (!isNaN(day) && !isNaN(month) && !isNaN(year) && day >= 1 && day <= 31 && month >= 1 && month <= 12) {
                            // GG AA YYYY formatına dönüştür
                            return `${day < 10 ? '0' + day : day} ${month < 10 ? '0' + month : month} ${year}`;
                        }
                    }
                    // Eğer dönüştürme yapılamazsa, orijinal değeri döndür
                    return tarihDegeri;
                } catch (e) {
                    console.error('Tarih dönüştürme hatası:', e);
                    return tarihDegeri;
                }
            }
            return '';
        }
        // Diğer sütunlar için normal işlem
        // Öncelikle Excel'deki orijinal veriyi kontrol et
        if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && sefer.tumVeriler[columnName] !== null && sefer.tumVeriler[columnName] !== '') {
            return sefer.tumVeriler[columnName];
        }
        // Kısmı eşleşme için (başlık farklı olabilir)
        let matchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>k.toLowerCase().includes(columnName.toLowerCase()));
        // Şöför için özel arama - daha esnek
        if (!matchingKey && columnName.toLowerCase().includes('şöför')) {
            matchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>{
                const lowerK = k.toLowerCase();
                return lowerK.includes('şöför') || lowerK.includes('şoför') || lowerK.includes('soför') || lowerK.includes('sofor') || lowerK.includes('driver') || lowerK.includes('sürücü');
            });
            // Şöför Ücreti için ek kontrol
            if (columnName.toLowerCase().includes('ücret') && !columnName.toLowerCase().includes('fatura')) {
                matchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>{
                    const lowerK = k.toLowerCase();
                    return (lowerK.includes('şöför') || lowerK.includes('şoför') || lowerK.includes('soför') || lowerK.includes('sofor')) && (lowerK.includes('ücret') || lowerK.includes('ucret')) && !lowerK.includes('fatura');
                });
            }
            // Şöför Fatura Ücreti için ek kontrol
            if (columnName.toLowerCase().includes('fatura')) {
                matchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>{
                    const lowerK = k.toLowerCase();
                    return (lowerK.includes('şöför') || lowerK.includes('şoför') || lowerK.includes('soför') || lowerK.includes('sofor')) && lowerK.includes('fatura');
                });
            }
        }
        if (matchingKey && sefer.tumVeriler[matchingKey] !== null && sefer.tumVeriler[matchingKey] !== undefined && sefer.tumVeriler[matchingKey] !== '') {
            return sefer.tumVeriler[matchingKey];
        }
        return '';
    };
    // Taşıma fiyatını alma fonksiyonu
    const getTasimaFiyati = (sefer)=>{
        if (!sefer.tumVeriler) return '';
        // Önce Ton/Fiyat sütununu bul
        let tonFiyatValue = null;
        // Tam eşleşme ara
        if (sefer.tumVeriler['Ton/Fiyat']) {
            tonFiyatValue = sefer.tumVeriler['Ton/Fiyat'];
        } else {
            // Kısmi eşleşme ara
            const matchingKey = Object.keys(sefer.tumVeriler).find((k)=>{
                const lowerKey = k.toLowerCase();
                return lowerKey.includes('ton') && lowerKey.includes('fiyat') || lowerKey.includes('ton/fiyat') || lowerKey.includes('ton-fiyat') || lowerKey.includes('birim') && lowerKey.includes('fiyat');
            });
            if (matchingKey) {
                tonFiyatValue = sefer.tumVeriler[matchingKey];
            }
        }
        // Ton/Fiyat değeri varsa onu kullan
        if (tonFiyatValue !== null && tonFiyatValue !== undefined && tonFiyatValue !== '') {
            const valueStr = tonFiyatValue.toString().trim();
            // Eğer değer birleştirilmişse (örn: "0 - 21888", "13600 - 113468")
            if (valueStr.includes(' - ')) {
                const parts = valueStr.split(' - ');
                // Sıfır olmayan ilk değeri bul
                for (const part of parts){
                    const cleanPart = part.trim();
                    const numValue = parseFloat(cleanPart.replace(/[^\d.,]/g, '').replace(',', '.'));
                    if (!isNaN(numValue) && numValue > 0) {
                        return cleanPart;
                    }
                }
                // Hiç sıfır olmayan değer yoksa boş döndür
                return '';
            }
            // Tek değerse, sıfır değilse göster
            const numValue = parseFloat(valueStr.replace(/[^\d.,]/g, '').replace(',', '.'));
            if (!isNaN(numValue) && numValue > 0) {
                return valueStr;
            }
        }
        // Ton/Fiyat bulunamazsa, genel taşıma fiyatı sütunlarını ara
        const fiyatKeys = Object.keys(sefer.tumVeriler).filter((key)=>key.toLowerCase().includes('taşıma') && key.toLowerCase().includes('fiyat') || key.toLowerCase().includes('tasima') && key.toLowerCase().includes('fiyat') || key.toLowerCase().includes('birim') && key.toLowerCase().includes('fiyat') || key.toLowerCase().includes('transport') && key.toLowerCase().includes('price'));
        if (fiyatKeys.length > 0) {
            const fiyatValue = sefer.tumVeriler[fiyatKeys[0]];
            if (fiyatValue !== null && fiyatValue !== undefined && fiyatValue !== '') {
                const valueStr = fiyatValue.toString().trim();
                // Eğer değer birleştirilmişse
                if (valueStr.includes(' - ')) {
                    const parts = valueStr.split(' - ');
                    // Sıfır olmayan ilk değeri bul
                    for (const part of parts){
                        const cleanPart = part.trim();
                        const numValue = parseFloat(cleanPart.replace(/[^\d.,]/g, '').replace(',', '.'));
                        if (!isNaN(numValue) && numValue > 0) {
                            return cleanPart;
                        }
                    }
                    return '';
                }
                // Tek değerse, sıfır değilse göster
                const numValue = parseFloat(valueStr.replace(/[^\d.,]/g, '').replace(',', '.'));
                if (!isNaN(numValue) && numValue > 0) {
                    return valueStr;
                }
            }
        }
        return '';
    };
    // Şirket adını ID'den alma fonksiyonu
    const getSirketAdi = (sirketId)=>{
        if (sirketler[sirketId]) {
            return sirketler[sirketId].ad;
        }
        return `Şirket ${sirketId}`;
    };
    // Tablo oluşturma komponenti
    const TableForCompany = ({ sirketId, data })=>{
        const sirketAdi = getSirketAdi(sirketId);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg border border-gray-200 w-full mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6 text-center text-gray-900",
                    children: sirketAdi
                }, void 0, false, {
                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                    lineNumber: 548,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full bg-white border border-gray-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-16 text-gray-700 text-sm",
                                            children: "Sıra No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm",
                                            children: "İrsaliye Tarihi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm",
                                            children: "İrsaliye Numarası"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-32 text-gray-700 text-sm",
                                            children: "Çıkış Yeri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-40 text-gray-700 text-sm",
                                            children: "Tahliye Edilen Firma"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 557,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-32 text-gray-700 text-sm",
                                            children: "Tahliye Yeri/Tesisi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-24 text-gray-700 text-sm",
                                            children: "Tonaj/Kg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm",
                                            children: "Araç Tipi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-16 text-gray-700 text-sm",
                                            children: "MT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-24 text-gray-700 text-sm",
                                            children: "Birim Fiyatı"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-32 text-gray-700 text-sm",
                                            children: "Şöför"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-24 text-gray-700 text-sm",
                                            children: "Şöför Ücreti"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm",
                                            children: "Şöför Fatura Ücreti"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data.map((sefer, index)=>{
                                    const siraNo = sefer.seferNo;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: index % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: siraNo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'İrsaliye Tarihi')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'İrsaliye Numarası')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Çıkış Yeri')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 577,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Tahliye Edilen Firma')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Tahliye Yeri/Tesisi')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Tonaj/Kg')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 580,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Araç Tipi')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 581,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'MT')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 582,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Birim Fiyatı')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 583,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Şöför')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Şöför Ücreti')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 585,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-gray-200 text-gray-900 text-sm",
                                                children: getColumnValue(sefer, 'Şöför Fatura Ücreti')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                lineNumber: 568,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                    lineNumber: 549,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
            lineNumber: 547,
            columnNumber: 7
        }, this);
    };
    const browseFile = ()=>{
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            // Excel dosyası kontrolü
            if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
                // fileInputRef'i güncelle ki handleSubmit fonksiyonu bu dosyayı okuyabilsin
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                if (fileInputRef.current) {
                    fileInputRef.current.files = dataTransfer.files;
                }
                setFileName(file.name);
                setIsFileSelected(true);
                setShowData(false);
                // Otomatik olarak dosyayı görüntüle
                const reader = new FileReader();
                reader.onload = (evt)=>{
                    try {
                        if (!evt.target?.result) return;
                        const binaryStr = evt.target.result;
                        const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"])(binaryStr, {
                            type: 'binary'
                        });
                        // Her şirket için ayrı veriler
                        const dataGroupedBySirket = {};
                        // Her sayfa için döngü
                        workbook.SheetNames.forEach((sheetName, sheetIndex)=>{
                            // Sayfa indeksine göre şirket id'sini belirle (1-tabanlı)
                            const sirketId = String(sheetIndex + 1);
                            const worksheet = workbook.Sheets[sheetName];
                            const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                                defval: null
                            });
                            // Her satıra şirket id'si ekle
                            const dataWithCompanyId = rawData.map((row)=>({
                                    ...row,
                                    sirket_id: sirketId
                                }));
                            // Verileri şirket ID'sine göre gruplandır
                            const processedData = processExcelData(dataWithCompanyId);
                            // Şirket ID'sine göre veri kaydet
                            dataGroupedBySirket[sirketId] = processedData;
                        });
                        setExcelDataBySirket(dataGroupedBySirket);
                        setShowData(true);
                    } catch (error) {
                        console.error('Excel dosyası okunurken hata oluştu:', error);
                        alert('Excel dosyası okunurken bir hata oluştu.');
                    }
                };
                reader.readAsBinaryString(file);
            } else {
                alert('Lütfen Excel dosyası (.xlsx veya .xls) seçin');
            }
        }
    };
    const handleSaveData = async ()=>{
        if (!selectedMonth || !selectedPeriod) {
            alert('Lütfen ay ve dönem seçin');
            return;
        }
        if (!excelDataBySirket || Object.keys(excelDataBySirket).length === 0) {
            alert('Kaydedilecek veri bulunamadı');
            return;
        }
        setIsSaving(true);
        try {
            const response = await fetch('/api/eski-veri-yukle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ay: months.indexOf(selectedMonth) + 1,
                    donem: parseInt(selectedPeriod),
                    seferler: excelDataBySirket
                })
            });
            if (response.ok) {
                const result = await response.json();
                // Başarı mesajını göster
                let mesaj = `Başarılı! ${result.message}`;
                // Eğer hatalar varsa, detayları göster
                if (result.hatalar && result.hatalar.length > 0) {
                    mesaj += '\n\nHata Detayları:\n';
                    result.hatalar.forEach((hata, index)=>{
                        mesaj += `${index + 1}. ${hata}\n`;
                    });
                }
                alert(mesaj);
                setShowData(false);
                setIsFileSelected(false);
                setFileName('');
                setSelectedMonth('');
                setSelectedPeriod('');
                setExcelDataBySirket({});
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                const errorData = await response.json();
                alert(`Hata: ${errorData.error || 'Bilinmeyen hata'}`);
            }
        } catch (error) {
            console.error('Veri kaydedilirken hata oluştu:', error);
            alert('Veri kaydedilirken bir hata oluştu');
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: "Eski Veri Yükle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 752,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors",
                                    children: "← Ana Menü"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 753,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                            lineNumber: 751,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg p-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-6 text-gray-900",
                                    children: "Excel Dosyası Yükle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 763,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-4",
                                    children: "Excel dosyasında 3 sayfa olmalıdır: 1. sayfa Şirket 1, 2. sayfa Şirket 2, 3. sayfa Şirket 3 için seferler."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 764,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Ay Seçin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedMonth,
                                                            onChange: (e)=>setSelectedMonth(e.target.value),
                                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Ay seçin..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 21
                                                                }, this),
                                                                months.map((month, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: month,
                                                                        children: month
                                                                    }, index, false, {
                                                                        fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                                        lineNumber: 783,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Dönem Seçin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedPeriod,
                                                            onChange: (e)=>setSelectedPeriod(e.target.value),
                                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Dönem seçin..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                                    lineNumber: 800,
                                                                    columnNumber: 21
                                                                }, this),
                                                                periods.map((period)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: period.id,
                                                                        children: period.name
                                                                    }, period.id, false, {
                                                                        fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                            lineNumber: 794,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer",
                                            onDragOver: handleDragOver,
                                            onDrop: handleDrop,
                                            onClick: browseFile,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-4xl text-gray-400",
                                                            children: "📁"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-medium text-gray-700",
                                                                    children: fileName || 'Excel dosyasını buraya sürükleyin veya tıklayın'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                                    lineNumber: 820,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500 mt-2",
                                                                    children: "Desteklenen formatlar: .xlsx, .xls"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                                    lineNumber: 823,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                            lineNumber: 819,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: fileInputRef,
                                                    type: "file",
                                                    accept: ".xlsx,.xls",
                                                    onChange: handleFileChange,
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                    lineNumber: 829,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 811,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: !isFileSelected,
                                                className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                                                children: "Dosyayı Görüntüle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 839,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 768,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                            lineNumber: 762,
                            columnNumber: 11
                        }, this),
                        showData && Object.keys(excelDataBySirket).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900",
                                            children: [
                                                "Veri Önizleme (",
                                                Object.values(excelDataBySirket).reduce((total, seferler)=>total + seferler.length, 0),
                                                " toplam sefer)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 855,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveData,
                                            disabled: isSaving,
                                            className: "px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                                            children: isSaving ? 'Kaydediliyor...' : 'Verileri Kaydet'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                    lineNumber: 854,
                                    columnNumber: 15
                                }, this),
                                Object.entries(excelDataBySirket).map(([sirketId, seferler])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableForCompany, {
                                        sirketId: sirketId,
                                        data: seferler
                                    }, sirketId, false, {
                                        fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                                        lineNumber: 869,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                            lineNumber: 853,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                    lineNumber: 749,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/eski-veri-yukle/page.tsx",
        lineNumber: 743,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e99e1d3c._.js.map