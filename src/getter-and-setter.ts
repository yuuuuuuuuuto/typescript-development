export {};

// owner
//     所有者
//     初期化時に設定できる
//     途中で変更できない。(card.owner = "Ham";でえらーになればOK)
//  参照できる。getを使う

// secretNumber
// 個人番号
// 初期化時に設定できる
// 途中で変更できる
// 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  get owner() {
    return this._owner;
  }
  // get secretNumber() {
  //   return this._secretNumber;
  // }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("はむさん", 123456789);
console.log(card.owner);
console.log(card.secretNumber);

// card.secretNumber;
console.log(card.debugPrint());

card.secretNumber = 1;
console.log(card.debugPrint());
// setterにより値が変わる。
// クラス内でのprivateのものに対して外部からアクセスするためにgetter, setterを使います。
// getterとは値を取得するもので、setterとは値を更新することです。そのままです。
