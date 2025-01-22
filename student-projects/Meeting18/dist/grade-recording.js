// // 5. Create a grade recording system
// //     - the user should be able to record new grades
// //     - the user should be able to see all the existing grades (single alert)
// //     - the user should be able to remove grades
// //     - the user should be able to get stats (min, max, avg, mid)
// //     - the user should be able to quit the program
var grades = [];
gradesSystem();
function gradesSystem() {
    var operation = userChoise;
    while (operation) {
        operation = operation();
    }
    alert("Exiting grade recording system.");
}
function userChoise() {
    var userInput = prompt("Please choose between the following options:\n" +
        "1. Record new grades.\n" +
        "2. View all the grades.\n" +
        "3. Remove grades.\n" +
        "4. Get stats of the grades.");
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
function recordGrades(numbers) {
    var userInput = prompt("Please enter a new grade:");
    while (userInput !== null) {
        numbers[numbers.length] = Number(userInput);
        userInput = prompt("Please enter a new grade:");
    }
    return userChoise;
}
function viewGrades(numbers) {
    alert("The grades that had been record are: " + numbers + ".");
    return userChoise;
}
function removeGrades(numbers) {
    var userInput = prompt("Please enter the number of the grade you would like to remove:");
    while (userInput !== null) {
        var index = Number(userInput);
        if (isNaN(index)) {
            alert("You didn't chose a valid value.\n" +
                "Please chose a nubmer not a string.");
            return removeGrades;
        }
        else {
            var deletedGrade = numbers[index];
            numbers = numbers.slice(index, 1);
            alert("You chose to remove the " + index + "-nth grade, which was: " + deletedGrade + ".");
        }
        userInput = prompt("Please enter the number of the grade you would like to remove:");
    }
    return userChoise;
}
function gradesStatus(numbers) {
    var sortedGrades = sortingArray(grades);
    var userInput = prompt("Please chose the status you would like to view:\n" +
        "1. The minimum grade.\n" +
        "2. The maximum grade.\n" +
        "3. The average grade.\n" +
        "4. The median grade.");
    while (userInput !== null) {
        switch (userInput) {
            case "1": minGrade(grades);
            case "2": maxGrade(grades);
            case "3": averageGrade(grades);
            case "3": medianGrade(grades);
            case undefined: undefinedCase(gradesStatus);
            default: defaultCase(userInput, gradesStatus);
        }
    }
}
function sortingArray(numbers) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                var number = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = number;
            }
        }
    }
    return numbers;
}
function minGrade(numbers) {
    var sortedGrades = sortingArray(numbers);
    alert("The minimun grade is: " + sortedGrades[0] + ".");
    return gradesStatus;
}
function maxGrade(numbers) {
    var sortedGrades = sortingArray(numbers);
    var length = sortedGrades.length;
    alert("The maximum grade is: " + sortedGrades[length - 1] + ".");
    return gradesStatus;
}
function medianGrade(numbers) {
    var sortedNumbers = sortingArray(numbers);
    var N = numbers.length;
    var medianNumber;
    if (N % 2 === 0) {
        var num1 = sortedNumbers[(N / 2)];
        var num2 = sortedNumbers[(N / 2) + 1];
        medianNumber = ((num1 + num2) / (num1 * num2));
    }
    else {
        medianNumber = (sortedNumbers[((N + 1) / 2)]);
    }
    alert("The median grade is: " + medianNumber + ".");
    return gradesStatus;
}
function averageGrade(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    alert("The average grade is: " + average + ".");
    return gradesStatus;
}
function undefinedCase(parentFunction) {
    var shouldQuit = confirm("Are you sure you want to quit the game?");
    return shouldQuit ? undefined : parentFunction;
}
function defaultCase(userInput, parentFunction) {
    alert("Sorry, I don't know what is \"" + userInput + "\"");
    return parentFunction;
}
