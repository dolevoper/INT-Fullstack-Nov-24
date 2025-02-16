"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _items, _stock, _inventory, _itemsStorageKey;
exports.__esModule = true;
exports.warehouse = void 0;
var Warehouse = /** @class */ (function () {
    function Warehouse(itemsStorageKey) {
        if (itemsStorageKey === void 0) { itemsStorageKey = "items"; }
        _items.set(this, []);
        _stock.set(this, []);
        _inventory.set(this, []);
        _itemsStorageKey.set(this, void 0);
        __classPrivateFieldSet(this, _itemsStorageKey, itemsStorageKey);
    }
    Warehouse.prototype.getItems = function () {
        return __classPrivateFieldGet(this, _items).slice();
    };
    Warehouse.prototype.getItem = function (itemId) {
        var item = __classPrivateFieldGet(this, _items).find(function (i) { return i.id === itemId; });
        return item !== null && item !== void 0 ? item : "Item with id \"" + itemId + "\" doesn't exist.";
    };
    Warehouse.prototype.addItem = function (item) {
        if (__classPrivateFieldGet(this, _items).some(function (i) { return i.id === item.id; })) {
            return "Id \"" + item.id + "\" already exists";
        }
        __classPrivateFieldGet(this, _items).push(item);
        localStorage.setItem(__classPrivateFieldGet(this, _itemsStorageKey), JSON.stringify(__classPrivateFieldGet(this, _items)));
        return "Success";
    };
    Warehouse.prototype.editItem = function (item) {
        var itemToEdit = this.getItem(item.id);
        if (typeof itemToEdit === "string") {
            return itemToEdit;
        }
        itemToEdit.name = item.name;
        itemToEdit.description = item.description;
        itemToEdit.priceInAgorot = item.priceInAgorot;
        localStorage.setItem(__classPrivateFieldGet(this, _itemsStorageKey), JSON.stringify(__classPrivateFieldGet(this, _items)));
        return "Success";
    };
    return Warehouse;
}());
_items = new WeakMap(), _stock = new WeakMap(), _inventory = new WeakMap(), _itemsStorageKey = new WeakMap();
exports.warehouse = new Warehouse();
