export {};

const debugProfile = (name: string, age: number) => {
  console.log(name, age);
};
debugProfile("Ham", 43);

// ↓関数の引数の型が分かる。
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Gloria", 65];

debugProfile(...profile);
