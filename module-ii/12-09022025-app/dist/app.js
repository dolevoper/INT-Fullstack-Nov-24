// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects
// API
const itemsStorageKey = "items";
let items = JSON.parse(localStorage.getItem(itemsStorageKey)) ?? [];
let stock = [];
let inventory = [];
export function getItems() {
    return items.slice();
}
export function addItem(item) {
    if (items.some((i) => i.id === item.id)) {
        return `Id "${item.id}" already exists`;
    }
    items.push(item);
    localStorage.setItem(itemsStorageKey, JSON.stringify(items));
    return "Success";
}
export function editItem(item) { }
export function addToStock(itemId, amount) { }
export function consume(itemId, quantity) { }
export function acquire(itemId, serial) { }
export function decomission(serial) { }
