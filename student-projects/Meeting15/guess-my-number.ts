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


let winner = false;
let secretNumber;

alert("Let's start the game!");

while (confirm("Would you like to play? Click 'Cancel' to stop")) {

    let difficulty = prompt("Choose the difficulty level:\n" +
        "hard (a number between 0-1000)\n" +
        "normal (a number between 0-100)\n" +
        "easy (a number between 0-10)"
    );

    if (difficulty === null) {
        alert("You chose 'Cancel' - ending the game!");
        break;
    }
    else if (difficulty !== "hard" && difficulty !== "normal" && difficulty !== "easy") {
        difficulty = prompt("You didn't chose a valid value.\n" +
            "Please choose between these three options:\n" +
            "hard (a number between 0-1000)\n" +
            "normal (a number between 0-100)\n" +
            "easy (a number between 0-10)"
        )
    } else {
        switch (difficulty) {
            case "hard":
                secretNumber = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
                break;
            case "normal":
                secretNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
                break;
            case "easy":
                secretNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
                break;
        }
    }

    let guessNumberInput = prompt("Enter the number of gusses:");
    let guessNumber = Number(guessNumberInput);

    if (guessNumberInput === null) {
        alert("You chose 'Cancel' - ending the game!");
        break;
    } else {
        while (isNaN(guessNumber)) {
            guessNumber = Number(prompt("You didn't chose a valid value.\n" +
                "Please enter the number of gusses:"
            ));
        }

    }

    let playMode = prompt("Choose a play mode:\n" +
        "classic (above/bellow the secret number value)\n" +
        "hot/cold (closer/further from the secet number)"
    );

    if (playMode === null) {
        alert("You chose 'Cancel' - ending the game!");
        break;
    } else {
        while (playMode !== "classic" && playMode !== "hot/cold") {
            playMode = prompt("You didn't chose a valid value.\n" +
                "Please choose between the two option:\n" +
                "classic\n" +
                "hot/cold"
            );
        }
    }

    let previousNumber = secretNumber + Infinity;
    let previousDistance = Infinity;

    for (let i = 0; i < guessNumber; i++) {
        let inputNumber = Number(prompt("Enter the " + (i + 1) + "-nth number:"));

        while (isNaN(inputNumber)) {
            inputNumber = Number(prompt("You didn't chose a valid value.\n" +
                "Enter a number of your choise: "
            ));
        }

        if (inputNumber === secretNumber) {
            alert("You won! The secret number is: " + secretNumber);
            winner = true;
            break;
        } else switch (playMode) {
            case "classic":
                if (inputNumber > secretNumber) {
                    alert("The number " + inputNumber + " is bigger than the secret number.");
                }
                else {
                    alert("The number " + inputNumber + " is smaller than the secret number.");
                }
                break;
            case "hot/cold":
                let distance = Math.abs(inputNumber - secretNumber);
                if (distance > previousDistance) {
                    alert("cold!");
                } else {
                    alert("hot!");
                }
                previousNumber = inputNumber;
                previousDistance = Math.abs(previousNumber - secretNumber);
                break;
        }
    }

    if (!winner) {
        alert("You didn't guess the secret number.\n" +
            "The secret number is: " + secretNumber
        );
    }

}

alert("You chose to end the game.\n" +
    "See you next time!"
);
