
//Create a random number between 1 and 10
const randomNumber: number = Math.floor(Math.random() * 10) + 1;

// Get a number and tries from the user
let userNumber: string | null = prompt('Please enter a number between 1 and 10');
let numberOfTries: string | null = prompt('Please enter the number of tries');

if (userNumber === null || !Number(userNumber)){
    alert('Please enter a valid number between 1 and 10');
}
else if (numberOfTries === null || !Number(numberOfTries)){
    alert('Please enter a valid number of tries');
}

// Check if the user number is the same as the random number and output the result
for (let i = 1; i <= Number(numberOfTries); i++) {
    if (i > (Number(numberOfTries)+1))
        break;
    if(Number(userNumber) > randomNumber){
        alert('Your number is higher than the random number');
        userNumber=prompt('Please enter a higher number');
    }
    else if(Number(userNumber) < randomNumber){
        alert('Your number is lower than the random number');
        userNumber=prompt('Please enter a lower number');
    }
    else if (Number(userNumber) === randomNumber) {
        alert('Congratulations! You guessed the number');
        break;
    } else {
        alert('Sorry, try again');
    }
}
