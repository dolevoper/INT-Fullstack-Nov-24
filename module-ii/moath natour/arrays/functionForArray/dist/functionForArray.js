function smallestTwo(array) {
    var min = Infinity;
    var secondMin = Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > min && array[i] < secondMin) {
            secondMin = array[i];
        }
    }
    return [min, secondMin];
}
var test = [];
for (var i = 0; i < 7; i++) {
    test[i] = Number(prompt("please insert a number"));
}
alert(smallestTwo(test));
