// function calc (number, operation, secNumber){
//     if (operation === "+"){
//        alert(Number(number + secNumber));
//        location.reload();
//     } else if (operation === "-") {
//         alert(Number(number - secNumber));
//         location.reload();
//     } else if (operation === "*"){
//         alert(Number(number * secNumber));
//         location.reload();
//     } else if (operation === "/"){
//         alert(Number(number / secNumber));
//         location.reload();
//     } else {
//         alert("Please choose: + - * / ")
//         location.reload();
//     }
//     }

// const num1 =  Number(prompt("enter first number"));
// if (isNaN(num1)){
// alert("Please enter a number! Refreshing page")
// location.reload();
// } else if (!isNaN(num1)) {
// const operation = prompt("choose operation");
// if(operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*" ){
// alert("Please choose: + - * / ! Refreshing page");
// location.reload();
// }  else {
// const userNum =  Number(prompt("enter second number"));
// if (isNaN(num2)){
//     alert("Please enter a number! Refreshing page");
//      location.reload();
// } else if(operation === "/" && num2 === 0) {
//     alert("You cannot divide 0, refreshing");
//     location.reload();
// } else {
// calc(num1, operation, num2);
// }
// }
// }

// Guess game

// function GuessGame() {
//   const randomNum = Math.floor(Math.random() * 100);
//   const userNum = Number(prompt("Choose a number between 1 - 100"));
//   if (randomNum === userNum) {
//     alert("you won!");
//     location.reload();
//   } else if (isNaN(userNum) || userNum > 100 || userNum === 0) {
//     alert("enter a valid number");
//     location.reload();
//   } else {
//     if (randomNum > userNum) {
//       alert(
//         "Your number is below the random number, the random number is " +
//           randomNum
//       );
//     } else {
//       alert(
//         "Your number is above the random number, the random number is " +
//           randomNum
//       );
//     }
//     location.reload();
//   }
//   return randomNum;
// }

// function isValid(num) {
//   if (isNaN(num) || num > 100 || num === 0) {
//     return false;
//   }
//   return true;
// }

// function GuessGameNew() {
//   const randomN = Math.floor(Math.random() * 100);
//   const tryNum = Number(prompt("choose number of tries"));
//   if (isNaN(tryNum) || tryNum === 0) {
//     alert("enter a valid number");
//   } else {
//     for (let i = 1; i <= tryNum; i++) {
//       alert("this is your " + i + " try");
//       const newTry = Number(prompt("Choose a number between 1 - 100"));
//       if (isNaN(newTry) || newTry > 100 || newTry === 0) {
//         alert("enter a valid number");
//         i = i - 1;
//       } else if (newTry > randomN) {
//         alert(
//           "Your number is above the random number, the random number is " +
//             randomN
//         );
//       } else if (newTry < randomN) {
//         alert(
//           "Your number is below the random number, the random number is " +
//             randomN
//         );
//       } else {
//         alert("you won!");
//         alert("new game is loading");
//         GuessGameNew();
//       }
//     }
//   }
//   alert("new game is loading");
//   GuessGameNew();
// }

// GuessGameNew();

const num1 = Number(prompt("choose first number"));
const num2 = Number(prompt("choose second number"));
const num3 = Number(prompt("choose third number"));
const num4 = Number(prompt("choose fourth number"));
const num5 = Number(prompt("choose fifth number"));

const arry = [num1, num2, num3, num4, num5];

for (let i = 0; i < 4; i++){
if (arry[i] > arry[i+1]) {
  alert(arry[i]);
} else {
  alert[i+1]; 
}

}