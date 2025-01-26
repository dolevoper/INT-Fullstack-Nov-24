type car = {
  manufacturer: string;
  model: number;
  year: number;
  kilometerage: number;
  hand: number;
};

const carForSale: car[] = [];
const carForRent: car[] = [];
const allCars: car[] = [];
menu();

function menu() {
let currentState: Function | undefined = CarCompany;

 while (currentState){
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
          return CarCompany();
      default:
        alert("Please choose YES or NO");
        return errorHandling();
    }
  }
function CarCompany() {
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

function registerNewCar(arraySale: car[],arrayRent: car[],arrayAll: car[]){
  alert("Register a new car");
  const manufacturer = String(prompt("Enter manufacturer:"));
  const model = Number(prompt("Enter the model"));
  const year = Number(prompt("Enter year"));
  const kilometerage = Number(prompt("Enter the kilometerage"));
  const hand = Number(prompt("Enter number of previous owners (in numbers)"));

  const newCar: car = {
    manufacturer: manufacturer,
    model: model,
    year: year,
    kilometerage: kilometerage,
    hand: hand,
  };
  const saleOrRent = prompt("Choose if a car for SALE/RENT");
  switch (saleOrRent?.trim().toLowerCase()) {
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
  alert(JSON.stringify(newCar))
  return menu;
}

function findCar(arrayAll: car[]) {
  const foundCars: car [] = []; 
  alert("Find a car - enter manufacturer and model");
  const manufacturer = String(prompt("Enter manufacturer:"));
  const model = Number(prompt("Enter the model"));
  for (let i = 0; i < arrayAll.length; i++){
  if (arrayAll[i].manufacturer === manufacturer && arrayAll[i].model === model){
  foundCars.push(arrayAll[i]);
  } 
}
  if (foundCars[0] === null) {
    alert("No match");
    return;
  } else {
    alert(JSON.stringify(foundCars));
    return foundCars;
  }
}

function carStatus(arraySale: car[],arrayRent: car[],arrayAll: car[]){
const searchOption = prompt("choose which list you need: sale/rent/all")
switch (searchOption?.trim().toLowerCase()) {
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

function oldestCar(arrayAll: car []){
for (const arrayAll of arrayAll){

}

}
