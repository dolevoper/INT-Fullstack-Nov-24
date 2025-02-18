const Operation = prompt("Need max or min grade?\n" + "Choose MAX/MIN");
if(Operation === null){
  alert("Stoping");
  location.reload();
} else if (Operation === "MIN" || Operation === "min"){
  const grades = [];
  let min = Infinity;
  let StudentName = prompt("Student's name");
 while (StudentName !== "null" && isNaN(Number(StudentName))) {
    const Name = StudentName; 
    const Grade = Number(prompt("enter a grade between 0-100"));
    const mark = Name + " " + "scored" + " " + Grade;
    if(Number(Grade) < min && Grade !== 0) {
      min = Number(Grade);
    }
    if (Grade === null || Grade === 0) {
      alert("Stoping");
    } else if (Number(Grade) > 100 || Number(Grade) < 0 || isNaN(Number(Grade))) {
      alert("enter a valid grade - a number between 0 to 100");
      grades.pop();
      location.reload();
    } else {
    grades.push(mark);
    }
    StudentName = prompt("Student's name");
  }
alert("The grades are: " + " " + grades + " " + "and the minimal grade is " + " " + min);
location.reload();
} else if (Operation === "MAX" || Operation === "max") {
  const grades = [];
  let max = 0; 
  let StudentName = prompt("Student's name");
 while (StudentName !== "null" && isNaN(Number(StudentName))) {
    const Name = StudentName; 
    const Grade = Number(prompt("enter a grade between 0-100"));
    const mark = Name + " " + "scored" + " " + Grade;
    if(Number(Grade) >= max && Grade !== 0) {
      max = Number(Grade);
    } 
    if (Grade === null || Grade === 0) {
      alert("Stoping");
    } else if (Number(Grade) > 100 || Number(Grade) < 0 || isNaN(Number(Grade))) {
      alert("enter a valid grade - a number between 0 to 100");
      location.reload();
    } 
    grades.push(mark);
    StudentName = prompt("Student's name");
  }
alert("The grades are: " + " " + grades + " " + "and the maximal grade is " + " " + max);
location.reload();
} else {
  alert("ERROR! INVALID INPUT\n" + "Choose either MIN or MAX, make sure to write in ENG");
  location.reload();
}
  
  
  
  
  
  
  
  
 
