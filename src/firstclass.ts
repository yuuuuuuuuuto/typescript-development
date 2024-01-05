export {};

class Person {
  name: string;
  age: number;
  // constructorは引数をreturnしないので、戻り値の型宣言はいらない。宣言するとエラーになる。
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `His name is ${this.name}, ${this.age}years old`;
  }
}
let taro = new Person("Taro", 30);
console.log(taro.profile());
// let hanakko = new Person();
