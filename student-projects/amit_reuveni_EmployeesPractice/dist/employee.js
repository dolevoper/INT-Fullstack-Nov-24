function menu() {
    var mainMenu = prompt("Please choose an option\n" +
        "1. Add a person.\n" +
        "2. Remove a person.\n" +
        "3. Take a look at the highest salary.\n" +
        "4. Press cancel to exit.");
    switch (mainMenu) {
        case "1":
        case "Add":
            getEmployeeData();
            break;
        case "2":
        case "remove":
            removePerson();
            break;
        case "3":
            alert("you hit 3");
            break;
        case "4":
            alert("You chose option 4: exiting.");
            break;
        case null:
            alert("Goodbye");
            break;
        default:
            alert("Invalid option. Please try again");
    }
}
var employees = [];
function getEmployeeData() {
    var name = prompt("Please enter your name");
    var age = Number(prompt("Please enter your age"));
    var department = prompt("Please enter your department");
    var sallary = Number(prompt("Please enter your sallary"));
    if (name && age && department && sallary) {
        employees.push({
            name: name,
            age: age,
            department: department,
            sallary: sallary
        });
    }
    else {
        alert("Invalid details, please try again");
        getEmployeeData();
    }
}
function removePerson() {
    var Remove = Number(prompt("which person would you like to remove ?"));
    if (Remove === 0) {
        alert("you havent chose a person");
        return;
    }
    else {
        alert("you chose to remove person #" + Remove);
    }
}
menu();
