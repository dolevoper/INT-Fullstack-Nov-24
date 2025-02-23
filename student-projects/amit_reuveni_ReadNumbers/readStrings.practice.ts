
// 1. Read string from the user until the user hits cancel. Ask the user for a number (N). Alert the Nth string

const strings: string[] = [];

let userStrings = prompt("Please enter a name");

    while (userStrings === null || userStrings.trim() === "") {
        userStrings = prompt("Please enter a valid name (not empty).")
    }
    
    while (userStrings !== null) {
        strings.push(userStrings);
        userStrings = prompt("Please enter a name");
    }

if (strings.length > 0) {
    let userChoice = prompt("Please choose a number between 1 and " + strings.length);
    while (userChoice === null && (isNaN(Number(userChoice)) || Number(userChoice) < 1 || Number(userChoice) > strings.length)) {
        userChoice = prompt("Invaldid choice. Please choose a number between 1 and " + strings.length);
    }

    if (userChoice !== null) {
        let choiceIndex = Number(userChoice) - 1;
        alert("You chose: " + strings[choiceIndex]);
    }
} else {
    alert("No names were entered");
}