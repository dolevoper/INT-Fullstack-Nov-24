var sum = 0;
var base = 0;
var input = prompt("please enter numbers to average: " + "\n" + "click cancel, or type 'stop' to calculate result.");
while (input !== "stop" && input !== null) {
    sum += Number(input);
    base += 1;
    input = prompt("please enter another number:");
}
var average = sum / base;
alert(average);
