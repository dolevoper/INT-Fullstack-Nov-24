function divide (a: number, b: number) {
  if (b === 0) {
    return "can't divide by 0";
  } else {
    return a / b;
  }
}

const num1 = Number(prompt("pleas insert a number"));
const num2 = Number(prompt("pleas insert anover number"));

alert(divide(num1, num2));