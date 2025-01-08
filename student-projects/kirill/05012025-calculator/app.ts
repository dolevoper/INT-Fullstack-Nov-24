alert("This is a calculator");
const firstNumber = Number (prompt("Pick your first number"));
const op = prompt("choose operator");
   const addIt = Number("+");
   const subtractIt = Number ("-");
   const divideIt = Number ("/");
   const multiplyIt = Number("*");

const secondNumber = Number(prompt("Pick your second number"));

if (addIt){
    alert(FirstNumber+secondNumber);
} if (subtractIt) {
    alert(firstNumber-secondNumber);
    if(divideIt){
        alert(firstNumber/secondNumber);
        if(multiplyIt){
            alert(firstNumber*secondNumber);
        }
    }
}



