var minRange = 17;
var maxRange = 33;
var correctNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
alert('lets play a game! lets see if you can guess my number ' + correctNumber);
alert("you have three Guesses!");
var randomGuess = Number(prompt("type a number between " + minRange + " and " + maxRange));
var guessInRange = function (guess) {
    return minRange <= guess && guess <= maxRange;
};
var guessIsValid = function (guess) {
    return !Number.isNaN(guess);
};
var guessIsCorrect = function (guess) {
    return guess === correctNumber;
};
var amountOfGuesses = 3;
var outOfGuesses = function (guess) {
    return guess === 0;
};
var meetsAllRequirements = function () {
    return guessIsValid(randomGuess) && guessInRange(randomGuess);
};
var aboveOrBelow = function () {
    if (randomGuess > correctNumber) {
        return "lower";
    }
    else {
        return "higher";
    }
};
for (amountOfGuesses = 2; amountOfGuesses >= 0 && !guessIsCorrect(randomGuess) && meetsAllRequirements(); amountOfGuesses--) {
    if (outOfGuesses(amountOfGuesses)) {
        alert("no more guesses, you lose!");
    }
    else {
        randomGuess = Number(prompt("incorrect! lets try again. tries left: " + amountOfGuesses + " This time try a " + aboveOrBelow() + " number"));
    }
}
if (guessIsCorrect(randomGuess)) {
    alert("You got it! " + randomGuess + " is the right guess!");
}
