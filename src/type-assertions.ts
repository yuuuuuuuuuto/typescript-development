export {};

let name: any = "Ham";
let length = (name as string).length;

// length = "foo";

// 型アサーションは二通り。
// 一つは
// let length = (name as string).length;
// 二つ目は
// let length = (<string>name).length;

// 後者はreactのJSXの記法によく似ているため、推奨はされていない。
