// 1. Fix avg so the user should click the "cancel" button to finish the input (update the prompt to reflect the change)
var sumNumbers = 0;
var numbersToRead = Number(prompt("How many numbers do you want to input?"));
for (var i = 0; i < numbersToRead; i++) {
    var userInput = prompt("Please enter a number or choose 'Cancel' to stop.");
    if (userInput === null) {
        alert("You chose to stop!");
        numbersToRead = i;
        break;
    }
    else {
        var numberToAdd = Number(userInput);
        sumNumbers += numberToAdd;
    }
}
var average = sumNumbers / numbersToRead;
alert("The average is: " + average);
