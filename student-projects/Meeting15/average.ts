// 1. Fix avg so the user should click the "cancel" button to finish the input (update the prompt to reflect the change)

let sumNumbers = 0;

let numbersToRead = Number(prompt("How many numbers do you want to input?"));

for (let i = 0; i < numbersToRead; i++) {
    const userInput = prompt("Please enter a number or choose 'Cancel' to stop.");

    if (userInput === null) {
        alert("You chose to stop!");
        numbersToRead = i; 
        break;
    } else {
        const numberToAdd = Number(userInput);
        sumNumbers += numberToAdd;
    }
}

const average = sumNumbers / numbersToRead;

alert("The average is: " + average);

