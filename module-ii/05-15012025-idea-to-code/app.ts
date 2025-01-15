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

function moonlitGrove() {
    const userAction = prompt(
        "The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +
        "1. Approach the stone archway\n" +
        "2. Follow the stream towards the distant forest"
    );

    switch (userAction?.trim().toLowerCase()) {
        case "approach":
        case "a":
        case "1": return forgottenTemple;
        case "follow":
        case "f":
        case "2": return enchantedForrestClearing;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : moonlitGrove;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return moonlitGrove;
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
        case "1": return hiddenChamber;
        case "return":
        case "r":
        case "2": return moonlitGrove;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : forgottenTemple;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return forgottenTemple;
    }
}

function enchantedForrestClearing() {
    const userAction = prompt(
        "A serene, circular clearing surrounded by ancient oaks. The air here feels charged with magic, and faint whispers can be heard if you listen closely. In the center, an old well glows faintly, its waters still and inviting.\n" +
        "1. Inspect the glowing well\n" +
        "2. Head back toward the Moonlit Grove"
    );

    switch (userAction) {
        case "1": return hiddenChamber;
        case "2": return moonlitGrove;
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
        case "2": return enchantedForrestClearing;
    }
}
