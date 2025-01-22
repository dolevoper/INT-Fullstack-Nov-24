// 3. Read a number (N). Read N numbers. Print the median (if N is odd then (N + 1)/2 else the average of N/2 and N/2 + 1)
var numbers = [];
var N = Number(prompt("Enter how many number you would like to choose:"));
for (var i = 0; i < N; i++) {
    numbers[i] = Number(prompt("Please enter a number:"));
}
var sortedNumbers = sortingArray(numbers);
if (N % 2 === 0) {
    var num1 = sortedNumbers[(N / 2)];
    var num2 = sortedNumbers[(N / 2) + 1];
    alert((num1 + num2) / (num1 * num2));
}
else {
    alert(sortedNumbers[((N + 1) / 2)]);
}
function sortingArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var number = array[j];
                array[j] = array[j + 1];
                array[j + 1] = number;
            }
        }
    }
    return array;
}
