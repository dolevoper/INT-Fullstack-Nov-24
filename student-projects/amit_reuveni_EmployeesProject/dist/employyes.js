function menu() {
    var mainMenu = prompt("Please choose an option\n" +
        "1. Add a person.\n" +
        "2. Remove a person.\n" +
        "3. Take a look at the highest salary.\n" +
        "4. Take a look at the employee list.\n" +
        "5. Press cancel to exit.");
    switch (mainMenu) {
        case "1":
        case "Add":
        case "Add a person":
        case "add":
        case "add a person":
            getEmployeeData();
            return menu();
        case "2":
        case "Remove":
        case "Remove a person":
        case "remove":
        case "remove a person":
            removeEmployee();
            return menu();
        case "3":
        case "salary":
        case "highest salary":
            highestSalary();
            return menu();
        case "4":
        case "list":
        case "employee list":
            employeeList();
            return menu();
        case "5":
        case "exit":
            alert("You chose option 5: exiting.");
            break;
        case null:
            alert("Goodbye");
            break;
        default:
            alert("Invalid option. Please try again");
            return menu();
    }
}
var employees = [];
function getEmployeeData() {
    var name = prompt("Please enter your name");
    var age = Number(prompt("Please enter your age"));
    var department = prompt("Please enter your department");
    var salary = Number(prompt("Please enter your salary"));
    if (name && age && department && salary) {
        employees.push({
            name: name,
            age: age,
            department: department,
            salary: salary
        });
    }
    else {
        alert("Invalid details, please try again");
        getEmployeeData();
    }
}
function removeEmployee() {
    var userChoice = prompt("Please enter the name of the person you would like to remove from the list?");
    if (userChoice === null) {
        alert("you haven't chosen a person.\nBack to main menu");
        return;
    }
    var Length = employees.length;
    employees = employees.filter(function (employee) { return employee.name !== userChoice; });
    if (employees.length === Length) {
        alert("Employee not found please enter a valid name");
        removeEmployee();
    }
    else {
        alert("You have removed " + userChoice + " from the list");
    }
}
function highestSalary() {
    if (employees.length === 0) {
        alert("No employees to compare.");
        return;
    }
    var highest = employees[0];
    for (var i = 1; i < employees.length; i++) {
        if (employees[i].salary > highest.salary) {
            highest = employees[i];
        }
    }
    alert("The employee with the highest salary is " + highest.name + ".\nwith a salary of " + highest.salary + ".");
}
function employeeList() {
    if (employees.length === 0) {
        alert("No employees in the list.");
    }
    else {
        var employeeNames = employees.map(function (employee) { return "Name: " + employee.name + ", Age: " + employee.age + ", department: " + employee.department + ", salary: " + employee.salary; });
        alert("Employee list:\n" + employeeNames.join("\n"));
    }
}
menu();
