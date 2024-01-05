export {};
type Mojiretsu = string;
const fooString: string = "Hello";
const fooMojiresu: Mojiretsu = "Hello";

const example1 = {
  name: "Ham",
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const exaple2: Profile = {
  name: "Ham",
  age: 43,
};

type Profile2 = typeof example1;
// この定義の仕方なら上記で定義したexample1オブジェクトの構造が変わってもそれ応じて、
// Profile2タイプの構造を変更してくれる。
