export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 下記の記法で中のプロパティがオプショナルなProfileオブジェクトを複製できる。
type PartialType = Partial<Profile>;

type RequiredType = Required<Profile>;
