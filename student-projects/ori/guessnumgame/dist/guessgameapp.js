alert("Let's play a game!");
function isValidNumber(value) {
    return !isNaN(Number(value)) && value.trim() !== "";
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomInt = getRandomInt(1, 10);
console.log("Generated random number (for debugging): " + randomInt);
var guess = null;
var trycount = 1;
while (trycount !== 4) {
    var playerGuess = prompt("Guess a number between 1 and 10:");
    if (!playerGuess || !isValidNumber(playerGuess)) {
        alert("Error: Please enter a valid number!");
        continue;
    }
    guess = Number(playerGuess);
    if (guess === randomInt) {
        alert("Congratulations! You guessed the correct number: " + randomInt);
        break;
    }
    else if (guess < randomInt) {
        alert("Too low! Try again.");
    }
    else {
        alert("Too high! Try again.");
    }
    trycount = trycount + 1;
}
