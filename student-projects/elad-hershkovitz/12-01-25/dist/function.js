function divide(a, b) {
    if (b === 0) {
        return "can't divide by 0";
    }
    else {
        return a / b;
    }
}
var num1 = Number(prompt("pleas insert a number"));
var num2 = Number(prompt("pleas insert anover number"));
alert(divide(num1, num2));
