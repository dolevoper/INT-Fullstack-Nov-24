var minNum = 1;
var maxNum = 100;
var answer;
var attempts;
var guess;
var running;
var gameSettings = { min: minNum, max: maxNum };
function startgame() {
    answer = Math.floor(Math.random() * (gameSettings.max - gameSettings.min + 1)) + gameSettings.min;
    attempts = 0;
    running = true;
    while (running) {
        guess = Number(prompt("Guess a number between " + gameSettings.min + " - " + gameSettings.max));
        if (isNaN(guess)) {
            alert("Please enter a valid number");
        }
        else if (guess < minNum || guess > maxNum) {
            alert("Please enter a valid number between ");
        }
        else {
            attempts++;
            if (guess < answer) {
                alert("TOO LOW! Please try again! ");
            }
            else if (guess > answer) {
                alert("TOO HIGH! Please try again!");
            }
            else {
                alert("Correct! the answer is " + answer + ". it took you " + attempts + " attempts");
                running = false;
            }
        }
    }
}
function changeSettings() {
    var newMin = Number(prompt("Please chose your new minimum number"));
    var newMax = Number(prompt("Please chose your new maximum number"));
    if (isNaN(newMin) || isNaN(newMax) || newMin >= newMax) {
        alert("Wrong settings please try again");
    }
    else {
        gameSettings.min = newMin;
        gameSettings.max = newMax;
        alert("The settings have changed\nyour new minimum is " + gameSettings.min + ",\nand your new maximum number is " + gameSettings.max);
    }
}
function mainMenu() {
    var choice;
    do {
        choice = prompt("Please choose an option\n1. Start a new game\n2. Change the settings\n3. quit the game");
        switch (choice) {
            case "1":
                startgame();
                break;
            case "2":
                changeSettings();
                break;
            case "3":
                var quitGame = confirm("Are you sure you want to quit the game already");
                if (!quitGame) {
                    mainMenu();
                    break;
                }
                alert("Thanks for playing have a good day!");
                break;
            default:
                alert("Invalid selection, Please try again");
        }
    } while (choice !== "3");
}
mainMenu();
