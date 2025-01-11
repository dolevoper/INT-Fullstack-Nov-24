// 2. Student stats
//     * First ask the user which operation he want to perform: max, min
//     * Read student grades using 2 prompts (full name then grade)
//     * Validate grades (0 - 100)
//     * Ask to fix invalid grades
//     * Stop reading students when user clicks "cancel"
//     * Display the student's name according to the requested operation

let maxGrade = -1;
let minGrade = 105;
let operationStat = true;
let studentName;
let studentGrade;
let maxStudent = "";
let minStudent = "";


while (operationStat) {
    const operation = prompt("Choose which operation to perform:\n" +
        "max - will show you the maximun grade of all the students.\n" +
        "min - will show you the minimun grade of all the students."
    );
    if (operation === null) {
        alert("You chose 'Cancel' - ending the program.");
        break;
    }
    else if (operation === "max" || operation === "min") {
        operationStat = false;
    }
    else {
        alert("You didn't choose a valid option - please choose min/max.");
    }
}

if (operation !== null) {
    while (studentName !== null || studentGrade !==null) {
        studentName = prompt("Enter student's name");
        if (studentName === null) {
            alert("You chose 'Cancel' - ending the program.");
            break;
        }

        studentGrade = prompt("Enter student's grade:");
        if (studentGrade === null) {
            alert("You chose 'Cancel' - ending the program.");
            break;
        }
        studentGrade = Number(studentGrade);
        while (studentGrade < 0 || studentGrade >100 || isNaN(studentGrade)) {
            studentGrade = prompt("You didn't chose a valid number.\n" +
                "A grade can be a number between 0-100."
            );
        }
        if (studentGrade >= maxGrade) {
            maxGrade = studentGrade;
            maxStudent = studentName;
        }
        else if (studentGrade <= minGrade) {
            minGrade = studentGrade;
            minStudent = studentName;
        }
    }

    switch (operation) {
        case "max":
            alert("The student with the highest grad is: " + maxStudent);
            break;
        case "min":
            alert("The student with the lowest grade is: " + minStudent);
            break;
    }
}

