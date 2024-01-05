export {};

// シグネチャ（関数名、引数、戻り値の形のみを記述する。
function double(value: number): number;
function double(value: string): string;
// ここで指定した型の引数のみしか関数は処理しない。それ以外はエラーになる。（この場合、number型とstring型）

function double(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value;
  }
}

console.log(double(100));

console.log(double("Hello "));

// console.log(double(false));
