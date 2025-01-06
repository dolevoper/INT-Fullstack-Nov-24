const randomNumber = Math.floor(Math.random() * 20) + 1;
var guess;
alert("I'm thinking of a number between 1 and 20. Can you guess what it is?");
guess = Number(prompt("Guess my number (try 1/3)"));

if (isNaN(guess)) {
    alert("You must enter a number");
    }
    else {

if (guess === randomNumber) {
  alert("Congratulations! You guessed my number!");
} 
    else {
        if (guess > randomNumber) {
            alert("Sorry, you guessed too high");
        }
        else if (guess < randomNumber) {
            alert("Sorry, you guessed too low");
        }
        
             guess = Number(prompt("Guess my number (try 2/3)"));

            if (isNaN(guess)) {
                alert("You must enter a number");
                }
                else {

            if (guess === randomNumber) {
            alert("Congratulations! You guessed my number!");
            } 
                else {
                    if (guess > randomNumber) {
                        alert("Sorry, you guessed too high");
                    }
                    else if (guess < randomNumber) {
                        alert("Sorry, you guessed too low");

                }
                
                        guess = Number(prompt("Guess my number (try 3/3)"));

                            if (isNaN(guess)) {
                                alert("You must enter a number");
                                }
                                else {

                            if (guess === randomNumber) {
                            alert("Congratulations! You guessed my number!");
                            } 
                                else {
                                    alert("Sorry, you lost. It was " + randomNumber);
                                        }
                                    }
                                }
                            }
                        }
                    }
                
            