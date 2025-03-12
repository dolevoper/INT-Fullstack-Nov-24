var _a, _b;
var employees = [];
for (var i = 0; i < 5; i++) {
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
}
function findEmployee() { }
function removeEmployee() { }
function stats() {
    var employeeWithMaxSallary = employees[0];
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        if (employee.sallary > employeeWithMaxSallary.sallary) {
            employeeWithMaxSallary = employee;
        }
    }
    alert("The employee with the highest sallary is: " + employeeWithMaxSallary.name);
    var employeeWithMinSallary = employees[0];
    for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
        var employee = employees_2[_a];
        if (employee.sallary < employeeWithMinSallary.sallary) {
            employeeWithMinSallary = employee;
        }
    }
    alert("The employee with the lowest sallary is: " + employeeWithMinSallary.name);
    var sallariesSum = 0;
    for (var _b = 0, employees_3 = employees; _b < employees_3.length; _b++) {
        var employee = employees_3[_b];
        sallariesSum += employee.sallary;
    }
    alert("The average sallary is " + sallariesSum / employees.length);
    var sallariesAverageByDepartment = {};
    for (var _c = 0, employees_4 = employees; _c < employees_4.length; _c++) {
        var employee = employees_4[_c];
        // !sallariesAverageByDepartment[employee.department] === true iif sallariesAverageByDepartment[employee.department] is false or 0 or null or undefined or ""
        // if (!sallariesAverageByDepartment[employee.department]) {
        if (!(employee.department in sallariesAverageByDepartment)) {
            sallariesAverageByDepartment[employee.department] = 0;
        }
        sallariesAverageByDepartment[employee.department] += employee.sallary;
        sallariesAverageByDepartment[employee.department] /= 2;
    }
    for (var department in sallariesAverageByDepartment) {
        alert("The average sallary in " + department + " is: " + sallariesAverageByDepartment[department]);
    }
}
function readEmployee() {
    var name = prompt("Please enter employee name");
    if (!name) {
        return;
    }
    var age = readNumber("Please enter employee age");
    if (age === undefined) {
        return;
    }
    var department = prompt("Please enter employee department");
    if (!department) {
        return;
    }
    var sallary = readNumber("Please enter employee sallary");
    if (sallary === undefined) {
        return;
    }
    return {
        name: name,
        age: age,
        department: department,
        sallary: sallary
    };
}
function readNumber(message) {
    var input = prompt(message);
    var number = Number(input);
    while (isNaN(number)) {
        if (input === null) {
            return;
        }
        input = prompt("Invalid number.\n\n" + message);
        number = Number(input);
    }
    return number;
}
