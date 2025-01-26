// Text based adventure game
// Locations and navigation - show description of current location and available options
// End game states - get to certain state/goal to win, or run into "trouble" and loose
// Inventory - track items in the user's possession and their state, allow using and dropping items, (limit invnetory size?)

playGame();

function playGame() {
  let currentRoom: Function | undefined = moonlitGrove;

  while (currentRoom) {
    currentRoom = currentRoom();
  }

  alert("Thank you for playing!");
}
function errorHandling() {
  const exitAnswer = prompt("are you sure you want to quit? YES/NO");
  switch (exitAnswer?.trim().toLowerCase()) {
    case "yes":
    case "y":
      return undefined;
    case "no":
    case "n":
        return playGame();
    default:
      alert("Please choose YES or NO");
      return errorHandling();
  }
}
function Inventory(item: string, useInventory: boolean){ 
    const InventoryList = [];
    InventoryList.push(item);
    if (item === undefined || item === null ){
    InventoryList.pop();
    } else {
    alert("You added toy your bag " + item);
    return InventoryList;  
    }

    if (useInventory){
    alert("You open your bag and see " + InventoryList); 
    const useItem = prompt("Which item do you want to use?")
    for(let i = 0; i <= InventoryList.length; i++){
        if(InventoryList[i] === useItem){
          alert("You used " + InventoryList[i] )
          InventoryList.splice(i, 1);
          return InventoryList[i];
        } else {
        alert("It's seems that you dont have this item...");
        }
    }
    }
}

function moonlitGrove() {
  const userAction = prompt(
    "The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +
      "1. Approach the stone archway\n" +
      "2. Follow the stream towards the distant forest\n" +
      "3. You see a sword on a ground, take it?"
  );
  
  switch (userAction?.trim().toLowerCase()) {
    case "approach":
    case "a":
    case "1":
      return forgottenTemple;
    case "follow":
    case "f":
    case "2":
      return enchantedForrestClearing;
    case "3":
    case "take":
        return Inventory(userAction, false); 
    case undefined:
    case null:
    default:
      return errorHandling();
  }
}

function forgottenTemple() {
  const userAction = prompt(
    "The crumbling walls of a long-abandoned temple rise before you. The floor is covered in moss and vine, and faint carvings of gods and beasts can be seen on the stone pillars. A heavy door to the south is slightly ajar.\n" +
      "1. Enter the ajar door\n" +
      "2. Return to the Moonlit Grove"
  );

  switch (userAction?.trim().toLowerCase()) {
    case "enter":
    case "e":
    case "1":
      return hiddenChamber;
    case "return":
    case "r":
    case "2":
      return moonlitGrove;
      case undefined:
      case null:
      default:
        return errorHandling();
  }
}

function enchantedForrestClearing() {
  const userAction = prompt(
    "A serene, circular clearing surrounded by ancient oaks. The air here feels charged with magic, and faint whispers can be heard if you listen closely. In the center, an old well glows faintly, its waters still and inviting.\n" +
      "1. Inspect the glowing well\n" +
      "2. Head back toward the Moonlit Grove"
  );

  switch (userAction) {
    case "1":
      return hiddenChamber;
    case "2":
      return moonlitGrove;
  }
}

function hiddenChamber() {
  const userAction = prompt(
    "A small, hidden chamber deep beneath the earth, lit by glowing crystals embedded in the walls. Strange symbols pulse faintly, and an old chest lies in the corner, untouched for centuries. A narrow tunnel leads further into the darkness.\n" +
      "1. Open the chest\n" +
      "2. Enter the narrow tunnel"
  );

  switch (userAction) {
    case "1":
      alert("You found a secret treasure!");
      return;
    case "2":
      return enchantedForrestClearing;
  }
}
