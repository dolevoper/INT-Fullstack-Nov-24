const [,, firstInput, secondInput] = process.argv;

const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

if (isNaN(firstNumber)) {
    console.error(`${firstInput} is not a number`);
} else if (isNaN(secondNumber)) {
    console.error(`${secondInput} is not a number`);
} else {
    console.log(firstNumber + secondNumber);
}
