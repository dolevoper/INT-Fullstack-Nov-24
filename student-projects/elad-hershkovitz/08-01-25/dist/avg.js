var sumNumbers = 0;
var numbersToRead = Number(prompt("how many numbers do you want to input?"));
for (var i = 0; i < numbersToRead; i++) {
    var numberToAdd = Number(prompt("please enter a number"));
    // sumNumbers = sumNumbers + numberToAdd
    sumNumbers += numberToAdd;
}
var average = sumNumbers / numbersToRead;
alert(average);
// 1 + 0 = 1
// 2 + 0 = 2
// 1000 + 0 = 1000
// x + 0 = x
