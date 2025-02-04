const boardSize = 16;
export function makeMove(row, column) {
    board[row][column] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
const lastmove = (boardSize.length = 15);
lastmove.after(isWin);
function isWin() {
    if (value === "X") {
        alert(`Player "O" is the winner!`);
    }
    else {
        alert(`Player "X" is ythe winner!`);
    }
}
export const board = [[], [], [], []];
export let currentPlayer = "X";
