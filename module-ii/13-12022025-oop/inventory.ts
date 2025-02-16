type ConsumableItem = {
    id: string,
    name: string,
    category: "Supplies",
    description?: string,
    priceInAgorot: number,
};

type EquipmentItem = {
    id: string,
    name: string,
    category: "Furniture" | "IT",
    description?: string,
    priceInAgorot: number,
};

type Item = ConsumableItem | EquipmentItem;

type Stock = { itemId: string, quantity: number }[];
type Inventory = { itemId: string, serial: string }[];

class Warehouse {
    #items: Item[] = [];
    #stock: Stock = [];
    #inventory: Inventory = [];
    #itemsStorageKey: string;

    constructor(itemsStorageKey = "items") {
        this.#itemsStorageKey = itemsStorageKey;
    }

    getItems() {
        return this.#items.slice();
    }
    
    getItem(itemId: string) {
        const item = this.#items.find((i) => i.id === itemId);
    
        return item ?? `Item with id "${itemId}" doesn't exist.`;
    }
    
    addItem(item: Item) {
        if (this.#items.some((i) => i.id === item.id)) {
            return `Id "${item.id}" already exists`;
        }
    
        this.#items.push(item);
    
        localStorage.setItem(this.#itemsStorageKey, JSON.stringify(this.#items));
    
        return "Success";
    }
    
    editItem(item: Item) {
        const itemToEdit = this.getItem(item.id);
    
        if (typeof itemToEdit === "string") {
            return itemToEdit;
        }
    
        itemToEdit.name = item.name;
        itemToEdit.description = item.description;
        itemToEdit.priceInAgorot = item.priceInAgorot;
    
        localStorage.setItem(this.#itemsStorageKey, JSON.stringify(this.#items));
    
        return "Success";
    }
}

export const warehouse = new Warehouse();
