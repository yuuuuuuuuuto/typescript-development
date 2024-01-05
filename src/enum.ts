export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
// =>>> 0
console.log(Months.February);
// =>>> 1

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFF",
  GREEN = "#00000",
  BLUE = "#0000FF",
  BLACK = "#00000",
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = "",
  GRAy = "",
}
COLORS.YELLOW;
