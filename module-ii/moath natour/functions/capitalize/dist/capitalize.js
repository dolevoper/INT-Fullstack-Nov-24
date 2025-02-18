function firstLetter(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}
function checkForNull(Name) {
    if (Name === null) {
        Name = "guest";
    }
    else {
        Name = firstLetter(Name);
    }
    return Name;
}
var Name = prompt("What is your name?");
alert("Hello " + checkForNull(Name) + "!");
