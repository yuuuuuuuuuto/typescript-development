export {};
let profile1: object = { name: "Ham" };
profile1 = { birthYear: 1976 };

let profile2: { name: string } = { name: "ham" };
// profile2 = { birthYear: 1976 };

// 後者の書き方だとオブジェクトのプロパティについても、型宣言ができる。
