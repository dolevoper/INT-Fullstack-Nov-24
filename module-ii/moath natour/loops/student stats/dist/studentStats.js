var operation = prompt("choose wether you want to find out the maximum or minimum grade: " + "\n" + "'min'" + "\n" + "'max'");
var Name = prompt("please enter full name: ");
var grade = 0;
if (Name !== null) {
    grade = Number(prompt("please enter grade: "));
    if (Number.isNaN(grade)) {
        alert("grade must be a valid number between 0  and 100");
    }
    while (Name !== null && !Number.isNaN(grade)) {
        var nextName = prompt("Enter another name: ");
        if (nextName === null) {
            break;
        }
        var nextGrade = Number(prompt("Enter Grade: "));
        while (Number.isNaN(nextGrade) || nextGrade > 100 || nextGrade < 0 || nextGrade === null) {
            nextGrade = Number(prompt("Grade must be a valid number between 0 and 100!"));
        }
        switch (operation) {
            case "min":
                if (nextGrade < grade) {
                    Name = nextName;
                    grade = nextGrade;
                }
                break;
            case "max":
                if (nextGrade > grade) {
                    Name = nextName;
                    grade = nextGrade;
                }
                break;
        }
    }
}
if (Name !== null) {
    alert(Name + " " + grade);
}
