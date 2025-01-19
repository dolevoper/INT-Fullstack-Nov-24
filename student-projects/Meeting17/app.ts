// Text based adventure game
// Locations and navigation - show description of current location and available options
// End game states - get to certain state/goal to win, or run into "trouble" and loose
// Inventory - track items in the user's possession and their state, allow using and dropping items, (limit invnetory size?)

// * Extract error handling logic to a reusable function
// * Implement inventory system and have part of the game be affected by it
// * Continue game as much as you'd like

let inventory = "";

playGame();

function playGame() {
    let currentRoom: Function | undefined = moonlitGrove;

    while (currentRoom) {
        currentRoom = currentRoom();
    }

    alert("Thank you for playing!");
}

function addToInventory(item: string) {
    if (!inventory.includes(item)) {
        inventory += item + " ";
        alert(item + " has been added to your inventory.");
    } else {
        alert("You already have the " + item + " in your inventory.");
    }
}

function hasItem(item: string) {
    return inventory.includes(item);
}

function userChoice(text: string, options: string, item: string) {
    if (!hasItem(item)) {
        options += "\n3. Collect an " + item;
    }
    const userAction = prompt(text + "\n" + options);
    return userAction;
}

function collect(item: string, roomName: Function) {
    if (!hasItem(item)) {
        addToInventory(item);
    } else {
        alert("You have already collected the " + item + ".");
    }
    return roomName;
}

function moveRoom(item: string, currentRoom: Function, nextRoom: Function, alertMoove: string, alertStay: string) {
    if (hasItem(item)) {
        alert(alertMoove);
        return nextRoom;
    } else {
        alert(alertStay);
        return currentRoom;
    }
}

function undefinedCase(currentRoom: Function) {
    const shouldQuit = confirm("Are you sure you want to quit the game?");
    return shouldQuit ? undefined : currentRoom;
}


function moonlitGrove() {
    const text = "The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.";
    const options = "1. Approach the stone archway\n" +
        "2. Follow the stream towards the distant forest";
    const item = "wooden branch";

    const userAction = userChoice(text, options, item);

    switch (userAction?.trim().toLowerCase()) {
        case "approach":
        case "a":
        case "1": moveRoom("wooden branch", moonlitGrove, forgottenTemple, "You use the wooden branch to push open the heavy archway door and enter.", "The door is too heavy to open with bare hands. Perhaps a wooden branch could help.");
        case "follow":
        case "f":
        case "2": return enchantedForestClearing;
        case "collect":
        case "c":
        case "3": collect("wooden branch", moonlitGrove);
        case undefined: undefinedCase(moonlitGrove);
        default: 
            alert(`Sorry, I don't know what is "${userAction}"`);
            return moonlitGrove;
    }
}

function forgottenTemple() {
    const text = "The crumbling walls of a long-abandoned temple rise before you. The floor is covered in moss and vine, and faint carvings of gods and beasts can be seen on the stone pillars. A heavy door to the south is slightly ajar.";
    const options = "1. Enter the ajar door\n" +
        "2. Return to the Moonlit Grove";
    const item = "ancient stone";

    const userAction = userChoice(text, options, item);

    switch (userAction?.trim().toLowerCase()) {
        case "enter":
        case "e":
        case "1": moveRoom("ancient stone", forgottenTemple, hiddenChamber, "You fit the ancient stone into a slot, fully opening the door.", "The door is stuck and cannot be opened. Perhaps the ancient stone would help.");
        case "return":
        case "r":
        case "2": return moonlitGrove;
        case "collect":
        case "c":
        case "3": collect("ancient stone", forgottenTemple);
        case undefined: undefinedCase(forgottenTemple);
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return forgottenTemple;
    }
}

function enchantedForestClearing() {
    const text = "A serene, circular clearing surrounded by ancient oaks. The air here feels charged with magic, and faint whispers can be heard if you listen closely. In the center, an old well glows faintly, its waters still and inviting.";
    const options = "1. Inspect the glowing well\n" +
        "2. Head back toward the Moonlit Grove";
    const item = "magical flower";

    const userAction = userChoice(text, options, item);

    switch (userAction?.trim().toLowerCase()) {
        case "inspect":
        case "i":
        case "1": moveRoom("magical flower", enchantedForestClearing, hiddenChamber, "You toss the magical flower into the well, and a hidden passage reveals itself.", "The well appears ordinary. Perhaps the magical flower would do something.");
        case "head":
        case "h":
        case "2": return moonlitGrove;
        case "collect":
        case "c":
        case "3": collect("magical flower", enchantedForestClearing);
        case undefined: undefinedCase(enchantedForestClearing);
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return enchantedForestClearing;
    }

}

function hiddenChamber() {
    const userAction = prompt(
        "A small, hidden chamber deep beneath the earth, lit by glowing crystals embedded in the walls. Strange symbols pulse faintly, and an old chest lies in the corner, untouched for centuries. A narrow tunnel leads further into the darkness.\n" +
        "1. Open the chest\n" +
        "2. Enter the narrow tunnel"
    );

    switch (userAction?.trim().toLowerCase()) {
        case "open":
        case "o":
        case "1":
            alert("You found a secret treasure!");
            return;
        case "enter":
        case "e":
        case "2": return enchantedForestClearing;
        case undefined: undefinedCase(hiddenChamber);
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return hiddenChamber;
    }
}
