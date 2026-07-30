// 足し算
const add = (a, b) => a + b;

// 引き算
const subtract = (a, b) => a - b;

// 掛け算
const multiply = (a, b) => a * b;

// 割り算
const divide = (a, b) => {
  if (b === 0) {
    return "エラー:0で割ることはできません";
  }
  return a / b;
};

// テスト
console.log(add(6, 3)); // 9
console.log(subtract(6, 3)); // 3
console.log(multiply(6, 3)); // 18
console.log(divide(6, 3)); // 2
console.log(divide(6, 0)); // エラーメッセージ

const calculate = (a, operator, b) => {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "エラー: 不正な演算子です";
  }
};

// テスト
console.log(calculate(6, "+", 3)); // 9
console.log(calculate(6, "-", 3)); // 3
console.log(calculate(6, "*", 3)); // 18
console.log(calculate(6, "/", 3)); // 2
console.log(calculate(6, "%", 3)); // エラー

const calculattions = [
  { a: 100, operator: "+", b: 50 },
  { a: 100, operator: "-", b: 30 },
  { a: 25, operator: "*", b: 4 },
  { a: 100, operator: "/", b: 5 },
  { a: 10, operator: "/", b: 0 },
];

console.log("計算結果");

for (const calc of calculattions) {
  const result = calculate(calc.c, calc.operator, calc.b);
  console.log(`${calc.a} ${calc.operator} ${calc.b} = ${result}`);
}
