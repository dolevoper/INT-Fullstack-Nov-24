const matches = document.querySelectorAll(".match");
const confirmButton = document.createElement("button");
confirmButton.textContent = "Remove matches";
document.body.appendChild(confirmButton);
let player = "player 1";
let heapSize = 9;
let selectedMatches = [];
const gameOver = () => {
    alert(`${player} wins!`);
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
};
matches.forEach(match => {
    match.addEventListener("click", event => {
        const button = event.target;
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
    selectedMatches.forEach(button => {
        button.disabled = true;
    });
    selectedMatches = [];
});
