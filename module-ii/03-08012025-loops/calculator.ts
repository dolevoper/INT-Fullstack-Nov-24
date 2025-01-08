const firstNumberInput = prompt("Enter the first number");
const firstNumber = Number(firstNumberInput);

if (isNaN(firstNumber)) {
    alert('"' + firstNumberInput + '" is not a valid number');
} else {
    const secondNumberInput = prompt("Please enter the second number");
    const secondNumber = Number(secondNumberInput);

    if (isNaN(secondNumber)) {
        alert('"' + secondNumberInput + '" is not a valid number');
    } else {
        const operator = prompt(
            "Please choose an operation:\n" +
            "(+) Addition\n" +
            "(-) Subtraction\n" +
            "(*) Multiplication\n" +
            "(/) Division"
        );

        switch (operator) {
            case "+":
                alert("The result is: " + (firstNumber + secondNumber));
                break;
            case "-":
                alert("The result is: " + (firstNumber - secondNumber));
                break;
            case "*":
                alert("The result is: " + (firstNumber * secondNumber));
                break;
            case "/":
                if (secondNumber === 0) {
                    alert("Division by 0 is illegal");
                } else {
                    alert("The result is: " + (firstNumber / secondNumber));
                }
                
                break;
            default:
                alert('"' + operator + '" is not a valid operation');
                break;
        }
    }
}
