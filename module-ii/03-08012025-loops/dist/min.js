var min = Infinity;
var userInput = prompt('Please enter a number (write "stop" to finish input)');
while (userInput !== "stop") {
    var nextNumber = Number(userInput);
    if (nextNumber < min) {
        min = nextNumber;
    }
    userInput = prompt('Please enter a number (write "stop" to finish input)');
}
alert(min);
