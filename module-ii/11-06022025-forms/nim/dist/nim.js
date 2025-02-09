export const initialMatches = 13;
export function takeMatches(matchesToTake) {
    if (isGameOver()) {
        return;
    }
    matches = Math.max(0, matches - matchesToTake);
    currentPlayer = currentPlayer === "A" ? "B" : "A";
}
export function init() {
    matches = initialMatches;
    currentPlayer = "A";
}
export function isGameOver() {
    return matches === 0;
}
export let matches = initialMatches;
export let currentPlayer = "A";
