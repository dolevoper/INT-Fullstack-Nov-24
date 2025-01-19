// const numbers: number[] = [];
// for (let i = 0; i < 10; i++) {
//     numbers[i] = Number(prompt("Please enter a number"));
// }
// for (let i = 0; i < 10; i++) {
//     alert(numbers[i]);
// }
function getNumbers() {
    var toContinue = true;
    var number2 = [];
    var index = 0;
    while (toContinue) {
        number2[index] = Number(prompt("Please enter a number"));
        index++;
        toContinue = confirm("Do you want to continue?");
    }
    //print the numbers
    alert(number2.join(", "));
    // for (let i = 0; i < number2.length; i++) {
    //     alert(number2[i]);
    // }
}
getNumbers();
