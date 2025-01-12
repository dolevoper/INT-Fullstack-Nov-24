let sumNumbers = 0;

const numbersToRead = Number(prompt("how many numbers do you want to input?"));

for (let i = 0; i < numbersToRead; i++) {
    const numberToAdd = Number(prompt("please enter a number"));

    sumNumbers += numberToAdd;
}

const average = sumNumbers / numbersToRead;

alert(average);
