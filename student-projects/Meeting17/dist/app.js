// Text based adventure game
// Locations and navigation - show description of current location and available options
// End game states - get to certain state/goal to win, or run into "trouble" and loose
// Inventory - track items in the user's possession and their state, allow using and dropping items, (limit invnetory size?)
// * Extract error handling logic to a reusable function
// * Implement inventory system and have part of the game be affected by it
// * Continue game as much as you'd like
var inventory = " ";
playGame();
function playGame() {
    var currentRoom = moonlitGrove;
    while (currentRoom) {
        currentRoom = currentRoom();
    }
    alert("Thank you for playing!");
}
function addToInventory(item) {
    if (!inventory.includes(item)) {
        inventory += item + " ";
        alert(item + " has been added to your inventory.");
    }
    else {
        alert("You already have the " + item + " in your inventory.");
    }
}
function moonlitGrove() {
    var userAction = prompt("The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +
        "1. Approach the stone archway\n" +
        "2. Follow the stream towards the distant forest\n" +
        "3. Collect a wooden branch");
    switch (userAction === null || userAction === void 0 ? void 0 : userAction.trim().toLowerCase()) {
        case "approach":
        case "a":
        case "1": return forgottenTemple;
        case "follow":
        case "f":
        case "2": return enchantedForrestClearing;
        case "collect":
        case "c":
        case "3":
            addToInventory("wooden branch");
            return forgottenTemple;
        case undefined:
            var shouldQuit = confirm("Are you sure you want to quit the game?");
            return shouldQuit ? undefined : moonlitGrove;
        default:
            alert("Sorry, I don't know what is \"" + userAction + "\"");
            return moonlitGrove;
    }
}
function forgottenTemple() {
    var userAction = prompt("The crumbling walls of a long-abandoned temple rise before you. The floor is covered in moss and vine, and faint carvings of gods and beasts can be seen on the stone pillars. A heavy door to the south is slightly ajar.\n" +
        "1. Enter the ajar door\n" +
        "2. Return to the Moonlit Grove\n" +
        "3. Collect an ancient stone");
    switch (userAction === null || userAction === void 0 ? void 0 : userAction.trim().toLowerCase()) {
        case "enter":
        case "e":
        case "1": return hiddenChamber;
        case "return":
        case "r":
        case "2": return moonlitGrove;
        case "collect":
        case "c":
        case "3":
            addToInventory("ancient stone");
            return forgottenTemple;
        case undefined:
            var shouldQuit = confirm("Are you sure you want to quit the game?");
            return shouldQuit ? undefined : forgottenTemple;
        default:
            alert("Sorry, I don't know what is \"" + userAction + "\"");
            return forgottenTemple;
    }
}
function enchantedForrestClearing() {
    var userAction = prompt("A serene, circular clearing surrounded by ancient oaks. The air here feels charged with magic, and faint whispers can be heard if you listen closely. In the center, an old well glows faintly, its waters still and inviting.\n" +
        "1. Inspect the glowing well\n" +
        "2. Head back toward the Moonlit Grove\n" +
        "3. Collect a magical flower");
    switch (userAction) {
        case "inspect":
        case "i":
        case "1": return hiddenChamber;
        case "head":
        case "h":
        case "2": return moonlitGrove;
        case "collect":
        case "c":
        case "3":
            addToInventory("magical flower");
            return enchantedForrestClearing;
        case undefined:
            var shouldQuit = confirm("Are you sure you want to quit the game?");
            return shouldQuit ? undefined : enchantedForrestClearing;
        default:
            alert("Sorry, I don't know what is \"" + userAction + "\"");
            return enchantedForrestClearing;
    }
}
function hiddenChamber() {
    var userAction = prompt("A small, hidden chamber deep beneath the earth, lit by glowing crystals embedded in the walls. Strange symbols pulse faintly, and an old chest lies in the corner, untouched for centuries. A narrow tunnel leads further into the darkness.\n" +
        "1. Open the chest\n" +
        "2. Enter the narrow tunnel\n" +
        "3. Collect a glowing crystal");
    switch (userAction) {
        case "open":
        case "o":
        case "1":
            alert("You found a secret treasure!");
            return;
        case "enter":
        case "e":
        case "2": return enchantedForrestClearing;
        case "collect":
        case "c":
        case "3":
            addToInventory("glowing crystal");
            return hiddenChamber;
        case undefined:
            var shouldQuit = confirm("Are you sure you want to quit the game?");
            return shouldQuit ? undefined : hiddenChamber;
        default:
            alert("Sorry, I don't know what is \"" + userAction + "\"");
            return hiddenChamber;
    }
}
