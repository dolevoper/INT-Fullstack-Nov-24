// const drinks: Drink[] = [];

// State boundary

class Timer {
    #timeLeft: number;
    time: number;
  
    constructor(time: number) {
      this.#timeLeft = time;
      this.time = time;
    }
  
    getTimeToVanishInMs() {
      return this.#timeLeft;
    }
  
    getIsVanished() {
      return this.#timeLeft <= 0;
    }
  
    tick(ms: number) {
      this.#timeLeft -= ms;
    }
  
    reset() {
      this.#timeLeft = this.time;
    }
  }
  
  type Renderable = {
    render(): void,
    cleanUp?(): void,
  };
  
  type VanishingItem = {
    timer: Timer,
    renderable: Renderable,
  };
  
  
  function drink(name: string, timeToVanishInMs: number, healthBoost: number, xPos: number, yPpos: number, imageSrc: string, imageAlt: string): VanishingItem {
    return {
      timer: new Timer(timeToVanishInMs),
      renderable: {
        render() {
          // draw imageSrc at xPos, yPos
        }
      }
    };
  }
  
  function beer(): VanishingItem {
    return drink(
      "Beer",
      5000,
      3,
      Math.random(),
      Math.random(),
      "",
      ""
    );
  }
  
  
  const vanish1 = new Timer(5000);
  const intervalInMs = 1000;
  const interval1Id = setInterval(() => {
    vanish1.tick(intervalInMs);
  
    if (vanish1.getIsVanished()) {
      // cleanup
      clearInterval(interval1Id);
    }
  }, intervalInMs);
  
  
  const timeToLiveInMs = 5000;
  const vanish2 = new Timer(timeToLiveInMs);
  setTimeout(() => {
    // cleanup
  }, timeToLiveInMs);
  
  
  
  const vanish3 = new Timer(5000);
  requestAnimationFrame(gameLoop);
  
  let lastAnimationFrame = 0;
  function gameLoop(timestamp: number) {
    const dt = timestamp - lastAnimationFrame;
    lastAnimationFrame = timestamp;
  
    if (!vanish3.getIsVanished()) {
      vanish3.tick(dt);
    } else {
      // cleanup
    }
  
    requestAnimationFrame(gameLoop);
  };
  
  
  
  
  class Drink {
    #id: String;
    #name: String;
    #timeToVanish: number;
    #value: number;
    xPos: number;
    yPos: number;
    #timerId: number | null = null;
    #drinks: Drink[];
  
    constructor(drinks: Drink[], id: String, xPos: number, yPos: number, name: String, timeToVanish: number, value: number) {
  
      this.#id = id;
      this.#name = name;
      this.#timeToVanish = timeToVanish;
      this.#value = value;
      this.xPos = xPos;
      this.yPos = yPos;
      this.#drinks = drinks;
    }
  
    getValue() {
      return this.#value;
    }
    getName() {
      return this.#name;
    }
    getID() {
      return this.#id;
    }
  
    removeFromBoard() {
      const bottleEl = document.getElementById(this.#id.toString())!;
      bottleEl.remove();
  
      const index = this.#drinks.findIndex(drink => drink.#id === this.#id);
      if (index !== -1) {
        this.#drinks.splice(index, 1);
      }
      if (this.#timerId !== null) {
        clearInterval(this.#timerId);
        console.log(`Timer stopped for bottle id: ${this.#id}`);
      }
      console.log(this.#drinks);
    }
  
    putOnBoard() {
      const gameField = document.getElementById("gameField")!;
      const divEl = document.createElement("div");
      divEl.classList.add("bottle");
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