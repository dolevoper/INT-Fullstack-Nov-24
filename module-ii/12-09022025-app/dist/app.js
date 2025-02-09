// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects
// API
export let items = [];
export let stock = [];
export let inventory = [];
export function addItem(item) { }
export function addToStock(itemId, amount) { }
export function consume(itemId, quantity) { }
export function acquire(itemId, serial) { }
export function decomission(serial) { }
