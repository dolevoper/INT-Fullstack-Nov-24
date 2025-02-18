var array = [];
var input;
var i = 0;
while (input !== null) {
    input = prompt("please enter a number");
    if (input !== null) {
        array[i] = Number(input);
    }
    i++;
}
for (var i_1 = 0; i_1 < array.length - 1; i_1++) {
    alert(array[i_1]);
}
