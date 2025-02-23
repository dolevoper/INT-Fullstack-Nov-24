function HandleCancel() {
    alert("Enjoy your day :)");
    throw new Error();
}
var userInput = prompt("Hey what's your name?");
while (userInput === "" || !isNaN(userInput)) {
    if (userInput === null) {
        HandleCancel();
    }
    alert("Please enter a valid name.");
    userInput = prompt("Hey what's your name?");
}
alert("Hello " + userInput + "!");
var quitFunction = prompt("welcom to my game\nfor playing just press enter in your keyboerd or write something\nif you want already to quit please click the cancel button");
if (quitFunction === null) {
    HandleCancel();
}
alert("enjoy the game");
var sumNumbers = 0;
var numbersToRead = prompt("how many numbers do you want to input?");
while (numbersToRead === "" || isNaN(numbersToRead) || numbersToRead <= 0) {
    if (numbersToRead === null) {
        HandleCancel();
    }
    alert("plaese enter just a valid number (not an empty line)");
    numbersToRead = prompt("how many numbers do you want to input?");
}
alert("you chose " + numbersToRead + " numbers");
for (var i = 0; i < numbersToRead; i++) {
    var numberToAdd = Number(prompt("please enter a number"));
    var userChoise = Number(numberToAdd);
    if (numberToAdd === null) {
        HandleCancel();
    }
    if (isNaN(userChoise)) {
        alert("please enter a valid number. ");
        i--;
    }
    else {
        sumNumbers += userChoise;
    }
}
var average = sumNumbers / numbersToRead;
alert("The average is: " + average);
