const bar = (function () {
    const secret = "bar";
    return function () {
        console.log(secret);
    };
})();
// function double(x: number) {
//     return x * 2;
// }
// function triple(x: number) {
//     return x * 3;
// }
// function quadruple(x: number) {
//     return x * 4;
// }
// ❌❌❌
function multiply(x, y) {
    return x * y;
}
const multiplyBy = (x) => (y) => x * y;
const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);
