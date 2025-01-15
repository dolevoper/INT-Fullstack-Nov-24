var firstName = prompt("what is your first name?");
var lastName = prompt("what is your last name?");
function capitalizeFirstLetter(name) {
    if (name === null) {
        name = "";
    }
    else {
        name = name.slice(0, 1).toUpperCase() + name.slice(1);
    }
    return name;
}
alert("Hello " + capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName) + "!");
