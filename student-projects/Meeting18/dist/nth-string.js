// 1. Read string from the user until the user hits cancel. Ask the user for a number (N). Alert the Nth string
var strings = [];
var userInput = prompt("Please enter a string:");
while (userInput !== null) {
    strings[strings.length] = userInput;
    userInput = prompt("Please enter a string:");
}
var index = Number(prompt("Enter the string's number you would like to watch:"));
while (index < 0 || index > (strings.length - 1)) {
    index = Number(prompt("You chose a number bigger than the array length.\n" +
        "Please choose a number between 0 to " + (strings.length - 1) + "."));
}
alert(strings[index]);
