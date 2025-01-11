
const operation = prompt("Enter operation: min , max");

switch (operation) {
  case "min":
    let name;
    let grade = Infinity;
    while (true) {
      const userInputName = prompt("Enter student name");
      if (userInputName === null) {
        break;
      }
      const userInputGrade = prompt("Enter student grade");
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
