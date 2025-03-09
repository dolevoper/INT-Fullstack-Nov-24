const [,, ...inputs] = process.argv;

const numbers = inputs.map(Number);
const nanIndex = numbers.findIndex(isNaN);

if (nanIndex > -1) {
    console.error(`${inputs[nanIndex]} is not a number`);
    process.exit(1);
}

const sum = numbers.reduce(
    (res, currentNumber) => res + currentNumber,
    0
);

console.log(sum);
