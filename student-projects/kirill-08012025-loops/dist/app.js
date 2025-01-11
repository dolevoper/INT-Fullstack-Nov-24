// let sumNumbers = 0;
// const numbersToRead = Number(prompt("how many numbers do you want to input?"));
//  if (numbersToRead === null){
//     alert("reset");
//  }
// for (let i = 0; i < numbersToRead; i++) {
//     const numberToAdd = Number(prompt("please enter a number"));
//     // sumNumbers = sumNumbers + numberToAdd
//     sumNumbers += numberToAdd;
// }
// const average = sumNumbers / numbersToRead;
// alert(average);
// Student Grade
var userName = prompt("Enter your name");
var minMax = Number(prompt("Which grade would you like to receive? (min or max)"));
var max = 97;
var min = 66;
if (min) {
    alert(userName + " Your lowest grade is: " + min);
}
else if (max) {
    alert(userName + " Your highest grade is: " + max);
}
