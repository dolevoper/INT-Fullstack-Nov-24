let sumNumbers = 0;
let numberCount = 0;
let userInput = Number(prompt("Enter a number"));

while (userInput !== null) {
    let number = Number(userInput);
    if (isNaN(number)) { 
        alert("You must enter a number");
    } else {
        sumNumbers += number;
        numberCount++;
    }
    userInput = Number(prompt("Enter a number"));
}
    const avg = sumNumbers / numberCount;
    alert("The average is " + avg);
