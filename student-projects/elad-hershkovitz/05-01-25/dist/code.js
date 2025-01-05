// home work calcolation //
var num1 = Number(prompt("pleas insert a number"));
var anoperation = prompt("select between: + , - , * , / ");
var num2 = Number(prompt("pleas insert anover number"));
var plas = anoperation === "+";
var minoos = anoperation === "-";
var split = anoperation === "/";
var moltiplait = anoperation === "*";
if (plas) {
    alert(num1 + num2);
}
else if (minoos) {
    alert(num1 - num2);
}
else if (split) {
    alert(num1 / num2);
}
else if (moltiplait) {
    alert(num1 * num2);
}
else {
    alert("unvaild operation");
}
