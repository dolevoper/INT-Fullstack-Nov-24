// API
const boardSize = 3;

export function makeMove(row: number, column: number) {
    board[row][column] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function isWinDiagolnal() {
    return board[0][0] === board[1][1] &&
    board[1][1] === board[2][2];
}

// Model/State
type Player = "X" | "O";

export const board: Player[][] = [[], [], []];
export let currentPlayer: Player = "X";
