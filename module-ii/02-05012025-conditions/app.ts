alert("let's check if your triangle is a valid right triangle");

const side1 = Number(prompt("Please enter first side length"));
const side2 = Number(prompt("Please enter second side length"));
const hypotenous = Number(prompt("Please enter hypotenous length"));

const realhypotneous = side1 ** 2 + side2 ** 2 ;
const isValidRightTriangle = hypotenous ** 2 === realhypotneous

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
    alert("correct")
}

if (!isValidRightTriangle) {
    alert("wrong")
}