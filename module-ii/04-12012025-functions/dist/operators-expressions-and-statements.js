// Operators:
// Unary operators
// !, ++, --
// Binary operators
// +, -, *, /, >, <, >=, <=, ===, !==, &&, ||
// Ternary operators
// ?: (op1 ? op2 : op3)
var userName = prompt("Please enter your name");
if (userName === null) {
    alert("You hit cancel");
}
var difficulty = userName === "Admin" ? 999 : 10;
var RequestedGrade;
if (StatType === 1) {
    RequestedGrade = 0;
}
else {
    RequestedGrade = 101;
}
// ====================================
var _RequestedGrade = StatType === 1 ? 0 : 101;
