//filter:
const indexnumbers: number[] = [3 ,78 , 90 ,55 ,37 ,23, 45, 62];
const evennumbers = indexnumbers.filter((num: number) => num % 2 === 0);
console.log(evennumbers);

//find:
const indexnumbers: number[] = [3 ,78 , 90 ,55 ,37 ,-23, 45, 62];
const negativenumber = indexnumbers.find((num:number) => num < 0);
console.log(negativenumber);

//some + every:

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