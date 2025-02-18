var grades = [];
var listHasData = false;
function addGrade() {
    var input = prompt("please enter a grade:");
    var grade = Number(input);
    if (input === null) {
        return cancel(addGrade);
    }
    else if (Number.isNaN(grade) || grade < 0 || grade > 100) {
        alert("please enter a valid number between 0 and 100!");
        return addGrade();
    }
    grades.push([grade, ""]);
    listHasData = true;
    return gradeList();
}
function averageGrade(array) {
    var number = 0;
    for (var i = 0; i < array.length; i++) {
        number += array[i][0];
    }
    alert(number / array.length);
    return operations();
}
function maxGrade() {
    var maxNumber = -Infinity;
    var index;
    for (var i = 0; i < grades.length; i++) {
        if (grades[i][0] > maxNumber) {
            maxNumber = grades[i][0];
            index = i;
        }
    }
    alert(grades[index][1] + " " + maxNumber);
    return operations();
}
function minGrade() {
    var minGrade = Infinity;
    var index;
    for (var i = 0; i < grades.length; i++) {
        if (minGrade > grades[i][0]) {
            minGrade = grades[i][0];
            index = i;
        }
    }
    alert(grades[index][1] + " " + minGrade);
    return operations();
}
function medGrade() {
    var array = [];
    for (var i = 0; i < grades.length; i++) {
        array[i] = grades[i][0];
    }
    var median;
    array.sort(function (a, b) { return a - b; });
    if (grades.length / 2 !== Math.floor(grades.length / 2)) {
        median = array[(array.length - 1) / 2];
    }
    else {
        median = (array[(array.length / 2) - 1] + array[((array.length / 2))]) / 2;
    }
    alert(median);
    return operations();
}
function viewGrades() {
    var gradesList = " ";
    if (grades.length === 0) {
        alert("grade list is empty");
    }
    else {
        for (var i = 0; i < grades.length; i++) {
            gradesList += "  " + (i + 1) + '.' + " " + grades[i][1] + "  " + grades[i][0] + "\n";
        }
        alert(gradesList);
    }
    return gradeList();
}
function cancel(stage) {
    var quit = confirm("do you want to cancel?");
    return quit ? undefined : stage();
}
function addSubjectName() {
    if (grades.length === 0) {
        alert("you must add a grade before adding a subject name!");
        return addGrade();
    }
    var input = prompt("please enter the number of the grade you wish to edit: ");
    if (input === null) {
        return cancel(addSubjectName);
    }
    var number = Number(input);
    if (Number.isNaN(number) || number < 0 || number > grades.length) {
        alert("please enter a valid number between " + 1 + " " + grades.length);
        return addSubjectName();
    }
    else {
        grades[number - 1][1] = prompt("Enter a subject Name");
        return gradeList();
    }
}
function removeGrade() {
    if (grades.length === 0) {
        alert("Grade's list is empty!");
        return gradeList();
    }
    var input = prompt("please enter the number of the grade you wish to delete: ");
    if (input === null) {
        return (cancel(gradeList));
    }
    var number = Number(input);
    if (Number.isNaN(number) || number < 1 || number > grades.length) {
        alert("please enter a valid number between " + 1 + " and " + grades.length);
        return removeGrade();
    }
    else if (listHasData) {
        grades.splice(number - 1, 1);
        if (grades.length === 0) {
            listHasData = false;
        }
        return gradeList();
    }
}
function operations() {
    if (grades.length === 0) {
        alert("Grades list is empty!");
        return gradeList();
    }
    else {
        var userInput = prompt("choose which operation to perform: \n" +
            "1. Maximum grade.\n" +
            "2. Minimum grade.\n" +
            "3. Grade's average.\n" +
            "4. median");
        switch (userInput) {
            case "1":
                return maxGrade();
            case "2":
                return minGrade();
            case "3":
                return averageGrade(grades);
            case "4":
                return medGrade();
            case null:
            case "5":
                return cancel(gradeList);
            default:
                return operations();
        }
    }
}
function gradeList() {
    var userInput = prompt("1. Add grade\n" +
        "2. Remove grade\n" +
        "3. Filter or calculate grades\n" +
        "4. View grades\n" +
        "5. Add subject name\n" +
        "6. cancel");
    switch (userInput) {
        case "1":
            return addGrade();
        case "2":
            return removeGrade();
        case "3":
            return operations();
        case "4":
            return viewGrades();
        case "5":
            return addSubjectName();
        case "6":
        case null:
            return cancel(gradeList);
        default:
            return gradeList();
    }
}
gradeList();
alert("have a good day!");
