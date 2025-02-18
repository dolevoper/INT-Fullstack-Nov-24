var array = [];
for (var i = 0; i < 10; i++) {
    array[i] = Number(prompt("please enter a number"));
}
alert(array);
for (var l = 1; l < array.length; l++) {
    var maxNumber = -Infinity;
    for (var i = 0; i < array.length - l; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
            if (array[array.length - l] < maxNumber) {
                array[i] = array[array.length - l];
                array[array.length - l] = maxNumber;
            }
        }
    }
}
alert(array);
