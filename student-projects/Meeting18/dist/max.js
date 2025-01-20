//printing the second max number.
var max = Infinity;
var secondMax = -Infinity;
for (var i = 0; i < 5; i++) {
    var nextNumber = Number(prompt("number #" + (i + 2)));
    if (nextNumber > max) {
        secondMax = max;
        max = nextNumber;
    }
    else if (nextNumber > secondMax) {
        secondMax = nextNumber;
    }
}
alert(secondMax);
