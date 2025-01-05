alert("let's check if your triangle is a valid right triangle");

const side1 = Number(prompt("Please enter first side length"));
const side2 = Number(prompt("Please enter second side length"));
const hypotenous = Number(prompt("Please enter hypotenous length"));

const realhyptenous = Number(Math.sqrt(side1 ** 2 + side2 ** 2));
const isvalidrightangle = realhyptenous === hypotenous;

if (isvalidrightangle){
    alert("this is a right angel triangel")
}
else{
    alert("this isn't a right angel triangel")
}
