// API
const boardSize = 3;
export function makeMove(row, column) {
    board[row][column] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function isWinDiagolnal() {
    return board[0][0] === board[1][1] &&
        board[1][1] === board[2][2];
}
export const board = [[], [], []];
export let currentPlayer = "X";
