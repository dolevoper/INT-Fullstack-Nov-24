const gradeSubject = 0;
const gradeLecturer = 1;
const gradeValue = 2;

type Grade = [string, string, number];
const grades: Grade[] = [];

let gradeToRecord = prompt("Please enter a grade (use this format: subject value)");

while (gradeToRecord !== null) {
    const gradeParts = gradeToRecord.split(" ");
    
    const grade = [] as unknown as Grade;
    grade[gradeSubject] = gradeParts[0];
    grade[gradeValue] = Number(gradeParts[1]);

    grades.push(grade);
    
    gradeToRecord = prompt("Please enter a grade");
}

alert(`Your grades:\n\n${grades.map((grade) => grade.join(": ")).join("\n")}`);

const subjectToShow = prompt("Please choose a subject");

let i = 0
for (; i < grades.length; i++) {
    const currentGrade = grades[i];

    if (subjectToShow === currentGrade[gradeSubject]) {
        alert(`Your grade in ${subjectToShow} is ${currentGrade[gradeValue]}`);
        break;
    }
}

if (i === grades.length) {
    alert(`Subject "${subjectToShow}" not found.`);
}
