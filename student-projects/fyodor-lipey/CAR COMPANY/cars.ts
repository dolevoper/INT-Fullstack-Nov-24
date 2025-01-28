type car = {
  manufacturer: string;
  model: number;
  year: number;
  kilometerage: number;
  hand: number;
  purpose: string | undefined;
};

const allCars: car[] = [];
menu();

function menu() {
  let currentState: Function | undefined = CarCompany;

  while (currentState) {
    currentState = currentState();
  }

  alert("Exiting current program and reloading");
  location.reload();
}
function errorHandling() {
  const exitAnswer = prompt("are you sure you want to quit? YES/NO");
  switch (exitAnswer?.trim().toLowerCase()) {
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
  const userInput = prompt(
    "Welcome! Please choose what you want to do: \n" +
      "Register a new car - enter REGISTER or 1 \n" +
      "To find an existing car - enter FIND or 2 \n" +
      "Status of current availabe vehicles - enter STATUS or 3\n" +
      "To exit please press cancel or write EXIT"
  );

  switch (userInput?.trim().toLowerCase()) {
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

function stringCar(array: car[]) {
  return array.toString();
}

function registerNewCar() {
  alert("Register a new car");
  const manufacturer = String(prompt("Enter manufacturer:"));
  const model = Number(prompt("Enter the model"));
  const year = Number(prompt("Enter year"));
  const kilometerage = Number(prompt("Enter the kilometerage"));
  const hand = Number(prompt("Enter number of previous owners (in numbers)"));
  const purpose = String(prompt("Sale/Rent"));

  const newCar: car = {
    manufacturer: manufacturer,
    model: model,
    year: year,
    kilometerage: kilometerage,
    hand: hand,
    purpose: purpose,
  };
  allCars.push(newCar);
  const userInput = prompt(
    "return to menu or register another car?\n" +
      'enter "New" for new registration or "Return" in order to return to main menu'
  );
  switch (userInput?.trim().toLowerCase()) {
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
  const foundCars: car[] = [];
  alert("Find a car - enter manufacturer and model");
  const manufacturer = String(prompt("Enter manufacturer:"));
  const model = Number(prompt("Enter the model"));
  for (let i = 0; i < allCars.length; i++) {
    if (
      allCars[i].manufacturer === manufacturer &&
      allCars[i].model === model
    ) {
      foundCars.push(allCars[i]);
    }
  }
  if (!foundCars.length) {
    alert("No match");
    return;
  } else {
    alert(foundCars.toString());
    return foundCars;
  }
}

function carStatus() {
  const searchOption = prompt("choose which list you need: sale/rent/all");
  let purposeCars: car[] = [];
  if (searchOption?.trim().toLowerCase() === "sale") {
    purposeCars = allCars.filter((car) => car.purpose === "sale");
  } else if (searchOption?.trim().toLowerCase() === "rent") {
    purposeCars = allCars.filter((car) => car.purpose === "rent");
  } else {
  return alert(allCars.toString());
  }
}
