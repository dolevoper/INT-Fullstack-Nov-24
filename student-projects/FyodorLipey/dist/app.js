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
// const num2 =  Number(prompt("enter second number"));
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
var randomNum = Math.floor(Math.random() * 100);
var userNum = Number(prompt("Choose a number between 1 - 100"));
function GuessGame(num1, num2) {
    if (num1 === num2) {
        alert("you won!");
        location.reload();
    }
    else {
        alert("try again, the number was " + num1);
        location.reload();
    }
}
GuessGame(randomNum, userNum);
