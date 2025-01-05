const userAge = Number(prompt("What is your age?"));
const userHeightInCm = Number(prompt("What is your height? (cm)"));

// Logic:
// Older than 8 y/o
// At least 140cm tall
// Or above 18 y/o

// Output: "You can board the ride!" or "Go home"

const isOlderThan8 = userAge > 8;
const isAtLeast140Cm = userHeightInCm >= 140;
const isOlderThan18 = userAge > 18;

if (isOlderThan18) {
    alert("You can board the ride!");
} else if (!isOlderThan8) {
    alert("Go home");
} else if (isAtLeast140Cm) {
    alert("You can board the ride!");
} else {
    alert("Go home");
}

// logic operators - takes 2 booleans and return a boolean
//  && (and)
// || (inclusive or)

// Short circuit logic
if (isOlderThan18 || (isOlderThan8 && isAtLeast140Cm)) {
    alert("You can board the ride!");
} else {
    alert("Go home");
}
