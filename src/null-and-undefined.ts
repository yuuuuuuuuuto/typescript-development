export {};

let absence: null = null;

// absence = "d";

let data: undefined = undefined;

function error(message: string): never {
  throw new Error(message);
}

// never指定で呼びもとに戻ってこない;

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}
