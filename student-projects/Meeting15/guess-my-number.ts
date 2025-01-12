// 4. Improve our guess my number game
//     * Allow the user 3 guesses
//     * After each guess, if the user got it wrong, tell the user if his number was above or bellow the secret number
//     * Stop the program on invalid input
// 5. BONUS - super guess my number
//     * The user chooses how many guesses before game over
//     * On invalid input, show an appropriate message and ask for a valid input (invalid input is not considered a guess)


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

let difficultyStat = true;
let guessNumberStat = true;
let playModeStat = true;

while (confirm("Would you like to continue playing? Click 'Cancel' to stop")) {
    alert("Let's start the game!");

    while (difficultyStat) {
        const difficulty = prompt("Choose the difficulty level:\n" +
            "hard\n" +
            "normal\n" +
            "easy"
        );

        if (difficulty === "hard" || difficulty === "normal" || difficulty === "easy") {
            difficultyStat = false;
        }
        else {
            alert("you didn't chose a valid value.\n" +
                "Please choose between one of the following options:\n" +
                "hard\n" +
                "normal\n" +
                "easy"
            );
        }
    }

    while (guessNumberStat){
        const guessNumber = Number(prompt("Enter the number of gusses:"));

        if (isNaN(guessNumber)){
            alert("You didn't chose a valid value.\n" +
                "Please choose a number for the number of guesses."
            );
            continue;
        }
        else {
            guessNumberStat = false;
        }
    }

    while (playModeStat) {
        const playMode = prompt("Choose a play mode:\n" +
            "classic (above/bellow the secret number value)\n" +
            "hot/cold (closer/further from the secet number)"
        );

        if (playMode === "classic" || playMode === "hot/cold") {
            playModeStat = false;
        } else {
            alert("You didn't chose a valid value.\n" +
                "Please choose between the two option:\n" +
                "classic\n" +
                "hot/cold"
            );
        }
    }

}

alert("You chose to end the game.\n" +
    "See you next time!"
);