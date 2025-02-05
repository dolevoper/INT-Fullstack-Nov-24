
const matches = document.querySelectorAll<HTMLButtonElement>(".match");

const confirmButton = document.createElement("button");
confirmButton.textContent = "Remove matches";
document.body.appendChild(confirmButton);

const player1WinsDisplay = document.getElementById("player1-wins")
const player2WinsDisplay = document.getElementById("player2-wins")

let player: "player 1" | "player 2" = "player 1";
let heapSize = 9;
let selectedMatches: HTMLButtonElement[] = [];

let player1Wins = parseInt(localStorage.getItem("player1Wins") || "0");
let player2Wins = parseInt(localStorage.getItem("player2Wins") || "0");

const gameOver = () => {
    alert(`${player} wins!`);
    if (player === "player 1") {
        player1Wins++;
        localStorage.setItem("player1Wins", player1Wins.toString());
        player1WinsDisplay.textContent = `Player 1: ${player1Wins} wins`;
    } else {
        player2Wins++;
        localStorage.setItem("player2Wins", player2Wins.toString());
        player2WinsDisplay.textContent = `Player 2: ${player1Wins} wins`;
    }
    reset();
};

const reset = () => {
    matches.forEach(match => {
        match.textContent = " | ";
        match.disabled = false;
    });
    heapSize = 9;
    selectedMatches = [];
    player = "player 1";
    playersDisplay();
};

const playersDisplay = () => {
    const playerDisplay = document.getElementById("current-player");
    playerDisplay.textContent = `It is ${player}'s turn`;

};

matches.forEach(match => {
    match.addEventListener("click", event => {
        const button = event.target as HTMLButtonElement;
         
        if (!selectedMatches.includes(button)) {
            selectedMatches.push(button);
            button.textContent = "";
            heapSize--;

            if (heapSize <= 1) {
                gameOver();
            }
        }
    });
});

confirmButton.addEventListener("click", () => {
    if (selectedMatches.length === 0) {
        alert("You didn't choose any matches.");
        return;
    }

    player = player == "player 1" ? "player 2" : "player 1";
    playersDisplay();

    selectedMatches.forEach(button => {
        button.disabled = true;
    });

    selectedMatches = [];
});