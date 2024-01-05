export {};
let numbers: number[] = [1, 2, 3];
console.log({ numbers });

// ↓非推奨型
let numbers2: Array<number> = [1, 2, 3];
let string2: Array<string> = ["tokyo", "osaka", "kyoto"];

let strings: string[] = ["Typescript", "Javascript", "Coffeescript"];

let nijigenhairetsu: number[][] = [
  [100, 101],
  [102, 103],
];

let hairetsu: (string | number | boolean)[] = [1, false, "Japan"];
