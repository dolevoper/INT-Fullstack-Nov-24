// API - Application Programmable Interface
export function operate(operator: Operator) {
    if (shouldClearInput) {
        shouldClearInput = false;
        storedOperation = undefined;
        userInput = memory;
    }
    
    calculate();
    display = storedOperation ? memory : display;
    storedOperation = operator;
    userInput = 0;
}

export function equals() {
    calculate();
    display = memory;
    shouldClearInput = true;
}

export function clear() { }

export function allClear() { }

export function enterDigit(digit: Digit) {
    if (shouldClearInput) {
        userInput = digit;
        shouldClearInput = false;
        storedOperation = undefined;
    } else {
        userInput *= 10;
        userInput += digit;
    }

    display = userInput;
}

export function getDisplayValue() {
    return display;
}

function calculate() {
    switch (storedOperation) {
        case "+":
            memory += userInput;
            break;
        case "-":
            memory -= userInput;
            break;
        case "*":
            memory *= userInput;
            break;
        case "/":
            memory /= userInput;
            break;
        default:
            memory = userInput;
            break;
    }
}

// Model/State
type Operator = "+" | "-" | "*" | "/";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

let storedOperation: Operator | undefined = undefined;
let display = 0;
let userInput = 0;
let memory = 0;
let shouldClearInput = false;

export function debug() {
    console.log(`display: ${display}
userInput: ${userInput}
memory: ${memory}
storedOperation: ${storedOperation}`);
}
