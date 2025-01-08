// 1. Complete simple calculator
// 2. Add error handling to calculator - on error, show error message and don't continue the program
//     * Validate that the user entered valid numbers
//     * Validate that the user entered a valid operator
//     * Validate that the user is not trying to divide by 0
alert("This is a simple calculator. Let's begin.");
var num1 = Number(prompt("Enter the first number:"));
var operation = prompt("Choose an operaion (+ - * /):");
var num2 = Number(prompt("Enter the second number"));
if (operation !== "+" && operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
    alert("This is not an operation! Please try again and choose an operation (+ - * /):");
}
else if (operation === "+") {
    var result = num1 + num2;
    alert("The result is: " + result);
}
else if (operation === "-") {
    var result = num1 - num2;
    alert("The result is: " + result);
}
else if (operation === "*") {
    var result = num1 * num2;
    alert("The result is: " + result);
}
else if (operation === "/") {
    if (num2 === 0) {
        alert("Division by zero is not allowed! Please try again and choose another number.");
    }
    else {
        var result = num1 / num2;
        alert("The result is: " + result);
    }
}
// 3. Create a guess my number game
//     * The computer chooses a random number
//     * The user enters a guess
//     * The computer tells the user if their guess was right
//     * Display proper error message when the input is not a valid number
//     (Single guess)
alert("This is a guess my number for a single player. Let's play :)");
var max = 10;
var randomNumber = Math.random() * max;
console.log(randomNumber);
var chosenNumber = Number(prompt("Guess a number between 1 and " + max));
if (chosenNumber == randomNumber) {
    alert("You guessed correctly. The number is: " + randomNumber);
}
else {
    alert("You guessed incorrectly! Try again.");
}
// 4. Improve our guess my number game
//     * Allow the user 3 guesses
//     * After each guess, if the user got it wrong, tell the user if his number was above or bellow the secret number
//     * Stop the program on invalid input
alert("This a guess my number game for three players. Let's play :)");
var chosenNumber1 = Number(prompt("Player 1 - guess a number between 1 and: " + max));
if (chosenNumber1 === randomNumber) {
    alert("Player 1 won! The secret number is: " + randomNumber);
}
else if (chosenNumber1 > randomNumber) {
    alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber1);
    var chosenNumber2 = Number(prompt("Player 2 - guess a smaller than " + chosenNumber1));
    if (chosenNumber2 === randomNumber) {
        alert("Player 2 won! The secret number is: " + randomNumber);
    }
    else if (chosenNumber2 > randomNumber) {
        alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber2);
        var chosenNumber3 = Number(prompt("Player 3- guess a smaller than " + chosenNumber2));
        if (chosenNumber3 === randomNumber) {
            alert("Player 3 won! The secret number is: " + randomNumber);
        }
        else if (chosenNumber3 > randomNumber) {
            alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
        else {
            alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
    }
    else {
        alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber2);
        var chosenNumber3 = Number(prompt("Player 3 - guess a bigger than " + chosenNumber2));
        if (chosenNumber3 === randomNumber) {
            alert("Player 3 won! The secret number is: " + randomNumber);
        }
        else if (chosenNumber3 > randomNumber) {
            alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
        else {
            alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
    }
}
else {
    alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber1);
    var chosenNumber2 = Number(prompt("Player 2 - guess a bigger than " + chosenNumber1));
    if (chosenNumber2 === randomNumber) {
        alert("Player 2 won! The secret number is: " + randomNumber);
    }
    else if (chosenNumber2 > randomNumber) {
        alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber2);
        var chosenNumber3 = Number(prompt("Player 3 - guess a smaller than " + chosenNumber2));
        if (chosenNumber3 === randomNumber) {
            alert("Player 3 won! The secret number is: " + randomNumber);
        }
        else if (chosenNumber3 > randomNumber) {
            alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
        else {
            alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
    }
    else {
        alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber2);
        var chosenNumber3 = Number(prompt("Player 3 - guess a bigger than " + chosenNumber2));
        if (chosenNumber3 === randomNumber) {
            alert("Player 3 won! The secret number is: " + randomNumber);
        }
        else if (chosenNumber3 > randomNumber) {
            alert("You guessed incorrectly! The secret number is smaller than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
        else {
            alert("You guessed incorrectly! The secret number is bigger than: " + chosenNumber3);
            alert("None of the player won. The secret number is: " + randomNumber);
        }
    }
}
