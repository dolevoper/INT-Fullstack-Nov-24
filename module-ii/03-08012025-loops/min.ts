let min = Infinity;
let userInput = prompt('Please enter a number (write "stop" to finish input)');

while (userInput !== "stop") {
    const nextNumber = Number(userInput);
    
    if (nextNumber < min) {
        min = nextNumber;
    }

    userInput = prompt('Please enter a number (write "stop" to finish input)');
}

alert(min);
