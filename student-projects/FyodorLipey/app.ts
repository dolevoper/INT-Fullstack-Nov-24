
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



function GuessGame (){
const randomNum = Math.floor(Math.random() * 100);
const userNum = Number(prompt("Choose a number between 1 - 100"));
if (randomNum === userNum){
alert("you won!");
location.reload();
} else if (isNaN(userNum) || userNum > 100 || userNum === 0){
alert("enter a valid number");
location.reload();
} else {
if (randomNum > userNum){
alert("Your number is below the random number, the random number is " + randomNum);   
} else {
alert("Your number is above the random number, the random number is " + randomNum);  
}
location.reload();   
}
return randomNum; 
}

function isValid (num){
if (isNaN(num) || num > 100 || num === 0){
    return false;
} 
return true; 

}

function GuessGameNew (){
const randomN = Math.floor(Math.random() * 100);
for (let i = 1 ; i < 4; i++) {
alert ("this is your " + i + " try");
const newTry = Number(prompt("Choose a number between 1 - 100"));

// if (!isValid (newTry)){
//     alert("enter a valid number"); 
//     i--; 
// }

if (newTry > randomN){
alert("Your number is above the random number, the random number is " + randomN);  
} else if (newTry < randomN){
alert("Your number is below the random number, the random number is " + randomN);      
} else {
alert("you won!");
   
}
}
}

GuessGameNew(); 

