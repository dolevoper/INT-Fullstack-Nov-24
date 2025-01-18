var sumNumbers = 0;
var numberCount = 0;
var userInput = Number(prompt("Enter a number"));
while (userInput !== null) {
    var number = Number(userInput);
    if (isNaN(number)) {
        alert("You must enter a number");
    }
    else {
        sumNumbers += number;
        numberCount++;
    }
    userInput = Number(prompt("Enter a number"));
}
var avg = sumNumbers / numberCount;
alert("The average is " + avg);
