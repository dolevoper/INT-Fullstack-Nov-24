// DOM - Document Object Model
var _a;
var el = (_a = document
    .getElementsByTagName("form")
    .item(1)) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("input");
var mathOutput = document.querySelector("#mathOutput");
var mathInput = document.querySelector("#mathInput");
var doMathButton = document.querySelector("#doMathButton");
function app() {
    if (!doMathButton) {
        console.error("Could not find the do math button");
        return;
    }
    if (!mathOutput) {
        console.error("could not find the math output element");
        return;
    }
    doMathButton.addEventListener("click", function (e) {
        var _a;
        e.preventDefault();
        var numTimesTwo = +((_a = mathInput === null || mathInput === void 0 ? void 0 : mathInput.value) !== null && _a !== void 0 ? _a : "") * 2;
        mathOutput.innerText = String(numTimesTwo);
    });
}
app();
console.log("hello");
