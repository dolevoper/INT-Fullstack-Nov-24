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

function userAction(text: string, options: string, item: string) {
    if (!hasItem(item)) {
        options += "\nCollect an " + item; 
    }
    const userAction = prompt(text + "\n" + options);
}

function moonlitGrove() {
    let options = "1. Approach the stone archway\n" +
        "2. Follow the stream towards the distant forest\n";
    if (!hasItem("wooden branch")) {
        options += "3. Collect a wooden branch";

    }
    const userAction = prompt(
        "The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +
        options
    );


    switch (userAction?.trim().toLowerCase()) {
        case "approach":
        case "a":
        case "1":
            if (hasItem("wooden branch")) {
                alert("You use the wooden branch to push open the heavy archway door and enter.");
                return forgottenTemple;
            } else {
                alert("The door is too heavy to open with bare hands. Perhaps a wooden branch could help.");
                return moonlitGrove;
            }
        case "follow":
        case "f":
        case "2": return enchantedForestClearing;
        case "collect":
        case "c":
        case "3":
            if (!hasItem("wooden branch")) {
                addToInventory("wooden branch");
            } else {
                alert("You have already collected the wooden branch.");
            }
            return moonlitGrove
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : moonlitGrove;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return moonlitGrove;
    }
}

function forgottenTemple() {
    let options = "1. Enter the ajar door\n" +
        "2. Return to the Moonlit Grove\n";
    if (!hasItem("ancient stone")) {
        options += "3. Collect an ancient stone";
    }
    const userAction = prompt(
        "The crumbling walls of a long-abandoned temple rise before you. The floor is covered in moss and vine, and faint carvings of gods and beasts can be seen on the stone pillars. A heavy door to the south is slightly ajar.\n" +
        options
    );

    switch (userAction?.trim().toLowerCase()) {
        case "enter":
        case "e":
        case "1":
            if (hasItem("ancient stone")) {
                alert("You fit the ancient stone into a slot, fully opening the door.");
                return hiddenChamber;
            } else {
                alert("The door is stuck and cannot be opened. Perhaps the ancient stone would help.");
                return forgottenTemple;
            }
        case "return":
        case "r":
        case "2": return moonlitGrove;
        case "collect":
        case "c":
        case "3":
            if (!hasItem("ancient stone")) {
                addToInventory("ancient stone");
            } else {
                alert("You have already collected the ancient stone.");
            }
            return forgottenTemple;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : forgottenTemple;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return forgottenTemple;
    }
}

function enchantedForestClearing() {
    let options = "1. Inspect the glowing well\n" +
        "2. Head back toward the Moonlit Grove\n";
    if (!hasItem("magical flowe")) {
        options += "3. Collect a magical flower";
    }
    const userAction = prompt(
        "A serene, circular clearing surrounded by ancient oaks. The air here feels charged with magic, and faint whispers can be heard if you listen closely. In the center, an old well glows faintly, its waters still and inviting.\n" +
        options
    );

    switch (userAction) {
        case "inspect":
        case "i":
        case "1":
            if (hasItem("magical flower")) {
                alert("You toss the magical flower into the well, and a hidden passage reveals itself.");
                return hiddenChamber;
            } else {
                alert("The well appears ordinary. Perhaps the magical flower would do something.");
                return enchantedForestClearing;
            }
        case "head":
        case "h":
        case "2": return moonlitGrove;
        case "collect":
        case "c":
        case "3":
            if (!hasItem("magical flower")) {
                addToInventory("magical flower");
            } else {
                alert("You have already collected the magical flower.");
            }
            return enchantedForestClearing;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : enchantedForestClearing;
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

    switch (userAction) {
        case "open":
        case "o":
        case "1":
            alert("You found a secret treasure!");
            return;
        case "enter":
        case "e":
        case "2": return enchantedForestClearing;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : hiddenChamber;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return hiddenChamber;
    }
}
