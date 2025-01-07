1. Complete simple calculator
2. Add error handling to calculator - on error, show error message and don't continue the program
    * Validate that the user entered valid numbers
    * Validate that the user entered a valid operator
    * Validate that the user is not trying to divide by 0
3. Create a guess my number game
    * The computer chooses a random number
    * The user enters a guess
    * The computer tells the user if their guess was right
    * Display proper error message when the input is not a valid number
    (Single guess)
4. Improve our guess my number game
    * Allow the user 3 guesses
    * After each guess, if the user got it wrong, tell the user if his number was above or bellow the secret number
    * Stop the program on invalid input
5. BONUS - super guess my number
    * The user chooses how many guesses before game over
    * On invalid input, show an appropriate message and ask for a valid input (invalid input is not considered a guess)
6. I have time for a full guess my number project!
    * Add a main menu where the user can start a new game, change the settings, or quit
    * After each play, return to the main menu
    * If the user clicks "cancel" in the prompt, allow the user to give up (ask if the user wants to give up)
    * Settings to modify:
        * Difficulty - change the range the selected number can be chosen from (higher difficulty === wider range)
        * Number of gueeses
        * Play mode - classic (above/bellow) or hot/cold (remember the previous guess and say hot/cold if the current guess is closer/further from the secret number respectively)
    * Validate all the inputs