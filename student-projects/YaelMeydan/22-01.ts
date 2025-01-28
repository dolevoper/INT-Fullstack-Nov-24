
menu();

function removeEmployee(){
    let name = prompt("Type the worker name you wish to remove:")

    for(let i = 0 ; i< employees.length ; i++){
        if(employees [i].name === name){
            employees.splice(i,1);
        }
    }
    return menu() ;
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

    return menu ();

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
        case "1": return addEmployee();
        case "2": return removeEmployee();
        case "3": return viewEmployee();
        default:
            

            return menu ();


    }
   
    
}


function alertUnknownAction(userAction: string) {
    alert(`Sorry, I don't know what is "${userAction}"`);
}
