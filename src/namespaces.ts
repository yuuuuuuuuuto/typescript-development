export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}
const me = new Japanese.Tokyo.Person("はむさん");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("はむはん");
console.log(meOsaka.name);

const michael = new English.Person("michael", "Joseph", "Jackson");
console.log(michael.middleName);

// 異なる名前空間内であればクラス名の重複が許される。
// 名前空間内にクラスを作る場合、また名前空間内に名前空間を作る場合は先頭にエクスポートをつけて外部参照できるようにする。
