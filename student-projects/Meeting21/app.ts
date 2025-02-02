const userInput = <HTMLInputElement>document.querySelector("#numberInput");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.id;
        if (value === "=") {
            userInput.value = eval(userInput.value);
        } else if (value === "C") {
            userInput.value = "";
        } else {
            userInput.value += value;
        }
    });
});