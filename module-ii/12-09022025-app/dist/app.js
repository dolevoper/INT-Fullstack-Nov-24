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
export function getItem(itemId) {
    const item = items.find((i) => i.id === itemId);
    return item ?? `Item with id "${itemId}" doesn't exist.`;
}
export function addItem(item) {
    if (items.some((i) => i.id === item.id)) {
        return `Id "${item.id}" already exists`;
    }
    items.push(item);
    localStorage.setItem(itemsStorageKey, JSON.stringify(items));
    return "Success";
}
export function editItem(item) {
    const itemToEdit = getItem(item.id);
    if (typeof itemToEdit === "string") {
        return itemToEdit;
    }
    itemToEdit.name = item.name;
    itemToEdit.description = item.description;
    itemToEdit.priceInAgorot = item.priceInAgorot;
    localStorage.setItem(itemsStorageKey, JSON.stringify(items));
    return "Success";
}
export function addToStock(itemId, amount) { }
export function consume(itemId, quantity) { }
export function acquire(itemId, serial) { }
export function decomission(serial) { }
