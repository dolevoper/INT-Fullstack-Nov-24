var sumNumbers = 0;
var count = 0;
while (true) {
    var numberToAdd = Number(prompt("please enter a number"));
    if (numberToAdd === null) {
        break;
    }
    sumNumbers += numberToAdd;
    count++;
}
var average = sumNumbers / count;
alert(average);
