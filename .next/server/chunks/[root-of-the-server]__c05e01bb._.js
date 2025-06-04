module.exports = {

"[project]/.next-internal/server/app/api/debug/sofor-seferler/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    global.prisma = prisma;
}
}}),
"[project]/src/app/api/debug/sofor-seferler/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
        const soforAdi = searchParams.get('sofor') || 'Tahsin'; // Varsayılan olarak Tahsin
        const ay = searchParams.get('ay') ? parseInt(searchParams.get('ay') || '1') : 1; // Varsayılan olarak Ocak (1. ay)
        const donem = searchParams.get('donem') ? parseInt(searchParams.get('donem') || '0') : 0; // 0 tüm dönemler
        const yil = searchParams.get('yil') || new Date().getFullYear().toString();
        // Önce soforun aracını bulalım
        const arac = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].araclar.findFirst({
            where: {
                sofor_adi: {
                    contains: soforAdi
                }
            }
        });
        if (!arac) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `${soforAdi} isimli şoför bulunamadı`
            }, {
                status: 404
            });
        }
        // Filtrelemeyi ay ve donem değerlerine göre yap
        const where = {
            arac_id: arac.arac_id,
            ay: ay
        };
        // Eğer belirli bir dönem isteniyorsa filtreye ekle
        if (donem > 0) {
            where.donem = donem;
        }
        // Seferleri getir
        const seferler = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].seferler.findMany({
            where,
            include: {
                sirket: true
            },
            orderBy: {
                donem: 'asc'
            }
        });
        // Seferlerin detaylı hesaplamalarını yapalım
        const detayliSeferler = seferler.map((sefer)=>{
            // Ham gelir hesaplama - YAP-İstanbul için özel durum
            let hamGelir = 0;
            let hesaplamaYontemi = '';
            if (sefer.sirket_id === 2) {
                hamGelir = sefer.sofore_odenen_ucret || 0;
                hesaplamaYontemi = 'sofore_odenen_ucret (MT ile çarpılmadı)';
            } else {
                // Diğer tüm şirketler için MT ile çarpılacak
                const birimFiyati = sefer.sofore_odenen_ucret || 0;
                const mt = sefer.mt || 0;
                hamGelir = birimFiyati * mt;
                hesaplamaYontemi = 'sofore_odenen_ucret * MT';
            }
            // KDV ve tevkifat hesaplama - şoför hesaplamalarında KDV'nin %20'si olarak
            const kdvTutari = hamGelir * 0.20; // %20 KDV
            const kdvDahilTutar = hamGelir + kdvTutari; // KDV dahil tutar
            const tevkifatTutari = kdvTutari * 0.20; // tevkifat KDV'nin %20'si olmalı
            const netGelir = kdvDahilTutar - tevkifatTutari; // Tevkifat düşülmüş gelir
            return {
                sefer_id: sefer.sefer_id,
                irsaliye_numarasi: sefer.irsaliye_numarasi,
                irsaliye_tarihi: sefer.irsaliye_tarihi,
                tahliye_yeri: sefer.tahliye_yeri,
                sirket_id: sefer.sirket_id,
                sirket_adi: sefer.sirket?.sirket_adi || 'Bilinmeyen',
                mt: sefer.mt,
                sirketten_alinan_ucret: sefer.sirketten_alinan_ucret,
                sofore_odenen_ucret: sefer.sofore_odenen_ucret,
                hesaplama: {
                    yontem: hesaplamaYontemi,
                    hamGelir,
                    kdvTutari,
                    kdvDahilTutar,
                    tevkifatTutari,
                    netGelir
                }
            };
        });
        // Toplam hesaplamaları yap
        const toplamHamGelir = detayliSeferler.reduce((toplam, sefer)=>toplam + sefer.hesaplama.hamGelir, 0);
        const toplamKDV = detayliSeferler.reduce((toplam, sefer)=>toplam + sefer.hesaplama.kdvTutari, 0);
        const toplamKDVDahil = detayliSeferler.reduce((toplam, sefer)=>toplam + sefer.hesaplama.kdvDahilTutar, 0);
        const toplamTevkifat = detayliSeferler.reduce((toplam, sefer)=>toplam + sefer.hesaplama.tevkifatTutari, 0);
        const toplamNetGelir = detayliSeferler.reduce((toplam, sefer)=>toplam + sefer.hesaplama.netGelir, 0);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            sofor: soforAdi,
            arac: arac,
            donem: {
                ay: ay,
                yil: yil,
                baslangic: new Date(`${yil}-${ay.toString().padStart(2, '0')}-01`),
                bitis: new Date(new Date(`${yil}-${ay.toString().padStart(2, '0')}-01`)).setMonth(new Date(`${yil}-${ay.toString().padStart(2, '0')}-01`).getMonth() + 1)
            },
            seferSayisi: seferler.length,
            seferler: detayliSeferler,
            toplamlar: {
                hamGelir: toplamHamGelir,
                kdvTutari: toplamKDV,
                kdvDahilTutar: toplamKDVDahil,
                tevkifatTutari: toplamTevkifat,
                netGelir: toplamNetGelir
            }
        });
    } catch (error) {
        console.error('Debug endpoint hatası:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Seferler alınırken bir hata oluştu: ' + error.message
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c05e01bb._.js.map