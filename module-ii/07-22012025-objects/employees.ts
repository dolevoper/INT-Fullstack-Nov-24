type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};

const employees: Employee[] = [];

app();

const mainMenuPrompt =
    `Please select an option:

1. New employee
2. Find employee
3. Remove employee
4. Stats
(Press cancel to quit)`;

function app() {
    alert("Welcome to employee manager!");

    let userInput = prompt(mainMenuPrompt);

    while (userInput !== null) {
        switch (userInput) {
            case "1":
                newEmployee();
                break;
            case "2":
                findEmployee();
                break;
            case "3":
                removeEmployee();
                break;
            case "4":
                stats();
                break;
            default:
                alert(`Unknown option '${userInput}'`);
        }

        userInput = prompt(mainMenuPrompt);
    }
}

function newEmployee() {
    const employeeToAdd = readEmployee();

    if (!employeeToAdd) {
        return;
    }

    employees.push(employeeToAdd);
}

function findEmployee() { }

function removeEmployee() { }

function stats() {
    let employeeWithMaxSallary = employees[0];

    for (const employee of employees) {
        if (employee.sallary > employeeWithMaxSallary.sallary) {
            employeeWithMaxSallary = employee
        }
    }

    alert(`The employee with the highest sallary is: ${employeeWithMaxSallary.name}`);

    let employeeWithMinSallary = employees[0];

    for (const employee of employees) {
        if (employee.sallary < employeeWithMinSallary.sallary) {
            employeeWithMinSallary = employee
        }
    }

    alert(`The employee with the lowest sallary is: ${employeeWithMinSallary.name}`);

    let sallariesSum = 0;

    for (const employee of employees) {
        sallariesSum += employee.sallary;
    }

    alert(`The average sallary is ${sallariesSum / employees.length}`);

    const sallariesAverageByDepartment: Record<string, number> = {};

    for (const employee of employees) {
        // !sallariesAverageByDepartment[employee.department] === true iif sallariesAverageByDepartment[employee.department] is false or 0 or null or undefined or ""
        // if (!sallariesAverageByDepartment[employee.department]) {
        if (!(employee.department in sallariesAverageByDepartment)) {
            sallariesAverageByDepartment[employee.department] = 0;
        }

        sallariesAverageByDepartment[employee.department] += employee.sallary;
        sallariesAverageByDepartment[employee.department] /= 2;
    }

    for (const department in sallariesAverageByDepartment) {
        alert(`The average sallary in ${department} is: ${sallariesAverageByDepartment[department]}`);
    }
}

function readEmployee(): Employee | undefined {
    const name = prompt("Please enter employee name");

    if (!name) {
        return;
    }

    const age = readNumber("Please enter employee age");

    if (age === undefined) {
        return;
    }

    const department = prompt("Please enter employee department");

    if (!department) {
        return;
    }

    const sallary = readNumber("Please enter employee sallary");

    if (sallary === undefined) {
        return;
    }

    return {
        name,
        age,
        department,
        sallary,
    };
}

function readNumber(message: string) {
    let input = prompt(message);
    let number = Number(input);

    while (isNaN(number)) {
        if (input === null) {
            return;
        }

        input = prompt(`Invalid number.\n\n${message}`);
        number = Number(input);
    }

    return number;
}
