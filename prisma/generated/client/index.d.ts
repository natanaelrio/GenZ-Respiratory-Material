
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
 * Model soal
 * 
 */
export type soal = $Result.DefaultSelection<Prisma.$soalPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Soals
 * const soals = await prisma.soal.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Soals
   * const soals = await prisma.soal.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.soal`: Exposes CRUD operations for the **soal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Soals
    * const soals = await prisma.soal.findMany()
    * ```
    */
  get soal(): Prisma.soalDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    soal: 'soal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'soal'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      soal: {
        payload: Prisma.$soalPayload<ExtArgs>
        fields: Prisma.soalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.soalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.soalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>
          }
          findFirst: {
            args: Prisma.soalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.soalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>
          }
          findMany: {
            args: Prisma.soalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>[]
          }
          create: {
            args: Prisma.soalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>
          }
          createMany: {
            args: Prisma.soalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.soalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>
          }
          update: {
            args: Prisma.soalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>
          }
          deleteMany: {
            args: Prisma.soalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.soalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.soalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$soalPayload>
          }
          aggregate: {
            args: Prisma.SoalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSoal>
          }
          groupBy: {
            args: Prisma.soalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.soalCountArgs<ExtArgs>,
            result: $Utils.Optional<SoalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model soal
   */

  export type AggregateSoal = {
    _count: SoalCountAggregateOutputType | null
    _avg: SoalAvgAggregateOutputType | null
    _sum: SoalSumAggregateOutputType | null
    _min: SoalMinAggregateOutputType | null
    _max: SoalMaxAggregateOutputType | null
  }

  export type SoalAvgAggregateOutputType = {
    id: number | null
    nomerabsen: number | null
  }

  export type SoalSumAggregateOutputType = {
    id: number | null
    nomerabsen: number | null
  }

  export type SoalMinAggregateOutputType = {
    id: number | null
    start: Date | null
    idUser: string | null
    nama: string | null
    nomerabsen: number | null
    kelas: string | null
    soal1: string | null
    soal2: string | null
    soal3: string | null
    soal4: string | null
    soal5: string | null
    soal6: string | null
    soal7: string | null
    soal8: string | null
    soal9: string | null
    soal10: string | null
    selesai: boolean | null
  }

  export type SoalMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    idUser: string | null
    nama: string | null
    nomerabsen: number | null
    kelas: string | null
    soal1: string | null
    soal2: string | null
    soal3: string | null
    soal4: string | null
    soal5: string | null
    soal6: string | null
    soal7: string | null
    soal8: string | null
    soal9: string | null
    soal10: string | null
    selesai: boolean | null
  }

  export type SoalCountAggregateOutputType = {
    id: number
    start: number
    idUser: number
    nama: number
    nomerabsen: number
    kelas: number
    soal1: number
    soal2: number
    soal3: number
    soal4: number
    soal5: number
    soal6: number
    soal7: number
    soal8: number
    soal9: number
    soal10: number
    selesai: number
    _all: number
  }


  export type SoalAvgAggregateInputType = {
    id?: true
    nomerabsen?: true
  }

  export type SoalSumAggregateInputType = {
    id?: true
    nomerabsen?: true
  }

  export type SoalMinAggregateInputType = {
    id?: true
    start?: true
    idUser?: true
    nama?: true
    nomerabsen?: true
    kelas?: true
    soal1?: true
    soal2?: true
    soal3?: true
    soal4?: true
    soal5?: true
    soal6?: true
    soal7?: true
    soal8?: true
    soal9?: true
    soal10?: true
    selesai?: true
  }

  export type SoalMaxAggregateInputType = {
    id?: true
    start?: true
    idUser?: true
    nama?: true
    nomerabsen?: true
    kelas?: true
    soal1?: true
    soal2?: true
    soal3?: true
    soal4?: true
    soal5?: true
    soal6?: true
    soal7?: true
    soal8?: true
    soal9?: true
    soal10?: true
    selesai?: true
  }

  export type SoalCountAggregateInputType = {
    id?: true
    start?: true
    idUser?: true
    nama?: true
    nomerabsen?: true
    kelas?: true
    soal1?: true
    soal2?: true
    soal3?: true
    soal4?: true
    soal5?: true
    soal6?: true
    soal7?: true
    soal8?: true
    soal9?: true
    soal10?: true
    selesai?: true
    _all?: true
  }

  export type SoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which soal to aggregate.
     */
    where?: soalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of soals to fetch.
     */
    orderBy?: soalOrderByWithRelationInput | soalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: soalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` soals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` soals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned soals
    **/
    _count?: true | SoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoalMaxAggregateInputType
  }

  export type GetSoalAggregateType<T extends SoalAggregateArgs> = {
        [P in keyof T & keyof AggregateSoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoal[P]>
      : GetScalarType<T[P], AggregateSoal[P]>
  }




  export type soalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: soalWhereInput
    orderBy?: soalOrderByWithAggregationInput | soalOrderByWithAggregationInput[]
    by: SoalScalarFieldEnum[] | SoalScalarFieldEnum
    having?: soalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoalCountAggregateInputType | true
    _avg?: SoalAvgAggregateInputType
    _sum?: SoalSumAggregateInputType
    _min?: SoalMinAggregateInputType
    _max?: SoalMaxAggregateInputType
  }

  export type SoalGroupByOutputType = {
    id: number
    start: Date
    idUser: string
    nama: string | null
    nomerabsen: number | null
    kelas: string | null
    soal1: string | null
    soal2: string | null
    soal3: string | null
    soal4: string | null
    soal5: string | null
    soal6: string | null
    soal7: string | null
    soal8: string | null
    soal9: string | null
    soal10: string | null
    selesai: boolean
    _count: SoalCountAggregateOutputType | null
    _avg: SoalAvgAggregateOutputType | null
    _sum: SoalSumAggregateOutputType | null
    _min: SoalMinAggregateOutputType | null
    _max: SoalMaxAggregateOutputType | null
  }

  type GetSoalGroupByPayload<T extends soalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoalGroupByOutputType[P]>
            : GetScalarType<T[P], SoalGroupByOutputType[P]>
        }
      >
    >


  export type soalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    idUser?: boolean
    nama?: boolean
    nomerabsen?: boolean
    kelas?: boolean
    soal1?: boolean
    soal2?: boolean
    soal3?: boolean
    soal4?: boolean
    soal5?: boolean
    soal6?: boolean
    soal7?: boolean
    soal8?: boolean
    soal9?: boolean
    soal10?: boolean
    selesai?: boolean
  }, ExtArgs["result"]["soal"]>

  export type soalSelectScalar = {
    id?: boolean
    start?: boolean
    idUser?: boolean
    nama?: boolean
    nomerabsen?: boolean
    kelas?: boolean
    soal1?: boolean
    soal2?: boolean
    soal3?: boolean
    soal4?: boolean
    soal5?: boolean
    soal6?: boolean
    soal7?: boolean
    soal8?: boolean
    soal9?: boolean
    soal10?: boolean
    selesai?: boolean
  }


  export type $soalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "soal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      idUser: string
      nama: string | null
      nomerabsen: number | null
      kelas: string | null
      soal1: string | null
      soal2: string | null
      soal3: string | null
      soal4: string | null
      soal5: string | null
      soal6: string | null
      soal7: string | null
      soal8: string | null
      soal9: string | null
      soal10: string | null
      selesai: boolean
    }, ExtArgs["result"]["soal"]>
    composites: {}
  }


  type soalGetPayload<S extends boolean | null | undefined | soalDefaultArgs> = $Result.GetResult<Prisma.$soalPayload, S>

  type soalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<soalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SoalCountAggregateInputType | true
    }

  export interface soalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['soal'], meta: { name: 'soal' } }
    /**
     * Find zero or one Soal that matches the filter.
     * @param {soalFindUniqueArgs} args - Arguments to find a Soal
     * @example
     * // Get one Soal
     * const soal = await prisma.soal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends soalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, soalFindUniqueArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Soal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {soalFindUniqueOrThrowArgs} args - Arguments to find a Soal
     * @example
     * // Get one Soal
     * const soal = await prisma.soal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends soalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, soalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Soal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soalFindFirstArgs} args - Arguments to find a Soal
     * @example
     * // Get one Soal
     * const soal = await prisma.soal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends soalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, soalFindFirstArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Soal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soalFindFirstOrThrowArgs} args - Arguments to find a Soal
     * @example
     * // Get one Soal
     * const soal = await prisma.soal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends soalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, soalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Soals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Soals
     * const soals = await prisma.soal.findMany()
     * 
     * // Get first 10 Soals
     * const soals = await prisma.soal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soalWithIdOnly = await prisma.soal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends soalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, soalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Soal.
     * @param {soalCreateArgs} args - Arguments to create a Soal.
     * @example
     * // Create one Soal
     * const Soal = await prisma.soal.create({
     *   data: {
     *     // ... data to create a Soal
     *   }
     * })
     * 
    **/
    create<T extends soalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, soalCreateArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Soals.
     *     @param {soalCreateManyArgs} args - Arguments to create many Soals.
     *     @example
     *     // Create many Soals
     *     const soal = await prisma.soal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends soalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, soalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Soal.
     * @param {soalDeleteArgs} args - Arguments to delete one Soal.
     * @example
     * // Delete one Soal
     * const Soal = await prisma.soal.delete({
     *   where: {
     *     // ... filter to delete one Soal
     *   }
     * })
     * 
    **/
    delete<T extends soalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, soalDeleteArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Soal.
     * @param {soalUpdateArgs} args - Arguments to update one Soal.
     * @example
     * // Update one Soal
     * const soal = await prisma.soal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends soalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, soalUpdateArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Soals.
     * @param {soalDeleteManyArgs} args - Arguments to filter Soals to delete.
     * @example
     * // Delete a few Soals
     * const { count } = await prisma.soal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends soalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, soalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Soals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Soals
     * const soal = await prisma.soal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends soalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, soalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Soal.
     * @param {soalUpsertArgs} args - Arguments to update or create a Soal.
     * @example
     * // Update or create a Soal
     * const soal = await prisma.soal.upsert({
     *   create: {
     *     // ... data to create a Soal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Soal we want to update
     *   }
     * })
    **/
    upsert<T extends soalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, soalUpsertArgs<ExtArgs>>
    ): Prisma__soalClient<$Result.GetResult<Prisma.$soalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Soals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soalCountArgs} args - Arguments to filter Soals to count.
     * @example
     * // Count the number of Soals
     * const count = await prisma.soal.count({
     *   where: {
     *     // ... the filter for the Soals we want to count
     *   }
     * })
    **/
    count<T extends soalCountArgs>(
      args?: Subset<T, soalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Soal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SoalAggregateArgs>(args: Subset<T, SoalAggregateArgs>): Prisma.PrismaPromise<GetSoalAggregateType<T>>

    /**
     * Group by Soal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soalGroupByArgs} args - Group by arguments.
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
      T extends soalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: soalGroupByArgs['orderBy'] }
        : { orderBy?: soalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, soalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the soal model
   */
  readonly fields: soalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for soal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__soalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the soal model
   */ 
  interface soalFieldRefs {
    readonly id: FieldRef<"soal", 'Int'>
    readonly start: FieldRef<"soal", 'DateTime'>
    readonly idUser: FieldRef<"soal", 'String'>
    readonly nama: FieldRef<"soal", 'String'>
    readonly nomerabsen: FieldRef<"soal", 'Int'>
    readonly kelas: FieldRef<"soal", 'String'>
    readonly soal1: FieldRef<"soal", 'String'>
    readonly soal2: FieldRef<"soal", 'String'>
    readonly soal3: FieldRef<"soal", 'String'>
    readonly soal4: FieldRef<"soal", 'String'>
    readonly soal5: FieldRef<"soal", 'String'>
    readonly soal6: FieldRef<"soal", 'String'>
    readonly soal7: FieldRef<"soal", 'String'>
    readonly soal8: FieldRef<"soal", 'String'>
    readonly soal9: FieldRef<"soal", 'String'>
    readonly soal10: FieldRef<"soal", 'String'>
    readonly selesai: FieldRef<"soal", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * soal findUnique
   */
  export type soalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * Filter, which soal to fetch.
     */
    where: soalWhereUniqueInput
  }


  /**
   * soal findUniqueOrThrow
   */
  export type soalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * Filter, which soal to fetch.
     */
    where: soalWhereUniqueInput
  }


  /**
   * soal findFirst
   */
  export type soalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * Filter, which soal to fetch.
     */
    where?: soalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of soals to fetch.
     */
    orderBy?: soalOrderByWithRelationInput | soalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for soals.
     */
    cursor?: soalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` soals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` soals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of soals.
     */
    distinct?: SoalScalarFieldEnum | SoalScalarFieldEnum[]
  }


  /**
   * soal findFirstOrThrow
   */
  export type soalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * Filter, which soal to fetch.
     */
    where?: soalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of soals to fetch.
     */
    orderBy?: soalOrderByWithRelationInput | soalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for soals.
     */
    cursor?: soalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` soals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` soals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of soals.
     */
    distinct?: SoalScalarFieldEnum | SoalScalarFieldEnum[]
  }


  /**
   * soal findMany
   */
  export type soalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * Filter, which soals to fetch.
     */
    where?: soalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of soals to fetch.
     */
    orderBy?: soalOrderByWithRelationInput | soalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing soals.
     */
    cursor?: soalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` soals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` soals.
     */
    skip?: number
    distinct?: SoalScalarFieldEnum | SoalScalarFieldEnum[]
  }


  /**
   * soal create
   */
  export type soalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * The data needed to create a soal.
     */
    data: XOR<soalCreateInput, soalUncheckedCreateInput>
  }


  /**
   * soal createMany
   */
  export type soalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many soals.
     */
    data: soalCreateManyInput | soalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * soal update
   */
  export type soalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * The data needed to update a soal.
     */
    data: XOR<soalUpdateInput, soalUncheckedUpdateInput>
    /**
     * Choose, which soal to update.
     */
    where: soalWhereUniqueInput
  }


  /**
   * soal updateMany
   */
  export type soalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update soals.
     */
    data: XOR<soalUpdateManyMutationInput, soalUncheckedUpdateManyInput>
    /**
     * Filter which soals to update
     */
    where?: soalWhereInput
  }


  /**
   * soal upsert
   */
  export type soalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * The filter to search for the soal to update in case it exists.
     */
    where: soalWhereUniqueInput
    /**
     * In case the soal found by the `where` argument doesn't exist, create a new soal with this data.
     */
    create: XOR<soalCreateInput, soalUncheckedCreateInput>
    /**
     * In case the soal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<soalUpdateInput, soalUncheckedUpdateInput>
  }


  /**
   * soal delete
   */
  export type soalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
    /**
     * Filter which soal to delete.
     */
    where: soalWhereUniqueInput
  }


  /**
   * soal deleteMany
   */
  export type soalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which soals to delete
     */
    where?: soalWhereInput
  }


  /**
   * soal without action
   */
  export type soalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the soal
     */
    select?: soalSelect<ExtArgs> | null
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


  export const SoalScalarFieldEnum: {
    id: 'id',
    start: 'start',
    idUser: 'idUser',
    nama: 'nama',
    nomerabsen: 'nomerabsen',
    kelas: 'kelas',
    soal1: 'soal1',
    soal2: 'soal2',
    soal3: 'soal3',
    soal4: 'soal4',
    soal5: 'soal5',
    soal6: 'soal6',
    soal7: 'soal7',
    soal8: 'soal8',
    soal9: 'soal9',
    soal10: 'soal10',
    selesai: 'selesai'
  };

  export type SoalScalarFieldEnum = (typeof SoalScalarFieldEnum)[keyof typeof SoalScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type soalWhereInput = {
    AND?: soalWhereInput | soalWhereInput[]
    OR?: soalWhereInput[]
    NOT?: soalWhereInput | soalWhereInput[]
    id?: IntFilter<"soal"> | number
    start?: DateTimeFilter<"soal"> | Date | string
    idUser?: StringFilter<"soal"> | string
    nama?: StringNullableFilter<"soal"> | string | null
    nomerabsen?: IntNullableFilter<"soal"> | number | null
    kelas?: StringNullableFilter<"soal"> | string | null
    soal1?: StringNullableFilter<"soal"> | string | null
    soal2?: StringNullableFilter<"soal"> | string | null
    soal3?: StringNullableFilter<"soal"> | string | null
    soal4?: StringNullableFilter<"soal"> | string | null
    soal5?: StringNullableFilter<"soal"> | string | null
    soal6?: StringNullableFilter<"soal"> | string | null
    soal7?: StringNullableFilter<"soal"> | string | null
    soal8?: StringNullableFilter<"soal"> | string | null
    soal9?: StringNullableFilter<"soal"> | string | null
    soal10?: StringNullableFilter<"soal"> | string | null
    selesai?: BoolFilter<"soal"> | boolean
  }

  export type soalOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    idUser?: SortOrder
    nama?: SortOrderInput | SortOrder
    nomerabsen?: SortOrderInput | SortOrder
    kelas?: SortOrderInput | SortOrder
    soal1?: SortOrderInput | SortOrder
    soal2?: SortOrderInput | SortOrder
    soal3?: SortOrderInput | SortOrder
    soal4?: SortOrderInput | SortOrder
    soal5?: SortOrderInput | SortOrder
    soal6?: SortOrderInput | SortOrder
    soal7?: SortOrderInput | SortOrder
    soal8?: SortOrderInput | SortOrder
    soal9?: SortOrderInput | SortOrder
    soal10?: SortOrderInput | SortOrder
    selesai?: SortOrder
  }

  export type soalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idUser?: string
    AND?: soalWhereInput | soalWhereInput[]
    OR?: soalWhereInput[]
    NOT?: soalWhereInput | soalWhereInput[]
    start?: DateTimeFilter<"soal"> | Date | string
    nama?: StringNullableFilter<"soal"> | string | null
    nomerabsen?: IntNullableFilter<"soal"> | number | null
    kelas?: StringNullableFilter<"soal"> | string | null
    soal1?: StringNullableFilter<"soal"> | string | null
    soal2?: StringNullableFilter<"soal"> | string | null
    soal3?: StringNullableFilter<"soal"> | string | null
    soal4?: StringNullableFilter<"soal"> | string | null
    soal5?: StringNullableFilter<"soal"> | string | null
    soal6?: StringNullableFilter<"soal"> | string | null
    soal7?: StringNullableFilter<"soal"> | string | null
    soal8?: StringNullableFilter<"soal"> | string | null
    soal9?: StringNullableFilter<"soal"> | string | null
    soal10?: StringNullableFilter<"soal"> | string | null
    selesai?: BoolFilter<"soal"> | boolean
  }, "id" | "idUser">

  export type soalOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    idUser?: SortOrder
    nama?: SortOrderInput | SortOrder
    nomerabsen?: SortOrderInput | SortOrder
    kelas?: SortOrderInput | SortOrder
    soal1?: SortOrderInput | SortOrder
    soal2?: SortOrderInput | SortOrder
    soal3?: SortOrderInput | SortOrder
    soal4?: SortOrderInput | SortOrder
    soal5?: SortOrderInput | SortOrder
    soal6?: SortOrderInput | SortOrder
    soal7?: SortOrderInput | SortOrder
    soal8?: SortOrderInput | SortOrder
    soal9?: SortOrderInput | SortOrder
    soal10?: SortOrderInput | SortOrder
    selesai?: SortOrder
    _count?: soalCountOrderByAggregateInput
    _avg?: soalAvgOrderByAggregateInput
    _max?: soalMaxOrderByAggregateInput
    _min?: soalMinOrderByAggregateInput
    _sum?: soalSumOrderByAggregateInput
  }

  export type soalScalarWhereWithAggregatesInput = {
    AND?: soalScalarWhereWithAggregatesInput | soalScalarWhereWithAggregatesInput[]
    OR?: soalScalarWhereWithAggregatesInput[]
    NOT?: soalScalarWhereWithAggregatesInput | soalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"soal"> | number
    start?: DateTimeWithAggregatesFilter<"soal"> | Date | string
    idUser?: StringWithAggregatesFilter<"soal"> | string
    nama?: StringNullableWithAggregatesFilter<"soal"> | string | null
    nomerabsen?: IntNullableWithAggregatesFilter<"soal"> | number | null
    kelas?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal1?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal2?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal3?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal4?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal5?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal6?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal7?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal8?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal9?: StringNullableWithAggregatesFilter<"soal"> | string | null
    soal10?: StringNullableWithAggregatesFilter<"soal"> | string | null
    selesai?: BoolWithAggregatesFilter<"soal"> | boolean
  }

  export type soalCreateInput = {
    start?: Date | string
    idUser: string
    nama?: string | null
    nomerabsen?: number | null
    kelas?: string | null
    soal1?: string | null
    soal2?: string | null
    soal3?: string | null
    soal4?: string | null
    soal5?: string | null
    soal6?: string | null
    soal7?: string | null
    soal8?: string | null
    soal9?: string | null
    soal10?: string | null
    selesai?: boolean
  }

  export type soalUncheckedCreateInput = {
    id?: number
    start?: Date | string
    idUser: string
    nama?: string | null
    nomerabsen?: number | null
    kelas?: string | null
    soal1?: string | null
    soal2?: string | null
    soal3?: string | null
    soal4?: string | null
    soal5?: string | null
    soal6?: string | null
    soal7?: string | null
    soal8?: string | null
    soal9?: string | null
    soal10?: string | null
    selesai?: boolean
  }

  export type soalUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nomerabsen?: NullableIntFieldUpdateOperationsInput | number | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    soal1?: NullableStringFieldUpdateOperationsInput | string | null
    soal2?: NullableStringFieldUpdateOperationsInput | string | null
    soal3?: NullableStringFieldUpdateOperationsInput | string | null
    soal4?: NullableStringFieldUpdateOperationsInput | string | null
    soal5?: NullableStringFieldUpdateOperationsInput | string | null
    soal6?: NullableStringFieldUpdateOperationsInput | string | null
    soal7?: NullableStringFieldUpdateOperationsInput | string | null
    soal8?: NullableStringFieldUpdateOperationsInput | string | null
    soal9?: NullableStringFieldUpdateOperationsInput | string | null
    soal10?: NullableStringFieldUpdateOperationsInput | string | null
    selesai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type soalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nomerabsen?: NullableIntFieldUpdateOperationsInput | number | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    soal1?: NullableStringFieldUpdateOperationsInput | string | null
    soal2?: NullableStringFieldUpdateOperationsInput | string | null
    soal3?: NullableStringFieldUpdateOperationsInput | string | null
    soal4?: NullableStringFieldUpdateOperationsInput | string | null
    soal5?: NullableStringFieldUpdateOperationsInput | string | null
    soal6?: NullableStringFieldUpdateOperationsInput | string | null
    soal7?: NullableStringFieldUpdateOperationsInput | string | null
    soal8?: NullableStringFieldUpdateOperationsInput | string | null
    soal9?: NullableStringFieldUpdateOperationsInput | string | null
    soal10?: NullableStringFieldUpdateOperationsInput | string | null
    selesai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type soalCreateManyInput = {
    id?: number
    start?: Date | string
    idUser: string
    nama?: string | null
    nomerabsen?: number | null
    kelas?: string | null
    soal1?: string | null
    soal2?: string | null
    soal3?: string | null
    soal4?: string | null
    soal5?: string | null
    soal6?: string | null
    soal7?: string | null
    soal8?: string | null
    soal9?: string | null
    soal10?: string | null
    selesai?: boolean
  }

  export type soalUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nomerabsen?: NullableIntFieldUpdateOperationsInput | number | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    soal1?: NullableStringFieldUpdateOperationsInput | string | null
    soal2?: NullableStringFieldUpdateOperationsInput | string | null
    soal3?: NullableStringFieldUpdateOperationsInput | string | null
    soal4?: NullableStringFieldUpdateOperationsInput | string | null
    soal5?: NullableStringFieldUpdateOperationsInput | string | null
    soal6?: NullableStringFieldUpdateOperationsInput | string | null
    soal7?: NullableStringFieldUpdateOperationsInput | string | null
    soal8?: NullableStringFieldUpdateOperationsInput | string | null
    soal9?: NullableStringFieldUpdateOperationsInput | string | null
    soal10?: NullableStringFieldUpdateOperationsInput | string | null
    selesai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type soalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nomerabsen?: NullableIntFieldUpdateOperationsInput | number | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    soal1?: NullableStringFieldUpdateOperationsInput | string | null
    soal2?: NullableStringFieldUpdateOperationsInput | string | null
    soal3?: NullableStringFieldUpdateOperationsInput | string | null
    soal4?: NullableStringFieldUpdateOperationsInput | string | null
    soal5?: NullableStringFieldUpdateOperationsInput | string | null
    soal6?: NullableStringFieldUpdateOperationsInput | string | null
    soal7?: NullableStringFieldUpdateOperationsInput | string | null
    soal8?: NullableStringFieldUpdateOperationsInput | string | null
    soal9?: NullableStringFieldUpdateOperationsInput | string | null
    soal10?: NullableStringFieldUpdateOperationsInput | string | null
    selesai?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type soalCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    nomerabsen?: SortOrder
    kelas?: SortOrder
    soal1?: SortOrder
    soal2?: SortOrder
    soal3?: SortOrder
    soal4?: SortOrder
    soal5?: SortOrder
    soal6?: SortOrder
    soal7?: SortOrder
    soal8?: SortOrder
    soal9?: SortOrder
    soal10?: SortOrder
    selesai?: SortOrder
  }

  export type soalAvgOrderByAggregateInput = {
    id?: SortOrder
    nomerabsen?: SortOrder
  }

  export type soalMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    nomerabsen?: SortOrder
    kelas?: SortOrder
    soal1?: SortOrder
    soal2?: SortOrder
    soal3?: SortOrder
    soal4?: SortOrder
    soal5?: SortOrder
    soal6?: SortOrder
    soal7?: SortOrder
    soal8?: SortOrder
    soal9?: SortOrder
    soal10?: SortOrder
    selesai?: SortOrder
  }

  export type soalMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    nomerabsen?: SortOrder
    kelas?: SortOrder
    soal1?: SortOrder
    soal2?: SortOrder
    soal3?: SortOrder
    soal4?: SortOrder
    soal5?: SortOrder
    soal6?: SortOrder
    soal7?: SortOrder
    soal8?: SortOrder
    soal9?: SortOrder
    soal10?: SortOrder
    selesai?: SortOrder
  }

  export type soalSumOrderByAggregateInput = {
    id?: SortOrder
    nomerabsen?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use soalDefaultArgs instead
     */
    export type soalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = soalDefaultArgs<ExtArgs>

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