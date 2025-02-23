// get two numbers and an operator and return the result

const number1toOperator: string | null = prompt('Enter the first number');
const number2toOperator: string | null = prompt('Enter the second number');

// check if number is a number and not a string
if (!(Number(number1toOperator)) || !(Number(number2toOperator)) && Number(number1toOperator) !== 0 && Number(number2toOperator) !== 0){
    alert('Please enter a valid number');
}

const operator: string | null = prompt('Enter the operator');
//check if operator is valid
if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){
    alert('Please enter a valid operator');
}

// check if user not devide by 0
if (operator === '/' && Number(number2toOperator) === 0){
    alert('You can not devide by 0');
}

// All values are legal
if (Number(number1toOperator) && Number(number2toOperator) && operator){
    if(operator === '+'){
        alert(Number(number1toOperator) + Number(number2toOperator));
    } else if(operator === '-'){
        alert(Number(number1toOperator) - Number(number2toOperator));
    } else if(operator === '*'){
        alert(Number(number1toOperator) * Number(number2toOperator));
    } else if(operator === '/'){
        alert(Number(number1toOperator) / Number(number2toOperator));
    }
}
