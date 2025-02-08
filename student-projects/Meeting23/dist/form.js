document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms.namedItem("prsonality-page");
    const output = document.getElementById("statementOutput");
    const rangeInput = document.getElementById("statementRange");
    if (!form)
        return;
    rangeInput.addEventListener("input", () => {
        output.value = rangeInput.value;
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formDate = new FormData(form);
        const formObject = {};
        formDate.forEach((value, key) => {
            if (formObject[key]) {
                if (Array.isArray(formObject[key])) {
                    formObject[key].push(value);
                }
                else {
                    formObject[key] = [formObject[key], value];
                }
            }
            else {
                formObject[key] = value;
            }
        });
        console.log("Form Data Submitted:", formObject);
        alert("Form submitted successfully! Check the console for detalis.");
    });
    form.addEventListener("reset", () => {
        output.value = "5";
    });
});
