var firstNumber = Number(prompt('type a number: '));
var secondNumber = Number(prompt('type another number: '));
if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    alert('input is not a valid number');
}
var operator = prompt('pick which operation to perfrom: ');
var addition = operator === '+';
var subtraction = operator === '-';
var multiplication = operator === '*';
var division = operator === '/';
var validOperator = function (operator) {
    return addition || subtraction || multiplication || division;
};
if (!validOperator(operator)) {
    alert('please enter a mathematical operation');
}
else {
    if (addition) {
        alert(firstNumber + secondNumber);
    }
    else if (subtraction) {
        alert(firstNumber - secondNumber);
    }
    else if (multiplication) {
        alert(firstNumber * secondNumber);
    }
    else if (division && secondNumber !== 0) {
        alert(firstNumber / secondNumber);
    }
    else
        alert('cant divide by 0, please choose another operation');
}
