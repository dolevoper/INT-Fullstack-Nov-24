
let smallest: number | null = null;
let currentNumber: number;

while (true){
    const input = prompt('Please enter a number (write "stop" to finish input)');

    if (input === `stop`) {
        alert("stopping");
        break;
    }

    currentNumber = Number(input);

    if (smallest === null || currentNumber < smallest) {
        smallest = currentNumber;
    }
}

if (smallest !== null) {
    alert(smallest + ` is the biggest number.`);
} else {
    alert("No valid numbers were entered.");
}

