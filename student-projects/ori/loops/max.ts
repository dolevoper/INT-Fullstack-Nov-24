function isValidNumber(value: string): boolean {
    return !isNaN(Number(value)) && value.trim() !== "";
}

let biggest: number | null = null;
let currentNumber: number;
let numbersum: number = 0;

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
        numbersum = numbersum + currentNumber;

        if (biggest === null || currentNumber > biggest) {
            biggest = currentNumber;
        }
    }

    if (biggest !== null) {
        alert(biggest + ` is the biggest number.`);
        const average  = numbersum / rounds;
        alert(`Your input average is ` + average)
    } else {
        alert("No valid numbers were entered.");
    }
}
