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
        }
        break;
    case "max":
        break;
    default:
        console.log("Invalid operation");
        break;
}
