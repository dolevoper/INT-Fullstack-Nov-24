let gameMode = "1";
let gameDifficulty = "medium";
let gameDifficultyRange : number = 25;
let gameGueeses : number = 5;
let guessesCount : number;
let guess: number | null = null;
let lastGuess: number | null = null;

alert("Let's play a game!");

function isValidNumber(value: string): boolean {
    return !isNaN(Number(value)) && value.trim() !== "";
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


game: while (true) {

    let option = prompt(
        "Please choose an option:\n" +
        "(start) Starts a new round\n" +
        "(settings) Settings\n" +
        "(quit) Quit"
    );

    switch (option) {
        case "start":
                guessesCount = 1 ;
                let randomInt: number = getRandomInt(1, gameDifficultyRange);
                alert("game start");
                round: while (guessesCount <= gameGueeses) {
                    const playerGuess: string | null = prompt("Guess a number between 1 and "+ gameDifficultyRange +":\n" +
                    "press cancel to quit back to main menu."
                    );
                    if (playerGuess === null || playerGuess.trim() === "") {
                        const confirme: string | null = prompt("Are you sure?\n" +
                    `if you want to quit type "yes" or press the ok`)
                        if (confirme !== null || confirme === "yes"){
                            break round;
                        }
                        continue round;
                        
                    }
                
                    if (!playerGuess || !isValidNumber(playerGuess)) {
                        alert("Error: Please enter a valid number!");
                        continue;
                    }
                    guess = Number(playerGuess);
                
                    if (guess === randomInt) {
                        alert(`Congratulations! You guessed the correct number: ${randomInt}`);
                        break round;
                    } 
                    if (gameMode === "1") {
                        if (guess < randomInt){
                        alert("Too low! Try again.");
                        } else {
                            alert("Too high! Try again.");
                        }
                    }
                    else{
                        if(lastGuess === null){
                            alert("sorry worng number, try again!");
                        }else if (Math.abs(lastGuess - randomInt) == Math.abs(guess - randomInt)){
                            alert("You stayed at the same distence! Try again.");
                            }else if(Math.abs(lastGuess - randomInt) > Math.abs(guess - randomInt)){
                                alert("Getting hotter! Try again.");
                            }else {
                                alert("Getting colder! Try again.");
                            }
                        lastGuess = guess;
                    }
                    guessesCount++;
                    if (guessesCount > gameGueeses){
                        alert("Sorry you lost!");
                    }
                }
                    
            break;
        case "settings":
            alert("settings");
            let settingoptions = prompt(
                "Please choose an setting to change:\n" +
                "(difficulty) Changes Difficulty\n" +
                "(gusses) Changes how many guesses you can have\n" +
                "(gamemode) Changes Game mode\n" +
                "press cancel to go back\n"
            );

            switch (settingoptions){




                default:
                    alert('"' + option + '" is not a valid choice');
                    break;
            }
            break;
        case "quit":
            break game;

        default:
            alert('"' + option + '" is not a valid choice');
            break;
    }
}
alert("thanks for playing!");

// let randomInt: number = getRandomInt(1, 10);
// console.log(`Generated random number (for debugging): ${randomInt}`);

// let guess: number | null = null;

// var trycount : number = 1;

// while (trycount !== 4) {
//     const playerGuess: string | null = prompt("Guess a number between 1 and 10:");

//     if (!playerGuess || !isValidNumber(playerGuess)) {
//         alert("Error: Please enter a valid number!");
//         continue;
//     }

//     guess = Number(playerGuess);

//     if (guess === randomInt) {
//         alert(`Congratulations! You guessed the correct number: ${randomInt}`);
//         break;
//     } else if (guess < randomInt) {
//         alert("Too low! Try again.");
//     } else {
//         alert("Too high! Try again.");
//     }
//     trycount = trycount + 1;
// }

// const firstNumberInput = prompt("Enter the first number");
// const firstNumber = Number(firstNumberInput);

// if (isNaN(firstNumber)) {
//     alert('"' + firstNumberInput + '" is not a valid number');
// } else {
//     const secondNumberInput = prompt("Please enter the second number");
//     const secondNumber = Number(secondNumberInput);

//     if (isNaN(secondNumber)) {
//         alert('"' + secondNumberInput + '" is not a valid number');
//     } else {
//         const operator = prompt(
//             "Please choose an operation:\n" +
//             "(+) Addition\n" +
//             "(-) Subtraction\n" +
//             "(*) Multiplication\n" +
//             "(/) Division"
//         );

//         switch (operator) {
//             case "+":
//                 alert("The result is: " + (firstNumber + secondNumber));
//                 break;
//             case "-":
//                 alert("The result is: " + (firstNumber - secondNumber));
//                 break;
//             case "*":
//                 alert("The result is: " + (firstNumber * secondNumber));
//                 break;
//             case "/":
//                 if (secondNumber === 0) {
//                     alert("Division by 0 is illegal");
//                 } else {
//                     alert("The result is: " + (firstNumber / secondNumber));
//                 }
                
//                 break;
//             default:
//                 alert('"' + operator + '" is not a valid operation');
//                 break;
//         }
//     }
// }
