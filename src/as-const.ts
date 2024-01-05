export {};

let name = "Ham" as const;
name = "Ham";
// 上記の記法では"Ham"という文字列リテラルのみ再代入可能になる。
// 通常のconst定義ではそもそも再代入すらできない。

let profile = {
  name: "Atsushi",
  height: 178,
} as const;
// オブジェクトの波かっこの終わりにas constを記入すると、そのすべてのプロパティがreadonlyに変わる。
// profile.name = "Ham";
// profile.height = 179;
