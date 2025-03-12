const nextNumber = prompt('Please enter a number (write "stop" to finish input)');

let sumNumbers = 0;

// const numbersToRead = Number(prompt("how many numbers do you want to input?"));

for (let i = 0; i < Infinity; i++) {
    const numberToAdd = Number(prompt("please enter a number"));

    if (numberToAdd) === "stop"{
        alert(sumNumbers + "this is your score")
    }

    // sumNumbers = sumNumbers + numberToAdd
    sumNumbers += numberToAdd;
}

const average = sumNumbers / 5;

alert(average);


// 1 + 0 = 1
// 2 + 0 = 2
// 1000 + 0 = 1000
// x + 0 = x
