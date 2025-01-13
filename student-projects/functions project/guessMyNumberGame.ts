// Home Practice

// generate a random number between 1 and 10
const randomNumber: number = Math.floor(Math.random() * 10) + 1;

function isANumber(value: string): boolean {
    return !isNaN(Number(value));
}

function isGreeter(value: string): boolean {
    return Number(value) > randomNumber;
}

function isLower(value: string): boolean {
    return Number(value) < randomNumber;
}

function isCorrect(value: string): boolean {
    return Number(value) === randomNumber;
}

function getUserNumber(): string | null {
    let userNumber: string | null = prompt('Please enter a number between 1 and 10');
    if (userNumber !== null) {
        while (!isANumber(userNumber)) {
            userNumber = prompt('Please enter a number between 1 and 10');
        }
    }
    return userNumber;
}

function getNumberOfTries(): string | null {
    let numberOfTries: string | null = prompt('Please enter the number of tries');
    if (numberOfTries !== null) {
        while (!isANumber(numberOfTries)) {
            numberOfTries = prompt('Please enter the number of tries');
        }
    }
    return numberOfTries;
}
//break game get two numbers and return is equal
function breakGame(index: number, numberOfTries: string): boolean {
    if(index < Number(numberOfTries)){
        return false;
    }
    return true;
}

    let userNumber: string | null = getUserNumber();
    let numberOfTries: string | null = getNumberOfTries();
    if (userNumber !== null && numberOfTries !== null) {
        for (let i = 1; i <= Number(numberOfTries); i++) {
            if (isGreeter(userNumber)) {
                alert('Your number is higher than the random number');
                if (!breakGame(i, numberOfTries)) {
                    userNumber = prompt('Please enter a higher number');
                }
            } else if (isLower(userNumber)) {
                alert('Your number is lower than the random number');
                if (!breakGame(i, numberOfTries)) {
                    userNumber = prompt('Please enter a lower number');
                }
            } else if (isCorrect(userNumber)) {
                alert('Congratulations! You guessed the number');
                break;
            } else if(breakGame(i, numberOfTries)){
                alert('Sorry, try again');
                break;
            }
        }
    }
