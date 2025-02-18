// const drinks: Drink[] = [];
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
var _timeLeft, _id, _name, _timeToVanish, _value, _timerId, _drinks;
// State boundary
var Timer = /** @class */ (function () {
    function Timer(time) {
        _timeLeft.set(this, void 0);
        __classPrivateFieldSet(this, _timeLeft, time);
        this.time = time;
    }
    Timer.prototype.getTimeToVanishInMs = function () {
        return __classPrivateFieldGet(this, _timeLeft);
    };
    Timer.prototype.getIsVanished = function () {
        return __classPrivateFieldGet(this, _timeLeft) <= 0;
    };
    Timer.prototype.tick = function (ms) {
        __classPrivateFieldSet(this, _timeLeft, __classPrivateFieldGet(this, _timeLeft) - ms);
    };
    Timer.prototype.reset = function () {
        __classPrivateFieldSet(this, _timeLeft, this.time);
    };
    return Timer;
}());
_timeLeft = new WeakMap();
function drink(name, timeToVanishInMs, healthBoost, xPos, yPpos, imageSrc, imageAlt) {
    return {
        timer: new Timer(timeToVanishInMs),
        renderable: {
            render: function () {
                // draw imageSrc at xPos, yPos
            }
        }
    };
}
function beer() {
    return drink("Beer", 5000, 3, Math.random(), Math.random(), "", "");
}
var vanish1 = new Timer(5000);
var intervalInMs = 1000;
var interval1Id = setInterval(function () {
    vanish1.tick(intervalInMs);
    if (vanish1.getIsVanished()) {
        // cleanup
        clearInterval(interval1Id);
    }
}, intervalInMs);
var timeToLiveInMs = 5000;
var vanish2 = new Timer(timeToLiveInMs);
setTimeout(function () {
    // cleanup
}, timeToLiveInMs);
var vanish3 = new Timer(5000);
requestAnimationFrame(gameLoop);
var lastAnimationFrame = 0;
function gameLoop(timestamp) {
    var dt = timestamp - lastAnimationFrame;
    lastAnimationFrame = timestamp;
    if (!vanish3.getIsVanished()) {
        vanish3.tick(dt);
    }
    else {
        // cleanup
    }
    requestAnimationFrame(gameLoop);
}
;
var Drink = /** @class */ (function () {
    function Drink(drinks, id, xPos, yPos, name, timeToVanish, value) {
        _id.set(this, void 0);
        _name.set(this, void 0);
        _timeToVanish.set(this, void 0);
        _value.set(this, void 0);
        _timerId.set(this, null);
        _drinks.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _timeToVanish, timeToVanish);
        __classPrivateFieldSet(this, _value, value);
        this.xPos = xPos;
        this.yPos = yPos;
        __classPrivateFieldSet(this, _drinks, drinks);
    }
    Drink.prototype.getValue = function () {
        return __classPrivateFieldGet(this, _value);
    };
    Drink.prototype.getName = function () {
        return __classPrivateFieldGet(this, _name);
    };
    Drink.prototype.getID = function () {
        return __classPrivateFieldGet(this, _id);
    };
    Drink.prototype.removeFromBoard = function () {
        var _this = this;
        var bottleEl = document.getElementById(__classPrivateFieldGet(this, _id).toString());
        bottleEl.remove();
        var index = __classPrivateFieldGet(this, _drinks).findIndex(function (drink) { return __classPrivateFieldGet(drink, _id) === __classPrivateFieldGet(_this, _id); });
        if (index !== -1) {
            __classPrivateFieldGet(this, _drinks).splice(index, 1);
        }
        if (__classPrivateFieldGet(this, _timerId) !== null) {
            clearInterval(__classPrivateFieldGet(this, _timerId));
            console.log("Timer stopped for bottle id: " + __classPrivateFieldGet(this, _id));
        }
        console.log(__classPrivateFieldGet(this, _drinks));
    };
    Drink.prototype.putOnBoard = function () {
        var _this = this;
        var gameField = document.getElementById("gameField");
        var divEl = document.createElement("div");
        divEl.classList.add("bottle");
        divEl.classList.add("u-" + __classPrivateFieldGet(this, _name).toString());
        divEl.style.gridColumn = this.xPos.toString();
        divEl.style.gridRow = this.yPos.toString();
        var imgEl = document.createElement("img");
        switch (__classPrivateFieldGet(this, _name)) {
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
        divEl.id = __classPrivateFieldGet(this, _id).toString();
        divEl.appendChild(imgEl);
        gameField.appendChild(divEl);
        var counter = __classPrivateFieldGet(this, _timeToVanish);
        __classPrivateFieldSet(this, _timerId, setInterval(function () {
            if (counter === 0) {
                console.log("bottle of " + __classPrivateFieldGet(_this, _name) + " id:" + __classPrivateFieldGet(_this, _id) + " removed");
                _this.removeFromBoard();
            }
            counter--;
        }, 1000));
    };
    return Drink;
}());
_id = new WeakMap(), _name = new WeakMap(), _timeToVanish = new WeakMap(), _value = new WeakMap(), _timerId = new WeakMap(), _drinks = new WeakMap();
