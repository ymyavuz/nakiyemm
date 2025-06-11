module.exports = {

"[project]/.next-internal/server/app/api/sirketler/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
    "createPrismaClient": (()=>createPrismaClient),
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// Connection URI'yi prepared statement sorunlarını önleyecek şekilde modifiye et
const getDatabaseUrl = ()=>{
    const url = process.env.DATABASE_URL;
    if (!url) return url;
    // Vercel environment'ında connection pooling parametreleri ekle
    if (process.env.VERCEL) {
        const urlObj = new URL(url);
        // Prepared statement cache'i devre dışı bırak
        urlObj.searchParams.set('prepared_statement_cache_queries', '0');
        // Connection timeout ayarla
        urlObj.searchParams.set('connection_timeout', '10');
        // Statement timeout ayarla  
        urlObj.searchParams.set('query_timeout', '30');
        return urlObj.toString();
    }
    return url;
};
const createPrismaClient = ()=>{
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
    // Production'da (Vercel) her istekte yeni client oluştur
    if (process.env.VERCEL || ("TURBOPACK compile-time value", "development") === 'production') {
        return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            },
            log: [
                'error'
            ]
        });
    }
    // Development'ta singleton pattern
    if (!global.__prisma) {
        global.__prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            },
            log: [
                'query',
                'error',
                'warn'
            ]
        });
    }
    return global.__prisma;
})();
}}),
"[project]/src/app/api/sirketler/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { sirket_adi, vergi_numarasi } = body;
        console.log('Şirket ekleme isteği alındı:', {
            sirket_adi,
            vergi_numarasi
        });
        // Gerekli alanları kontrol et
        if (!sirket_adi || !vergi_numarasi) {
            console.log('Eksik bilgi:', {
                sirket_adi,
                vergi_numarasi
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Şirket adı ve vergi numarası alanları zorunludur'
            }, {
                status: 400
            });
        }
        // Veritabanına şirketi ekle
        const yeniSirket = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].sirketler.create({
            data: {
                sirket_adi,
                vergi_numarasi
            }
        });
        console.log('Şirket başarıyla eklendi:', yeniSirket);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            basarili: true,
            mesaj: 'Şirket başarıyla eklendi',
            sirket: yeniSirket
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Şirket ekleme hatası:', error);
        // Vergi numarası benzersizlik hatası artık kontrol edilmiyor
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Şirket eklenirken bir hata oluştu: ' + error.message
        }, {
            status: 500
        });
    } finally{
        // Vercel serverless prepared statement sorunları için explicit disconnect
        if (process.env.VERCEL) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$disconnect();
        }
    }
}
async function GET() {
    try {
        console.log('Şirketler listesi isteği alındı');
        // Tüm şirketleri getir
        const tumSirketler = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].sirketler.findMany();
        console.log(`${tumSirketler.length} şirket bulundu:`, JSON.stringify(tumSirketler));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(tumSirketler);
    } catch (error) {
        console.error('Şirketleri getirme hatası:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Şirketler getirilirken bir hata oluştu: ' + error.message
        }, {
            status: 500
        });
    } finally{
        // Vercel serverless prepared statement sorunları için explicit disconnect
        if (process.env.VERCEL) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$disconnect();
        }
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b6fa21b6._.js.map