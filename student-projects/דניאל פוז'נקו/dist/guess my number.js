var firstNumber = Number(prompt("Enter the first number"));
if (isNaN(firstNumber)) {
    alert("You must enter a number");
}
else {
    var operator = prompt("Enter the operator");
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert("You must enter a valid operator");
    }
    else {
        var secondNumber = Number(prompt("Enter the second number"));
        if (isNaN(secondNumber)) {
            alert("You must enter a number");
        }
        else if (operator === "/" && secondNumber === 0) {
            alert("You can't divide by zero");
        }
        else {
            var result = void 0;
            switch (operator) {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    result = firstNumber / secondNumber;
                    break;
            }
            alert("The result is " + result);
        }
    }
}
