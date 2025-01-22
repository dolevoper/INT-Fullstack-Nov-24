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
var employeeWithMaxSallary = employees[0];
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    if (employee.sallary > employeeWithMaxSallary.sallary) {
        employeeWithMaxSallary = employee;
    }
}
alert("The employee with the highest sallary is: " + employeeWithMaxSallary.name);
var employeeWithMinSallary = employees[0];
for (var _c = 0, employees_2 = employees; _c < employees_2.length; _c++) {
    var employee = employees_2[_c];
    if (employee.sallary < employeeWithMinSallary.sallary) {
        employeeWithMinSallary = employee;
    }
}
alert("The employee with the lowest sallary is: " + employeeWithMinSallary.name);
var sallariesSum = 0;
for (var _d = 0, employees_3 = employees; _d < employees_3.length; _d++) {
    var employee = employees_3[_d];
    sallariesSum += employee.sallary;
}
alert("The average sallary is " + sallariesSum / employees.length);
var sallariesAverageByDepartment = {};
for (var _e = 0, employees_4 = employees; _e < employees_4.length; _e++) {
    var employee = employees_4[_e];
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
