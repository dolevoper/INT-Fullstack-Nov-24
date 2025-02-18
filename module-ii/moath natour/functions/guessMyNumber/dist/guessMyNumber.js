var menu = "menu";
var difficulty = "meduim";
var range = 10;
var numberOfGuesses = 1;
var startGame = "quit";
var settings = "closed";
var gameMode = "standard";
var randomGuess = 0;
while (menu !== "quit") {
    menu = prompt("MAIN MENU\n"
        + "To play type 'p'. \n"
        + "To change settings type 's'.\n "
        + "To quit type 'q' or cancel the prompt");
    switch (menu) {
        case "p":
            startGame = "play";
            break;
        case "q":
            menu = "quit";
            break;
        case "s":
            settings = "open";
            break;
        default:
            null;
            menu = "quit";
            break;
    }
    if (settings === "open") {
        var whichSetting = prompt("choose which setting to modify: \n"
            + "To change difficulty type 'd'\n"
            + "To change game mode type 'm'\n"
            + "To change number of guesses type 'g'"
            + "cancel to go back to the previous menu.");
        switch (whichSetting) {
            case "d":
                var chooseDifficulty = prompt("Choose difficulty: " + "(difficulty changes the range you will have to guess from on standard and above/below modes!)\n"
                    + "For easy difficulty type 'e'\n"
                    + "For meduim difficulty type 'm'\n"
                    + "For hard difficulty type 'h'\n"
                    + "cancel to go back to the previous menu.");
                switch (chooseDifficulty) {
                    case "e":
                        range = 10;
                        break;
                    case "m":
                        range = 20;
                        break;
                    case "h":
                        range = 100;
                        break;
                }
                break;
            case "m":
                var chooseGameMode = prompt("Choose game mode: \n"
                    + "To play in standard mode type 's'\n"
                    + "To play in Above/Below mode type 'a'\n"
                    + "To play in dice mode type 'd'\n"
                    + "cancel to go back to the previous menu.");
                switch (chooseGameMode) {
                    case "s":
                        gameMode = "standard";
                        break;
                    case "a":
                        gameMode = "above";
                        break;
                    case "d":
                        gameMode = "dice";
                        break;
                }
                break;
            case "g":
                var input = prompt("choose the number of guesses: ");
                numberOfGuesses = Number(input);
                break;
        }
        settings = "closed";
    }
    while (startGame === "play" && gameMode === "standard") {
        var answer = Math.floor(Math.random() * (range + 1));
        for (var i = numberOfGuesses; i > 0 && startGame === "play"; i--) {
            var input = prompt("Guess a number between 0 and " + range + ":");
            randomGuess = validate(input);
            if (randomGuess === answer) {
                alert("correct!");
                i = 0;
                startGame = "quit";
            }
            else if (randomGuess !== answer && i === 1) {
                alert("unlucky! you out of guesses, better luck next time!");
                startGame = "quit";
            }
            else {
                alert("that is incorrect you have " + (i - 1) + " tries left");
            }
        }
    }
}
function validate(input) {
    if (input === null) {
        startGame = prompt("are you sure you want to quit?\n" + "(y/n)");
        switch (startGame) {
            case "y":
                startGame = "quit";
                break;
            default:
                startGame = "play";
                break;
        }
    }
    else {
        Number(input);
        while (Number.isNaN(input)) {
            input = Number(prompt("please enter a valid number!"));
        }
    }
    return input;
}
