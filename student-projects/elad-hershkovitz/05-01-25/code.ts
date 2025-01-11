// 1. Complete simple calculator //

const num1 = Number(prompt("pleas insert a number"));
const anoperation = prompt("select between: + , - , * , / ");
const num2 = Number(prompt("pleas insert anover number"));

const isplas = anoperation === "+";
const isminoos = anoperation === "-";
const issplit = anoperation === "/";
const ismoltiplait = anoperation === "*";

if (isplas) {
  alert(num1 + num2);
} else if (isminoos) {
  alert(num1 - num2);
} else if (issplit && num2 !== 0) {
  alert(num1 / num2);
} else if (issplit && num2 === 0) {
  alert("can't divide by 0");
} else if (ismoltiplait) {
  alert(num1 * num2);
} else {
  alert("unvaild operation");
}

// guess my number game //

let guessLeft = Number(prompt("how many guesses you want?"));
const secretNumber = Math.floor(Math.random() * 10) + 1;
const usreguess = Number(prompt("guess a number between 1 to 10"));

while (guessLeft > 0) {
    if (isNaN(usreguess) || usreguess < 1 || usreguess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        guessLeft = guessLeft - 1;
    } else if (usreguess === secretNumber) {
        alert("You won!👌");
        break;
    } else {
        alert("You got it wrong");
        guessLeft = guessLeft - 1;
    }
    if (guessLeft > 0) {
        usreguess === Number(prompt("You have " + guessLeft + " guesses left, guess a number between 1 to 10"));
    } else {
        alert("You lost. the number was " + secretNumber + ".");
    }
}
