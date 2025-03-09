var sumNumbers = 0;
var count = 0;
while (true) {
    var input = prompt("Please enter a number:\n" +
        "press cancel to end the program");
    if (input === null || input.trim() === "") {
        break;
    }
    var numberToAdd = Number(input);
    if (isNaN(numberToAdd)) {
        alert("Invalid input. Please enter a valid number");
        continue;
    }
    sumNumbers += numberToAdd;
    count++;
}
if (count > 0) {
    var average = sumNumbers / count;
    alert(average);
}
else {
    alert("No numbers were entered.");
}
