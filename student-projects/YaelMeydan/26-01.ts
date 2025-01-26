console.clear();
const numbers1: number[] = [1, 2, 3, 24, 6];

// Check if any number is greater than 3
const hasLargeNumber = numbers1.some((num: number) => num > 3);
console.log(hasLargeNumber); // true

const strings: string[] = ["1a", "2d", "3f", "24h", "6f"];
console.log(strings);

// Check if any sting is "la"
const is_la = strings.some((str: string) => str === "la");
console.log(is_la); // true


const numbers2: number[] = [1, 2, 3, 4, 5];

// Check if all numbers are positive
const allPositive: = numbers2.every((num: number) => num > 0);
console.log(allPositive); // true