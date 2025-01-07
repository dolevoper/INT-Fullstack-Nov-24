// 1. Complete simple calculator //
var num1 = Number(prompt("pleas insert a number"));
var anoperation = prompt("select between: + , - , * , / ");
var num2 = Number(prompt("pleas insert anover number"));
var isplas = anoperation === "+";
var isminoos = anoperation === "-";
var issplit = anoperation === "/";
var ismoltiplait = anoperation === "*";
if (isplas) {
    alert(num1 + num2);
}
else if (isminoos) {
    alert(num1 - num2);
}
else if (issplit && num2 !== 0) {
    alert(num1 / num2);
}
else if (issplit && num2 === 0) {
    alert("can't divide by 0");
}
else if (ismoltiplait) {
    alert(num1 * num2);
}
else {
    alert("unvaild operation");
}
