// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const num1 = parseFloat(prompt('Enter first number: ') || '0');
const num2 = parseFloat(prompt('Enter second number: ') || '0');

let result;

// using if...else if... else
if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

// display the result
console.log(`${num1} ${operator} ${num2} = ${result}`);