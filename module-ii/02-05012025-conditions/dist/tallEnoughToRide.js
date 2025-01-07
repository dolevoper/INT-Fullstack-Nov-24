var userAge = Number(prompt("What is your age?"));
var userHeightInCm = Number(prompt("What is your height? (cm)"));
// Logic:
// Older than 8 y/o
// At least 140cm tall
// Or above 18 y/o
// Output: "You can board the ride!" or "Go home"
var isOlderThan8 = userAge > 8;
var isAtLeast140Cm = userHeightInCm >= 140;
var isOlderThan18 = userAge > 18;
if (isOlderThan18) {
    alert("You can board the ride!");
}
else if (!isOlderThan8) {
    alert("Go home");
}
else if (isAtLeast140Cm) {
    alert("You can board the ride!");
}
else {
    alert("Go home");
}
// logic operators - takes 2 booleans and return a boolean
//  && (and)
// || (inclusive or)
// Short circuit logic
if (isOlderThan18 || (isOlderThan8 && isAtLeast140Cm)) {
    alert("You can board the ride!");
}
else {
    alert("Go home");
}
