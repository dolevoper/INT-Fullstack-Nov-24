var valitdateAmountOfGuesses = function (input, max) {
    while (input >= max || (input <= 0) || Number.isNaN(input)) {
        input = Number(prompt("input is invalid, cant be less than or equal to 0 and cant be greater than or equal to " + max + " and it must be a valid number"));
    }
    return input;
};
var validateInput = function (input) {
    while (Number.isNaN(input)) {
        input = Number(prompt("not a valid number!"));
    }
    return input;
};
var inputIsValid = function (input) {
    return !Number.isNaN(input);
};
var inputInRange = function (input) {
    return input >= minRange && input <= maxRange;
};
var validateMinMax = function (min, max) {
    while (min >= max || Number.isNaN(max)) {
        max = Number(prompt("ending number cant be lesser or equal to starting number and it must be a valid number"));
    }
    return max;
};
var minRange = Number(prompt("choose starting number: "));
minRange = validateInput(minRange);
var maxRange = Number(prompt("choose ending number: "));
maxRange = validateMinMax(minRange, maxRange);
var amountOfGuesses = Number(prompt("choose how many guesses you will have: "));
amountOfGuesses = valitdateAmountOfGuesses(amountOfGuesses, maxRange);
var correctGuess = Math.floor(Math.random() * (maxRange - minRange) + minRange + 1);
var randomGuess = Number(prompt("type a number between " + minRange + " and " + maxRange + " " + correctGuess));
var outOfGuesses = amountOfGuesses === 0;
var guessIsCorrect = function () {
    return randomGuess === correctGuess;
};
var tryValidGuess = function (guess) {
    while (!inputIsValid(guess) || !inputInRange(guess)) {
        if (!inputIsValid(guess)) {
            guess = Number(prompt("input is invalid, please type a Number: "));
        }
        if (!inputInRange(guess) && inputIsValid(guess)) {
            guess = Number(prompt("input is out of range, please choose a number between " + minRange + " and " + maxRange));
        }
    }
    return guess;
};
for (amountOfGuesses = amountOfGuesses - 1; amountOfGuesses > 0 && !guessIsCorrect(); amountOfGuesses--) {
    if (!outOfGuesses && !guessIsCorrect()) {
        tryValidGuess(randomGuess);
        randomGuess = Number(prompt("incorrect! you have " + amountOfGuesses + " guesses left"));
        tryValidGuess(randomGuess);
    }
}
if (guessIsCorrect()) {
    alert("what a guess! that is correct!  the number is " + randomGuess);
}
else {
    alert("unlucky! out of guesses. better luck next time!");
}
