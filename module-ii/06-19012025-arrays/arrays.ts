const numbers: number[] = [1, 2, 3, 4, 5];                              // pronounced: number array
const strings: Array<string> = ["hello", "world", "what's", "up?"];     // pronounced: array of string
const stuff: Array<string | number | boolean> = ["hello", 1, 2, false]; // or: (string | number | boolean)[]
const moreStuff = ["😂", 4, function () { alert("hello"); }];
const numberNames = [                                                   // inferred as: (string | number)[][]
    [1, "one"],
    [2, "two"],
    [3, "three"],
];

const bar = numbers[2];             // number
const baz = strings[1];             // string
const foobar = stuff[3];            // string | number | boolean
const foo = numberNames[0][0];      // string | number
const qoux = numberNames[1];        // (string | number)[]

stuff[3] = "world";

// stuff = [];  ❌

const grades: number[] = [];
