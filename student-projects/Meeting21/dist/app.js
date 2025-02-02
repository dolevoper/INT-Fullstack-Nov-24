var userInput = document.querySelector("#numberInput");
document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.id;
        if (value === "=") {
            userInput.value = eval(userInput.value);
        }
        else if (value === "C") {
            userInput.value = "";
        }
        else {
            userInput.value += value;
        }
    });
});
