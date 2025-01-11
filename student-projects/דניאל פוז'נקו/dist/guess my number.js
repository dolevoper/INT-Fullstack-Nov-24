// 3. I have time for a full guess my number project!
//     * Add a main menu where the user can start a new game, change the settings, or quit
//     * After each play, return to the main menu
//     * If the user clicks "cancel" in the prompt, allow the user to give up (ask if the user wants to give up)
//     * Settings to modify:
//         * Difficulty - change the range the selected number can be chosen from (higher difficulty === wider range)
//         * Number of gueeses
//         * Play mode - classic (above/bellow) or hot/cold (remember the previous guess and say hot/cold if the current guess is closer/further from the secret number respectively)
//     * Validate all the inputs
//     * Handle "cancel"
var difficulty = 1;
var numberOfGuess = 3;
var playMode = 1;
while (true) {
    var userInput = prompt("Enter your choice: new game(1), change settings(2), or quit(3)");
    switch (userInput) {
        case "1":
            var secretNumber = Math.floor(Math.random() * difficulty * 10);
            if (playMode === 1) {
                for (var i = 0; i < numberOfGuess; i++) {
                    var guess = Number(prompt("Enter your guess(" + (i + 1) + "/" + numberOfGuess + ")"));
                    if (guess === secretNumber) {
                        alert("You win!");
                        break;
                    }
                    else if (guess > secretNumber) {
                        alert("Too high");
                    }
                    else {
                        alert("Too low");
                        if (i === numberOfGuess - 1) {
                            alert("You lose! The number was " + secretNumber);
                        }
                    }
                }
            }
            if (playMode === 2) {
                var previousGuess = 0;
                for (var i = 0; i < numberOfGuess; i++) {
                    var guess = Number(prompt("Enter your guess(" + (i + 1) + "/" + numberOfGuess + ")"));
                    if (guess === secretNumber) {
                        alert("You win!");
                        break;
                    }
                    else if (Math.abs(guess - secretNumber) <
                        Math.abs(previousGuess - secretNumber)) {
                        alert("Hot");
                    }
                    else {
                        alert("Cold");
                    }
                }
            }
    }
}
