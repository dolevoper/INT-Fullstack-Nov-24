/*
type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};

const employees: Employee[] = [];

for (let i = 0; i < 5; i++) {
    const name = prompt("Please enter employee name") ?? "";
    const age = Number(prompt("Please enter employee age"));
    const department = prompt("Please enter employee department") ?? "";
    const sallary = Number(prompt("Please enter employee sallary"));

    employees.push({
        name,
        age,
        department,
        sallary
    });
}

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
*/
menu();

function removeEmployee(){
    let name = prompt("Type the worker name you wish to remove:")

    for(let i = 0 ; i< employees.length ; i++){
        if(employees [i].name === name){
            employees.splice(i,1);
        }
    }
    return menu ;
}
function addEmployee(){

    const name = prompt("Please enter employee name") ?? "";
    const age = Number(prompt("Please enter employee age"));
    const department = prompt("Please enter employee department") ?? "";
    const sallary = Number(prompt("Please enter employee sallary"));

    employees.push({
        name,
        age,
        department,
        sallary
    });

   /* return {
        menu
    };
   */
}

function viewEmployee(input: string){

    
    for(let i = 0 ; i< employees.length ; i++){
        if(employees [i].name === input){
          alert(employees[i].name + "\n" + employees[i].age + "\n" + employees[i].department + "\n" + employees[i].sallary );
        }
    }

   // return menu;

}

function menu (){
    let userAction = prompt("1. Add a new employee. \n" + "2.Remove an employee \n" + "3.Show an employee's profile");
    switch(userAction){
        case "1": return addEmployee;
        case "2": return removeEmployee;
        case "3": return viewEmployee;
        default:
            alertUnknownAction(userAction);

            return menu ;


    }
   
    
}


function alertUnknownAction(userAction: string) {
    alert(`Sorry, I don't know what is "${userAction}"`);
}
