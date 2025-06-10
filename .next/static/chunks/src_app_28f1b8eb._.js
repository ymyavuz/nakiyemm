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
"[project]/src/app/veri-yukle/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VeriYukle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function VeriYukle() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedPeriod, setSelectedPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isFileSelected, setIsFileSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [excelDataBySirket, setExcelDataBySirket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showData, setShowData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [sirketler, setSirketler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sirketlerYukleniyor, setSirketlerYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Veritabanından şirket bilgilerini çekme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VeriYukle.useEffect": ()=>{
            const fetchSirketler = {
                "VeriYukle.useEffect.fetchSirketler": async ()=>{
                    try {
                        setSirketlerYukleniyor(true);
                        const response = await fetch('/api/sirketler');
                        if (!response.ok) {
                            throw new Error('Şirket verileri çekilemedi');
                        }
                        const data = await response.json();
                        console.log('API Yanıtı:', JSON.stringify(data));
                        // Şirketleri ID'ye göre map'leyelim
                        const sirketMap = {};
                        data.forEach({
                            "VeriYukle.useEffect.fetchSirketler": (sirket)=>{
                                console.log('Şirket verisi:', JSON.stringify(sirket));
                                // API'den gelen şirket ID'si muhtemelen sayı olarak gelecek
                                // Ama biz string key kullanıyoruz, o yüzden string'e dönüştürelim
                                const sirketId = String(sirket.sirket_id);
                                sirketMap[sirketId] = {
                                    id: sirketId,
                                    ad: sirket.sirket_adi || `Şirket ${sirketId}`
                                };
                            }
                        }["VeriYukle.useEffect.fetchSirketler"]);
                        console.log('Oluşturulan şirket haritası:', sirketMap);
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
                }
            }["VeriYukle.useEffect.fetchSirketler"];
            fetchSirketler();
        }
    }["VeriYukle.useEffect"], []);
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
            setShowData(false); // Yeni dosya seçildiğinde veri görüntüsünü sıfırla
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
                const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"])(binaryStr, {
                    type: 'binary'
                });
                // Her şirket için ayrı veriler
                const dataGroupedBySirket = {};
                // Her sayfa için döngü
                workbook.SheetNames.forEach((sheetName, sheetIndex)=>{
                    // Sayfa indeksine göre şirket id'sini belirle (1-tabanlı)
                    const sirketId = String(sheetIndex + 1);
                    const worksheet = workbook.Sheets[sheetName];
                    const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
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
                        const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"])(binaryStr, {
                            type: 'binary'
                        });
                        // Her şirket için ayrı veriler
                        const dataGroupedBySirket = {};
                        // Her sayfa için döngü
                        workbook.SheetNames.forEach((sheetName, sheetIndex)=>{
                            // Sayfa indeksine göre şirket id'sini belirle (1-tabanlı)
                            const sirketId = String(sheetIndex + 1);
                            const worksheet = workbook.Sheets[sheetName];
                            const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
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
                alert('Lütfen sadece Excel dosyası (.xlsx veya .xls) yükleyin');
            }
        }
    };
    // Excel verilerini seferlere göre işleme fonksiyonu
    const processExcelData = (rawData)=>{
        const seferler = [];
        let currentSefer = null;
        rawData.forEach((row)=>{
            // Sıra No sütunu varsa ve değeri dolu ise, yeni sefer başlat
            // Excel dosyasındaki ilk sütunun adını dinamik olarak alıyoruz
            // Örneğin "Sıra No" veya "1" gibi olabilir
            const firstColumnKey = Object.keys(row)[0];
            if (row[firstColumnKey] !== null && row[firstColumnKey] !== undefined && row[firstColumnKey] !== '') {
                // Yeni sefer
                if (currentSefer) {
                    seferler.push(currentSefer);
                }
                // ÖNEMLİ: tumVeriler, Excel'deki ham verileri doğrudan içeren bir objedir
                // Değerleri birleştirme veya manipüle etme işlemi yapılmıyor
                currentSefer = {
                    seferNo: row[firstColumnKey],
                    duraklar: [
                        row
                    ],
                    tumVeriler: {
                        ...row
                    } // Ham verilerin tam kopyası
                };
                // Debug log
                console.log('Yeni sefer oluşturuldu:', currentSefer.seferNo, 'İlk değerler:', Object.keys(currentSefer.tumVeriler).map((k)=>`${k}: ${currentSefer.tumVeriler[k]}`));
            } else if (currentSefer) {
                // Mevcut sefere yeni durak ekle
                currentSefer.duraklar.push(row);
                // ÖNEMLİ: Eğer durakta boş olmayan değerler varsa, bunları tumVeriler'e ekle
                // Ancak var olan değerleri ASLA değiştirme - bu kritik!
                Object.keys(row).forEach((key)=>{
                    if (row[key] !== null && row[key] !== undefined && row[key] !== '') {
                        // Önceki değer var mı kontrol et
                        if (currentSefer.tumVeriler[key] === undefined || currentSefer.tumVeriler[key] === null || currentSefer.tumVeriler[key] === '') {
                            // Önceki değer yoksa yeni değeri ekle
                            currentSefer.tumVeriler[key] = row[key];
                            console.log(`Yeni durak için "${key}" değeri eklendi:`, row[key]);
                        } else {
                            // Önceki değer varsa, aynı değer mi kontrol et
                            if (String(currentSefer.tumVeriler[key]) !== String(row[key])) {
                                console.log(`UYARI: Durak için "${key}" değeri farklı:`, `Önceki: "${currentSefer.tumVeriler[key]}", `, `Yeni: "${row[key]}"`);
                                // İki değeri birleştir - aralarına " - " ekle
                                if (!String(currentSefer.tumVeriler[key]).includes(String(row[key]))) {
                                    const combinedValue = `${currentSefer.tumVeriler[key]} - ${row[key]}`;
                                    console.log(`İki değer birleştiriliyor: "${combinedValue}"`);
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
        const matchingKey = Object.keys(sefer.tumVeriler || {}).find((k)=>k.toLowerCase().includes(columnName.toLowerCase()));
        if (matchingKey && sefer.tumVeriler[matchingKey] !== null && sefer.tumVeriler[matchingKey] !== undefined && sefer.tumVeriler[matchingKey] !== '') {
            return sefer.tumVeriler[matchingKey];
        }
        return '';
    };
    // Şirket adını ID'den alma fonksiyonu
    const getSirketAdi = (sirketId)=>{
        console.log('getSirketAdi çağrıldı. ID:', sirketId, 'Mevcut şirketler:', sirketler);
        // ID'yi sayıya çevir çünkü veritabanımızda ID'ler sayı olarak saklanıyor
        const numericId = Number(sirketId);
        // Şirket bilgilerini kontrol et
        if (sirketler[sirketId]) {
            const sirketAdi = sirketler[sirketId].ad;
            console.log(`ID ${sirketId} için şirket adı:`, sirketAdi);
            return sirketAdi;
        }
        console.log(`ID ${sirketId} için şirket bilgisi bulunamadı`);
        return `Şirket ${sirketId}`;
    };
    // Tablo oluşturma komponenti
    const TableForCompany = ({ sirketId, data })=>{
        // Şirket adını al ve kontrol et
        const sirketAdi = getSirketAdi(sirketId);
        console.log(`TableForCompany: sirketId=${sirketId}, sirketAdi=${sirketAdi}`);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[var(--card-bg)] p-6 rounded-lg border border-[var(--card-border)] w-full mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6 text-center",
                    children: sirketAdi
                }, void 0, false, {
                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full bg-[var(--card-bg)] border border-[var(--nav-border)] rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-[var(--nav-bg)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-16",
                                            children: "Sıra No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-28",
                                            children: "İrsaliye Numarası"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-56",
                                            children: "İrsaliye Tarihi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-24",
                                            children: "Kalkış Saati"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-24",
                                            children: "Varış Saati"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-32",
                                            children: "Şoför"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-32",
                                            children: "Çıkış Yeri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-40",
                                            children: "Tahliye Edilen Firma"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-32",
                                            children: "Tahliye Yeri/Fırın"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-24",
                                            children: "Tonaj/Kg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-28",
                                            children: "Araç Tipi Tlr/K.Ayak"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-16",
                                            children: "MT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-24",
                                            children: "Ton/Fiyat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-24",
                                            children: "Taşıma Fiyatı"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2 text-left border-b border-[var(--nav-border)] w-32",
                                            children: "Açıklama"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data.map((sefer, index)=>{
                                    // İlk sütun (Sıra No) her zaman sefer numarası olacak
                                    const siraNo = sefer.seferNo;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: index % 2 === 0 ? 'bg-[var(--background)]' : '',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: siraNo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'İrsaliye Numarası')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-nowrap",
                                                children: getColumnValue(sefer, 'İrsaliye Tarihi')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Kalkış Saati')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Varış Saati')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Şoför')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Çıkış Yeri')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Tahliye Edilen Firma')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Tahliye Yeri/Fırın')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Tonaj/Kg')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Araç Tipi Tlr/K.Ayak')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'MT')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Ton/Fiyat')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Taşıma Fiyatı')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal",
                                                children: getColumnValue(sefer, 'Açıklama')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 451,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/veri-yukle/page.tsx",
            lineNumber: 407,
            columnNumber: 7
        }, this);
    };
    // Verileri kaydetme fonksiyonu
    const handleSaveData = async ()=>{
        if (!selectedMonth || !selectedPeriod) {
            alert('Lütfen ay ve dönem seçin');
            return;
        }
        // Ay indeksini bulalım (1-12 arası)
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
        const ayIndex = months.indexOf(selectedMonth) + 1; // 1-12 arası
        // Dönem değerini hesaplayalım (1-3 arası)
        let donemValue = 0;
        switch(selectedPeriod){
            case '1-10':
                donemValue = 1;
                break;
            case '11-20':
                donemValue = 2;
                break;
            case '21-Ay Sonu':
                donemValue = 3;
                break;
            default:
                donemValue = 0;
        }
        // Kaydetmeden önce son kontrol
        if (ayIndex < 1 || donemValue < 1) {
            alert('Geçersiz ay veya dönem seçimi');
            return;
        }
        try {
            setIsSaving(true);
            // Veri kontrolü ve debug
            console.log('Excel verilerini kontrol ediyorum...');
            // Tüm verilerin doğru formatını sağla
            const optimizedData = {};
            // Her şirket için
            Object.entries(excelDataBySirket).forEach(([sirketId, seferler])=>{
                optimizedData[sirketId] = seferler.map((sefer)=>{
                    // tumVeriler doğrudan kullan, durakları birleştirme işlemine gerek yok
                    // böylece Excel'deki orijinal değerler korunacak
                    return {
                        seferNo: sefer.seferNo,
                        tumVeriler: sefer.tumVeriler
                    };
                });
            });
            // Debug log
            console.log('API\'ye gönderilecek veri örneği:', Object.keys(optimizedData).length > 0 ? JSON.stringify(optimizedData[Object.keys(optimizedData)[0]][0]) : 'Veri yok');
            // Excel verilerini API'ye gönder
            const response = await fetch('/api/seferler/kaydet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ay: ayIndex,
                    donem: donemValue,
                    seferler: optimizedData // Burada optimizedData kullanıyoruz
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Veriler kaydedilirken bir hata oluştu');
            }
            const result = await response.json();
            alert('Veriler başarıyla kaydedildi! Toplam ' + result.kaydedilenSeferSayisi + ' sefer kaydedildi.');
            // Başarılı kayıttan sonra formu sıfırla
            setShowData(false);
            setIsFileSelected(false);
            setFileName('');
            setExcelDataBySirket({});
            setSelectedMonth('');
            setSelectedPeriod('');
        } catch (error) {
            console.error('Veri kaydetme hatası:', error);
            alert('Veriler kaydedilirken bir hata oluştu: ' + error.message);
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--background)] text-[var(--foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/veri-yukle/page.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-[var(--foreground)] opacity-60 hover:opacity-100",
                            children: "Ana Sayfa"
                        }, void 0, false, {
                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                            lineNumber: 571,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-8",
                        children: "Veri Yükleme"
                    }, void 0, false, {
                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this),
                    !showData ? // Dosya yükleme alanı - sadece veriler gösterilmediğinde
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--card-bg)] p-6 rounded-lg border border-[var(--card-border)] max-w-3xl mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-2 border-dashed border-[var(--nav-border)] rounded-lg p-8 text-center",
                            onDragOver: handleDragOver,
                            onDrop: handleDrop,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    id: "fileUpload",
                                    ref: fileInputRef,
                                    className: "hidden",
                                    accept: ".xlsx,.xls",
                                    onChange: handleFileChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this),
                                !isFileSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4",
                                            children: "Excel dosyanızı buraya sürükleyin veya yükleyin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: browseFile,
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                            children: "Dosya Seç"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-gray-500 dark:text-gray-400",
                                            children: "(Sadece .xlsx veya .xls uzantılı dosyalar)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 606,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-8 h-8 text-green-500 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: browseFile,
                                                    className: "px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600",
                                                    children: "Dosyayı Değiştir"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        if (fileInputRef.current?.files?.[0]) {
                                                            const e = {
                                                                preventDefault: ()=>{}
                                                            };
                                                            handleSubmit(e);
                                                        } else {
                                                            alert('Lütfen bir dosya seçin');
                                                        }
                                                    },
                                                    className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                                    children: "Dosyayı Görüntüle"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                    lineNumber: 611,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/veri-yukle/page.tsx",
                            lineNumber: 581,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this) : // Dönem seçimi ve veriler - sadece veriler gösterildiğinde
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--card-bg)] p-6 rounded-lg border border-[var(--card-border)] max-w-3xl mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-medium mb-4",
                                        children: "Dönem Seçimi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "month",
                                                        className: "block mb-2 text-sm font-medium",
                                                        children: "Ay Seçin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "month",
                                                        className: "w-full p-3 border border-[var(--nav-border)] rounded-lg bg-[var(--background)] focus:ring-2 focus:ring-blue-500",
                                                        value: selectedMonth,
                                                        onChange: (e)=>setSelectedMonth(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Ay Seçin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 21
                                                            }, this),
                                                            months.map((month, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: month,
                                                                    children: month
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                                    lineNumber: 663,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "period",
                                                        className: "block mb-2 text-sm font-medium",
                                                        children: "Dönem Seçin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "period",
                                                        className: "w-full p-3 border border-[var(--nav-border)] rounded-lg bg-[var(--background)] focus:ring-2 focus:ring-blue-500",
                                                        value: selectedPeriod,
                                                        onChange: (e)=>setSelectedPeriod(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Dönem Seçin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 21
                                                            }, this),
                                                            periods.map((period)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: period.name,
                                                                    children: period.name
                                                                }, period.id, false, {
                                                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                                    lineNumber: 682,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 670,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowData(false);
                                                    setIsFileSelected(false);
                                                    setFileName('');
                                                    setExcelDataBySirket({});
                                                },
                                                className: "px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 mr-3",
                                                children: "Yeni Dosya Yükle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 690,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSaveData,
                                                className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                                disabled: isSaving,
                                                children: isSaving ? 'Kaydediliyor...' : 'Verileri Kaydet'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/veri-yukle/page.tsx",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this),
                            Object.entries(excelDataBySirket).map(([sirketId, seferVerileri])=>seferVerileri.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableForCompany, {
                                    sirketId: sirketId,
                                    data: seferVerileri
                                }, sirketId, false, {
                                    fileName: "[project]/src/app/veri-yukle/page.tsx",
                                    lineNumber: 716,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/veri-yukle/page.tsx",
                        lineNumber: 647,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/veri-yukle/page.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/veri-yukle/page.tsx",
        lineNumber: 563,
        columnNumber: 5
    }, this);
}
_s(VeriYukle, "VlDgoRxX977u8y+yKvvrjNeRrk8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = VeriYukle;
var _c;
__turbopack_context__.k.register(_c, "VeriYukle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_28f1b8eb._.js.map