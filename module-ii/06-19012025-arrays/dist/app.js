var max = -Infinity;
var secondMax = -Infinity;
for (var i = 0; i < 5; i++) {
    var newNumber = Number(prompt("Please enter a number"));
    if (newNumber > max) {
        secondMax = max;
        max = newNumber;
    }
    else if (newNumber > secondMax) {
        secondMax = newNumber;
    }
}
alert(secondMax);
