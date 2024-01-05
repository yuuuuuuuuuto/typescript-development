export {};

let fooCompatible: any;
let barCompatible: string = "typescript";

console.log(typeof fooCompatible);
// >>> undefined
fooCompatible = barCompatible;
// Any・string 互換性あり

console.log(typeof fooCompatible);
// >>> 代入によりstring型に変わる。

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

//string・number 互換性なし

let fooString: string;
let barString: string = "string";

fooString = barString;
// 同じ型なので当然、互換性あり

// リテラル型
// TypeScriptではプリミティブ型の特定の値だけを代入可能にする型を表現できます。
// そのような型をリテラル型と呼びます。
let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;
// 文字列リテラル型は文字列型の一部なので代入可。

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;
// ナンバーリテラル型はナンバー型の一部なので代入可。

// インターフェースはクラスが実装すべきフィールドやメソッドを定義した型です。
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}
let me: Animal;
me = new Person(34, "Ham");
// 代入される側にあるメンバー(age, name)は代入するデータにも必ず存在していなければならない。
