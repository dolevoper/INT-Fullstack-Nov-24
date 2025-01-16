// * Finish class practice
// * Guess my number - full project with functions
// * divide - Get 2 numbers, print their ratio (/) - handle division by 0
function ratio(number1, number2) {
    if (!isNaN(number1) && !isNaN(number2) && number2 !== 0) {
        alert("The ratio is: " + number1 / number2);
    }
    else {
        alert("You didn't chose valid values.");
    }
}
// * capitalize - Get a string, return the same string with the first character as a capital letter
function capitalize(input) {
    alert(input.slice(0, 1).toUpperCase() + input.slice(1));
}
// * superGreet - Get first name and last name, print a greeting with the names capitalized
function superGreet(firstName, lastName) {
    alert("Hello " + firstName.toUpperCase() + " " + lastName.toUpperCase() + "!");
}
// * greetFullname - Get the full name of the user, print a greeting with first name and last name capitalized
function greetFullNames(firstName, lastName) {
    alert("Hello " + firstName.slice(0, 1).toUpperCase() + firstName.slice(1) + " " + lastName.slice(0, 1).toUpperCase() + lastName.slice(1) + "!");
}
