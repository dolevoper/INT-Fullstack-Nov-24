let sumNumbers = 0;
let count: number = 0;

while (true) {
    const input = prompt("Please enter a number:\n" +
            "press cancel to end the program");

    if (input === null || input.trim() === "") {
        break;
    }

    const numberToAdd = Number(input);

    if (isNaN(numberToAdd)) {
        alert("Invalid input. Please enter a valid number");
        continue;
    }

    sumNumbers += numberToAdd;
    count++;
}

if (count > 0) {
    const average = sumNumbers / count;
    alert(average);
} else {
    alert("No numbers were entered.");
}
