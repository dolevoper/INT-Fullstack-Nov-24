alert("let's check if your triangle is a valid right triangle");
var side1 = Number(prompt("Please enter first side length"));
var side2 = Number(prompt("Please enter second side length"));
var hypotenous = Number(prompt("Please enter hypotenous length"));
var realhypotneous = Math.pow(side1, 2) + Math.pow(side2, 2);
var isValidRightTriangle = Math.pow(hypotenous, 2) === realhypotneous;
// compare 2 alues from any type
// === - strict equals
// !== - strict not equals
// compare 2 numbers or 2 strings
// > - greater than
// < - lower than
// >= - greater or equals
// <= - lower or equal
// negate a boolean
// ! - negate a value
if (isValidRightTriangle) {
    alert("correct");
}
if (!isValidRightTriangle) {
    alert("wrong");
}
