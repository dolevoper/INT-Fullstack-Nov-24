var carForSale = [];
var carForRent = [];
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
            return CarCompany();
        default:
            alert("Please choose YES or NO");
            return errorHandling();
    }
}
function CarCompany() {
    var userInput = prompt("Welcome! Please choose what you want to do: \n" +
        "Register a new car - enter REGISTER or 1 \n" +
        "To find an existing car - enter FIND or 2 \n" +
        "Status of current availabe vehicles - enter STATUS or 3\n" +
        "To exit please press cancel or write EXIT");
    switch (userInput === null || userInput === void 0 ? void 0 : userInput.trim().toLowerCase()) {
        case "register":
        case "1":
        case "new":
            return registerNewCar(carForSale, carForRent, allCars);
        case "find":
        case "2":
            return findCar(allCars);
        case "status":
        case "3":
            return carStatus(carForSale, carForRent, allCars);
        case "exit":
        case undefined:
            errorHandling;
        default:
            alert("unknow action");
            return CarCompany;
    }
}
function registerNewCar(arraySale, arrayRent, arrayAll) {
    alert("Register a new car");
    var manufacturer = String(prompt("Enter manufacturer:"));
    var model = Number(prompt("Enter the model"));
    var year = Number(prompt("Enter year"));
    var kilometerage = Number(prompt("Enter the kilometerage"));
    var hand = Number(prompt("Enter number of previous owners (in numbers)"));
    var newCar = {
        manufacturer: manufacturer,
        model: model,
        year: year,
        kilometerage: kilometerage,
        hand: hand
    };
    var saleOrRent = prompt("Choose if a car for SALE/RENT");
    switch (saleOrRent === null || saleOrRent === void 0 ? void 0 : saleOrRent.trim().toLowerCase()) {
        case "sale":
            arraySale.push(newCar);
            arrayAll.push(newCar);
        case "rent":
            arrayRent.push(newCar);
            arrayAll.push(newCar);
        case undefined:
        default:
            arrayAll.push(newCar);
    }
    alert(JSON.stringify(newCar));
    return menu;
}
function findCar(arrayAll) {
    var foundCars = [];
    alert("Find a car - enter manufacturer and model");
    var manufacturer = String(prompt("Enter manufacturer:"));
    var model = Number(prompt("Enter the model"));
    for (var i = 0; i < arrayAll.length; i++) {
        if (arrayAll[i].manufacturer === manufacturer && arrayAll[i].model === model) {
            foundCars.push(arrayAll[i]);
        }
    }
    if (foundCars[0] === null) {
        alert("No match");
        return;
    }
    else {
        alert(JSON.stringify(foundCars));
        return foundCars;
    }
}
function carStatus(arraySale, arrayRent, arrayAll) {
    var searchOption = prompt("choose which list you need: sale/rent/all");
    switch (searchOption === null || searchOption === void 0 ? void 0 : searchOption.trim().toLowerCase()) {
        case "sale":
            alert(JSON.stringify(arraySale));
            return arraySale;
        case "rent":
            alert(JSON.stringify(arrayRent));
            return arrayRent;
        case "all":
        default:
            alert(JSON.stringify(arrayAll));
            return arrayAll;
        case undefined:
            errorHandling;
    }
}
function oldestCar(arrayAll) {
    for (var _i = 0, arrayAll_1 = arrayAll_2; _i < arrayAll_1.length; _i++) {
        var arrayAll_2 = arrayAll_1[_i];
    }
}
