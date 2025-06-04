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
"[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FiyatListesi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function FiyatListesi() {
    const [sirketler, setSirketler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [seciliSirket, setSeciliSirket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fiyatListesi, setFiyatListesi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [yukleniyor, setYukleniyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hata, setHata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [duzenlemeModu, setDuzenlemeModu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [degisiklikler, setDegisiklikler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [kaydediliyor, setKaydediliyor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Şirketleri getir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchSirketler = async ()=>{
            try {
                const response = await fetch('/api/sirketler');
                if (!response.ok) {
                    throw new Error('Şirketler yüklenirken bir hata oluştu');
                }
                const data = await response.json();
                setSirketler(data);
            } catch (error) {
                console.error('Şirketler yüklenirken hata:', error);
                setHata('Şirketler yüklenirken bir hata oluştu');
            }
        };
        fetchSirketler();
    }, []);
    // Fiyat listelerini getir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchFiyatListesi = async ()=>{
            setYukleniyor(true);
            setHata(null);
            try {
                // Birleştirilmiş API'ye istek yap
                let url = `/api/fiyat-listesi`;
                if (seciliSirket) {
                    url += `?sirket_id=${seciliSirket}`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Fiyat listesi yüklenirken bir hata oluştu');
                }
                const data = await response.json();
                setFiyatListesi(data);
            } catch (error) {
                console.error('Fiyat listesi yüklenirken hata:', error);
                setHata('Fiyat listesi yüklenirken bir hata oluştu');
            } finally{
                setYukleniyor(false);
            }
        };
        fetchFiyatListesi();
    }, [
        seciliSirket
    ]);
    // Fiyat değişikliği işleyicisi
    const handleFiyatDegisikligi = (fiyatListeId, alan, deger, sirketId, tahliyeYeri, aracTipi)=>{
        // Eğer fiyat_listesi_id yoksa, yeni kayıt için geçici bir ID oluştur
        const kayitId = fiyatListeId || `new|||${sirketId}|||${tahliyeYeri}|||${aracTipi}`;
        // Mevcut değişiklik varsa güncelle, yoksa ekle
        const mevcutIndex = degisiklikler.findIndex((d)=>d.fiyat_listesi_id === kayitId || d.id === kayitId);
        if (mevcutIndex >= 0) {
            const yeniDegisiklikler = [
                ...degisiklikler
            ];
            yeniDegisiklikler[mevcutIndex] = {
                ...yeniDegisiklikler[mevcutIndex],
                [alan]: deger
            };
            setDegisiklikler(yeniDegisiklikler);
        } else {
            const yeniDegisiklik = {
                [alan]: deger
            };
            if (fiyatListeId) {
                yeniDegisiklik.fiyat_listesi_id = fiyatListeId;
            } else {
                // Yeni kayıt için gerekli bilgileri ekle
                yeniDegisiklik.id = kayitId;
                yeniDegisiklik.sirket_id = sirketId;
                yeniDegisiklik.tahliye_yeri = tahliyeYeri;
                yeniDegisiklik.arac_tipi = aracTipi;
                yeniDegisiklik.isNew = true;
            }
            setDegisiklikler([
                ...degisiklikler,
                yeniDegisiklik
            ]);
        }
    };
    // Değişiklikleri kaydet
    const degisiklikleriKaydet = async ()=>{
        setKaydediliyor(true);
        setHata(null);
        console.log('Kaydedilecek değişiklikler:', degisiklikler);
        try {
            // Her bir değişiklik için API çağrısı yap
            const sonuclar = await Promise.all(degisiklikler.map(async (degisiklik)=>{
                if (degisiklik.isNew) {
                    // Yeni kayıt için validation
                    if (!degisiklik.sirket_id || !degisiklik.tahliye_yeri || !degisiklik.arac_tipi) {
                        console.error('Eksik veri:', {
                            sirket_id: degisiklik.sirket_id,
                            tahliye_yeri: degisiklik.tahliye_yeri,
                            arac_tipi: degisiklik.arac_tipi
                        });
                        throw new Error('Yeni kayıt için gerekli veriler eksik');
                    }
                    // Yeni kayıt oluştur
                    const postData = {
                        sirket_id: degisiklik.sirket_id,
                        tahliye_yeri: degisiklik.tahliye_yeri,
                        arac_tipi: degisiklik.arac_tipi,
                        ucret: degisiklik.ucret || 0,
                        sofor_ucreti: degisiklik.sofor_ucreti || null,
                        km: null
                    };
                    console.log('POST verisi gönderiliyor:', postData);
                    const response = await fetch('/api/fiyat-listesi', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    });
                    if (!response.ok) {
                        const errorData = await response.json();
                        console.error('POST API Hatası:', errorData);
                        throw new Error(`Yeni kayıt oluşturulurken hata oluştu: ${errorData.error || response.statusText}`);
                    }
                    return await response.json();
                } else {
                    // Mevcut kaydı güncelle
                    const response = await fetch(`/api/fiyat-listesi/${degisiklik.fiyat_listesi_id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(degisiklik)
                    });
                    if (!response.ok) {
                        throw new Error(`ID:${degisiklik.fiyat_listesi_id} güncellenirken hata oluştu`);
                    }
                    return await response.json();
                }
            }));
            // Değişiklik yapılınca listeyi yenile
            const yeniUrl = `/api/fiyat-listesi${seciliSirket ? `?sirket_id=${seciliSirket}` : ''}`;
            const response = await fetch(yeniUrl);
            if (!response.ok) {
                throw new Error('Güncel fiyat listesi yüklenirken bir hata oluştu');
            }
            const güncelListe = await response.json();
            setFiyatListesi(güncelListe);
            // Düzenleme modunu kapat ve değişiklikleri temizle
            setDuzenlemeModu(false);
            setDegisiklikler([]);
        } catch (error) {
            console.error('Değişiklikler kaydedilirken hata:', error);
            setHata('Değişiklikler kaydedilirken bir hata oluştu');
        } finally{
            setKaydediliyor(false);
        }
    };
    // Düzenleme modunu iptal et
    const duzenlemeyiIptalEt = ()=>{
        setDuzenlemeModu(false);
        setDegisiklikler([]);
    };
    // Fiyatları gruplandırarak görüntüle - şimdi hem şirket hem şoför fiyatlarını içeriyor
    const gruplandirFiyatlar = (fiyatlar)=>{
        const gruplar = {};
        fiyatlar.forEach((fiyat)=>{
            const key = `${fiyat.sirket_id}|||${fiyat.tahliye_yeri}`; // ||| ayırıcı kullan
            if (!gruplar[key]) {
                gruplar[key] = {
                    sirket_tir: null,
                    sirket_kirkayak: null,
                    sofor_tir: null,
                    sofor_kirkayak: null,
                    km: fiyat.km,
                    fiyat_ids: {}
                };
            }
            if (fiyat.arac_tipi === 'Tır') {
                gruplar[key].sirket_tir = fiyat.ucret;
                gruplar[key].sofor_tir = fiyat.sofor_ucreti;
                gruplar[key].fiyat_ids.tir_id = fiyat.fiyat_listesi_id;
            } else if (fiyat.arac_tipi === 'Kırkayak') {
                gruplar[key].sirket_kirkayak = fiyat.ucret;
                gruplar[key].sofor_kirkayak = fiyat.sofor_ucreti;
                gruplar[key].fiyat_ids.kirkayak_id = fiyat.fiyat_listesi_id;
            }
        });
        return Object.entries(gruplar).map(([key, degerler])=>{
            const [sirketId, tahliyeYeri] = key.split('|||'); // ||| ayırıcı ile böl
            const sirket = sirketler.find((s)=>s.sirket_id === parseInt(sirketId));
            return {
                sirket_id: parseInt(sirketId),
                sirket_adi: sirket?.sirket_adi || 'Bilinmeyen Şirket',
                tahliye_yeri: tahliyeYeri,
                km: degerler.km,
                sirket_tir_ucret: degerler.sirket_tir,
                sirket_kirkayak_ucret: degerler.sirket_kirkayak,
                sofor_tir_ucret: degerler.sofor_tir,
                sofor_kirkayak_ucret: degerler.sofor_kirkayak,
                fiyat_ids: degerler.fiyat_ids
            };
        });
    };
    // Değişikliklerdeki değeri al veya orijinal değeri döndür
    const getDeger = (fiyatId, alan, varsayilanDeger, sirketId, tahliyeYeri, aracTipi)=>{
        const kayitId = fiyatId || `new|||${sirketId}|||${tahliyeYeri}|||${aracTipi}`;
        const degisiklik = degisiklikler.find((d)=>d.fiyat_listesi_id === kayitId || d.id === kayitId);
        if (!degisiklik || degisiklik[alan] === undefined) return varsayilanDeger;
        return degisiklik[alan];
    };
    // Fiyat listesini gruplandır
    const grupluFiyatlar = gruplandirFiyatlar(fiyatListesi);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Fiyat Listeleri"
            }, void 0, false, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md p-6 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block mb-2 font-medium",
                            children: "Şirket Filtresi"
                        }, void 0, false, {
                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: seciliSirket || '',
                            onChange: (e)=>setSeciliSirket(e.target.value ? parseInt(e.target.value) : null),
                            className: "max-w-md p-2 border rounded-md",
                            disabled: duzenlemeModu,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Tüm Şirketler"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this),
                                sirketler.map((sirket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: sirket.sirket_id,
                                        children: sirket.sirket_adi
                                    }, sirket.sirket_id, false, {
                                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            hata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 text-red-800 p-4 rounded-md mb-6",
                children: hata
            }, void 0, false, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 317,
                columnNumber: 9
            }, this),
            yukleniyor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Fiyat listeleri yükleniyor..."
                }, void 0, false, {
                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, this),
            !yukleniyor && grupluFiyatlar.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: "Fiyat Listesi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: !duzenlemeModu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDuzenlemeModu(true),
                                    className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
                                    children: "Düzenle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: degisiklikleriKaydet,
                                            disabled: kaydediliyor,
                                            className: `px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ${kaydediliyor ? 'opacity-50 cursor-not-allowed' : ''}`,
                                            children: kaydediliyor ? 'Kaydediliyor...' : 'Kaydet'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: duzenlemeyiIptalEt,
                                            disabled: kaydediliyor,
                                            className: `px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 ${kaydediliyor ? 'opacity-50 cursor-not-allowed' : ''}`,
                                            children: "İptal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full bg-white border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Şirket"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Varış Noktası"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Km"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    colSpan: 2,
                                                    children: "Şirket Fiyatları (₺)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    colSpan: 2,
                                                    children: "Şoför Fiyatları (₺)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Tır"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Kırkayak"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Tır"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-4 border text-left",
                                                    children: "Kırkayak"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: grupluFiyatlar.map((fiyat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: index % 2 === 0 ? 'bg-gray-50' : '',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: fiyat.sirket_adi
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: fiyat.tahliye_yeri
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: fiyat.km || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: duzenlemeModu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: getDeger(fiyat.fiyat_ids.tir_id, 'ucret', fiyat.sirket_tir_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Tır') || '',
                                                        onChange: (e)=>handleFiyatDegisikligi(fiyat.fiyat_ids.tir_id, 'ucret', e.target.value ? Number(e.target.value) : null, fiyat.sirket_id, fiyat.tahliye_yeri, 'Tır'),
                                                        className: "w-24 p-1 border rounded",
                                                        placeholder: "Tır fiyatı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 25
                                                    }, this) : fiyat.sirket_tir_ucret !== null ? `${fiyat.sirket_tir_ucret} ₺` : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: duzenlemeModu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: getDeger(fiyat.fiyat_ids.kirkayak_id, 'ucret', fiyat.sirket_kirkayak_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Kırkayak') || '',
                                                        onChange: (e)=>handleFiyatDegisikligi(fiyat.fiyat_ids.kirkayak_id, 'ucret', e.target.value ? Number(e.target.value) : null, fiyat.sirket_id, fiyat.tahliye_yeri, 'Kırkayak'),
                                                        className: "w-24 p-1 border rounded",
                                                        placeholder: "Kırkayak fiyatı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 25
                                                    }, this) : fiyat.sirket_kirkayak_ucret !== null ? `${fiyat.sirket_kirkayak_ucret} ₺` : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: duzenlemeModu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: getDeger(fiyat.fiyat_ids.tir_id, 'sofor_ucreti', fiyat.sofor_tir_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Tır') || '',
                                                        onChange: (e)=>handleFiyatDegisikligi(fiyat.fiyat_ids.tir_id, 'sofor_ucreti', e.target.value ? Number(e.target.value) : null, fiyat.sirket_id, fiyat.tahliye_yeri, 'Tır'),
                                                        className: "w-24 p-1 border rounded",
                                                        placeholder: "Şoför tır"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 25
                                                    }, this) : fiyat.sofor_tir_ucret !== null ? `${fiyat.sofor_tir_ucret} ₺` : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border",
                                                    children: duzenlemeModu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: getDeger(fiyat.fiyat_ids.kirkayak_id, 'sofor_ucreti', fiyat.sofor_kirkayak_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Kırkayak') || '',
                                                        onChange: (e)=>handleFiyatDegisikligi(fiyat.fiyat_ids.kirkayak_id, 'sofor_ucreti', e.target.value ? Number(e.target.value) : null, fiyat.sirket_id, fiyat.tahliye_yeri, 'Kırkayak'),
                                                        className: "w-24 p-1 border rounded",
                                                        placeholder: "Şoför kırkayak"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 25
                                                    }, this) : fiyat.sofor_kirkayak_ucret !== null ? `${fiyat.sofor_kirkayak_ucret} ₺` : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                            lineNumber: 365,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this),
            !yukleniyor && grupluFiyatlar.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-md mb-8",
                children: "Seçilen kriterlere uygun fiyat listesi bulunamadı."
            }, void 0, false, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 499,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/veritabani-yonetimi/fiyat-listesi/ekle",
                        className: "px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600",
                        children: "Yeni Fiyat Listesi Ekle"
                    }, void 0, false, {
                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/veritabani-yonetimi",
                        className: "px-4 py-2 border rounded-md hover:bg-gray-100",
                        children: "Veritabanı Yönetimine Dön"
                    }, void 0, false, {
                        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/veritabani-yonetimi/fiyat-listesi/page.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__02d3b85e._.js.map