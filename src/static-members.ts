export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Atsushi";
  static lastName: string = "Ishida";

  static work() {
    return `${this.firstName}!`;
  }
}

// let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());

// (Javascript) 静的プロパティと静的メソッドの簡単な説明

// 例外的にインスタンス化しなくても良いメソッド・プロパティを
// 静的メソッド・プロパティ または クラスメソッド・プロパティ と言います。

// 静的メソッド・プロパティは、インスタンス変数から呼び出そうとするとエラーになります。
// (逆に動的なメソッド、プロパティはクラスから直接呼び出そうとするとエラーになります。)
// また、静的メソッド・プロパティを経由して呼び出す プロパティ・メソッドをインスタンスメソッド、プロパティと言います。

// 静的プロパティ・メソッドを定義する時の注意
// (1)プロトタイプオブジェクトには登録できない

// (2)静的メソッドは読み取り専門

// (3)静的メソッドの中では、thisキーワードを使えない
