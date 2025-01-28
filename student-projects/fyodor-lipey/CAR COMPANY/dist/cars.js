var allCars = [];
menu();
function menu() {
    var currentState = CarCompany;
    while (currentState) {
        currentState = currentState();
    }
    alert("Exiting current program and reloading");
    location.reload();
}
function errorHandling() {
    var exitAnswer = prompt("are you sure you want to quit? YES/NO");
    switch (exitAnswer === null || exitAnswer === void 0 ? void 0 : exitAnswer.trim().toLowerCase()) {
        case "yes":
        case "y":
            return;
        case "no":
        case "n":
            return carCompany();
        default:
            alert("Please choose YES or NO");
            return errorHandling();
    }
}
function carCompany() {
    var userInput = prompt("Welcome! Please choose what you want to do: \n" +
        "Register a new car - enter REGISTER or 1 \n" +
        "To find an existing car - enter FIND or 2 \n" +
        "Status of current availabe vehicles - enter STATUS or 3\n" +
        "To exit please press cancel or write EXIT");
    switch (userInput === null || userInput === void 0 ? void 0 : userInput.trim().toLowerCase()) {
        case "register":
        case "1":
        case "new":
            return registerNewCar;
        case "exit":
        case undefined:
            errorHandling;
        default:
            alert("unknow action");
            return carCompany;
    }
}
function stringCar(array) {
    return array.toString();
}
function registerNewCar() {
    alert("Register a new car");
    var manufacturer = String(prompt("Enter manufacturer:"));
    var model = Number(prompt("Enter the model"));
    var year = Number(prompt("Enter year"));
    var kilometerage = Number(prompt("Enter the kilometerage"));
    var hand = Number(prompt("Enter number of previous owners (in numbers)"));
    var purpose = String(prompt("Sale/Rent"));
    var newCar = {
        manufacturer: manufacturer,
        model: model,
        year: year,
        kilometerage: kilometerage,
        hand: hand,
        purpose: purpose
    };
    allCars.push(newCar);
    var userInput = prompt("return to menu or register another car?\n" +
        'enter "New" for new registration or "Return" in order to return to main menu');
    switch (userInput === null || userInput === void 0 ? void 0 : userInput.trim().toLowerCase()) {
        case "return":
        case "new":
            return registerNewCar;
        case "return":
        case "back":
            return menu;
        case undefined:
            errorHandling;
        default:
            alert("unknow action");
            return menu;
    }
}
function findCar() {
    var foundCars = [];
    alert("Find a car - enter manufacturer and model");
    var manufacturer = String(prompt("Enter manufacturer:"));
    var model = Number(prompt("Enter the model"));
    for (var i = 0; i < allCars.length; i++) {
        if (allCars[i].manufacturer === manufacturer &&
            allCars[i].model === model) {
            foundCars.push(allCars[i]);
        }
    }
    if (!foundCars.length) {
        alert("No match");
        return;
    }
    else {
        alert(foundCars.toString());
        return foundCars;
    }
}
function carStatus() {
    var searchOption = prompt("choose which list you need: sale/rent/all");
    var purposeCars = [];
    if ((searchOption === null || searchOption === void 0 ? void 0 : searchOption.trim().toLowerCase()) === "sale") {
        purposeCars = allCars.filter(function (car) { return car.purpose === "sale"; });
    }
    else if ((searchOption === null || searchOption === void 0 ? void 0 : searchOption.trim().toLowerCase()) === "rent") {
        purposeCars = allCars.filter(function (car) { return car.purpose === "rent"; });
    }
    else {
        return alert(allCars.toString());
    }
}
