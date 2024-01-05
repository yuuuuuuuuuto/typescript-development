export {};

type ObjectType = { name: string; age: number };

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: "sato san",
  age: 23,
};

// interfaceでもオブジェクトに型をつけることができる
