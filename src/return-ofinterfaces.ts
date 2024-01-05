export {};

class Mahoutsukai {}

class souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}
// implementsなら複数のclass(interface)を継承しても、エラーにならない。

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
