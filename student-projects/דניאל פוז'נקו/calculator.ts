const firstNumber = Number(prompt("Enter the first number"));
if (isNaN(firstNumber)) {
    alert("You must enter a number");
}
else {const operator = prompt("Enter the operator");
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert("You must enter a valid operator");}

    else {const secondNumber = Number(prompt("Enter the second number"));
            if (isNaN(secondNumber)) {
                alert("You must enter a number");}
        
            else {

                    if (operator === "+") {
                        const result = firstNumber + secondNumber;
                    }

                    if (operator === "-") {
                        const result = firstNumber - secondNumber;
                    }

                    if (operator === "*") {
                        const result = firstNumber * secondNumber;
                    }

                    if (operator === "/") {
                        const result = firstNumber / secondNumber;
                    }



                    alert("The result is " + result);
                        }}}