// DOM - Document Object Model

document.body.children[2].children[0].children[1].setAttribute("minlength", "5");
console.log(document.body.children[2].children[0].children[1].getAttribute("minlength"));

console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByClassName("info-paragraph"));
console.log(document.getElementById("nameInput"));
console.log(document.getElementById("occupationInput"));

const el = document
    .getElementsByTagName("form")
    .item(1)
    ?.getElementsByTagName("input");

console.log("el", el);

const el2 = document.querySelector("details[open] form input:nth-child(2)");
console.log("el2", el2);

const el3 = document.querySelectorAll("details[open] form input");
console.log("el3", el3);

const nameOutput: HTMLSpanElement | null = document.querySelector("#nameOutput");
const nameInput: HTMLInputElement | null = document.querySelector("#nameInput");
const updateNameButton: HTMLButtonElement | null = document.querySelector("#updateNameButton");

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
        e.preventDefault();

        nameOutput.innerText = nameInput?.value ?? "";
    });
}

app();

console.log("hello");
