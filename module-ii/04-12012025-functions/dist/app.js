// let guessUserInput = prompt("Please enter a number");
// let guess = Number(guessUserInput);
// while (isNaN(guess)) {
//     guessUserInput = prompt("Please enter a valid number!");
//     guess = Number(guessUserInput);
// }
// let difficultyUserInput = prompt("Please enter a number");
// let difficulty = Number(difficultyUserInput);
// while (isNaN(difficulty)) {
//     difficultyUserInput = prompt("Please enter a valid number!");
//     difficulty = Number(difficultyUserInput);
// }
sayHello();
sayHello();
function sayHello() {
    alert("hello world!");
}
var userName = "Amit";
var adminUserName = "Yael";
function greet(_userName) {
    var userName = "Daniel";
    alert("hello " + _userName + "!\nhave a great day.");
    alert("hello " + userName + "!\nhave a great day.");
    alert("hello " + adminUserName + "!\nhave a great day.");
    if (typeof _userName === "string") {
        alert("Hello " + _userName.slice(0, 1).toUpperCase() + _userName.slice(1) + "!");
    }
}
greet("omer");
greet(5);
var foo = function (x) { return x * 2; };
alert(typeof foo);
alert(typeof (typeof 5)); // "string"
function double(x) {
    return x * 2;
}
alert(double(10));
alert(foo(12));
