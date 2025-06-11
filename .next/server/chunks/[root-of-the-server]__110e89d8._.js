module.exports = {

"[project]/.next-internal/server/app/api/arac-muhasebe-raporu/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/lib/db.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createFreshPrismaClient": (()=>createFreshPrismaClient),
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// Prepared statement sorunlarını önlemek için URL modifikasyonu
const getDatabaseUrl = ()=>{
    let url = process.env.DATABASE_URL;
    if (!url) return url;
    // Environment variable'dan "DATABASE_URL = " prefix'i temizle
    if (url.startsWith('DATABASE_URL = ')) {
        url = url.replace('DATABASE_URL = ', '');
    }
    // URL geçerliliğini kontrol et
    try {
        const urlObj = new URL(url);
        // Prepared statement cache'i tamamen devre dışı bırak
        urlObj.searchParams.set('prepared_statement_cache_queries', '0');
        // Statement cache'i de kapat
        urlObj.searchParams.set('statement_cache_size', '0');
        // Connection timeout ayarla
        urlObj.searchParams.set('connection_timeout', '10');
        return urlObj.toString();
    } catch (error) {
        console.error('DATABASE_URL parsing hatası:', error);
        console.error('URL değeri:', url);
        // Fallback olarak temizlenmiş URL'i döndür
        return url;
    }
};
const createFreshPrismaClient = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
        datasources: {
            db: {
                url: getDatabaseUrl()
            }
        },
        log: ("TURBOPACK compile-time truthy", 1) ? [
            'error'
        ] : ("TURBOPACK unreachable", undefined)
    });
};
const prisma = (()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Development için singleton ama prepared statement'ları disable et
    if (!global.__prisma) {
        global.__prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
            datasources: {
                db: {
                    url: getDatabaseUrl()
                }
            },
            log: [
                'error',
                'warn'
            ]
        });
    }
    return global.__prisma;
})();
}}),
"[project]/src/app/api/arac-muhasebe-raporu/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const yil = searchParams.get('yil') || new Date().getFullYear().toString();
        // Tüm araçları getir
        const araclar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].araclar.findMany({
            orderBy: {
                plaka: 'asc'
            }
        });
        // Yıl için tüm seferleri getir
        const seferler = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].seferler.findMany({
            include: {
                arac: true
            }
        });
        // Yıl için tüm araç masraflarını getir
        const masraflar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].aracOdemeKayitlari.findMany({
            where: {
                odeme_tarihi: {
                    gte: new Date(`${yil}-01-01`),
                    lt: new Date(`${parseInt(yil) + 1}-01-01`)
                }
            }
        });
        // Her araç için aylık gelir-gider hesapla
        const aracBazindaAylikVeriler = [];
        for (const arac of araclar){
            const aracVerisi = {
                arac_id: arac.arac_id,
                plaka: arac.plaka,
                sofor_adi: arac.sofor_adi,
                aylikVeriler: {},
                yillikToplam: {
                    gelir: 0,
                    gider: 0,
                    tevkifat: 0,
                    kar: 0
                },
                // Detaylı hesaplama bilgileri için yeni alan ekliyoruz
                detayliHesaplar: {
                    aylikDetaylar: {},
                    yillikDetay: {
                        hamGelir: 0,
                        kdvTutari: 0,
                        kdvDahilTutar: 0,
                        tevkifatTutari: 0,
                        netGelir: 0,
                        gider: 0,
                        kar: 0,
                        sirketTevkifatTutari: 0,
                        // Sefer bazında hesaplama detayları
                        seferlerBilgileri: []
                    }
                }
            };
            // 12 ay için başlangıç değerleri
            for(let ay = 1; ay <= 12; ay++){
                aracVerisi.aylikVeriler[ay] = {
                    gelir: 0,
                    gider: 0,
                    tevkifat: 0,
                    kar: 0
                };
                // Detaylı hesaplar için ay bazında değerler
                aracVerisi.detayliHesaplar.aylikDetaylar[ay] = {
                    hamGelir: 0,
                    kdvTutari: 0,
                    kdvDahilTutar: 0,
                    tevkifatTutari: 0,
                    netGelir: 0,
                    gider: 0,
                    kar: 0,
                    seferler: [],
                    sirketTevkifatTutari: 0
                };
            }
            // Araç seferlerinden gelirleri hesapla - Veritabanındaki ay değerini kullan
            const aracSeferleri = seferler.filter((s)=>s.arac_id === arac.arac_id);
            for (const sefer of aracSeferleri){
                // Sefer ay değeri kontrolü
                if (!sefer.ay) continue;
                const ay = sefer.ay;
                // Ham gelir hesaplama - YAP-İstanbul için özel durum
                let hamGelir = 0;
                let hesaplamaYontemi = '';
                if (sefer.sirket_id === 2) {
                    hamGelir = sefer.sofore_odenen_ucret || 0;
                    hesaplamaYontemi = 'sofore_odenen_ucret (MT ile çarpılmadı)';
                    console.log(`Şirket ${sefer.sirket_id} (YAP-İstanbul) için gelir hesaplandı: Şoföre Ödenen: ${hamGelir} (MT ile çarpılmadı)`);
                } else {
                    // Diğer tüm şirketler için MT ile çarpılacak
                    const birimFiyati = sefer.sofore_odenen_ucret || 0;
                    const mt = sefer.mt || 0;
                    hamGelir = birimFiyati * mt;
                    hesaplamaYontemi = 'sofore_odenen_ucret * MT';
                    console.log(`Şirket ${sefer.sirket_id} için gelir hesaplandı: Şoföre Ödenen: ${birimFiyati} * MT: ${mt} = ${hamGelir}`);
                }
                // KDV hesaplama
                const kdvTutari = hamGelir * 0.20; // %20 KDV
                const kdvDahilTutar = hamGelir + kdvTutari; // KDV dahil tutar
                // Tevkifat hesaplama - Şoför raporu için KDV'nin %20'si
                const tevkifatTutari = kdvTutari * 0.20; // tevkifat KDV'nin %20'si
                const netGelir = kdvDahilTutar - tevkifatTutari; // Tevkifat düşülmüş gelir
                console.log(`Gelir: ${hamGelir} + KDV(%20): ${kdvTutari} = KDV Dahil: ${kdvDahilTutar}, Tevkifat(KDV'nin %20'si): ${tevkifatTutari}, Net: ${netGelir}`);
                // Şirket hesaplaması için sofor_fatura_ucreti bilgisi - bu kısım sadece şirket bilançosu hazırlanırken kullanılacak
                const soforFaturaUcreti = sefer.sofor_fatura_ucreti || 0;
                const faturaKdvTutari = soforFaturaUcreti * 0.20; // Fatura ücreti üzerinden KDV
                const sirketIcinTevkifatTutari = faturaKdvTutari * 0.20; // Şirket için tevkifat fatura KDV'sinin %20'si
                // Sefer detaylarını kaydet
                const seferDetay = {
                    sefer_id: sefer.sefer_id,
                    irsaliye_numarasi: sefer.irsaliye_numarasi,
                    irsaliye_tarihi: sefer.irsaliye_tarihi,
                    tahliye_yeri: sefer.tahliye_yeri,
                    mt: sefer.mt,
                    sirket_id: sefer.sirket_id,
                    birimFiyati: sefer.sofore_odenen_ucret || 0,
                    hamGelir: hamGelir,
                    kdvTutari: kdvTutari,
                    kdvDahilTutar: kdvDahilTutar,
                    tevkifatTutari: tevkifatTutari,
                    netGelir: netGelir,
                    // Şirket bilançosu için gerekli bilgiler
                    sirketHesaplama: {
                        soforFaturaUcreti: soforFaturaUcreti,
                        faturaKdvTutari: faturaKdvTutari,
                        sirketIcinTevkifatTutari: sirketIcinTevkifatTutari
                    }
                };
                // Detaylı hesaplara ekle
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].hamGelir += hamGelir;
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].kdvTutari += kdvTutari;
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].kdvDahilTutar += kdvDahilTutar;
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].tevkifatTutari += tevkifatTutari;
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].netGelir += netGelir;
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].seferler.push(seferDetay);
                // Yıllık detay toplamlarına ekle
                aracVerisi.detayliHesaplar.yillikDetay.hamGelir += hamGelir;
                aracVerisi.detayliHesaplar.yillikDetay.kdvTutari += kdvTutari;
                aracVerisi.detayliHesaplar.yillikDetay.kdvDahilTutar += kdvDahilTutar;
                aracVerisi.detayliHesaplar.yillikDetay.tevkifatTutari += tevkifatTutari;
                aracVerisi.detayliHesaplar.yillikDetay.netGelir += netGelir;
                aracVerisi.detayliHesaplar.yillikDetay.seferlerBilgileri.push(seferDetay);
                // Şirket için tevkifat tutarını ayrı olarak kaydet
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].sirketTevkifatTutari += sirketIcinTevkifatTutari;
                aracVerisi.detayliHesaplar.yillikDetay.sirketTevkifatTutari = (aracVerisi.detayliHesaplar.yillikDetay.sirketTevkifatTutari || 0) + sirketIcinTevkifatTutari;
                // Şirket bilançosu için tevkifat değerlerini ayarla
                aracVerisi.aylikVeriler[ay].tevkifat += sirketIcinTevkifatTutari;
                aracVerisi.yillikToplam.tevkifat = (aracVerisi.yillikToplam.tevkifat || 0) + sirketIcinTevkifatTutari;
                // Mevcut hesaplama için
                aracVerisi.aylikVeriler[ay].gelir += netGelir;
                aracVerisi.yillikToplam.gelir += netGelir;
            }
            // Araç masraflarını hesapla
            const aracMasraflari = masraflar.filter((m)=>m.arac_id === arac.arac_id);
            for (const masraf of aracMasraflari){
                const tarih = new Date(masraf.odeme_tarihi);
                const ay = tarih.getMonth() + 1;
                const gider = masraf.odeme_tutari;
                // Şöför bilançosunda KDV dahil edilmeyecek
                const toplamGider = gider;
                // Masraf detayını ekle
                const masrafDetay = {
                    odeme_id: masraf.odeme_id,
                    odeme_tarihi: masraf.odeme_tarihi,
                    gider: gider,
                    kdv: 0,
                    toplamGider: toplamGider,
                    aciklama: masraf.aciklama
                };
                // Detaylı hesaplara masraf ekle
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].gider += toplamGider;
                aracVerisi.detayliHesaplar.yillikDetay.gider += toplamGider;
                // Mevcut hesaplama için
                aracVerisi.aylikVeriler[ay].gider += toplamGider;
                aracVerisi.yillikToplam.gider += toplamGider;
            }
            // Kar hesapla
            for(let ay = 1; ay <= 12; ay++){
                // Mevcut hesaplama
                aracVerisi.aylikVeriler[ay].kar = aracVerisi.aylikVeriler[ay].gelir - aracVerisi.aylikVeriler[ay].gider;
                // Detaylı hesap için
                aracVerisi.detayliHesaplar.aylikDetaylar[ay].kar = aracVerisi.detayliHesaplar.aylikDetaylar[ay].netGelir - aracVerisi.detayliHesaplar.aylikDetaylar[ay].gider;
            }
            // Yıllık toplam kar
            aracVerisi.yillikToplam.kar = aracVerisi.yillikToplam.gelir - aracVerisi.yillikToplam.gider;
            aracVerisi.detayliHesaplar.yillikDetay.kar = aracVerisi.detayliHesaplar.yillikDetay.netGelir - aracVerisi.detayliHesaplar.yillikDetay.gider;
            aracBazindaAylikVeriler.push(aracVerisi);
        }
        // Aylık toplamları hesapla
        const aylikToplamlar = {};
        for(let ay = 1; ay <= 12; ay++){
            aylikToplamlar[ay] = {
                gelir: 0,
                gider: 0,
                tevkifat: 0,
                kar: 0
            };
        }
        for (const aracVeri of aracBazindaAylikVeriler){
            for(let ay = 1; ay <= 12; ay++){
                aylikToplamlar[ay].gelir += aracVeri.aylikVeriler[ay].gelir;
                aylikToplamlar[ay].gider += aracVeri.aylikVeriler[ay].gider;
                aylikToplamlar[ay].tevkifat += aracVeri.aylikVeriler[ay].tevkifat;
                aylikToplamlar[ay].kar += aracVeri.aylikVeriler[ay].kar;
            }
        }
        // Genel toplamlar
        const genelToplam = {
            gelir: 0,
            gider: 0,
            tevkifat: 0,
            kar: 0
        };
        for (const aracVeri of aracBazindaAylikVeriler){
            genelToplam.gelir += aracVeri.yillikToplam.gelir;
            genelToplam.gider += aracVeri.yillikToplam.gider;
            genelToplam.tevkifat += aracVeri.yillikToplam.tevkifat || 0;
            genelToplam.kar += aracVeri.yillikToplam.kar;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            yil: parseInt(yil),
            aracBazindaAylikVeriler,
            aylikToplamlar,
            genelToplam,
            hesaplamaNotlari: {
                kdv: "Gelirlere %20 KDV dahil edilmiştir, giderlere KDV dahil edilmemiştir",
                soforTevkifat: "Şoför hesaplamalarında KDV tutarının %20'si tevkifat olarak düşülmüştür",
                sirketTevkifat: "Şirket bilançolarında sofor_fatura_ucreti üzerinden hesaplanan KDV'nin %20'si tevkifat olarak düşülmektedir",
                formul: "Şoför Kar = [Gelir + (%20 KDV) - (KDV'nin %20'si tevkifat)] - Gider (KDV hariç)",
                yapIstanbulOzelDurum: "YAP-İstanbul (ID:2) için MT ile çarpım yapılmamakta, doğrudan ödenen ücret kullanılmaktadır",
                detayliVersiyon: "detayliHesaplar alanında tüm hesaplamalar ayrıntılı olarak verilmiştir"
            }
        });
    } catch (error) {
        console.error('Araç muhasebe raporu hatası:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Araç muhasebe raporu oluşturulurken bir hata oluştu: ' + error.message
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__110e89d8._.js.map