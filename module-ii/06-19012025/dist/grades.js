var numbers = [];
var userInput = prompt("Please enter a number");
while (userInput !== null) {
    numbers[numbers.length] = Number(userInput); // numbers.push(Number(userInput));
    userInput = prompt("Please enter a number");
}
for (var i = 0; i < numbers.length; i++) {
    alert(numbers[i]);
}
