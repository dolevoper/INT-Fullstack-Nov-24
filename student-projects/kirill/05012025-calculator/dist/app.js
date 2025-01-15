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
// alert("try to guess my number (1-10) you have 3 attempts");
// const minNum3 = 1;
// const maxNum3 = 10;
// const answer3 = Math.floor(Math.random()*(maxNum3-minNum3 +1));
// console.log(answer3);
// const guess3 = Number(prompt("First guess"));
// const guess33 = Number(prompt("Second guess"));
// const guess333 = Number(prompt("third guess"));
// if (guess3 === answer3){
//     alert("Great guess!");}
//     else(guess3!==answer3){
//         alert=Number(prompt("Wrong choice, second guess"));
//     }
// 08.01.2025 class exercise
// const firstNumber = Number(prompt("first number"));
// const secondNumber = Number(prompt("second number"));
// const thirdNum = Number(prompt("choose third number"));
// const fourthNum = Number(prompt("Choose fourth number"));
// const fifthNum = Number(prompt("choose fifth number"));
// if (firstNumber > secondNumber && thirdNum && fourthNum && fifthNum) {
//     alert(firstNumber);}
//     else if (secondNumber > firstNumber && thirdNum && fourthNum && fifthNum) {
//         alert(secondNumber);}
//         else if (thirdNum > firstNumber && secondNumber && fourthNum && fifthNum) {
//             alert(thirdNum);}
//             else if (fourthNum > firstNumber && thirdNum && secondNumber && fifthNum) {
//                 alert(fourthNum);}
//                 else if (fifthNum > firstNumber && thirdNum && secondNumber && fifthNum) {
//                     alert(fifthNum);}
// 8.01.2025 class exercise #2 loops and iterations
// var max = Number(prompt("number #1"));
// for (var i = 0; i < 5; i++) {
//     var nextNumber = Number(prompt("number #" + (i + 2)));
//     if (nextNumber > max) {
//         max = nextNumber;
//     }
// }
// alert(max);
// 8.01.2025 class exercise #3 averages
// let sumNumbers = 0;
// const numbersToRead = Number(prompt("how many numbers do you want to input?"));
// if (numbersToRead === 2){
//     for( let i=0; i<2; i++){
//         const numberToAdd = Number(prompt("please enter a number"));
//         sumNumbers += numberToAdd;
//     }  
// }
// const average = sumNumbers / 2;
// alert(average);
// if (numbersToRead === 3){
//     for( let i=0; i<3; i++){
//         const numberToAdd = Number(prompt("please enter a number"));
//         sumNumbers += numberToAdd;
//     }  
// }
// const average = sumNumbers / 3;
// alert(average);
// if (numbersToRead === 4){
//     for( let i=0; i<4; i++){
//         const numberToAdd = Number(prompt("please enter a number"));
//         sumNumbers += numberToAdd;
//     }  
// }
// const average = sumNumbers / 4;
// alert(average);
// for (let i = 0; i < 5; i++) {
//     const numberToAdd = Number(prompt("please enter a number"));
//     // sumNumbers = sumNumbers + numberToAdd
//     sumNumbers += numberToAdd;
// }
// const average = sumNumbers / 5;
// alert(average);
