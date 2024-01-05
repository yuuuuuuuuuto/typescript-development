export {};

const kansu = (a: any, b: any): any => a + b;
// 関数内処理が一行の場合、returnと{}を省略できる。
let numberAny: any = kansu(1, 2);
let numberUnknown: unknown = kansu(1, 2);

let sumAny = numberAny + 10;
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}

// ↑上記のようにIF文を用い、ある特定の型であることを確認しながら、
// コードを安全に実行する仕組みをタイプガードという。
