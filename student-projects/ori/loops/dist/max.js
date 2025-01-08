function isValidNumber(value) {
    return !isNaN(Number(value)) && value.trim() !== "";
}
var biggest = null;
var currentNumber;
var numbersum = 0;
var numbersToRead = prompt("how many numbers do you want to enter?");
if (!numbersToRead || !isValidNumber(numbersToRead)) {
    alert("Error: This isn't a valid number!");
}
else {
    var rounds = Number(numbersToRead);
    for (var i = 0; i < rounds; i++) {
        var input = prompt(+i + 1 + "th number");
        if (!input || !isValidNumber(input)) {
            alert("Error: This isn't a valid number!");
            break;
        }
        currentNumber = Number(input);
        numbersum += currentNumber;
        if (biggest === null || currentNumber > biggest) {
            biggest = currentNumber;
        }
    }
    if (biggest !== null) {
        alert(biggest + " is the biggest number.");
        var average = numbersum / (rounds + 1);
        alert("Your input average is " + average);
    }
    else {
        alert("No valid numbers were entered.");
    }
}
