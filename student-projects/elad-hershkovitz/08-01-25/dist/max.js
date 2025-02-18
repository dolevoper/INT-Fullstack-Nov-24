var average = Number(prompt("first number"));
for (var i = 1; i < 5; i++) {
    var nextNumber = Number(prompt("number #" + (i + 1)));
    average = average + nextNumber;
}
alert(average);
