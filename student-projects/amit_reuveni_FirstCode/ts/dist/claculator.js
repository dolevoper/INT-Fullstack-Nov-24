"calculator";
var userName = (prompt("Hey what's your name ?"));
if (userName >= 0 || userName <= 0 || userName == "") {
    alert("no valid name provided");
    throw new Error;
}
else {
    alert("Hello, " + userName + "!");
}
var firstNumber = Number(prompt("enter your first number"));
var secondNumber = Number(prompt("enter your second number"));
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("you must enter valid numbers.");
    throw new Error("invalid number input");
}
var operetor = (prompt("write your operetor, it could be either (+, -, *, /) ?"));
if (operetor !== "+" && operetor !== "-" && operetor !== "*" && operetor !== "/") {
    alert("you must use one of this operetors (+, -, *, /)");
    throw new Error("invalid operetor");
}
if (operetor === "/" && secondNumber === 0) {
    alert("you cannot devided by zero");
    throw new Error("division by zero");
}
if (operetor == '+') {
    alert("your score is " + (firstNumber + +secondNumber));
}
else if (operetor == '-') {
    alert("your score is " + (firstNumber - secondNumber));
}
else if (operetor == '*') {
    alert("your score is " + (firstNumber * secondNumber));
}
else if (operetor == '/') {
    alert("your score is " + (firstNumber / secondNumber));
}
