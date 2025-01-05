alert("let's check if your triangle is a valid right triangle");

const side1 = Number(prompt("Please enter first side length"));
const side2 = Number(prompt("Please enter second side length"));
const hypotenous = Number(prompt("Please enter hypotenous length"));

const realHypotenous = side1 ** 2 + side2 ** 2;
const isValidRightTriangle = hypotenous ** 2 === realHypotenous;

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
} else {
    alert("it's NOT a valid right triangle");
}
