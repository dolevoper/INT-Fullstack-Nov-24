var firstNumber = Number(prompt("Enter the first number"));
if (firstNumber)
    ;
{
    alert("Please enter a valid number");
}
var operator = prompt("Enter the operator");
var secondNumber = Number(prompt("Enter the second number"));
if (operator === "+") {
    var result = firstNumber + secondNumber;
}
if (operator === "-") {
    var result = firstNumber - secondNumber;
}
if (operator === "*") {
    var result = firstNumber * secondNumber;
}
if (operator === "/") {
    var result = firstNumber / secondNumber;
}
alert("The result is " + result);
