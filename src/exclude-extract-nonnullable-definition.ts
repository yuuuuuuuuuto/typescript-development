export {};

type MyExclude<T> = T extends string | number ? never : T;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// ↓3つのtypeのうち、string | numberを除外
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes>;

// ↓3つのtypeのうち、DebugTypeのみ取り出す。
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NullableTypesからnullやundefinedを除外する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
