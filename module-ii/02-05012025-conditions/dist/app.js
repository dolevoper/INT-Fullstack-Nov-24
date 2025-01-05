alert("let's check if your triangle is a valid right triangle");
var side1 = Number(prompt("Please enter first side length"));
var side2 = Number(prompt("Please enter second side length"));
var hypotenous = Number(prompt("Please enter hypotenous length"));
var realHypotenous = Math.pow(side1, 2) + Math.pow(side2, 2);
var isValidRightTriangle = Math.pow(hypotenous, 2) === realHypotenous;
// compare 2 values from any type
// === - strict equals
// !== - strict not equals
// compare 2 numbers or 2 strings
// > - greater than
// < - lower than
// >= - greater or equals
// <= - lower or equals
// negate a boolean
// ! - negate a value
if (isValidRightTriangle) {
    alert("it's a valid right triangle");
}
else {
    alert("it's NOT a valid right triangle");
}
