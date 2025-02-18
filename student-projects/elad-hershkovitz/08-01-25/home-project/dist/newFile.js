"use strict";
exports.__esModule = true;
var Student_stats_1 = require("./Student-stats");
while (true) {
    Student_stats_1.studentName = prompt("enter student name");
    if (Student_stats_1.studentName === "stop")
        break;
    Student_stats_1.studentGrade = Number(prompt("enter student grade"));
    if (Student_stats_1.studentGrade === "stop")
        break;
    alert(Student_stats_1.studentName + " " + Student_stats_1.studentGrade);
}
