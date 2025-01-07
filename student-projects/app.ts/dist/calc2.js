// program for a simple calculator
// take the operator input
var operator = prompt('Enter operator ( either +, -, * or / ): ');
// take the operand input
var num1 = parseFloat(prompt('Enter first number: ') || '0');
var num2 = parseFloat(prompt('Enter second number: ') || '0');
var result;
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
console.log(num1 + " " + operator + " " + num2 + " = " + result);
