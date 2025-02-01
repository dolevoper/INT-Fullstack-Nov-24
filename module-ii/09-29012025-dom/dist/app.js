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
var nameOutput = document.querySelector("#nameOutput");
var nameInput = document.querySelector("#nameInput");
var updateNameButton = document.querySelector("#updateNameButton");
function app() {
    if (!updateNameButton) {
        console.error("Could not find the update name button");
        return;
    }
    if (!nameOutput) {
        console.error("could not find the name output element");
        return;
    }
    updateNameButton.addEventListener("click", function (e) {
        var _a;
        e.preventDefault();
        nameOutput.innerText = (_a = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) !== null && _a !== void 0 ? _a : "";
    });
}
app();
console.log("hello");
