var difficulty = 1;
var numberOfGuess = 3;
var playMode = 1;
while (true) {
    var userInput = prompt("Enter your choice: new game(1), change settings(2), or quit(3)");
    switch (userInput) {
        case "1":
            var secretNumber = Math.floor(Math.random() * (10 * difficulty)) + 1;
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
                    if (i === numberOfGuess - 1) {
                        alert("You lose! The number was " + secretNumber);
                        previousGuess = guess;
                    }
                }
                break;
            }
        case "2":
            difficulty = Number(prompt("Enter difficulty level (1=10, 2=20, etc.)"));
            numberOfGuess = Number(prompt("Enter number of guesses"));
            playMode = Number(prompt("Enter play mode(1 for classic, 2 for hot/cold)"));
            break;
    }
    if (userInput === "3") {
        break;
    }
}
