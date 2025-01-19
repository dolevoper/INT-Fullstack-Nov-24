// Operators:

// Unary operators
// !, ++, --

// Binary operators
// +, -, *, /, >, <, >=, <=, ===, !==, &&, ||

// Ternary operators
// ?: (op1 ? op2 : op3)

const userName = prompt("Please enter your name");

if (userName === null) {
    alert("You hit cancel");
}

const difficulty = userName === "Admin" ? 999 : 10;

// expr = op1 ? op2 : op3
// if op1 === true  then expr === op2
// if op1 === false then expr === op3
// (else                 expr === op3)

declare let StatType: number;
let RequestedGrade: number;

if (StatType === 1) {
    RequestedGrade = 0;
} else {
    RequestedGrade = 101;
}

// ====================================

const _RequestedGrade = StatType === 1 ? 0 : 101;
