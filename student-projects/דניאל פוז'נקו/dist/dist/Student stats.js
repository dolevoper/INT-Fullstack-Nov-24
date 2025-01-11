var operation = prompt("Enter operation: min , max");
switch (operation) {
    case "min":
        var name = void 0;
        var grade = Infinity;
        while (true) {
            var userInputName = prompt("Enter student name");
            if (userInputName === null) {
                break;
            }
            var userInputGrade = prompt("Enter student grade");
            if (userInputGrade === null) {
                break;
            }
            else {
                userInputGrade = Number(userInputGrade);
            }
            if (userInputGrade < grade) {
                grade = userInputGrade;
                name = userInputName;
            }
        }
        alert("the student with the lowest grade is: " +
            name +
            " with a grade of: " +
            grade);
        break;
    case "max":
        break;
    default:
        alert("Invalid operation");
        break;
}
