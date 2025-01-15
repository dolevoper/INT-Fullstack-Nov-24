let sum : number = 0; 

let base : number = 0;

let input : string | null = prompt("please enter numbers to average: " + "\n" + "click cancel, or type 'stop' to calculate result.");

while(input !== "stop" && input !== null){

sum += Number(input);

base += 1;

input = prompt("please enter another number:");

}

let average : number = sum/base;

alert(average);
