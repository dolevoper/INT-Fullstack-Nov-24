let sumNumbers = 0;
let count : number = 0;

while (true) {
    const numberToAdd = Number(prompt("please enter a number"));
    if (numberToAdd === null) {
        break;
    }
    sumNumbers += numberToAdd;

    count++;

    
}

const average = sumNumbers / count;

alert(average);