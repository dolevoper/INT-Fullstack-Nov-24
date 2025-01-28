menu();
function removeEmployee() {
    var name = prompt("Type the worker name you wish to remove:");
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].name === name) {
            employees.splice(i, 1);
        }
    }
    return menu();
}
function addEmployee() {
    var _a, _b;
    var name = (_a = prompt("Please enter employee name")) !== null && _a !== void 0 ? _a : "";
    var age = Number(prompt("Please enter employee age"));
    var department = (_b = prompt("Please enter employee department")) !== null && _b !== void 0 ? _b : "";
    var sallary = Number(prompt("Please enter employee sallary"));
    employees.push({
        name: name,
        age: age,
        department: department,
        sallary: sallary
    });
    return menu();
}
function viewEmployee(input) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].name === input) {
            alert(employees[i].name + "\n" + employees[i].age + "\n" + employees[i].department + "\n" + employees[i].sallary);
        }
    }
    // return menu;
}
function menu() {
    var userAction = prompt("1. Add a new employee. \n" + "2.Remove an employee \n" + "3.Show an employee's profile");
    switch (userAction) {
        case "1": return addEmployee();
        case "2": return removeEmployee();
        case "3": return viewEmployee();
        default:
            return menu();
    }
}
function alertUnknownAction(userAction) {
    alert("Sorry, I don't know what is \"" + userAction + "\"");
}
