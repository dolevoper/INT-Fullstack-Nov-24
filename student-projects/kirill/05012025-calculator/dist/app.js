alert("This is a calculator");
var firstNumber = Number(prompt("Pick your first number"));
var op = prompt("choose operator");
var addIt = Number("+");
var subtractIt = Number("-");
var divideIt = Number("/");
var multiplyIt = Number("*");
var secondNumber = Number(prompt("Pick your second number"));
if (addIt) {
    alert(FirstNumber + secondNumber);
}
if (subtractIt) {
    alert(firstNumber - secondNumber);
    if (divideIt) {
        alert(firstNumber / secondNumber);
        if (multiplyIt) {
            alert(firstNumber * secondNumber);
        }
    }
}
