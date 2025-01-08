var sumNumbers = 0;
var numbersToRead = Number(prompt("how many numbers do you want to input?"));
for (var i = 0; i < numbersToRead; i++) {
    var numberToAdd = Number(prompt("please enter a number"));
    sumNumbers += numberToAdd;
}
var average = sumNumbers / numbersToRead;
alert(average);
