// const num1 = Number(prompt("choose first number"));
// const num2 = Number(prompt("choose second number"));
// const num3 = Number(prompt("choose third number"));
// const num4 = Number(prompt("choose fourth number"));
// const num5 = Number(prompt("choose fifth number"));

// const array = [num1, num2, num3, num4, num5];
// const largest = array[0];

// for (let i = 0; i < array.length; i++){
// if (array[i] > largest) {
// largest = array[i];
// }
// }

// alert(largest);

// const sum = 0;

// for (let i = 0; i < 6; i++){
// const number = Number(prompt("choose num"));
// sum = sum + number;
// }

// alert(sum/5);

// const sum = 0;
// const finalIndex = 0;
// const amount = Number(prompt("choose number of numbers"));
// for (let i = 0; i < amount; i++){
//  const number = Math.floor(Math.random()*10);
//  alert("the number is " + number);
//  sum = sum + number;
// }

// alert("the average is " + sum/amount);

// const amount = Number(prompt("choose number of numbers"));
const min = 0;
const nextNumber = prompt('choose a num, write "STOP" to stop');
min = min + Number(nextNumber);
if (nextNumber === null) {
  alert("Stoping");
  location.reload();
} else {
  for (let i = 0; nextNumber !== null ; i++){
    nextNumber = prompt('choose a num, write "STOP" to stop');
    if (Number(nextNumber) < min && nextNumber !== null) {
      min = Number(nextNumber);
      alert("new minimum is " + min)
    } else if (nextNumber === null) {
      alert("Stoping");
      location.reload();
    }
   alert("min is " + min)
  }
}

