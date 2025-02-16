// classes
class Player {
    constructor(xPos, yPos, stamina, degradation, recuperation) {
        this.#thirst = 0;
        this.#health = 10.0;
        this.#vigor = 10.0;
        this.xPos = xPos;
        this.yPos = yPos;
        this.#stamina = stamina;
        this.#degradation = degradation;
        this.#recuperation = recuperation;
    }
    #thirst;
    #health;
    #vigor;
    #stamina;
    #degradation;
    #recuperation;
    getThirst() {
        return this.#thirst;
    }
    getHealth() {
        return this.#health;
    }
    getVigor() {
        return this.#vigor;
    }
    drink(value) {
        this.#thirst -= value;
        if (this.#thirst < 0) {
            this.#thirst = 0;
        }
        // this.#health -= 1;
    }
    move(direction) {
        if (this.#vigor > 0) {
            console.log(`Vigor at move: ${this.#vigor}`);
            switch (direction) {
                case "Up":
                    this.yPos -= 1;
                    if (this.yPos === 0) {
                        this.yPos = 10;
                    }
                    break;
                case "Down":
                    this.yPos += 1;
                    if (this.yPos === 11) {
                        this.yPos = 1;
                    }
                    break;
                case "Left":
                    this.xPos -= 1;
                    if (this.xPos === 0) {
                        this.xPos = 10;
                    }
                    break;
                case "Right":
                    this.xPos += 1;
                    if (this.xPos === 11) {
                        this.xPos = 1;
                    }
                    break;
            }
            this.updatePosition();
            this.#vigor -= 0.5;
            for (const drink of drinks) {
                if ((drink.xPos === this.xPos) && (drink.yPos === this.yPos)) {
                    this.drink(drink.getValue());
                    console.log(`${drink.getName()} bottle ID:${drink.getID()} consumed`);
                    drink.removeFromBoard();
                }
            }
        }
    }
    timedStats() {
        this.#thirst += 1; //Thirst per second 
        if (this.#thirst > 10) {
            this.#thirst = 10;
        }
        else {
            console.log(`Thirst: ${this.#thirst}`);
        }
        this.#vigor += this.#stamina; //Vigor restoration per second
        if (this.#vigor > 10) {
            this.#vigor = 10;
        }
        else {
            console.log(`Vigor: ${this.#vigor}`);
        }
        if (this.#thirst >= 10) {
            this.#health -= this.#degradation;
            if (this.#health < this.#degradation) {
                this.#health = 0;
            }
            console.log(`Health: ${this.#health}`);
        }
        else {
            this.#health += this.#recuperation;
            if (this.#health > 10) {
                this.#health = 10;
            }
        }
    }
    updatePosition() {
        const benderB = document.getElementById("benderB");
        if (benderB) {
            benderB.style.gridColumn = this.xPos.toString();
            benderB.style.gridRow = this.yPos.toString();
        }
    }
}
class Drink {
    constructor(id, xPos, yPos, name, timeToVanish, value) {
        this.#timerId = null;
        this.#id = id;
        this.#name = name;
        this.#timeToVanish = timeToVanish;
        this.#value = value;
        this.#age = 0;
        this.#matured = false;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    #id;
    #name;
    #timeToVanish;
    #matured;
    #value;
    #age;
    #timerId;
    getValue() {
        return this.#value;
    }
    getName() {
        return this.#name;
    }
    getID() {
        return this.#id;
    }
    // timedStats(){
    //     this.#age += 1; 
    //     if (this.#age === this.#timeToVanish){
    //         this.#matured = true;
    //         console.log(`${this.#name} is matured`);
    //     }         
    // }
    removeFromBoard() {
        const bottleEl = document.getElementById(this.#id.toString());
        bottleEl.remove();
        const index = drinks.findIndex(drink => drink.#id === this.#id);
        if (index !== -1) {
            drinks.splice(index, 1);
        }
        if (this.#timerId !== null) {
            clearInterval(this.#timerId);
            console.log(`Timer stopped for bottle id: ${this.#id}`);
        }
        console.log(drinks);
    }
    putOnBoard() {
        const gameField = document.getElementById("gameField");
        const divEl = document.createElement("div");
        divEl.classList.add("bottle");
        //divEl.classList.add("gamePiece");
        divEl.classList.add(`u-${this.#name.toString()}`);
        divEl.style.gridColumn = this.xPos.toString();
        divEl.style.gridRow = this.yPos.toString();
        const imgEl = document.createElement("img");
        switch (this.#name) {
            case "beer":
                imgEl.src = "./images/Beer-cropped.jpg";
                imgEl.alt = "beer bottle image";
                break;
            case "wine":
                imgEl.src = "./images/red-wine.jpg";
                imgEl.alt = "wine bottle image";
                break;
            case "tequilla":
                imgEl.src = "./images/tequila-cropped.jpg";
                imgEl.alt = "tequilla bottle image";
                break;
        }
        imgEl.classList.add("gamePiece");
        divEl.id = this.#id.toString();
        divEl.appendChild(imgEl);
        gameField.appendChild(divEl);
        let counter = this.#timeToVanish;
        this.#timerId = setInterval(() => {
            if (counter === 0) {
                console.log(`bottle of ${this.#name} id:${this.#id} removed`);
                this.removeFromBoard();
            }
            counter--;
        }, 1000);
    }
}
function getName() {
    const random = Math.random() * 100;
    if (random < 50) {
        return "beer";
    }
    if (random < 90) {
        return "wine";
    }
    return "tequilla";
}
//Body
const healthDisplay = document.getElementById("health");
const thirstDisplay = document.getElementById("thirst");
const vigorDisplay = document.getElementById("vigor");
const gameField = document.getElementById("gameField");
let drinks = [];
//startX,startY,+vigor/sec,-health/sec,+health/sec
export const BenderB = new Player(1, 1, 0.5, 0.2, 0.2);
export function updateScore(score) {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = score.toString();
}
export function updateStatsDisplay() {
    vigorDisplay.textContent = BenderB.getVigor().toFixed(1).toString();
    healthDisplay.textContent = BenderB.getHealth().toFixed(1).toString();
    thirstDisplay.textContent = BenderB.getThirst().toString();
    if (BenderB.getVigor() < 1) {
        vigorDisplay.classList.add("u-redText");
    }
    else {
        vigorDisplay.classList.remove("u-redText");
    }
    if (BenderB.getThirst() >= 10) {
        thirstDisplay.classList.add("u-redText");
    }
    else {
        thirstDisplay.classList.remove("u-redText");
    }
    if (BenderB.getHealth() <= 3) {
        healthDisplay.classList.add("u-redText");
    }
    else {
        healthDisplay.classList.remove("u-redText");
    }
}
export function generateBottle() {
    let drinkX = 0;
    let drinkY = 0;
    let timeToVanish = 10;
    let value = 0;
    while (true) {
        drinkX = Math.floor(Math.random() * 10) + 1;
        drinkY = Math.floor(Math.random() * 10) + 1;
        if ((drinkX != BenderB.xPos) && (drinkY != BenderB.yPos)) {
            break;
        }
    }
    const newName = getName();
    console.log(`Bottle name is: ${newName}`);
    switch (newName) {
        case "beer":
            timeToVanish = 10;
            value = 2;
            break;
        case "wine":
            timeToVanish = 7;
            value = 4;
            break;
        case "tequilla":
            timeToVanish = 3;
            value = 6;
            break;
    }
    const id = crypto.randomUUID().replaceAll("-", "").slice(-6);
    const newBottle = new Drink(id, drinkX, drinkY, newName, timeToVanish, value); //id,X,Y,Name,time/sec,value
    console.log(newBottle);
    drinks.push(newBottle);
    newBottle.putOnBoard();
}
