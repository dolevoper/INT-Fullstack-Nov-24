let sumNumbers = 0;

const numbersToRead = Number(prompt("how many numbers do you want to input?"));

for (let i = 0; i < numbersToRead; i++) {
    const numberToAdd = Number(prompt("please enter a number"));

    // sumNumbers = sumNumbers + numberToAdd
    sumNumbers += numberToAdd;
}

const average = sumNumbers / numbersToRead;

alert(average);

// 1 + 0 = 1
// 2 + 0 = 2
// 1000 + 0 = 1000
// x + 0 = x
