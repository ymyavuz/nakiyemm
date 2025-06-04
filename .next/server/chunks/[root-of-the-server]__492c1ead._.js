module.exports = {

"[project]/.next-internal/server/app/api/fiyat-listesi/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/fiyat-listesi/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function GET(request) {
    try {
        const tip = request.nextUrl.searchParams.get('tip') || 'hepsi';
        const sirketId = request.nextUrl.searchParams.get('sirket_id');
        const aracTipi = request.nextUrl.searchParams.get('arac_tipi');
        // Yeni birleşik sorgumuz, şimdi sofor_ucreti alanını içeren güncellenmiş yapıyı kullanıyor
        let where = {};
        if (sirketId) {
            where.sirket_id = parseInt(sirketId);
        }
        // Araç tipine göre filtreleme
        if (aracTipi) {
            where.arac_tipi = aracTipi;
        }
        // Fiyat tipine göre filtreleme - sadece null olmayan değerleri getir
        if (tip === 'sirket') {
            where.ucret = {
                gt: 0
            }; // 0'dan büyük değerler
        } else if (tip === 'sofor') {
            where.sofor_ucreti = {
                gt: 0
            }; // 0'dan büyük değerler
        }
        console.log('Fiyat listesi sorgusu:', {
            sirketId,
            aracTipi,
            tip,
            where
        });
        // Fiyat listesini getir
        const fiyatListesi = await prisma.sirketFiyatListesi.findMany({
            where,
            include: {
                sirket: {
                    select: {
                        sirket_adi: true
                    }
                }
            },
            orderBy: {
                tahliye_yeri: 'asc'
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(fiyatListesi);
    } catch (error) {
        console.error('Fiyat listesi getirme hatası:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Fiyat listesi alınırken bir hata oluştu'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { sirket_id, tahliye_yeri, arac_tipi, ucret, sofor_ucreti, km } = body;
        // Zorunlu alanları kontrol et
        if (!sirket_id || !tahliye_yeri || !arac_tipi) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Şirket ID, tahliye yeri ve araç tipi zorunludur'
            }, {
                status: 400
            });
        }
        // Yeni fiyat listesi kaydı oluştur
        const yeniFiyatListesi = await prisma.sirketFiyatListesi.create({
            data: {
                sirket_id: parseInt(sirket_id),
                tahliye_yeri,
                arac_tipi,
                ucret: ucret ? parseFloat(ucret) : 0,
                sofor_ucreti: sofor_ucreti ? parseFloat(sofor_ucreti) : null,
                km: km ? parseFloat(km) : null
            },
            include: {
                sirket: {
                    select: {
                        sirket_adi: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(yeniFiyatListesi, {
            status: 201
        });
    } catch (error) {
        console.error('Fiyat listesi ekleme hatası:', error);
        // Unique constraint hatası
        if (error.code === 'P2002') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Bu şirket ve tahliye yeri için zaten bir kayıt mevcut'
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Fiyat listesi eklenirken bir hata oluştu'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__492c1ead._.js.map