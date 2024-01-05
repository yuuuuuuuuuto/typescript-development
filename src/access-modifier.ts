export {};

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;
  // constructorは引数をreturnしないので、戻り値の型宣言はいらない。宣言するとエラーになる。
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `His name is ${this.name}, ${this.age} years old. He came from ${this.nationality}`;
  }
}
// Personクラスを継承したAndroidクラスを定義↓

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
    // this.name = name;
    // this.age = age;
    // this.nationality = nationality;
    // super()で親クラスの上記の部分を継承
  }
  profile(): string {
    return `His name is ${this.name}, ${this.age} years old. He came from ${this.nationality}`;
  }
}
let taro = new Person("Taro", 30, "Japan");
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
let Ichiro = new Person("Ichiro", 25, "The US");
console.log(Ichiro.profile());
