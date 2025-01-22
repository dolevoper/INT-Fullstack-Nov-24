// // 4. Create a function that accepts an array of number and returns the 2 smallest numbers

const numbers: number[] = [];

let userInput = prompt("Please enter a number:");

while(userInput !== null) {
    numbers[numbers.length] = Number(userInput);

    userInput = prompt("Please enter a number:")
}

const sortedNumbers: number[] = sortingArray(numbers);

alert("The 2 smallest numbers are: " + sortedNumbers[0] + ", " + sortedNumbers[1]);

function sortingArray(array: number[]) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let number = array[j];
                array[j] = array[j + 1];
                array[j + 1] = number;
            }
        }
    }

    return array;
}