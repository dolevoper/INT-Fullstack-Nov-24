
let smallest: number | null = null;
let currentNumber: number;
let numbersum: number = 0;

const numbersToRead = prompt(`how many numbers do you want to enter?`);

const rounds = Number(numbersToRead);

    for (let i = 0; i < rounds; i++){
        const input = prompt(+i + 1 +`th number`);

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
        alert(biggest + ` is the biggest number.`);
        const average  = numbersum / (rounds + 1);
        alert(`Your input average is ` + average)
    } else {
        alert("No valid numbers were entered.");
    }
}
