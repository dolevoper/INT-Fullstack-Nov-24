//Class practice
function devideNumber(x, y) {
    if (y === 0) {
        alert('Cannot divide by zero!');
    }
    else
        alert(x / y);
}
function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
function superGreet(firstName, lastName) {
    alert("Hello " + capitalize(firstName) + " " + capitalize(lastName) + "!");
}
function greetFullname() {
    var fullName = prompt("Please enter your full name");
    if (fullName) {
        var names = fullName.split(" ");
        superGreet(names[0], names[1]);
    }
    else {
        alert("Full name cannot be null.");
    }
}
