export {};

type Pitcher1 = {
  thorowingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  thorowingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

// type TwoWay = {
//   thorowingSpeed: 154;
//   battingAverage: number;
// };

// intersection型　→　既存の型を利用して新たな型を作る。

type twoWay = Pitcher1 & Batter1;
// 上記のtype twoWay と同じ型定義になる。
const ShouheiOtani: twoWay = {
  thorowingSpeed: 165,
  battingAverage: 0.285,
};
