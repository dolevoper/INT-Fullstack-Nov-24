let max = -Infinity;
let secondMax = -Infinity; 

for (let i = 0; i < 5; i++) {
    const newNumber = Number(prompt("Please enter a number"));

    if (newNumber > max) {
        secondMax = max;
        max = newNumber;
    } else if (newNumber > secondMax) {
        secondMax = newNumber;
    }
}

alert(secondMax);
