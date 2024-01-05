export {};
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// 型は違くとも、やっている処理は同じ
// →ジェネリクスで共通化
const echo = <T>(arg: T): T => {
  return arg;
};
// <T>で型を抽象化
console.log(echo<number>(100));
console.log(echo<string>("hello!"));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("hello generics!").echo());
console.log(new Mirror<boolean>(true).echo());
