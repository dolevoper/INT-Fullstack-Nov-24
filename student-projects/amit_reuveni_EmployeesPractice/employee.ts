type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};

function menu() {
    const mainMenu = prompt("Please choose an option\n" +
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
            alert(`you hit 3`);
            break;

        case "4":
            alert(`You chose option 4: exiting.`);
            break;

        case null:
            alert(`Goodbye`)
            break;

        default:
            alert(`Invalid option. Please try again`);
    }
}

const employees: Employee[] = [];

function getEmployeeData() {

    const name = prompt("Please enter your name");
    const age = Number(prompt("Please enter your age"));
    const department = prompt("Please enter your department");
    const sallary = Number(prompt("Please enter your sallary"));

    if (name && age && department && sallary) {

        employees.push({
            name,
            age,
            department,
            sallary
        });
    } else {
        alert(`Invalid details, please try again`)
        getEmployeeData();
    }

}

function removePerson() {

    const Remove = Number(prompt("which person would you like to remove ?"));

    if (Remove === 0) {
        alert("you havent chose a person");
        return;
    } else {
        alert(`you chose to remove person #${Remove}`);
    }
}

menu();