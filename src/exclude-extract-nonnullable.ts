export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// ↓3つのtypeのうち、string | numberを除外
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// ↓3つのtypeのうち、DebugTypeのみ取り出す。
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// NullableTypesからnullやundefinedを除外する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
