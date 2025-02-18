// factory function/method
function createDog(hairColor: string, gender: "male" | "female") {
    let isHungry = false;
    let happiness = 3;

    return {
        getHairColor() {
            return hairColor;
        },
        getGender() {
            return gender;
        },
        bark() {
            console.log("woof!");
        },
        eat(food) {
            if (isHungry) {
                happiness++;
            }
    
            isHungry = false;
        },
        play() {
            isHungry = true;
            happiness++;
        },
        getIsHungry() {
            return isHungry;
        },
        getHappiness() {
            return happiness;
        },
    };
}

const shusha = createDog("white", "female");
const rexy = createDog("black", "male");



// prototype object
const dogPrototype = {
    bark() {
        console.log("woof!");
    },
    play() {
        this.happiness++;
    },
};

const ollie = Object.create(dogPrototype, {
    happiness: {
        value: 3,
        writable: true,
    },
    gender: {
        value: "male",
    }
});
ollie.bark();

const snowy = Object.create(dogPrototype, {
    happiness: {
        value: 3,
        writable: true,
    },
    gender: {
        value: "female",
    }
});


// constructor
function Dog(gender: "male" | "female") {
    this.happiness = 3;
    this.gender = gender;
}

Dog.prototype.play = function () {
    this.happiness++;
};

const milky = new Dog("female");
milky.play();
console.log(milky.happiness);
milky.happiness = 999;
console.log(milky.happiness);



// class
class Dogg {
    gender: "male" | "female";
    #happiness = 3;
    constructor(gender: "male" | "female") {
        this.gender = gender;
    }
    play() {
        this.#happiness++;
    }
}

const simba = new Dogg("male");
