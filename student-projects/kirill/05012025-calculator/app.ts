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
// alert("try to guess my number (1-10)");
// const minNum = 1;
// const maxNum = 10;
// const answer = Math.floor(Math.random() * (maxNum - minNum +2)) + minNum;
// console.log(answer);
// const guess = Number(prompt("what is your number?"));
// if (guess===answer){
//     alert("Good guess");
// }
// if (isNaN(guess)){
//     alert("This is not a number!");
// }
// else if (guess !== answer) {
//     alert("wrong guess");
// }

// Guess a number 3 attempts
alert("try to guess my number (1-10) you have 3 attempts");
const minNum3 = 1;
const maxNum3 = 10;
const answer3 = Math.floor(Math.random()*(maxNum3-minNum3 +1));
console.log(answer3);
const guess3 = Number(prompt("First guess"));
if (guess3 === answer){
    alert("Great guess!");
    else if (guess3 !==answer)
        alert=Number(prompt("second guess"));
}

