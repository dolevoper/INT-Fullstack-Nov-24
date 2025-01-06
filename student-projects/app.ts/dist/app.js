var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addbtn = document.getElementById("add");
var subbtn = document.getElementById("sub");
var multbtn = document.getElementById("mult");
var divbtn = document.getElementById("divide");
var printresult = document.getElementById("result");
function addnumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printresult.textContent = result.toString();
}
addbtn.addEventListener("click", addnumber);
function subtractNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printresult.textContent = result.toString();
}
subbtn.addEventListener("click", subtractNumbers);
function MultiplyNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printresult.textContent = result.toString();
}
multbtn.addEventListener("click", MultiplyNumbers);
function DivideNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printresult.textContent = result.toString();
}
divbtn.addEventListener("click", DivideNumbers);
