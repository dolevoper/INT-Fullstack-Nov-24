var userAge = Number(prompt("What is your age?"));
var userHeightInCm = Number(prompt("What is your height? (cm)"));
// Logic:
// Older than 8 y/o
// At least 140cm tall
// Or above 18 y/o
// Output: "You can board the ride!" or "Go home"
if (userAge >= 18) {
    alert("You can board the ride!");
}
else {
    if ((userAge >= 8) && (userHeightInCm >= 140)) {
        alert("You can board the ride!");
    }
    else {
        alert("Go home");
    }
}
