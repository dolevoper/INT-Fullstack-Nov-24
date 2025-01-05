alert("let's check if your triangle is a valid right triangle");
var side1 = Number(prompt("Please enter first side length"));
var side2 = Number(prompt("Please enter second side length"));
var hypotenous = Number(prompt("Please enter hypotenous length"));
var realhyptenous = Number(Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2)));
var isvalidrightangle = realhyptenous === hypotenous;
if (isvalidrightangle) {
    alert("this is a right angel triangel");
}
else {
    alert("this isn't a right angel triangel");
}
