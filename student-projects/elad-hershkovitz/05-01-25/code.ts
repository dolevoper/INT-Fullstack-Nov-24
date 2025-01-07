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
