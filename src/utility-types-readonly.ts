export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Ham",
  age: 43,
};

me.age++;

console.log(me);

type PersonalType = Readonly<Profile>;

const friend: PersonalType = {
  name: "Shigeru",
  age: 40,
};

// friend.age++;
// readonly型なのでエラーになる。

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
