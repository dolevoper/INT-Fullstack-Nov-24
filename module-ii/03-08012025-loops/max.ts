let max = Number(prompt("number #1"));

// i = i + 1
// i += 1
// i++
// ++i

for (let i = 0; i < 9; i++) {
    const nextNumber  = Number(prompt("number #" + (i + 2)));

    if (nextNumber > max) {
        max = nextNumber;
    }
}

alert(max);
