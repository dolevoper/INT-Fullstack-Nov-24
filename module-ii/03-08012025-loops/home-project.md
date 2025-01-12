1. Fix avg so the user should click the "cancel" button to finish the input (update the prompt to reflect the change)
2. Student stats
    * First ask the user which operation he want to perform: max, min
    * Read student grades using 2 prompts (full name then grade)
    * Validate grades (0 - 100)
    * Ask to fix invalid grades
    * Stop reading students when user clicks "cancel"
    * Display the student's name according to the requested operation
3. I have time for a full guess my number project!
    * Add a main menu where the user can start a new game, change the settings, or quit
    * After each play, return to the main menu
    * If the user clicks "cancel" in the prompt, allow the user to give up (ask if the user wants to give up)
    * Settings to modify:
        * Difficulty - change the range the selected number can be chosen from (higher difficulty === wider range)
        * Number of gueeses
        * Play mode - classic (above/bellow) or hot/cold (remember the previous guess and say hot/cold if the current guess is closer/further from the secret number respectively)
    * Validate all the inputs
    * Handle "cancel"