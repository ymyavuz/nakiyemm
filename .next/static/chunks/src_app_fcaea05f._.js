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
"[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AracMuhasebeYonetimi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Sabit başlangıç borç verileri
const BASLANGIC_BORCLAR = [
    {
        sofor_adi: 'Tahsin',
        plaka: '-',
        baslangic_borc: 893587
    },
    {
        sofor_adi: 'Ökkeş',
        plaka: '-',
        baslangic_borc: 940444
    },
    {
        sofor_adi: 'İbrahim Halil Kalkan',
        plaka: '34 CAC 05',
        baslangic_borc: 1031211
    },
    {
        sofor_adi: 'İsmail Kaymaz (Şükrü)',
        plaka: '34 MC 1034',
        baslangic_borc: 1143746
    },
    {
        sofor_adi: 'Ali Kalkan',
        plaka: '34 FC 1458',
        baslangic_borc: 1096967
    },
    {
        sofor_adi: 'Bilal Kalkan',
        plaka: '34 TAU 26',
        baslangic_borc: 1739939
    },
    {
        sofor_adi: 'Mehmet Kalkan (Durdu)',
        plaka: '34 CAC 06',
        baslangic_borc: 1790896
    },
    {
        sofor_adi: 'Seyhan Kalkan',
        plaka: '34 PAU 12',
        baslangic_borc: 1719341
    }
];
function AracMuhasebeYonetimi() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [kayitlar, setKayitlar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [araclar, setAraclar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [yukleniyor, setYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hata, setHata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [odemeKayitlari, setOdemeKayitlari] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [odemelerYukleniyor, setOdemelerYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Yeni kayıt için state
    const [yeniKayit, setYeniKayit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        arac_id: '',
        tutar: ''
    });
    // Yeni ödeme için state
    const [yeniOdeme, setYeniOdeme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sofor_adi: '',
        tutar: '',
        aciklama: ''
    });
    // Ödeme modalı state
    const [odemeModalAcik, setOdemeModalAcik] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AracMuhasebeYonetimi.useEffect": ()=>{
            kayitlariYukle();
            araclariYukle();
            odemeleriYukle();
        }
    }["AracMuhasebeYonetimi.useEffect"], []);
    // Ödemeleri veritabanından yükle
    const odemeleriYukle = async ()=>{
        setOdemelerYukleniyor(true);
        try {
            const response = await fetch('/api/sofor-odemeler');
            if (response.ok) {
                const data = await response.json();
                setOdemeKayitlari(data);
            } else {
                console.error('Ödemeler yüklenirken hata oluştu');
            }
        } catch (error) {
            console.error('Ödemeler yükleme hatası:', error);
        } finally{
            setOdemelerYukleniyor(false);
        }
    };
    // Borç hesaplama fonksiyonu
    const hesaplaBorcDurumu = (soforAdi)=>{
        const baslangicBorc = BASLANGIC_BORCLAR.find((b)=>b.sofor_adi === soforAdi)?.baslangic_borc || 0;
        const toplamOdeme = odemeKayitlari.filter((odeme)=>odeme.sofor_adi === soforAdi).reduce((toplam, odeme)=>toplam + odeme.tutar, 0);
        return {
            baslangic_borc: baslangicBorc,
            toplam_odeme: toplamOdeme,
            kalan_borc: baslangicBorc - toplamOdeme
        };
    };
    // Kayıtları yükle
    const kayitlariYukle = async ()=>{
        setYukleniyor(true);
        try {
            const response = await fetch('/api/arac-muhasebe');
            if (response.ok) {
                const data = await response.json();
                setKayitlar(data);
            } else {
                setHata('Kayıtlar yüklenirken hata oluştu');
            }
        } catch (error) {
            setHata('Kayıtlar yüklenirken hata oluştu');
            console.error('Kayıt yükleme hatası:', error);
        } finally{
            setYukleniyor(false);
        }
    };
    // Araçları yükle
    const araclariYukle = async ()=>{
        try {
            const response = await fetch('/api/araclar');
            if (response.ok) {
                const data = await response.json();
                setAraclar(data);
            }
        } catch (error) {
            console.error('Araçlar yükleme hatası:', error);
        }
    };
    // Yeni kayıt ekle
    const kayitEkle = async ()=>{
        if (!yeniKayit.arac_id || !yeniKayit.tutar) {
            setHata('Lütfen tüm alanları doldurun');
            return;
        }
        try {
            const response = await fetch('/api/arac-muhasebe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(yeniKayit)
            });
            if (response.ok) {
                kayitlariYukle();
                setYeniKayit({
                    arac_id: '',
                    tutar: ''
                });
                setHata('');
                alert('Kayıt başarıyla eklendi!');
            } else {
                setHata('Kayıt eklenirken hata oluştu');
            }
        } catch (error) {
            setHata('Kayıt eklenirken hata oluştu');
            console.error('Kayıt ekleme hatası:', error);
        }
    };
    // Kayıt sil
    const kayitSil = async (id)=>{
        if (!confirm('Bu kaydı silmek istediğinizden emin misiniz?')) {
            return;
        }
        try {
            const response = await fetch(`/api/arac-muhasebe?id=${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                kayitlariYukle();
                alert('Kayıt başarıyla silindi!');
            } else {
                setHata('Kayıt silinirken hata oluştu');
            }
        } catch (error) {
            setHata('Kayıt silinirken hata oluştu');
            console.error('Kayıt silme hatası:', error);
        }
    };
    // Ödeme ekle - Veritabanına kaydet
    const odemeEkle = async ()=>{
        if (!yeniOdeme.sofor_adi || !yeniOdeme.tutar) {
            setHata('Lütfen şöför ve tutar alanlarını doldurun');
            return;
        }
        try {
            const response = await fetch('/api/sofor-odemeler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sofor_adi: yeniOdeme.sofor_adi,
                    tutar: parseFloat(yeniOdeme.tutar),
                    aciklama: yeniOdeme.aciklama
                })
            });
            if (response.ok) {
                // Ödemeleri yeniden yükle
                await odemeleriYukle();
                // Formu temizle ve modalı kapat
                setYeniOdeme({
                    sofor_adi: '',
                    tutar: '',
                    aciklama: ''
                });
                setOdemeModalAcik(false);
                setHata('');
                alert('Ödeme başarıyla eklendi!');
            } else {
                const errorData = await response.json();
                setHata(errorData.error || 'Ödeme eklenirken hata oluştu');
            }
        } catch (error) {
            setHata('Ödeme eklenirken hata oluştu');
            console.error('Ödeme ekleme hatası:', error);
        }
    };
    // Ödeme sil
    const odemeSil = async (id)=>{
        if (!confirm('Bu ödeme kaydını silmek istediğinizden emin misiniz?')) {
            return;
        }
        try {
            const response = await fetch(`/api/sofor-odemeler?id=${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Ödemeleri yeniden yükle
                await odemeleriYukle();
                alert('Ödeme kaydı başarıyla silindi!');
            } else {
                alert('Ödeme silinirken hata oluştu');
            }
        } catch (error) {
            alert('Ödeme silinirken hata oluştu');
            console.error('Ödeme silme hatası:', error);
        }
    };
    // Tüm ödemeleri sil
    const tumOdemeleriSil = async ()=>{
        if (!confirm('Tüm ödeme kayıtlarını silmek istediğinizden emin misiniz?')) {
            return;
        }
        let basariSayisi = 0;
        let hataSayisi = 0;
        for (const odeme of odemeKayitlari){
            try {
                const response = await fetch(`/api/sofor-odemeler?id=${odeme.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    basariSayisi++;
                } else {
                    hataSayisi++;
                }
            } catch (error) {
                hataSayisi++;
            }
        }
        // Ödemeleri yeniden yükle
        await odemeleriYukle();
        if (hataSayisi === 0) {
            alert(`Tüm ödemeler başarıyla silindi! (${basariSayisi} kayıt)`);
        } else {
            alert(`${basariSayisi} ödeme silindi, ${hataSayisi} hata oluştu.`);
        }
    };
    // Toplam tutarı hesapla
    const toplamTutar = kayitlar.reduce((toplam, kayit)=>toplam + kayit.tutar, 0);
    const formatTutar = (tutar)=>{
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        }).format(tutar);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--background)] text-[var(--foreground)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-none mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-[var(--foreground)]",
                                        children: "Araç Muhasebe Yönetimi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sofor-bilanco/arac-masraflari",
                                                className: "bg-purple-600 text-white px-3 py-1.5 rounded-md hover:bg-purple-700 transition-colors text-sm",
                                                children: "Masraf Yönetimi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sofor-bilanco",
                                                className: "bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm",
                                                children: "← Şöför Bilanço"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-3",
                                    children: "Yeni Muhasebe Kaydı Ekle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Araç Seçin *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: yeniKayit.arac_id,
                                                    onChange: (e)=>setYeniKayit({
                                                            ...yeniKayit,
                                                            arac_id: e.target.value
                                                        }),
                                                    className: "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Araç Seçin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 19
                                                        }, this),
                                                        araclar.map((arac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: arac.arac_id,
                                                                children: [
                                                                    arac.plaka,
                                                                    " - ",
                                                                    arac.sofor_adi
                                                                ]
                                                            }, arac.arac_id, true, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Tutar (TL) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    value: yeniKayit.tutar,
                                                    onChange: (e)=>setYeniKayit({
                                                            ...yeniKayit,
                                                            tutar: e.target.value
                                                        }),
                                                    className: "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm",
                                                    placeholder: "0.00"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: kayitEkle,
                                                className: "w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm",
                                                children: "Kayıt Ekle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                hata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm",
                                    children: hata
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-3",
                                    children: "Muhasebe Özeti"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-3 bg-green-50 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Toplam Kayıt Sayısı"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold text-green-600",
                                                    children: kayitlar.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center p-3 bg-blue-50 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Toplam Tutar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold text-blue-600",
                                                    children: formatTutar(toplamTutar)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Şöförlere Olan Borçlarımız"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setOdemeModalAcik(true),
                                            className: "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm",
                                            children: "💳 Ödeme Ekle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-4",
                                    children: "Şirket Bilançosu'ndaki gelir toplamları - şöförlere ödenmesi gereken tutarlar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
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
                                                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Şöför Adı"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Plaka"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Başlangıç Borç"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Toplam Ödeme"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Kalan Borç"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Durum"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "bg-white divide-y divide-gray-200",
                                                children: BASLANGIC_BORCLAR.map((borc, index)=>{
                                                    const borcDurumu = hesaplaBorcDurumu(borc.sofor_adi);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900",
                                                                children: borc.sofor_adi
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500",
                                                                children: borc.plaka
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 whitespace-nowrap text-sm text-right text-gray-600",
                                                                children: formatTutar(borc.baslangic_borc)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 whitespace-nowrap text-sm text-right text-green-600",
                                                                children: formatTutar(borcDurumu.toplam_odeme)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-red-600",
                                                                children: formatTutar(borcDurumu.kalan_borc)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 whitespace-nowrap text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${borcDurumu.kalan_borc <= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                                    children: borcDurumu.kalan_borc <= 0 ? 'Ödendi' : 'Borçlu'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, borc.sofor_adi, true, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                className: "bg-gray-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900",
                                                            colSpan: 2,
                                                            children: "TOPLAM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-gray-700",
                                                            children: formatTutar(BASLANGIC_BORCLAR.reduce((toplam, borc)=>toplam + borc.baslangic_borc, 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-green-700",
                                                            children: formatTutar(BASLANGIC_BORCLAR.reduce((toplam, borc)=>{
                                                                return toplam + hesaplaBorcDurumu(borc.sofor_adi).toplam_odeme;
                                                            }, 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-red-700 text-lg",
                                                            children: formatTutar(BASLANGIC_BORCLAR.reduce((toplam, borc)=>{
                                                                return toplam + hesaplaBorcDurumu(borc.sofor_adi).kalan_borc;
                                                            }, 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 476,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        odemeModalAcik && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg p-6 w-full max-w-md mx-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Ödeme Ekle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Şöför Seçin *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: yeniOdeme.sofor_adi,
                                                        onChange: (e)=>setYeniOdeme({
                                                                ...yeniOdeme,
                                                                sofor_adi: e.target.value
                                                            }),
                                                        className: "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Şöför Seçin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 23
                                                            }, this),
                                                            BASLANGIC_BORCLAR.map((borc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: borc.sofor_adi,
                                                                    children: [
                                                                        borc.sofor_adi,
                                                                        " - Kalan Borç: ",
                                                                        formatTutar(hesaplaBorcDurumu(borc.sofor_adi).kalan_borc)
                                                                    ]
                                                                }, borc.sofor_adi, true, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Ödeme Tutarı (TL) *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "0.01",
                                                        value: yeniOdeme.tutar,
                                                        onChange: (e)=>setYeniOdeme({
                                                                ...yeniOdeme,
                                                                tutar: e.target.value
                                                            }),
                                                        className: "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm",
                                                        placeholder: "0.00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Açıklama"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: yeniOdeme.aciklama,
                                                        onChange: (e)=>setYeniOdeme({
                                                                ...yeniOdeme,
                                                                aciklama: e.target.value
                                                            }),
                                                        className: "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm",
                                                        placeholder: "Ödeme açıklaması..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 17
                                    }, this),
                                    hata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm",
                                        children: hata
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: odemeEkle,
                                                className: "flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm",
                                                children: "Ödeme Ekle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setOdemeModalAcik(false);
                                                    setYeniOdeme({
                                                        sofor_adi: '',
                                                        tutar: '',
                                                        aciklama: ''
                                                    });
                                                    setHata('');
                                                },
                                                className: "flex-1 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors text-sm",
                                                children: "İptal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                lineNumber: 504,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Son Ödeme Kayıtları"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: tumOdemeleriSil,
                                            className: "bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors text-xs",
                                            children: "🗑️ Tüm Ödemeleri Sil"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                odemelerYukleniyor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: "Ödemeler yükleniyor..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 15
                                }, this) : odemeKayitlari.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: "Henüz ödeme kaydı bulunmamaktadır."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 p-3 bg-green-50 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Toplam Ödeme:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    formatTutar(odemeKayitlari.reduce((toplam, odeme)=>toplam + odeme.tutar, 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 604,
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
                                                                    className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Şöför"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Tutar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Tarih"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 619,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "Açıklama"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                    children: "İşlemler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "bg-white divide-y divide-gray-200",
                                                        children: odemeKayitlari.map((odeme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: index % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                        children: odeme.sofor_adi
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                        lineNumber: 633,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 whitespace-nowrap text-sm text-green-600 font-medium",
                                                                        children: formatTutar(odeme.tutar)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                        children: new Date(odeme.tarih).toLocaleDateString('tr-TR')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                        children: odeme.aciklama || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                        lineNumber: 642,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>odemeSil(odeme.id),
                                                                            className: "text-red-600 hover:text-red-900 text-sm",
                                                                            children: "Sil"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                            lineNumber: 646,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                        lineNumber: 645,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, odeme.id, true, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                            lineNumber: 609,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-3",
                                    children: "Muhasebe Kayıtları"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this),
                                yukleniyor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: "Kayıtlar yükleniyor..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this) : kayitlar.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: "Henüz muhasebe kaydı bulunmamaktadır."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Plaka"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Şöför"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Tutar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "İşlemler"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "bg-white divide-y divide-gray-200",
                                                children: kayitlar.map((kayit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: index % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                children: kayit.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                children: kayit.arac.plaka
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                children: kayit.arac.sofor_adi
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                children: formatTutar(kayit.tutar)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 708,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 whitespace-nowrap text-sm text-gray-900",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>kayitSil(kayit.id),
                                                                    className: "text-red-600 hover:text-red-900 text-sm",
                                                                    children: "Sil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                    lineNumber: 712,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, kayit.id, true, {
                                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sofor-bilanco/arac-muhasebe/page.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
_s(AracMuhasebeYonetimi, "cg5t8z60cSB3i/hjFgPbFsUkKjo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AracMuhasebeYonetimi;
var _c;
__turbopack_context__.k.register(_c, "AracMuhasebeYonetimi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_fcaea05f._.js.map