for (var i = 0; i < 10; i++) {
    alert("hello!");
}
var numberOfStudents = Number(prompt("Please enter the number of students"));
for (var i = 0; i < numberOfStudents; i++) {
    alert("hello student #" + (i + 1));
}
// Exmaple -
// Input: 80
// Output: 1, 2, 4, 8, 16, 32, 64
// Math.pow ❌
// ** ❌
var num = Number(prompt("Enter a number"));
for (var i = 1; i < num; i *= 2) {
    alert(2);
}
// #        i (powers of 2)
// ----------
// 1        1
// 2        2
// 3        4
// 4        8
// 5        16
// prompt for 5 numbers
// after getting all numbers, alert all of them (comma separated)
// skip odd numbers
var message = "";
for (var i = 0; i < 5; i++) {
    var number = Number(prompt("enter a number"));
    if (number % 2 === 0) {
        continue;
    }
    message += number + (i === 4 ? "" : ", ");
}
alert(message);
