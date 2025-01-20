// 2. Read 10 numbers. Alert all the numbers in ascending order (one alert or multiple) (don't use array methods)

const numbers: number[] = [];

let userInput = prompt("Please enter a number:");

while (userInput !== null) {
    numbers[numbers.length] = Number(userInput);
    userInput = prompt("Please enter a number:");
}

for (let i = 0; i < numbers.length - 1; i++) {
    for(let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j+1]) {
            let number = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j+1] = number;
        }
    }
}

for (let i = 0; i < numbers.length; i++) {
    alert(numbers[i]);
}



