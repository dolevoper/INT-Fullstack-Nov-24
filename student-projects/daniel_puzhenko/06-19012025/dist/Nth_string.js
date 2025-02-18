//1. Read string from the user until the user hits cancel. Ask the user for a number (N). Alert the Nth string
var userInput = "";
var count = 0;
var strings = [];
while (userInput != null) {
    userInput = prompt("enter text or press cancel to finish");
    if (userInput != null) {
        strings[count] = userInput;
        count++;
    }
}
var textIndex = Number(prompt("select the text number"));
if (textIndex != null) {
    alert(strings[textIndex]);
}
