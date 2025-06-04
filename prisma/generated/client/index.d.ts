
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sirketler
 * 
 */
export type Sirketler = $Result.DefaultSelection<Prisma.$SirketlerPayload>
/**
 * Model Araclar
 * 
 */
export type Araclar = $Result.DefaultSelection<Prisma.$AraclarPayload>
/**
 * Model Seferler
 * 
 */
export type Seferler = $Result.DefaultSelection<Prisma.$SeferlerPayload>
/**
 * Model SirketFiyatListesi
 * 
 */
export type SirketFiyatListesi = $Result.DefaultSelection<Prisma.$SirketFiyatListesiPayload>
/**
 * Model SirketCekler
 * 
 */
export type SirketCekler = $Result.DefaultSelection<Prisma.$SirketCeklerPayload>
/**
 * Model AracOdemeKayitlari
 * 
 */
export type AracOdemeKayitlari = $Result.DefaultSelection<Prisma.$AracOdemeKayitlariPayload>
/**
 * Model YuklenenExcelDosyalar
 * 
 */
export type YuklenenExcelDosyalar = $Result.DefaultSelection<Prisma.$YuklenenExcelDosyalarPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sirketlers
 * const sirketlers = await prisma.sirketler.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sirketlers
   * const sirketlers = await prisma.sirketler.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sirketler`: Exposes CRUD operations for the **Sirketler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sirketlers
    * const sirketlers = await prisma.sirketler.findMany()
    * ```
    */
  get sirketler(): Prisma.SirketlerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.araclar`: Exposes CRUD operations for the **Araclar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Araclars
    * const araclars = await prisma.araclar.findMany()
    * ```
    */
  get araclar(): Prisma.AraclarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seferler`: Exposes CRUD operations for the **Seferler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seferlers
    * const seferlers = await prisma.seferler.findMany()
    * ```
    */
  get seferler(): Prisma.SeferlerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sirketFiyatListesi`: Exposes CRUD operations for the **SirketFiyatListesi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SirketFiyatListesis
    * const sirketFiyatListesis = await prisma.sirketFiyatListesi.findMany()
    * ```
    */
  get sirketFiyatListesi(): Prisma.SirketFiyatListesiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sirketCekler`: Exposes CRUD operations for the **SirketCekler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SirketCeklers
    * const sirketCeklers = await prisma.sirketCekler.findMany()
    * ```
    */
  get sirketCekler(): Prisma.SirketCeklerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aracOdemeKayitlari`: Exposes CRUD operations for the **AracOdemeKayitlari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AracOdemeKayitlaris
    * const aracOdemeKayitlaris = await prisma.aracOdemeKayitlari.findMany()
    * ```
    */
  get aracOdemeKayitlari(): Prisma.AracOdemeKayitlariDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yuklenenExcelDosyalar`: Exposes CRUD operations for the **YuklenenExcelDosyalar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YuklenenExcelDosyalars
    * const yuklenenExcelDosyalars = await prisma.yuklenenExcelDosyalar.findMany()
    * ```
    */
  get yuklenenExcelDosyalar(): Prisma.YuklenenExcelDosyalarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Sirketler: 'Sirketler',
    Araclar: 'Araclar',
    Seferler: 'Seferler',
    SirketFiyatListesi: 'SirketFiyatListesi',
    SirketCekler: 'SirketCekler',
    AracOdemeKayitlari: 'AracOdemeKayitlari',
    YuklenenExcelDosyalar: 'YuklenenExcelDosyalar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sirketler" | "araclar" | "seferler" | "sirketFiyatListesi" | "sirketCekler" | "aracOdemeKayitlari" | "yuklenenExcelDosyalar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sirketler: {
        payload: Prisma.$SirketlerPayload<ExtArgs>
        fields: Prisma.SirketlerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SirketlerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SirketlerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>
          }
          findFirst: {
            args: Prisma.SirketlerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SirketlerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>
          }
          findMany: {
            args: Prisma.SirketlerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>[]
          }
          create: {
            args: Prisma.SirketlerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>
          }
          createMany: {
            args: Prisma.SirketlerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SirketlerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>[]
          }
          delete: {
            args: Prisma.SirketlerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>
          }
          update: {
            args: Prisma.SirketlerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>
          }
          deleteMany: {
            args: Prisma.SirketlerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SirketlerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SirketlerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>[]
          }
          upsert: {
            args: Prisma.SirketlerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketlerPayload>
          }
          aggregate: {
            args: Prisma.SirketlerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSirketler>
          }
          groupBy: {
            args: Prisma.SirketlerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SirketlerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SirketlerCountArgs<ExtArgs>
            result: $Utils.Optional<SirketlerCountAggregateOutputType> | number
          }
        }
      }
      Araclar: {
        payload: Prisma.$AraclarPayload<ExtArgs>
        fields: Prisma.AraclarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AraclarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AraclarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>
          }
          findFirst: {
            args: Prisma.AraclarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AraclarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>
          }
          findMany: {
            args: Prisma.AraclarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>[]
          }
          create: {
            args: Prisma.AraclarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>
          }
          createMany: {
            args: Prisma.AraclarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AraclarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>[]
          }
          delete: {
            args: Prisma.AraclarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>
          }
          update: {
            args: Prisma.AraclarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>
          }
          deleteMany: {
            args: Prisma.AraclarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AraclarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AraclarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>[]
          }
          upsert: {
            args: Prisma.AraclarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AraclarPayload>
          }
          aggregate: {
            args: Prisma.AraclarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAraclar>
          }
          groupBy: {
            args: Prisma.AraclarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AraclarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AraclarCountArgs<ExtArgs>
            result: $Utils.Optional<AraclarCountAggregateOutputType> | number
          }
        }
      }
      Seferler: {
        payload: Prisma.$SeferlerPayload<ExtArgs>
        fields: Prisma.SeferlerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeferlerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeferlerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>
          }
          findFirst: {
            args: Prisma.SeferlerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeferlerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>
          }
          findMany: {
            args: Prisma.SeferlerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>[]
          }
          create: {
            args: Prisma.SeferlerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>
          }
          createMany: {
            args: Prisma.SeferlerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeferlerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>[]
          }
          delete: {
            args: Prisma.SeferlerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>
          }
          update: {
            args: Prisma.SeferlerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>
          }
          deleteMany: {
            args: Prisma.SeferlerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeferlerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeferlerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>[]
          }
          upsert: {
            args: Prisma.SeferlerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeferlerPayload>
          }
          aggregate: {
            args: Prisma.SeferlerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeferler>
          }
          groupBy: {
            args: Prisma.SeferlerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeferlerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeferlerCountArgs<ExtArgs>
            result: $Utils.Optional<SeferlerCountAggregateOutputType> | number
          }
        }
      }
      SirketFiyatListesi: {
        payload: Prisma.$SirketFiyatListesiPayload<ExtArgs>
        fields: Prisma.SirketFiyatListesiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SirketFiyatListesiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SirketFiyatListesiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>
          }
          findFirst: {
            args: Prisma.SirketFiyatListesiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SirketFiyatListesiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>
          }
          findMany: {
            args: Prisma.SirketFiyatListesiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>[]
          }
          create: {
            args: Prisma.SirketFiyatListesiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>
          }
          createMany: {
            args: Prisma.SirketFiyatListesiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SirketFiyatListesiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>[]
          }
          delete: {
            args: Prisma.SirketFiyatListesiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>
          }
          update: {
            args: Prisma.SirketFiyatListesiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>
          }
          deleteMany: {
            args: Prisma.SirketFiyatListesiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SirketFiyatListesiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SirketFiyatListesiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>[]
          }
          upsert: {
            args: Prisma.SirketFiyatListesiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketFiyatListesiPayload>
          }
          aggregate: {
            args: Prisma.SirketFiyatListesiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSirketFiyatListesi>
          }
          groupBy: {
            args: Prisma.SirketFiyatListesiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SirketFiyatListesiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SirketFiyatListesiCountArgs<ExtArgs>
            result: $Utils.Optional<SirketFiyatListesiCountAggregateOutputType> | number
          }
        }
      }
      SirketCekler: {
        payload: Prisma.$SirketCeklerPayload<ExtArgs>
        fields: Prisma.SirketCeklerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SirketCeklerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SirketCeklerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>
          }
          findFirst: {
            args: Prisma.SirketCeklerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SirketCeklerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>
          }
          findMany: {
            args: Prisma.SirketCeklerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>[]
          }
          create: {
            args: Prisma.SirketCeklerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>
          }
          createMany: {
            args: Prisma.SirketCeklerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SirketCeklerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>[]
          }
          delete: {
            args: Prisma.SirketCeklerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>
          }
          update: {
            args: Prisma.SirketCeklerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>
          }
          deleteMany: {
            args: Prisma.SirketCeklerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SirketCeklerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SirketCeklerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>[]
          }
          upsert: {
            args: Prisma.SirketCeklerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SirketCeklerPayload>
          }
          aggregate: {
            args: Prisma.SirketCeklerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSirketCekler>
          }
          groupBy: {
            args: Prisma.SirketCeklerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SirketCeklerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SirketCeklerCountArgs<ExtArgs>
            result: $Utils.Optional<SirketCeklerCountAggregateOutputType> | number
          }
        }
      }
      AracOdemeKayitlari: {
        payload: Prisma.$AracOdemeKayitlariPayload<ExtArgs>
        fields: Prisma.AracOdemeKayitlariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AracOdemeKayitlariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AracOdemeKayitlariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>
          }
          findFirst: {
            args: Prisma.AracOdemeKayitlariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AracOdemeKayitlariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>
          }
          findMany: {
            args: Prisma.AracOdemeKayitlariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>[]
          }
          create: {
            args: Prisma.AracOdemeKayitlariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>
          }
          createMany: {
            args: Prisma.AracOdemeKayitlariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AracOdemeKayitlariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>[]
          }
          delete: {
            args: Prisma.AracOdemeKayitlariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>
          }
          update: {
            args: Prisma.AracOdemeKayitlariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>
          }
          deleteMany: {
            args: Prisma.AracOdemeKayitlariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AracOdemeKayitlariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AracOdemeKayitlariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>[]
          }
          upsert: {
            args: Prisma.AracOdemeKayitlariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AracOdemeKayitlariPayload>
          }
          aggregate: {
            args: Prisma.AracOdemeKayitlariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAracOdemeKayitlari>
          }
          groupBy: {
            args: Prisma.AracOdemeKayitlariGroupByArgs<ExtArgs>
            result: $Utils.Optional<AracOdemeKayitlariGroupByOutputType>[]
          }
          count: {
            args: Prisma.AracOdemeKayitlariCountArgs<ExtArgs>
            result: $Utils.Optional<AracOdemeKayitlariCountAggregateOutputType> | number
          }
        }
      }
      YuklenenExcelDosyalar: {
        payload: Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>
        fields: Prisma.YuklenenExcelDosyalarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YuklenenExcelDosyalarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YuklenenExcelDosyalarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>
          }
          findFirst: {
            args: Prisma.YuklenenExcelDosyalarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YuklenenExcelDosyalarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>
          }
          findMany: {
            args: Prisma.YuklenenExcelDosyalarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>[]
          }
          create: {
            args: Prisma.YuklenenExcelDosyalarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>
          }
          createMany: {
            args: Prisma.YuklenenExcelDosyalarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YuklenenExcelDosyalarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>[]
          }
          delete: {
            args: Prisma.YuklenenExcelDosyalarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>
          }
          update: {
            args: Prisma.YuklenenExcelDosyalarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>
          }
          deleteMany: {
            args: Prisma.YuklenenExcelDosyalarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YuklenenExcelDosyalarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YuklenenExcelDosyalarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>[]
          }
          upsert: {
            args: Prisma.YuklenenExcelDosyalarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YuklenenExcelDosyalarPayload>
          }
          aggregate: {
            args: Prisma.YuklenenExcelDosyalarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYuklenenExcelDosyalar>
          }
          groupBy: {
            args: Prisma.YuklenenExcelDosyalarGroupByArgs<ExtArgs>
            result: $Utils.Optional<YuklenenExcelDosyalarGroupByOutputType>[]
          }
          count: {
            args: Prisma.YuklenenExcelDosyalarCountArgs<ExtArgs>
            result: $Utils.Optional<YuklenenExcelDosyalarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sirketler?: SirketlerOmit
    araclar?: AraclarOmit
    seferler?: SeferlerOmit
    sirketFiyatListesi?: SirketFiyatListesiOmit
    sirketCekler?: SirketCeklerOmit
    aracOdemeKayitlari?: AracOdemeKayitlariOmit
    yuklenenExcelDosyalar?: YuklenenExcelDosyalarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SirketlerCountOutputType
   */

  export type SirketlerCountOutputType = {
    araclar: number
    seferler: number
    fiyat_listesi: number
    cekler: number
  }

  export type SirketlerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    araclar?: boolean | SirketlerCountOutputTypeCountAraclarArgs
    seferler?: boolean | SirketlerCountOutputTypeCountSeferlerArgs
    fiyat_listesi?: boolean | SirketlerCountOutputTypeCountFiyat_listesiArgs
    cekler?: boolean | SirketlerCountOutputTypeCountCeklerArgs
  }

  // Custom InputTypes
  /**
   * SirketlerCountOutputType without action
   */
  export type SirketlerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketlerCountOutputType
     */
    select?: SirketlerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SirketlerCountOutputType without action
   */
  export type SirketlerCountOutputTypeCountAraclarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AraclarWhereInput
  }

  /**
   * SirketlerCountOutputType without action
   */
  export type SirketlerCountOutputTypeCountSeferlerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeferlerWhereInput
  }

  /**
   * SirketlerCountOutputType without action
   */
  export type SirketlerCountOutputTypeCountFiyat_listesiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SirketFiyatListesiWhereInput
  }

  /**
   * SirketlerCountOutputType without action
   */
  export type SirketlerCountOutputTypeCountCeklerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SirketCeklerWhereInput
  }


  /**
   * Count Type AraclarCountOutputType
   */

  export type AraclarCountOutputType = {
    seferler: number
    odemeler: number
  }

  export type AraclarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seferler?: boolean | AraclarCountOutputTypeCountSeferlerArgs
    odemeler?: boolean | AraclarCountOutputTypeCountOdemelerArgs
  }

  // Custom InputTypes
  /**
   * AraclarCountOutputType without action
   */
  export type AraclarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AraclarCountOutputType
     */
    select?: AraclarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AraclarCountOutputType without action
   */
  export type AraclarCountOutputTypeCountSeferlerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeferlerWhereInput
  }

  /**
   * AraclarCountOutputType without action
   */
  export type AraclarCountOutputTypeCountOdemelerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AracOdemeKayitlariWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sirketler
   */

  export type AggregateSirketler = {
    _count: SirketlerCountAggregateOutputType | null
    _avg: SirketlerAvgAggregateOutputType | null
    _sum: SirketlerSumAggregateOutputType | null
    _min: SirketlerMinAggregateOutputType | null
    _max: SirketlerMaxAggregateOutputType | null
  }

  export type SirketlerAvgAggregateOutputType = {
    sirket_id: number | null
  }

  export type SirketlerSumAggregateOutputType = {
    sirket_id: number | null
  }

  export type SirketlerMinAggregateOutputType = {
    sirket_id: number | null
    sirket_adi: string | null
    vergi_numarasi: string | null
  }

  export type SirketlerMaxAggregateOutputType = {
    sirket_id: number | null
    sirket_adi: string | null
    vergi_numarasi: string | null
  }

  export type SirketlerCountAggregateOutputType = {
    sirket_id: number
    sirket_adi: number
    vergi_numarasi: number
    _all: number
  }


  export type SirketlerAvgAggregateInputType = {
    sirket_id?: true
  }

  export type SirketlerSumAggregateInputType = {
    sirket_id?: true
  }

  export type SirketlerMinAggregateInputType = {
    sirket_id?: true
    sirket_adi?: true
    vergi_numarasi?: true
  }

  export type SirketlerMaxAggregateInputType = {
    sirket_id?: true
    sirket_adi?: true
    vergi_numarasi?: true
  }

  export type SirketlerCountAggregateInputType = {
    sirket_id?: true
    sirket_adi?: true
    vergi_numarasi?: true
    _all?: true
  }

  export type SirketlerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sirketler to aggregate.
     */
    where?: SirketlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sirketlers to fetch.
     */
    orderBy?: SirketlerOrderByWithRelationInput | SirketlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SirketlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sirketlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sirketlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sirketlers
    **/
    _count?: true | SirketlerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SirketlerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SirketlerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SirketlerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SirketlerMaxAggregateInputType
  }

  export type GetSirketlerAggregateType<T extends SirketlerAggregateArgs> = {
        [P in keyof T & keyof AggregateSirketler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSirketler[P]>
      : GetScalarType<T[P], AggregateSirketler[P]>
  }




  export type SirketlerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SirketlerWhereInput
    orderBy?: SirketlerOrderByWithAggregationInput | SirketlerOrderByWithAggregationInput[]
    by: SirketlerScalarFieldEnum[] | SirketlerScalarFieldEnum
    having?: SirketlerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SirketlerCountAggregateInputType | true
    _avg?: SirketlerAvgAggregateInputType
    _sum?: SirketlerSumAggregateInputType
    _min?: SirketlerMinAggregateInputType
    _max?: SirketlerMaxAggregateInputType
  }

  export type SirketlerGroupByOutputType = {
    sirket_id: number
    sirket_adi: string
    vergi_numarasi: string
    _count: SirketlerCountAggregateOutputType | null
    _avg: SirketlerAvgAggregateOutputType | null
    _sum: SirketlerSumAggregateOutputType | null
    _min: SirketlerMinAggregateOutputType | null
    _max: SirketlerMaxAggregateOutputType | null
  }

  type GetSirketlerGroupByPayload<T extends SirketlerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SirketlerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SirketlerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SirketlerGroupByOutputType[P]>
            : GetScalarType<T[P], SirketlerGroupByOutputType[P]>
        }
      >
    >


  export type SirketlerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sirket_id?: boolean
    sirket_adi?: boolean
    vergi_numarasi?: boolean
    araclar?: boolean | Sirketler$araclarArgs<ExtArgs>
    seferler?: boolean | Sirketler$seferlerArgs<ExtArgs>
    fiyat_listesi?: boolean | Sirketler$fiyat_listesiArgs<ExtArgs>
    cekler?: boolean | Sirketler$ceklerArgs<ExtArgs>
    _count?: boolean | SirketlerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketler"]>

  export type SirketlerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sirket_id?: boolean
    sirket_adi?: boolean
    vergi_numarasi?: boolean
  }, ExtArgs["result"]["sirketler"]>

  export type SirketlerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sirket_id?: boolean
    sirket_adi?: boolean
    vergi_numarasi?: boolean
  }, ExtArgs["result"]["sirketler"]>

  export type SirketlerSelectScalar = {
    sirket_id?: boolean
    sirket_adi?: boolean
    vergi_numarasi?: boolean
  }

  export type SirketlerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sirket_id" | "sirket_adi" | "vergi_numarasi", ExtArgs["result"]["sirketler"]>
  export type SirketlerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    araclar?: boolean | Sirketler$araclarArgs<ExtArgs>
    seferler?: boolean | Sirketler$seferlerArgs<ExtArgs>
    fiyat_listesi?: boolean | Sirketler$fiyat_listesiArgs<ExtArgs>
    cekler?: boolean | Sirketler$ceklerArgs<ExtArgs>
    _count?: boolean | SirketlerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SirketlerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SirketlerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SirketlerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sirketler"
    objects: {
      araclar: Prisma.$AraclarPayload<ExtArgs>[]
      seferler: Prisma.$SeferlerPayload<ExtArgs>[]
      fiyat_listesi: Prisma.$SirketFiyatListesiPayload<ExtArgs>[]
      cekler: Prisma.$SirketCeklerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sirket_id: number
      sirket_adi: string
      vergi_numarasi: string
    }, ExtArgs["result"]["sirketler"]>
    composites: {}
  }

  type SirketlerGetPayload<S extends boolean | null | undefined | SirketlerDefaultArgs> = $Result.GetResult<Prisma.$SirketlerPayload, S>

  type SirketlerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SirketlerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SirketlerCountAggregateInputType | true
    }

  export interface SirketlerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sirketler'], meta: { name: 'Sirketler' } }
    /**
     * Find zero or one Sirketler that matches the filter.
     * @param {SirketlerFindUniqueArgs} args - Arguments to find a Sirketler
     * @example
     * // Get one Sirketler
     * const sirketler = await prisma.sirketler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SirketlerFindUniqueArgs>(args: SelectSubset<T, SirketlerFindUniqueArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sirketler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SirketlerFindUniqueOrThrowArgs} args - Arguments to find a Sirketler
     * @example
     * // Get one Sirketler
     * const sirketler = await prisma.sirketler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SirketlerFindUniqueOrThrowArgs>(args: SelectSubset<T, SirketlerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sirketler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerFindFirstArgs} args - Arguments to find a Sirketler
     * @example
     * // Get one Sirketler
     * const sirketler = await prisma.sirketler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SirketlerFindFirstArgs>(args?: SelectSubset<T, SirketlerFindFirstArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sirketler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerFindFirstOrThrowArgs} args - Arguments to find a Sirketler
     * @example
     * // Get one Sirketler
     * const sirketler = await prisma.sirketler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SirketlerFindFirstOrThrowArgs>(args?: SelectSubset<T, SirketlerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sirketlers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sirketlers
     * const sirketlers = await prisma.sirketler.findMany()
     * 
     * // Get first 10 Sirketlers
     * const sirketlers = await prisma.sirketler.findMany({ take: 10 })
     * 
     * // Only select the `sirket_id`
     * const sirketlerWithSirket_idOnly = await prisma.sirketler.findMany({ select: { sirket_id: true } })
     * 
     */
    findMany<T extends SirketlerFindManyArgs>(args?: SelectSubset<T, SirketlerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sirketler.
     * @param {SirketlerCreateArgs} args - Arguments to create a Sirketler.
     * @example
     * // Create one Sirketler
     * const Sirketler = await prisma.sirketler.create({
     *   data: {
     *     // ... data to create a Sirketler
     *   }
     * })
     * 
     */
    create<T extends SirketlerCreateArgs>(args: SelectSubset<T, SirketlerCreateArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sirketlers.
     * @param {SirketlerCreateManyArgs} args - Arguments to create many Sirketlers.
     * @example
     * // Create many Sirketlers
     * const sirketler = await prisma.sirketler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SirketlerCreateManyArgs>(args?: SelectSubset<T, SirketlerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sirketlers and returns the data saved in the database.
     * @param {SirketlerCreateManyAndReturnArgs} args - Arguments to create many Sirketlers.
     * @example
     * // Create many Sirketlers
     * const sirketler = await prisma.sirketler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sirketlers and only return the `sirket_id`
     * const sirketlerWithSirket_idOnly = await prisma.sirketler.createManyAndReturn({
     *   select: { sirket_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SirketlerCreateManyAndReturnArgs>(args?: SelectSubset<T, SirketlerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sirketler.
     * @param {SirketlerDeleteArgs} args - Arguments to delete one Sirketler.
     * @example
     * // Delete one Sirketler
     * const Sirketler = await prisma.sirketler.delete({
     *   where: {
     *     // ... filter to delete one Sirketler
     *   }
     * })
     * 
     */
    delete<T extends SirketlerDeleteArgs>(args: SelectSubset<T, SirketlerDeleteArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sirketler.
     * @param {SirketlerUpdateArgs} args - Arguments to update one Sirketler.
     * @example
     * // Update one Sirketler
     * const sirketler = await prisma.sirketler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SirketlerUpdateArgs>(args: SelectSubset<T, SirketlerUpdateArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sirketlers.
     * @param {SirketlerDeleteManyArgs} args - Arguments to filter Sirketlers to delete.
     * @example
     * // Delete a few Sirketlers
     * const { count } = await prisma.sirketler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SirketlerDeleteManyArgs>(args?: SelectSubset<T, SirketlerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sirketlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sirketlers
     * const sirketler = await prisma.sirketler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SirketlerUpdateManyArgs>(args: SelectSubset<T, SirketlerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sirketlers and returns the data updated in the database.
     * @param {SirketlerUpdateManyAndReturnArgs} args - Arguments to update many Sirketlers.
     * @example
     * // Update many Sirketlers
     * const sirketler = await prisma.sirketler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sirketlers and only return the `sirket_id`
     * const sirketlerWithSirket_idOnly = await prisma.sirketler.updateManyAndReturn({
     *   select: { sirket_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SirketlerUpdateManyAndReturnArgs>(args: SelectSubset<T, SirketlerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sirketler.
     * @param {SirketlerUpsertArgs} args - Arguments to update or create a Sirketler.
     * @example
     * // Update or create a Sirketler
     * const sirketler = await prisma.sirketler.upsert({
     *   create: {
     *     // ... data to create a Sirketler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sirketler we want to update
     *   }
     * })
     */
    upsert<T extends SirketlerUpsertArgs>(args: SelectSubset<T, SirketlerUpsertArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sirketlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerCountArgs} args - Arguments to filter Sirketlers to count.
     * @example
     * // Count the number of Sirketlers
     * const count = await prisma.sirketler.count({
     *   where: {
     *     // ... the filter for the Sirketlers we want to count
     *   }
     * })
    **/
    count<T extends SirketlerCountArgs>(
      args?: Subset<T, SirketlerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SirketlerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sirketler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SirketlerAggregateArgs>(args: Subset<T, SirketlerAggregateArgs>): Prisma.PrismaPromise<GetSirketlerAggregateType<T>>

    /**
     * Group by Sirketler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketlerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SirketlerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SirketlerGroupByArgs['orderBy'] }
        : { orderBy?: SirketlerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SirketlerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSirketlerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sirketler model
   */
  readonly fields: SirketlerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sirketler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SirketlerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    araclar<T extends Sirketler$araclarArgs<ExtArgs> = {}>(args?: Subset<T, Sirketler$araclarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seferler<T extends Sirketler$seferlerArgs<ExtArgs> = {}>(args?: Subset<T, Sirketler$seferlerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fiyat_listesi<T extends Sirketler$fiyat_listesiArgs<ExtArgs> = {}>(args?: Subset<T, Sirketler$fiyat_listesiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cekler<T extends Sirketler$ceklerArgs<ExtArgs> = {}>(args?: Subset<T, Sirketler$ceklerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sirketler model
   */
  interface SirketlerFieldRefs {
    readonly sirket_id: FieldRef<"Sirketler", 'Int'>
    readonly sirket_adi: FieldRef<"Sirketler", 'String'>
    readonly vergi_numarasi: FieldRef<"Sirketler", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sirketler findUnique
   */
  export type SirketlerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * Filter, which Sirketler to fetch.
     */
    where: SirketlerWhereUniqueInput
  }

  /**
   * Sirketler findUniqueOrThrow
   */
  export type SirketlerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * Filter, which Sirketler to fetch.
     */
    where: SirketlerWhereUniqueInput
  }

  /**
   * Sirketler findFirst
   */
  export type SirketlerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * Filter, which Sirketler to fetch.
     */
    where?: SirketlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sirketlers to fetch.
     */
    orderBy?: SirketlerOrderByWithRelationInput | SirketlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sirketlers.
     */
    cursor?: SirketlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sirketlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sirketlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sirketlers.
     */
    distinct?: SirketlerScalarFieldEnum | SirketlerScalarFieldEnum[]
  }

  /**
   * Sirketler findFirstOrThrow
   */
  export type SirketlerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * Filter, which Sirketler to fetch.
     */
    where?: SirketlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sirketlers to fetch.
     */
    orderBy?: SirketlerOrderByWithRelationInput | SirketlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sirketlers.
     */
    cursor?: SirketlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sirketlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sirketlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sirketlers.
     */
    distinct?: SirketlerScalarFieldEnum | SirketlerScalarFieldEnum[]
  }

  /**
   * Sirketler findMany
   */
  export type SirketlerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * Filter, which Sirketlers to fetch.
     */
    where?: SirketlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sirketlers to fetch.
     */
    orderBy?: SirketlerOrderByWithRelationInput | SirketlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sirketlers.
     */
    cursor?: SirketlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sirketlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sirketlers.
     */
    skip?: number
    distinct?: SirketlerScalarFieldEnum | SirketlerScalarFieldEnum[]
  }

  /**
   * Sirketler create
   */
  export type SirketlerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * The data needed to create a Sirketler.
     */
    data: XOR<SirketlerCreateInput, SirketlerUncheckedCreateInput>
  }

  /**
   * Sirketler createMany
   */
  export type SirketlerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sirketlers.
     */
    data: SirketlerCreateManyInput | SirketlerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sirketler createManyAndReturn
   */
  export type SirketlerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * The data used to create many Sirketlers.
     */
    data: SirketlerCreateManyInput | SirketlerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sirketler update
   */
  export type SirketlerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * The data needed to update a Sirketler.
     */
    data: XOR<SirketlerUpdateInput, SirketlerUncheckedUpdateInput>
    /**
     * Choose, which Sirketler to update.
     */
    where: SirketlerWhereUniqueInput
  }

  /**
   * Sirketler updateMany
   */
  export type SirketlerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sirketlers.
     */
    data: XOR<SirketlerUpdateManyMutationInput, SirketlerUncheckedUpdateManyInput>
    /**
     * Filter which Sirketlers to update
     */
    where?: SirketlerWhereInput
    /**
     * Limit how many Sirketlers to update.
     */
    limit?: number
  }

  /**
   * Sirketler updateManyAndReturn
   */
  export type SirketlerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * The data used to update Sirketlers.
     */
    data: XOR<SirketlerUpdateManyMutationInput, SirketlerUncheckedUpdateManyInput>
    /**
     * Filter which Sirketlers to update
     */
    where?: SirketlerWhereInput
    /**
     * Limit how many Sirketlers to update.
     */
    limit?: number
  }

  /**
   * Sirketler upsert
   */
  export type SirketlerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * The filter to search for the Sirketler to update in case it exists.
     */
    where: SirketlerWhereUniqueInput
    /**
     * In case the Sirketler found by the `where` argument doesn't exist, create a new Sirketler with this data.
     */
    create: XOR<SirketlerCreateInput, SirketlerUncheckedCreateInput>
    /**
     * In case the Sirketler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SirketlerUpdateInput, SirketlerUncheckedUpdateInput>
  }

  /**
   * Sirketler delete
   */
  export type SirketlerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
    /**
     * Filter which Sirketler to delete.
     */
    where: SirketlerWhereUniqueInput
  }

  /**
   * Sirketler deleteMany
   */
  export type SirketlerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sirketlers to delete
     */
    where?: SirketlerWhereInput
    /**
     * Limit how many Sirketlers to delete.
     */
    limit?: number
  }

  /**
   * Sirketler.araclar
   */
  export type Sirketler$araclarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    where?: AraclarWhereInput
    orderBy?: AraclarOrderByWithRelationInput | AraclarOrderByWithRelationInput[]
    cursor?: AraclarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AraclarScalarFieldEnum | AraclarScalarFieldEnum[]
  }

  /**
   * Sirketler.seferler
   */
  export type Sirketler$seferlerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    where?: SeferlerWhereInput
    orderBy?: SeferlerOrderByWithRelationInput | SeferlerOrderByWithRelationInput[]
    cursor?: SeferlerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeferlerScalarFieldEnum | SeferlerScalarFieldEnum[]
  }

  /**
   * Sirketler.fiyat_listesi
   */
  export type Sirketler$fiyat_listesiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    where?: SirketFiyatListesiWhereInput
    orderBy?: SirketFiyatListesiOrderByWithRelationInput | SirketFiyatListesiOrderByWithRelationInput[]
    cursor?: SirketFiyatListesiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SirketFiyatListesiScalarFieldEnum | SirketFiyatListesiScalarFieldEnum[]
  }

  /**
   * Sirketler.cekler
   */
  export type Sirketler$ceklerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    where?: SirketCeklerWhereInput
    orderBy?: SirketCeklerOrderByWithRelationInput | SirketCeklerOrderByWithRelationInput[]
    cursor?: SirketCeklerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SirketCeklerScalarFieldEnum | SirketCeklerScalarFieldEnum[]
  }

  /**
   * Sirketler without action
   */
  export type SirketlerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sirketler
     */
    select?: SirketlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sirketler
     */
    omit?: SirketlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketlerInclude<ExtArgs> | null
  }


  /**
   * Model Araclar
   */

  export type AggregateAraclar = {
    _count: AraclarCountAggregateOutputType | null
    _avg: AraclarAvgAggregateOutputType | null
    _sum: AraclarSumAggregateOutputType | null
    _min: AraclarMinAggregateOutputType | null
    _max: AraclarMaxAggregateOutputType | null
  }

  export type AraclarAvgAggregateOutputType = {
    arac_id: number | null
    sirket_id: number | null
  }

  export type AraclarSumAggregateOutputType = {
    arac_id: number | null
    sirket_id: number | null
  }

  export type AraclarMinAggregateOutputType = {
    arac_id: number | null
    plaka: string | null
    sofor_adi: string | null
    vergi_numarasi: string | null
    sirket_id: number | null
  }

  export type AraclarMaxAggregateOutputType = {
    arac_id: number | null
    plaka: string | null
    sofor_adi: string | null
    vergi_numarasi: string | null
    sirket_id: number | null
  }

  export type AraclarCountAggregateOutputType = {
    arac_id: number
    plaka: number
    sofor_adi: number
    vergi_numarasi: number
    sirket_id: number
    _all: number
  }


  export type AraclarAvgAggregateInputType = {
    arac_id?: true
    sirket_id?: true
  }

  export type AraclarSumAggregateInputType = {
    arac_id?: true
    sirket_id?: true
  }

  export type AraclarMinAggregateInputType = {
    arac_id?: true
    plaka?: true
    sofor_adi?: true
    vergi_numarasi?: true
    sirket_id?: true
  }

  export type AraclarMaxAggregateInputType = {
    arac_id?: true
    plaka?: true
    sofor_adi?: true
    vergi_numarasi?: true
    sirket_id?: true
  }

  export type AraclarCountAggregateInputType = {
    arac_id?: true
    plaka?: true
    sofor_adi?: true
    vergi_numarasi?: true
    sirket_id?: true
    _all?: true
  }

  export type AraclarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Araclar to aggregate.
     */
    where?: AraclarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Araclars to fetch.
     */
    orderBy?: AraclarOrderByWithRelationInput | AraclarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AraclarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Araclars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Araclars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Araclars
    **/
    _count?: true | AraclarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AraclarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AraclarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AraclarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AraclarMaxAggregateInputType
  }

  export type GetAraclarAggregateType<T extends AraclarAggregateArgs> = {
        [P in keyof T & keyof AggregateAraclar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAraclar[P]>
      : GetScalarType<T[P], AggregateAraclar[P]>
  }




  export type AraclarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AraclarWhereInput
    orderBy?: AraclarOrderByWithAggregationInput | AraclarOrderByWithAggregationInput[]
    by: AraclarScalarFieldEnum[] | AraclarScalarFieldEnum
    having?: AraclarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AraclarCountAggregateInputType | true
    _avg?: AraclarAvgAggregateInputType
    _sum?: AraclarSumAggregateInputType
    _min?: AraclarMinAggregateInputType
    _max?: AraclarMaxAggregateInputType
  }

  export type AraclarGroupByOutputType = {
    arac_id: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket_id: number
    _count: AraclarCountAggregateOutputType | null
    _avg: AraclarAvgAggregateOutputType | null
    _sum: AraclarSumAggregateOutputType | null
    _min: AraclarMinAggregateOutputType | null
    _max: AraclarMaxAggregateOutputType | null
  }

  type GetAraclarGroupByPayload<T extends AraclarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AraclarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AraclarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AraclarGroupByOutputType[P]>
            : GetScalarType<T[P], AraclarGroupByOutputType[P]>
        }
      >
    >


  export type AraclarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arac_id?: boolean
    plaka?: boolean
    sofor_adi?: boolean
    vergi_numarasi?: boolean
    sirket_id?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    seferler?: boolean | Araclar$seferlerArgs<ExtArgs>
    odemeler?: boolean | Araclar$odemelerArgs<ExtArgs>
    _count?: boolean | AraclarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["araclar"]>

  export type AraclarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arac_id?: boolean
    plaka?: boolean
    sofor_adi?: boolean
    vergi_numarasi?: boolean
    sirket_id?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["araclar"]>

  export type AraclarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arac_id?: boolean
    plaka?: boolean
    sofor_adi?: boolean
    vergi_numarasi?: boolean
    sirket_id?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["araclar"]>

  export type AraclarSelectScalar = {
    arac_id?: boolean
    plaka?: boolean
    sofor_adi?: boolean
    vergi_numarasi?: boolean
    sirket_id?: boolean
  }

  export type AraclarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"arac_id" | "plaka" | "sofor_adi" | "vergi_numarasi" | "sirket_id", ExtArgs["result"]["araclar"]>
  export type AraclarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    seferler?: boolean | Araclar$seferlerArgs<ExtArgs>
    odemeler?: boolean | Araclar$odemelerArgs<ExtArgs>
    _count?: boolean | AraclarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AraclarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }
  export type AraclarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }

  export type $AraclarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Araclar"
    objects: {
      sirket: Prisma.$SirketlerPayload<ExtArgs>
      seferler: Prisma.$SeferlerPayload<ExtArgs>[]
      odemeler: Prisma.$AracOdemeKayitlariPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      arac_id: number
      plaka: string
      sofor_adi: string
      vergi_numarasi: string
      sirket_id: number
    }, ExtArgs["result"]["araclar"]>
    composites: {}
  }

  type AraclarGetPayload<S extends boolean | null | undefined | AraclarDefaultArgs> = $Result.GetResult<Prisma.$AraclarPayload, S>

  type AraclarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AraclarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AraclarCountAggregateInputType | true
    }

  export interface AraclarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Araclar'], meta: { name: 'Araclar' } }
    /**
     * Find zero or one Araclar that matches the filter.
     * @param {AraclarFindUniqueArgs} args - Arguments to find a Araclar
     * @example
     * // Get one Araclar
     * const araclar = await prisma.araclar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AraclarFindUniqueArgs>(args: SelectSubset<T, AraclarFindUniqueArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Araclar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AraclarFindUniqueOrThrowArgs} args - Arguments to find a Araclar
     * @example
     * // Get one Araclar
     * const araclar = await prisma.araclar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AraclarFindUniqueOrThrowArgs>(args: SelectSubset<T, AraclarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Araclar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarFindFirstArgs} args - Arguments to find a Araclar
     * @example
     * // Get one Araclar
     * const araclar = await prisma.araclar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AraclarFindFirstArgs>(args?: SelectSubset<T, AraclarFindFirstArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Araclar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarFindFirstOrThrowArgs} args - Arguments to find a Araclar
     * @example
     * // Get one Araclar
     * const araclar = await prisma.araclar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AraclarFindFirstOrThrowArgs>(args?: SelectSubset<T, AraclarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Araclars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Araclars
     * const araclars = await prisma.araclar.findMany()
     * 
     * // Get first 10 Araclars
     * const araclars = await prisma.araclar.findMany({ take: 10 })
     * 
     * // Only select the `arac_id`
     * const araclarWithArac_idOnly = await prisma.araclar.findMany({ select: { arac_id: true } })
     * 
     */
    findMany<T extends AraclarFindManyArgs>(args?: SelectSubset<T, AraclarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Araclar.
     * @param {AraclarCreateArgs} args - Arguments to create a Araclar.
     * @example
     * // Create one Araclar
     * const Araclar = await prisma.araclar.create({
     *   data: {
     *     // ... data to create a Araclar
     *   }
     * })
     * 
     */
    create<T extends AraclarCreateArgs>(args: SelectSubset<T, AraclarCreateArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Araclars.
     * @param {AraclarCreateManyArgs} args - Arguments to create many Araclars.
     * @example
     * // Create many Araclars
     * const araclar = await prisma.araclar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AraclarCreateManyArgs>(args?: SelectSubset<T, AraclarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Araclars and returns the data saved in the database.
     * @param {AraclarCreateManyAndReturnArgs} args - Arguments to create many Araclars.
     * @example
     * // Create many Araclars
     * const araclar = await prisma.araclar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Araclars and only return the `arac_id`
     * const araclarWithArac_idOnly = await prisma.araclar.createManyAndReturn({
     *   select: { arac_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AraclarCreateManyAndReturnArgs>(args?: SelectSubset<T, AraclarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Araclar.
     * @param {AraclarDeleteArgs} args - Arguments to delete one Araclar.
     * @example
     * // Delete one Araclar
     * const Araclar = await prisma.araclar.delete({
     *   where: {
     *     // ... filter to delete one Araclar
     *   }
     * })
     * 
     */
    delete<T extends AraclarDeleteArgs>(args: SelectSubset<T, AraclarDeleteArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Araclar.
     * @param {AraclarUpdateArgs} args - Arguments to update one Araclar.
     * @example
     * // Update one Araclar
     * const araclar = await prisma.araclar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AraclarUpdateArgs>(args: SelectSubset<T, AraclarUpdateArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Araclars.
     * @param {AraclarDeleteManyArgs} args - Arguments to filter Araclars to delete.
     * @example
     * // Delete a few Araclars
     * const { count } = await prisma.araclar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AraclarDeleteManyArgs>(args?: SelectSubset<T, AraclarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Araclars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Araclars
     * const araclar = await prisma.araclar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AraclarUpdateManyArgs>(args: SelectSubset<T, AraclarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Araclars and returns the data updated in the database.
     * @param {AraclarUpdateManyAndReturnArgs} args - Arguments to update many Araclars.
     * @example
     * // Update many Araclars
     * const araclar = await prisma.araclar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Araclars and only return the `arac_id`
     * const araclarWithArac_idOnly = await prisma.araclar.updateManyAndReturn({
     *   select: { arac_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AraclarUpdateManyAndReturnArgs>(args: SelectSubset<T, AraclarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Araclar.
     * @param {AraclarUpsertArgs} args - Arguments to update or create a Araclar.
     * @example
     * // Update or create a Araclar
     * const araclar = await prisma.araclar.upsert({
     *   create: {
     *     // ... data to create a Araclar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Araclar we want to update
     *   }
     * })
     */
    upsert<T extends AraclarUpsertArgs>(args: SelectSubset<T, AraclarUpsertArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Araclars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarCountArgs} args - Arguments to filter Araclars to count.
     * @example
     * // Count the number of Araclars
     * const count = await prisma.araclar.count({
     *   where: {
     *     // ... the filter for the Araclars we want to count
     *   }
     * })
    **/
    count<T extends AraclarCountArgs>(
      args?: Subset<T, AraclarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AraclarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Araclar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AraclarAggregateArgs>(args: Subset<T, AraclarAggregateArgs>): Prisma.PrismaPromise<GetAraclarAggregateType<T>>

    /**
     * Group by Araclar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AraclarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AraclarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AraclarGroupByArgs['orderBy'] }
        : { orderBy?: AraclarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AraclarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAraclarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Araclar model
   */
  readonly fields: AraclarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Araclar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AraclarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sirket<T extends SirketlerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SirketlerDefaultArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seferler<T extends Araclar$seferlerArgs<ExtArgs> = {}>(args?: Subset<T, Araclar$seferlerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    odemeler<T extends Araclar$odemelerArgs<ExtArgs> = {}>(args?: Subset<T, Araclar$odemelerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Araclar model
   */
  interface AraclarFieldRefs {
    readonly arac_id: FieldRef<"Araclar", 'Int'>
    readonly plaka: FieldRef<"Araclar", 'String'>
    readonly sofor_adi: FieldRef<"Araclar", 'String'>
    readonly vergi_numarasi: FieldRef<"Araclar", 'String'>
    readonly sirket_id: FieldRef<"Araclar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Araclar findUnique
   */
  export type AraclarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * Filter, which Araclar to fetch.
     */
    where: AraclarWhereUniqueInput
  }

  /**
   * Araclar findUniqueOrThrow
   */
  export type AraclarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * Filter, which Araclar to fetch.
     */
    where: AraclarWhereUniqueInput
  }

  /**
   * Araclar findFirst
   */
  export type AraclarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * Filter, which Araclar to fetch.
     */
    where?: AraclarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Araclars to fetch.
     */
    orderBy?: AraclarOrderByWithRelationInput | AraclarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Araclars.
     */
    cursor?: AraclarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Araclars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Araclars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Araclars.
     */
    distinct?: AraclarScalarFieldEnum | AraclarScalarFieldEnum[]
  }

  /**
   * Araclar findFirstOrThrow
   */
  export type AraclarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * Filter, which Araclar to fetch.
     */
    where?: AraclarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Araclars to fetch.
     */
    orderBy?: AraclarOrderByWithRelationInput | AraclarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Araclars.
     */
    cursor?: AraclarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Araclars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Araclars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Araclars.
     */
    distinct?: AraclarScalarFieldEnum | AraclarScalarFieldEnum[]
  }

  /**
   * Araclar findMany
   */
  export type AraclarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * Filter, which Araclars to fetch.
     */
    where?: AraclarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Araclars to fetch.
     */
    orderBy?: AraclarOrderByWithRelationInput | AraclarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Araclars.
     */
    cursor?: AraclarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Araclars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Araclars.
     */
    skip?: number
    distinct?: AraclarScalarFieldEnum | AraclarScalarFieldEnum[]
  }

  /**
   * Araclar create
   */
  export type AraclarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * The data needed to create a Araclar.
     */
    data: XOR<AraclarCreateInput, AraclarUncheckedCreateInput>
  }

  /**
   * Araclar createMany
   */
  export type AraclarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Araclars.
     */
    data: AraclarCreateManyInput | AraclarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Araclar createManyAndReturn
   */
  export type AraclarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * The data used to create many Araclars.
     */
    data: AraclarCreateManyInput | AraclarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Araclar update
   */
  export type AraclarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * The data needed to update a Araclar.
     */
    data: XOR<AraclarUpdateInput, AraclarUncheckedUpdateInput>
    /**
     * Choose, which Araclar to update.
     */
    where: AraclarWhereUniqueInput
  }

  /**
   * Araclar updateMany
   */
  export type AraclarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Araclars.
     */
    data: XOR<AraclarUpdateManyMutationInput, AraclarUncheckedUpdateManyInput>
    /**
     * Filter which Araclars to update
     */
    where?: AraclarWhereInput
    /**
     * Limit how many Araclars to update.
     */
    limit?: number
  }

  /**
   * Araclar updateManyAndReturn
   */
  export type AraclarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * The data used to update Araclars.
     */
    data: XOR<AraclarUpdateManyMutationInput, AraclarUncheckedUpdateManyInput>
    /**
     * Filter which Araclars to update
     */
    where?: AraclarWhereInput
    /**
     * Limit how many Araclars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Araclar upsert
   */
  export type AraclarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * The filter to search for the Araclar to update in case it exists.
     */
    where: AraclarWhereUniqueInput
    /**
     * In case the Araclar found by the `where` argument doesn't exist, create a new Araclar with this data.
     */
    create: XOR<AraclarCreateInput, AraclarUncheckedCreateInput>
    /**
     * In case the Araclar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AraclarUpdateInput, AraclarUncheckedUpdateInput>
  }

  /**
   * Araclar delete
   */
  export type AraclarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
    /**
     * Filter which Araclar to delete.
     */
    where: AraclarWhereUniqueInput
  }

  /**
   * Araclar deleteMany
   */
  export type AraclarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Araclars to delete
     */
    where?: AraclarWhereInput
    /**
     * Limit how many Araclars to delete.
     */
    limit?: number
  }

  /**
   * Araclar.seferler
   */
  export type Araclar$seferlerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    where?: SeferlerWhereInput
    orderBy?: SeferlerOrderByWithRelationInput | SeferlerOrderByWithRelationInput[]
    cursor?: SeferlerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeferlerScalarFieldEnum | SeferlerScalarFieldEnum[]
  }

  /**
   * Araclar.odemeler
   */
  export type Araclar$odemelerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    where?: AracOdemeKayitlariWhereInput
    orderBy?: AracOdemeKayitlariOrderByWithRelationInput | AracOdemeKayitlariOrderByWithRelationInput[]
    cursor?: AracOdemeKayitlariWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AracOdemeKayitlariScalarFieldEnum | AracOdemeKayitlariScalarFieldEnum[]
  }

  /**
   * Araclar without action
   */
  export type AraclarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Araclar
     */
    select?: AraclarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Araclar
     */
    omit?: AraclarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AraclarInclude<ExtArgs> | null
  }


  /**
   * Model Seferler
   */

  export type AggregateSeferler = {
    _count: SeferlerCountAggregateOutputType | null
    _avg: SeferlerAvgAggregateOutputType | null
    _sum: SeferlerSumAggregateOutputType | null
    _min: SeferlerMinAggregateOutputType | null
    _max: SeferlerMaxAggregateOutputType | null
  }

  export type SeferlerAvgAggregateOutputType = {
    sefer_id: number | null
    sira_no: number | null
    tonaj_kg: number | null
    mt: number | null
    sirketten_alinan_ucret: number | null
    sofore_odenen_ucret: number | null
    sirket_id: number | null
    arac_id: number | null
    ay: number | null
    donem: number | null
  }

  export type SeferlerSumAggregateOutputType = {
    sefer_id: number | null
    sira_no: number | null
    tonaj_kg: number | null
    mt: number | null
    sirketten_alinan_ucret: number | null
    sofore_odenen_ucret: number | null
    sirket_id: number | null
    arac_id: number | null
    ay: number | null
    donem: number | null
  }

  export type SeferlerMinAggregateOutputType = {
    sefer_id: number | null
    sira_no: number | null
    irsaliye_numarasi: string | null
    irsaliye_tarihi: Date | null
    kalkis_saati: Date | null
    varis_saati: Date | null
    cikis_yeri: string | null
    tahliye_edilen_firma: string | null
    tahliye_yeri: string | null
    tonaj_kg: number | null
    arac_tipi: string | null
    mt: number | null
    aciklama: string | null
    sirketten_alinan_ucret: number | null
    sofore_odenen_ucret: number | null
    sirket_id: number | null
    arac_id: number | null
    ay: number | null
    donem: number | null
  }

  export type SeferlerMaxAggregateOutputType = {
    sefer_id: number | null
    sira_no: number | null
    irsaliye_numarasi: string | null
    irsaliye_tarihi: Date | null
    kalkis_saati: Date | null
    varis_saati: Date | null
    cikis_yeri: string | null
    tahliye_edilen_firma: string | null
    tahliye_yeri: string | null
    tonaj_kg: number | null
    arac_tipi: string | null
    mt: number | null
    aciklama: string | null
    sirketten_alinan_ucret: number | null
    sofore_odenen_ucret: number | null
    sirket_id: number | null
    arac_id: number | null
    ay: number | null
    donem: number | null
  }

  export type SeferlerCountAggregateOutputType = {
    sefer_id: number
    sira_no: number
    irsaliye_numarasi: number
    irsaliye_tarihi: number
    kalkis_saati: number
    varis_saati: number
    cikis_yeri: number
    tahliye_edilen_firma: number
    tahliye_yeri: number
    tonaj_kg: number
    arac_tipi: number
    mt: number
    aciklama: number
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    sirket_id: number
    arac_id: number
    ay: number
    donem: number
    _all: number
  }


  export type SeferlerAvgAggregateInputType = {
    sefer_id?: true
    sira_no?: true
    tonaj_kg?: true
    mt?: true
    sirketten_alinan_ucret?: true
    sofore_odenen_ucret?: true
    sirket_id?: true
    arac_id?: true
    ay?: true
    donem?: true
  }

  export type SeferlerSumAggregateInputType = {
    sefer_id?: true
    sira_no?: true
    tonaj_kg?: true
    mt?: true
    sirketten_alinan_ucret?: true
    sofore_odenen_ucret?: true
    sirket_id?: true
    arac_id?: true
    ay?: true
    donem?: true
  }

  export type SeferlerMinAggregateInputType = {
    sefer_id?: true
    sira_no?: true
    irsaliye_numarasi?: true
    irsaliye_tarihi?: true
    kalkis_saati?: true
    varis_saati?: true
    cikis_yeri?: true
    tahliye_edilen_firma?: true
    tahliye_yeri?: true
    tonaj_kg?: true
    arac_tipi?: true
    mt?: true
    aciklama?: true
    sirketten_alinan_ucret?: true
    sofore_odenen_ucret?: true
    sirket_id?: true
    arac_id?: true
    ay?: true
    donem?: true
  }

  export type SeferlerMaxAggregateInputType = {
    sefer_id?: true
    sira_no?: true
    irsaliye_numarasi?: true
    irsaliye_tarihi?: true
    kalkis_saati?: true
    varis_saati?: true
    cikis_yeri?: true
    tahliye_edilen_firma?: true
    tahliye_yeri?: true
    tonaj_kg?: true
    arac_tipi?: true
    mt?: true
    aciklama?: true
    sirketten_alinan_ucret?: true
    sofore_odenen_ucret?: true
    sirket_id?: true
    arac_id?: true
    ay?: true
    donem?: true
  }

  export type SeferlerCountAggregateInputType = {
    sefer_id?: true
    sira_no?: true
    irsaliye_numarasi?: true
    irsaliye_tarihi?: true
    kalkis_saati?: true
    varis_saati?: true
    cikis_yeri?: true
    tahliye_edilen_firma?: true
    tahliye_yeri?: true
    tonaj_kg?: true
    arac_tipi?: true
    mt?: true
    aciklama?: true
    sirketten_alinan_ucret?: true
    sofore_odenen_ucret?: true
    sirket_id?: true
    arac_id?: true
    ay?: true
    donem?: true
    _all?: true
  }

  export type SeferlerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seferler to aggregate.
     */
    where?: SeferlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seferlers to fetch.
     */
    orderBy?: SeferlerOrderByWithRelationInput | SeferlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeferlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seferlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seferlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seferlers
    **/
    _count?: true | SeferlerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeferlerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeferlerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeferlerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeferlerMaxAggregateInputType
  }

  export type GetSeferlerAggregateType<T extends SeferlerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeferler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeferler[P]>
      : GetScalarType<T[P], AggregateSeferler[P]>
  }




  export type SeferlerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeferlerWhereInput
    orderBy?: SeferlerOrderByWithAggregationInput | SeferlerOrderByWithAggregationInput[]
    by: SeferlerScalarFieldEnum[] | SeferlerScalarFieldEnum
    having?: SeferlerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeferlerCountAggregateInputType | true
    _avg?: SeferlerAvgAggregateInputType
    _sum?: SeferlerSumAggregateInputType
    _min?: SeferlerMinAggregateInputType
    _max?: SeferlerMaxAggregateInputType
  }

  export type SeferlerGroupByOutputType = {
    sefer_id: number
    sira_no: number
    irsaliye_numarasi: string | null
    irsaliye_tarihi: Date | null
    kalkis_saati: Date
    varis_saati: Date
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt: number | null
    aciklama: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    sirket_id: number
    arac_id: number
    ay: number | null
    donem: number | null
    _count: SeferlerCountAggregateOutputType | null
    _avg: SeferlerAvgAggregateOutputType | null
    _sum: SeferlerSumAggregateOutputType | null
    _min: SeferlerMinAggregateOutputType | null
    _max: SeferlerMaxAggregateOutputType | null
  }

  type GetSeferlerGroupByPayload<T extends SeferlerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeferlerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeferlerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeferlerGroupByOutputType[P]>
            : GetScalarType<T[P], SeferlerGroupByOutputType[P]>
        }
      >
    >


  export type SeferlerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sefer_id?: boolean
    sira_no?: boolean
    irsaliye_numarasi?: boolean
    irsaliye_tarihi?: boolean
    kalkis_saati?: boolean
    varis_saati?: boolean
    cikis_yeri?: boolean
    tahliye_edilen_firma?: boolean
    tahliye_yeri?: boolean
    tonaj_kg?: boolean
    arac_tipi?: boolean
    mt?: boolean
    aciklama?: boolean
    sirketten_alinan_ucret?: boolean
    sofore_odenen_ucret?: boolean
    sirket_id?: boolean
    arac_id?: boolean
    ay?: boolean
    donem?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seferler"]>

  export type SeferlerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sefer_id?: boolean
    sira_no?: boolean
    irsaliye_numarasi?: boolean
    irsaliye_tarihi?: boolean
    kalkis_saati?: boolean
    varis_saati?: boolean
    cikis_yeri?: boolean
    tahliye_edilen_firma?: boolean
    tahliye_yeri?: boolean
    tonaj_kg?: boolean
    arac_tipi?: boolean
    mt?: boolean
    aciklama?: boolean
    sirketten_alinan_ucret?: boolean
    sofore_odenen_ucret?: boolean
    sirket_id?: boolean
    arac_id?: boolean
    ay?: boolean
    donem?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seferler"]>

  export type SeferlerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sefer_id?: boolean
    sira_no?: boolean
    irsaliye_numarasi?: boolean
    irsaliye_tarihi?: boolean
    kalkis_saati?: boolean
    varis_saati?: boolean
    cikis_yeri?: boolean
    tahliye_edilen_firma?: boolean
    tahliye_yeri?: boolean
    tonaj_kg?: boolean
    arac_tipi?: boolean
    mt?: boolean
    aciklama?: boolean
    sirketten_alinan_ucret?: boolean
    sofore_odenen_ucret?: boolean
    sirket_id?: boolean
    arac_id?: boolean
    ay?: boolean
    donem?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seferler"]>

  export type SeferlerSelectScalar = {
    sefer_id?: boolean
    sira_no?: boolean
    irsaliye_numarasi?: boolean
    irsaliye_tarihi?: boolean
    kalkis_saati?: boolean
    varis_saati?: boolean
    cikis_yeri?: boolean
    tahliye_edilen_firma?: boolean
    tahliye_yeri?: boolean
    tonaj_kg?: boolean
    arac_tipi?: boolean
    mt?: boolean
    aciklama?: boolean
    sirketten_alinan_ucret?: boolean
    sofore_odenen_ucret?: boolean
    sirket_id?: boolean
    arac_id?: boolean
    ay?: boolean
    donem?: boolean
  }

  export type SeferlerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sefer_id" | "sira_no" | "irsaliye_numarasi" | "irsaliye_tarihi" | "kalkis_saati" | "varis_saati" | "cikis_yeri" | "tahliye_edilen_firma" | "tahliye_yeri" | "tonaj_kg" | "arac_tipi" | "mt" | "aciklama" | "sirketten_alinan_ucret" | "sofore_odenen_ucret" | "sirket_id" | "arac_id" | "ay" | "donem", ExtArgs["result"]["seferler"]>
  export type SeferlerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }
  export type SeferlerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }
  export type SeferlerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }

  export type $SeferlerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seferler"
    objects: {
      sirket: Prisma.$SirketlerPayload<ExtArgs>
      arac: Prisma.$AraclarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sefer_id: number
      sira_no: number
      irsaliye_numarasi: string | null
      irsaliye_tarihi: Date | null
      kalkis_saati: Date
      varis_saati: Date
      cikis_yeri: string
      tahliye_edilen_firma: string
      tahliye_yeri: string
      tonaj_kg: number
      arac_tipi: string
      mt: number | null
      aciklama: string | null
      sirketten_alinan_ucret: number
      sofore_odenen_ucret: number
      sirket_id: number
      arac_id: number
      ay: number | null
      donem: number | null
    }, ExtArgs["result"]["seferler"]>
    composites: {}
  }

  type SeferlerGetPayload<S extends boolean | null | undefined | SeferlerDefaultArgs> = $Result.GetResult<Prisma.$SeferlerPayload, S>

  type SeferlerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeferlerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeferlerCountAggregateInputType | true
    }

  export interface SeferlerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seferler'], meta: { name: 'Seferler' } }
    /**
     * Find zero or one Seferler that matches the filter.
     * @param {SeferlerFindUniqueArgs} args - Arguments to find a Seferler
     * @example
     * // Get one Seferler
     * const seferler = await prisma.seferler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeferlerFindUniqueArgs>(args: SelectSubset<T, SeferlerFindUniqueArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seferler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeferlerFindUniqueOrThrowArgs} args - Arguments to find a Seferler
     * @example
     * // Get one Seferler
     * const seferler = await prisma.seferler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeferlerFindUniqueOrThrowArgs>(args: SelectSubset<T, SeferlerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seferler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerFindFirstArgs} args - Arguments to find a Seferler
     * @example
     * // Get one Seferler
     * const seferler = await prisma.seferler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeferlerFindFirstArgs>(args?: SelectSubset<T, SeferlerFindFirstArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seferler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerFindFirstOrThrowArgs} args - Arguments to find a Seferler
     * @example
     * // Get one Seferler
     * const seferler = await prisma.seferler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeferlerFindFirstOrThrowArgs>(args?: SelectSubset<T, SeferlerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seferlers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seferlers
     * const seferlers = await prisma.seferler.findMany()
     * 
     * // Get first 10 Seferlers
     * const seferlers = await prisma.seferler.findMany({ take: 10 })
     * 
     * // Only select the `sefer_id`
     * const seferlerWithSefer_idOnly = await prisma.seferler.findMany({ select: { sefer_id: true } })
     * 
     */
    findMany<T extends SeferlerFindManyArgs>(args?: SelectSubset<T, SeferlerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seferler.
     * @param {SeferlerCreateArgs} args - Arguments to create a Seferler.
     * @example
     * // Create one Seferler
     * const Seferler = await prisma.seferler.create({
     *   data: {
     *     // ... data to create a Seferler
     *   }
     * })
     * 
     */
    create<T extends SeferlerCreateArgs>(args: SelectSubset<T, SeferlerCreateArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seferlers.
     * @param {SeferlerCreateManyArgs} args - Arguments to create many Seferlers.
     * @example
     * // Create many Seferlers
     * const seferler = await prisma.seferler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeferlerCreateManyArgs>(args?: SelectSubset<T, SeferlerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seferlers and returns the data saved in the database.
     * @param {SeferlerCreateManyAndReturnArgs} args - Arguments to create many Seferlers.
     * @example
     * // Create many Seferlers
     * const seferler = await prisma.seferler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seferlers and only return the `sefer_id`
     * const seferlerWithSefer_idOnly = await prisma.seferler.createManyAndReturn({
     *   select: { sefer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeferlerCreateManyAndReturnArgs>(args?: SelectSubset<T, SeferlerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seferler.
     * @param {SeferlerDeleteArgs} args - Arguments to delete one Seferler.
     * @example
     * // Delete one Seferler
     * const Seferler = await prisma.seferler.delete({
     *   where: {
     *     // ... filter to delete one Seferler
     *   }
     * })
     * 
     */
    delete<T extends SeferlerDeleteArgs>(args: SelectSubset<T, SeferlerDeleteArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seferler.
     * @param {SeferlerUpdateArgs} args - Arguments to update one Seferler.
     * @example
     * // Update one Seferler
     * const seferler = await prisma.seferler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeferlerUpdateArgs>(args: SelectSubset<T, SeferlerUpdateArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seferlers.
     * @param {SeferlerDeleteManyArgs} args - Arguments to filter Seferlers to delete.
     * @example
     * // Delete a few Seferlers
     * const { count } = await prisma.seferler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeferlerDeleteManyArgs>(args?: SelectSubset<T, SeferlerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seferlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seferlers
     * const seferler = await prisma.seferler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeferlerUpdateManyArgs>(args: SelectSubset<T, SeferlerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seferlers and returns the data updated in the database.
     * @param {SeferlerUpdateManyAndReturnArgs} args - Arguments to update many Seferlers.
     * @example
     * // Update many Seferlers
     * const seferler = await prisma.seferler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seferlers and only return the `sefer_id`
     * const seferlerWithSefer_idOnly = await prisma.seferler.updateManyAndReturn({
     *   select: { sefer_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeferlerUpdateManyAndReturnArgs>(args: SelectSubset<T, SeferlerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seferler.
     * @param {SeferlerUpsertArgs} args - Arguments to update or create a Seferler.
     * @example
     * // Update or create a Seferler
     * const seferler = await prisma.seferler.upsert({
     *   create: {
     *     // ... data to create a Seferler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seferler we want to update
     *   }
     * })
     */
    upsert<T extends SeferlerUpsertArgs>(args: SelectSubset<T, SeferlerUpsertArgs<ExtArgs>>): Prisma__SeferlerClient<$Result.GetResult<Prisma.$SeferlerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seferlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerCountArgs} args - Arguments to filter Seferlers to count.
     * @example
     * // Count the number of Seferlers
     * const count = await prisma.seferler.count({
     *   where: {
     *     // ... the filter for the Seferlers we want to count
     *   }
     * })
    **/
    count<T extends SeferlerCountArgs>(
      args?: Subset<T, SeferlerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeferlerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seferler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeferlerAggregateArgs>(args: Subset<T, SeferlerAggregateArgs>): Prisma.PrismaPromise<GetSeferlerAggregateType<T>>

    /**
     * Group by Seferler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeferlerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeferlerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeferlerGroupByArgs['orderBy'] }
        : { orderBy?: SeferlerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeferlerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeferlerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seferler model
   */
  readonly fields: SeferlerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seferler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeferlerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sirket<T extends SirketlerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SirketlerDefaultArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arac<T extends AraclarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AraclarDefaultArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seferler model
   */
  interface SeferlerFieldRefs {
    readonly sefer_id: FieldRef<"Seferler", 'Int'>
    readonly sira_no: FieldRef<"Seferler", 'Int'>
    readonly irsaliye_numarasi: FieldRef<"Seferler", 'String'>
    readonly irsaliye_tarihi: FieldRef<"Seferler", 'DateTime'>
    readonly kalkis_saati: FieldRef<"Seferler", 'DateTime'>
    readonly varis_saati: FieldRef<"Seferler", 'DateTime'>
    readonly cikis_yeri: FieldRef<"Seferler", 'String'>
    readonly tahliye_edilen_firma: FieldRef<"Seferler", 'String'>
    readonly tahliye_yeri: FieldRef<"Seferler", 'String'>
    readonly tonaj_kg: FieldRef<"Seferler", 'Float'>
    readonly arac_tipi: FieldRef<"Seferler", 'String'>
    readonly mt: FieldRef<"Seferler", 'Float'>
    readonly aciklama: FieldRef<"Seferler", 'String'>
    readonly sirketten_alinan_ucret: FieldRef<"Seferler", 'Float'>
    readonly sofore_odenen_ucret: FieldRef<"Seferler", 'Float'>
    readonly sirket_id: FieldRef<"Seferler", 'Int'>
    readonly arac_id: FieldRef<"Seferler", 'Int'>
    readonly ay: FieldRef<"Seferler", 'Int'>
    readonly donem: FieldRef<"Seferler", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Seferler findUnique
   */
  export type SeferlerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * Filter, which Seferler to fetch.
     */
    where: SeferlerWhereUniqueInput
  }

  /**
   * Seferler findUniqueOrThrow
   */
  export type SeferlerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * Filter, which Seferler to fetch.
     */
    where: SeferlerWhereUniqueInput
  }

  /**
   * Seferler findFirst
   */
  export type SeferlerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * Filter, which Seferler to fetch.
     */
    where?: SeferlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seferlers to fetch.
     */
    orderBy?: SeferlerOrderByWithRelationInput | SeferlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seferlers.
     */
    cursor?: SeferlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seferlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seferlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seferlers.
     */
    distinct?: SeferlerScalarFieldEnum | SeferlerScalarFieldEnum[]
  }

  /**
   * Seferler findFirstOrThrow
   */
  export type SeferlerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * Filter, which Seferler to fetch.
     */
    where?: SeferlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seferlers to fetch.
     */
    orderBy?: SeferlerOrderByWithRelationInput | SeferlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seferlers.
     */
    cursor?: SeferlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seferlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seferlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seferlers.
     */
    distinct?: SeferlerScalarFieldEnum | SeferlerScalarFieldEnum[]
  }

  /**
   * Seferler findMany
   */
  export type SeferlerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * Filter, which Seferlers to fetch.
     */
    where?: SeferlerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seferlers to fetch.
     */
    orderBy?: SeferlerOrderByWithRelationInput | SeferlerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seferlers.
     */
    cursor?: SeferlerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seferlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seferlers.
     */
    skip?: number
    distinct?: SeferlerScalarFieldEnum | SeferlerScalarFieldEnum[]
  }

  /**
   * Seferler create
   */
  export type SeferlerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * The data needed to create a Seferler.
     */
    data: XOR<SeferlerCreateInput, SeferlerUncheckedCreateInput>
  }

  /**
   * Seferler createMany
   */
  export type SeferlerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seferlers.
     */
    data: SeferlerCreateManyInput | SeferlerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seferler createManyAndReturn
   */
  export type SeferlerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * The data used to create many Seferlers.
     */
    data: SeferlerCreateManyInput | SeferlerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seferler update
   */
  export type SeferlerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * The data needed to update a Seferler.
     */
    data: XOR<SeferlerUpdateInput, SeferlerUncheckedUpdateInput>
    /**
     * Choose, which Seferler to update.
     */
    where: SeferlerWhereUniqueInput
  }

  /**
   * Seferler updateMany
   */
  export type SeferlerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seferlers.
     */
    data: XOR<SeferlerUpdateManyMutationInput, SeferlerUncheckedUpdateManyInput>
    /**
     * Filter which Seferlers to update
     */
    where?: SeferlerWhereInput
    /**
     * Limit how many Seferlers to update.
     */
    limit?: number
  }

  /**
   * Seferler updateManyAndReturn
   */
  export type SeferlerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * The data used to update Seferlers.
     */
    data: XOR<SeferlerUpdateManyMutationInput, SeferlerUncheckedUpdateManyInput>
    /**
     * Filter which Seferlers to update
     */
    where?: SeferlerWhereInput
    /**
     * Limit how many Seferlers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seferler upsert
   */
  export type SeferlerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * The filter to search for the Seferler to update in case it exists.
     */
    where: SeferlerWhereUniqueInput
    /**
     * In case the Seferler found by the `where` argument doesn't exist, create a new Seferler with this data.
     */
    create: XOR<SeferlerCreateInput, SeferlerUncheckedCreateInput>
    /**
     * In case the Seferler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeferlerUpdateInput, SeferlerUncheckedUpdateInput>
  }

  /**
   * Seferler delete
   */
  export type SeferlerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
    /**
     * Filter which Seferler to delete.
     */
    where: SeferlerWhereUniqueInput
  }

  /**
   * Seferler deleteMany
   */
  export type SeferlerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seferlers to delete
     */
    where?: SeferlerWhereInput
    /**
     * Limit how many Seferlers to delete.
     */
    limit?: number
  }

  /**
   * Seferler without action
   */
  export type SeferlerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seferler
     */
    select?: SeferlerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seferler
     */
    omit?: SeferlerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeferlerInclude<ExtArgs> | null
  }


  /**
   * Model SirketFiyatListesi
   */

  export type AggregateSirketFiyatListesi = {
    _count: SirketFiyatListesiCountAggregateOutputType | null
    _avg: SirketFiyatListesiAvgAggregateOutputType | null
    _sum: SirketFiyatListesiSumAggregateOutputType | null
    _min: SirketFiyatListesiMinAggregateOutputType | null
    _max: SirketFiyatListesiMaxAggregateOutputType | null
  }

  export type SirketFiyatListesiAvgAggregateOutputType = {
    fiyat_listesi_id: number | null
    sirket_id: number | null
    ucret: number | null
  }

  export type SirketFiyatListesiSumAggregateOutputType = {
    fiyat_listesi_id: number | null
    sirket_id: number | null
    ucret: number | null
  }

  export type SirketFiyatListesiMinAggregateOutputType = {
    fiyat_listesi_id: number | null
    sirket_id: number | null
    tahliye_yeri: string | null
    arac_tipi: string | null
    ucret: number | null
  }

  export type SirketFiyatListesiMaxAggregateOutputType = {
    fiyat_listesi_id: number | null
    sirket_id: number | null
    tahliye_yeri: string | null
    arac_tipi: string | null
    ucret: number | null
  }

  export type SirketFiyatListesiCountAggregateOutputType = {
    fiyat_listesi_id: number
    sirket_id: number
    tahliye_yeri: number
    arac_tipi: number
    ucret: number
    _all: number
  }


  export type SirketFiyatListesiAvgAggregateInputType = {
    fiyat_listesi_id?: true
    sirket_id?: true
    ucret?: true
  }

  export type SirketFiyatListesiSumAggregateInputType = {
    fiyat_listesi_id?: true
    sirket_id?: true
    ucret?: true
  }

  export type SirketFiyatListesiMinAggregateInputType = {
    fiyat_listesi_id?: true
    sirket_id?: true
    tahliye_yeri?: true
    arac_tipi?: true
    ucret?: true
  }

  export type SirketFiyatListesiMaxAggregateInputType = {
    fiyat_listesi_id?: true
    sirket_id?: true
    tahliye_yeri?: true
    arac_tipi?: true
    ucret?: true
  }

  export type SirketFiyatListesiCountAggregateInputType = {
    fiyat_listesi_id?: true
    sirket_id?: true
    tahliye_yeri?: true
    arac_tipi?: true
    ucret?: true
    _all?: true
  }

  export type SirketFiyatListesiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SirketFiyatListesi to aggregate.
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketFiyatListesis to fetch.
     */
    orderBy?: SirketFiyatListesiOrderByWithRelationInput | SirketFiyatListesiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SirketFiyatListesiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketFiyatListesis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketFiyatListesis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SirketFiyatListesis
    **/
    _count?: true | SirketFiyatListesiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SirketFiyatListesiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SirketFiyatListesiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SirketFiyatListesiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SirketFiyatListesiMaxAggregateInputType
  }

  export type GetSirketFiyatListesiAggregateType<T extends SirketFiyatListesiAggregateArgs> = {
        [P in keyof T & keyof AggregateSirketFiyatListesi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSirketFiyatListesi[P]>
      : GetScalarType<T[P], AggregateSirketFiyatListesi[P]>
  }




  export type SirketFiyatListesiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SirketFiyatListesiWhereInput
    orderBy?: SirketFiyatListesiOrderByWithAggregationInput | SirketFiyatListesiOrderByWithAggregationInput[]
    by: SirketFiyatListesiScalarFieldEnum[] | SirketFiyatListesiScalarFieldEnum
    having?: SirketFiyatListesiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SirketFiyatListesiCountAggregateInputType | true
    _avg?: SirketFiyatListesiAvgAggregateInputType
    _sum?: SirketFiyatListesiSumAggregateInputType
    _min?: SirketFiyatListesiMinAggregateInputType
    _max?: SirketFiyatListesiMaxAggregateInputType
  }

  export type SirketFiyatListesiGroupByOutputType = {
    fiyat_listesi_id: number
    sirket_id: number
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
    _count: SirketFiyatListesiCountAggregateOutputType | null
    _avg: SirketFiyatListesiAvgAggregateOutputType | null
    _sum: SirketFiyatListesiSumAggregateOutputType | null
    _min: SirketFiyatListesiMinAggregateOutputType | null
    _max: SirketFiyatListesiMaxAggregateOutputType | null
  }

  type GetSirketFiyatListesiGroupByPayload<T extends SirketFiyatListesiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SirketFiyatListesiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SirketFiyatListesiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SirketFiyatListesiGroupByOutputType[P]>
            : GetScalarType<T[P], SirketFiyatListesiGroupByOutputType[P]>
        }
      >
    >


  export type SirketFiyatListesiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fiyat_listesi_id?: boolean
    sirket_id?: boolean
    tahliye_yeri?: boolean
    arac_tipi?: boolean
    ucret?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketFiyatListesi"]>

  export type SirketFiyatListesiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fiyat_listesi_id?: boolean
    sirket_id?: boolean
    tahliye_yeri?: boolean
    arac_tipi?: boolean
    ucret?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketFiyatListesi"]>

  export type SirketFiyatListesiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fiyat_listesi_id?: boolean
    sirket_id?: boolean
    tahliye_yeri?: boolean
    arac_tipi?: boolean
    ucret?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketFiyatListesi"]>

  export type SirketFiyatListesiSelectScalar = {
    fiyat_listesi_id?: boolean
    sirket_id?: boolean
    tahliye_yeri?: boolean
    arac_tipi?: boolean
    ucret?: boolean
  }

  export type SirketFiyatListesiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fiyat_listesi_id" | "sirket_id" | "tahliye_yeri" | "arac_tipi" | "ucret", ExtArgs["result"]["sirketFiyatListesi"]>
  export type SirketFiyatListesiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }
  export type SirketFiyatListesiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }
  export type SirketFiyatListesiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }

  export type $SirketFiyatListesiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SirketFiyatListesi"
    objects: {
      sirket: Prisma.$SirketlerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fiyat_listesi_id: number
      sirket_id: number
      tahliye_yeri: string
      arac_tipi: string
      ucret: number
    }, ExtArgs["result"]["sirketFiyatListesi"]>
    composites: {}
  }

  type SirketFiyatListesiGetPayload<S extends boolean | null | undefined | SirketFiyatListesiDefaultArgs> = $Result.GetResult<Prisma.$SirketFiyatListesiPayload, S>

  type SirketFiyatListesiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SirketFiyatListesiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SirketFiyatListesiCountAggregateInputType | true
    }

  export interface SirketFiyatListesiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SirketFiyatListesi'], meta: { name: 'SirketFiyatListesi' } }
    /**
     * Find zero or one SirketFiyatListesi that matches the filter.
     * @param {SirketFiyatListesiFindUniqueArgs} args - Arguments to find a SirketFiyatListesi
     * @example
     * // Get one SirketFiyatListesi
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SirketFiyatListesiFindUniqueArgs>(args: SelectSubset<T, SirketFiyatListesiFindUniqueArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SirketFiyatListesi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SirketFiyatListesiFindUniqueOrThrowArgs} args - Arguments to find a SirketFiyatListesi
     * @example
     * // Get one SirketFiyatListesi
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SirketFiyatListesiFindUniqueOrThrowArgs>(args: SelectSubset<T, SirketFiyatListesiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SirketFiyatListesi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiFindFirstArgs} args - Arguments to find a SirketFiyatListesi
     * @example
     * // Get one SirketFiyatListesi
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SirketFiyatListesiFindFirstArgs>(args?: SelectSubset<T, SirketFiyatListesiFindFirstArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SirketFiyatListesi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiFindFirstOrThrowArgs} args - Arguments to find a SirketFiyatListesi
     * @example
     * // Get one SirketFiyatListesi
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SirketFiyatListesiFindFirstOrThrowArgs>(args?: SelectSubset<T, SirketFiyatListesiFindFirstOrThrowArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SirketFiyatListesis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SirketFiyatListesis
     * const sirketFiyatListesis = await prisma.sirketFiyatListesi.findMany()
     * 
     * // Get first 10 SirketFiyatListesis
     * const sirketFiyatListesis = await prisma.sirketFiyatListesi.findMany({ take: 10 })
     * 
     * // Only select the `fiyat_listesi_id`
     * const sirketFiyatListesiWithFiyat_listesi_idOnly = await prisma.sirketFiyatListesi.findMany({ select: { fiyat_listesi_id: true } })
     * 
     */
    findMany<T extends SirketFiyatListesiFindManyArgs>(args?: SelectSubset<T, SirketFiyatListesiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SirketFiyatListesi.
     * @param {SirketFiyatListesiCreateArgs} args - Arguments to create a SirketFiyatListesi.
     * @example
     * // Create one SirketFiyatListesi
     * const SirketFiyatListesi = await prisma.sirketFiyatListesi.create({
     *   data: {
     *     // ... data to create a SirketFiyatListesi
     *   }
     * })
     * 
     */
    create<T extends SirketFiyatListesiCreateArgs>(args: SelectSubset<T, SirketFiyatListesiCreateArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SirketFiyatListesis.
     * @param {SirketFiyatListesiCreateManyArgs} args - Arguments to create many SirketFiyatListesis.
     * @example
     * // Create many SirketFiyatListesis
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SirketFiyatListesiCreateManyArgs>(args?: SelectSubset<T, SirketFiyatListesiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SirketFiyatListesis and returns the data saved in the database.
     * @param {SirketFiyatListesiCreateManyAndReturnArgs} args - Arguments to create many SirketFiyatListesis.
     * @example
     * // Create many SirketFiyatListesis
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SirketFiyatListesis and only return the `fiyat_listesi_id`
     * const sirketFiyatListesiWithFiyat_listesi_idOnly = await prisma.sirketFiyatListesi.createManyAndReturn({
     *   select: { fiyat_listesi_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SirketFiyatListesiCreateManyAndReturnArgs>(args?: SelectSubset<T, SirketFiyatListesiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SirketFiyatListesi.
     * @param {SirketFiyatListesiDeleteArgs} args - Arguments to delete one SirketFiyatListesi.
     * @example
     * // Delete one SirketFiyatListesi
     * const SirketFiyatListesi = await prisma.sirketFiyatListesi.delete({
     *   where: {
     *     // ... filter to delete one SirketFiyatListesi
     *   }
     * })
     * 
     */
    delete<T extends SirketFiyatListesiDeleteArgs>(args: SelectSubset<T, SirketFiyatListesiDeleteArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SirketFiyatListesi.
     * @param {SirketFiyatListesiUpdateArgs} args - Arguments to update one SirketFiyatListesi.
     * @example
     * // Update one SirketFiyatListesi
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SirketFiyatListesiUpdateArgs>(args: SelectSubset<T, SirketFiyatListesiUpdateArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SirketFiyatListesis.
     * @param {SirketFiyatListesiDeleteManyArgs} args - Arguments to filter SirketFiyatListesis to delete.
     * @example
     * // Delete a few SirketFiyatListesis
     * const { count } = await prisma.sirketFiyatListesi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SirketFiyatListesiDeleteManyArgs>(args?: SelectSubset<T, SirketFiyatListesiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SirketFiyatListesis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SirketFiyatListesis
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SirketFiyatListesiUpdateManyArgs>(args: SelectSubset<T, SirketFiyatListesiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SirketFiyatListesis and returns the data updated in the database.
     * @param {SirketFiyatListesiUpdateManyAndReturnArgs} args - Arguments to update many SirketFiyatListesis.
     * @example
     * // Update many SirketFiyatListesis
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SirketFiyatListesis and only return the `fiyat_listesi_id`
     * const sirketFiyatListesiWithFiyat_listesi_idOnly = await prisma.sirketFiyatListesi.updateManyAndReturn({
     *   select: { fiyat_listesi_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SirketFiyatListesiUpdateManyAndReturnArgs>(args: SelectSubset<T, SirketFiyatListesiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SirketFiyatListesi.
     * @param {SirketFiyatListesiUpsertArgs} args - Arguments to update or create a SirketFiyatListesi.
     * @example
     * // Update or create a SirketFiyatListesi
     * const sirketFiyatListesi = await prisma.sirketFiyatListesi.upsert({
     *   create: {
     *     // ... data to create a SirketFiyatListesi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SirketFiyatListesi we want to update
     *   }
     * })
     */
    upsert<T extends SirketFiyatListesiUpsertArgs>(args: SelectSubset<T, SirketFiyatListesiUpsertArgs<ExtArgs>>): Prisma__SirketFiyatListesiClient<$Result.GetResult<Prisma.$SirketFiyatListesiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SirketFiyatListesis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiCountArgs} args - Arguments to filter SirketFiyatListesis to count.
     * @example
     * // Count the number of SirketFiyatListesis
     * const count = await prisma.sirketFiyatListesi.count({
     *   where: {
     *     // ... the filter for the SirketFiyatListesis we want to count
     *   }
     * })
    **/
    count<T extends SirketFiyatListesiCountArgs>(
      args?: Subset<T, SirketFiyatListesiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SirketFiyatListesiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SirketFiyatListesi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SirketFiyatListesiAggregateArgs>(args: Subset<T, SirketFiyatListesiAggregateArgs>): Prisma.PrismaPromise<GetSirketFiyatListesiAggregateType<T>>

    /**
     * Group by SirketFiyatListesi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketFiyatListesiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SirketFiyatListesiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SirketFiyatListesiGroupByArgs['orderBy'] }
        : { orderBy?: SirketFiyatListesiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SirketFiyatListesiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSirketFiyatListesiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SirketFiyatListesi model
   */
  readonly fields: SirketFiyatListesiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SirketFiyatListesi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SirketFiyatListesiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sirket<T extends SirketlerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SirketlerDefaultArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SirketFiyatListesi model
   */
  interface SirketFiyatListesiFieldRefs {
    readonly fiyat_listesi_id: FieldRef<"SirketFiyatListesi", 'Int'>
    readonly sirket_id: FieldRef<"SirketFiyatListesi", 'Int'>
    readonly tahliye_yeri: FieldRef<"SirketFiyatListesi", 'String'>
    readonly arac_tipi: FieldRef<"SirketFiyatListesi", 'String'>
    readonly ucret: FieldRef<"SirketFiyatListesi", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SirketFiyatListesi findUnique
   */
  export type SirketFiyatListesiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * Filter, which SirketFiyatListesi to fetch.
     */
    where: SirketFiyatListesiWhereUniqueInput
  }

  /**
   * SirketFiyatListesi findUniqueOrThrow
   */
  export type SirketFiyatListesiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * Filter, which SirketFiyatListesi to fetch.
     */
    where: SirketFiyatListesiWhereUniqueInput
  }

  /**
   * SirketFiyatListesi findFirst
   */
  export type SirketFiyatListesiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * Filter, which SirketFiyatListesi to fetch.
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketFiyatListesis to fetch.
     */
    orderBy?: SirketFiyatListesiOrderByWithRelationInput | SirketFiyatListesiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SirketFiyatListesis.
     */
    cursor?: SirketFiyatListesiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketFiyatListesis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketFiyatListesis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SirketFiyatListesis.
     */
    distinct?: SirketFiyatListesiScalarFieldEnum | SirketFiyatListesiScalarFieldEnum[]
  }

  /**
   * SirketFiyatListesi findFirstOrThrow
   */
  export type SirketFiyatListesiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * Filter, which SirketFiyatListesi to fetch.
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketFiyatListesis to fetch.
     */
    orderBy?: SirketFiyatListesiOrderByWithRelationInput | SirketFiyatListesiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SirketFiyatListesis.
     */
    cursor?: SirketFiyatListesiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketFiyatListesis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketFiyatListesis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SirketFiyatListesis.
     */
    distinct?: SirketFiyatListesiScalarFieldEnum | SirketFiyatListesiScalarFieldEnum[]
  }

  /**
   * SirketFiyatListesi findMany
   */
  export type SirketFiyatListesiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * Filter, which SirketFiyatListesis to fetch.
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketFiyatListesis to fetch.
     */
    orderBy?: SirketFiyatListesiOrderByWithRelationInput | SirketFiyatListesiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SirketFiyatListesis.
     */
    cursor?: SirketFiyatListesiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketFiyatListesis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketFiyatListesis.
     */
    skip?: number
    distinct?: SirketFiyatListesiScalarFieldEnum | SirketFiyatListesiScalarFieldEnum[]
  }

  /**
   * SirketFiyatListesi create
   */
  export type SirketFiyatListesiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * The data needed to create a SirketFiyatListesi.
     */
    data: XOR<SirketFiyatListesiCreateInput, SirketFiyatListesiUncheckedCreateInput>
  }

  /**
   * SirketFiyatListesi createMany
   */
  export type SirketFiyatListesiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SirketFiyatListesis.
     */
    data: SirketFiyatListesiCreateManyInput | SirketFiyatListesiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SirketFiyatListesi createManyAndReturn
   */
  export type SirketFiyatListesiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * The data used to create many SirketFiyatListesis.
     */
    data: SirketFiyatListesiCreateManyInput | SirketFiyatListesiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SirketFiyatListesi update
   */
  export type SirketFiyatListesiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * The data needed to update a SirketFiyatListesi.
     */
    data: XOR<SirketFiyatListesiUpdateInput, SirketFiyatListesiUncheckedUpdateInput>
    /**
     * Choose, which SirketFiyatListesi to update.
     */
    where: SirketFiyatListesiWhereUniqueInput
  }

  /**
   * SirketFiyatListesi updateMany
   */
  export type SirketFiyatListesiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SirketFiyatListesis.
     */
    data: XOR<SirketFiyatListesiUpdateManyMutationInput, SirketFiyatListesiUncheckedUpdateManyInput>
    /**
     * Filter which SirketFiyatListesis to update
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * Limit how many SirketFiyatListesis to update.
     */
    limit?: number
  }

  /**
   * SirketFiyatListesi updateManyAndReturn
   */
  export type SirketFiyatListesiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * The data used to update SirketFiyatListesis.
     */
    data: XOR<SirketFiyatListesiUpdateManyMutationInput, SirketFiyatListesiUncheckedUpdateManyInput>
    /**
     * Filter which SirketFiyatListesis to update
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * Limit how many SirketFiyatListesis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SirketFiyatListesi upsert
   */
  export type SirketFiyatListesiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * The filter to search for the SirketFiyatListesi to update in case it exists.
     */
    where: SirketFiyatListesiWhereUniqueInput
    /**
     * In case the SirketFiyatListesi found by the `where` argument doesn't exist, create a new SirketFiyatListesi with this data.
     */
    create: XOR<SirketFiyatListesiCreateInput, SirketFiyatListesiUncheckedCreateInput>
    /**
     * In case the SirketFiyatListesi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SirketFiyatListesiUpdateInput, SirketFiyatListesiUncheckedUpdateInput>
  }

  /**
   * SirketFiyatListesi delete
   */
  export type SirketFiyatListesiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
    /**
     * Filter which SirketFiyatListesi to delete.
     */
    where: SirketFiyatListesiWhereUniqueInput
  }

  /**
   * SirketFiyatListesi deleteMany
   */
  export type SirketFiyatListesiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SirketFiyatListesis to delete
     */
    where?: SirketFiyatListesiWhereInput
    /**
     * Limit how many SirketFiyatListesis to delete.
     */
    limit?: number
  }

  /**
   * SirketFiyatListesi without action
   */
  export type SirketFiyatListesiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketFiyatListesi
     */
    select?: SirketFiyatListesiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketFiyatListesi
     */
    omit?: SirketFiyatListesiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketFiyatListesiInclude<ExtArgs> | null
  }


  /**
   * Model SirketCekler
   */

  export type AggregateSirketCekler = {
    _count: SirketCeklerCountAggregateOutputType | null
    _avg: SirketCeklerAvgAggregateOutputType | null
    _sum: SirketCeklerSumAggregateOutputType | null
    _min: SirketCeklerMinAggregateOutputType | null
    _max: SirketCeklerMaxAggregateOutputType | null
  }

  export type SirketCeklerAvgAggregateOutputType = {
    cek_id: number | null
    sirket_id: number | null
    cek_tutari: number | null
  }

  export type SirketCeklerSumAggregateOutputType = {
    cek_id: number | null
    sirket_id: number | null
    cek_tutari: number | null
  }

  export type SirketCeklerMinAggregateOutputType = {
    cek_id: number | null
    sirket_id: number | null
    cek_tutari: number | null
    cek_alinma_tarihi: Date | null
    cek_odeme_tarihi: Date | null
    durum: string | null
    aciklama: string | null
    kayit_tarihi: Date | null
  }

  export type SirketCeklerMaxAggregateOutputType = {
    cek_id: number | null
    sirket_id: number | null
    cek_tutari: number | null
    cek_alinma_tarihi: Date | null
    cek_odeme_tarihi: Date | null
    durum: string | null
    aciklama: string | null
    kayit_tarihi: Date | null
  }

  export type SirketCeklerCountAggregateOutputType = {
    cek_id: number
    sirket_id: number
    cek_tutari: number
    cek_alinma_tarihi: number
    cek_odeme_tarihi: number
    durum: number
    aciklama: number
    kayit_tarihi: number
    _all: number
  }


  export type SirketCeklerAvgAggregateInputType = {
    cek_id?: true
    sirket_id?: true
    cek_tutari?: true
  }

  export type SirketCeklerSumAggregateInputType = {
    cek_id?: true
    sirket_id?: true
    cek_tutari?: true
  }

  export type SirketCeklerMinAggregateInputType = {
    cek_id?: true
    sirket_id?: true
    cek_tutari?: true
    cek_alinma_tarihi?: true
    cek_odeme_tarihi?: true
    durum?: true
    aciklama?: true
    kayit_tarihi?: true
  }

  export type SirketCeklerMaxAggregateInputType = {
    cek_id?: true
    sirket_id?: true
    cek_tutari?: true
    cek_alinma_tarihi?: true
    cek_odeme_tarihi?: true
    durum?: true
    aciklama?: true
    kayit_tarihi?: true
  }

  export type SirketCeklerCountAggregateInputType = {
    cek_id?: true
    sirket_id?: true
    cek_tutari?: true
    cek_alinma_tarihi?: true
    cek_odeme_tarihi?: true
    durum?: true
    aciklama?: true
    kayit_tarihi?: true
    _all?: true
  }

  export type SirketCeklerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SirketCekler to aggregate.
     */
    where?: SirketCeklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketCeklers to fetch.
     */
    orderBy?: SirketCeklerOrderByWithRelationInput | SirketCeklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SirketCeklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketCeklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketCeklers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SirketCeklers
    **/
    _count?: true | SirketCeklerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SirketCeklerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SirketCeklerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SirketCeklerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SirketCeklerMaxAggregateInputType
  }

  export type GetSirketCeklerAggregateType<T extends SirketCeklerAggregateArgs> = {
        [P in keyof T & keyof AggregateSirketCekler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSirketCekler[P]>
      : GetScalarType<T[P], AggregateSirketCekler[P]>
  }




  export type SirketCeklerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SirketCeklerWhereInput
    orderBy?: SirketCeklerOrderByWithAggregationInput | SirketCeklerOrderByWithAggregationInput[]
    by: SirketCeklerScalarFieldEnum[] | SirketCeklerScalarFieldEnum
    having?: SirketCeklerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SirketCeklerCountAggregateInputType | true
    _avg?: SirketCeklerAvgAggregateInputType
    _sum?: SirketCeklerSumAggregateInputType
    _min?: SirketCeklerMinAggregateInputType
    _max?: SirketCeklerMaxAggregateInputType
  }

  export type SirketCeklerGroupByOutputType = {
    cek_id: number
    sirket_id: number
    cek_tutari: number
    cek_alinma_tarihi: Date
    cek_odeme_tarihi: Date
    durum: string
    aciklama: string | null
    kayit_tarihi: Date
    _count: SirketCeklerCountAggregateOutputType | null
    _avg: SirketCeklerAvgAggregateOutputType | null
    _sum: SirketCeklerSumAggregateOutputType | null
    _min: SirketCeklerMinAggregateOutputType | null
    _max: SirketCeklerMaxAggregateOutputType | null
  }

  type GetSirketCeklerGroupByPayload<T extends SirketCeklerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SirketCeklerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SirketCeklerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SirketCeklerGroupByOutputType[P]>
            : GetScalarType<T[P], SirketCeklerGroupByOutputType[P]>
        }
      >
    >


  export type SirketCeklerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cek_id?: boolean
    sirket_id?: boolean
    cek_tutari?: boolean
    cek_alinma_tarihi?: boolean
    cek_odeme_tarihi?: boolean
    durum?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketCekler"]>

  export type SirketCeklerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cek_id?: boolean
    sirket_id?: boolean
    cek_tutari?: boolean
    cek_alinma_tarihi?: boolean
    cek_odeme_tarihi?: boolean
    durum?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketCekler"]>

  export type SirketCeklerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cek_id?: boolean
    sirket_id?: boolean
    cek_tutari?: boolean
    cek_alinma_tarihi?: boolean
    cek_odeme_tarihi?: boolean
    durum?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sirketCekler"]>

  export type SirketCeklerSelectScalar = {
    cek_id?: boolean
    sirket_id?: boolean
    cek_tutari?: boolean
    cek_alinma_tarihi?: boolean
    cek_odeme_tarihi?: boolean
    durum?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
  }

  export type SirketCeklerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cek_id" | "sirket_id" | "cek_tutari" | "cek_alinma_tarihi" | "cek_odeme_tarihi" | "durum" | "aciklama" | "kayit_tarihi", ExtArgs["result"]["sirketCekler"]>
  export type SirketCeklerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }
  export type SirketCeklerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }
  export type SirketCeklerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sirket?: boolean | SirketlerDefaultArgs<ExtArgs>
  }

  export type $SirketCeklerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SirketCekler"
    objects: {
      sirket: Prisma.$SirketlerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cek_id: number
      sirket_id: number
      cek_tutari: number
      cek_alinma_tarihi: Date
      cek_odeme_tarihi: Date
      durum: string
      aciklama: string | null
      kayit_tarihi: Date
    }, ExtArgs["result"]["sirketCekler"]>
    composites: {}
  }

  type SirketCeklerGetPayload<S extends boolean | null | undefined | SirketCeklerDefaultArgs> = $Result.GetResult<Prisma.$SirketCeklerPayload, S>

  type SirketCeklerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SirketCeklerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SirketCeklerCountAggregateInputType | true
    }

  export interface SirketCeklerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SirketCekler'], meta: { name: 'SirketCekler' } }
    /**
     * Find zero or one SirketCekler that matches the filter.
     * @param {SirketCeklerFindUniqueArgs} args - Arguments to find a SirketCekler
     * @example
     * // Get one SirketCekler
     * const sirketCekler = await prisma.sirketCekler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SirketCeklerFindUniqueArgs>(args: SelectSubset<T, SirketCeklerFindUniqueArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SirketCekler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SirketCeklerFindUniqueOrThrowArgs} args - Arguments to find a SirketCekler
     * @example
     * // Get one SirketCekler
     * const sirketCekler = await prisma.sirketCekler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SirketCeklerFindUniqueOrThrowArgs>(args: SelectSubset<T, SirketCeklerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SirketCekler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerFindFirstArgs} args - Arguments to find a SirketCekler
     * @example
     * // Get one SirketCekler
     * const sirketCekler = await prisma.sirketCekler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SirketCeklerFindFirstArgs>(args?: SelectSubset<T, SirketCeklerFindFirstArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SirketCekler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerFindFirstOrThrowArgs} args - Arguments to find a SirketCekler
     * @example
     * // Get one SirketCekler
     * const sirketCekler = await prisma.sirketCekler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SirketCeklerFindFirstOrThrowArgs>(args?: SelectSubset<T, SirketCeklerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SirketCeklers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SirketCeklers
     * const sirketCeklers = await prisma.sirketCekler.findMany()
     * 
     * // Get first 10 SirketCeklers
     * const sirketCeklers = await prisma.sirketCekler.findMany({ take: 10 })
     * 
     * // Only select the `cek_id`
     * const sirketCeklerWithCek_idOnly = await prisma.sirketCekler.findMany({ select: { cek_id: true } })
     * 
     */
    findMany<T extends SirketCeklerFindManyArgs>(args?: SelectSubset<T, SirketCeklerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SirketCekler.
     * @param {SirketCeklerCreateArgs} args - Arguments to create a SirketCekler.
     * @example
     * // Create one SirketCekler
     * const SirketCekler = await prisma.sirketCekler.create({
     *   data: {
     *     // ... data to create a SirketCekler
     *   }
     * })
     * 
     */
    create<T extends SirketCeklerCreateArgs>(args: SelectSubset<T, SirketCeklerCreateArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SirketCeklers.
     * @param {SirketCeklerCreateManyArgs} args - Arguments to create many SirketCeklers.
     * @example
     * // Create many SirketCeklers
     * const sirketCekler = await prisma.sirketCekler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SirketCeklerCreateManyArgs>(args?: SelectSubset<T, SirketCeklerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SirketCeklers and returns the data saved in the database.
     * @param {SirketCeklerCreateManyAndReturnArgs} args - Arguments to create many SirketCeklers.
     * @example
     * // Create many SirketCeklers
     * const sirketCekler = await prisma.sirketCekler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SirketCeklers and only return the `cek_id`
     * const sirketCeklerWithCek_idOnly = await prisma.sirketCekler.createManyAndReturn({
     *   select: { cek_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SirketCeklerCreateManyAndReturnArgs>(args?: SelectSubset<T, SirketCeklerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SirketCekler.
     * @param {SirketCeklerDeleteArgs} args - Arguments to delete one SirketCekler.
     * @example
     * // Delete one SirketCekler
     * const SirketCekler = await prisma.sirketCekler.delete({
     *   where: {
     *     // ... filter to delete one SirketCekler
     *   }
     * })
     * 
     */
    delete<T extends SirketCeklerDeleteArgs>(args: SelectSubset<T, SirketCeklerDeleteArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SirketCekler.
     * @param {SirketCeklerUpdateArgs} args - Arguments to update one SirketCekler.
     * @example
     * // Update one SirketCekler
     * const sirketCekler = await prisma.sirketCekler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SirketCeklerUpdateArgs>(args: SelectSubset<T, SirketCeklerUpdateArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SirketCeklers.
     * @param {SirketCeklerDeleteManyArgs} args - Arguments to filter SirketCeklers to delete.
     * @example
     * // Delete a few SirketCeklers
     * const { count } = await prisma.sirketCekler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SirketCeklerDeleteManyArgs>(args?: SelectSubset<T, SirketCeklerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SirketCeklers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SirketCeklers
     * const sirketCekler = await prisma.sirketCekler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SirketCeklerUpdateManyArgs>(args: SelectSubset<T, SirketCeklerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SirketCeklers and returns the data updated in the database.
     * @param {SirketCeklerUpdateManyAndReturnArgs} args - Arguments to update many SirketCeklers.
     * @example
     * // Update many SirketCeklers
     * const sirketCekler = await prisma.sirketCekler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SirketCeklers and only return the `cek_id`
     * const sirketCeklerWithCek_idOnly = await prisma.sirketCekler.updateManyAndReturn({
     *   select: { cek_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SirketCeklerUpdateManyAndReturnArgs>(args: SelectSubset<T, SirketCeklerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SirketCekler.
     * @param {SirketCeklerUpsertArgs} args - Arguments to update or create a SirketCekler.
     * @example
     * // Update or create a SirketCekler
     * const sirketCekler = await prisma.sirketCekler.upsert({
     *   create: {
     *     // ... data to create a SirketCekler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SirketCekler we want to update
     *   }
     * })
     */
    upsert<T extends SirketCeklerUpsertArgs>(args: SelectSubset<T, SirketCeklerUpsertArgs<ExtArgs>>): Prisma__SirketCeklerClient<$Result.GetResult<Prisma.$SirketCeklerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SirketCeklers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerCountArgs} args - Arguments to filter SirketCeklers to count.
     * @example
     * // Count the number of SirketCeklers
     * const count = await prisma.sirketCekler.count({
     *   where: {
     *     // ... the filter for the SirketCeklers we want to count
     *   }
     * })
    **/
    count<T extends SirketCeklerCountArgs>(
      args?: Subset<T, SirketCeklerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SirketCeklerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SirketCekler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SirketCeklerAggregateArgs>(args: Subset<T, SirketCeklerAggregateArgs>): Prisma.PrismaPromise<GetSirketCeklerAggregateType<T>>

    /**
     * Group by SirketCekler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SirketCeklerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SirketCeklerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SirketCeklerGroupByArgs['orderBy'] }
        : { orderBy?: SirketCeklerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SirketCeklerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSirketCeklerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SirketCekler model
   */
  readonly fields: SirketCeklerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SirketCekler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SirketCeklerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sirket<T extends SirketlerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SirketlerDefaultArgs<ExtArgs>>): Prisma__SirketlerClient<$Result.GetResult<Prisma.$SirketlerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SirketCekler model
   */
  interface SirketCeklerFieldRefs {
    readonly cek_id: FieldRef<"SirketCekler", 'Int'>
    readonly sirket_id: FieldRef<"SirketCekler", 'Int'>
    readonly cek_tutari: FieldRef<"SirketCekler", 'Float'>
    readonly cek_alinma_tarihi: FieldRef<"SirketCekler", 'DateTime'>
    readonly cek_odeme_tarihi: FieldRef<"SirketCekler", 'DateTime'>
    readonly durum: FieldRef<"SirketCekler", 'String'>
    readonly aciklama: FieldRef<"SirketCekler", 'String'>
    readonly kayit_tarihi: FieldRef<"SirketCekler", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SirketCekler findUnique
   */
  export type SirketCeklerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * Filter, which SirketCekler to fetch.
     */
    where: SirketCeklerWhereUniqueInput
  }

  /**
   * SirketCekler findUniqueOrThrow
   */
  export type SirketCeklerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * Filter, which SirketCekler to fetch.
     */
    where: SirketCeklerWhereUniqueInput
  }

  /**
   * SirketCekler findFirst
   */
  export type SirketCeklerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * Filter, which SirketCekler to fetch.
     */
    where?: SirketCeklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketCeklers to fetch.
     */
    orderBy?: SirketCeklerOrderByWithRelationInput | SirketCeklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SirketCeklers.
     */
    cursor?: SirketCeklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketCeklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketCeklers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SirketCeklers.
     */
    distinct?: SirketCeklerScalarFieldEnum | SirketCeklerScalarFieldEnum[]
  }

  /**
   * SirketCekler findFirstOrThrow
   */
  export type SirketCeklerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * Filter, which SirketCekler to fetch.
     */
    where?: SirketCeklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketCeklers to fetch.
     */
    orderBy?: SirketCeklerOrderByWithRelationInput | SirketCeklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SirketCeklers.
     */
    cursor?: SirketCeklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketCeklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketCeklers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SirketCeklers.
     */
    distinct?: SirketCeklerScalarFieldEnum | SirketCeklerScalarFieldEnum[]
  }

  /**
   * SirketCekler findMany
   */
  export type SirketCeklerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * Filter, which SirketCeklers to fetch.
     */
    where?: SirketCeklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SirketCeklers to fetch.
     */
    orderBy?: SirketCeklerOrderByWithRelationInput | SirketCeklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SirketCeklers.
     */
    cursor?: SirketCeklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SirketCeklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SirketCeklers.
     */
    skip?: number
    distinct?: SirketCeklerScalarFieldEnum | SirketCeklerScalarFieldEnum[]
  }

  /**
   * SirketCekler create
   */
  export type SirketCeklerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * The data needed to create a SirketCekler.
     */
    data: XOR<SirketCeklerCreateInput, SirketCeklerUncheckedCreateInput>
  }

  /**
   * SirketCekler createMany
   */
  export type SirketCeklerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SirketCeklers.
     */
    data: SirketCeklerCreateManyInput | SirketCeklerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SirketCekler createManyAndReturn
   */
  export type SirketCeklerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * The data used to create many SirketCeklers.
     */
    data: SirketCeklerCreateManyInput | SirketCeklerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SirketCekler update
   */
  export type SirketCeklerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * The data needed to update a SirketCekler.
     */
    data: XOR<SirketCeklerUpdateInput, SirketCeklerUncheckedUpdateInput>
    /**
     * Choose, which SirketCekler to update.
     */
    where: SirketCeklerWhereUniqueInput
  }

  /**
   * SirketCekler updateMany
   */
  export type SirketCeklerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SirketCeklers.
     */
    data: XOR<SirketCeklerUpdateManyMutationInput, SirketCeklerUncheckedUpdateManyInput>
    /**
     * Filter which SirketCeklers to update
     */
    where?: SirketCeklerWhereInput
    /**
     * Limit how many SirketCeklers to update.
     */
    limit?: number
  }

  /**
   * SirketCekler updateManyAndReturn
   */
  export type SirketCeklerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * The data used to update SirketCeklers.
     */
    data: XOR<SirketCeklerUpdateManyMutationInput, SirketCeklerUncheckedUpdateManyInput>
    /**
     * Filter which SirketCeklers to update
     */
    where?: SirketCeklerWhereInput
    /**
     * Limit how many SirketCeklers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SirketCekler upsert
   */
  export type SirketCeklerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * The filter to search for the SirketCekler to update in case it exists.
     */
    where: SirketCeklerWhereUniqueInput
    /**
     * In case the SirketCekler found by the `where` argument doesn't exist, create a new SirketCekler with this data.
     */
    create: XOR<SirketCeklerCreateInput, SirketCeklerUncheckedCreateInput>
    /**
     * In case the SirketCekler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SirketCeklerUpdateInput, SirketCeklerUncheckedUpdateInput>
  }

  /**
   * SirketCekler delete
   */
  export type SirketCeklerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
    /**
     * Filter which SirketCekler to delete.
     */
    where: SirketCeklerWhereUniqueInput
  }

  /**
   * SirketCekler deleteMany
   */
  export type SirketCeklerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SirketCeklers to delete
     */
    where?: SirketCeklerWhereInput
    /**
     * Limit how many SirketCeklers to delete.
     */
    limit?: number
  }

  /**
   * SirketCekler without action
   */
  export type SirketCeklerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SirketCekler
     */
    select?: SirketCeklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SirketCekler
     */
    omit?: SirketCeklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SirketCeklerInclude<ExtArgs> | null
  }


  /**
   * Model AracOdemeKayitlari
   */

  export type AggregateAracOdemeKayitlari = {
    _count: AracOdemeKayitlariCountAggregateOutputType | null
    _avg: AracOdemeKayitlariAvgAggregateOutputType | null
    _sum: AracOdemeKayitlariSumAggregateOutputType | null
    _min: AracOdemeKayitlariMinAggregateOutputType | null
    _max: AracOdemeKayitlariMaxAggregateOutputType | null
  }

  export type AracOdemeKayitlariAvgAggregateOutputType = {
    odeme_id: number | null
    arac_id: number | null
    odeme_tutari: number | null
  }

  export type AracOdemeKayitlariSumAggregateOutputType = {
    odeme_id: number | null
    arac_id: number | null
    odeme_tutari: number | null
  }

  export type AracOdemeKayitlariMinAggregateOutputType = {
    odeme_id: number | null
    arac_id: number | null
    odeme_tutari: number | null
    odeme_tarihi: Date | null
    aciklama: string | null
    kayit_tarihi: Date | null
  }

  export type AracOdemeKayitlariMaxAggregateOutputType = {
    odeme_id: number | null
    arac_id: number | null
    odeme_tutari: number | null
    odeme_tarihi: Date | null
    aciklama: string | null
    kayit_tarihi: Date | null
  }

  export type AracOdemeKayitlariCountAggregateOutputType = {
    odeme_id: number
    arac_id: number
    odeme_tutari: number
    odeme_tarihi: number
    aciklama: number
    kayit_tarihi: number
    _all: number
  }


  export type AracOdemeKayitlariAvgAggregateInputType = {
    odeme_id?: true
    arac_id?: true
    odeme_tutari?: true
  }

  export type AracOdemeKayitlariSumAggregateInputType = {
    odeme_id?: true
    arac_id?: true
    odeme_tutari?: true
  }

  export type AracOdemeKayitlariMinAggregateInputType = {
    odeme_id?: true
    arac_id?: true
    odeme_tutari?: true
    odeme_tarihi?: true
    aciklama?: true
    kayit_tarihi?: true
  }

  export type AracOdemeKayitlariMaxAggregateInputType = {
    odeme_id?: true
    arac_id?: true
    odeme_tutari?: true
    odeme_tarihi?: true
    aciklama?: true
    kayit_tarihi?: true
  }

  export type AracOdemeKayitlariCountAggregateInputType = {
    odeme_id?: true
    arac_id?: true
    odeme_tutari?: true
    odeme_tarihi?: true
    aciklama?: true
    kayit_tarihi?: true
    _all?: true
  }

  export type AracOdemeKayitlariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AracOdemeKayitlari to aggregate.
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AracOdemeKayitlaris to fetch.
     */
    orderBy?: AracOdemeKayitlariOrderByWithRelationInput | AracOdemeKayitlariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AracOdemeKayitlariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AracOdemeKayitlaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AracOdemeKayitlaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AracOdemeKayitlaris
    **/
    _count?: true | AracOdemeKayitlariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AracOdemeKayitlariAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AracOdemeKayitlariSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AracOdemeKayitlariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AracOdemeKayitlariMaxAggregateInputType
  }

  export type GetAracOdemeKayitlariAggregateType<T extends AracOdemeKayitlariAggregateArgs> = {
        [P in keyof T & keyof AggregateAracOdemeKayitlari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAracOdemeKayitlari[P]>
      : GetScalarType<T[P], AggregateAracOdemeKayitlari[P]>
  }




  export type AracOdemeKayitlariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AracOdemeKayitlariWhereInput
    orderBy?: AracOdemeKayitlariOrderByWithAggregationInput | AracOdemeKayitlariOrderByWithAggregationInput[]
    by: AracOdemeKayitlariScalarFieldEnum[] | AracOdemeKayitlariScalarFieldEnum
    having?: AracOdemeKayitlariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AracOdemeKayitlariCountAggregateInputType | true
    _avg?: AracOdemeKayitlariAvgAggregateInputType
    _sum?: AracOdemeKayitlariSumAggregateInputType
    _min?: AracOdemeKayitlariMinAggregateInputType
    _max?: AracOdemeKayitlariMaxAggregateInputType
  }

  export type AracOdemeKayitlariGroupByOutputType = {
    odeme_id: number
    arac_id: number
    odeme_tutari: number
    odeme_tarihi: Date
    aciklama: string | null
    kayit_tarihi: Date
    _count: AracOdemeKayitlariCountAggregateOutputType | null
    _avg: AracOdemeKayitlariAvgAggregateOutputType | null
    _sum: AracOdemeKayitlariSumAggregateOutputType | null
    _min: AracOdemeKayitlariMinAggregateOutputType | null
    _max: AracOdemeKayitlariMaxAggregateOutputType | null
  }

  type GetAracOdemeKayitlariGroupByPayload<T extends AracOdemeKayitlariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AracOdemeKayitlariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AracOdemeKayitlariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AracOdemeKayitlariGroupByOutputType[P]>
            : GetScalarType<T[P], AracOdemeKayitlariGroupByOutputType[P]>
        }
      >
    >


  export type AracOdemeKayitlariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    odeme_id?: boolean
    arac_id?: boolean
    odeme_tutari?: boolean
    odeme_tarihi?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aracOdemeKayitlari"]>

  export type AracOdemeKayitlariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    odeme_id?: boolean
    arac_id?: boolean
    odeme_tutari?: boolean
    odeme_tarihi?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aracOdemeKayitlari"]>

  export type AracOdemeKayitlariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    odeme_id?: boolean
    arac_id?: boolean
    odeme_tutari?: boolean
    odeme_tarihi?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aracOdemeKayitlari"]>

  export type AracOdemeKayitlariSelectScalar = {
    odeme_id?: boolean
    arac_id?: boolean
    odeme_tutari?: boolean
    odeme_tarihi?: boolean
    aciklama?: boolean
    kayit_tarihi?: boolean
  }

  export type AracOdemeKayitlariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"odeme_id" | "arac_id" | "odeme_tutari" | "odeme_tarihi" | "aciklama" | "kayit_tarihi", ExtArgs["result"]["aracOdemeKayitlari"]>
  export type AracOdemeKayitlariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }
  export type AracOdemeKayitlariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }
  export type AracOdemeKayitlariIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arac?: boolean | AraclarDefaultArgs<ExtArgs>
  }

  export type $AracOdemeKayitlariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AracOdemeKayitlari"
    objects: {
      arac: Prisma.$AraclarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      odeme_id: number
      arac_id: number
      odeme_tutari: number
      odeme_tarihi: Date
      aciklama: string | null
      kayit_tarihi: Date
    }, ExtArgs["result"]["aracOdemeKayitlari"]>
    composites: {}
  }

  type AracOdemeKayitlariGetPayload<S extends boolean | null | undefined | AracOdemeKayitlariDefaultArgs> = $Result.GetResult<Prisma.$AracOdemeKayitlariPayload, S>

  type AracOdemeKayitlariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AracOdemeKayitlariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AracOdemeKayitlariCountAggregateInputType | true
    }

  export interface AracOdemeKayitlariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AracOdemeKayitlari'], meta: { name: 'AracOdemeKayitlari' } }
    /**
     * Find zero or one AracOdemeKayitlari that matches the filter.
     * @param {AracOdemeKayitlariFindUniqueArgs} args - Arguments to find a AracOdemeKayitlari
     * @example
     * // Get one AracOdemeKayitlari
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AracOdemeKayitlariFindUniqueArgs>(args: SelectSubset<T, AracOdemeKayitlariFindUniqueArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AracOdemeKayitlari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AracOdemeKayitlariFindUniqueOrThrowArgs} args - Arguments to find a AracOdemeKayitlari
     * @example
     * // Get one AracOdemeKayitlari
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AracOdemeKayitlariFindUniqueOrThrowArgs>(args: SelectSubset<T, AracOdemeKayitlariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AracOdemeKayitlari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariFindFirstArgs} args - Arguments to find a AracOdemeKayitlari
     * @example
     * // Get one AracOdemeKayitlari
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AracOdemeKayitlariFindFirstArgs>(args?: SelectSubset<T, AracOdemeKayitlariFindFirstArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AracOdemeKayitlari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariFindFirstOrThrowArgs} args - Arguments to find a AracOdemeKayitlari
     * @example
     * // Get one AracOdemeKayitlari
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AracOdemeKayitlariFindFirstOrThrowArgs>(args?: SelectSubset<T, AracOdemeKayitlariFindFirstOrThrowArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AracOdemeKayitlaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AracOdemeKayitlaris
     * const aracOdemeKayitlaris = await prisma.aracOdemeKayitlari.findMany()
     * 
     * // Get first 10 AracOdemeKayitlaris
     * const aracOdemeKayitlaris = await prisma.aracOdemeKayitlari.findMany({ take: 10 })
     * 
     * // Only select the `odeme_id`
     * const aracOdemeKayitlariWithOdeme_idOnly = await prisma.aracOdemeKayitlari.findMany({ select: { odeme_id: true } })
     * 
     */
    findMany<T extends AracOdemeKayitlariFindManyArgs>(args?: SelectSubset<T, AracOdemeKayitlariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AracOdemeKayitlari.
     * @param {AracOdemeKayitlariCreateArgs} args - Arguments to create a AracOdemeKayitlari.
     * @example
     * // Create one AracOdemeKayitlari
     * const AracOdemeKayitlari = await prisma.aracOdemeKayitlari.create({
     *   data: {
     *     // ... data to create a AracOdemeKayitlari
     *   }
     * })
     * 
     */
    create<T extends AracOdemeKayitlariCreateArgs>(args: SelectSubset<T, AracOdemeKayitlariCreateArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AracOdemeKayitlaris.
     * @param {AracOdemeKayitlariCreateManyArgs} args - Arguments to create many AracOdemeKayitlaris.
     * @example
     * // Create many AracOdemeKayitlaris
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AracOdemeKayitlariCreateManyArgs>(args?: SelectSubset<T, AracOdemeKayitlariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AracOdemeKayitlaris and returns the data saved in the database.
     * @param {AracOdemeKayitlariCreateManyAndReturnArgs} args - Arguments to create many AracOdemeKayitlaris.
     * @example
     * // Create many AracOdemeKayitlaris
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AracOdemeKayitlaris and only return the `odeme_id`
     * const aracOdemeKayitlariWithOdeme_idOnly = await prisma.aracOdemeKayitlari.createManyAndReturn({
     *   select: { odeme_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AracOdemeKayitlariCreateManyAndReturnArgs>(args?: SelectSubset<T, AracOdemeKayitlariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AracOdemeKayitlari.
     * @param {AracOdemeKayitlariDeleteArgs} args - Arguments to delete one AracOdemeKayitlari.
     * @example
     * // Delete one AracOdemeKayitlari
     * const AracOdemeKayitlari = await prisma.aracOdemeKayitlari.delete({
     *   where: {
     *     // ... filter to delete one AracOdemeKayitlari
     *   }
     * })
     * 
     */
    delete<T extends AracOdemeKayitlariDeleteArgs>(args: SelectSubset<T, AracOdemeKayitlariDeleteArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AracOdemeKayitlari.
     * @param {AracOdemeKayitlariUpdateArgs} args - Arguments to update one AracOdemeKayitlari.
     * @example
     * // Update one AracOdemeKayitlari
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AracOdemeKayitlariUpdateArgs>(args: SelectSubset<T, AracOdemeKayitlariUpdateArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AracOdemeKayitlaris.
     * @param {AracOdemeKayitlariDeleteManyArgs} args - Arguments to filter AracOdemeKayitlaris to delete.
     * @example
     * // Delete a few AracOdemeKayitlaris
     * const { count } = await prisma.aracOdemeKayitlari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AracOdemeKayitlariDeleteManyArgs>(args?: SelectSubset<T, AracOdemeKayitlariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AracOdemeKayitlaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AracOdemeKayitlaris
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AracOdemeKayitlariUpdateManyArgs>(args: SelectSubset<T, AracOdemeKayitlariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AracOdemeKayitlaris and returns the data updated in the database.
     * @param {AracOdemeKayitlariUpdateManyAndReturnArgs} args - Arguments to update many AracOdemeKayitlaris.
     * @example
     * // Update many AracOdemeKayitlaris
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AracOdemeKayitlaris and only return the `odeme_id`
     * const aracOdemeKayitlariWithOdeme_idOnly = await prisma.aracOdemeKayitlari.updateManyAndReturn({
     *   select: { odeme_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AracOdemeKayitlariUpdateManyAndReturnArgs>(args: SelectSubset<T, AracOdemeKayitlariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AracOdemeKayitlari.
     * @param {AracOdemeKayitlariUpsertArgs} args - Arguments to update or create a AracOdemeKayitlari.
     * @example
     * // Update or create a AracOdemeKayitlari
     * const aracOdemeKayitlari = await prisma.aracOdemeKayitlari.upsert({
     *   create: {
     *     // ... data to create a AracOdemeKayitlari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AracOdemeKayitlari we want to update
     *   }
     * })
     */
    upsert<T extends AracOdemeKayitlariUpsertArgs>(args: SelectSubset<T, AracOdemeKayitlariUpsertArgs<ExtArgs>>): Prisma__AracOdemeKayitlariClient<$Result.GetResult<Prisma.$AracOdemeKayitlariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AracOdemeKayitlaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariCountArgs} args - Arguments to filter AracOdemeKayitlaris to count.
     * @example
     * // Count the number of AracOdemeKayitlaris
     * const count = await prisma.aracOdemeKayitlari.count({
     *   where: {
     *     // ... the filter for the AracOdemeKayitlaris we want to count
     *   }
     * })
    **/
    count<T extends AracOdemeKayitlariCountArgs>(
      args?: Subset<T, AracOdemeKayitlariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AracOdemeKayitlariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AracOdemeKayitlari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AracOdemeKayitlariAggregateArgs>(args: Subset<T, AracOdemeKayitlariAggregateArgs>): Prisma.PrismaPromise<GetAracOdemeKayitlariAggregateType<T>>

    /**
     * Group by AracOdemeKayitlari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AracOdemeKayitlariGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AracOdemeKayitlariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AracOdemeKayitlariGroupByArgs['orderBy'] }
        : { orderBy?: AracOdemeKayitlariGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AracOdemeKayitlariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAracOdemeKayitlariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AracOdemeKayitlari model
   */
  readonly fields: AracOdemeKayitlariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AracOdemeKayitlari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AracOdemeKayitlariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arac<T extends AraclarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AraclarDefaultArgs<ExtArgs>>): Prisma__AraclarClient<$Result.GetResult<Prisma.$AraclarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AracOdemeKayitlari model
   */
  interface AracOdemeKayitlariFieldRefs {
    readonly odeme_id: FieldRef<"AracOdemeKayitlari", 'Int'>
    readonly arac_id: FieldRef<"AracOdemeKayitlari", 'Int'>
    readonly odeme_tutari: FieldRef<"AracOdemeKayitlari", 'Float'>
    readonly odeme_tarihi: FieldRef<"AracOdemeKayitlari", 'DateTime'>
    readonly aciklama: FieldRef<"AracOdemeKayitlari", 'String'>
    readonly kayit_tarihi: FieldRef<"AracOdemeKayitlari", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AracOdemeKayitlari findUnique
   */
  export type AracOdemeKayitlariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * Filter, which AracOdemeKayitlari to fetch.
     */
    where: AracOdemeKayitlariWhereUniqueInput
  }

  /**
   * AracOdemeKayitlari findUniqueOrThrow
   */
  export type AracOdemeKayitlariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * Filter, which AracOdemeKayitlari to fetch.
     */
    where: AracOdemeKayitlariWhereUniqueInput
  }

  /**
   * AracOdemeKayitlari findFirst
   */
  export type AracOdemeKayitlariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * Filter, which AracOdemeKayitlari to fetch.
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AracOdemeKayitlaris to fetch.
     */
    orderBy?: AracOdemeKayitlariOrderByWithRelationInput | AracOdemeKayitlariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AracOdemeKayitlaris.
     */
    cursor?: AracOdemeKayitlariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AracOdemeKayitlaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AracOdemeKayitlaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AracOdemeKayitlaris.
     */
    distinct?: AracOdemeKayitlariScalarFieldEnum | AracOdemeKayitlariScalarFieldEnum[]
  }

  /**
   * AracOdemeKayitlari findFirstOrThrow
   */
  export type AracOdemeKayitlariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * Filter, which AracOdemeKayitlari to fetch.
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AracOdemeKayitlaris to fetch.
     */
    orderBy?: AracOdemeKayitlariOrderByWithRelationInput | AracOdemeKayitlariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AracOdemeKayitlaris.
     */
    cursor?: AracOdemeKayitlariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AracOdemeKayitlaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AracOdemeKayitlaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AracOdemeKayitlaris.
     */
    distinct?: AracOdemeKayitlariScalarFieldEnum | AracOdemeKayitlariScalarFieldEnum[]
  }

  /**
   * AracOdemeKayitlari findMany
   */
  export type AracOdemeKayitlariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * Filter, which AracOdemeKayitlaris to fetch.
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AracOdemeKayitlaris to fetch.
     */
    orderBy?: AracOdemeKayitlariOrderByWithRelationInput | AracOdemeKayitlariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AracOdemeKayitlaris.
     */
    cursor?: AracOdemeKayitlariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AracOdemeKayitlaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AracOdemeKayitlaris.
     */
    skip?: number
    distinct?: AracOdemeKayitlariScalarFieldEnum | AracOdemeKayitlariScalarFieldEnum[]
  }

  /**
   * AracOdemeKayitlari create
   */
  export type AracOdemeKayitlariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * The data needed to create a AracOdemeKayitlari.
     */
    data: XOR<AracOdemeKayitlariCreateInput, AracOdemeKayitlariUncheckedCreateInput>
  }

  /**
   * AracOdemeKayitlari createMany
   */
  export type AracOdemeKayitlariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AracOdemeKayitlaris.
     */
    data: AracOdemeKayitlariCreateManyInput | AracOdemeKayitlariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AracOdemeKayitlari createManyAndReturn
   */
  export type AracOdemeKayitlariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * The data used to create many AracOdemeKayitlaris.
     */
    data: AracOdemeKayitlariCreateManyInput | AracOdemeKayitlariCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AracOdemeKayitlari update
   */
  export type AracOdemeKayitlariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * The data needed to update a AracOdemeKayitlari.
     */
    data: XOR<AracOdemeKayitlariUpdateInput, AracOdemeKayitlariUncheckedUpdateInput>
    /**
     * Choose, which AracOdemeKayitlari to update.
     */
    where: AracOdemeKayitlariWhereUniqueInput
  }

  /**
   * AracOdemeKayitlari updateMany
   */
  export type AracOdemeKayitlariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AracOdemeKayitlaris.
     */
    data: XOR<AracOdemeKayitlariUpdateManyMutationInput, AracOdemeKayitlariUncheckedUpdateManyInput>
    /**
     * Filter which AracOdemeKayitlaris to update
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * Limit how many AracOdemeKayitlaris to update.
     */
    limit?: number
  }

  /**
   * AracOdemeKayitlari updateManyAndReturn
   */
  export type AracOdemeKayitlariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * The data used to update AracOdemeKayitlaris.
     */
    data: XOR<AracOdemeKayitlariUpdateManyMutationInput, AracOdemeKayitlariUncheckedUpdateManyInput>
    /**
     * Filter which AracOdemeKayitlaris to update
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * Limit how many AracOdemeKayitlaris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AracOdemeKayitlari upsert
   */
  export type AracOdemeKayitlariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * The filter to search for the AracOdemeKayitlari to update in case it exists.
     */
    where: AracOdemeKayitlariWhereUniqueInput
    /**
     * In case the AracOdemeKayitlari found by the `where` argument doesn't exist, create a new AracOdemeKayitlari with this data.
     */
    create: XOR<AracOdemeKayitlariCreateInput, AracOdemeKayitlariUncheckedCreateInput>
    /**
     * In case the AracOdemeKayitlari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AracOdemeKayitlariUpdateInput, AracOdemeKayitlariUncheckedUpdateInput>
  }

  /**
   * AracOdemeKayitlari delete
   */
  export type AracOdemeKayitlariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
    /**
     * Filter which AracOdemeKayitlari to delete.
     */
    where: AracOdemeKayitlariWhereUniqueInput
  }

  /**
   * AracOdemeKayitlari deleteMany
   */
  export type AracOdemeKayitlariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AracOdemeKayitlaris to delete
     */
    where?: AracOdemeKayitlariWhereInput
    /**
     * Limit how many AracOdemeKayitlaris to delete.
     */
    limit?: number
  }

  /**
   * AracOdemeKayitlari without action
   */
  export type AracOdemeKayitlariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AracOdemeKayitlari
     */
    select?: AracOdemeKayitlariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AracOdemeKayitlari
     */
    omit?: AracOdemeKayitlariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AracOdemeKayitlariInclude<ExtArgs> | null
  }


  /**
   * Model YuklenenExcelDosyalar
   */

  export type AggregateYuklenenExcelDosyalar = {
    _count: YuklenenExcelDosyalarCountAggregateOutputType | null
    _avg: YuklenenExcelDosyalarAvgAggregateOutputType | null
    _sum: YuklenenExcelDosyalarSumAggregateOutputType | null
    _min: YuklenenExcelDosyalarMinAggregateOutputType | null
    _max: YuklenenExcelDosyalarMaxAggregateOutputType | null
  }

  export type YuklenenExcelDosyalarAvgAggregateOutputType = {
    dosya_id: number | null
  }

  export type YuklenenExcelDosyalarSumAggregateOutputType = {
    dosya_id: number | null
  }

  export type YuklenenExcelDosyalarMinAggregateOutputType = {
    dosya_id: number | null
    dosya_adi: string | null
    dosya_yolu: string | null
    yukleme_tarihi: Date | null
    aciklama: string | null
  }

  export type YuklenenExcelDosyalarMaxAggregateOutputType = {
    dosya_id: number | null
    dosya_adi: string | null
    dosya_yolu: string | null
    yukleme_tarihi: Date | null
    aciklama: string | null
  }

  export type YuklenenExcelDosyalarCountAggregateOutputType = {
    dosya_id: number
    dosya_adi: number
    dosya_yolu: number
    yukleme_tarihi: number
    aciklama: number
    _all: number
  }


  export type YuklenenExcelDosyalarAvgAggregateInputType = {
    dosya_id?: true
  }

  export type YuklenenExcelDosyalarSumAggregateInputType = {
    dosya_id?: true
  }

  export type YuklenenExcelDosyalarMinAggregateInputType = {
    dosya_id?: true
    dosya_adi?: true
    dosya_yolu?: true
    yukleme_tarihi?: true
    aciklama?: true
  }

  export type YuklenenExcelDosyalarMaxAggregateInputType = {
    dosya_id?: true
    dosya_adi?: true
    dosya_yolu?: true
    yukleme_tarihi?: true
    aciklama?: true
  }

  export type YuklenenExcelDosyalarCountAggregateInputType = {
    dosya_id?: true
    dosya_adi?: true
    dosya_yolu?: true
    yukleme_tarihi?: true
    aciklama?: true
    _all?: true
  }

  export type YuklenenExcelDosyalarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YuklenenExcelDosyalar to aggregate.
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YuklenenExcelDosyalars to fetch.
     */
    orderBy?: YuklenenExcelDosyalarOrderByWithRelationInput | YuklenenExcelDosyalarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YuklenenExcelDosyalarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YuklenenExcelDosyalars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YuklenenExcelDosyalars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YuklenenExcelDosyalars
    **/
    _count?: true | YuklenenExcelDosyalarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YuklenenExcelDosyalarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YuklenenExcelDosyalarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YuklenenExcelDosyalarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YuklenenExcelDosyalarMaxAggregateInputType
  }

  export type GetYuklenenExcelDosyalarAggregateType<T extends YuklenenExcelDosyalarAggregateArgs> = {
        [P in keyof T & keyof AggregateYuklenenExcelDosyalar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYuklenenExcelDosyalar[P]>
      : GetScalarType<T[P], AggregateYuklenenExcelDosyalar[P]>
  }




  export type YuklenenExcelDosyalarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YuklenenExcelDosyalarWhereInput
    orderBy?: YuklenenExcelDosyalarOrderByWithAggregationInput | YuklenenExcelDosyalarOrderByWithAggregationInput[]
    by: YuklenenExcelDosyalarScalarFieldEnum[] | YuklenenExcelDosyalarScalarFieldEnum
    having?: YuklenenExcelDosyalarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YuklenenExcelDosyalarCountAggregateInputType | true
    _avg?: YuklenenExcelDosyalarAvgAggregateInputType
    _sum?: YuklenenExcelDosyalarSumAggregateInputType
    _min?: YuklenenExcelDosyalarMinAggregateInputType
    _max?: YuklenenExcelDosyalarMaxAggregateInputType
  }

  export type YuklenenExcelDosyalarGroupByOutputType = {
    dosya_id: number
    dosya_adi: string
    dosya_yolu: string
    yukleme_tarihi: Date
    aciklama: string | null
    _count: YuklenenExcelDosyalarCountAggregateOutputType | null
    _avg: YuklenenExcelDosyalarAvgAggregateOutputType | null
    _sum: YuklenenExcelDosyalarSumAggregateOutputType | null
    _min: YuklenenExcelDosyalarMinAggregateOutputType | null
    _max: YuklenenExcelDosyalarMaxAggregateOutputType | null
  }

  type GetYuklenenExcelDosyalarGroupByPayload<T extends YuklenenExcelDosyalarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YuklenenExcelDosyalarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YuklenenExcelDosyalarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YuklenenExcelDosyalarGroupByOutputType[P]>
            : GetScalarType<T[P], YuklenenExcelDosyalarGroupByOutputType[P]>
        }
      >
    >


  export type YuklenenExcelDosyalarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dosya_id?: boolean
    dosya_adi?: boolean
    dosya_yolu?: boolean
    yukleme_tarihi?: boolean
    aciklama?: boolean
  }, ExtArgs["result"]["yuklenenExcelDosyalar"]>

  export type YuklenenExcelDosyalarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dosya_id?: boolean
    dosya_adi?: boolean
    dosya_yolu?: boolean
    yukleme_tarihi?: boolean
    aciklama?: boolean
  }, ExtArgs["result"]["yuklenenExcelDosyalar"]>

  export type YuklenenExcelDosyalarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dosya_id?: boolean
    dosya_adi?: boolean
    dosya_yolu?: boolean
    yukleme_tarihi?: boolean
    aciklama?: boolean
  }, ExtArgs["result"]["yuklenenExcelDosyalar"]>

  export type YuklenenExcelDosyalarSelectScalar = {
    dosya_id?: boolean
    dosya_adi?: boolean
    dosya_yolu?: boolean
    yukleme_tarihi?: boolean
    aciklama?: boolean
  }

  export type YuklenenExcelDosyalarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dosya_id" | "dosya_adi" | "dosya_yolu" | "yukleme_tarihi" | "aciklama", ExtArgs["result"]["yuklenenExcelDosyalar"]>

  export type $YuklenenExcelDosyalarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YuklenenExcelDosyalar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      dosya_id: number
      dosya_adi: string
      dosya_yolu: string
      yukleme_tarihi: Date
      aciklama: string | null
    }, ExtArgs["result"]["yuklenenExcelDosyalar"]>
    composites: {}
  }

  type YuklenenExcelDosyalarGetPayload<S extends boolean | null | undefined | YuklenenExcelDosyalarDefaultArgs> = $Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload, S>

  type YuklenenExcelDosyalarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YuklenenExcelDosyalarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YuklenenExcelDosyalarCountAggregateInputType | true
    }

  export interface YuklenenExcelDosyalarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YuklenenExcelDosyalar'], meta: { name: 'YuklenenExcelDosyalar' } }
    /**
     * Find zero or one YuklenenExcelDosyalar that matches the filter.
     * @param {YuklenenExcelDosyalarFindUniqueArgs} args - Arguments to find a YuklenenExcelDosyalar
     * @example
     * // Get one YuklenenExcelDosyalar
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YuklenenExcelDosyalarFindUniqueArgs>(args: SelectSubset<T, YuklenenExcelDosyalarFindUniqueArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one YuklenenExcelDosyalar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YuklenenExcelDosyalarFindUniqueOrThrowArgs} args - Arguments to find a YuklenenExcelDosyalar
     * @example
     * // Get one YuklenenExcelDosyalar
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YuklenenExcelDosyalarFindUniqueOrThrowArgs>(args: SelectSubset<T, YuklenenExcelDosyalarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YuklenenExcelDosyalar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarFindFirstArgs} args - Arguments to find a YuklenenExcelDosyalar
     * @example
     * // Get one YuklenenExcelDosyalar
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YuklenenExcelDosyalarFindFirstArgs>(args?: SelectSubset<T, YuklenenExcelDosyalarFindFirstArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YuklenenExcelDosyalar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarFindFirstOrThrowArgs} args - Arguments to find a YuklenenExcelDosyalar
     * @example
     * // Get one YuklenenExcelDosyalar
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YuklenenExcelDosyalarFindFirstOrThrowArgs>(args?: SelectSubset<T, YuklenenExcelDosyalarFindFirstOrThrowArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more YuklenenExcelDosyalars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YuklenenExcelDosyalars
     * const yuklenenExcelDosyalars = await prisma.yuklenenExcelDosyalar.findMany()
     * 
     * // Get first 10 YuklenenExcelDosyalars
     * const yuklenenExcelDosyalars = await prisma.yuklenenExcelDosyalar.findMany({ take: 10 })
     * 
     * // Only select the `dosya_id`
     * const yuklenenExcelDosyalarWithDosya_idOnly = await prisma.yuklenenExcelDosyalar.findMany({ select: { dosya_id: true } })
     * 
     */
    findMany<T extends YuklenenExcelDosyalarFindManyArgs>(args?: SelectSubset<T, YuklenenExcelDosyalarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a YuklenenExcelDosyalar.
     * @param {YuklenenExcelDosyalarCreateArgs} args - Arguments to create a YuklenenExcelDosyalar.
     * @example
     * // Create one YuklenenExcelDosyalar
     * const YuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.create({
     *   data: {
     *     // ... data to create a YuklenenExcelDosyalar
     *   }
     * })
     * 
     */
    create<T extends YuklenenExcelDosyalarCreateArgs>(args: SelectSubset<T, YuklenenExcelDosyalarCreateArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many YuklenenExcelDosyalars.
     * @param {YuklenenExcelDosyalarCreateManyArgs} args - Arguments to create many YuklenenExcelDosyalars.
     * @example
     * // Create many YuklenenExcelDosyalars
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YuklenenExcelDosyalarCreateManyArgs>(args?: SelectSubset<T, YuklenenExcelDosyalarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YuklenenExcelDosyalars and returns the data saved in the database.
     * @param {YuklenenExcelDosyalarCreateManyAndReturnArgs} args - Arguments to create many YuklenenExcelDosyalars.
     * @example
     * // Create many YuklenenExcelDosyalars
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YuklenenExcelDosyalars and only return the `dosya_id`
     * const yuklenenExcelDosyalarWithDosya_idOnly = await prisma.yuklenenExcelDosyalar.createManyAndReturn({
     *   select: { dosya_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YuklenenExcelDosyalarCreateManyAndReturnArgs>(args?: SelectSubset<T, YuklenenExcelDosyalarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a YuklenenExcelDosyalar.
     * @param {YuklenenExcelDosyalarDeleteArgs} args - Arguments to delete one YuklenenExcelDosyalar.
     * @example
     * // Delete one YuklenenExcelDosyalar
     * const YuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.delete({
     *   where: {
     *     // ... filter to delete one YuklenenExcelDosyalar
     *   }
     * })
     * 
     */
    delete<T extends YuklenenExcelDosyalarDeleteArgs>(args: SelectSubset<T, YuklenenExcelDosyalarDeleteArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one YuklenenExcelDosyalar.
     * @param {YuklenenExcelDosyalarUpdateArgs} args - Arguments to update one YuklenenExcelDosyalar.
     * @example
     * // Update one YuklenenExcelDosyalar
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YuklenenExcelDosyalarUpdateArgs>(args: SelectSubset<T, YuklenenExcelDosyalarUpdateArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more YuklenenExcelDosyalars.
     * @param {YuklenenExcelDosyalarDeleteManyArgs} args - Arguments to filter YuklenenExcelDosyalars to delete.
     * @example
     * // Delete a few YuklenenExcelDosyalars
     * const { count } = await prisma.yuklenenExcelDosyalar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YuklenenExcelDosyalarDeleteManyArgs>(args?: SelectSubset<T, YuklenenExcelDosyalarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YuklenenExcelDosyalars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YuklenenExcelDosyalars
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YuklenenExcelDosyalarUpdateManyArgs>(args: SelectSubset<T, YuklenenExcelDosyalarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YuklenenExcelDosyalars and returns the data updated in the database.
     * @param {YuklenenExcelDosyalarUpdateManyAndReturnArgs} args - Arguments to update many YuklenenExcelDosyalars.
     * @example
     * // Update many YuklenenExcelDosyalars
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YuklenenExcelDosyalars and only return the `dosya_id`
     * const yuklenenExcelDosyalarWithDosya_idOnly = await prisma.yuklenenExcelDosyalar.updateManyAndReturn({
     *   select: { dosya_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YuklenenExcelDosyalarUpdateManyAndReturnArgs>(args: SelectSubset<T, YuklenenExcelDosyalarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one YuklenenExcelDosyalar.
     * @param {YuklenenExcelDosyalarUpsertArgs} args - Arguments to update or create a YuklenenExcelDosyalar.
     * @example
     * // Update or create a YuklenenExcelDosyalar
     * const yuklenenExcelDosyalar = await prisma.yuklenenExcelDosyalar.upsert({
     *   create: {
     *     // ... data to create a YuklenenExcelDosyalar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YuklenenExcelDosyalar we want to update
     *   }
     * })
     */
    upsert<T extends YuklenenExcelDosyalarUpsertArgs>(args: SelectSubset<T, YuklenenExcelDosyalarUpsertArgs<ExtArgs>>): Prisma__YuklenenExcelDosyalarClient<$Result.GetResult<Prisma.$YuklenenExcelDosyalarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of YuklenenExcelDosyalars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarCountArgs} args - Arguments to filter YuklenenExcelDosyalars to count.
     * @example
     * // Count the number of YuklenenExcelDosyalars
     * const count = await prisma.yuklenenExcelDosyalar.count({
     *   where: {
     *     // ... the filter for the YuklenenExcelDosyalars we want to count
     *   }
     * })
    **/
    count<T extends YuklenenExcelDosyalarCountArgs>(
      args?: Subset<T, YuklenenExcelDosyalarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YuklenenExcelDosyalarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YuklenenExcelDosyalar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YuklenenExcelDosyalarAggregateArgs>(args: Subset<T, YuklenenExcelDosyalarAggregateArgs>): Prisma.PrismaPromise<GetYuklenenExcelDosyalarAggregateType<T>>

    /**
     * Group by YuklenenExcelDosyalar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YuklenenExcelDosyalarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YuklenenExcelDosyalarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YuklenenExcelDosyalarGroupByArgs['orderBy'] }
        : { orderBy?: YuklenenExcelDosyalarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YuklenenExcelDosyalarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYuklenenExcelDosyalarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YuklenenExcelDosyalar model
   */
  readonly fields: YuklenenExcelDosyalarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YuklenenExcelDosyalar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YuklenenExcelDosyalarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the YuklenenExcelDosyalar model
   */
  interface YuklenenExcelDosyalarFieldRefs {
    readonly dosya_id: FieldRef<"YuklenenExcelDosyalar", 'Int'>
    readonly dosya_adi: FieldRef<"YuklenenExcelDosyalar", 'String'>
    readonly dosya_yolu: FieldRef<"YuklenenExcelDosyalar", 'String'>
    readonly yukleme_tarihi: FieldRef<"YuklenenExcelDosyalar", 'DateTime'>
    readonly aciklama: FieldRef<"YuklenenExcelDosyalar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * YuklenenExcelDosyalar findUnique
   */
  export type YuklenenExcelDosyalarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * Filter, which YuklenenExcelDosyalar to fetch.
     */
    where: YuklenenExcelDosyalarWhereUniqueInput
  }

  /**
   * YuklenenExcelDosyalar findUniqueOrThrow
   */
  export type YuklenenExcelDosyalarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * Filter, which YuklenenExcelDosyalar to fetch.
     */
    where: YuklenenExcelDosyalarWhereUniqueInput
  }

  /**
   * YuklenenExcelDosyalar findFirst
   */
  export type YuklenenExcelDosyalarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * Filter, which YuklenenExcelDosyalar to fetch.
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YuklenenExcelDosyalars to fetch.
     */
    orderBy?: YuklenenExcelDosyalarOrderByWithRelationInput | YuklenenExcelDosyalarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YuklenenExcelDosyalars.
     */
    cursor?: YuklenenExcelDosyalarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YuklenenExcelDosyalars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YuklenenExcelDosyalars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YuklenenExcelDosyalars.
     */
    distinct?: YuklenenExcelDosyalarScalarFieldEnum | YuklenenExcelDosyalarScalarFieldEnum[]
  }

  /**
   * YuklenenExcelDosyalar findFirstOrThrow
   */
  export type YuklenenExcelDosyalarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * Filter, which YuklenenExcelDosyalar to fetch.
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YuklenenExcelDosyalars to fetch.
     */
    orderBy?: YuklenenExcelDosyalarOrderByWithRelationInput | YuklenenExcelDosyalarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YuklenenExcelDosyalars.
     */
    cursor?: YuklenenExcelDosyalarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YuklenenExcelDosyalars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YuklenenExcelDosyalars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YuklenenExcelDosyalars.
     */
    distinct?: YuklenenExcelDosyalarScalarFieldEnum | YuklenenExcelDosyalarScalarFieldEnum[]
  }

  /**
   * YuklenenExcelDosyalar findMany
   */
  export type YuklenenExcelDosyalarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * Filter, which YuklenenExcelDosyalars to fetch.
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YuklenenExcelDosyalars to fetch.
     */
    orderBy?: YuklenenExcelDosyalarOrderByWithRelationInput | YuklenenExcelDosyalarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YuklenenExcelDosyalars.
     */
    cursor?: YuklenenExcelDosyalarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YuklenenExcelDosyalars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YuklenenExcelDosyalars.
     */
    skip?: number
    distinct?: YuklenenExcelDosyalarScalarFieldEnum | YuklenenExcelDosyalarScalarFieldEnum[]
  }

  /**
   * YuklenenExcelDosyalar create
   */
  export type YuklenenExcelDosyalarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * The data needed to create a YuklenenExcelDosyalar.
     */
    data: XOR<YuklenenExcelDosyalarCreateInput, YuklenenExcelDosyalarUncheckedCreateInput>
  }

  /**
   * YuklenenExcelDosyalar createMany
   */
  export type YuklenenExcelDosyalarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YuklenenExcelDosyalars.
     */
    data: YuklenenExcelDosyalarCreateManyInput | YuklenenExcelDosyalarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YuklenenExcelDosyalar createManyAndReturn
   */
  export type YuklenenExcelDosyalarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * The data used to create many YuklenenExcelDosyalars.
     */
    data: YuklenenExcelDosyalarCreateManyInput | YuklenenExcelDosyalarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YuklenenExcelDosyalar update
   */
  export type YuklenenExcelDosyalarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * The data needed to update a YuklenenExcelDosyalar.
     */
    data: XOR<YuklenenExcelDosyalarUpdateInput, YuklenenExcelDosyalarUncheckedUpdateInput>
    /**
     * Choose, which YuklenenExcelDosyalar to update.
     */
    where: YuklenenExcelDosyalarWhereUniqueInput
  }

  /**
   * YuklenenExcelDosyalar updateMany
   */
  export type YuklenenExcelDosyalarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YuklenenExcelDosyalars.
     */
    data: XOR<YuklenenExcelDosyalarUpdateManyMutationInput, YuklenenExcelDosyalarUncheckedUpdateManyInput>
    /**
     * Filter which YuklenenExcelDosyalars to update
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * Limit how many YuklenenExcelDosyalars to update.
     */
    limit?: number
  }

  /**
   * YuklenenExcelDosyalar updateManyAndReturn
   */
  export type YuklenenExcelDosyalarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * The data used to update YuklenenExcelDosyalars.
     */
    data: XOR<YuklenenExcelDosyalarUpdateManyMutationInput, YuklenenExcelDosyalarUncheckedUpdateManyInput>
    /**
     * Filter which YuklenenExcelDosyalars to update
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * Limit how many YuklenenExcelDosyalars to update.
     */
    limit?: number
  }

  /**
   * YuklenenExcelDosyalar upsert
   */
  export type YuklenenExcelDosyalarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * The filter to search for the YuklenenExcelDosyalar to update in case it exists.
     */
    where: YuklenenExcelDosyalarWhereUniqueInput
    /**
     * In case the YuklenenExcelDosyalar found by the `where` argument doesn't exist, create a new YuklenenExcelDosyalar with this data.
     */
    create: XOR<YuklenenExcelDosyalarCreateInput, YuklenenExcelDosyalarUncheckedCreateInput>
    /**
     * In case the YuklenenExcelDosyalar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YuklenenExcelDosyalarUpdateInput, YuklenenExcelDosyalarUncheckedUpdateInput>
  }

  /**
   * YuklenenExcelDosyalar delete
   */
  export type YuklenenExcelDosyalarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
    /**
     * Filter which YuklenenExcelDosyalar to delete.
     */
    where: YuklenenExcelDosyalarWhereUniqueInput
  }

  /**
   * YuklenenExcelDosyalar deleteMany
   */
  export type YuklenenExcelDosyalarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YuklenenExcelDosyalars to delete
     */
    where?: YuklenenExcelDosyalarWhereInput
    /**
     * Limit how many YuklenenExcelDosyalars to delete.
     */
    limit?: number
  }

  /**
   * YuklenenExcelDosyalar without action
   */
  export type YuklenenExcelDosyalarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YuklenenExcelDosyalar
     */
    select?: YuklenenExcelDosyalarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YuklenenExcelDosyalar
     */
    omit?: YuklenenExcelDosyalarOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SirketlerScalarFieldEnum: {
    sirket_id: 'sirket_id',
    sirket_adi: 'sirket_adi',
    vergi_numarasi: 'vergi_numarasi'
  };

  export type SirketlerScalarFieldEnum = (typeof SirketlerScalarFieldEnum)[keyof typeof SirketlerScalarFieldEnum]


  export const AraclarScalarFieldEnum: {
    arac_id: 'arac_id',
    plaka: 'plaka',
    sofor_adi: 'sofor_adi',
    vergi_numarasi: 'vergi_numarasi',
    sirket_id: 'sirket_id'
  };

  export type AraclarScalarFieldEnum = (typeof AraclarScalarFieldEnum)[keyof typeof AraclarScalarFieldEnum]


  export const SeferlerScalarFieldEnum: {
    sefer_id: 'sefer_id',
    sira_no: 'sira_no',
    irsaliye_numarasi: 'irsaliye_numarasi',
    irsaliye_tarihi: 'irsaliye_tarihi',
    kalkis_saati: 'kalkis_saati',
    varis_saati: 'varis_saati',
    cikis_yeri: 'cikis_yeri',
    tahliye_edilen_firma: 'tahliye_edilen_firma',
    tahliye_yeri: 'tahliye_yeri',
    tonaj_kg: 'tonaj_kg',
    arac_tipi: 'arac_tipi',
    mt: 'mt',
    aciklama: 'aciklama',
    sirketten_alinan_ucret: 'sirketten_alinan_ucret',
    sofore_odenen_ucret: 'sofore_odenen_ucret',
    sirket_id: 'sirket_id',
    arac_id: 'arac_id',
    ay: 'ay',
    donem: 'donem'
  };

  export type SeferlerScalarFieldEnum = (typeof SeferlerScalarFieldEnum)[keyof typeof SeferlerScalarFieldEnum]


  export const SirketFiyatListesiScalarFieldEnum: {
    fiyat_listesi_id: 'fiyat_listesi_id',
    sirket_id: 'sirket_id',
    tahliye_yeri: 'tahliye_yeri',
    arac_tipi: 'arac_tipi',
    ucret: 'ucret'
  };

  export type SirketFiyatListesiScalarFieldEnum = (typeof SirketFiyatListesiScalarFieldEnum)[keyof typeof SirketFiyatListesiScalarFieldEnum]


  export const SirketCeklerScalarFieldEnum: {
    cek_id: 'cek_id',
    sirket_id: 'sirket_id',
    cek_tutari: 'cek_tutari',
    cek_alinma_tarihi: 'cek_alinma_tarihi',
    cek_odeme_tarihi: 'cek_odeme_tarihi',
    durum: 'durum',
    aciklama: 'aciklama',
    kayit_tarihi: 'kayit_tarihi'
  };

  export type SirketCeklerScalarFieldEnum = (typeof SirketCeklerScalarFieldEnum)[keyof typeof SirketCeklerScalarFieldEnum]


  export const AracOdemeKayitlariScalarFieldEnum: {
    odeme_id: 'odeme_id',
    arac_id: 'arac_id',
    odeme_tutari: 'odeme_tutari',
    odeme_tarihi: 'odeme_tarihi',
    aciklama: 'aciklama',
    kayit_tarihi: 'kayit_tarihi'
  };

  export type AracOdemeKayitlariScalarFieldEnum = (typeof AracOdemeKayitlariScalarFieldEnum)[keyof typeof AracOdemeKayitlariScalarFieldEnum]


  export const YuklenenExcelDosyalarScalarFieldEnum: {
    dosya_id: 'dosya_id',
    dosya_adi: 'dosya_adi',
    dosya_yolu: 'dosya_yolu',
    yukleme_tarihi: 'yukleme_tarihi',
    aciklama: 'aciklama'
  };

  export type YuklenenExcelDosyalarScalarFieldEnum = (typeof YuklenenExcelDosyalarScalarFieldEnum)[keyof typeof YuklenenExcelDosyalarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SirketlerWhereInput = {
    AND?: SirketlerWhereInput | SirketlerWhereInput[]
    OR?: SirketlerWhereInput[]
    NOT?: SirketlerWhereInput | SirketlerWhereInput[]
    sirket_id?: IntFilter<"Sirketler"> | number
    sirket_adi?: StringFilter<"Sirketler"> | string
    vergi_numarasi?: StringFilter<"Sirketler"> | string
    araclar?: AraclarListRelationFilter
    seferler?: SeferlerListRelationFilter
    fiyat_listesi?: SirketFiyatListesiListRelationFilter
    cekler?: SirketCeklerListRelationFilter
  }

  export type SirketlerOrderByWithRelationInput = {
    sirket_id?: SortOrder
    sirket_adi?: SortOrder
    vergi_numarasi?: SortOrder
    araclar?: AraclarOrderByRelationAggregateInput
    seferler?: SeferlerOrderByRelationAggregateInput
    fiyat_listesi?: SirketFiyatListesiOrderByRelationAggregateInput
    cekler?: SirketCeklerOrderByRelationAggregateInput
  }

  export type SirketlerWhereUniqueInput = Prisma.AtLeast<{
    sirket_id?: number
    AND?: SirketlerWhereInput | SirketlerWhereInput[]
    OR?: SirketlerWhereInput[]
    NOT?: SirketlerWhereInput | SirketlerWhereInput[]
    sirket_adi?: StringFilter<"Sirketler"> | string
    vergi_numarasi?: StringFilter<"Sirketler"> | string
    araclar?: AraclarListRelationFilter
    seferler?: SeferlerListRelationFilter
    fiyat_listesi?: SirketFiyatListesiListRelationFilter
    cekler?: SirketCeklerListRelationFilter
  }, "sirket_id">

  export type SirketlerOrderByWithAggregationInput = {
    sirket_id?: SortOrder
    sirket_adi?: SortOrder
    vergi_numarasi?: SortOrder
    _count?: SirketlerCountOrderByAggregateInput
    _avg?: SirketlerAvgOrderByAggregateInput
    _max?: SirketlerMaxOrderByAggregateInput
    _min?: SirketlerMinOrderByAggregateInput
    _sum?: SirketlerSumOrderByAggregateInput
  }

  export type SirketlerScalarWhereWithAggregatesInput = {
    AND?: SirketlerScalarWhereWithAggregatesInput | SirketlerScalarWhereWithAggregatesInput[]
    OR?: SirketlerScalarWhereWithAggregatesInput[]
    NOT?: SirketlerScalarWhereWithAggregatesInput | SirketlerScalarWhereWithAggregatesInput[]
    sirket_id?: IntWithAggregatesFilter<"Sirketler"> | number
    sirket_adi?: StringWithAggregatesFilter<"Sirketler"> | string
    vergi_numarasi?: StringWithAggregatesFilter<"Sirketler"> | string
  }

  export type AraclarWhereInput = {
    AND?: AraclarWhereInput | AraclarWhereInput[]
    OR?: AraclarWhereInput[]
    NOT?: AraclarWhereInput | AraclarWhereInput[]
    arac_id?: IntFilter<"Araclar"> | number
    plaka?: StringFilter<"Araclar"> | string
    sofor_adi?: StringFilter<"Araclar"> | string
    vergi_numarasi?: StringFilter<"Araclar"> | string
    sirket_id?: IntFilter<"Araclar"> | number
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
    seferler?: SeferlerListRelationFilter
    odemeler?: AracOdemeKayitlariListRelationFilter
  }

  export type AraclarOrderByWithRelationInput = {
    arac_id?: SortOrder
    plaka?: SortOrder
    sofor_adi?: SortOrder
    vergi_numarasi?: SortOrder
    sirket_id?: SortOrder
    sirket?: SirketlerOrderByWithRelationInput
    seferler?: SeferlerOrderByRelationAggregateInput
    odemeler?: AracOdemeKayitlariOrderByRelationAggregateInput
  }

  export type AraclarWhereUniqueInput = Prisma.AtLeast<{
    arac_id?: number
    AND?: AraclarWhereInput | AraclarWhereInput[]
    OR?: AraclarWhereInput[]
    NOT?: AraclarWhereInput | AraclarWhereInput[]
    plaka?: StringFilter<"Araclar"> | string
    sofor_adi?: StringFilter<"Araclar"> | string
    vergi_numarasi?: StringFilter<"Araclar"> | string
    sirket_id?: IntFilter<"Araclar"> | number
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
    seferler?: SeferlerListRelationFilter
    odemeler?: AracOdemeKayitlariListRelationFilter
  }, "arac_id">

  export type AraclarOrderByWithAggregationInput = {
    arac_id?: SortOrder
    plaka?: SortOrder
    sofor_adi?: SortOrder
    vergi_numarasi?: SortOrder
    sirket_id?: SortOrder
    _count?: AraclarCountOrderByAggregateInput
    _avg?: AraclarAvgOrderByAggregateInput
    _max?: AraclarMaxOrderByAggregateInput
    _min?: AraclarMinOrderByAggregateInput
    _sum?: AraclarSumOrderByAggregateInput
  }

  export type AraclarScalarWhereWithAggregatesInput = {
    AND?: AraclarScalarWhereWithAggregatesInput | AraclarScalarWhereWithAggregatesInput[]
    OR?: AraclarScalarWhereWithAggregatesInput[]
    NOT?: AraclarScalarWhereWithAggregatesInput | AraclarScalarWhereWithAggregatesInput[]
    arac_id?: IntWithAggregatesFilter<"Araclar"> | number
    plaka?: StringWithAggregatesFilter<"Araclar"> | string
    sofor_adi?: StringWithAggregatesFilter<"Araclar"> | string
    vergi_numarasi?: StringWithAggregatesFilter<"Araclar"> | string
    sirket_id?: IntWithAggregatesFilter<"Araclar"> | number
  }

  export type SeferlerWhereInput = {
    AND?: SeferlerWhereInput | SeferlerWhereInput[]
    OR?: SeferlerWhereInput[]
    NOT?: SeferlerWhereInput | SeferlerWhereInput[]
    sefer_id?: IntFilter<"Seferler"> | number
    sira_no?: IntFilter<"Seferler"> | number
    irsaliye_numarasi?: StringNullableFilter<"Seferler"> | string | null
    irsaliye_tarihi?: DateTimeNullableFilter<"Seferler"> | Date | string | null
    kalkis_saati?: DateTimeFilter<"Seferler"> | Date | string
    varis_saati?: DateTimeFilter<"Seferler"> | Date | string
    cikis_yeri?: StringFilter<"Seferler"> | string
    tahliye_edilen_firma?: StringFilter<"Seferler"> | string
    tahliye_yeri?: StringFilter<"Seferler"> | string
    tonaj_kg?: FloatFilter<"Seferler"> | number
    arac_tipi?: StringFilter<"Seferler"> | string
    mt?: FloatNullableFilter<"Seferler"> | number | null
    aciklama?: StringNullableFilter<"Seferler"> | string | null
    sirketten_alinan_ucret?: FloatFilter<"Seferler"> | number
    sofore_odenen_ucret?: FloatFilter<"Seferler"> | number
    sirket_id?: IntFilter<"Seferler"> | number
    arac_id?: IntFilter<"Seferler"> | number
    ay?: IntNullableFilter<"Seferler"> | number | null
    donem?: IntNullableFilter<"Seferler"> | number | null
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
    arac?: XOR<AraclarScalarRelationFilter, AraclarWhereInput>
  }

  export type SeferlerOrderByWithRelationInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    irsaliye_numarasi?: SortOrderInput | SortOrder
    irsaliye_tarihi?: SortOrderInput | SortOrder
    kalkis_saati?: SortOrder
    varis_saati?: SortOrder
    cikis_yeri?: SortOrder
    tahliye_edilen_firma?: SortOrder
    tahliye_yeri?: SortOrder
    tonaj_kg?: SortOrder
    arac_tipi?: SortOrder
    mt?: SortOrderInput | SortOrder
    aciklama?: SortOrderInput | SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrderInput | SortOrder
    donem?: SortOrderInput | SortOrder
    sirket?: SirketlerOrderByWithRelationInput
    arac?: AraclarOrderByWithRelationInput
  }

  export type SeferlerWhereUniqueInput = Prisma.AtLeast<{
    sefer_id?: number
    AND?: SeferlerWhereInput | SeferlerWhereInput[]
    OR?: SeferlerWhereInput[]
    NOT?: SeferlerWhereInput | SeferlerWhereInput[]
    sira_no?: IntFilter<"Seferler"> | number
    irsaliye_numarasi?: StringNullableFilter<"Seferler"> | string | null
    irsaliye_tarihi?: DateTimeNullableFilter<"Seferler"> | Date | string | null
    kalkis_saati?: DateTimeFilter<"Seferler"> | Date | string
    varis_saati?: DateTimeFilter<"Seferler"> | Date | string
    cikis_yeri?: StringFilter<"Seferler"> | string
    tahliye_edilen_firma?: StringFilter<"Seferler"> | string
    tahliye_yeri?: StringFilter<"Seferler"> | string
    tonaj_kg?: FloatFilter<"Seferler"> | number
    arac_tipi?: StringFilter<"Seferler"> | string
    mt?: FloatNullableFilter<"Seferler"> | number | null
    aciklama?: StringNullableFilter<"Seferler"> | string | null
    sirketten_alinan_ucret?: FloatFilter<"Seferler"> | number
    sofore_odenen_ucret?: FloatFilter<"Seferler"> | number
    sirket_id?: IntFilter<"Seferler"> | number
    arac_id?: IntFilter<"Seferler"> | number
    ay?: IntNullableFilter<"Seferler"> | number | null
    donem?: IntNullableFilter<"Seferler"> | number | null
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
    arac?: XOR<AraclarScalarRelationFilter, AraclarWhereInput>
  }, "sefer_id">

  export type SeferlerOrderByWithAggregationInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    irsaliye_numarasi?: SortOrderInput | SortOrder
    irsaliye_tarihi?: SortOrderInput | SortOrder
    kalkis_saati?: SortOrder
    varis_saati?: SortOrder
    cikis_yeri?: SortOrder
    tahliye_edilen_firma?: SortOrder
    tahliye_yeri?: SortOrder
    tonaj_kg?: SortOrder
    arac_tipi?: SortOrder
    mt?: SortOrderInput | SortOrder
    aciklama?: SortOrderInput | SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrderInput | SortOrder
    donem?: SortOrderInput | SortOrder
    _count?: SeferlerCountOrderByAggregateInput
    _avg?: SeferlerAvgOrderByAggregateInput
    _max?: SeferlerMaxOrderByAggregateInput
    _min?: SeferlerMinOrderByAggregateInput
    _sum?: SeferlerSumOrderByAggregateInput
  }

  export type SeferlerScalarWhereWithAggregatesInput = {
    AND?: SeferlerScalarWhereWithAggregatesInput | SeferlerScalarWhereWithAggregatesInput[]
    OR?: SeferlerScalarWhereWithAggregatesInput[]
    NOT?: SeferlerScalarWhereWithAggregatesInput | SeferlerScalarWhereWithAggregatesInput[]
    sefer_id?: IntWithAggregatesFilter<"Seferler"> | number
    sira_no?: IntWithAggregatesFilter<"Seferler"> | number
    irsaliye_numarasi?: StringNullableWithAggregatesFilter<"Seferler"> | string | null
    irsaliye_tarihi?: DateTimeNullableWithAggregatesFilter<"Seferler"> | Date | string | null
    kalkis_saati?: DateTimeWithAggregatesFilter<"Seferler"> | Date | string
    varis_saati?: DateTimeWithAggregatesFilter<"Seferler"> | Date | string
    cikis_yeri?: StringWithAggregatesFilter<"Seferler"> | string
    tahliye_edilen_firma?: StringWithAggregatesFilter<"Seferler"> | string
    tahliye_yeri?: StringWithAggregatesFilter<"Seferler"> | string
    tonaj_kg?: FloatWithAggregatesFilter<"Seferler"> | number
    arac_tipi?: StringWithAggregatesFilter<"Seferler"> | string
    mt?: FloatNullableWithAggregatesFilter<"Seferler"> | number | null
    aciklama?: StringNullableWithAggregatesFilter<"Seferler"> | string | null
    sirketten_alinan_ucret?: FloatWithAggregatesFilter<"Seferler"> | number
    sofore_odenen_ucret?: FloatWithAggregatesFilter<"Seferler"> | number
    sirket_id?: IntWithAggregatesFilter<"Seferler"> | number
    arac_id?: IntWithAggregatesFilter<"Seferler"> | number
    ay?: IntNullableWithAggregatesFilter<"Seferler"> | number | null
    donem?: IntNullableWithAggregatesFilter<"Seferler"> | number | null
  }

  export type SirketFiyatListesiWhereInput = {
    AND?: SirketFiyatListesiWhereInput | SirketFiyatListesiWhereInput[]
    OR?: SirketFiyatListesiWhereInput[]
    NOT?: SirketFiyatListesiWhereInput | SirketFiyatListesiWhereInput[]
    fiyat_listesi_id?: IntFilter<"SirketFiyatListesi"> | number
    sirket_id?: IntFilter<"SirketFiyatListesi"> | number
    tahliye_yeri?: StringFilter<"SirketFiyatListesi"> | string
    arac_tipi?: StringFilter<"SirketFiyatListesi"> | string
    ucret?: FloatFilter<"SirketFiyatListesi"> | number
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
  }

  export type SirketFiyatListesiOrderByWithRelationInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    tahliye_yeri?: SortOrder
    arac_tipi?: SortOrder
    ucret?: SortOrder
    sirket?: SirketlerOrderByWithRelationInput
  }

  export type SirketFiyatListesiWhereUniqueInput = Prisma.AtLeast<{
    fiyat_listesi_id?: number
    AND?: SirketFiyatListesiWhereInput | SirketFiyatListesiWhereInput[]
    OR?: SirketFiyatListesiWhereInput[]
    NOT?: SirketFiyatListesiWhereInput | SirketFiyatListesiWhereInput[]
    sirket_id?: IntFilter<"SirketFiyatListesi"> | number
    tahliye_yeri?: StringFilter<"SirketFiyatListesi"> | string
    arac_tipi?: StringFilter<"SirketFiyatListesi"> | string
    ucret?: FloatFilter<"SirketFiyatListesi"> | number
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
  }, "fiyat_listesi_id">

  export type SirketFiyatListesiOrderByWithAggregationInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    tahliye_yeri?: SortOrder
    arac_tipi?: SortOrder
    ucret?: SortOrder
    _count?: SirketFiyatListesiCountOrderByAggregateInput
    _avg?: SirketFiyatListesiAvgOrderByAggregateInput
    _max?: SirketFiyatListesiMaxOrderByAggregateInput
    _min?: SirketFiyatListesiMinOrderByAggregateInput
    _sum?: SirketFiyatListesiSumOrderByAggregateInput
  }

  export type SirketFiyatListesiScalarWhereWithAggregatesInput = {
    AND?: SirketFiyatListesiScalarWhereWithAggregatesInput | SirketFiyatListesiScalarWhereWithAggregatesInput[]
    OR?: SirketFiyatListesiScalarWhereWithAggregatesInput[]
    NOT?: SirketFiyatListesiScalarWhereWithAggregatesInput | SirketFiyatListesiScalarWhereWithAggregatesInput[]
    fiyat_listesi_id?: IntWithAggregatesFilter<"SirketFiyatListesi"> | number
    sirket_id?: IntWithAggregatesFilter<"SirketFiyatListesi"> | number
    tahliye_yeri?: StringWithAggregatesFilter<"SirketFiyatListesi"> | string
    arac_tipi?: StringWithAggregatesFilter<"SirketFiyatListesi"> | string
    ucret?: FloatWithAggregatesFilter<"SirketFiyatListesi"> | number
  }

  export type SirketCeklerWhereInput = {
    AND?: SirketCeklerWhereInput | SirketCeklerWhereInput[]
    OR?: SirketCeklerWhereInput[]
    NOT?: SirketCeklerWhereInput | SirketCeklerWhereInput[]
    cek_id?: IntFilter<"SirketCekler"> | number
    sirket_id?: IntFilter<"SirketCekler"> | number
    cek_tutari?: FloatFilter<"SirketCekler"> | number
    cek_alinma_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    cek_odeme_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    durum?: StringFilter<"SirketCekler"> | string
    aciklama?: StringNullableFilter<"SirketCekler"> | string | null
    kayit_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
  }

  export type SirketCeklerOrderByWithRelationInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
    cek_alinma_tarihi?: SortOrder
    cek_odeme_tarihi?: SortOrder
    durum?: SortOrder
    aciklama?: SortOrderInput | SortOrder
    kayit_tarihi?: SortOrder
    sirket?: SirketlerOrderByWithRelationInput
  }

  export type SirketCeklerWhereUniqueInput = Prisma.AtLeast<{
    cek_id?: number
    AND?: SirketCeklerWhereInput | SirketCeklerWhereInput[]
    OR?: SirketCeklerWhereInput[]
    NOT?: SirketCeklerWhereInput | SirketCeklerWhereInput[]
    sirket_id?: IntFilter<"SirketCekler"> | number
    cek_tutari?: FloatFilter<"SirketCekler"> | number
    cek_alinma_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    cek_odeme_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    durum?: StringFilter<"SirketCekler"> | string
    aciklama?: StringNullableFilter<"SirketCekler"> | string | null
    kayit_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    sirket?: XOR<SirketlerScalarRelationFilter, SirketlerWhereInput>
  }, "cek_id">

  export type SirketCeklerOrderByWithAggregationInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
    cek_alinma_tarihi?: SortOrder
    cek_odeme_tarihi?: SortOrder
    durum?: SortOrder
    aciklama?: SortOrderInput | SortOrder
    kayit_tarihi?: SortOrder
    _count?: SirketCeklerCountOrderByAggregateInput
    _avg?: SirketCeklerAvgOrderByAggregateInput
    _max?: SirketCeklerMaxOrderByAggregateInput
    _min?: SirketCeklerMinOrderByAggregateInput
    _sum?: SirketCeklerSumOrderByAggregateInput
  }

  export type SirketCeklerScalarWhereWithAggregatesInput = {
    AND?: SirketCeklerScalarWhereWithAggregatesInput | SirketCeklerScalarWhereWithAggregatesInput[]
    OR?: SirketCeklerScalarWhereWithAggregatesInput[]
    NOT?: SirketCeklerScalarWhereWithAggregatesInput | SirketCeklerScalarWhereWithAggregatesInput[]
    cek_id?: IntWithAggregatesFilter<"SirketCekler"> | number
    sirket_id?: IntWithAggregatesFilter<"SirketCekler"> | number
    cek_tutari?: FloatWithAggregatesFilter<"SirketCekler"> | number
    cek_alinma_tarihi?: DateTimeWithAggregatesFilter<"SirketCekler"> | Date | string
    cek_odeme_tarihi?: DateTimeWithAggregatesFilter<"SirketCekler"> | Date | string
    durum?: StringWithAggregatesFilter<"SirketCekler"> | string
    aciklama?: StringNullableWithAggregatesFilter<"SirketCekler"> | string | null
    kayit_tarihi?: DateTimeWithAggregatesFilter<"SirketCekler"> | Date | string
  }

  export type AracOdemeKayitlariWhereInput = {
    AND?: AracOdemeKayitlariWhereInput | AracOdemeKayitlariWhereInput[]
    OR?: AracOdemeKayitlariWhereInput[]
    NOT?: AracOdemeKayitlariWhereInput | AracOdemeKayitlariWhereInput[]
    odeme_id?: IntFilter<"AracOdemeKayitlari"> | number
    arac_id?: IntFilter<"AracOdemeKayitlari"> | number
    odeme_tutari?: FloatFilter<"AracOdemeKayitlari"> | number
    odeme_tarihi?: DateTimeFilter<"AracOdemeKayitlari"> | Date | string
    aciklama?: StringNullableFilter<"AracOdemeKayitlari"> | string | null
    kayit_tarihi?: DateTimeFilter<"AracOdemeKayitlari"> | Date | string
    arac?: XOR<AraclarScalarRelationFilter, AraclarWhereInput>
  }

  export type AracOdemeKayitlariOrderByWithRelationInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
    odeme_tarihi?: SortOrder
    aciklama?: SortOrderInput | SortOrder
    kayit_tarihi?: SortOrder
    arac?: AraclarOrderByWithRelationInput
  }

  export type AracOdemeKayitlariWhereUniqueInput = Prisma.AtLeast<{
    odeme_id?: number
    AND?: AracOdemeKayitlariWhereInput | AracOdemeKayitlariWhereInput[]
    OR?: AracOdemeKayitlariWhereInput[]
    NOT?: AracOdemeKayitlariWhereInput | AracOdemeKayitlariWhereInput[]
    arac_id?: IntFilter<"AracOdemeKayitlari"> | number
    odeme_tutari?: FloatFilter<"AracOdemeKayitlari"> | number
    odeme_tarihi?: DateTimeFilter<"AracOdemeKayitlari"> | Date | string
    aciklama?: StringNullableFilter<"AracOdemeKayitlari"> | string | null
    kayit_tarihi?: DateTimeFilter<"AracOdemeKayitlari"> | Date | string
    arac?: XOR<AraclarScalarRelationFilter, AraclarWhereInput>
  }, "odeme_id">

  export type AracOdemeKayitlariOrderByWithAggregationInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
    odeme_tarihi?: SortOrder
    aciklama?: SortOrderInput | SortOrder
    kayit_tarihi?: SortOrder
    _count?: AracOdemeKayitlariCountOrderByAggregateInput
    _avg?: AracOdemeKayitlariAvgOrderByAggregateInput
    _max?: AracOdemeKayitlariMaxOrderByAggregateInput
    _min?: AracOdemeKayitlariMinOrderByAggregateInput
    _sum?: AracOdemeKayitlariSumOrderByAggregateInput
  }

  export type AracOdemeKayitlariScalarWhereWithAggregatesInput = {
    AND?: AracOdemeKayitlariScalarWhereWithAggregatesInput | AracOdemeKayitlariScalarWhereWithAggregatesInput[]
    OR?: AracOdemeKayitlariScalarWhereWithAggregatesInput[]
    NOT?: AracOdemeKayitlariScalarWhereWithAggregatesInput | AracOdemeKayitlariScalarWhereWithAggregatesInput[]
    odeme_id?: IntWithAggregatesFilter<"AracOdemeKayitlari"> | number
    arac_id?: IntWithAggregatesFilter<"AracOdemeKayitlari"> | number
    odeme_tutari?: FloatWithAggregatesFilter<"AracOdemeKayitlari"> | number
    odeme_tarihi?: DateTimeWithAggregatesFilter<"AracOdemeKayitlari"> | Date | string
    aciklama?: StringNullableWithAggregatesFilter<"AracOdemeKayitlari"> | string | null
    kayit_tarihi?: DateTimeWithAggregatesFilter<"AracOdemeKayitlari"> | Date | string
  }

  export type YuklenenExcelDosyalarWhereInput = {
    AND?: YuklenenExcelDosyalarWhereInput | YuklenenExcelDosyalarWhereInput[]
    OR?: YuklenenExcelDosyalarWhereInput[]
    NOT?: YuklenenExcelDosyalarWhereInput | YuklenenExcelDosyalarWhereInput[]
    dosya_id?: IntFilter<"YuklenenExcelDosyalar"> | number
    dosya_adi?: StringFilter<"YuklenenExcelDosyalar"> | string
    dosya_yolu?: StringFilter<"YuklenenExcelDosyalar"> | string
    yukleme_tarihi?: DateTimeFilter<"YuklenenExcelDosyalar"> | Date | string
    aciklama?: StringNullableFilter<"YuklenenExcelDosyalar"> | string | null
  }

  export type YuklenenExcelDosyalarOrderByWithRelationInput = {
    dosya_id?: SortOrder
    dosya_adi?: SortOrder
    dosya_yolu?: SortOrder
    yukleme_tarihi?: SortOrder
    aciklama?: SortOrderInput | SortOrder
  }

  export type YuklenenExcelDosyalarWhereUniqueInput = Prisma.AtLeast<{
    dosya_id?: number
    AND?: YuklenenExcelDosyalarWhereInput | YuklenenExcelDosyalarWhereInput[]
    OR?: YuklenenExcelDosyalarWhereInput[]
    NOT?: YuklenenExcelDosyalarWhereInput | YuklenenExcelDosyalarWhereInput[]
    dosya_adi?: StringFilter<"YuklenenExcelDosyalar"> | string
    dosya_yolu?: StringFilter<"YuklenenExcelDosyalar"> | string
    yukleme_tarihi?: DateTimeFilter<"YuklenenExcelDosyalar"> | Date | string
    aciklama?: StringNullableFilter<"YuklenenExcelDosyalar"> | string | null
  }, "dosya_id">

  export type YuklenenExcelDosyalarOrderByWithAggregationInput = {
    dosya_id?: SortOrder
    dosya_adi?: SortOrder
    dosya_yolu?: SortOrder
    yukleme_tarihi?: SortOrder
    aciklama?: SortOrderInput | SortOrder
    _count?: YuklenenExcelDosyalarCountOrderByAggregateInput
    _avg?: YuklenenExcelDosyalarAvgOrderByAggregateInput
    _max?: YuklenenExcelDosyalarMaxOrderByAggregateInput
    _min?: YuklenenExcelDosyalarMinOrderByAggregateInput
    _sum?: YuklenenExcelDosyalarSumOrderByAggregateInput
  }

  export type YuklenenExcelDosyalarScalarWhereWithAggregatesInput = {
    AND?: YuklenenExcelDosyalarScalarWhereWithAggregatesInput | YuklenenExcelDosyalarScalarWhereWithAggregatesInput[]
    OR?: YuklenenExcelDosyalarScalarWhereWithAggregatesInput[]
    NOT?: YuklenenExcelDosyalarScalarWhereWithAggregatesInput | YuklenenExcelDosyalarScalarWhereWithAggregatesInput[]
    dosya_id?: IntWithAggregatesFilter<"YuklenenExcelDosyalar"> | number
    dosya_adi?: StringWithAggregatesFilter<"YuklenenExcelDosyalar"> | string
    dosya_yolu?: StringWithAggregatesFilter<"YuklenenExcelDosyalar"> | string
    yukleme_tarihi?: DateTimeWithAggregatesFilter<"YuklenenExcelDosyalar"> | Date | string
    aciklama?: StringNullableWithAggregatesFilter<"YuklenenExcelDosyalar"> | string | null
  }

  export type SirketlerCreateInput = {
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarCreateNestedManyWithoutSirketInput
    seferler?: SeferlerCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerCreateNestedManyWithoutSirketInput
  }

  export type SirketlerUncheckedCreateInput = {
    sirket_id?: number
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarUncheckedCreateNestedManyWithoutSirketInput
    seferler?: SeferlerUncheckedCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiUncheckedCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerUncheckedCreateNestedManyWithoutSirketInput
  }

  export type SirketlerUpdateInput = {
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUpdateManyWithoutSirketNestedInput
    seferler?: SeferlerUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerUncheckedUpdateInput = {
    sirket_id?: IntFieldUpdateOperationsInput | number
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUncheckedUpdateManyWithoutSirketNestedInput
    seferler?: SeferlerUncheckedUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUncheckedUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUncheckedUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerCreateManyInput = {
    sirket_id?: number
    sirket_adi: string
    vergi_numarasi: string
  }

  export type SirketlerUpdateManyMutationInput = {
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
  }

  export type SirketlerUncheckedUpdateManyInput = {
    sirket_id?: IntFieldUpdateOperationsInput | number
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
  }

  export type AraclarCreateInput = {
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket: SirketlerCreateNestedOneWithoutAraclarInput
    seferler?: SeferlerCreateNestedManyWithoutAracInput
    odemeler?: AracOdemeKayitlariCreateNestedManyWithoutAracInput
  }

  export type AraclarUncheckedCreateInput = {
    arac_id?: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket_id: number
    seferler?: SeferlerUncheckedCreateNestedManyWithoutAracInput
    odemeler?: AracOdemeKayitlariUncheckedCreateNestedManyWithoutAracInput
  }

  export type AraclarUpdateInput = {
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket?: SirketlerUpdateOneRequiredWithoutAraclarNestedInput
    seferler?: SeferlerUpdateManyWithoutAracNestedInput
    odemeler?: AracOdemeKayitlariUpdateManyWithoutAracNestedInput
  }

  export type AraclarUncheckedUpdateInput = {
    arac_id?: IntFieldUpdateOperationsInput | number
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket_id?: IntFieldUpdateOperationsInput | number
    seferler?: SeferlerUncheckedUpdateManyWithoutAracNestedInput
    odemeler?: AracOdemeKayitlariUncheckedUpdateManyWithoutAracNestedInput
  }

  export type AraclarCreateManyInput = {
    arac_id?: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket_id: number
  }

  export type AraclarUpdateManyMutationInput = {
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
  }

  export type AraclarUncheckedUpdateManyInput = {
    arac_id?: IntFieldUpdateOperationsInput | number
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket_id?: IntFieldUpdateOperationsInput | number
  }

  export type SeferlerCreateInput = {
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    ay?: number | null
    donem?: number | null
    sirket: SirketlerCreateNestedOneWithoutSeferlerInput
    arac: AraclarCreateNestedOneWithoutSeferlerInput
  }

  export type SeferlerUncheckedCreateInput = {
    sefer_id?: number
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    sirket_id: number
    arac_id: number
    ay?: number | null
    donem?: number | null
  }

  export type SeferlerUpdateInput = {
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
    sirket?: SirketlerUpdateOneRequiredWithoutSeferlerNestedInput
    arac?: AraclarUpdateOneRequiredWithoutSeferlerNestedInput
  }

  export type SeferlerUncheckedUpdateInput = {
    sefer_id?: IntFieldUpdateOperationsInput | number
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    arac_id?: IntFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeferlerCreateManyInput = {
    sefer_id?: number
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    sirket_id: number
    arac_id: number
    ay?: number | null
    donem?: number | null
  }

  export type SeferlerUpdateManyMutationInput = {
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeferlerUncheckedUpdateManyInput = {
    sefer_id?: IntFieldUpdateOperationsInput | number
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    arac_id?: IntFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SirketFiyatListesiCreateInput = {
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
    sirket: SirketlerCreateNestedOneWithoutFiyat_listesiInput
  }

  export type SirketFiyatListesiUncheckedCreateInput = {
    fiyat_listesi_id?: number
    sirket_id: number
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
  }

  export type SirketFiyatListesiUpdateInput = {
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
    sirket?: SirketlerUpdateOneRequiredWithoutFiyat_listesiNestedInput
  }

  export type SirketFiyatListesiUncheckedUpdateInput = {
    fiyat_listesi_id?: IntFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
  }

  export type SirketFiyatListesiCreateManyInput = {
    fiyat_listesi_id?: number
    sirket_id: number
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
  }

  export type SirketFiyatListesiUpdateManyMutationInput = {
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
  }

  export type SirketFiyatListesiUncheckedUpdateManyInput = {
    fiyat_listesi_id?: IntFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
  }

  export type SirketCeklerCreateInput = {
    cek_tutari: number
    cek_alinma_tarihi: Date | string
    cek_odeme_tarihi: Date | string
    durum: string
    aciklama?: string | null
    kayit_tarihi?: Date | string
    sirket: SirketlerCreateNestedOneWithoutCeklerInput
  }

  export type SirketCeklerUncheckedCreateInput = {
    cek_id?: number
    sirket_id: number
    cek_tutari: number
    cek_alinma_tarihi: Date | string
    cek_odeme_tarihi: Date | string
    durum: string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type SirketCeklerUpdateInput = {
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    sirket?: SirketlerUpdateOneRequiredWithoutCeklerNestedInput
  }

  export type SirketCeklerUncheckedUpdateInput = {
    cek_id?: IntFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SirketCeklerCreateManyInput = {
    cek_id?: number
    sirket_id: number
    cek_tutari: number
    cek_alinma_tarihi: Date | string
    cek_odeme_tarihi: Date | string
    durum: string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type SirketCeklerUpdateManyMutationInput = {
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SirketCeklerUncheckedUpdateManyInput = {
    cek_id?: IntFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AracOdemeKayitlariCreateInput = {
    odeme_tutari: number
    odeme_tarihi: Date | string
    aciklama?: string | null
    kayit_tarihi?: Date | string
    arac: AraclarCreateNestedOneWithoutOdemelerInput
  }

  export type AracOdemeKayitlariUncheckedCreateInput = {
    odeme_id?: number
    arac_id: number
    odeme_tutari: number
    odeme_tarihi: Date | string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type AracOdemeKayitlariUpdateInput = {
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    arac?: AraclarUpdateOneRequiredWithoutOdemelerNestedInput
  }

  export type AracOdemeKayitlariUncheckedUpdateInput = {
    odeme_id?: IntFieldUpdateOperationsInput | number
    arac_id?: IntFieldUpdateOperationsInput | number
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AracOdemeKayitlariCreateManyInput = {
    odeme_id?: number
    arac_id: number
    odeme_tutari: number
    odeme_tarihi: Date | string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type AracOdemeKayitlariUpdateManyMutationInput = {
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AracOdemeKayitlariUncheckedUpdateManyInput = {
    odeme_id?: IntFieldUpdateOperationsInput | number
    arac_id?: IntFieldUpdateOperationsInput | number
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YuklenenExcelDosyalarCreateInput = {
    dosya_adi: string
    dosya_yolu: string
    yukleme_tarihi?: Date | string
    aciklama?: string | null
  }

  export type YuklenenExcelDosyalarUncheckedCreateInput = {
    dosya_id?: number
    dosya_adi: string
    dosya_yolu: string
    yukleme_tarihi?: Date | string
    aciklama?: string | null
  }

  export type YuklenenExcelDosyalarUpdateInput = {
    dosya_adi?: StringFieldUpdateOperationsInput | string
    dosya_yolu?: StringFieldUpdateOperationsInput | string
    yukleme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YuklenenExcelDosyalarUncheckedUpdateInput = {
    dosya_id?: IntFieldUpdateOperationsInput | number
    dosya_adi?: StringFieldUpdateOperationsInput | string
    dosya_yolu?: StringFieldUpdateOperationsInput | string
    yukleme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YuklenenExcelDosyalarCreateManyInput = {
    dosya_id?: number
    dosya_adi: string
    dosya_yolu: string
    yukleme_tarihi?: Date | string
    aciklama?: string | null
  }

  export type YuklenenExcelDosyalarUpdateManyMutationInput = {
    dosya_adi?: StringFieldUpdateOperationsInput | string
    dosya_yolu?: StringFieldUpdateOperationsInput | string
    yukleme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YuklenenExcelDosyalarUncheckedUpdateManyInput = {
    dosya_id?: IntFieldUpdateOperationsInput | number
    dosya_adi?: StringFieldUpdateOperationsInput | string
    dosya_yolu?: StringFieldUpdateOperationsInput | string
    yukleme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AraclarListRelationFilter = {
    every?: AraclarWhereInput
    some?: AraclarWhereInput
    none?: AraclarWhereInput
  }

  export type SeferlerListRelationFilter = {
    every?: SeferlerWhereInput
    some?: SeferlerWhereInput
    none?: SeferlerWhereInput
  }

  export type SirketFiyatListesiListRelationFilter = {
    every?: SirketFiyatListesiWhereInput
    some?: SirketFiyatListesiWhereInput
    none?: SirketFiyatListesiWhereInput
  }

  export type SirketCeklerListRelationFilter = {
    every?: SirketCeklerWhereInput
    some?: SirketCeklerWhereInput
    none?: SirketCeklerWhereInput
  }

  export type AraclarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeferlerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SirketFiyatListesiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SirketCeklerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SirketlerCountOrderByAggregateInput = {
    sirket_id?: SortOrder
    sirket_adi?: SortOrder
    vergi_numarasi?: SortOrder
  }

  export type SirketlerAvgOrderByAggregateInput = {
    sirket_id?: SortOrder
  }

  export type SirketlerMaxOrderByAggregateInput = {
    sirket_id?: SortOrder
    sirket_adi?: SortOrder
    vergi_numarasi?: SortOrder
  }

  export type SirketlerMinOrderByAggregateInput = {
    sirket_id?: SortOrder
    sirket_adi?: SortOrder
    vergi_numarasi?: SortOrder
  }

  export type SirketlerSumOrderByAggregateInput = {
    sirket_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SirketlerScalarRelationFilter = {
    is?: SirketlerWhereInput
    isNot?: SirketlerWhereInput
  }

  export type AracOdemeKayitlariListRelationFilter = {
    every?: AracOdemeKayitlariWhereInput
    some?: AracOdemeKayitlariWhereInput
    none?: AracOdemeKayitlariWhereInput
  }

  export type AracOdemeKayitlariOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AraclarCountOrderByAggregateInput = {
    arac_id?: SortOrder
    plaka?: SortOrder
    sofor_adi?: SortOrder
    vergi_numarasi?: SortOrder
    sirket_id?: SortOrder
  }

  export type AraclarAvgOrderByAggregateInput = {
    arac_id?: SortOrder
    sirket_id?: SortOrder
  }

  export type AraclarMaxOrderByAggregateInput = {
    arac_id?: SortOrder
    plaka?: SortOrder
    sofor_adi?: SortOrder
    vergi_numarasi?: SortOrder
    sirket_id?: SortOrder
  }

  export type AraclarMinOrderByAggregateInput = {
    arac_id?: SortOrder
    plaka?: SortOrder
    sofor_adi?: SortOrder
    vergi_numarasi?: SortOrder
    sirket_id?: SortOrder
  }

  export type AraclarSumOrderByAggregateInput = {
    arac_id?: SortOrder
    sirket_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AraclarScalarRelationFilter = {
    is?: AraclarWhereInput
    isNot?: AraclarWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SeferlerCountOrderByAggregateInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    irsaliye_numarasi?: SortOrder
    irsaliye_tarihi?: SortOrder
    kalkis_saati?: SortOrder
    varis_saati?: SortOrder
    cikis_yeri?: SortOrder
    tahliye_edilen_firma?: SortOrder
    tahliye_yeri?: SortOrder
    tonaj_kg?: SortOrder
    arac_tipi?: SortOrder
    mt?: SortOrder
    aciklama?: SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrder
    donem?: SortOrder
  }

  export type SeferlerAvgOrderByAggregateInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    tonaj_kg?: SortOrder
    mt?: SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrder
    donem?: SortOrder
  }

  export type SeferlerMaxOrderByAggregateInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    irsaliye_numarasi?: SortOrder
    irsaliye_tarihi?: SortOrder
    kalkis_saati?: SortOrder
    varis_saati?: SortOrder
    cikis_yeri?: SortOrder
    tahliye_edilen_firma?: SortOrder
    tahliye_yeri?: SortOrder
    tonaj_kg?: SortOrder
    arac_tipi?: SortOrder
    mt?: SortOrder
    aciklama?: SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrder
    donem?: SortOrder
  }

  export type SeferlerMinOrderByAggregateInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    irsaliye_numarasi?: SortOrder
    irsaliye_tarihi?: SortOrder
    kalkis_saati?: SortOrder
    varis_saati?: SortOrder
    cikis_yeri?: SortOrder
    tahliye_edilen_firma?: SortOrder
    tahliye_yeri?: SortOrder
    tonaj_kg?: SortOrder
    arac_tipi?: SortOrder
    mt?: SortOrder
    aciklama?: SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrder
    donem?: SortOrder
  }

  export type SeferlerSumOrderByAggregateInput = {
    sefer_id?: SortOrder
    sira_no?: SortOrder
    tonaj_kg?: SortOrder
    mt?: SortOrder
    sirketten_alinan_ucret?: SortOrder
    sofore_odenen_ucret?: SortOrder
    sirket_id?: SortOrder
    arac_id?: SortOrder
    ay?: SortOrder
    donem?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SirketFiyatListesiCountOrderByAggregateInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    tahliye_yeri?: SortOrder
    arac_tipi?: SortOrder
    ucret?: SortOrder
  }

  export type SirketFiyatListesiAvgOrderByAggregateInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    ucret?: SortOrder
  }

  export type SirketFiyatListesiMaxOrderByAggregateInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    tahliye_yeri?: SortOrder
    arac_tipi?: SortOrder
    ucret?: SortOrder
  }

  export type SirketFiyatListesiMinOrderByAggregateInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    tahliye_yeri?: SortOrder
    arac_tipi?: SortOrder
    ucret?: SortOrder
  }

  export type SirketFiyatListesiSumOrderByAggregateInput = {
    fiyat_listesi_id?: SortOrder
    sirket_id?: SortOrder
    ucret?: SortOrder
  }

  export type SirketCeklerCountOrderByAggregateInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
    cek_alinma_tarihi?: SortOrder
    cek_odeme_tarihi?: SortOrder
    durum?: SortOrder
    aciklama?: SortOrder
    kayit_tarihi?: SortOrder
  }

  export type SirketCeklerAvgOrderByAggregateInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
  }

  export type SirketCeklerMaxOrderByAggregateInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
    cek_alinma_tarihi?: SortOrder
    cek_odeme_tarihi?: SortOrder
    durum?: SortOrder
    aciklama?: SortOrder
    kayit_tarihi?: SortOrder
  }

  export type SirketCeklerMinOrderByAggregateInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
    cek_alinma_tarihi?: SortOrder
    cek_odeme_tarihi?: SortOrder
    durum?: SortOrder
    aciklama?: SortOrder
    kayit_tarihi?: SortOrder
  }

  export type SirketCeklerSumOrderByAggregateInput = {
    cek_id?: SortOrder
    sirket_id?: SortOrder
    cek_tutari?: SortOrder
  }

  export type AracOdemeKayitlariCountOrderByAggregateInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
    odeme_tarihi?: SortOrder
    aciklama?: SortOrder
    kayit_tarihi?: SortOrder
  }

  export type AracOdemeKayitlariAvgOrderByAggregateInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
  }

  export type AracOdemeKayitlariMaxOrderByAggregateInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
    odeme_tarihi?: SortOrder
    aciklama?: SortOrder
    kayit_tarihi?: SortOrder
  }

  export type AracOdemeKayitlariMinOrderByAggregateInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
    odeme_tarihi?: SortOrder
    aciklama?: SortOrder
    kayit_tarihi?: SortOrder
  }

  export type AracOdemeKayitlariSumOrderByAggregateInput = {
    odeme_id?: SortOrder
    arac_id?: SortOrder
    odeme_tutari?: SortOrder
  }

  export type YuklenenExcelDosyalarCountOrderByAggregateInput = {
    dosya_id?: SortOrder
    dosya_adi?: SortOrder
    dosya_yolu?: SortOrder
    yukleme_tarihi?: SortOrder
    aciklama?: SortOrder
  }

  export type YuklenenExcelDosyalarAvgOrderByAggregateInput = {
    dosya_id?: SortOrder
  }

  export type YuklenenExcelDosyalarMaxOrderByAggregateInput = {
    dosya_id?: SortOrder
    dosya_adi?: SortOrder
    dosya_yolu?: SortOrder
    yukleme_tarihi?: SortOrder
    aciklama?: SortOrder
  }

  export type YuklenenExcelDosyalarMinOrderByAggregateInput = {
    dosya_id?: SortOrder
    dosya_adi?: SortOrder
    dosya_yolu?: SortOrder
    yukleme_tarihi?: SortOrder
    aciklama?: SortOrder
  }

  export type YuklenenExcelDosyalarSumOrderByAggregateInput = {
    dosya_id?: SortOrder
  }

  export type AraclarCreateNestedManyWithoutSirketInput = {
    create?: XOR<AraclarCreateWithoutSirketInput, AraclarUncheckedCreateWithoutSirketInput> | AraclarCreateWithoutSirketInput[] | AraclarUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: AraclarCreateOrConnectWithoutSirketInput | AraclarCreateOrConnectWithoutSirketInput[]
    createMany?: AraclarCreateManySirketInputEnvelope
    connect?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
  }

  export type SeferlerCreateNestedManyWithoutSirketInput = {
    create?: XOR<SeferlerCreateWithoutSirketInput, SeferlerUncheckedCreateWithoutSirketInput> | SeferlerCreateWithoutSirketInput[] | SeferlerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutSirketInput | SeferlerCreateOrConnectWithoutSirketInput[]
    createMany?: SeferlerCreateManySirketInputEnvelope
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
  }

  export type SirketFiyatListesiCreateNestedManyWithoutSirketInput = {
    create?: XOR<SirketFiyatListesiCreateWithoutSirketInput, SirketFiyatListesiUncheckedCreateWithoutSirketInput> | SirketFiyatListesiCreateWithoutSirketInput[] | SirketFiyatListesiUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketFiyatListesiCreateOrConnectWithoutSirketInput | SirketFiyatListesiCreateOrConnectWithoutSirketInput[]
    createMany?: SirketFiyatListesiCreateManySirketInputEnvelope
    connect?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
  }

  export type SirketCeklerCreateNestedManyWithoutSirketInput = {
    create?: XOR<SirketCeklerCreateWithoutSirketInput, SirketCeklerUncheckedCreateWithoutSirketInput> | SirketCeklerCreateWithoutSirketInput[] | SirketCeklerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketCeklerCreateOrConnectWithoutSirketInput | SirketCeklerCreateOrConnectWithoutSirketInput[]
    createMany?: SirketCeklerCreateManySirketInputEnvelope
    connect?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
  }

  export type AraclarUncheckedCreateNestedManyWithoutSirketInput = {
    create?: XOR<AraclarCreateWithoutSirketInput, AraclarUncheckedCreateWithoutSirketInput> | AraclarCreateWithoutSirketInput[] | AraclarUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: AraclarCreateOrConnectWithoutSirketInput | AraclarCreateOrConnectWithoutSirketInput[]
    createMany?: AraclarCreateManySirketInputEnvelope
    connect?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
  }

  export type SeferlerUncheckedCreateNestedManyWithoutSirketInput = {
    create?: XOR<SeferlerCreateWithoutSirketInput, SeferlerUncheckedCreateWithoutSirketInput> | SeferlerCreateWithoutSirketInput[] | SeferlerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutSirketInput | SeferlerCreateOrConnectWithoutSirketInput[]
    createMany?: SeferlerCreateManySirketInputEnvelope
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
  }

  export type SirketFiyatListesiUncheckedCreateNestedManyWithoutSirketInput = {
    create?: XOR<SirketFiyatListesiCreateWithoutSirketInput, SirketFiyatListesiUncheckedCreateWithoutSirketInput> | SirketFiyatListesiCreateWithoutSirketInput[] | SirketFiyatListesiUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketFiyatListesiCreateOrConnectWithoutSirketInput | SirketFiyatListesiCreateOrConnectWithoutSirketInput[]
    createMany?: SirketFiyatListesiCreateManySirketInputEnvelope
    connect?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
  }

  export type SirketCeklerUncheckedCreateNestedManyWithoutSirketInput = {
    create?: XOR<SirketCeklerCreateWithoutSirketInput, SirketCeklerUncheckedCreateWithoutSirketInput> | SirketCeklerCreateWithoutSirketInput[] | SirketCeklerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketCeklerCreateOrConnectWithoutSirketInput | SirketCeklerCreateOrConnectWithoutSirketInput[]
    createMany?: SirketCeklerCreateManySirketInputEnvelope
    connect?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AraclarUpdateManyWithoutSirketNestedInput = {
    create?: XOR<AraclarCreateWithoutSirketInput, AraclarUncheckedCreateWithoutSirketInput> | AraclarCreateWithoutSirketInput[] | AraclarUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: AraclarCreateOrConnectWithoutSirketInput | AraclarCreateOrConnectWithoutSirketInput[]
    upsert?: AraclarUpsertWithWhereUniqueWithoutSirketInput | AraclarUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: AraclarCreateManySirketInputEnvelope
    set?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    disconnect?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    delete?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    connect?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    update?: AraclarUpdateWithWhereUniqueWithoutSirketInput | AraclarUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: AraclarUpdateManyWithWhereWithoutSirketInput | AraclarUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: AraclarScalarWhereInput | AraclarScalarWhereInput[]
  }

  export type SeferlerUpdateManyWithoutSirketNestedInput = {
    create?: XOR<SeferlerCreateWithoutSirketInput, SeferlerUncheckedCreateWithoutSirketInput> | SeferlerCreateWithoutSirketInput[] | SeferlerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutSirketInput | SeferlerCreateOrConnectWithoutSirketInput[]
    upsert?: SeferlerUpsertWithWhereUniqueWithoutSirketInput | SeferlerUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: SeferlerCreateManySirketInputEnvelope
    set?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    disconnect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    delete?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    update?: SeferlerUpdateWithWhereUniqueWithoutSirketInput | SeferlerUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: SeferlerUpdateManyWithWhereWithoutSirketInput | SeferlerUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: SeferlerScalarWhereInput | SeferlerScalarWhereInput[]
  }

  export type SirketFiyatListesiUpdateManyWithoutSirketNestedInput = {
    create?: XOR<SirketFiyatListesiCreateWithoutSirketInput, SirketFiyatListesiUncheckedCreateWithoutSirketInput> | SirketFiyatListesiCreateWithoutSirketInput[] | SirketFiyatListesiUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketFiyatListesiCreateOrConnectWithoutSirketInput | SirketFiyatListesiCreateOrConnectWithoutSirketInput[]
    upsert?: SirketFiyatListesiUpsertWithWhereUniqueWithoutSirketInput | SirketFiyatListesiUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: SirketFiyatListesiCreateManySirketInputEnvelope
    set?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    disconnect?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    delete?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    connect?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    update?: SirketFiyatListesiUpdateWithWhereUniqueWithoutSirketInput | SirketFiyatListesiUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: SirketFiyatListesiUpdateManyWithWhereWithoutSirketInput | SirketFiyatListesiUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: SirketFiyatListesiScalarWhereInput | SirketFiyatListesiScalarWhereInput[]
  }

  export type SirketCeklerUpdateManyWithoutSirketNestedInput = {
    create?: XOR<SirketCeklerCreateWithoutSirketInput, SirketCeklerUncheckedCreateWithoutSirketInput> | SirketCeklerCreateWithoutSirketInput[] | SirketCeklerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketCeklerCreateOrConnectWithoutSirketInput | SirketCeklerCreateOrConnectWithoutSirketInput[]
    upsert?: SirketCeklerUpsertWithWhereUniqueWithoutSirketInput | SirketCeklerUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: SirketCeklerCreateManySirketInputEnvelope
    set?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    disconnect?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    delete?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    connect?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    update?: SirketCeklerUpdateWithWhereUniqueWithoutSirketInput | SirketCeklerUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: SirketCeklerUpdateManyWithWhereWithoutSirketInput | SirketCeklerUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: SirketCeklerScalarWhereInput | SirketCeklerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AraclarUncheckedUpdateManyWithoutSirketNestedInput = {
    create?: XOR<AraclarCreateWithoutSirketInput, AraclarUncheckedCreateWithoutSirketInput> | AraclarCreateWithoutSirketInput[] | AraclarUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: AraclarCreateOrConnectWithoutSirketInput | AraclarCreateOrConnectWithoutSirketInput[]
    upsert?: AraclarUpsertWithWhereUniqueWithoutSirketInput | AraclarUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: AraclarCreateManySirketInputEnvelope
    set?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    disconnect?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    delete?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    connect?: AraclarWhereUniqueInput | AraclarWhereUniqueInput[]
    update?: AraclarUpdateWithWhereUniqueWithoutSirketInput | AraclarUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: AraclarUpdateManyWithWhereWithoutSirketInput | AraclarUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: AraclarScalarWhereInput | AraclarScalarWhereInput[]
  }

  export type SeferlerUncheckedUpdateManyWithoutSirketNestedInput = {
    create?: XOR<SeferlerCreateWithoutSirketInput, SeferlerUncheckedCreateWithoutSirketInput> | SeferlerCreateWithoutSirketInput[] | SeferlerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutSirketInput | SeferlerCreateOrConnectWithoutSirketInput[]
    upsert?: SeferlerUpsertWithWhereUniqueWithoutSirketInput | SeferlerUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: SeferlerCreateManySirketInputEnvelope
    set?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    disconnect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    delete?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    update?: SeferlerUpdateWithWhereUniqueWithoutSirketInput | SeferlerUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: SeferlerUpdateManyWithWhereWithoutSirketInput | SeferlerUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: SeferlerScalarWhereInput | SeferlerScalarWhereInput[]
  }

  export type SirketFiyatListesiUncheckedUpdateManyWithoutSirketNestedInput = {
    create?: XOR<SirketFiyatListesiCreateWithoutSirketInput, SirketFiyatListesiUncheckedCreateWithoutSirketInput> | SirketFiyatListesiCreateWithoutSirketInput[] | SirketFiyatListesiUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketFiyatListesiCreateOrConnectWithoutSirketInput | SirketFiyatListesiCreateOrConnectWithoutSirketInput[]
    upsert?: SirketFiyatListesiUpsertWithWhereUniqueWithoutSirketInput | SirketFiyatListesiUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: SirketFiyatListesiCreateManySirketInputEnvelope
    set?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    disconnect?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    delete?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    connect?: SirketFiyatListesiWhereUniqueInput | SirketFiyatListesiWhereUniqueInput[]
    update?: SirketFiyatListesiUpdateWithWhereUniqueWithoutSirketInput | SirketFiyatListesiUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: SirketFiyatListesiUpdateManyWithWhereWithoutSirketInput | SirketFiyatListesiUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: SirketFiyatListesiScalarWhereInput | SirketFiyatListesiScalarWhereInput[]
  }

  export type SirketCeklerUncheckedUpdateManyWithoutSirketNestedInput = {
    create?: XOR<SirketCeklerCreateWithoutSirketInput, SirketCeklerUncheckedCreateWithoutSirketInput> | SirketCeklerCreateWithoutSirketInput[] | SirketCeklerUncheckedCreateWithoutSirketInput[]
    connectOrCreate?: SirketCeklerCreateOrConnectWithoutSirketInput | SirketCeklerCreateOrConnectWithoutSirketInput[]
    upsert?: SirketCeklerUpsertWithWhereUniqueWithoutSirketInput | SirketCeklerUpsertWithWhereUniqueWithoutSirketInput[]
    createMany?: SirketCeklerCreateManySirketInputEnvelope
    set?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    disconnect?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    delete?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    connect?: SirketCeklerWhereUniqueInput | SirketCeklerWhereUniqueInput[]
    update?: SirketCeklerUpdateWithWhereUniqueWithoutSirketInput | SirketCeklerUpdateWithWhereUniqueWithoutSirketInput[]
    updateMany?: SirketCeklerUpdateManyWithWhereWithoutSirketInput | SirketCeklerUpdateManyWithWhereWithoutSirketInput[]
    deleteMany?: SirketCeklerScalarWhereInput | SirketCeklerScalarWhereInput[]
  }

  export type SirketlerCreateNestedOneWithoutAraclarInput = {
    create?: XOR<SirketlerCreateWithoutAraclarInput, SirketlerUncheckedCreateWithoutAraclarInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutAraclarInput
    connect?: SirketlerWhereUniqueInput
  }

  export type SeferlerCreateNestedManyWithoutAracInput = {
    create?: XOR<SeferlerCreateWithoutAracInput, SeferlerUncheckedCreateWithoutAracInput> | SeferlerCreateWithoutAracInput[] | SeferlerUncheckedCreateWithoutAracInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutAracInput | SeferlerCreateOrConnectWithoutAracInput[]
    createMany?: SeferlerCreateManyAracInputEnvelope
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
  }

  export type AracOdemeKayitlariCreateNestedManyWithoutAracInput = {
    create?: XOR<AracOdemeKayitlariCreateWithoutAracInput, AracOdemeKayitlariUncheckedCreateWithoutAracInput> | AracOdemeKayitlariCreateWithoutAracInput[] | AracOdemeKayitlariUncheckedCreateWithoutAracInput[]
    connectOrCreate?: AracOdemeKayitlariCreateOrConnectWithoutAracInput | AracOdemeKayitlariCreateOrConnectWithoutAracInput[]
    createMany?: AracOdemeKayitlariCreateManyAracInputEnvelope
    connect?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
  }

  export type SeferlerUncheckedCreateNestedManyWithoutAracInput = {
    create?: XOR<SeferlerCreateWithoutAracInput, SeferlerUncheckedCreateWithoutAracInput> | SeferlerCreateWithoutAracInput[] | SeferlerUncheckedCreateWithoutAracInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutAracInput | SeferlerCreateOrConnectWithoutAracInput[]
    createMany?: SeferlerCreateManyAracInputEnvelope
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
  }

  export type AracOdemeKayitlariUncheckedCreateNestedManyWithoutAracInput = {
    create?: XOR<AracOdemeKayitlariCreateWithoutAracInput, AracOdemeKayitlariUncheckedCreateWithoutAracInput> | AracOdemeKayitlariCreateWithoutAracInput[] | AracOdemeKayitlariUncheckedCreateWithoutAracInput[]
    connectOrCreate?: AracOdemeKayitlariCreateOrConnectWithoutAracInput | AracOdemeKayitlariCreateOrConnectWithoutAracInput[]
    createMany?: AracOdemeKayitlariCreateManyAracInputEnvelope
    connect?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
  }

  export type SirketlerUpdateOneRequiredWithoutAraclarNestedInput = {
    create?: XOR<SirketlerCreateWithoutAraclarInput, SirketlerUncheckedCreateWithoutAraclarInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutAraclarInput
    upsert?: SirketlerUpsertWithoutAraclarInput
    connect?: SirketlerWhereUniqueInput
    update?: XOR<XOR<SirketlerUpdateToOneWithWhereWithoutAraclarInput, SirketlerUpdateWithoutAraclarInput>, SirketlerUncheckedUpdateWithoutAraclarInput>
  }

  export type SeferlerUpdateManyWithoutAracNestedInput = {
    create?: XOR<SeferlerCreateWithoutAracInput, SeferlerUncheckedCreateWithoutAracInput> | SeferlerCreateWithoutAracInput[] | SeferlerUncheckedCreateWithoutAracInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutAracInput | SeferlerCreateOrConnectWithoutAracInput[]
    upsert?: SeferlerUpsertWithWhereUniqueWithoutAracInput | SeferlerUpsertWithWhereUniqueWithoutAracInput[]
    createMany?: SeferlerCreateManyAracInputEnvelope
    set?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    disconnect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    delete?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    update?: SeferlerUpdateWithWhereUniqueWithoutAracInput | SeferlerUpdateWithWhereUniqueWithoutAracInput[]
    updateMany?: SeferlerUpdateManyWithWhereWithoutAracInput | SeferlerUpdateManyWithWhereWithoutAracInput[]
    deleteMany?: SeferlerScalarWhereInput | SeferlerScalarWhereInput[]
  }

  export type AracOdemeKayitlariUpdateManyWithoutAracNestedInput = {
    create?: XOR<AracOdemeKayitlariCreateWithoutAracInput, AracOdemeKayitlariUncheckedCreateWithoutAracInput> | AracOdemeKayitlariCreateWithoutAracInput[] | AracOdemeKayitlariUncheckedCreateWithoutAracInput[]
    connectOrCreate?: AracOdemeKayitlariCreateOrConnectWithoutAracInput | AracOdemeKayitlariCreateOrConnectWithoutAracInput[]
    upsert?: AracOdemeKayitlariUpsertWithWhereUniqueWithoutAracInput | AracOdemeKayitlariUpsertWithWhereUniqueWithoutAracInput[]
    createMany?: AracOdemeKayitlariCreateManyAracInputEnvelope
    set?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    disconnect?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    delete?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    connect?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    update?: AracOdemeKayitlariUpdateWithWhereUniqueWithoutAracInput | AracOdemeKayitlariUpdateWithWhereUniqueWithoutAracInput[]
    updateMany?: AracOdemeKayitlariUpdateManyWithWhereWithoutAracInput | AracOdemeKayitlariUpdateManyWithWhereWithoutAracInput[]
    deleteMany?: AracOdemeKayitlariScalarWhereInput | AracOdemeKayitlariScalarWhereInput[]
  }

  export type SeferlerUncheckedUpdateManyWithoutAracNestedInput = {
    create?: XOR<SeferlerCreateWithoutAracInput, SeferlerUncheckedCreateWithoutAracInput> | SeferlerCreateWithoutAracInput[] | SeferlerUncheckedCreateWithoutAracInput[]
    connectOrCreate?: SeferlerCreateOrConnectWithoutAracInput | SeferlerCreateOrConnectWithoutAracInput[]
    upsert?: SeferlerUpsertWithWhereUniqueWithoutAracInput | SeferlerUpsertWithWhereUniqueWithoutAracInput[]
    createMany?: SeferlerCreateManyAracInputEnvelope
    set?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    disconnect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    delete?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    connect?: SeferlerWhereUniqueInput | SeferlerWhereUniqueInput[]
    update?: SeferlerUpdateWithWhereUniqueWithoutAracInput | SeferlerUpdateWithWhereUniqueWithoutAracInput[]
    updateMany?: SeferlerUpdateManyWithWhereWithoutAracInput | SeferlerUpdateManyWithWhereWithoutAracInput[]
    deleteMany?: SeferlerScalarWhereInput | SeferlerScalarWhereInput[]
  }

  export type AracOdemeKayitlariUncheckedUpdateManyWithoutAracNestedInput = {
    create?: XOR<AracOdemeKayitlariCreateWithoutAracInput, AracOdemeKayitlariUncheckedCreateWithoutAracInput> | AracOdemeKayitlariCreateWithoutAracInput[] | AracOdemeKayitlariUncheckedCreateWithoutAracInput[]
    connectOrCreate?: AracOdemeKayitlariCreateOrConnectWithoutAracInput | AracOdemeKayitlariCreateOrConnectWithoutAracInput[]
    upsert?: AracOdemeKayitlariUpsertWithWhereUniqueWithoutAracInput | AracOdemeKayitlariUpsertWithWhereUniqueWithoutAracInput[]
    createMany?: AracOdemeKayitlariCreateManyAracInputEnvelope
    set?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    disconnect?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    delete?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    connect?: AracOdemeKayitlariWhereUniqueInput | AracOdemeKayitlariWhereUniqueInput[]
    update?: AracOdemeKayitlariUpdateWithWhereUniqueWithoutAracInput | AracOdemeKayitlariUpdateWithWhereUniqueWithoutAracInput[]
    updateMany?: AracOdemeKayitlariUpdateManyWithWhereWithoutAracInput | AracOdemeKayitlariUpdateManyWithWhereWithoutAracInput[]
    deleteMany?: AracOdemeKayitlariScalarWhereInput | AracOdemeKayitlariScalarWhereInput[]
  }

  export type SirketlerCreateNestedOneWithoutSeferlerInput = {
    create?: XOR<SirketlerCreateWithoutSeferlerInput, SirketlerUncheckedCreateWithoutSeferlerInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutSeferlerInput
    connect?: SirketlerWhereUniqueInput
  }

  export type AraclarCreateNestedOneWithoutSeferlerInput = {
    create?: XOR<AraclarCreateWithoutSeferlerInput, AraclarUncheckedCreateWithoutSeferlerInput>
    connectOrCreate?: AraclarCreateOrConnectWithoutSeferlerInput
    connect?: AraclarWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SirketlerUpdateOneRequiredWithoutSeferlerNestedInput = {
    create?: XOR<SirketlerCreateWithoutSeferlerInput, SirketlerUncheckedCreateWithoutSeferlerInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutSeferlerInput
    upsert?: SirketlerUpsertWithoutSeferlerInput
    connect?: SirketlerWhereUniqueInput
    update?: XOR<XOR<SirketlerUpdateToOneWithWhereWithoutSeferlerInput, SirketlerUpdateWithoutSeferlerInput>, SirketlerUncheckedUpdateWithoutSeferlerInput>
  }

  export type AraclarUpdateOneRequiredWithoutSeferlerNestedInput = {
    create?: XOR<AraclarCreateWithoutSeferlerInput, AraclarUncheckedCreateWithoutSeferlerInput>
    connectOrCreate?: AraclarCreateOrConnectWithoutSeferlerInput
    upsert?: AraclarUpsertWithoutSeferlerInput
    connect?: AraclarWhereUniqueInput
    update?: XOR<XOR<AraclarUpdateToOneWithWhereWithoutSeferlerInput, AraclarUpdateWithoutSeferlerInput>, AraclarUncheckedUpdateWithoutSeferlerInput>
  }

  export type SirketlerCreateNestedOneWithoutFiyat_listesiInput = {
    create?: XOR<SirketlerCreateWithoutFiyat_listesiInput, SirketlerUncheckedCreateWithoutFiyat_listesiInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutFiyat_listesiInput
    connect?: SirketlerWhereUniqueInput
  }

  export type SirketlerUpdateOneRequiredWithoutFiyat_listesiNestedInput = {
    create?: XOR<SirketlerCreateWithoutFiyat_listesiInput, SirketlerUncheckedCreateWithoutFiyat_listesiInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutFiyat_listesiInput
    upsert?: SirketlerUpsertWithoutFiyat_listesiInput
    connect?: SirketlerWhereUniqueInput
    update?: XOR<XOR<SirketlerUpdateToOneWithWhereWithoutFiyat_listesiInput, SirketlerUpdateWithoutFiyat_listesiInput>, SirketlerUncheckedUpdateWithoutFiyat_listesiInput>
  }

  export type SirketlerCreateNestedOneWithoutCeklerInput = {
    create?: XOR<SirketlerCreateWithoutCeklerInput, SirketlerUncheckedCreateWithoutCeklerInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutCeklerInput
    connect?: SirketlerWhereUniqueInput
  }

  export type SirketlerUpdateOneRequiredWithoutCeklerNestedInput = {
    create?: XOR<SirketlerCreateWithoutCeklerInput, SirketlerUncheckedCreateWithoutCeklerInput>
    connectOrCreate?: SirketlerCreateOrConnectWithoutCeklerInput
    upsert?: SirketlerUpsertWithoutCeklerInput
    connect?: SirketlerWhereUniqueInput
    update?: XOR<XOR<SirketlerUpdateToOneWithWhereWithoutCeklerInput, SirketlerUpdateWithoutCeklerInput>, SirketlerUncheckedUpdateWithoutCeklerInput>
  }

  export type AraclarCreateNestedOneWithoutOdemelerInput = {
    create?: XOR<AraclarCreateWithoutOdemelerInput, AraclarUncheckedCreateWithoutOdemelerInput>
    connectOrCreate?: AraclarCreateOrConnectWithoutOdemelerInput
    connect?: AraclarWhereUniqueInput
  }

  export type AraclarUpdateOneRequiredWithoutOdemelerNestedInput = {
    create?: XOR<AraclarCreateWithoutOdemelerInput, AraclarUncheckedCreateWithoutOdemelerInput>
    connectOrCreate?: AraclarCreateOrConnectWithoutOdemelerInput
    upsert?: AraclarUpsertWithoutOdemelerInput
    connect?: AraclarWhereUniqueInput
    update?: XOR<XOR<AraclarUpdateToOneWithWhereWithoutOdemelerInput, AraclarUpdateWithoutOdemelerInput>, AraclarUncheckedUpdateWithoutOdemelerInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AraclarCreateWithoutSirketInput = {
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    seferler?: SeferlerCreateNestedManyWithoutAracInput
    odemeler?: AracOdemeKayitlariCreateNestedManyWithoutAracInput
  }

  export type AraclarUncheckedCreateWithoutSirketInput = {
    arac_id?: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    seferler?: SeferlerUncheckedCreateNestedManyWithoutAracInput
    odemeler?: AracOdemeKayitlariUncheckedCreateNestedManyWithoutAracInput
  }

  export type AraclarCreateOrConnectWithoutSirketInput = {
    where: AraclarWhereUniqueInput
    create: XOR<AraclarCreateWithoutSirketInput, AraclarUncheckedCreateWithoutSirketInput>
  }

  export type AraclarCreateManySirketInputEnvelope = {
    data: AraclarCreateManySirketInput | AraclarCreateManySirketInput[]
    skipDuplicates?: boolean
  }

  export type SeferlerCreateWithoutSirketInput = {
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    ay?: number | null
    donem?: number | null
    arac: AraclarCreateNestedOneWithoutSeferlerInput
  }

  export type SeferlerUncheckedCreateWithoutSirketInput = {
    sefer_id?: number
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    arac_id: number
    ay?: number | null
    donem?: number | null
  }

  export type SeferlerCreateOrConnectWithoutSirketInput = {
    where: SeferlerWhereUniqueInput
    create: XOR<SeferlerCreateWithoutSirketInput, SeferlerUncheckedCreateWithoutSirketInput>
  }

  export type SeferlerCreateManySirketInputEnvelope = {
    data: SeferlerCreateManySirketInput | SeferlerCreateManySirketInput[]
    skipDuplicates?: boolean
  }

  export type SirketFiyatListesiCreateWithoutSirketInput = {
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
  }

  export type SirketFiyatListesiUncheckedCreateWithoutSirketInput = {
    fiyat_listesi_id?: number
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
  }

  export type SirketFiyatListesiCreateOrConnectWithoutSirketInput = {
    where: SirketFiyatListesiWhereUniqueInput
    create: XOR<SirketFiyatListesiCreateWithoutSirketInput, SirketFiyatListesiUncheckedCreateWithoutSirketInput>
  }

  export type SirketFiyatListesiCreateManySirketInputEnvelope = {
    data: SirketFiyatListesiCreateManySirketInput | SirketFiyatListesiCreateManySirketInput[]
    skipDuplicates?: boolean
  }

  export type SirketCeklerCreateWithoutSirketInput = {
    cek_tutari: number
    cek_alinma_tarihi: Date | string
    cek_odeme_tarihi: Date | string
    durum: string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type SirketCeklerUncheckedCreateWithoutSirketInput = {
    cek_id?: number
    cek_tutari: number
    cek_alinma_tarihi: Date | string
    cek_odeme_tarihi: Date | string
    durum: string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type SirketCeklerCreateOrConnectWithoutSirketInput = {
    where: SirketCeklerWhereUniqueInput
    create: XOR<SirketCeklerCreateWithoutSirketInput, SirketCeklerUncheckedCreateWithoutSirketInput>
  }

  export type SirketCeklerCreateManySirketInputEnvelope = {
    data: SirketCeklerCreateManySirketInput | SirketCeklerCreateManySirketInput[]
    skipDuplicates?: boolean
  }

  export type AraclarUpsertWithWhereUniqueWithoutSirketInput = {
    where: AraclarWhereUniqueInput
    update: XOR<AraclarUpdateWithoutSirketInput, AraclarUncheckedUpdateWithoutSirketInput>
    create: XOR<AraclarCreateWithoutSirketInput, AraclarUncheckedCreateWithoutSirketInput>
  }

  export type AraclarUpdateWithWhereUniqueWithoutSirketInput = {
    where: AraclarWhereUniqueInput
    data: XOR<AraclarUpdateWithoutSirketInput, AraclarUncheckedUpdateWithoutSirketInput>
  }

  export type AraclarUpdateManyWithWhereWithoutSirketInput = {
    where: AraclarScalarWhereInput
    data: XOR<AraclarUpdateManyMutationInput, AraclarUncheckedUpdateManyWithoutSirketInput>
  }

  export type AraclarScalarWhereInput = {
    AND?: AraclarScalarWhereInput | AraclarScalarWhereInput[]
    OR?: AraclarScalarWhereInput[]
    NOT?: AraclarScalarWhereInput | AraclarScalarWhereInput[]
    arac_id?: IntFilter<"Araclar"> | number
    plaka?: StringFilter<"Araclar"> | string
    sofor_adi?: StringFilter<"Araclar"> | string
    vergi_numarasi?: StringFilter<"Araclar"> | string
    sirket_id?: IntFilter<"Araclar"> | number
  }

  export type SeferlerUpsertWithWhereUniqueWithoutSirketInput = {
    where: SeferlerWhereUniqueInput
    update: XOR<SeferlerUpdateWithoutSirketInput, SeferlerUncheckedUpdateWithoutSirketInput>
    create: XOR<SeferlerCreateWithoutSirketInput, SeferlerUncheckedCreateWithoutSirketInput>
  }

  export type SeferlerUpdateWithWhereUniqueWithoutSirketInput = {
    where: SeferlerWhereUniqueInput
    data: XOR<SeferlerUpdateWithoutSirketInput, SeferlerUncheckedUpdateWithoutSirketInput>
  }

  export type SeferlerUpdateManyWithWhereWithoutSirketInput = {
    where: SeferlerScalarWhereInput
    data: XOR<SeferlerUpdateManyMutationInput, SeferlerUncheckedUpdateManyWithoutSirketInput>
  }

  export type SeferlerScalarWhereInput = {
    AND?: SeferlerScalarWhereInput | SeferlerScalarWhereInput[]
    OR?: SeferlerScalarWhereInput[]
    NOT?: SeferlerScalarWhereInput | SeferlerScalarWhereInput[]
    sefer_id?: IntFilter<"Seferler"> | number
    sira_no?: IntFilter<"Seferler"> | number
    irsaliye_numarasi?: StringNullableFilter<"Seferler"> | string | null
    irsaliye_tarihi?: DateTimeNullableFilter<"Seferler"> | Date | string | null
    kalkis_saati?: DateTimeFilter<"Seferler"> | Date | string
    varis_saati?: DateTimeFilter<"Seferler"> | Date | string
    cikis_yeri?: StringFilter<"Seferler"> | string
    tahliye_edilen_firma?: StringFilter<"Seferler"> | string
    tahliye_yeri?: StringFilter<"Seferler"> | string
    tonaj_kg?: FloatFilter<"Seferler"> | number
    arac_tipi?: StringFilter<"Seferler"> | string
    mt?: FloatNullableFilter<"Seferler"> | number | null
    aciklama?: StringNullableFilter<"Seferler"> | string | null
    sirketten_alinan_ucret?: FloatFilter<"Seferler"> | number
    sofore_odenen_ucret?: FloatFilter<"Seferler"> | number
    sirket_id?: IntFilter<"Seferler"> | number
    arac_id?: IntFilter<"Seferler"> | number
    ay?: IntNullableFilter<"Seferler"> | number | null
    donem?: IntNullableFilter<"Seferler"> | number | null
  }

  export type SirketFiyatListesiUpsertWithWhereUniqueWithoutSirketInput = {
    where: SirketFiyatListesiWhereUniqueInput
    update: XOR<SirketFiyatListesiUpdateWithoutSirketInput, SirketFiyatListesiUncheckedUpdateWithoutSirketInput>
    create: XOR<SirketFiyatListesiCreateWithoutSirketInput, SirketFiyatListesiUncheckedCreateWithoutSirketInput>
  }

  export type SirketFiyatListesiUpdateWithWhereUniqueWithoutSirketInput = {
    where: SirketFiyatListesiWhereUniqueInput
    data: XOR<SirketFiyatListesiUpdateWithoutSirketInput, SirketFiyatListesiUncheckedUpdateWithoutSirketInput>
  }

  export type SirketFiyatListesiUpdateManyWithWhereWithoutSirketInput = {
    where: SirketFiyatListesiScalarWhereInput
    data: XOR<SirketFiyatListesiUpdateManyMutationInput, SirketFiyatListesiUncheckedUpdateManyWithoutSirketInput>
  }

  export type SirketFiyatListesiScalarWhereInput = {
    AND?: SirketFiyatListesiScalarWhereInput | SirketFiyatListesiScalarWhereInput[]
    OR?: SirketFiyatListesiScalarWhereInput[]
    NOT?: SirketFiyatListesiScalarWhereInput | SirketFiyatListesiScalarWhereInput[]
    fiyat_listesi_id?: IntFilter<"SirketFiyatListesi"> | number
    sirket_id?: IntFilter<"SirketFiyatListesi"> | number
    tahliye_yeri?: StringFilter<"SirketFiyatListesi"> | string
    arac_tipi?: StringFilter<"SirketFiyatListesi"> | string
    ucret?: FloatFilter<"SirketFiyatListesi"> | number
  }

  export type SirketCeklerUpsertWithWhereUniqueWithoutSirketInput = {
    where: SirketCeklerWhereUniqueInput
    update: XOR<SirketCeklerUpdateWithoutSirketInput, SirketCeklerUncheckedUpdateWithoutSirketInput>
    create: XOR<SirketCeklerCreateWithoutSirketInput, SirketCeklerUncheckedCreateWithoutSirketInput>
  }

  export type SirketCeklerUpdateWithWhereUniqueWithoutSirketInput = {
    where: SirketCeklerWhereUniqueInput
    data: XOR<SirketCeklerUpdateWithoutSirketInput, SirketCeklerUncheckedUpdateWithoutSirketInput>
  }

  export type SirketCeklerUpdateManyWithWhereWithoutSirketInput = {
    where: SirketCeklerScalarWhereInput
    data: XOR<SirketCeklerUpdateManyMutationInput, SirketCeklerUncheckedUpdateManyWithoutSirketInput>
  }

  export type SirketCeklerScalarWhereInput = {
    AND?: SirketCeklerScalarWhereInput | SirketCeklerScalarWhereInput[]
    OR?: SirketCeklerScalarWhereInput[]
    NOT?: SirketCeklerScalarWhereInput | SirketCeklerScalarWhereInput[]
    cek_id?: IntFilter<"SirketCekler"> | number
    sirket_id?: IntFilter<"SirketCekler"> | number
    cek_tutari?: FloatFilter<"SirketCekler"> | number
    cek_alinma_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    cek_odeme_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
    durum?: StringFilter<"SirketCekler"> | string
    aciklama?: StringNullableFilter<"SirketCekler"> | string | null
    kayit_tarihi?: DateTimeFilter<"SirketCekler"> | Date | string
  }

  export type SirketlerCreateWithoutAraclarInput = {
    sirket_adi: string
    vergi_numarasi: string
    seferler?: SeferlerCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerCreateNestedManyWithoutSirketInput
  }

  export type SirketlerUncheckedCreateWithoutAraclarInput = {
    sirket_id?: number
    sirket_adi: string
    vergi_numarasi: string
    seferler?: SeferlerUncheckedCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiUncheckedCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerUncheckedCreateNestedManyWithoutSirketInput
  }

  export type SirketlerCreateOrConnectWithoutAraclarInput = {
    where: SirketlerWhereUniqueInput
    create: XOR<SirketlerCreateWithoutAraclarInput, SirketlerUncheckedCreateWithoutAraclarInput>
  }

  export type SeferlerCreateWithoutAracInput = {
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    ay?: number | null
    donem?: number | null
    sirket: SirketlerCreateNestedOneWithoutSeferlerInput
  }

  export type SeferlerUncheckedCreateWithoutAracInput = {
    sefer_id?: number
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    sirket_id: number
    ay?: number | null
    donem?: number | null
  }

  export type SeferlerCreateOrConnectWithoutAracInput = {
    where: SeferlerWhereUniqueInput
    create: XOR<SeferlerCreateWithoutAracInput, SeferlerUncheckedCreateWithoutAracInput>
  }

  export type SeferlerCreateManyAracInputEnvelope = {
    data: SeferlerCreateManyAracInput | SeferlerCreateManyAracInput[]
    skipDuplicates?: boolean
  }

  export type AracOdemeKayitlariCreateWithoutAracInput = {
    odeme_tutari: number
    odeme_tarihi: Date | string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type AracOdemeKayitlariUncheckedCreateWithoutAracInput = {
    odeme_id?: number
    odeme_tutari: number
    odeme_tarihi: Date | string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type AracOdemeKayitlariCreateOrConnectWithoutAracInput = {
    where: AracOdemeKayitlariWhereUniqueInput
    create: XOR<AracOdemeKayitlariCreateWithoutAracInput, AracOdemeKayitlariUncheckedCreateWithoutAracInput>
  }

  export type AracOdemeKayitlariCreateManyAracInputEnvelope = {
    data: AracOdemeKayitlariCreateManyAracInput | AracOdemeKayitlariCreateManyAracInput[]
    skipDuplicates?: boolean
  }

  export type SirketlerUpsertWithoutAraclarInput = {
    update: XOR<SirketlerUpdateWithoutAraclarInput, SirketlerUncheckedUpdateWithoutAraclarInput>
    create: XOR<SirketlerCreateWithoutAraclarInput, SirketlerUncheckedCreateWithoutAraclarInput>
    where?: SirketlerWhereInput
  }

  export type SirketlerUpdateToOneWithWhereWithoutAraclarInput = {
    where?: SirketlerWhereInput
    data: XOR<SirketlerUpdateWithoutAraclarInput, SirketlerUncheckedUpdateWithoutAraclarInput>
  }

  export type SirketlerUpdateWithoutAraclarInput = {
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    seferler?: SeferlerUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerUncheckedUpdateWithoutAraclarInput = {
    sirket_id?: IntFieldUpdateOperationsInput | number
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    seferler?: SeferlerUncheckedUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUncheckedUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUncheckedUpdateManyWithoutSirketNestedInput
  }

  export type SeferlerUpsertWithWhereUniqueWithoutAracInput = {
    where: SeferlerWhereUniqueInput
    update: XOR<SeferlerUpdateWithoutAracInput, SeferlerUncheckedUpdateWithoutAracInput>
    create: XOR<SeferlerCreateWithoutAracInput, SeferlerUncheckedCreateWithoutAracInput>
  }

  export type SeferlerUpdateWithWhereUniqueWithoutAracInput = {
    where: SeferlerWhereUniqueInput
    data: XOR<SeferlerUpdateWithoutAracInput, SeferlerUncheckedUpdateWithoutAracInput>
  }

  export type SeferlerUpdateManyWithWhereWithoutAracInput = {
    where: SeferlerScalarWhereInput
    data: XOR<SeferlerUpdateManyMutationInput, SeferlerUncheckedUpdateManyWithoutAracInput>
  }

  export type AracOdemeKayitlariUpsertWithWhereUniqueWithoutAracInput = {
    where: AracOdemeKayitlariWhereUniqueInput
    update: XOR<AracOdemeKayitlariUpdateWithoutAracInput, AracOdemeKayitlariUncheckedUpdateWithoutAracInput>
    create: XOR<AracOdemeKayitlariCreateWithoutAracInput, AracOdemeKayitlariUncheckedCreateWithoutAracInput>
  }

  export type AracOdemeKayitlariUpdateWithWhereUniqueWithoutAracInput = {
    where: AracOdemeKayitlariWhereUniqueInput
    data: XOR<AracOdemeKayitlariUpdateWithoutAracInput, AracOdemeKayitlariUncheckedUpdateWithoutAracInput>
  }

  export type AracOdemeKayitlariUpdateManyWithWhereWithoutAracInput = {
    where: AracOdemeKayitlariScalarWhereInput
    data: XOR<AracOdemeKayitlariUpdateManyMutationInput, AracOdemeKayitlariUncheckedUpdateManyWithoutAracInput>
  }

  export type AracOdemeKayitlariScalarWhereInput = {
    AND?: AracOdemeKayitlariScalarWhereInput | AracOdemeKayitlariScalarWhereInput[]
    OR?: AracOdemeKayitlariScalarWhereInput[]
    NOT?: AracOdemeKayitlariScalarWhereInput | AracOdemeKayitlariScalarWhereInput[]
    odeme_id?: IntFilter<"AracOdemeKayitlari"> | number
    arac_id?: IntFilter<"AracOdemeKayitlari"> | number
    odeme_tutari?: FloatFilter<"AracOdemeKayitlari"> | number
    odeme_tarihi?: DateTimeFilter<"AracOdemeKayitlari"> | Date | string
    aciklama?: StringNullableFilter<"AracOdemeKayitlari"> | string | null
    kayit_tarihi?: DateTimeFilter<"AracOdemeKayitlari"> | Date | string
  }

  export type SirketlerCreateWithoutSeferlerInput = {
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerCreateNestedManyWithoutSirketInput
  }

  export type SirketlerUncheckedCreateWithoutSeferlerInput = {
    sirket_id?: number
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarUncheckedCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiUncheckedCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerUncheckedCreateNestedManyWithoutSirketInput
  }

  export type SirketlerCreateOrConnectWithoutSeferlerInput = {
    where: SirketlerWhereUniqueInput
    create: XOR<SirketlerCreateWithoutSeferlerInput, SirketlerUncheckedCreateWithoutSeferlerInput>
  }

  export type AraclarCreateWithoutSeferlerInput = {
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket: SirketlerCreateNestedOneWithoutAraclarInput
    odemeler?: AracOdemeKayitlariCreateNestedManyWithoutAracInput
  }

  export type AraclarUncheckedCreateWithoutSeferlerInput = {
    arac_id?: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket_id: number
    odemeler?: AracOdemeKayitlariUncheckedCreateNestedManyWithoutAracInput
  }

  export type AraclarCreateOrConnectWithoutSeferlerInput = {
    where: AraclarWhereUniqueInput
    create: XOR<AraclarCreateWithoutSeferlerInput, AraclarUncheckedCreateWithoutSeferlerInput>
  }

  export type SirketlerUpsertWithoutSeferlerInput = {
    update: XOR<SirketlerUpdateWithoutSeferlerInput, SirketlerUncheckedUpdateWithoutSeferlerInput>
    create: XOR<SirketlerCreateWithoutSeferlerInput, SirketlerUncheckedCreateWithoutSeferlerInput>
    where?: SirketlerWhereInput
  }

  export type SirketlerUpdateToOneWithWhereWithoutSeferlerInput = {
    where?: SirketlerWhereInput
    data: XOR<SirketlerUpdateWithoutSeferlerInput, SirketlerUncheckedUpdateWithoutSeferlerInput>
  }

  export type SirketlerUpdateWithoutSeferlerInput = {
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerUncheckedUpdateWithoutSeferlerInput = {
    sirket_id?: IntFieldUpdateOperationsInput | number
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUncheckedUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUncheckedUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUncheckedUpdateManyWithoutSirketNestedInput
  }

  export type AraclarUpsertWithoutSeferlerInput = {
    update: XOR<AraclarUpdateWithoutSeferlerInput, AraclarUncheckedUpdateWithoutSeferlerInput>
    create: XOR<AraclarCreateWithoutSeferlerInput, AraclarUncheckedCreateWithoutSeferlerInput>
    where?: AraclarWhereInput
  }

  export type AraclarUpdateToOneWithWhereWithoutSeferlerInput = {
    where?: AraclarWhereInput
    data: XOR<AraclarUpdateWithoutSeferlerInput, AraclarUncheckedUpdateWithoutSeferlerInput>
  }

  export type AraclarUpdateWithoutSeferlerInput = {
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket?: SirketlerUpdateOneRequiredWithoutAraclarNestedInput
    odemeler?: AracOdemeKayitlariUpdateManyWithoutAracNestedInput
  }

  export type AraclarUncheckedUpdateWithoutSeferlerInput = {
    arac_id?: IntFieldUpdateOperationsInput | number
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket_id?: IntFieldUpdateOperationsInput | number
    odemeler?: AracOdemeKayitlariUncheckedUpdateManyWithoutAracNestedInput
  }

  export type SirketlerCreateWithoutFiyat_listesiInput = {
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarCreateNestedManyWithoutSirketInput
    seferler?: SeferlerCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerCreateNestedManyWithoutSirketInput
  }

  export type SirketlerUncheckedCreateWithoutFiyat_listesiInput = {
    sirket_id?: number
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarUncheckedCreateNestedManyWithoutSirketInput
    seferler?: SeferlerUncheckedCreateNestedManyWithoutSirketInput
    cekler?: SirketCeklerUncheckedCreateNestedManyWithoutSirketInput
  }

  export type SirketlerCreateOrConnectWithoutFiyat_listesiInput = {
    where: SirketlerWhereUniqueInput
    create: XOR<SirketlerCreateWithoutFiyat_listesiInput, SirketlerUncheckedCreateWithoutFiyat_listesiInput>
  }

  export type SirketlerUpsertWithoutFiyat_listesiInput = {
    update: XOR<SirketlerUpdateWithoutFiyat_listesiInput, SirketlerUncheckedUpdateWithoutFiyat_listesiInput>
    create: XOR<SirketlerCreateWithoutFiyat_listesiInput, SirketlerUncheckedCreateWithoutFiyat_listesiInput>
    where?: SirketlerWhereInput
  }

  export type SirketlerUpdateToOneWithWhereWithoutFiyat_listesiInput = {
    where?: SirketlerWhereInput
    data: XOR<SirketlerUpdateWithoutFiyat_listesiInput, SirketlerUncheckedUpdateWithoutFiyat_listesiInput>
  }

  export type SirketlerUpdateWithoutFiyat_listesiInput = {
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUpdateManyWithoutSirketNestedInput
    seferler?: SeferlerUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerUncheckedUpdateWithoutFiyat_listesiInput = {
    sirket_id?: IntFieldUpdateOperationsInput | number
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUncheckedUpdateManyWithoutSirketNestedInput
    seferler?: SeferlerUncheckedUpdateManyWithoutSirketNestedInput
    cekler?: SirketCeklerUncheckedUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerCreateWithoutCeklerInput = {
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarCreateNestedManyWithoutSirketInput
    seferler?: SeferlerCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiCreateNestedManyWithoutSirketInput
  }

  export type SirketlerUncheckedCreateWithoutCeklerInput = {
    sirket_id?: number
    sirket_adi: string
    vergi_numarasi: string
    araclar?: AraclarUncheckedCreateNestedManyWithoutSirketInput
    seferler?: SeferlerUncheckedCreateNestedManyWithoutSirketInput
    fiyat_listesi?: SirketFiyatListesiUncheckedCreateNestedManyWithoutSirketInput
  }

  export type SirketlerCreateOrConnectWithoutCeklerInput = {
    where: SirketlerWhereUniqueInput
    create: XOR<SirketlerCreateWithoutCeklerInput, SirketlerUncheckedCreateWithoutCeklerInput>
  }

  export type SirketlerUpsertWithoutCeklerInput = {
    update: XOR<SirketlerUpdateWithoutCeklerInput, SirketlerUncheckedUpdateWithoutCeklerInput>
    create: XOR<SirketlerCreateWithoutCeklerInput, SirketlerUncheckedCreateWithoutCeklerInput>
    where?: SirketlerWhereInput
  }

  export type SirketlerUpdateToOneWithWhereWithoutCeklerInput = {
    where?: SirketlerWhereInput
    data: XOR<SirketlerUpdateWithoutCeklerInput, SirketlerUncheckedUpdateWithoutCeklerInput>
  }

  export type SirketlerUpdateWithoutCeklerInput = {
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUpdateManyWithoutSirketNestedInput
    seferler?: SeferlerUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUpdateManyWithoutSirketNestedInput
  }

  export type SirketlerUncheckedUpdateWithoutCeklerInput = {
    sirket_id?: IntFieldUpdateOperationsInput | number
    sirket_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    araclar?: AraclarUncheckedUpdateManyWithoutSirketNestedInput
    seferler?: SeferlerUncheckedUpdateManyWithoutSirketNestedInput
    fiyat_listesi?: SirketFiyatListesiUncheckedUpdateManyWithoutSirketNestedInput
  }

  export type AraclarCreateWithoutOdemelerInput = {
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket: SirketlerCreateNestedOneWithoutAraclarInput
    seferler?: SeferlerCreateNestedManyWithoutAracInput
  }

  export type AraclarUncheckedCreateWithoutOdemelerInput = {
    arac_id?: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
    sirket_id: number
    seferler?: SeferlerUncheckedCreateNestedManyWithoutAracInput
  }

  export type AraclarCreateOrConnectWithoutOdemelerInput = {
    where: AraclarWhereUniqueInput
    create: XOR<AraclarCreateWithoutOdemelerInput, AraclarUncheckedCreateWithoutOdemelerInput>
  }

  export type AraclarUpsertWithoutOdemelerInput = {
    update: XOR<AraclarUpdateWithoutOdemelerInput, AraclarUncheckedUpdateWithoutOdemelerInput>
    create: XOR<AraclarCreateWithoutOdemelerInput, AraclarUncheckedCreateWithoutOdemelerInput>
    where?: AraclarWhereInput
  }

  export type AraclarUpdateToOneWithWhereWithoutOdemelerInput = {
    where?: AraclarWhereInput
    data: XOR<AraclarUpdateWithoutOdemelerInput, AraclarUncheckedUpdateWithoutOdemelerInput>
  }

  export type AraclarUpdateWithoutOdemelerInput = {
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket?: SirketlerUpdateOneRequiredWithoutAraclarNestedInput
    seferler?: SeferlerUpdateManyWithoutAracNestedInput
  }

  export type AraclarUncheckedUpdateWithoutOdemelerInput = {
    arac_id?: IntFieldUpdateOperationsInput | number
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    sirket_id?: IntFieldUpdateOperationsInput | number
    seferler?: SeferlerUncheckedUpdateManyWithoutAracNestedInput
  }

  export type AraclarCreateManySirketInput = {
    arac_id?: number
    plaka: string
    sofor_adi: string
    vergi_numarasi: string
  }

  export type SeferlerCreateManySirketInput = {
    sefer_id?: number
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    arac_id: number
    ay?: number | null
    donem?: number | null
  }

  export type SirketFiyatListesiCreateManySirketInput = {
    fiyat_listesi_id?: number
    tahliye_yeri: string
    arac_tipi: string
    ucret: number
  }

  export type SirketCeklerCreateManySirketInput = {
    cek_id?: number
    cek_tutari: number
    cek_alinma_tarihi: Date | string
    cek_odeme_tarihi: Date | string
    durum: string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type AraclarUpdateWithoutSirketInput = {
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    seferler?: SeferlerUpdateManyWithoutAracNestedInput
    odemeler?: AracOdemeKayitlariUpdateManyWithoutAracNestedInput
  }

  export type AraclarUncheckedUpdateWithoutSirketInput = {
    arac_id?: IntFieldUpdateOperationsInput | number
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
    seferler?: SeferlerUncheckedUpdateManyWithoutAracNestedInput
    odemeler?: AracOdemeKayitlariUncheckedUpdateManyWithoutAracNestedInput
  }

  export type AraclarUncheckedUpdateManyWithoutSirketInput = {
    arac_id?: IntFieldUpdateOperationsInput | number
    plaka?: StringFieldUpdateOperationsInput | string
    sofor_adi?: StringFieldUpdateOperationsInput | string
    vergi_numarasi?: StringFieldUpdateOperationsInput | string
  }

  export type SeferlerUpdateWithoutSirketInput = {
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
    arac?: AraclarUpdateOneRequiredWithoutSeferlerNestedInput
  }

  export type SeferlerUncheckedUpdateWithoutSirketInput = {
    sefer_id?: IntFieldUpdateOperationsInput | number
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    arac_id?: IntFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeferlerUncheckedUpdateManyWithoutSirketInput = {
    sefer_id?: IntFieldUpdateOperationsInput | number
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    arac_id?: IntFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SirketFiyatListesiUpdateWithoutSirketInput = {
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
  }

  export type SirketFiyatListesiUncheckedUpdateWithoutSirketInput = {
    fiyat_listesi_id?: IntFieldUpdateOperationsInput | number
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
  }

  export type SirketFiyatListesiUncheckedUpdateManyWithoutSirketInput = {
    fiyat_listesi_id?: IntFieldUpdateOperationsInput | number
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    arac_tipi?: StringFieldUpdateOperationsInput | string
    ucret?: FloatFieldUpdateOperationsInput | number
  }

  export type SirketCeklerUpdateWithoutSirketInput = {
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SirketCeklerUncheckedUpdateWithoutSirketInput = {
    cek_id?: IntFieldUpdateOperationsInput | number
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SirketCeklerUncheckedUpdateManyWithoutSirketInput = {
    cek_id?: IntFieldUpdateOperationsInput | number
    cek_tutari?: FloatFieldUpdateOperationsInput | number
    cek_alinma_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    cek_odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    durum?: StringFieldUpdateOperationsInput | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeferlerCreateManyAracInput = {
    sefer_id?: number
    sira_no: number
    irsaliye_numarasi?: string | null
    irsaliye_tarihi?: Date | string | null
    kalkis_saati: Date | string
    varis_saati: Date | string
    cikis_yeri: string
    tahliye_edilen_firma: string
    tahliye_yeri: string
    tonaj_kg: number
    arac_tipi: string
    mt?: number | null
    aciklama?: string | null
    sirketten_alinan_ucret: number
    sofore_odenen_ucret: number
    sirket_id: number
    ay?: number | null
    donem?: number | null
  }

  export type AracOdemeKayitlariCreateManyAracInput = {
    odeme_id?: number
    odeme_tutari: number
    odeme_tarihi: Date | string
    aciklama?: string | null
    kayit_tarihi?: Date | string
  }

  export type SeferlerUpdateWithoutAracInput = {
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
    sirket?: SirketlerUpdateOneRequiredWithoutSeferlerNestedInput
  }

  export type SeferlerUncheckedUpdateWithoutAracInput = {
    sefer_id?: IntFieldUpdateOperationsInput | number
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeferlerUncheckedUpdateManyWithoutAracInput = {
    sefer_id?: IntFieldUpdateOperationsInput | number
    sira_no?: IntFieldUpdateOperationsInput | number
    irsaliye_numarasi?: NullableStringFieldUpdateOperationsInput | string | null
    irsaliye_tarihi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kalkis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    varis_saati?: DateTimeFieldUpdateOperationsInput | Date | string
    cikis_yeri?: StringFieldUpdateOperationsInput | string
    tahliye_edilen_firma?: StringFieldUpdateOperationsInput | string
    tahliye_yeri?: StringFieldUpdateOperationsInput | string
    tonaj_kg?: FloatFieldUpdateOperationsInput | number
    arac_tipi?: StringFieldUpdateOperationsInput | string
    mt?: NullableFloatFieldUpdateOperationsInput | number | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    sirketten_alinan_ucret?: FloatFieldUpdateOperationsInput | number
    sofore_odenen_ucret?: FloatFieldUpdateOperationsInput | number
    sirket_id?: IntFieldUpdateOperationsInput | number
    ay?: NullableIntFieldUpdateOperationsInput | number | null
    donem?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AracOdemeKayitlariUpdateWithoutAracInput = {
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AracOdemeKayitlariUncheckedUpdateWithoutAracInput = {
    odeme_id?: IntFieldUpdateOperationsInput | number
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AracOdemeKayitlariUncheckedUpdateManyWithoutAracInput = {
    odeme_id?: IntFieldUpdateOperationsInput | number
    odeme_tutari?: FloatFieldUpdateOperationsInput | number
    odeme_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    kayit_tarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}