export {};

function error(message: string): never {
  throw new Error(message);
}

// never指定で呼びもとに戻ってこない;

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// void型は呼びもとに帰ってくる値がないことを意味するが、
// 呼びもとには帰ってくる。
// 一方never型は呼びもとに帰ってこない。

let foo: void = undefined;
// let bar: never = undefined;
let bar2: never = error("only me");

// void型にはundefinedが含まれるので、代入することができる。
// 一方、never型は値という概念がないので、代入できない。
// ただ例外的にError関数を代入することはできる。
