// 3. Read N numbers. Print the median
// (if N is odd then (N + 1)/2 else the average of N/2 and N/2 + 1)
var amount = Number(prompt("Please enter the amount of numbers"));
var numbers = [];
for (var i = 0; i < amount; i++) {
    var getNumbers = Number(prompt("Please enter a number"));
    numbers.push(getNumbers);
}
var median;
if (amount % 2 === 1) {
    median = numbers[Math.floor(amount / 2)];
}
else {
    median = (numbers[amount / 2 - 1] + numbers[amount / 2]) / 2;
}
alert("The median is: " + median + "!");
