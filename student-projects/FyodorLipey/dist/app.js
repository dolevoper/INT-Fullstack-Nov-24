var num1 = Number(prompt("enter first number"));
var operation = prompt("choose operation");
var num2 = Number(prompt("enter second number"));
function calc(number, oper, secNumber) {
    if (operation === "+") {
        alert(Number(num1 + num2));
        location.reload();
    }
    else if (operation === "-") {
        alert(Number(num1 - num2));
        location.reload();
    }
    else if (operation === "*" || operation === "X") {
        alert(Number(num1 * num2));
        location.reload();
    }
    else if (operation === "/" || operation === ":") {
        alert(Number(num1 / num2));
        location.reload();
    }
    else {
        alert("Please choose: + - * / ");
        location.reload();
    }
}
calc(num1, operation, num2);
