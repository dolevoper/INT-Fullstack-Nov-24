// home work calcolation //

const num1 = Number(prompt("pleas insert a number"));
const anoperation = prompt("select between: + , - , * , / ");
const num2 = Number(prompt("pleas insert anover number"));

const plas = anoperation === "+";
const minoos = anoperation === "-";
const split = anoperation === "/";
const moltiplait = anoperation === "*";

if (plas) {
  alert(num1 + num2);
} else if (minoos) {
  alert(num1 - num2);
} else if (split) {
  alert(num1 / num2);
} else if (moltiplait) {
  alert(num1 * num2);
} else {
  alert("unvaild operation");
}
