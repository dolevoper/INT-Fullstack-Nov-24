var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _happiness;
// factory function/method
function createDog(hairColor, gender) {
    var isHungry = false;
    var happiness = 3;
    return {
        getHairColor: function () {
            return hairColor;
        },
        getGender: function () {
            return gender;
        },
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
}
var shusha = createDog("white", "female");
var rexy = createDog("black", "male");
// prototype object
var dogPrototype = {
    bark: function () {
        console.log("woof!");
    },
    play: function () {
        this.happiness++;
    }
};
var ollie = Object.create(dogPrototype, {
    happiness: {
        value: 3,
        writable: true
    },
    gender: {
        value: "male"
    }
});
ollie.bark();
var snowy = Object.create(dogPrototype, {
    happiness: {
        value: 3,
        writable: true
    },
    gender: {
        value: "female"
    }
});
// constructor
function Dog(gender) {
    this.happiness = 3;
    this.gender = gender;
}
Dog.prototype.play = function () {
    this.happiness++;
};
var milky = new Dog("female");
milky.play();
console.log(milky.happiness);
milky.happiness = 999;
console.log(milky.happiness);
// class
var Dogg = /** @class */ (function () {
    function Dogg(gender) {
        _happiness.set(this, 3);
        this.gender = gender;
    }
    Dogg.prototype.play = function () {
        __classPrivateFieldSet(this, _happiness, +__classPrivateFieldGet(this, _happiness) + 1);
    };
    return Dogg;
}());
_happiness = new WeakMap();
var simba = new Dogg("male");
