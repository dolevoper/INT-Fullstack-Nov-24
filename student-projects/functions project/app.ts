
//Class practice
function devideNumber(x: number, y: number) {
    if(y === 0){
        alert('Cannot divide by zero!');
    }
    else alert(x / y);
 }
 
 function capitalize(str: string) {
     return str.slice(0, 1).toUpperCase() + str.slice(1);
 }
 
 function superGreet(firstName: string, lastName: string) {
     alert("Hello " + capitalize(firstName) + " " + capitalize(lastName) + "!");
 }
 
 function greetFullname() {
     const fullName = prompt("Please enter your full name");
     if (fullName) {
         const names = fullName.split(" ");
         superGreet(names[0], names[1]);
     } else {
         alert("Full name cannot be null.");
     }
 }

