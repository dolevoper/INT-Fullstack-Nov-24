const amountOfNumbers = Number(prompt("Please enter the amount of numbers you want to insert:"));

const array :number[] = [];

for(let i=0; i<amountOfNumbers; i++){

    array[i] = Number(prompt("please enter a number:"));

}

for(let l =0; l < array.length; l++){
let minNumber = Infinity;

                 for(let i = 0 ; i < array.length ; i++ ){

if(array[i + l]<minNumber){

minNumber = array[i + l];

if(array[0 + l] > minNumber){

array[i + l] = array[0 + l];
array[0 + l] = minNumber;
}

}


                                        }


}


if(array.length/2 !== Math.floor(array.length/2)){

alert(array[(amountOfNumbers + 1)/2 -1])
}

else{
const average = (amountOfNumbers/2 + (amountOfNumbers/2 +1))/2

alert(average)
}