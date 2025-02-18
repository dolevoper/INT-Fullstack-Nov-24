// DOM - Document Object Model



const el = document
    .getElementsByTagName("form")
    .item(1)
    ?.getElementsByTagName("input");


const mathOutput: HTMLSpanElement | null = document.querySelector("#mathOutput");
const mathInput: HTMLInputElement | null = document.querySelector("#mathInput");
const doMathButton: HTMLButtonElement | null = document.querySelector("#doMathButton");

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
        e.preventDefault();
        const numTimesTwo = +(mathInput?.value ?? "")*2;
        mathOutput.innerText = String(numTimesTwo);
    });
}

app();

console.log("hello");
