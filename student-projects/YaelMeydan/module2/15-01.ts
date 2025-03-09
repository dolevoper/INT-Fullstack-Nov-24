const UserNickname = prompt("Hello, welcome to the Enchanted game.\n" +
                            "Please enter your nickname:");
alert("Hi,  " + UserNickname + "In this game you'll need to find the secret treasure.\n" +
                               "Press on a number (1 , 2 or 3) to move ahead.\n" +
                               "Press 'ok' to start or 'cancel' to quit the game.");

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
        "2. Walk up the hill ahead" +
        "3. Show inventory"
    );

    switch (userAction?.trim().toLowerCase()) {
        case "1": alert("Congrats! You have found a useful axe")
                  return forgottenTemple;
        case "2": alert("Oops! You have been walking in circles.")
                 return moonlitGrove;
        case "3": alert(UserNickname + ":/nYour inventory is empty." );
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
    const userAction = prompt(
        "The crumbling walls of a long-abandoned temple rise before you. The floor is covered in moss and vine, and faint carvings of gods and beasts can be seen on the stone pillars. A heavy door to the south is sealed with a big lock.\n" +
        "1. Follow the stream ahead towards the distant forest" +
        "2. Use the axe to break the door lock\n" +
        "3. Show inventory"
    );

    switch (userAction?.trim().toLowerCase()) {
        case "1": alert("Oops! You have been walking the wrong way.")
                  return forgottenTemple;
        case "2": alert("Your axe broke while opening the lock.\n Be aware, Behind the heavy door there is a mysteriuos key ")
                  return enchantedForrestClearing;
        case "3": alert(UserNickname + ":/nYou have an axe." );
                  return forgottenTemple          
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
        "2. Head back toward the Moonlit Grove" +
        "3. Show inventory"
    );

    switch (userAction) {
        case "1": return hiddenChamber;
        case "2": return moonlitGrove;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : forgottenTemple;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return forgottenTemple;
    }
}

function hiddenChamber() {
    const userAction = prompt(
        "A small, hidden chamber deep beneath the earth, lit by glowing crystals embedded in the walls. Strange symbols pulse faintly, and an old chest lies in the corner, untouched for centuries. A narrow tunnel leads further into the darkness.\n" +
        "1. Open the chest\n" +
        "2. Enter the narrow tunnel" +
        "3. Show inventory"
    );

    switch (userAction) {
        case "1":
            alert("Congrats! " + UserNickname + "  You found a secret treasure!");
            return;
        case "2": return enchantedForrestClearing;
        case undefined:
            const shouldQuit = confirm("Are you sure you want to quit the game?");

            return shouldQuit ? undefined : forgottenTemple;
        default:
            alert(`Sorry, I don't know what is "${userAction}"`);
            return forgottenTemple;
    }
}

