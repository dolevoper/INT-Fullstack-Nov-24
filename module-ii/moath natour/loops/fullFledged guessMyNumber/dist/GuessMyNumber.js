var menu;
var startGame = "menu";
var difficulty = "easy";
var range = 10;
var amountOfGuesses = 1;
var playMode = "standard";
var quitGame = false;
while ((startGame === "menu" || startGame === "play") && !quitGame) {
    menu = prompt("For a new game, type 'n'" + "\n" + "for settings, type 's'" + "\n" + "to quit, type 'q'");
    var returnToMenu = "no";
    switch (menu) {
        case "n":
            startGame = "play";
            break;
        case "q":
            quitGame = true;
            break;
        case "s":
            difficulty = prompt("choose difficulty: " + "\n" + "easy" + "\n" + "standard" + "\n" + "hard");
            switch (difficulty) {
                case "easy":
                    range = 10;
                    break;
                case "standard":
                    range = 20;
                    break;
                case "hard":
                    range = 100;
                    break;
                default:
                    alert("if you don't choose an option dificulty will be set to 'easy'");
                    startGame = "menu";
                    break;
            }
            playMode = prompt("choose play mode from the following options:" + "\n" + "standard" + "\n" + "classic");
            switch (playMode) {
                case "standard":
                    playMode = "standard";
                    break;
                case "classic":
                    playMode = "classic";
                    break;
                case "dice":
                    break;
                default:
                    alert("if you don't choose a play mode, the default will be 'standard' ");
                    startGame = "menu";
                    break;
            }
            amountOfGuesses = Number(prompt("choose number of guesses: " + "\n" + "(Note: you can modifiy number of guesses for standard and easy mode only.)"));
            while (amountOfGuesses <= 0 || amountOfGuesses >= range || Number.isNaN(amountOfGuesses)) {
                amountOfGuesses = Number(prompt("please enter a valid number between 1 and " + range));
            }
            startGame = "menu";
            break;
    }
    var correctGuess = void 0;
    var randomGuess = void 0;
    var input = void 0;
    while (startGame === "play" && playMode === "standard" && returnToMenu === "no") {
        if (difficulty === "hard" || amountOfGuesses === 0) {
            amountOfGuesses = 1;
        }
        correctGuess = Math.floor(Math.random() * (range + 1));
        for (amountOfGuesses; amountOfGuesses > 0 && returnToMenu === "no"; amountOfGuesses--) {
            input = (prompt("Type a number between 0 and " + range + "\n" + "Guesses left: " + amountOfGuesses));
            randomGuess = Number(input);
            while ((randomGuess < 0 || randomGuess > range || Number.isNaN(randomGuess) || input === null) && returnToMenu === "no") {
                if (input === null) {
                    returnToMenu = prompt("Do you want to quit? (type ''no'' to continue)" + "\n" + "yes" + "\n" + "no");
                }
                if (returnToMenu === "no") {
                    input = (prompt("Type a number between 0 and " + range + "\n" + "Guesses left: " + amountOfGuesses));
                    randomGuess = Number(input);
                }
                if (randomGuess < 0 || randomGuess > range) {
                    alert("Obviously that is incorrect! Guess a number between 0  and " + range + "!");
                }
                else if (Number.isNaN(randomGuess)) {
                    alert("Guess must be a valid number!");
                }
            }
            if (randomGuess === correctGuess && returnToMenu === "no") {
                alert("winner winner chicken dinner!!!" + "\n" + correctGuess + " is the correct answer!");
                startGame = "menu";
                amountOfGuesses = 0;
            }
            else if (amountOfGuesses === 1 && randomGuess !== correctGuess && returnToMenu === "no") {
                alert("unlucky! you are out of guesses, better luck next time!");
                startGame = "menu";
            }
        }
    }
    while (startGame === "play" && playMode === "classic" && returnToMenu === "no") {
        if (difficulty === "hard" || amountOfGuesses === 0) {
            amountOfGuesses = 1;
        }
        correctGuess = Math.floor(Math.random() * (range + 1));
        for (amountOfGuesses; amountOfGuesses > 0 && returnToMenu === "no"; amountOfGuesses--) {
            input = (prompt("Type a number between 0 and " + range + "\n" + "Guesses left: " + amountOfGuesses));
            randomGuess = Number(input);
            while ((randomGuess < 0 || randomGuess > range || Number.isNaN(randomGuess) || input === null) && returnToMenu === "no") {
                if (input === null) {
                    returnToMenu = prompt("Do you want to quit? (type ''no'' to continue)" + "\n" + "yes" + "\n" + "no");
                }
                if (returnToMenu === "no") {
                    input = (prompt("Type a number between 0 and " + range + "\n" + "Guesses left: " + amountOfGuesses));
                    randomGuess = Number(input);
                }
                if (randomGuess < 0 || randomGuess > range) {
                    alert("Obviously that is incorrect! Guess a number between 0  and " + range + "!");
                }
                else if (Number.isNaN(randomGuess)) {
                    alert("Guess must be a valid number!");
                }
            }
            if (randomGuess > correctGuess && amountOfGuesses > 1 && returnToMenu === "no") {
                alert("that is incorrect! you should try a lower number." + "\n" + "guesses left: " + amountOfGuesses);
            }
            else if (randomGuess < correctGuess && amountOfGuesses > 1 && returnToMenu === "no") {
                alert("that is incorrect! you should try a higher number.");
            }
            if (randomGuess === correctGuess && returnToMenu === "no") {
                alert("winner winner chicken dinner!!!" + "\n" + correctGuess + " is the correct answer!");
                startGame = "menu";
                amountOfGuesses = 0;
            }
            else if (amountOfGuesses === 1 && randomGuess !== correctGuess && returnToMenu === "no") {
                alert("unlucky! you are out of guesses, better luck next time!");
                startGame = "menu";
            }
        }
    }
}
