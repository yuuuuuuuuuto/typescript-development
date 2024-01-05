export {};

let profile: (string | number)[] = ["Ham", 43];
// 共用型（配列など）は型の順序性とい制約を持たせることができない。
// つまり配列の中で0番目が文字列、1番目が数字のように指定できない。
// タプル型の場合はそれを持たせることができる

// タプル型↓
let profileTuple: [string, number] = ["Hum", 43];
// profileTuple = [43, "Hum"]; >>> error

// タプル型は型推定で出ないので、プログラマが書き方を覚えるしかない。
