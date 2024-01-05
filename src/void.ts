export {};

function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing());

// returnでバリューを返さない関数の場合、
// 引数の部分にvoid型をつけてあげる。
