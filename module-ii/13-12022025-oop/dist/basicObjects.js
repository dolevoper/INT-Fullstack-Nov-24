var dog = {
    hairColor: "white",
    name: "Shusha",
    gender: "female",
    isHungry: false,
    happiness: 3,
    bark: function () {
        console.log("woof!");
    },
    eat: function (food) {
        if (dog.isHungry) {
            dog.happiness++;
        }
        dog.isHungry = false;
    },
    play: function () {
        dog.isHungry = true;
        dog.happiness++;
    }
};
var encapsulatedDog = (function () {
    var isHungry = false;
    var happiness = 3;
    return {
        hairColor: "white",
        name: "Shusha",
        gender: "female",
        bark: function () {
            console.log("woof!");
        },
        eat: function (food) {
            if (isHungry) {
                happiness++;
            }
            isHungry = false;
        },
        play: function () {
            isHungry = true;
            happiness++;
        },
        getIsHungry: function () {
            return isHungry;
        },
        getHappiness: function () {
            return happiness;
        }
    };
})();
encapsulatedDog.play();
encapsulatedDog.eat({});
console.log(encapsulatedDog.getIsHungry());
// console.log(encapsulatedDog.isHungry);
