var amountOfNumbers = Number(prompt("Please enter the amount of numbers you want to insert:"));
var array = [];
for (var i = 0; i < amountOfNumbers; i++) {
    array[i] = Number(prompt("please enter a number:"));
}
for (var l = 0; l < array.length; l++) {
    var minNumber = Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i + l] < minNumber) {
            minNumber = array[i + l];
            if (array[0 + l] > minNumber) {
                array[i + l] = array[0 + l];
                array[0 + l] = minNumber;
            }
        }
    }
}
if (array.length / 2 !== Math.floor(array.length / 2)) {
    alert(array[(amountOfNumbers + 1) / 2 - 1]);
}
else {
    var average = (amountOfNumbers / 2 + (amountOfNumbers / 2 + 1)) / 2;
    alert(average);
}
