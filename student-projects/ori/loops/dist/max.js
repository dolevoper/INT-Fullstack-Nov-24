function isValidNumber(value) {
    return !isNaN(Number(value)) && value.trim() !== "";
}
var biggest = null;
var currentNumber;
var roundsinput = prompt("how many numbers do you want to enter?");
if (!roundsinput || !isValidNumber(roundsinput)) {
    alert("Error: This isn't a valid number!");
}
else {
    var rounds = Number(roundsinput);
    for (var i = 1; i <= rounds; i++) {
        var input = prompt(i + "th number");
        if (!input || !isValidNumber(input)) {
            alert("Error: This isn't a valid number!");
            break;
        }
        currentNumber = Number(input);
        if (biggest === null || currentNumber > biggest) {
            biggest = currentNumber;
        }
    }
    if (biggest !== null) {
        alert(biggest + " is the biggest number.");
    }
    else {
        alert("No valid numbers were entered.");
    }
}
