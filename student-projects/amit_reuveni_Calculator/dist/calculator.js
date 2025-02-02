var display = document.getElementById("display");
function appendToDisplay(input) {
    if (display) {
        if (display.value === "Error") {
            return;
        }
        display.value += input;
    }
    else {
        console.log("Error");
    }
}
function clearDisplay() {
    if (display) {
        display.value = "";
    }
    else {
        console.log("Error");
    }
}
function calculate() {
    if (display) {
        if (display.value === "Error") {
            return;
        }
        try {
            display.value = eval(display.value);
        }
        catch (_a) {
            display.value = "Error";
        }
    }
    else {
        console.log("Error");
    }
}
