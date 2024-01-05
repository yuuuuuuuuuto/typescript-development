export {};
// 数は決まってないが、複数の引数を受け取れる引数の記述方法↓
const sum = (...values: number[]): number => {
  console.log(values);
  return 100;
};

sum(1, 2, 3, 4, 5);

// 総和を求めるアルゴリズム
const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator: number, currentValue: number): number => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
  }
);

console.log(sumWithInitial);
// Expected output: 10
