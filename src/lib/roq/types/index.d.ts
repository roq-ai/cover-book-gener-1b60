/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model cover_book
 *
 */
export type cover_book = $Result.DefaultSelection<Prisma.$cover_bookPayload>;
/**
 * Model genre
 *
 */
export type genre = $Result.DefaultSelection<Prisma.$genrePayload>;
/**
 * Model language
 *
 */
export type language = $Result.DefaultSelection<Prisma.$languagePayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.cover_book`: Exposes CRUD operations for the **cover_book** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cover_books
   * const cover_books = await prisma.cover_book.findMany()
   * ```
   */
  get cover_book(): Prisma.cover_bookDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **genre** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Genres
   * const genres = await prisma.genre.findMany()
   * ```
   */
  get genre(): Prisma.genreDelegate<ExtArgs>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **language** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Languages
   * const languages = await prisma.language.findMany()
   * ```
   */
  get language(): Prisma.languageDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    cover_book: 'cover_book';
    genre: 'genre';
    language: 'language';
    review: 'review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'cover_book' | 'genre' | 'language' | 'review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      cover_book: {
        payload: Prisma.$cover_bookPayload<ExtArgs>;
        fields: Prisma.cover_bookFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.cover_bookFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.cover_bookFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>;
          };
          findFirst: {
            args: Prisma.cover_bookFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.cover_bookFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>;
          };
          findMany: {
            args: Prisma.cover_bookFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>[];
          };
          create: {
            args: Prisma.cover_bookCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>;
          };
          createMany: {
            args: Prisma.cover_bookCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.cover_bookDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>;
          };
          update: {
            args: Prisma.cover_bookUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>;
          };
          deleteMany: {
            args: Prisma.cover_bookDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.cover_bookUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.cover_bookUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cover_bookPayload>;
          };
          aggregate: {
            args: Prisma.Cover_bookAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCover_book>;
          };
          groupBy: {
            args: Prisma.cover_bookGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Cover_bookGroupByOutputType>[];
          };
          count: {
            args: Prisma.cover_bookCountArgs<ExtArgs>;
            result: $Utils.Optional<Cover_bookCountAggregateOutputType> | number;
          };
        };
      };
      genre: {
        payload: Prisma.$genrePayload<ExtArgs>;
        fields: Prisma.genreFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.genreFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.genreFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>;
          };
          findFirst: {
            args: Prisma.genreFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.genreFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>;
          };
          findMany: {
            args: Prisma.genreFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[];
          };
          create: {
            args: Prisma.genreCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>;
          };
          createMany: {
            args: Prisma.genreCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.genreDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>;
          };
          update: {
            args: Prisma.genreUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>;
          };
          deleteMany: {
            args: Prisma.genreDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.genreUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.genreUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$genrePayload>;
          };
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGenre>;
          };
          groupBy: {
            args: Prisma.genreGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GenreGroupByOutputType>[];
          };
          count: {
            args: Prisma.genreCountArgs<ExtArgs>;
            result: $Utils.Optional<GenreCountAggregateOutputType> | number;
          };
        };
      };
      language: {
        payload: Prisma.$languagePayload<ExtArgs>;
        fields: Prisma.languageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.languageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.languageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>;
          };
          findFirst: {
            args: Prisma.languageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.languageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>;
          };
          findMany: {
            args: Prisma.languageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>[];
          };
          create: {
            args: Prisma.languageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>;
          };
          createMany: {
            args: Prisma.languageCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.languageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>;
          };
          update: {
            args: Prisma.languageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>;
          };
          deleteMany: {
            args: Prisma.languageDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.languageUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.languageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$languagePayload>;
          };
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLanguage>;
          };
          groupBy: {
            args: Prisma.languageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LanguageGroupByOutputType>[];
          };
          count: {
            args: Prisma.languageCountArgs<ExtArgs>;
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    cover_book: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cover_book?: boolean | CompanyCountOutputTypeCountCover_bookArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCover_bookArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: cover_bookWhereInput;
  };

  /**
   * Count Type Cover_bookCountOutputType
   */

  export type Cover_bookCountOutputType = {
    review: number;
  };

  export type Cover_bookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | Cover_bookCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * Cover_bookCountOutputType without action
   */
  export type Cover_bookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Cover_bookCountOutputType
       */
      select?: Cover_bookCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * Cover_bookCountOutputType without action
   */
  export type Cover_bookCountOutputTypeCountReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    cover_book: number;
    review: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    cover_book?: boolean | UserCountOutputTypeCountCover_bookArgs;
    review?: boolean | UserCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCover_bookArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: cover_bookWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      cover_book?: boolean | company$cover_bookArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    cover_book?: boolean | company$cover_bookArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      cover_book: Prisma.$cover_bookPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    cover_book<T extends company$cover_bookArgs<ExtArgs> = {}>(
      args?: Subset<T, company$cover_bookArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.cover_book
   */
  export type company$cover_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    where?: cover_bookWhereInput;
    orderBy?: cover_bookOrderByWithRelationInput | cover_bookOrderByWithRelationInput[];
    cursor?: cover_bookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Cover_bookScalarFieldEnum | Cover_bookScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model cover_book
   */

  export type AggregateCover_book = {
    _count: Cover_bookCountAggregateOutputType | null;
    _avg: Cover_bookAvgAggregateOutputType | null;
    _sum: Cover_bookSumAggregateOutputType | null;
    _min: Cover_bookMinAggregateOutputType | null;
    _max: Cover_bookMaxAggregateOutputType | null;
  };

  export type Cover_bookAvgAggregateOutputType = {
    publish_year: number | null;
  };

  export type Cover_bookSumAggregateOutputType = {
    publish_year: number | null;
  };

  export type Cover_bookMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    author: string | null;
    publish_year: number | null;
    cover_book_genre: string | null;
    cover_book_language: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Cover_bookMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    author: string | null;
    publish_year: number | null;
    cover_book_genre: string | null;
    cover_book_language: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Cover_bookCountAggregateOutputType = {
    id: number;
    title: number;
    author: number;
    publish_year: number;
    cover_book_genre: number;
    cover_book_language: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Cover_bookAvgAggregateInputType = {
    publish_year?: true;
  };

  export type Cover_bookSumAggregateInputType = {
    publish_year?: true;
  };

  export type Cover_bookMinAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    publish_year?: true;
    cover_book_genre?: true;
    cover_book_language?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Cover_bookMaxAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    publish_year?: true;
    cover_book_genre?: true;
    cover_book_language?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Cover_bookCountAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    publish_year?: true;
    cover_book_genre?: true;
    cover_book_language?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Cover_bookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cover_book to aggregate.
     */
    where?: cover_bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cover_books to fetch.
     */
    orderBy?: cover_bookOrderByWithRelationInput | cover_bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: cover_bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cover_books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cover_books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cover_books
     **/
    _count?: true | Cover_bookCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Cover_bookAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Cover_bookSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Cover_bookMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Cover_bookMaxAggregateInputType;
  };

  export type GetCover_bookAggregateType<T extends Cover_bookAggregateArgs> = {
    [P in keyof T & keyof AggregateCover_book]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCover_book[P]>
      : GetScalarType<T[P], AggregateCover_book[P]>;
  };

  export type cover_bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cover_bookWhereInput;
    orderBy?: cover_bookOrderByWithAggregationInput | cover_bookOrderByWithAggregationInput[];
    by: Cover_bookScalarFieldEnum[] | Cover_bookScalarFieldEnum;
    having?: cover_bookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cover_bookCountAggregateInputType | true;
    _avg?: Cover_bookAvgAggregateInputType;
    _sum?: Cover_bookSumAggregateInputType;
    _min?: Cover_bookMinAggregateInputType;
    _max?: Cover_bookMaxAggregateInputType;
  };

  export type Cover_bookGroupByOutputType = {
    id: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Cover_bookCountAggregateOutputType | null;
    _avg: Cover_bookAvgAggregateOutputType | null;
    _sum: Cover_bookSumAggregateOutputType | null;
    _min: Cover_bookMinAggregateOutputType | null;
    _max: Cover_bookMaxAggregateOutputType | null;
  };

  type GetCover_bookGroupByPayload<T extends cover_bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cover_bookGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Cover_bookGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Cover_bookGroupByOutputType[P]>
          : GetScalarType<T[P], Cover_bookGroupByOutputType[P]>;
      }
    >
  >;

  export type cover_bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        author?: boolean;
        publish_year?: boolean;
        cover_book_genre?: boolean;
        cover_book_language?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        review?: boolean | cover_book$reviewArgs<ExtArgs>;
        _count?: boolean | Cover_bookCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['cover_book']
    >;

  export type cover_bookSelectScalar = {
    id?: boolean;
    title?: boolean;
    author?: boolean;
    publish_year?: boolean;
    cover_book_genre?: boolean;
    cover_book_language?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type cover_bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    review?: boolean | cover_book$reviewArgs<ExtArgs>;
    _count?: boolean | Cover_bookCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $cover_bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'cover_book';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        author: string;
        publish_year: number;
        cover_book_genre: string;
        cover_book_language: string;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['cover_book']
    >;
    composites: {};
  };

  type cover_bookGetPayload<S extends boolean | null | undefined | cover_bookDefaultArgs> = $Result.GetResult<
    Prisma.$cover_bookPayload,
    S
  >;

  type cover_bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    cover_bookFindManyArgs,
    'select' | 'include'
  > & {
    select?: Cover_bookCountAggregateInputType | true;
  };

  export interface cover_bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cover_book']; meta: { name: 'cover_book' } };
    /**
     * Find zero or one Cover_book that matches the filter.
     * @param {cover_bookFindUniqueArgs} args - Arguments to find a Cover_book
     * @example
     * // Get one Cover_book
     * const cover_book = await prisma.cover_book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends cover_bookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cover_bookFindUniqueArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<
      $Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Cover_book that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {cover_bookFindUniqueOrThrowArgs} args - Arguments to find a Cover_book
     * @example
     * // Get one Cover_book
     * const cover_book = await prisma.cover_book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends cover_bookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cover_bookFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<
      $Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Cover_book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cover_bookFindFirstArgs} args - Arguments to find a Cover_book
     * @example
     * // Get one Cover_book
     * const cover_book = await prisma.cover_book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends cover_bookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cover_bookFindFirstArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<
      $Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Cover_book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cover_bookFindFirstOrThrowArgs} args - Arguments to find a Cover_book
     * @example
     * // Get one Cover_book
     * const cover_book = await prisma.cover_book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends cover_bookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cover_bookFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<
      $Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Cover_books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cover_bookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cover_books
     * const cover_books = await prisma.cover_book.findMany()
     *
     * // Get first 10 Cover_books
     * const cover_books = await prisma.cover_book.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cover_bookWithIdOnly = await prisma.cover_book.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends cover_bookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cover_bookFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Cover_book.
     * @param {cover_bookCreateArgs} args - Arguments to create a Cover_book.
     * @example
     * // Create one Cover_book
     * const Cover_book = await prisma.cover_book.create({
     *   data: {
     *     // ... data to create a Cover_book
     *   }
     * })
     *
     **/
    create<T extends cover_bookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cover_bookCreateArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cover_books.
     *     @param {cover_bookCreateManyArgs} args - Arguments to create many Cover_books.
     *     @example
     *     // Create many Cover_books
     *     const cover_book = await prisma.cover_book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends cover_bookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cover_bookCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Cover_book.
     * @param {cover_bookDeleteArgs} args - Arguments to delete one Cover_book.
     * @example
     * // Delete one Cover_book
     * const Cover_book = await prisma.cover_book.delete({
     *   where: {
     *     // ... filter to delete one Cover_book
     *   }
     * })
     *
     **/
    delete<T extends cover_bookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cover_bookDeleteArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Cover_book.
     * @param {cover_bookUpdateArgs} args - Arguments to update one Cover_book.
     * @example
     * // Update one Cover_book
     * const cover_book = await prisma.cover_book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends cover_bookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cover_bookUpdateArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cover_books.
     * @param {cover_bookDeleteManyArgs} args - Arguments to filter Cover_books to delete.
     * @example
     * // Delete a few Cover_books
     * const { count } = await prisma.cover_book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends cover_bookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cover_bookDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cover_books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cover_bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cover_books
     * const cover_book = await prisma.cover_book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends cover_bookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cover_bookUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Cover_book.
     * @param {cover_bookUpsertArgs} args - Arguments to update or create a Cover_book.
     * @example
     * // Update or create a Cover_book
     * const cover_book = await prisma.cover_book.upsert({
     *   create: {
     *     // ... data to create a Cover_book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cover_book we want to update
     *   }
     * })
     **/
    upsert<T extends cover_bookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cover_bookUpsertArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cover_books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cover_bookCountArgs} args - Arguments to filter Cover_books to count.
     * @example
     * // Count the number of Cover_books
     * const count = await prisma.cover_book.count({
     *   where: {
     *     // ... the filter for the Cover_books we want to count
     *   }
     * })
     **/
    count<T extends cover_bookCountArgs>(
      args?: Subset<T, cover_bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cover_bookCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cover_book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cover_bookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cover_bookAggregateArgs>(
      args: Subset<T, Cover_bookAggregateArgs>,
    ): Prisma.PrismaPromise<GetCover_bookAggregateType<T>>;

    /**
     * Group by Cover_book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cover_bookGroupByArgs} args - Group by arguments.
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
      T extends cover_bookGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cover_bookGroupByArgs['orderBy'] }
        : { orderBy?: cover_bookGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, cover_bookGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCover_bookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cover_book model
     */
    readonly fields: cover_bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cover_book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cover_bookClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    review<T extends cover_book$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, cover_book$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the cover_book model
   */
  interface cover_bookFieldRefs {
    readonly id: FieldRef<'cover_book', 'String'>;
    readonly title: FieldRef<'cover_book', 'String'>;
    readonly author: FieldRef<'cover_book', 'String'>;
    readonly publish_year: FieldRef<'cover_book', 'Int'>;
    readonly cover_book_genre: FieldRef<'cover_book', 'String'>;
    readonly cover_book_language: FieldRef<'cover_book', 'String'>;
    readonly user_id: FieldRef<'cover_book', 'String'>;
    readonly company_id: FieldRef<'cover_book', 'String'>;
    readonly created_at: FieldRef<'cover_book', 'DateTime'>;
    readonly updated_at: FieldRef<'cover_book', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * cover_book findUnique
   */
  export type cover_bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * Filter, which cover_book to fetch.
     */
    where: cover_bookWhereUniqueInput;
  };

  /**
   * cover_book findUniqueOrThrow
   */
  export type cover_bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * Filter, which cover_book to fetch.
     */
    where: cover_bookWhereUniqueInput;
  };

  /**
   * cover_book findFirst
   */
  export type cover_bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * Filter, which cover_book to fetch.
     */
    where?: cover_bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cover_books to fetch.
     */
    orderBy?: cover_bookOrderByWithRelationInput | cover_bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cover_books.
     */
    cursor?: cover_bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cover_books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cover_books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cover_books.
     */
    distinct?: Cover_bookScalarFieldEnum | Cover_bookScalarFieldEnum[];
  };

  /**
   * cover_book findFirstOrThrow
   */
  export type cover_bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * Filter, which cover_book to fetch.
     */
    where?: cover_bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cover_books to fetch.
     */
    orderBy?: cover_bookOrderByWithRelationInput | cover_bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cover_books.
     */
    cursor?: cover_bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cover_books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cover_books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cover_books.
     */
    distinct?: Cover_bookScalarFieldEnum | Cover_bookScalarFieldEnum[];
  };

  /**
   * cover_book findMany
   */
  export type cover_bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * Filter, which cover_books to fetch.
     */
    where?: cover_bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cover_books to fetch.
     */
    orderBy?: cover_bookOrderByWithRelationInput | cover_bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cover_books.
     */
    cursor?: cover_bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cover_books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cover_books.
     */
    skip?: number;
    distinct?: Cover_bookScalarFieldEnum | Cover_bookScalarFieldEnum[];
  };

  /**
   * cover_book create
   */
  export type cover_bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * The data needed to create a cover_book.
     */
    data: XOR<cover_bookCreateInput, cover_bookUncheckedCreateInput>;
  };

  /**
   * cover_book createMany
   */
  export type cover_bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cover_books.
     */
    data: cover_bookCreateManyInput | cover_bookCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * cover_book update
   */
  export type cover_bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * The data needed to update a cover_book.
     */
    data: XOR<cover_bookUpdateInput, cover_bookUncheckedUpdateInput>;
    /**
     * Choose, which cover_book to update.
     */
    where: cover_bookWhereUniqueInput;
  };

  /**
   * cover_book updateMany
   */
  export type cover_bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cover_books.
     */
    data: XOR<cover_bookUpdateManyMutationInput, cover_bookUncheckedUpdateManyInput>;
    /**
     * Filter which cover_books to update
     */
    where?: cover_bookWhereInput;
  };

  /**
   * cover_book upsert
   */
  export type cover_bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * The filter to search for the cover_book to update in case it exists.
     */
    where: cover_bookWhereUniqueInput;
    /**
     * In case the cover_book found by the `where` argument doesn't exist, create a new cover_book with this data.
     */
    create: XOR<cover_bookCreateInput, cover_bookUncheckedCreateInput>;
    /**
     * In case the cover_book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cover_bookUpdateInput, cover_bookUncheckedUpdateInput>;
  };

  /**
   * cover_book delete
   */
  export type cover_bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    /**
     * Filter which cover_book to delete.
     */
    where: cover_bookWhereUniqueInput;
  };

  /**
   * cover_book deleteMany
   */
  export type cover_bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cover_books to delete
     */
    where?: cover_bookWhereInput;
  };

  /**
   * cover_book.review
   */
  export type cover_book$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * cover_book without action
   */
  export type cover_bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
  };

  /**
   * Model genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null;
    _min: GenreMinAggregateOutputType | null;
    _max: GenreMaxAggregateOutputType | null;
  };

  export type GenreMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GenreMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GenreCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GenreMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GenreMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GenreCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genre to aggregate.
     */
    where?: genreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: genreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` genres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned genres
     **/
    _count?: true | GenreCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GenreMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GenreMaxAggregateInputType;
  };

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
    [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>;
  };

  export type genreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genreWhereInput;
    orderBy?: genreOrderByWithAggregationInput | genreOrderByWithAggregationInput[];
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum;
    having?: genreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GenreCountAggregateInputType | true;
    _min?: GenreMinAggregateInputType;
    _max?: GenreMaxAggregateInputType;
  };

  export type GenreGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: GenreCountAggregateOutputType | null;
    _min: GenreMinAggregateOutputType | null;
    _max: GenreMaxAggregateOutputType | null;
  };

  type GetGenreGroupByPayload<T extends genreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GenreGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
          : GetScalarType<T[P], GenreGroupByOutputType[P]>;
      }
    >
  >;

  export type genreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['genre']
  >;

  export type genreSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $genrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'genre';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['genre']
    >;
    composites: {};
  };

  type genreGetPayload<S extends boolean | null | undefined | genreDefaultArgs> = $Result.GetResult<
    Prisma.$genrePayload,
    S
  >;

  type genreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    genreFindManyArgs,
    'select' | 'include'
  > & {
    select?: GenreCountAggregateInputType | true;
  };

  export interface genreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genre']; meta: { name: 'genre' } };
    /**
     * Find zero or one Genre that matches the filter.
     * @param {genreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends genreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, genreFindUniqueArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {genreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends genreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, genreFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends genreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, genreFindFirstArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends genreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, genreFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     *
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends genreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, genreFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Genre.
     * @param {genreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     *
     **/
    create<T extends genreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, genreCreateArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Genres.
     *     @param {genreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends genreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, genreCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Genre.
     * @param {genreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     *
     **/
    delete<T extends genreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, genreDeleteArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Genre.
     * @param {genreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends genreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, genreUpdateArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Genres.
     * @param {genreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends genreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, genreDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends genreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, genreUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Genre.
     * @param {genreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     **/
    upsert<T extends genreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, genreUpsertArgs<ExtArgs>>,
    ): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
     **/
    count<T extends genreCountArgs>(
      args?: Subset<T, genreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(
      args: Subset<T, GenreAggregateArgs>,
    ): Prisma.PrismaPromise<GetGenreAggregateType<T>>;

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreGroupByArgs} args - Group by arguments.
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
      T extends genreGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genreGroupByArgs['orderBy'] }
        : { orderBy?: genreGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, genreGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the genre model
     */
    readonly fields: genreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genreClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the genre model
   */
  interface genreFieldRefs {
    readonly id: FieldRef<'genre', 'String'>;
    readonly name: FieldRef<'genre', 'String'>;
    readonly description: FieldRef<'genre', 'String'>;
    readonly created_at: FieldRef<'genre', 'DateTime'>;
    readonly updated_at: FieldRef<'genre', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * genre findUnique
   */
  export type genreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * Filter, which genre to fetch.
     */
    where: genreWhereUniqueInput;
  };

  /**
   * genre findUniqueOrThrow
   */
  export type genreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * Filter, which genre to fetch.
     */
    where: genreWhereUniqueInput;
  };

  /**
   * genre findFirst
   */
  export type genreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * Filter, which genre to fetch.
     */
    where?: genreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for genres.
     */
    cursor?: genreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` genres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[];
  };

  /**
   * genre findFirstOrThrow
   */
  export type genreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * Filter, which genre to fetch.
     */
    where?: genreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for genres.
     */
    cursor?: genreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` genres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[];
  };

  /**
   * genre findMany
   */
  export type genreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * Filter, which genres to fetch.
     */
    where?: genreWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing genres.
     */
    cursor?: genreWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` genres.
     */
    skip?: number;
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[];
  };

  /**
   * genre create
   */
  export type genreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * The data needed to create a genre.
     */
    data: XOR<genreCreateInput, genreUncheckedCreateInput>;
  };

  /**
   * genre createMany
   */
  export type genreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genreCreateManyInput | genreCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * genre update
   */
  export type genreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * The data needed to update a genre.
     */
    data: XOR<genreUpdateInput, genreUncheckedUpdateInput>;
    /**
     * Choose, which genre to update.
     */
    where: genreWhereUniqueInput;
  };

  /**
   * genre updateMany
   */
  export type genreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genreUpdateManyMutationInput, genreUncheckedUpdateManyInput>;
    /**
     * Filter which genres to update
     */
    where?: genreWhereInput;
  };

  /**
   * genre upsert
   */
  export type genreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * The filter to search for the genre to update in case it exists.
     */
    where: genreWhereUniqueInput;
    /**
     * In case the genre found by the `where` argument doesn't exist, create a new genre with this data.
     */
    create: XOR<genreCreateInput, genreUncheckedCreateInput>;
    /**
     * In case the genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genreUpdateInput, genreUncheckedUpdateInput>;
  };

  /**
   * genre delete
   */
  export type genreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
    /**
     * Filter which genre to delete.
     */
    where: genreWhereUniqueInput;
  };

  /**
   * genre deleteMany
   */
  export type genreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genreWhereInput;
  };

  /**
   * genre without action
   */
  export type genreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null;
  };

  /**
   * Model language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null;
    _min: LanguageMinAggregateOutputType | null;
    _max: LanguageMaxAggregateOutputType | null;
  };

  export type LanguageMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LanguageMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LanguageCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LanguageMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LanguageMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LanguageCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which language to aggregate.
     */
    where?: languageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: languageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` languages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` languages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned languages
     **/
    _count?: true | LanguageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LanguageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LanguageMaxAggregateInputType;
  };

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
    [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>;
  };

  export type languageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: languageWhereInput;
    orderBy?: languageOrderByWithAggregationInput | languageOrderByWithAggregationInput[];
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum;
    having?: languageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LanguageCountAggregateInputType | true;
    _min?: LanguageMinAggregateInputType;
    _max?: LanguageMaxAggregateInputType;
  };

  export type LanguageGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: LanguageCountAggregateOutputType | null;
    _min: LanguageMinAggregateOutputType | null;
    _max: LanguageMaxAggregateOutputType | null;
  };

  type GetLanguageGroupByPayload<T extends languageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LanguageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
          : GetScalarType<T[P], LanguageGroupByOutputType[P]>;
      }
    >
  >;

  export type languageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['language']
    >;

  export type languageSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $languagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'language';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['language']
    >;
    composites: {};
  };

  type languageGetPayload<S extends boolean | null | undefined | languageDefaultArgs> = $Result.GetResult<
    Prisma.$languagePayload,
    S
  >;

  type languageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    languageFindManyArgs,
    'select' | 'include'
  > & {
    select?: LanguageCountAggregateInputType | true;
  };

  export interface languageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['language']; meta: { name: 'language' } };
    /**
     * Find zero or one Language that matches the filter.
     * @param {languageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends languageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, languageFindUniqueArgs<ExtArgs>>,
    ): Prisma__languageClient<
      $Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Language that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {languageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends languageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, languageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__languageClient<
      $Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends languageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, languageFindFirstArgs<ExtArgs>>,
    ): Prisma__languageClient<
      $Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends languageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, languageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__languageClient<
      $Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     *
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends languageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, languageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Language.
     * @param {languageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     *
     **/
    create<T extends languageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, languageCreateArgs<ExtArgs>>,
    ): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Languages.
     *     @param {languageCreateManyArgs} args - Arguments to create many Languages.
     *     @example
     *     // Create many Languages
     *     const language = await prisma.language.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends languageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, languageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Language.
     * @param {languageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     *
     **/
    delete<T extends languageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, languageDeleteArgs<ExtArgs>>,
    ): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Language.
     * @param {languageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends languageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, languageUpdateArgs<ExtArgs>>,
    ): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Languages.
     * @param {languageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends languageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, languageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends languageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, languageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Language.
     * @param {languageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     **/
    upsert<T extends languageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, languageUpsertArgs<ExtArgs>>,
    ): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
     **/
    count<T extends languageCountArgs>(
      args?: Subset<T, languageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(
      args: Subset<T, LanguageAggregateArgs>,
    ): Prisma.PrismaPromise<GetLanguageAggregateType<T>>;

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageGroupByArgs} args - Group by arguments.
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
      T extends languageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: languageGroupByArgs['orderBy'] }
        : { orderBy?: languageGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, languageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the language model
     */
    readonly fields: languageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__languageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the language model
   */
  interface languageFieldRefs {
    readonly id: FieldRef<'language', 'String'>;
    readonly name: FieldRef<'language', 'String'>;
    readonly description: FieldRef<'language', 'String'>;
    readonly created_at: FieldRef<'language', 'DateTime'>;
    readonly updated_at: FieldRef<'language', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * language findUnique
   */
  export type languageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * Filter, which language to fetch.
     */
    where: languageWhereUniqueInput;
  };

  /**
   * language findUniqueOrThrow
   */
  export type languageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * Filter, which language to fetch.
     */
    where: languageWhereUniqueInput;
  };

  /**
   * language findFirst
   */
  export type languageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * Filter, which language to fetch.
     */
    where?: languageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for languages.
     */
    cursor?: languageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` languages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` languages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[];
  };

  /**
   * language findFirstOrThrow
   */
  export type languageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * Filter, which language to fetch.
     */
    where?: languageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for languages.
     */
    cursor?: languageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` languages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` languages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[];
  };

  /**
   * language findMany
   */
  export type languageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * Filter, which languages to fetch.
     */
    where?: languageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing languages.
     */
    cursor?: languageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` languages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` languages.
     */
    skip?: number;
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[];
  };

  /**
   * language create
   */
  export type languageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * The data needed to create a language.
     */
    data: XOR<languageCreateInput, languageUncheckedCreateInput>;
  };

  /**
   * language createMany
   */
  export type languageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many languages.
     */
    data: languageCreateManyInput | languageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * language update
   */
  export type languageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * The data needed to update a language.
     */
    data: XOR<languageUpdateInput, languageUncheckedUpdateInput>;
    /**
     * Choose, which language to update.
     */
    where: languageWhereUniqueInput;
  };

  /**
   * language updateMany
   */
  export type languageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update languages.
     */
    data: XOR<languageUpdateManyMutationInput, languageUncheckedUpdateManyInput>;
    /**
     * Filter which languages to update
     */
    where?: languageWhereInput;
  };

  /**
   * language upsert
   */
  export type languageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * The filter to search for the language to update in case it exists.
     */
    where: languageWhereUniqueInput;
    /**
     * In case the language found by the `where` argument doesn't exist, create a new language with this data.
     */
    create: XOR<languageCreateInput, languageUncheckedCreateInput>;
    /**
     * In case the language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<languageUpdateInput, languageUncheckedUpdateInput>;
  };

  /**
   * language delete
   */
  export type languageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
    /**
     * Filter which language to delete.
     */
    where: languageWhereUniqueInput;
  };

  /**
   * language deleteMany
   */
  export type languageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which languages to delete
     */
    where?: languageWhereInput;
  };

  /**
   * language without action
   */
  export type languageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    user_id: string | null;
    cover_book_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    user_id: string | null;
    cover_book_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    comment: number;
    user_id: number;
    cover_book_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    cover_book_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    cover_book_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    cover_book_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number;
    comment: string;
    user_id: string;
    cover_book_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      comment?: boolean;
      user_id?: boolean;
      cover_book_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      cover_book?: boolean | cover_bookDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    comment?: boolean;
    user_id?: boolean;
    cover_book_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cover_book?: boolean | cover_bookDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      cover_book: Prisma.$cover_bookPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number;
        comment: string;
        user_id: string;
        cover_book_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cover_book<T extends cover_bookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, cover_bookDefaultArgs<ExtArgs>>,
    ): Prisma__cover_bookClient<
      $Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly comment: FieldRef<'review', 'String'>;
    readonly user_id: FieldRef<'review', 'String'>;
    readonly cover_book_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      cover_book?: boolean | user$cover_bookArgs<ExtArgs>;
      review?: boolean | user$reviewArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    cover_book?: boolean | user$cover_bookArgs<ExtArgs>;
    review?: boolean | user$reviewArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      cover_book: Prisma.$cover_bookPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    cover_book<T extends user$cover_bookArgs<ExtArgs> = {}>(
      args?: Subset<T, user$cover_bookArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cover_bookPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.cover_book
   */
  export type user$cover_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cover_book
     */
    select?: cover_bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cover_bookInclude<ExtArgs> | null;
    where?: cover_bookWhereInput;
    orderBy?: cover_bookOrderByWithRelationInput | cover_bookOrderByWithRelationInput[];
    cursor?: cover_bookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Cover_bookScalarFieldEnum | Cover_bookScalarFieldEnum[];
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip: 'zip';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Cover_bookScalarFieldEnum: {
    id: 'id';
    title: 'title';
    author: 'author';
    publish_year: 'publish_year';
    cover_book_genre: 'cover_book_genre';
    cover_book_language: 'cover_book_language';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Cover_bookScalarFieldEnum = (typeof Cover_bookScalarFieldEnum)[keyof typeof Cover_bookScalarFieldEnum];

  export const GenreScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum];

  export const LanguageScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    rating: 'rating';
    comment: 'comment';
    user_id: 'user_id';
    cover_book_id: 'cover_book_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    cover_book?: Cover_bookListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    cover_book?: cover_bookOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      cover_book?: Cover_bookListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type cover_bookWhereInput = {
    AND?: cover_bookWhereInput | cover_bookWhereInput[];
    OR?: cover_bookWhereInput[];
    NOT?: cover_bookWhereInput | cover_bookWhereInput[];
    id?: UuidFilter<'cover_book'> | string;
    title?: StringFilter<'cover_book'> | string;
    author?: StringFilter<'cover_book'> | string;
    publish_year?: IntFilter<'cover_book'> | number;
    cover_book_genre?: StringFilter<'cover_book'> | string;
    cover_book_language?: StringFilter<'cover_book'> | string;
    user_id?: UuidFilter<'cover_book'> | string;
    company_id?: UuidFilter<'cover_book'> | string;
    created_at?: DateTimeFilter<'cover_book'> | Date | string;
    updated_at?: DateTimeFilter<'cover_book'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    review?: ReviewListRelationFilter;
  };

  export type cover_bookOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    publish_year?: SortOrder;
    cover_book_genre?: SortOrder;
    cover_book_language?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type cover_bookWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: cover_bookWhereInput | cover_bookWhereInput[];
      OR?: cover_bookWhereInput[];
      NOT?: cover_bookWhereInput | cover_bookWhereInput[];
      title?: StringFilter<'cover_book'> | string;
      author?: StringFilter<'cover_book'> | string;
      publish_year?: IntFilter<'cover_book'> | number;
      cover_book_genre?: StringFilter<'cover_book'> | string;
      cover_book_language?: StringFilter<'cover_book'> | string;
      user_id?: UuidFilter<'cover_book'> | string;
      company_id?: UuidFilter<'cover_book'> | string;
      created_at?: DateTimeFilter<'cover_book'> | Date | string;
      updated_at?: DateTimeFilter<'cover_book'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type cover_bookOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    publish_year?: SortOrder;
    cover_book_genre?: SortOrder;
    cover_book_language?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: cover_bookCountOrderByAggregateInput;
    _avg?: cover_bookAvgOrderByAggregateInput;
    _max?: cover_bookMaxOrderByAggregateInput;
    _min?: cover_bookMinOrderByAggregateInput;
    _sum?: cover_bookSumOrderByAggregateInput;
  };

  export type cover_bookScalarWhereWithAggregatesInput = {
    AND?: cover_bookScalarWhereWithAggregatesInput | cover_bookScalarWhereWithAggregatesInput[];
    OR?: cover_bookScalarWhereWithAggregatesInput[];
    NOT?: cover_bookScalarWhereWithAggregatesInput | cover_bookScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'cover_book'> | string;
    title?: StringWithAggregatesFilter<'cover_book'> | string;
    author?: StringWithAggregatesFilter<'cover_book'> | string;
    publish_year?: IntWithAggregatesFilter<'cover_book'> | number;
    cover_book_genre?: StringWithAggregatesFilter<'cover_book'> | string;
    cover_book_language?: StringWithAggregatesFilter<'cover_book'> | string;
    user_id?: UuidWithAggregatesFilter<'cover_book'> | string;
    company_id?: UuidWithAggregatesFilter<'cover_book'> | string;
    created_at?: DateTimeWithAggregatesFilter<'cover_book'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'cover_book'> | Date | string;
  };

  export type genreWhereInput = {
    AND?: genreWhereInput | genreWhereInput[];
    OR?: genreWhereInput[];
    NOT?: genreWhereInput | genreWhereInput[];
    id?: UuidFilter<'genre'> | string;
    name?: StringFilter<'genre'> | string;
    description?: StringNullableFilter<'genre'> | string | null;
    created_at?: DateTimeFilter<'genre'> | Date | string;
    updated_at?: DateTimeFilter<'genre'> | Date | string;
  };

  export type genreOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type genreWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: genreWhereInput | genreWhereInput[];
      OR?: genreWhereInput[];
      NOT?: genreWhereInput | genreWhereInput[];
      name?: StringFilter<'genre'> | string;
      description?: StringNullableFilter<'genre'> | string | null;
      created_at?: DateTimeFilter<'genre'> | Date | string;
      updated_at?: DateTimeFilter<'genre'> | Date | string;
    },
    'id'
  >;

  export type genreOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: genreCountOrderByAggregateInput;
    _max?: genreMaxOrderByAggregateInput;
    _min?: genreMinOrderByAggregateInput;
  };

  export type genreScalarWhereWithAggregatesInput = {
    AND?: genreScalarWhereWithAggregatesInput | genreScalarWhereWithAggregatesInput[];
    OR?: genreScalarWhereWithAggregatesInput[];
    NOT?: genreScalarWhereWithAggregatesInput | genreScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'genre'> | string;
    name?: StringWithAggregatesFilter<'genre'> | string;
    description?: StringNullableWithAggregatesFilter<'genre'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'genre'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'genre'> | Date | string;
  };

  export type languageWhereInput = {
    AND?: languageWhereInput | languageWhereInput[];
    OR?: languageWhereInput[];
    NOT?: languageWhereInput | languageWhereInput[];
    id?: UuidFilter<'language'> | string;
    name?: StringFilter<'language'> | string;
    description?: StringNullableFilter<'language'> | string | null;
    created_at?: DateTimeFilter<'language'> | Date | string;
    updated_at?: DateTimeFilter<'language'> | Date | string;
  };

  export type languageOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type languageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: languageWhereInput | languageWhereInput[];
      OR?: languageWhereInput[];
      NOT?: languageWhereInput | languageWhereInput[];
      name?: StringFilter<'language'> | string;
      description?: StringNullableFilter<'language'> | string | null;
      created_at?: DateTimeFilter<'language'> | Date | string;
      updated_at?: DateTimeFilter<'language'> | Date | string;
    },
    'id'
  >;

  export type languageOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: languageCountOrderByAggregateInput;
    _max?: languageMaxOrderByAggregateInput;
    _min?: languageMinOrderByAggregateInput;
  };

  export type languageScalarWhereWithAggregatesInput = {
    AND?: languageScalarWhereWithAggregatesInput | languageScalarWhereWithAggregatesInput[];
    OR?: languageScalarWhereWithAggregatesInput[];
    NOT?: languageScalarWhereWithAggregatesInput | languageScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'language'> | string;
    name?: StringWithAggregatesFilter<'language'> | string;
    description?: StringNullableWithAggregatesFilter<'language'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'language'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'language'> | Date | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringFilter<'review'> | string;
    user_id?: UuidFilter<'review'> | string;
    cover_book_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    cover_book?: XOR<Cover_bookRelationFilter, cover_bookWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    cover_book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    cover_book?: cover_bookOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      rating?: IntFilter<'review'> | number;
      comment?: StringFilter<'review'> | string;
      user_id?: UuidFilter<'review'> | string;
      cover_book_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      cover_book?: XOR<Cover_bookRelationFilter, cover_bookWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    cover_book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    rating?: IntWithAggregatesFilter<'review'> | number;
    comment?: StringWithAggregatesFilter<'review'> | string;
    user_id?: UuidWithAggregatesFilter<'review'> | string;
    cover_book_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    cover_book?: Cover_bookListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    cover_book?: cover_bookOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      cover_book?: Cover_bookListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    cover_book?: cover_bookCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    cover_book?: cover_bookUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    cover_book?: cover_bookUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    cover_book?: cover_bookUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type cover_bookCreateInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCover_bookInput;
    user: userCreateNestedOneWithoutCover_bookInput;
    review?: reviewCreateNestedManyWithoutCover_bookInput;
  };

  export type cover_bookUncheckedCreateInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutCover_bookInput;
  };

  export type cover_bookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCover_bookNestedInput;
    user?: userUpdateOneRequiredWithoutCover_bookNestedInput;
    review?: reviewUpdateManyWithoutCover_bookNestedInput;
  };

  export type cover_bookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutCover_bookNestedInput;
  };

  export type cover_bookCreateManyInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type cover_bookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type cover_bookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type genreCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type genreUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type genreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type genreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type genreCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type genreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type genreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type languageCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type languageUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type languageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type languageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type languageCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type languageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type languageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateInput = {
    id?: string;
    rating: number;
    comment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cover_book: cover_bookCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    rating: number;
    comment: string;
    user_id: string;
    cover_book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cover_book?: cover_bookUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    cover_book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    rating: number;
    comment: string;
    user_id: string;
    cover_book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    cover_book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    cover_book?: cover_bookCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    cover_book?: cover_bookUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    cover_book?: cover_bookUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    cover_book?: cover_bookUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Cover_bookListRelationFilter = {
    every?: cover_bookWhereInput;
    some?: cover_bookWhereInput;
    none?: cover_bookWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type cover_bookOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type cover_bookCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    publish_year?: SortOrder;
    cover_book_genre?: SortOrder;
    cover_book_language?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type cover_bookAvgOrderByAggregateInput = {
    publish_year?: SortOrder;
  };

  export type cover_bookMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    publish_year?: SortOrder;
    cover_book_genre?: SortOrder;
    cover_book_language?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type cover_bookMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    publish_year?: SortOrder;
    cover_book_genre?: SortOrder;
    cover_book_language?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type cover_bookSumOrderByAggregateInput = {
    publish_year?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type genreCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type genreMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type genreMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type languageCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type languageMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type languageMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Cover_bookRelationFilter = {
    is?: cover_bookWhereInput;
    isNot?: cover_bookWhereInput;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    cover_book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    cover_book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    cover_book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type cover_bookCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<cover_bookCreateWithoutCompanyInput, cover_bookUncheckedCreateWithoutCompanyInput>
      | cover_bookCreateWithoutCompanyInput[]
      | cover_bookUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutCompanyInput | cover_bookCreateOrConnectWithoutCompanyInput[];
    createMany?: cover_bookCreateManyCompanyInputEnvelope;
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
  };

  export type cover_bookUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<cover_bookCreateWithoutCompanyInput, cover_bookUncheckedCreateWithoutCompanyInput>
      | cover_bookCreateWithoutCompanyInput[]
      | cover_bookUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutCompanyInput | cover_bookCreateOrConnectWithoutCompanyInput[];
    createMany?: cover_bookCreateManyCompanyInputEnvelope;
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type cover_bookUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<cover_bookCreateWithoutCompanyInput, cover_bookUncheckedCreateWithoutCompanyInput>
      | cover_bookCreateWithoutCompanyInput[]
      | cover_bookUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutCompanyInput | cover_bookCreateOrConnectWithoutCompanyInput[];
    upsert?: cover_bookUpsertWithWhereUniqueWithoutCompanyInput | cover_bookUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: cover_bookCreateManyCompanyInputEnvelope;
    set?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    disconnect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    delete?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    update?: cover_bookUpdateWithWhereUniqueWithoutCompanyInput | cover_bookUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: cover_bookUpdateManyWithWhereWithoutCompanyInput | cover_bookUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: cover_bookScalarWhereInput | cover_bookScalarWhereInput[];
  };

  export type cover_bookUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<cover_bookCreateWithoutCompanyInput, cover_bookUncheckedCreateWithoutCompanyInput>
      | cover_bookCreateWithoutCompanyInput[]
      | cover_bookUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutCompanyInput | cover_bookCreateOrConnectWithoutCompanyInput[];
    upsert?: cover_bookUpsertWithWhereUniqueWithoutCompanyInput | cover_bookUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: cover_bookCreateManyCompanyInputEnvelope;
    set?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    disconnect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    delete?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    update?: cover_bookUpdateWithWhereUniqueWithoutCompanyInput | cover_bookUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: cover_bookUpdateManyWithWhereWithoutCompanyInput | cover_bookUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: cover_bookScalarWhereInput | cover_bookScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutCover_bookInput = {
    create?: XOR<companyCreateWithoutCover_bookInput, companyUncheckedCreateWithoutCover_bookInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCover_bookInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutCover_bookInput = {
    create?: XOR<userCreateWithoutCover_bookInput, userUncheckedCreateWithoutCover_bookInput>;
    connectOrCreate?: userCreateOrConnectWithoutCover_bookInput;
    connect?: userWhereUniqueInput;
  };

  export type reviewCreateNestedManyWithoutCover_bookInput = {
    create?:
      | XOR<reviewCreateWithoutCover_bookInput, reviewUncheckedCreateWithoutCover_bookInput>
      | reviewCreateWithoutCover_bookInput[]
      | reviewUncheckedCreateWithoutCover_bookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCover_bookInput | reviewCreateOrConnectWithoutCover_bookInput[];
    createMany?: reviewCreateManyCover_bookInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutCover_bookInput = {
    create?:
      | XOR<reviewCreateWithoutCover_bookInput, reviewUncheckedCreateWithoutCover_bookInput>
      | reviewCreateWithoutCover_bookInput[]
      | reviewUncheckedCreateWithoutCover_bookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCover_bookInput | reviewCreateOrConnectWithoutCover_bookInput[];
    createMany?: reviewCreateManyCover_bookInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyUpdateOneRequiredWithoutCover_bookNestedInput = {
    create?: XOR<companyCreateWithoutCover_bookInput, companyUncheckedCreateWithoutCover_bookInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCover_bookInput;
    upsert?: companyUpsertWithoutCover_bookInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutCover_bookInput, companyUpdateWithoutCover_bookInput>,
      companyUncheckedUpdateWithoutCover_bookInput
    >;
  };

  export type userUpdateOneRequiredWithoutCover_bookNestedInput = {
    create?: XOR<userCreateWithoutCover_bookInput, userUncheckedCreateWithoutCover_bookInput>;
    connectOrCreate?: userCreateOrConnectWithoutCover_bookInput;
    upsert?: userUpsertWithoutCover_bookInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCover_bookInput, userUpdateWithoutCover_bookInput>,
      userUncheckedUpdateWithoutCover_bookInput
    >;
  };

  export type reviewUpdateManyWithoutCover_bookNestedInput = {
    create?:
      | XOR<reviewCreateWithoutCover_bookInput, reviewUncheckedCreateWithoutCover_bookInput>
      | reviewCreateWithoutCover_bookInput[]
      | reviewUncheckedCreateWithoutCover_bookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCover_bookInput | reviewCreateOrConnectWithoutCover_bookInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutCover_bookInput | reviewUpsertWithWhereUniqueWithoutCover_bookInput[];
    createMany?: reviewCreateManyCover_bookInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutCover_bookInput | reviewUpdateWithWhereUniqueWithoutCover_bookInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutCover_bookInput | reviewUpdateManyWithWhereWithoutCover_bookInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutCover_bookNestedInput = {
    create?:
      | XOR<reviewCreateWithoutCover_bookInput, reviewUncheckedCreateWithoutCover_bookInput>
      | reviewCreateWithoutCover_bookInput[]
      | reviewUncheckedCreateWithoutCover_bookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCover_bookInput | reviewCreateOrConnectWithoutCover_bookInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutCover_bookInput | reviewUpsertWithWhereUniqueWithoutCover_bookInput[];
    createMany?: reviewCreateManyCover_bookInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutCover_bookInput | reviewUpdateWithWhereUniqueWithoutCover_bookInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutCover_bookInput | reviewUpdateManyWithWhereWithoutCover_bookInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type cover_bookCreateNestedOneWithoutReviewInput = {
    create?: XOR<cover_bookCreateWithoutReviewInput, cover_bookUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: cover_bookCreateOrConnectWithoutReviewInput;
    connect?: cover_bookWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type cover_bookUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<cover_bookCreateWithoutReviewInput, cover_bookUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: cover_bookCreateOrConnectWithoutReviewInput;
    upsert?: cover_bookUpsertWithoutReviewInput;
    connect?: cover_bookWhereUniqueInput;
    update?: XOR<
      XOR<cover_bookUpdateToOneWithWhereWithoutReviewInput, cover_bookUpdateWithoutReviewInput>,
      cover_bookUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type cover_bookCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<cover_bookCreateWithoutUserInput, cover_bookUncheckedCreateWithoutUserInput>
      | cover_bookCreateWithoutUserInput[]
      | cover_bookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutUserInput | cover_bookCreateOrConnectWithoutUserInput[];
    createMany?: cover_bookCreateManyUserInputEnvelope;
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type cover_bookUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<cover_bookCreateWithoutUserInput, cover_bookUncheckedCreateWithoutUserInput>
      | cover_bookCreateWithoutUserInput[]
      | cover_bookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutUserInput | cover_bookCreateOrConnectWithoutUserInput[];
    createMany?: cover_bookCreateManyUserInputEnvelope;
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type cover_bookUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<cover_bookCreateWithoutUserInput, cover_bookUncheckedCreateWithoutUserInput>
      | cover_bookCreateWithoutUserInput[]
      | cover_bookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutUserInput | cover_bookCreateOrConnectWithoutUserInput[];
    upsert?: cover_bookUpsertWithWhereUniqueWithoutUserInput | cover_bookUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: cover_bookCreateManyUserInputEnvelope;
    set?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    disconnect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    delete?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    update?: cover_bookUpdateWithWhereUniqueWithoutUserInput | cover_bookUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: cover_bookUpdateManyWithWhereWithoutUserInput | cover_bookUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: cover_bookScalarWhereInput | cover_bookScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type cover_bookUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<cover_bookCreateWithoutUserInput, cover_bookUncheckedCreateWithoutUserInput>
      | cover_bookCreateWithoutUserInput[]
      | cover_bookUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cover_bookCreateOrConnectWithoutUserInput | cover_bookCreateOrConnectWithoutUserInput[];
    upsert?: cover_bookUpsertWithWhereUniqueWithoutUserInput | cover_bookUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: cover_bookCreateManyUserInputEnvelope;
    set?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    disconnect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    delete?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    connect?: cover_bookWhereUniqueInput | cover_bookWhereUniqueInput[];
    update?: cover_bookUpdateWithWhereUniqueWithoutUserInput | cover_bookUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: cover_bookUpdateManyWithWhereWithoutUserInput | cover_bookUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: cover_bookScalarWhereInput | cover_bookScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cover_book?: cover_bookCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cover_book?: cover_bookUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type cover_bookCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCover_bookInput;
    review?: reviewCreateNestedManyWithoutCover_bookInput;
  };

  export type cover_bookUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutCover_bookInput;
  };

  export type cover_bookCreateOrConnectWithoutCompanyInput = {
    where: cover_bookWhereUniqueInput;
    create: XOR<cover_bookCreateWithoutCompanyInput, cover_bookUncheckedCreateWithoutCompanyInput>;
  };

  export type cover_bookCreateManyCompanyInputEnvelope = {
    data: cover_bookCreateManyCompanyInput | cover_bookCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cover_book?: cover_bookUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cover_book?: cover_bookUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type cover_bookUpsertWithWhereUniqueWithoutCompanyInput = {
    where: cover_bookWhereUniqueInput;
    update: XOR<cover_bookUpdateWithoutCompanyInput, cover_bookUncheckedUpdateWithoutCompanyInput>;
    create: XOR<cover_bookCreateWithoutCompanyInput, cover_bookUncheckedCreateWithoutCompanyInput>;
  };

  export type cover_bookUpdateWithWhereUniqueWithoutCompanyInput = {
    where: cover_bookWhereUniqueInput;
    data: XOR<cover_bookUpdateWithoutCompanyInput, cover_bookUncheckedUpdateWithoutCompanyInput>;
  };

  export type cover_bookUpdateManyWithWhereWithoutCompanyInput = {
    where: cover_bookScalarWhereInput;
    data: XOR<cover_bookUpdateManyMutationInput, cover_bookUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type cover_bookScalarWhereInput = {
    AND?: cover_bookScalarWhereInput | cover_bookScalarWhereInput[];
    OR?: cover_bookScalarWhereInput[];
    NOT?: cover_bookScalarWhereInput | cover_bookScalarWhereInput[];
    id?: UuidFilter<'cover_book'> | string;
    title?: StringFilter<'cover_book'> | string;
    author?: StringFilter<'cover_book'> | string;
    publish_year?: IntFilter<'cover_book'> | number;
    cover_book_genre?: StringFilter<'cover_book'> | string;
    cover_book_language?: StringFilter<'cover_book'> | string;
    user_id?: UuidFilter<'cover_book'> | string;
    company_id?: UuidFilter<'cover_book'> | string;
    created_at?: DateTimeFilter<'cover_book'> | Date | string;
    updated_at?: DateTimeFilter<'cover_book'> | Date | string;
  };

  export type companyCreateWithoutCover_bookInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutCover_bookInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutCover_bookInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutCover_bookInput, companyUncheckedCreateWithoutCover_bookInput>;
  };

  export type userCreateWithoutCover_bookInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCover_bookInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCover_bookInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCover_bookInput, userUncheckedCreateWithoutCover_bookInput>;
  };

  export type reviewCreateWithoutCover_bookInput = {
    id?: string;
    rating: number;
    comment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutCover_bookInput = {
    id?: string;
    rating: number;
    comment: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutCover_bookInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutCover_bookInput, reviewUncheckedCreateWithoutCover_bookInput>;
  };

  export type reviewCreateManyCover_bookInputEnvelope = {
    data: reviewCreateManyCover_bookInput | reviewCreateManyCover_bookInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutCover_bookInput = {
    update: XOR<companyUpdateWithoutCover_bookInput, companyUncheckedUpdateWithoutCover_bookInput>;
    create: XOR<companyCreateWithoutCover_bookInput, companyUncheckedCreateWithoutCover_bookInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutCover_bookInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutCover_bookInput, companyUncheckedUpdateWithoutCover_bookInput>;
  };

  export type companyUpdateWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutCover_bookInput = {
    update: XOR<userUpdateWithoutCover_bookInput, userUncheckedUpdateWithoutCover_bookInput>;
    create: XOR<userCreateWithoutCover_bookInput, userUncheckedCreateWithoutCover_bookInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCover_bookInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCover_bookInput, userUncheckedUpdateWithoutCover_bookInput>;
  };

  export type userUpdateWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type reviewUpsertWithWhereUniqueWithoutCover_bookInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutCover_bookInput, reviewUncheckedUpdateWithoutCover_bookInput>;
    create: XOR<reviewCreateWithoutCover_bookInput, reviewUncheckedCreateWithoutCover_bookInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutCover_bookInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutCover_bookInput, reviewUncheckedUpdateWithoutCover_bookInput>;
  };

  export type reviewUpdateManyWithWhereWithoutCover_bookInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutCover_bookInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringFilter<'review'> | string;
    user_id?: UuidFilter<'review'> | string;
    cover_book_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type cover_bookCreateWithoutReviewInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCover_bookInput;
    user: userCreateNestedOneWithoutCover_bookInput;
  };

  export type cover_bookUncheckedCreateWithoutReviewInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type cover_bookCreateOrConnectWithoutReviewInput = {
    where: cover_bookWhereUniqueInput;
    create: XOR<cover_bookCreateWithoutReviewInput, cover_bookUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    cover_book?: cover_bookCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    cover_book?: cover_bookUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type cover_bookUpsertWithoutReviewInput = {
    update: XOR<cover_bookUpdateWithoutReviewInput, cover_bookUncheckedUpdateWithoutReviewInput>;
    create: XOR<cover_bookCreateWithoutReviewInput, cover_bookUncheckedCreateWithoutReviewInput>;
    where?: cover_bookWhereInput;
  };

  export type cover_bookUpdateToOneWithWhereWithoutReviewInput = {
    where?: cover_bookWhereInput;
    data: XOR<cover_bookUpdateWithoutReviewInput, cover_bookUncheckedUpdateWithoutReviewInput>;
  };

  export type cover_bookUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCover_bookNestedInput;
    user?: userUpdateOneRequiredWithoutCover_bookNestedInput;
  };

  export type cover_bookUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    cover_book?: cover_bookUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    cover_book?: cover_bookUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    cover_book?: cover_bookCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    cover_book?: cover_bookUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type cover_bookCreateWithoutUserInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCover_bookInput;
    review?: reviewCreateNestedManyWithoutCover_bookInput;
  };

  export type cover_bookUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutCover_bookInput;
  };

  export type cover_bookCreateOrConnectWithoutUserInput = {
    where: cover_bookWhereUniqueInput;
    create: XOR<cover_bookCreateWithoutUserInput, cover_bookUncheckedCreateWithoutUserInput>;
  };

  export type cover_bookCreateManyUserInputEnvelope = {
    data: cover_bookCreateManyUserInput | cover_bookCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cover_book: cover_bookCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment: string;
    cover_book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type cover_bookUpsertWithWhereUniqueWithoutUserInput = {
    where: cover_bookWhereUniqueInput;
    update: XOR<cover_bookUpdateWithoutUserInput, cover_bookUncheckedUpdateWithoutUserInput>;
    create: XOR<cover_bookCreateWithoutUserInput, cover_bookUncheckedCreateWithoutUserInput>;
  };

  export type cover_bookUpdateWithWhereUniqueWithoutUserInput = {
    where: cover_bookWhereUniqueInput;
    data: XOR<cover_bookUpdateWithoutUserInput, cover_bookUncheckedUpdateWithoutUserInput>;
  };

  export type cover_bookUpdateManyWithWhereWithoutUserInput = {
    where: cover_bookScalarWhereInput;
    data: XOR<cover_bookUpdateManyMutationInput, cover_bookUncheckedUpdateManyWithoutUserInput>;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type cover_bookCreateManyCompanyInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type cover_bookUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCover_bookNestedInput;
    review?: reviewUpdateManyWithoutCover_bookNestedInput;
  };

  export type cover_bookUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutCover_bookNestedInput;
  };

  export type cover_bookUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyCover_bookInput = {
    id?: string;
    rating: number;
    comment: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutCover_bookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type cover_bookCreateManyUserInput = {
    id?: string;
    title: string;
    author: string;
    publish_year: number;
    cover_book_genre: string;
    cover_book_language: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    rating: number;
    comment: string;
    cover_book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    cover_book?: cover_bookUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    cover_book?: cover_bookUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type cover_bookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCover_bookNestedInput;
    review?: reviewUpdateManyWithoutCover_bookNestedInput;
  };

  export type cover_bookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutCover_bookNestedInput;
  };

  export type cover_bookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    publish_year?: IntFieldUpdateOperationsInput | number;
    cover_book_genre?: StringFieldUpdateOperationsInput | string;
    cover_book_language?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cover_book?: cover_bookUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    cover_book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: StringFieldUpdateOperationsInput | string;
    cover_book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Cover_bookCountOutputTypeDefaultArgs instead
   */
  export type Cover_bookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Cover_bookCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use cover_bookDefaultArgs instead
   */
  export type cover_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    cover_bookDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use genreDefaultArgs instead
   */
  export type genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = genreDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use languageDefaultArgs instead
   */
  export type languageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    languageDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
