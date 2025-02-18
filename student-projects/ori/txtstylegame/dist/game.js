// Text-based adventure game with dynamic room states
var inventory = [];
// Room states to track player actions
var roomStates = {
    forgottenTemple: { hasTakenKey: false },
    enchantedForrestClearing: { hasTakenKey: false }
};
playGame();
function playGame() {
    console.log("Game started!");
    var currentRoom = moonlitGrove;
    while (currentRoom) {
        currentRoom = currentRoom();
    }
    alert("Thank you for playing!");
}
function handleInvalidInput(userAction, currentRoom) {
    if (userAction === null) {
        var shouldQuit = confirm("Are you sure you want to quit the game?");
        return shouldQuit ? undefined : currentRoom;
    }
    else {
        alert("Sorry, I don't know what \"" + userAction + "\" means.");
        return currentRoom;
    }
}
// Inventory management functions
function addItem(item) {
    inventory.push(item);
    alert("You have added \"" + item.name + "\" to your inventory.");
}
function hasItem(itemName) {
    return inventory.some(function (item) { return item.name.toLowerCase() === itemName.toLowerCase(); });
}
function showInventory() {
    if (inventory.length === 0) {
        alert("Your inventory is empty.");
    }
    else {
        var inventoryList = inventory.map(function (item) { return "- " + item.name + ": " + item.description; }).join("\n");
        alert("Your inventory:\n" + inventoryList);
    }
}
// Rooms
function moonlitGrove() {
    var userAction = prompt("The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +
        "1. Approach the stone archway\n" +
        "2. Follow the stream towards the distant forest\n" +
        "3. Check inventory");
    switch (userAction === null || userAction === void 0 ? void 0 : userAction.trim().toLowerCase()) {
        case "approach":
        case "a":
        case "1": return forgottenTemple;
        case "follow":
        case "f":
        case "2": return enchantedForrestClearing;
        case "inventory":
        case "i":
        case "3":
            showInventory();
            return moonlitGrove;
        default: return handleInvalidInput(userAction, moonlitGrove);
    }
}
function forgottenTemple() {
    var room = roomStates.forgottenTemple;
    var userAction = prompt("The crumbling walls of a long-abandoned temple rise before you. " + (room.hasTakenKey ? "The pedestal where the key rested is now empty." : "A shiny key rests on a pedestal.") + "\n" +
        "1. Take the shiny key\n" +
        "2. Return to the Moonlit Grove\n" +
        "3. Check inventory");
    switch (userAction === null || userAction === void 0 ? void 0 : userAction.trim().toLowerCase()) {
        case "take":
        case "t":
        case "1":
            if (!room.hasTakenKey) {
                addItem({ name: "Shiny Key", description: "A key that glimmers faintly in the light." });
                room.hasTakenKey = true;
            }
            else {
                alert("You have already taken the key.");
            }
            return forgottenTemple;
        case "return":
        case "r":
        case "2": return moonlitGrove;
        case "inventory":
        case "i":
        case "3":
            showInventory();
            return forgottenTemple;
        default: return handleInvalidInput(userAction, forgottenTemple);
    }
}
function enchantedForrestClearing() {
    var room = roomStates.enchantedForrestClearing;
    var userAction = prompt("A serene clearing surrounded by ancient oaks. " + (room.hasTakenKey ? "The spot where the rusty key was buried is now empty." : "A rusty key is half-buried in the soft ground.") + "\n" +
        "1. Take the rusty key\n" +
        "2. Head back toward the Moonlit Grove\n" +
        "3. Check inventory");
    switch (userAction === null || userAction === void 0 ? void 0 : userAction.trim().toLowerCase()) {
        case "take":
        case "t":
        case "1":
            if (!room.hasTakenKey) {
                addItem({ name: "Rusty Key", description: "An old, rusty key with mysterious engravings." });
                room.hasTakenKey = true;
            }
            else {
                alert("You have already taken the key.");
            }
            return enchantedForrestClearing;
        case "back":
        case "b":
        case "2": return moonlitGrove;
        case "inventory":
        case "i":
        case "3":
            showInventory();
            return enchantedForrestClearing;
        default: return handleInvalidInput(userAction, enchantedForrestClearing);
    }
}
function hiddenChamber() {
    var userAction = prompt("A small, hidden chamber deep beneath the earth. An old chest lies in the corner, untouched for centuries.\n" +
        "1. Attempt to open the chest\n" +
        "2. Enter the narrow tunnel\n" +
        "3. Check inventory");
    switch (userAction === null || userAction === void 0 ? void 0 : userAction.trim().toLowerCase()) {
        case "open":
        case "o":
        case "1":
            if (hasItem("Shiny Key") && hasItem("Rusty Key")) {
                alert("You used both keys to open the chest and found a priceless treasure!");
                return;
            }
            else {
                alert("The chest is locked. You need two keys to open it.");
                return hiddenChamber;
            }
        case "enter":
        case "e":
        case "2": return enchantedForrestClearing;
        case "inventory":
        case "i":
        case "3":
            showInventory();
            return hiddenChamber;
        default: return handleInvalidInput(userAction, hiddenChamber);
    }
}
