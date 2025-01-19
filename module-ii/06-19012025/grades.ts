const numbers: number[] = [];

let userInput = prompt("Please enter a number");
let count = 0;

while (userInput !== null) {
    numbers[count] = Number(userInput);
    count++;

    userInput = prompt("Please enter a number");
}

for (let i = 0; i < count; i++) {
    alert(numbers[i]);
}
