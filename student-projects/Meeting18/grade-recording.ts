// // 5. Create a grade recording system
// //     - the user should be able to record new grades
// //     - the user should be able to see all the existing grades (single alert)
// //     - the user should be able to remove grades
// //     - the user should be able to get stats (min, max, avg, mid)
// //     - the user should be able to quit the program


const grades: number[] = [];

gradesSystem();

function gradesSystem() {
    let operation: Function | undefined = userChoise;

    while (operation) {
        operation = operation();

    }

    alert("Exiting grade recording system.");
}

function userChoise() {
    const userInput = prompt("Please choose between the following options:\n" +
        "1. Record new grades.\n" +
        "2. View all the grades.\n" +
        "3. Remove grades.\n" +
        "4. Get stats of the grades."
    );

    while (userInput !== null) {
        switch (userInput) {
            case "1": recordGrades(grades);
            case "2": viewGrades(grades);
            case "3": removeGrades(grades);
            case "4":
            //get stats (min, max, avg, mid)
            case undefined: undefinedCase(userChoise);
            default: defaultCase(userInput, userChoise);
        }
    }
}

function recordGrades(numbers: number[]) {
    let userInput = prompt("Please enter a new grade:");

    while (userInput !== null) {
        numbers[numbers.length] = Number(userInput);

        userInput = prompt("Please enter a new grade:");
    }

    return userChoise;
}

function viewGrades(numbers: number[]) {
    alert("The grades that had been record are: " + numbers + ".");

    return userChoise;
}

function removeGrades(numbers: number[]) {
    let userInput = prompt("Please enter the number of the grade you would like to remove:");

    while (userInput !== null) {
        const index = Number(userInput);

        if (isNaN(index)) {
            alert("You didn't chose a valid value.\n" +
                "Please chose a nubmer not a string."
            );
            return removeGrades;
        } else {
            const deletedGrade = numbers[index];
            numbers = numbers.slice(index, 1);
            alert("You chose to remove the " + index + "-nth grade, which was: " + deletedGrade + ".").;
        }

        userInput = prompt("Please enter the number of the grade you would like to remove:");
    }

    return userChoise;
}

function gradesStatus(numbers: number[]) {
    let userInput = prompt("Please chose the status you would like to view:\n" +
        "1. The minimum grade.\n" +
        "2. The maximum grade.\n" +
        "3. The average grade.\n" +
        "4. The median grade."
    );

    while (userInput !== null) {
        switch(userInput) {
            case "1": //min grade
            case "2": //max grade
            case "3": //avg grade
            case "3": //mid grade
            case undefined: //undefined
            default: defaultCase(userInput, gradesStatus);


        }
    }
}

function undefinedCase(userInput: Function) {
    const shouldQuit = confirm("Are you sure you want to quit the game?");
    return shouldQuit ? undefined : userInput;
}

function defaultCase(userInput: string, parentFunction: Function) {
    alert(`Sorry, I don't know what is "${userInput}"`);
    return parentFunction;
}


// function undefinedCase(currentRoom: Function) {
//     const shouldQuit = confirm("Are you sure you want to quit the game?");
//     return shouldQuit ? undefined : currentRoom;
// }



// // // 4. Create a function that accepts an array of number and returns the 2 smallest numbers

// const numbers: number[] = [];

// let userInput = prompt("Please enter a number:");

// while(userInput !== null) {
//     numbers[numbers.length] = Number(userInput);

//     userInput = prompt("Please enter a number:")
// }

// const sortedNumbers: number[] = sortingArray(numbers);

// alert("The 2 smallest numbers are: " + sortedNumbers[0] + ", " + sortedNumbers[1]);

// function sortingArray(array: number[]) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 let number = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = number;
//             }
//         }
//     }

//     return array;
// }