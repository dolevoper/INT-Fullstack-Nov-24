// DOM - Document Object Model
var _a;
document.body.children[2].children[0].children[1].setAttribute("minlength", "5");
console.log(document.body.children[2].children[0].children[1].getAttribute("minlength"));
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByClassName("info-paragraph"));
console.log(document.getElementById("nameInput"));
console.log(document.getElementById("occupationInput"));
var el = (_a = document
    .getElementsByTagName("form")
    .item(1)) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("input");
console.log("el", el);
var el2 = document.querySelector("details[open] form input:nth-child(2)");
console.log("el2", el2);
var el3 = document.querySelectorAll("details[open] form input");
console.log("el3", el3);
var numberOutput = document.querySelector("#numberOutput");
var numberInput = document.querySelector("#numberInput");
var calculateButton = document.querySelector("#calculateButton");
function app() {
    calculateButton.addEventListener("click", function (e) {
        e.preventDefault();
        numberOutput.innerText = numberOutput * 2;
    });
}
app();
console.log("hello");
