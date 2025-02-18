var userInput = prompt("please enter a name:");
var arrayOfStrings = [];
while (userInput !== null) {
    arrayOfStrings[arrayOfStrings.length] = userInput;
    userInput = prompt("please enter a name:");
}
var number = Number(prompt("please choose the number of the name to print:"));
alert(arrayOfStrings[number - 1]);
