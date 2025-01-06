const firstNumber = Number(prompt("Enter the first number"));

if (isNaN(firstNumber)) {
    alert("You must enter a number");
} else {
    const operator = prompt("Enter the operator");

    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert("You must enter a valid operator");
    } else {
        const secondNumber = Number(prompt("Enter the second number"));

        if (isNaN(secondNumber)) {
            alert("You must enter a number");
        } else if (operator === "/" && secondNumber === 0) {
            alert("You can't divide by zero");
        } else {
            let result: number;

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