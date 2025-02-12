const dog = {
    hairColor: "white" as const,
    name: "Shusha" as const,
    gender: "female" as const,
    isHungry: false,
    happiness: 3,
    bark() {
        console.log("woof!");
    },
    eat(food) {
        if (dog.isHungry) {
            dog.happiness++;
        }

        dog.isHungry = false;
    },
    play() {
        dog.isHungry = true;
        dog.happiness++;
    }
};

const encapsulatedDog = (function () {
    let isHungry = false;
    let happiness = 3;

    return {
        hairColor: "white" as const,
        name: "Shusha" as const,
        gender: "female" as const,
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
        // get isHungry() {
        //     return isHungry;
        // },
        // set isHungry(value: boolean) {
        //     isHungry = value;
        // },
        // get happiness() {
        //     return happiness;
        // }
    };
})();

encapsulatedDog.play();
encapsulatedDog.eat({});
console.log(encapsulatedDog.getIsHungry());
// console.log(encapsulatedDog.isHungry);
