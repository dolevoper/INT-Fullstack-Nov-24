const boardSize = 16;

export function makeMove(row: number, column: number) {
    board[row][column] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const lastmove = (boardSize.length = 15);
lastmove.after(isWin);

function isWin() {
    if(value === "X"){
        alert(`Player "O" is the winner!`);
    }
    else{
        alert(`Player "X" is ythe winner!`);
    }
}


type Player = "X" | "O";

export const board: Player[][] = [[], [], [], []];
export let currentPlayer: Player = "X";
