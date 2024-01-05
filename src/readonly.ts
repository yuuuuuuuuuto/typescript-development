export {};

class VisaCard {
  // publicはなくてもいいが、わかりにくいのでreadonlyの前に記述しておく
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("はむさん");

console.log(myVisaCard.owner);

// myVisaCard.owner = "ベーコン";
// エラー。読み取り専用なので代入しようとするとエラーになる。
