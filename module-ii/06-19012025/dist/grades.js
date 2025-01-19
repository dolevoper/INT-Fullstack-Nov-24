var numbers = [];
var userInput = prompt("Please enter a number");
var count = 0;
while (userInput !== null) {
    numbers[count] = Number(userInput);
    count++;
    userInput = prompt("Please enter a number");
}
for (var i = 0; i < count; i++) {
    alert(numbers[i]);
}
