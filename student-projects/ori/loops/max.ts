function isValidNumber(value: string): boolean {
    return !isNaN(Number(value)) && value.trim() !== "";
}

let biggest: number | null = null;

let currentNumber: number;
const roundsinput = prompt(`how many numbers do you want to enter?`);
if (!roundsinput || !isValidNumber(roundsinput)) {
    alert("Error: This isn't a valid number!");
}
else{
const rounds = Number(roundsinput);

    for (let i = 1; i <= rounds; i++){
        const input = prompt(i +`th number`);

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
        alert(biggest + ` is the biggest number.`);
    } else {
        alert("No valid numbers were entered.");
    }
}
