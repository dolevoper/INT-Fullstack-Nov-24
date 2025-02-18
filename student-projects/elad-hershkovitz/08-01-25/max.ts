let average = Number(prompt("first number"));

for (let i = 1; i < 5; i++) {
    const nextNumber = Number(prompt("number #" + (i + 1)));

    average = average + nextNumber;
}

alert(average);