export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "run!";
  }
}

let animal = new Animal("a");
console.log(animal.run());

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    console.log(parentMessage + "A");
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("b").run());
console.log(new Lion("c", 30).run());

// superキーワードは親クラスのコンストラクタを呼ぶ際に使う。
// もしくは親クラスのメソッドを子クラスから呼び出す際に用いる。
