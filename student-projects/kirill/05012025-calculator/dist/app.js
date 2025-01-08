// Calculator
// alert("This is a calculator");
// const firstNumber = Number (prompt("Pick your first number"));
// const op = prompt("choose operator");
//    const addIt = Number("+");
//    const subtractIt = Number ("-");
//    const divideIt = Number ("/");
//    const multiplyIt = Number("*");
// const secondNumber = Number(prompt("Pick your second number"));
// if (addIt){
//     alert(FirstNumber+secondNumber);
// }else if (subtractIt) {
//     alert(firstNumber-secondNumber);
//    else if(divideIt){
//         alert(firstNumber/secondNumber);
//        else if(multiplyIt){
//             alert(firstNumber*secondNumber);
//             else (isNaN(firstNumber, op, secondNumber)){
//                 alert("This is not a number!");
//             }
//         }
//     }
// }
//Guess a Number
alert("try to guess my number (1-10)");
var minNum = 1;
var maxNum = 10;
var answer = Math.floor(Math.random() * (maxNum - minNum + 2)) + minNum;
console.log(answer);
var guess = Number(prompt("what is your number?"));
if (guess === answer) {
    alert("Good guess");
}
if (isNaN(guess)) {
    alert("This is not a number!");
}
else if (guess !== answer) {
    alert("wrong guess");
}
