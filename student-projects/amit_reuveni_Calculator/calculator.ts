
const display = document.getElementById("display") as HTMLInputElement;

function appendToDisplay(input) {


    if (display) {
        if(display.value === "Error") {
            return;
        }
        display.value += input
    } else {
        console.log("Error");
    }

}

function clearDisplay() {

    if (display) {
        display.value = "";
    } else {
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
        } catch {
            display.value = "Error"
        }
    } else {
        console.log("Error");
    }
}