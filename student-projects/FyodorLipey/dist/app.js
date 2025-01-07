function calc(number, operation, secNumber) {
    if (operation === "+") {
        alert(Number(number + secNumber));
        location.reload();
    }
    else if (operation === "-") {
        alert(Number(number - secNumber));
        location.reload();
    }
    else if (operation === "*") {
        alert(Number(number * secNumber));
        location.reload();
    }
    else if (operation === "/") {
        alert(Number(number / secNumber));
        location.reload();
    }
    else {
        alert("Please choose: + - * / ");
        location.reload();
    }
}
var num1 = Number(prompt("enter first number"));
if (isNaN(num1)) {
    alert("Please enter a number! Refreshing page");
    location.reload();
}
else if (!isNaN(num1)) {
    var operation = prompt("choose operation");
    if (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*") {
        alert("Please choose: + - * / ! Refreshing page");
        location.reload();
    }
    else {
        var num2 = Number(prompt("enter second number"));
        if (isNaN(num2)) {
            alert("Please enter a number! Refreshing page");
            location.reload();
        }
        else if (operation === "/" && num2 === 0) {
            alert("You cannot divide 0, refreshing");
            location.reload();
        }
        else {
            calc(num1, operation, num2);
        }
    }
}
