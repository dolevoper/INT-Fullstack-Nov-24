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
        else {
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
        }
    }
}
