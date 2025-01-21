var numbers = [1, 2, 3, 4, 5]; // pronounced: number array
var strings = ["hello", "world", "what's", "up?"]; // pronounced: array of string
var stuff = ["hello", 1, 2, false]; // or: (string | number | boolean)[]
var moreStuff = ["😂", 4, function () { alert("hello"); }];
var numberNames = [
    [1, "one"],
    [2, "two"],
    [3, "three"],
];
var bar = numbers[2]; // number
var baz = strings[1]; // string
var foobar = stuff[3]; // string | number | boolean
var foo = numberNames[0][0]; // string | number
var qoux = numberNames[1]; // (string | number)[]
stuff[3] = "world";
// stuff = [];  ❌
var grades = [];
