alert("Let's do basic math!");

// Function to validate if a value is a valid number
function isValidNumber(value: string): boolean {
    return !isNaN(Number(value)) && value.trim() !== "";
}

// Get user inputs
const firstInput: string | null = prompt("Please enter the first number");
if (!firstInput || !isValidNumber(firstInput)) {
    alert("Error: The first input is not a valid number!");
    throw new Error("Invalid input for the first number.");
}

const operator: string | null = prompt("Please enter your operator (+, -, *, /)");
if (!operator || !["+", "-", "*", "/"].includes(operator)) {
    alert("Error: Invalid operator! Please use +, -, *, or /.");
    throw new Error("Invalid operator.");
}

const secondInput: string | null = prompt("Please enter the second number");
if (!secondInput || !isValidNumber(secondInput)) {
    alert("Error: The second input is not a valid number!");
    throw new Error("Invalid input for the second number.");
}

if (operator === "/" && Number(secondInput) === 0) {
    alert("Error: Division by zero is not allowed!");
    throw new Error("Division by zero.");
}

// If inputs are valid, perform the calculation
const num1: number = Number(firstInput);
const num2: number = Number(secondInput);
let result: number;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        throw new Error("Unexpected operator."); // Just in case
}

alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
