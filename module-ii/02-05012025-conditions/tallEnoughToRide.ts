const userAge = Number(prompt("What is your age?"));
const userHeightInCm = Number(prompt("What is your height? (cm)"));

// Logic:
// Older than 8 y/o
// At least 140cm tall
// Or above 18 y/o

// Output: "You can board the ride!" or "Go home"

if ((userAge >= 8 && userHeightInCm >= 140) || userAge >= 18) {
  console.log("You can board the ride!");
} else {    
  console.log("Go home");
}