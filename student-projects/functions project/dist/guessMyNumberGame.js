// Home Practice
// generate a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
function isANumber(value) {
    return !isNaN(Number(value));
}
function isGreeter(value) {
    return Number(value) > randomNumber;
}
function isLower(value) {
    return Number(value) < randomNumber;
}
function isCorrect(value) {
    return Number(value) === randomNumber;
}
function getUserNumber() {
    var userNumber = prompt('Please enter a number between 1 and 10');
    if (userNumber !== null) {
        while (!isANumber(userNumber)) {
            userNumber = prompt('Please enter a number between 1 and 10');
        }
    }
    return userNumber;
}
function getNumberOfTries() {
    var numberOfTries = prompt('Please enter the number of tries');
    if (numberOfTries !== null) {
        while (!isANumber(numberOfTries)) {
            numberOfTries = prompt('Please enter the number of tries');
        }
    }
    return numberOfTries;
}
function breakGame(index, numberOfTries) {
    if (index < Number(numberOfTries)) {
        return false;
    }
    return true;
}
var userNumber = getUserNumber();
var numberOfTries = getNumberOfTries();
if (userNumber !== null && numberOfTries !== null) {
    for (var i = 1; i <= Number(numberOfTries); i++) {
        if (isGreeter(userNumber)) {
            alert('Your number is higher than the random number');
            if (!breakGame(i, numberOfTries)) {
                userNumber = prompt('Please enter a higher number');
            }
        }
        else if (isLower(userNumber)) {
            alert('Your number is lower than the random number');
            if (!breakGame(i, numberOfTries)) {
                userNumber = prompt('Please enter a lower number');
            }
        }
        else if (isCorrect(userNumber)) {
            alert('Congratulations! You guessed the number');
            break;
        }
        else if (breakGame(i, numberOfTries)) {
            alert('Sorry, try again');
            break;
        }
    }
}
