//filter:
var indexnumbers = [3, 78, 90, 55, 37, 23, 45, 62];
var evennumbers = indexnumbers.filter(function (num) { return num % 2 === 0; });
console.log(evennumbers);
//find:
var indexnumbers = [3, 78, 90, 55, 37, -23, 45, 62];
var negativenumber = indexnumbers.find(function (num) { return num < 0; });
console.log(negativenumber);
//some + every:
console.clear();
var numbers1 = [1, 2, 3, 24, 6];
// Check if any number is greater than 3
var hasLargeNumber = numbers1.some(function (num) { return num > 3; });
console.log(hasLargeNumber); // true
var strings = ["1a", "2d", "3f", "24h", "6f"];
console.log(strings);
// Check if any sting is "la"
var is_la = strings.some(function (str) { return str === "la"; });
console.log(is_la); // true
var numbers2 = [1, 2, 3, 4, 5];
// Check if all numbers are positive
var allPositive = numbers2.every(function (num) { return num > 0; });
console.log(allPositive); // true
