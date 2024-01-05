export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));

// 無名関数版
let bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi2(1.78, 86));

// アロー関数版
let bmi3: (weight: number, height: number) => number = (
  weight: number,
  height: number
): number => weight / (height * height);
console.log(bmi2(1.78, 86));

// optional引数
let bmi4 = (height: number, weight: number, printable?: boolean) => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi4(1.78, 86, false);
