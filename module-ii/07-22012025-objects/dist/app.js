var gradeSubject = 0;
var gradeLecturer = 1;
var gradeValue = 2;
var grades = [];
var gradeToRecord = prompt("Please enter a grade (use this format: subject value)");
while (gradeToRecord !== null) {
    var gradeParts = gradeToRecord.split(" ");
    var grade = [];
    grade[gradeSubject] = gradeParts[0];
    grade[gradeValue] = Number(gradeParts[1]);
    grades.push(grade);
    gradeToRecord = prompt("Please enter a grade");
}
alert("Your grades:\n\n" + grades.map(function (grade) { return grade.join(": "); }).join("\n"));
var subjectToShow = prompt("Please choose a subject");
var i = 0;
for (; i < grades.length; i++) {
    var currentGrade = grades[i];
    if (subjectToShow === currentGrade[gradeSubject]) {
        alert("Your grade in " + subjectToShow + " is " + currentGrade[gradeValue]);
        break;
    }
}
if (i === grades.length) {
    alert("Subject \"" + subjectToShow + "\" not found.");
}
